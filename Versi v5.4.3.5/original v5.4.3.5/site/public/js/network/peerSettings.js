/**
 * JS-скрипт для разделов SIP-шлюз и H323-шлюз.
 * В ходе редизайна разделов (https://projects.trueconf.com/bin/view/Projects/GatewaySettings)
 * для удобства сопровождения общий функционал был вынесен во внешний скрипт peerSettings.js
 * После согласования с PM было решено заменить термин "пир" (en: "peer")
 * термином "соединение" (en: "connection"). Далее эти термины означают одну и ту же сущность.
 */

/**
 * Messages
 * */
var MESSAGE_PEER_NAME_IS_NOT_UNIQUE = _("Configuration of %protocol connection with this name already exists. The name must be unique.");
var MESSAGE_PEER_HOST_IS_NOT_UNIQUE = _("Configuration of %protocol connection to this host already exists. The host must be unique.");
var MESSAGE_ON_PEER_CREATED = _("%protocol connection configuration was successfully created.");
var MESSAGE_ON_PEER_DELETED = _("%protocol connection configuration was successfully removed.");
var MESSAGE_PEER_WAS_ALREADY_DELETED = _("This configuration for %protocol connection doesn't exist.");
var MESSAGE_PLEASE_ENTER_VALID_VALUE = _("Please enter valid value.");
var MESSAGE_CHANGE_ENTER_ALLOWED_VALUE = _("Please select the avaliable option.");
var MESSAGE_MAX_SESSION_INTERVAL_RANGE = "[ 90 - 86400 ]"

var MESSAGE_REQUEST_ERROR = _("Request error");

var TEXT_EDIT_PEER_TITLE = _("Edit %protocol connection configuration.");
var TEXT_CREATE_PEER_TITLE = _("Create new %protocol connection configuration.");
var TEXT_SAVE = _("Save");
var TEXT_CREATE = _("Create");


/**
 * Определяем фразы
 *
 * Спецификация: https://projects.trueconf.com/bin/view/Projects/TerminalRegistrationStatus
 * @type {string}
 */
var text_defaultStatus = _("please wait...");
var text_unknownErrorMessage = _("Unknown error.");
var text_unknownMessage = _("Unknown.");
var text_connectedMessage = _("Registered.");
var text_wrongAuthorizationMessage = _("Authorization error.");
var text_invalidServerMessage = _("Failed to connect to server.");
var text_checkingMessage = _("checking");
var text_pendingMessage = _("Registering...");
var text_RegistrationOffMessage = _("Registration is off");

/**
 * Обрамляем фразы в html-теги.
 */
var defaultStatus = '<img src=\"/img/spinner-16.gif\" id=\"spinnerdefault\">&nbsp<span class="green" title="' + text_defaultStatus + '">' + text_defaultStatus + '</span>';
var unknownErrorMessage = '<span class="red" title="' + text_unknownErrorMessage + '">' + text_unknownErrorMessage + '</span>';
var unknownMessage = '<span class="#555" title="' + text_unknownMessage + '">' + text_unknownMessage + '</span>';
var connectedMessage = '<span class="green" title="' + text_connectedMessage + '">' + text_connectedMessage + '</span>';
var wrongAuthorizationMessage = '<span class="red" title="' + text_wrongAuthorizationMessage + '">' + text_wrongAuthorizationMessage + '</span>';
var invalidServerMessage = '<span class="red" title="' + text_invalidServerMessage + '">' + text_invalidServerMessage + '</span>';
var pendingMessage = '<span title="' + text_pendingMessage + '">' + text_pendingMessage + '</span>';
var registrationOffMessage = '<span title="' + text_RegistrationOffMessage + '">' + text_RegistrationOffMessage + '</span>';


/**
 * https://bug-tracking.trueconf.com/show_bug.cgi?id=24552#c2
 * 0 - ничего не показываем
 * 1 - connected
 * 2,3 - wrong authorization
 * 4 - invalid server
 *
 * К требованием добавились сообщения: "checking" (в рамках Bug 41616) для статуса 0
 * и "unknown error" (Bug 41784) для статуса -1.
 *
 */
var gatewayStatuses = [];
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_DEFAULT] = defaultStatus;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_UNKNOWN] = unknownErrorMessage;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_VALID] = connectedMessage;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_FORBIDDEN] = wrongAuthorizationMessage;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_CAN_NOT_CHECK] = wrongAuthorizationMessage;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_SERVER_UNREACHABLE] = invalidServerMessage;
gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_PENDING] = pendingMessage;


/**
 * Дополнительный внутренний статус для случая, когда N раз подряд возвращается статус 0.
 * Где N - максимальное количество опросов статуса соединения (MAX_PEER_UNKNOWN_STATUS_REQUEST_COUNT задаётся в контроллере)
 */
var LAST_AUTHORIZATION_RESULT_UNKNOWN_AFTER_TIMEOUT = 8;
gatewayStatuses[LAST_AUTHORIZATION_RESULT_UNKNOWN_AFTER_TIMEOUT] = '<span style="color: #9E9E9E" title="' + text_checkingMessage + '">' + text_checkingMessage + '</span>';

/** Общие переменные*/

var peers = [];
var peer = {};
var outputPeer = {};

var globalSettings = {};
var outputGlobalSettings = {};

var peer_id = null;

var mapId = [];

var peerModalWindow = {};
var dialogQuestionWindow = {};

var saveBtnHandler;

/**
 *
 * @param date
 * @returns {string}
 */
function dateRender(date) {
    var d = parseInt(date) * 1000;
    if (d > 0) {
        var dateObject = new Date(d);
        return "%date %time"
            .replace('%date', dateObject.toLocaleDateString('en-GB'))
            .replace('%time', dateObject.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit'
            }))
            .replaceAll('/', '.');
    }

    return "-";
}

/**
 *
 * @param data
 */
function peersStatusesRender(data) {
    /**
     * Спецификация: https://projects.trueconf.com/bin/view/Projects/TerminalRegistrationStatus
     * @type {string}
     */
    gatewayStatuses[ENUM_LAST_AUTHORIZATION_RESULT_UNKNOWN] = Server.getServerStatusFromStorage() === Server.STATUSES_LIST.RUNNING
        ? unknownErrorMessage
        : unknownMessage;

    data.peers.forEach(function (entry) {
        var index = mapId[entry.id];

        if (index === undefined) {
            return;
        }

        if (entry.registerStrategy === 0) {
            $('#peer' + index + ' .status').html(registrationOffMessage);
            return;
        }

        /**
         * Проверка превышения максимального количества опросов соединения со статусом 0
         */
        if (entry.lastAuthorizationResult === 0) {
            if (peers[index].unknown_status_request_count >= MAX_PEER_UNKNOWN_STATUS_REQUEST_COUNT) {
                entry.lastAuthorizationResult = LAST_AUTHORIZATION_RESULT_UNKNOWN_AFTER_TIMEOUT;
            } else {
                peers[index].unknown_status_request_count++;
            }
        }

        var peer_status = typeof (gatewayStatuses[entry.lastAuthorizationResult]) === "undefined"
            ? ENUM_LAST_AUTHORIZATION_RESULT_UNKNOWN
            : entry.lastAuthorizationResult;

        peers[index].lastAuthorizationResult = peer_status;
        $('#peer' + index + ' .status').html(
            entry.registerStrategy === 2
                ? gatewayStatuses[peer_status] + "<br><p title='" + dateRender(entry.lastCheckTime) + "'></p>" + _("Last checked:") + " " + dateRender(entry.lastCheckTime)
                : gatewayStatuses[peer_status]);

    });

    currentPeerStatusReload();
    setTimeout(peersStatusesRefresh, PEERS_STATUSES_RELOAD_TIMEOUT);
}

function peersStatusesRefresh() {
    $.ajax({
        url: PEERS_CONTROLLER + "?fields[]=lastAuthorizationResult&fields[]=registerStrategy&fields[]=lastCheckTime",
        type: 'GET',
        dataType: 'json',
        success: peersStatusesRender,
        error: function () {
            $(document).trigger('display-header-error', {message: MESSAGE_REQUEST_ERROR});
        }
    });
}

/** Общие функции */

function currentPeerStatusReload() {
    var status = gatewayStatuses[peer.lastAuthorizationResult];
    $('#peerModalForm #defaultStatus').html(status);
}

function currentPeerStatusReset() {
    $('#peerModalForm #defaultStatus').html(defaultStatus);
}

function isReservedPeer(peer_id) {
    if (peer_id == undefined) {
        return false;
    }

    for (var reservedPeer in reservedPeers) {
        if (reservedPeers[reservedPeer].id === peer_id)
            return true;
    }
    return false;
}

function inReservedNameArray(name) {
    for (id in reservedPeers) {
        if (name === reservedPeers[id].name) {
            return true;
        }
    }

    return false;
}

/**
 * Функция проверяет уникальность поля name и связки hostname:port SIP(H323)-пира
 *
 * */
function peerIsUnique() {

    var errorElem = $("p#uniqueNameFieldError");
    var new_name = outputPeer.name;
    var new_port = outputPeer.port !== undefined ? outputPeer.port : peer.port;
    var new_hostname = outputPeer.hostname !== undefined ? outputPeer.hostname : peer.hostname;

    if (!isReservedPeer(outputPeer.id) && inReservedNameArray(new_name)) {
        displayNotUniqueNameMessage(new_name);
        return false;
    }

    for (var counter = 0; counter < peers.length; counter++) {

        var entity = peers[counter];

        if (entity.id === peer.id) {
            continue;
        }

        if (entity.name === new_name) {
            displayNotUniqueNameMessage(new_name);
            return false;
        }

        if (entity.hostname === new_hostname && parseInt(entity.port) === parseInt(new_port)) {
            displayNotUniqueHostMessage(new_hostname, new_port);
            return false;
        }
    }

    if (errorElem[0] !== undefined) {
        errorElem.remove();
    }

    return true;
}

function displayNotUniqueNameMessage(name) {
    var errorElem = $("p#uniqueNameFieldError");
    if (errorElem[0] !== undefined) {
        return false;
    }

    var nameField = $('#name.peer-value-param');
    var label = "<label id='uniqueNameFieldError' class='error unique-error'>" + MESSAGE_PEER_NAME_IS_NOT_UNIQUE + "</label>";
    nameField.parent().append(label);
    nameField.focus();
    disableSaveBtn();
}

function displayNotUniqueHostMessage(hostname, port) {
    var errorElem = $("p#uniqueHostFieldsError");
    if (errorElem[0] !== undefined) {
        return false;
    }

    var nameField = $('#name.peer-value-param');
    var label = "<label id='uniqueHostFieldsError' class='error unique-error'>" + MESSAGE_PEER_HOST_IS_NOT_UNIQUE + "</label>";
    nameField.parent().append(label);
    $('#hostname.peer-value-param').focus();
    disableSaveBtn();
}

function displayServerFieldErrorMessage(field_id, message) {
    var errorElem = $("p#uniqueNameFieldError");
    if (errorElem[0] !== undefined) {
        return false;
    }

    var nameField = $('#' + field_id + '.peer-value-param');
    var label = "<label class='error unique-error'>" + message + "</label>";
    nameField.parent().append(label);
    nameField.focus();
    disableSaveBtn();
}

function peerListGet() {
    $.ajax({
        url: PEERS_CONTROLLER,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            peers = data.peers;
            peerListRender();
        },
        error: function () {
            $(document).trigger('display-header-error', {message: MESSAGE_REQUEST_ERROR});
        }
    });
}

function disableSaveBtn() {
    var btSave = $('.peerButtonSet#saveBtn');

    if (btSave.prop('disabled') === true) {
        return;
    }

    btSave.addClass('ui-state-disabled');
    btSave.prop('disabled', true);

    $('.error').prop('title', function () {
        return this.innerText
    });
}

function enableSaveBtn(event) {
    var btSave = $('.peerButtonSet#saveBtn');

    if (btSave.prop('disabled') === false) {
        return;
    }

    btSave.removeClass('ui-state-disabled');
    btSave.prop('disabled', false);
}

function deletePeer() {
    var peer_id = isReservedPeer(peer.id) ? peer.id.replace('#', '@') : peer.id;

    $.ajax({
        url: PEERS_CONTROLLER + peer_id,
        type: 'DELETE',
        success: function (data) {
            peerListRender();

            if (data.id === peer.id) {
                Server.setServerMessage(MESSAGE_ON_PEER_DELETED, Server.MESSAGE_TYPE.NOTE, DISPlAY_MESSAGE_DURATION);
                peers.splice(mapId[peer_id], 1);
                mapId.splice(peer_id, 1);
                getGlobalSettings();
            } else {
                $(document).trigger('display-header-error', {message: _(t._error)});
            }
        },
        error: function (err) {
            if (err.responseJSON.error.code === 404) {
                $(document).trigger('display-header-error', {message: _(t._error) + ": " + MESSAGE_PEER_WAS_ALREADY_DELETED});
                peers.splice(mapId[peer_id], 1);
                mapId.splice(peer_id, 1);
                peerListRender();
            } else {
                $(document).trigger('display-header-error', {message: MESSAGE_REQUEST_ERROR});
            }

        }
    });
    dialogQuestionWindow.dialog('close');
    peerModalWindow.dialog('close');
}

function displayServerErrorsModal(err) {
    if (messages.length === 0) {
        return;
    }

    var error_messages = "";

    messages.forEach(function (item) {
        error_messages += item;
    });

    var server_error_modal = $('<div>' + error_messages + '</div>');

    server_error_modal.dialog({
        title: _(MESSAGE_REQUEST_ERROR),
        modal: true,
        buttons: [
            {
                text: _("Ok"),
                click: function (event) {
                    server_error_modal.dialog("close");
                }
            }
        ],
        close: function () {
            messages = [];
        }
    });
}

var messages = [];

function addMessage(message) {
    messages.push("<p>" + message + "</p><br>");
}

function displayErrors(error) {
    if (typeof (error) !== 'object') {
        return;
    }

    var errors = error.errors;
    var locations = [];
    errors.forEach(function (err) {
        /**
         * Если ошибка неизвестная, берём сообщение из ошибок API
         */
        if (err.reason !== 'uniqueValueAlreadyInUse') {
            if (err.location !== undefined) {
                if (locations.indexOf(err.location) === -1) {
                    displayServerFieldErrorMessage(err.location, err.message);
                    locations.push(err.location);
                }
                return;
            }
            addMessage(err.message);
            return;
        }

        switch (err.location) {
            case 'name':
                displayNotUniqueNameMessage(outputPeer.name);
                break;
            case 'hostname & port':
                var new_hostname = outputPeer.hostname !== undefined ? outputPeer.hostname : peer.hostname;
                var new_port = outputPeer.port !== undefined ? outputPeer.port : peer.port;
                displayNotUniqueHostMessage(new_hostname, new_port);
                break;
        }
    });
    displayServerErrorsModal();
}

function displayRequestResultMessage() {
    Server.setServerMessage(_('The settings are saved'), Server.MESSAGE_TYPE.NOTE, DISPlAY_MESSAGE_DURATION);
}

function stringParamsTrim(entity) {
    for (param in entity) {
        entity[param] = typeof (entity[param]) === "string" ? entity[param].trim() : entity[param];
    }
}

function createPeerPreset() {

    if (!peerIsUnique()) {
        return;
    }

    stringParamsTrim(outputPeer);

    if (outputPeer.noRtpmapForAudioStaticPayload !== undefined) {
        outputPeer.noRtpmapForVideoStaticPayload = outputPeer.noRtpmapForAudioStaticPayload;
    }

    $.ajax({
        url: PEERS_CONTROLLER,
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(outputPeer),
        success: function (data) {
            if (!data.hasOwnProperty("peer")) {
                return;
            }

            peers.push(data.peer);
            peer = data.peer;
            if (outputPeer.connectionRole !== undefined) {
                savePeerRole();
            }

            peerModalWindow.dialog('close');
            peerListRender();
            Server.setServerMessage(MESSAGE_ON_PEER_CREATED, Server.MESSAGE_TYPE.NOTE, DISPlAY_MESSAGE_DURATION);
        },
        error: function (err) {
            displayErrors(err.responseJSON.error);
        }
    });
}

function savePeerPreset() {

    savePeerRole();
    if (JSON.stringify(outputPeer) === "{}" || !peerIsUnique()) {
        return;
    }

    if (outputPeer.noRtpmapForAudioStaticPayload !== undefined) {
        outputPeer.noRtpmapForVideoStaticPayload = outputPeer.noRtpmapForAudioStaticPayload;
    }

    stringParamsTrim(outputPeer);

    var peer_id = isReservedPeer(peer.id) ? peer.id.replace('#', '@') : peer.id;
    $.ajax({
        url: PEERS_CONTROLLER + peer_id,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(outputPeer),
        success: function (data) {
            if (!data.hasOwnProperty("peer")) {
                return;
            }

            var index = mapId[peer.id];
            peer = data.peer;
            peers[index] = data.peer;
            peerListRender();
            displayRequestResultMessage();
            peerModalWindow.dialog('close');
        },
        error: function (err) {
            displayErrors(err.responseJSON.error);
        }
    });
}

function savePeerRole() {

    var roles = outputPeer.connectionRole;

    if (roles === undefined) {
        return;
    }

    for (var role in roles) {
        outputGlobalSettings[role + 'Id'] = outputPeer.connectionRole[role] ? peer.id : '';
    }

    saveGlobalSettings();
    delete outputPeer.connectionRole;
    if (JSON.stringify(outputPeer) === "{}") {
        peerModalWindow.dialog('close');
    }
}

function saveGlobalSettings() {

    stringParamsTrim(outputGlobalSettings);

    $.ajax({
        url: GLOBAL_SETTINGS_CONTROLLER,
        type: 'PUT',
        dataType: 'json',
        data: outputGlobalSettings,
        success: function (data) {
            if (data[PROTOCOL_NAME] === undefined) {
                $(document).trigger('display-header-error', {message: _(t._error)});
                return;
            }

            globalSettings = data[PROTOCOL_NAME];
            globalSettingsRender();
            peerListRender();

            Server.setServerMessage(_("The settings are saved"), Server.MESSAGE_TYPE.NOTE, DISPlAY_MESSAGE_DURATION);
        },
        error: function (data) {
            $(document).trigger('display-header-error', {message: MESSAGE_REQUEST_ERROR});
        }
    });
}

function openChangePresetDialog() {
    var presetDialog = $('#changePresetDialog');
    presetDialog.dialog({
        width: 'auto',
        resizable: false,
        modal: true
    });
}

function closeChangePresetDialog() {
    var presetDialog = $('#changePresetDialog');
    if (presetDialog.parent().css('display') === "block" && presetDialog.css('display') === "block") {
        presetDialog.dialog('close');
    }
}

function peerEnabledCodecsRender() {
    if (peer.enabledCodecs === null) {
        $('.peer-enabled-codecs-checkbox').prop('checked', true);
        return;
    }

    var enabledCodecs = peer.enabledCodecs.split(' ');

    $('.peer-enabled-codecs>input').each(function(key, peerCodec){
        var codecIsEnabled = enabledCodecs.indexOf(peerCodec.name) !== -1;
        $('#peer' + peerCodec.name).prop('checked', codecIsEnabled);
    });
}

function enabledCodecsRender() {
    if (globalSettings.enabledCodecs === null) {
        $('.enabled-codecs-checkbox:not(#H265)').prop('checked', true);
        return;
    }

    var codecs = globalSettings.enabledCodecs.split(' ');

    codecs.forEach(function (item) {
        $('#' + item).prop('checked', true);
    });
}

function enabledCodecsGet() {
    var codecs = [];
    var codecsCheckboxes = $('.enabled-codecs-checkbox');
    for (var i = 0; i < codecsCheckboxes.length; i++) {
        if (codecsCheckboxes[i].checked) {
            codecs.push(codecsCheckboxes[i].name);
        }
    }

    return codecs.join(' ');
}

function peerEnabledCodecsGet() {
    var codecs = [];
    var codecsCheckboxes = $('.peer-enabled-codecs-checkbox');
    for (var i = 0; i < codecsCheckboxes.length; i++) {
        if (codecsCheckboxes[i].checked) {
            codecs.push(codecsCheckboxes[i].name);
        }
    }

    return codecs.join(' ');
}

function parseDefaultVoIPServerId() {
    if (globalSettings.defaultVoIPServerId === undefined) {
        return;
    }
    var defaultVoIPServerId = globalSettings.defaultVoIPServerId.split(PROTOCOL_NAME + '\\')[1];
    globalSettings.defaultVoIPServerId = defaultVoIPServerId !== undefined ?
        defaultVoIPServerId : globalSettings.defaultVoIPServerId;
}

function peerConnectionRoleRender() {
    for (var role in peer.connectionRole) {
        $('#' + role).prop('checked', peer.connectionRole[role]);
    }
}

function connectionRoleIsNotModifed() {
    var similarityLevel = 0;
    var maxLevel = 0;

    for (var reservedPeer in reservedPeers) {
        similarityLevel += outputPeer.connectionRole[reservedPeer] !== undefined && outputPeer.connectionRole[reservedPeer] !== peer.connectionRole[reservedPeer] ? 0 : 1;
        maxLevel++;
    }

    return similarityLevel === maxLevel;
}

/**
 * Функция очищает параметры эталонного объекта (peer)
 * при открытии формы создания соединения для корректного определения
 * измененных параметров.
 * @param peer эталонный объект соединения (содержит значения по умолчанию)
 */
function resetNewPeerParams(peer) {
    for (var prop in peer) {
        peer[prop] = undefined;
    }

    peer.connectionRole = {};
    for (var reservedPeer in reservedPeers) {
        peer.connectionRole[reservedPeer] = false;
    }
}

function getGlobalSettings() {
    $.ajax({
        url: GLOBAL_SETTINGS_CONTROLLER,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data[PROTOCOL_NAME] === undefined) {
                $(document).trigger('display-header-error', {message: _(t._error)});
                return;
            }

            globalSettings = data[PROTOCOL_NAME];
            parseDefaultVoIPServerId();
            peerListRender();
        },
        error: function () {
            $(document).trigger('display-header-error', {message: MESSAGE_REQUEST_ERROR});
        }
    });
}