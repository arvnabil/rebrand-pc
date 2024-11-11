/* global t, tcm, Confirm, HTMLElement */

/**
 * Объект Server, обрабатывает верхнюю кнопку и таймер обновления статуса сервера
 */
var Server = {
    /**
     * Макисмальное время ожидания получения статуса сервера. Т.к. у нас теперь статусы сохраняются
     * в local storage, когда мы перезапрашиваем статус, мы пишем в локал сторейдж что идет процесс обновления статуса.
     * Нуждно для того, что-бы другие вкладки не перезапрашивали статус (сделать по таймеру невозможно, по причине ассинхронности
     * таймеров в активных и неактивных вкладках). Если пользователь закроет браузер, когда идет обновление статуса, то после
     * открытия браузера статусы не будут обновляться, т.к. скрипт будет думать что статус в процессе обновления.
     * Чтобы исправить это, ждем, например, 30 секунд, если спустя 30 секунд флаг процесса обновления статуса не изменился,
     * значит надо перезапросить статус.
     */
    _maxStatusWaitTime: 30000,
    /**
     * Список ответов от сервера
     */
    STATUSES_LIST: {
        STOPPED: 1,
        STARTING: 2,
        STOPPING: 3,
        RUNNING: 4,
        UNREGISTERED: 5,
        PENDING: 6,
        PAUSED: 7,
        WIN32_ERROR_SERVICE_DOES_NOT_EXIST: 1060
    },
    /**
     * Локаль для названий статусов
     */
    STATUSES_LOCALE: {
        0: t._na,
        1: t._stopped,
        2: t._starting,
        3: t._stopping,
        4: t._running,
        5: t._stopped,
        6: t._pending,
        7: t._paused
    },
    /**
     * Список ответов типа лицензий от сервера
     */
    LICENSES_LIST: {
        /**
         * Сервер незарегистрирован
         * @type Number
         */
        UNREGISTERED: 0,
        /**
         * Сервер зарегистрирован
         * @type Number
         */
        REGISTERED: 1,
        /**
         * Сервер запущен в триальном режиме
         * @type Number
         */
        TRIAL: 2,
        /**
         * На сервере начата оффлайн регистрация
         * @type Number
         */
        START_OFFLINE_REG: 3
    },
    /**
     * Локаль для названия лицензий
     */
    LICENSES_LOCALE: {
        0: t._unregister,
        1: t._registered
    },
    MESSAGE_TYPE: {
        ERROR: 1,
        NOTE: 2
    },
    /**
     * Таймер обновления статусов
     */
    _statusUpdateTimer: null,
    /**
     * Объект для хранения ссылок (старт, рестарт, стоп и т.д.)
     */
    _actions: {
        /**
         * Локаль для ссылок
         */
        locale: {
            'start': t._start,
            'stop': t._stop,
            'reload': t._restart,
            'log': t._view_log,
            'preferences': t._preferences + '...'
        },
        /**
         * Ключи для ссылок = айди ссылки
         */
        keys: ['start', 'stop', 'reload', 'log', 'preferences']
    },
    /**
     * Объект для основной кнопки
     */
    actionButton: {
        /**
         * Рендерит основную кнопку, или возвращает ее контейнер, если он уже отрендерен
         */
        get: function () {
            if (Server.actionButton._rendered === null) {
                Server.actionButton._rendered = Server.actionButton._render();
            }
            return Server.actionButton._rendered;
        },
        /**
         * Рендерит основную кнопку
         */
        _render: function () {
            var button = $('<div id="manage" class="btn-manage">');
            //Создаем название кнопки, 
            var buttonTitle = $('<div>');
            buttonTitle.append('<div class="btn-event"><span>' + t._system + '</span><input id="act" type="hidden" value="lock" /></div>');
            buttonTitle.append($('<div class="btn-arrow">').append(Server.actionButton.buttonArrow));
            //По клику на кнопку, выводим или скрываем меню
            buttonTitle.click(function () {
                if (Server.actionButton._menuData.hasClass("none")) {

                    Server.actionButton.showButtonMenu();
                } else {
                    Server.actionButton.hideButtonMenu();
                }
            });
            button.bind("mouseleave", function(){
                if (Server.actionButton._menuData.hasClass("none")) {
                    return;
                }
                $('#manage .btn-event').click();
            });

            button.append(buttonTitle);

            //Меню кнопки
            var menu = $('<ul>');
            var end_elem = Server.actionButton.clearElem.getButton();
            menu.append(end_elem);
            Server.actionButton._menu = menu;

            button.append(Server.actionButton._menuData.html(menu));
            return button;
        },
        /**
         * Треугольник , отображающий открыто, или закрто меню
         */
        buttonArrow: $('<div class="triangle-down"></div>'),
        /**
         * Пустой последний элемент меню
         */
        clearElem: {
            /**
             * Кнопка открытия меню
             */
            getButton: function () {
                return Server.actionButton.clearElem._renderedButton;
            },
            //Отрендеренная кнопка языкового меню
            _renderedButton: $('<li>')
        },
        /**
         * Ф-я очищения меню
         */
        clearMenu: function () {
            var menu = $('<ul>');
            var end_elem = Server.actionButton.clearElem.getButton();
            menu.append(end_elem);
            Server.actionButton._menu = menu;
            Server.actionButton._menuData.html(Server.actionButton._menu);
        },
        /**
         * Ф-я добавляения пунка меню в список меню
         * @param key ключ меню (означает проперти в данном объекте)
         * @param name тест в ссылке меню
         */
        addMenuItem: function (key, name) {
            var li = $('<li class="action">');
            li.data("action", key);
            //По клику на пункт меню, ищем в объекте Server.actionFunctions ф-ю, имеющую имя key, и выполняет ее
            li.click(function () {
                var _this = $(this);
                var key = _this.data("action");
                if (!Server.actionFunctions.hasOwnProperty(key)) {
                    return;
                }

                var fn = Server.actionFunctions[key];
                fn();
            });
            li.text(name);
            //Добавляем пункт меню до последнего элемента
            Server.actionButton.clearElem.getButton().before(li);
        },
        /**
         * Показать меню
         */
        showButtonMenu: function () {
            Server.actionButton._menuData.removeClass("none");
            Server.actionButton.buttonArrow.removeClass('triangle-down');
            Server.actionButton.buttonArrow.addClass('triangle-up');

        },
        /**
         * СКрыть меню
         */
        hideButtonMenu: function () {
            Server.actionButton._menuData.addClass("none");
            Server.actionButton.buttonArrow.removeClass('triangle-up');
            Server.actionButton.buttonArrow.addClass('triangle-down');

        },
        /**
         * Добавляется к $('document') , для того, чтобы закрывать меню по клику на любое другое место кроме меню
         * @param {Event} e
         */
        _hideButtonGlobal: function (e) {
            if (!$("#manage.btn-manage").find($(e.target)).length) {
                Server.actionButton.hideButtonMenu();
            }
        },
        /**
         * ?
         */
        _added: false,
        /**
         * Отрендеренное меню
         */
        _menu: null,
        /**
         * Отрендеренные пункты меню
         */
        _menuData: $('<div class="btn-list none">'),
        /**
         * Вся отрендеренная кнопка
         */
        _rendered: null
    },
    /**
     * Ф-и для меню, доолжно быть все понятно...
     */
    actionFunctions: {
        start: function () {
            var start_server_message = t._start_server.replace('%server_name', tcm.server_name)
                .replace('[b]', '<b class="green">')
                .replace('[/b]', '</b>');
            Confirm.func(start_server_message, Server.startServer);
        },
        stop: function () {
            var stop_server_message = t._stop_server.replace('%server_name', tcm.server_name)
                .replace('[b]', '<b class="red">')
                .replace('[/b]', '</b>');
            Confirm.func(stop_server_message, Server.stopServer);
        },
        reload: function () {
            var restart_server_message = t._restart_server.replace('%server_name', tcm.server_name)
                .replace('[b]', '<b class="red">')
                .replace('[/b]', '</b>');
            Confirm.func(restart_server_message, Server.restartServer);
        },
        log: function () {
            window.open(tcm.logUrl);
        },
        preferences: function () {
            window.open(tcm.preferencesUrl);
        }
    },
    cntLoadEffect: 0,
    /**
     * Затемняет экран и добавляет прогрессбар
     * @param {String|DOMElement} msg cообщение возле прогрессбара
     */
    showLoadEffect: function (msg) {
        msg = msg ? msg : t._processing;
        if ($("#loading-background").length === 1) {
            $("#loading-background").show();
        } else {
            $("body").append('<div id="loading-background"></div>');
        }

        var cn = $("#loadMessageBlock");
        if (cn.length === 1) {
            cn.empty();
        } else {
            cn = $('<div id="loadMessageBlock" class="cont"></div>');
            $("body").append(cn);
        }

        cn.append('<img src="/img/spinner.gif" />');

        if (typeof msg === 'object') {
            if (msg instanceof HTMLElement || msg instanceof $) {
                cn.append(msg);
                return;
            }
        }

        var msgBlock = $('<div class="msg"></div>');
        msgBlock.text(msg);
        cn.append(msgBlock);
    },
    /**
     * Отображает диалоговое окно с предложением перезагрузки сервера.
     * https://bug-tracking.trueconf.com/show_bug.cgi?id=42879#c3
     * https://bug-tracking.trueconf.com/show_bug.cgi?id=48226#c5
     */
    showRestartDialog: function () {
        var restart_server_message = t._restart_server_to_apply_changes.replace('%server_name', tcm.server_name)
            .replace('[b]', '<b class="server-name">')
            .replace('[/b]', '</b>');
        var dialog = $('<div id="restart-message-dialog">' + restart_server_message + '.' + '</div>');
        dialog.dialog({
            title: t._warning,
            width: 'auto',
            autoOpen: true,
            modal: true,
            draggable: true,
            resizable: false,
            buttons: [
                {
                    text: _("Restart"),
                    click: function () {
                        Server.restartServer();
                        $(this).dialog("close");
                    }
                },
                {
                    text: _("Cancel"),
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    },
    /**
     * Хранит состояние перезагрузки VCS и Apache в соответствующих битах
     * VCS - 1
     * Apache - 2
     * @type Number
     */
    restarting_state: 0,
    /**
     * Устанавливает факт начала перезагрузки VCS и/или Apache
     * @param {type} mask
     * @returns {undefined}
     */
    addServersStatus: function (mask) {
        if (mask) {
            Server.restarting_state |= mask;
//            console.log(Server.restarting_state);
        }
    },
    /**
     * Устанавливает факт окончания перезагрузки VCS и/или Apache
     * @param {type} mask
     * @returns {undefined}
     */
    removeServersStatus: function (mask) {
        if (mask) {
            Server.restarting_state ^= mask;
//            console.log(Server.restarting_state);
        }
    },
    /**
     * Удаляет затемнение экрана
     */
    removeLoadEffect: function () {
//        console.log(Server.restarting_state);
        if (!Server.restarting_state) {
            $("#loading-background + .cont").remove();
            $("#loading-background").remove();
        }
    },
    /**
     * Обновить тайтл статуса, стаиус это натипе "Статус сервера: работает, зарегистрирован"
     * @param {Number} status статус сервера
     */
    updateStatusTitle: function (status) {
        var license = status === Server.STATUSES_LIST.UNREGISTERED ? 0 : 1;

        var serverStatus = $('#server-status');
        serverStatus.empty();

        serverStatus.append('<span>' + t._server_status + ":&nbsp;</span>");
        /**
         * Bug 48730
         */
        status = typeof (Server.STATUSES_LOCALE[status]) === 'undefined' ? 0 : status;
        var status_name = Server.STATUSES_LOCALE[status];
        serverStatus.append('<span class="' + (status === Server.STATUSES_LIST.RUNNING ? "green" : "red") + '">'
            + status_name + ',&nbsp;</span>');
        serverStatus.append('<span class="' + (license === 0 ? "red" : "green") + '">'
            + Server.LICENSES_LOCALE[license] + '</span>');
    },
    /**
     * В зависимости от статуса сервера, получаем, какие элементы меню доступны.
     * Т.е. когда статус = STOPPED, понятно что пункт меню "стоп" недоступен
     * @param {Number} status
     */
    _getAvailableActions: function (status) {
        if (status === undefined || status === null) {
            status = Server._serverStatus;
        }
        if (status === null)
            return [];

        var keys = Server._actions.keys;
        var availableKeys = [];
        if (Server.canChangeServerStatus) {
            if (status === Server.STATUSES_LIST.RUNNING) {
                availableKeys.push(keys[1]);
                availableKeys.push(keys[2]);
            } else if (status === Server.STATUSES_LIST.STOPPED) {
                availableKeys.push(keys[0]);
            }
        }
        availableKeys.push(keys[3]);
        availableKeys.push(keys[4]);

        return availableKeys;
    },
    /**
     * Обновляем пункты меню
     * @param {Number} status
     */
    updateControlPanel: function (status) {
        var button = Server.actionButton.get();

        var availableKeys = Server._getAvailableActions(status);
        Server.actionButton.clearMenu();
        for (var i = 0; i < availableKeys.length; i++) {
            var key = availableKeys[i];
            var locale = Server._actions.locale.hasOwnProperty(key) ? Server._actions.locale[key] : key;
            Server.actionButton.addMenuItem(key, locale);
        }
        if (Server.actionButton._added !== true) {
            var serverInfo = $("#server-info");
            serverInfo.empty();
            serverInfo.append(button);
            Server.actionButton._added = true;
        }
    },
    /**
     * Полностью весь верх
     */
    clearContorlPanel: function () {
        $("#server-info").html('');
    },
    /**
     * Получить статус сервера
     * @param {Function} successCallback
     * @param {Function} errorCallback
     * @param {Function} alwaysCallback
     */
    getServerStatus: function (successCallback, errorCallback, alwaysCallback) {
        $.ajax({
            url: "/admin/service/getStatus",
            data: {service_name: tcm.service_name},
            dataType: 'json',
            cache: false,
            timeout: 3000
        })
            .done(function (data) {
                if (successCallback !== undefined && successCallback !== null) {
                    successCallback(data);
                }
            })
            .fail(function (jqXHR, textStatus) {
                if (errorCallback !== undefined && errorCallback !== null) {
                    errorCallback(jqXHR, textStatus);
                }
            })
            .always(function () {
                if (alwaysCallback !== undefined && alwaysCallback !== null) {
                    alwaysCallback();
                }
            });
    },
    /**
     * Показывает прогрессбары заместо кнопки с меню и статусом сервера
     */
    showSpinnersInHeader: function () {
        $("#server-info").html($('<img />', {
            src: '/images/spinner-24px-color-eeeeee.gif',
            id: 'spinner',
            style: 'position: absolute; right: 100px;'
        }));
        $('#server-status').html($('<img />', {src: '/img/spinner-16.gif', id: 'spinner'}));
    },
    /**
     * Обновить статус
     * @param {Boolean} refreshBtn принудительно обновить конетйнер кнопки меню
     */
    updateStatus: function (refreshBtn) {
        //Получить из localStorage происходит ли сейчас обновление статуса
        var updateStatus = Server.getUpdateProcessStatus();
        var time = new Date().getTime();
        //Если статус обновляется, и время обработки не превышает максимально возможное, запускаем таймер
        if (updateStatus && time < (Server._lastStatusUpdate + Server._maxStatusWaitTime)) {
            Server._setStatusUpdateTimeout();
            return;
        }
        //Если статус не обновляется, но с прошлого обновления не прошло достаточно времени, так-же запускаем таймер
        else if (time < (Server._lastStatusUpdate + tcm.timeUpdateControlPanel)) { //1000 - примерное время задержки, на которое замедляется выолнение при скрытии вкладки
            Server._setStatusUpdateTimeout();
            return;
        }

        //Добавляем флаг обновления статуса
        localStorage.setItem("serverStatusInUpdate", "true");
        //Получаем статус сервера
        Server.getServerStatus(function (data) {

                //Если нет значения лицензии в ответе сервера, удаляем кнопку управелния сервером
                if (!data.hasOwnProperty("regStatus")) {
                    Server.clearContorlPanel();
                    return;
                }

                var regStatus = parseInt(data.regStatus);

                //Если обычная лицензия или триал, обрабатываем кнопку меню
                if (regStatus === Server.LICENSES_LIST.REGISTERED || regStatus === Server.LICENSES_LIST.TRIAL) {
                    var oldStatus = Server._serverStatus;
                    Server.setLastStatusUpdate();
                    Server.setServerStatus(data.status);
                    //Если новый статус не равен старому статусу, или включенно принудительное обновление кнпоки, обновляем ее
                    if (parseInt(oldStatus) !== parseInt(data.status) || refreshBtn === true) {
                        Server.updateControlPanel(data.status);
                        Server.updateStatusTitle(data.status);
                    }

                }
                //Если  другой тип лицензии - не показываем кнопку меню
                else {
                    Server.clearContorlPanel();
                }
                Server._setStatusUpdateTimeout();
                //Для поддержки старых методов
                $(document).trigger("server-status-updated");
                Server.updateControlPanel(data.status);
                Server.updateStatusTitle(data.status);
                Server._setStatusUpdateTimeout();
            },
            function () {
                //Запускаем таймер след. обновления статуса сервера, вдруг Apache заработает
                Server._setStatusUpdateTimeout();
            },
            function () {
                //В любом случае пишем что процесс обновления завершен
                localStorage.setItem("serverStatusInUpdate", "false");
            });
    },
    /**
     * Устанавливает статус сервера
     * @param {Number} status
     * @returns {undefined}
     */
    setServerStatus: function (status) {
        Server._serverStatus = status;
        localStorage.setItem("serverStatus", status);
    },
    /**
     * Устанавливает время последнего обновления статуса
     * @returns {undefined}
     */
    setLastStatusUpdate: function () {
        Server._lastStatusUpdate = new Date().getTime();
        localStorage.setItem("serverStatusLastUpdate", Server._lastStatusUpdate);
    },
    /**
     * Устанавливает таймер обновления статуса, и сбрасывает старый
     * @returns {undefined}
     */
    _setStatusUpdateTimeout: function () {
        clearTimeout(Server._statusUpdateTimer);
        Server._statusUpdateTimer = setTimeout(Server.updateStatus, tcm.timeUpdateControlPanel);
    },
    /**
     * Точка входа
     * @returns {undefined}
     */
    init: function () {
        //Добавляем прогрессбар в панель
        Server.showSpinnersInHeader();
        //Получаем статус и время последнего запроса к статусу из локал сторейдж
        var status = Server.getServerStatusFromStorage();
        var lastUpdate = Server.getLastStatusUpdate();
        //Устанавливаем статус
        Server.setServerStatus(status);

        Server._lastStatusUpdate = lastUpdate;

        //Для ie8
        //Добавляем слушатель запись в local storage
        if (window.addEventListener) {
            window.addEventListener("storage", Server._localStorageHandler, false);
        } else {
            window.attachEvent("onstorage", Server._localStorageHandler);
        }

        var date = new Date();
        //Обновлеяем статус если необходимо, или, устанавливаем таймер обновления
        if (date.getTime() > lastUpdate + tcm.timeUpdateControlPanel || status === -1) {
            Server.showSpinnersInHeader();
            Server.updateStatus(true);

        } else {
            Server.updateControlPanel(status);
            Server.updateStatusTitle(status);
            Server._setStatusUpdateTimeout();
        }
    },
    /**
     * Возвращает последнее время обновления статуса
     * @returns {Number}
     */
    getLastStatusUpdate: function () {
        var lastUpdate = localStorage.getItem("serverStatusLastUpdate");
        if (lastUpdate === null || lastUpdate === "null") {
            return 0;
        } else {
            return parseInt(lastUpdate);
        }
    },
    /**
     * Возвращает статус сервера из local storage
     * @returns {Number}
     */
    getServerStatusFromStorage: function () {
        var status = localStorage.getItem("serverStatus");

        if (status === null || status === "null") {
            return -1;
        } else {
            return parseInt(status);
        }
    },
    /**
     * Возвращает статус сервера сохраненного в данном классе
     * @returns {Server._serverStatus}
     */
    getCurrentServerStatus: function () {
        return Server._serverStatus;
    },
    /**
     * Возвращает флаг, обновляется ли статус на данный момент
     * @returns {Boolean}
     */
    getUpdateProcessStatus: function () {
        var value = localStorage.getItem("serverStatusInUpdate");
        if (value !== true && value !== "true") {
            return false;
        } else {
            return true;
        }
    },
    /**
     * Хэндлер для обработки записи в local storage, вызыввается при записи в local storage из других вкладок
     * @param {Event} event
     * @returns {undefined}
     */
    _localStorageHandler: function (event) {
        //Для ie8
        if (!event) {
            event = window.event;
        }

        var key = event.key;
        if (key === undefined)
            return;
        var value = event.newValue;

        switch (key) {
            case "serverStatus":
                value = parseInt(value);
                Server._serverStatus = value;
                Server.updateControlPanel(value);
                Server.updateStatusTitle(value);
                $(document).trigger("server-status-updated");
                break;
            case "serverStatusInUpdate":
                break;
            case  "serverStatusLastUpdate":
                value = parseInt(value);
                Server._lastStatusUpdate = value;
                break;
        }
    },
    _serverStatus: null,
    _lastStatusUpdate: null,
    canChangeServerStatus: true,
    /*******************************************************************************************************************
     ********************************************************************************************************************
     *******************************************************************************************************************/
    /**
     * Останавливает сервер
     * @returns {undefined}
     */
    stopServer: function () {
        //Добавляем прогрессбар
        Server.showLoadEffect(t._service_is_stopping);
        Server.addServersStatus(1);
        //Выполняем запрос к серверу
        Server._executeServerAction(
            tcm.stopServerUrl,
            function (data) {
                //Т.к. нам в ответе и так пришел статус сервера, значит можно не перезапрашивает его,
                //перезапускаем таймер и устанавливаем статус из ответа
                Server._setStatusUpdateTimeout();
                Server.setServerStatus(data.status);
                Server.setLastStatusUpdate();
                Server.updateControlPanel(data.status);
                Server.updateStatusTitle(data.status);
                Server.removeServersStatus(1);
                Server.removeLoadEffect();

                $(document).trigger('AfterStop');
            },
            function () {
                $(document).trigger('AfterStop');
            },
            function () {
                setTimeout(Server.stopServer, 1000);
            }
        );
    },
    /**
     * Обработчик события запуска сервера
     */
    onAfterServerStart: function (successCallback, errorCallback, alwaysCallback) {
        var waitServerStart = function () {
            Server.getServerStatus(
                function (data) {
                    if (data.status === Server.STATUSES_LIST.RUNNING) {
                        successCallback(data);
                        return;
                    }
                    setTimeout(waitServerStart, 5000);
                }, errorCallback, alwaysCallback
            );
        };

        waitServerStart();
    },
    /**
     * Запускаем сервер
     * @returns {undefined}
     */
    startServer: function (reason) {
        var url = typeof (reason) === 'undefined'
            ? tcm.startServerUrl
            : tcm.startServerUrl + '?reason=' + reason;
        Server.showLoadEffect(t._service_is_starting);
        Server.addServersStatus(1);
        Server._executeServerAction(url,
            function (data) {
                Server.onAfterServerStart(function (data) {
                        Server._setStatusUpdateTimeout();
                        Server.setServerStatus(data.status);
                        Server.setLastStatusUpdate();
                        Server.updateControlPanel(data.status);
                        Server.updateStatusTitle(data.status);
                        Server.removeServersStatus(1);
                        Server.removeLoadEffect();
                        $('#restart-server-on-slots-change-msg').hide();

                        $(document).trigger('AfterStart', data);
                    },
                    function () {
                        $(document).trigger('AfterFailedStart', data);
                    },
                    function () {
                    });
            },
            function (data) {
                $(document).trigger('AfterFailedStart', data);
            },
            function () {
                setTimeout(Server.startServer, 1000);
            });
    },
    /**
     * Рестартим сервер
     * @returns {undefined}
     */
    restartServer: function () {
        Server.showLoadEffect(t._service_is_stopping);
        Server.addServersStatus(1);
        var reason = 'restart';
        var url = tcm.stopServerUrl + '?reason=' + reason;
        Server._executeServerAction(url,
            function (data) {
                Server._setStatusUpdateTimeout();
                Server.setServerStatus(data.status);
                Server.setLastStatusUpdate();
                Server.updateControlPanel(data.status);
                Server.updateStatusTitle(data.status);
                $(document).trigger('AfterStop');
                Server.startServer(reason);
            },
            function () {
                $(document).trigger('AfterStop');
            },
            function () {
                setTimeout(Server.restartServer, 1000);
            });
    },
    /**
     * Ф-я завершения регистрации сервера
     * @returns {undefined}
     */
    endRegister: function () {
        Server._executeServerAction(tcm.endRegisterUrl,
            function (data) {
                if (data.status === 1 || data.status === "1" || data.status === true) {
                    $(document).one('AfterStart', {url: data.url}, function (event) {
                        $(window).off('beforeunload');
                        $(document).unbind('AfterFailedStart');
                        window.location.href = event.data.url;
                    });
                    $(document).one('AfterFailedStart', {url: data.url}, function (event) {
                        $(window).off('beforeunload');
                        $(document).unbind('AfterStart');
                        window.location.href = event.data.url;
                    });
                    Server.startServer();
                } else {
                    $(window).off('beforeunload');
                    Server.removeServersStatus(1);
                    Server.removeLoadEffect();
                    window.location.href = data.url;
                }
            });
    },
    /**
     * Выполняет запрос к серверу
     * @param {String} url
     * @param {Function} successCallback если сервер успешно ответил, и ответ не равен false
     * @param {Function} errorCallback если сервер ответил false
     * @param {Function} failCallback если сервер не овтетил или выдал ошибку, например 404
     * @param {Function} alwaysCallback всегда
     * @returns {undefined}
     */
    _executeServerAction: function (url, successCallback, errorCallback, failCallback, alwaysCallback) {
        $.ajax({
            url: url,
            dataType: 'json',
            method: "POST",
            cache: false
        })
            .done(function (data) {
                if (data.status !== false || data.status !== "false") {
                    if (successCallback !== undefined && successCallback !== null) {
                        successCallback(data);
                    }
                } else {
                    if (errorCallback !== undefined && errorCallback !== null) {
                        errorCallback(data);
                    }
                }
            })
            .fail(function (jqXHR, textStatus) {
                if (failCallback !== undefined && failCallback !== null) {
                    failCallback(jqXHR, textStatus);
                }
            })
            .always(function () {
                if (alwaysCallback !== undefined && alwaysCallback !== null) {
                    alwaysCallback();
                }
            });
    },
    /**
     * Включает вывод на экране сообщения о необходимости перезапуска сервера
     * @returns {undefined}
     */
    enableRestartMessage: function () {
        $.post(tcm.setRestartMsgUrl).fail(function () {
            setTimeout(Server.enableRestartMessage, 2000);
        });
    },
    /**
     * Выполняет запрос на регистрацию сервера
     * @returns {undefined}
     */
    cmdRegister: function () {
        $(window).on('beforeunload', function () {
            return t._noexit;
        });
        Server.showLoadEffect(t._processing_please_wait);
        $(document).one('AfterStop', function () {
            Server.showLoadEffect(t._processing_please_wait);
            $.ajax({
                url: tcm.cmdRegisterUrl,
                success: function (data) {
                    Server.endRegister();
                }
            });
        });
        Server.stopServer();
    },
    /*******************************************************************************************************************
     ********************************************************************************************************************
     *******************************************************************************************************************/
    /**
     * Управление сервером Apache
     * @type Object
     */
    apache: {
        /**
         * Перезагрузка сервера
         * @param {function} onRestart
         * @returns {undefined}
         */
        restart: function (onRestart) {
            //Выводим прогрессбар
            Server.showLoadEffect(t._web_manager_is_restarting);
            Server.addServersStatus(2);
            //Устанавливаем время старта сервера
            Server.apache.startTime = (new Date()).getTime();

            var redirectAfterRestartUrl = localStorage.getItem("httpServerUrl") !== null
                ? localStorage.getItem("httpServerUrl")
                : location.href;

            $.cookie('after_restart_load_url', redirectAfterRestartUrl, {patch: '/', expire: 1});

            localStorage.removeItem("httpServerUrl");

            //Реализуем псевдо-прогрессбар с процентами
            var iterationCount = 1000;
            var updateProcents = function () {
                iterationCount = iterationCount + 1000;
                if (iterationCount >= tcm.timeWebRestartMax)
                    iterationCount = tcm.timeWebRestartMax;
                $('#procents').remove();
                $("div.cont span.msg").append('<span id="procents">' + Math.floor(100 * iterationCount / tcm.timeWebRestartMax) + '%</span>');
            };
            setInterval(updateProcents, 1000);


            function showInstructionMessage() {
                var selfCertWasRefreshed = localStorage.getItem("selfSignedCertificateWasRefreshed") === "true";
                var sslPortWasChanged = localStorage.getItem("sslPortWasChanged") === "true";
                renderConnectionInstruction(selfCertWasRefreshed || sslPortWasChanged);
            }

            //Флаг нужен, т.к. процесс может останавливаться долго, и запрос работоспособности сервера будет возвращать true
            var serverHasBeenStopped = false;
            /**
             * Ф-я проверки запущен ли сервер
             * @returns {undefined}
             */
            var checkIsLaunched = function () {
                //Отправляем запрос на проверку сервера
                Server.apache.checkIsWork(
                    //Если сервер отвечает
                    function () {
                        //Если уже сервер уже был остановлен, значит сервер запустился, все норм
                        if (serverHasBeenStopped) {
                            if (onRestart) {
                                onRestart();
                            } else {
                                Server.apache._isWorkAfterRestart();
                            }
                        } else {
                            //Иначе по таймеру снова запускаем проверку
                            setTimeout(checkIsLaunched, 500);
                        }
                    },
                    //Если запрос выдал ошибку
                    function (jqXHR, textStatus) {
                        //Если он не отвечает по причине ошибки, значит сервер работает. Хз зачем это надо, но так было
                        //в старой версии этого js , я решил не рисковать
                        if (jqXHR.status === '403' || jqXHR.status === 403 || textStatus !== 'timeout') {
                            if (onRestart) {
                                onRestart();
                            } else {
                                Server.apache._isWorkAfterRestart();
                            }
                        } else {
                            //Ставим флаг что сервер таки был остановлен
                            serverHasBeenStopped = true;

                            //В том случае, если время ожидания включения сервера превысило максимальное время ожидания
                            //выводим ошибку
                            var current_time = (new Date()).getTime();
                            if ((current_time - Server.apache.startTime) > tcm.timeWebRestartMax) {
                                Server.removeServersStatus(2);
                                Server.removeLoadEffect();
                                $('#server-status, #server-info').remove();
                                $('#logo').removeAttr('onclick');
                                showInstructionMessage();

                            } else {
                                //Если время ожидания запуска сервера не вышло, перезапускаем проверку
                                setTimeout(checkIsLaunched, 1000);
                            }
                        }
                    }
                );
            };

            /**
             * Отправляем запрос на перезагрузку сервера, и после того как сервер ответил, выпонляем проверку ответа сервера
             */
            $.ajax({
                type: "POST",
                url: tcm.restartApacheUrl,
                timeout: 5000
            })
                .fail(function () {
                    serverHasBeenStopped = true;
                })
                .always(function () {
                    checkIsLaunched();
                });
        },
        /**
         * Если сервер запустился после рестарта
         * @returns {undefined}
         */
        _isWorkAfterRestart: function () {
            setTimeout(function () {
                var url = $.cookie('after_restart_load_url');
                $.removeCookie('after_restart_load_url');
                Server.removeServersStatus(2);
                window.location.href = url ? url : tcm.securitySettingsUrl;
            }, 2000);
        },
        /**
         * Шлет запросы на сервер, и запускает коллбэки
         * @param {type} workCallback если сервер ответил
         * @param {type} disabledCallback или если произошла ошибка , или сервер не отвечает
         * @returns {undefined}
         */
        checkIsWork: function (workCallback, disabledCallback) {
            $.ajax({
                url: tcm.apacheIsWorkUrl,
                timeout: 3000,
                success: function (data) {
                    if (workCallback !== undefined && workCallback !== null) {
                        workCallback(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (disabledCallback !== undefined && disabledCallback !== null) {
                        disabledCallback(jqXHR, textStatus, errorThrown);
                    }
                }
            });
        },
        /**
         * Время начала перезапуска сервера
         * @type Number
         */
        startTime: 0
    },
    /*******************************************************************************************************************
     ********************************************************************************************************************
     *******************************************************************************************************************/
    //Сообщения в шапке
    /**
     * Выводит сообщение сверху страницы
     * @param {string} msg текст сообщения
     * @param {number} messageType тип сообщения ( см. Server.MESSAGE_TYPE)
     * @param {number} hideTime время, через которое сообщение автоматически скроестя
     * @returns {undefined}
     */
    setServerMessage: function (msg, messageType, hideTime, isHTML) {
        //Контейнер для сообщений
        var container = $('#message');

        //В зависимости от типа сообщения, создаем подходящий контейнер
        switch (messageType) {
            default:
            case Server.MESSAGE_TYPE.NOTE:
                var messageContainer = $('<span class="note-msg"></span>');
                //Устанавливаем текст сообщения
                if (isHTML) {
                    messageContainer.html(msg);
                } else {
                    messageContainer.text(msg);
                }

                //Удаляем предыдущие сообщения
                container.empty();
                //Добавляем к родительскому контейнеру
                container.append(messageContainer);


                var errorContainer = $('#error-message-container>.error-text');
                if (errorContainer.parent().css('display') !== 'none') {
                    errorContainer.fadeOut(200, function () {
                        errorContainer.empty();
                        errorContainer.parent().css('display', 'none');
                    });
                }

                //Если преданно время скрытия, то устанвливаем его, и, после того как сообщение скроется, очищаем контейнер
                if (hideTime !== undefined && typeof hideTime === 'number') {
                    if (Server._serverMessageHideTimer !== null) {
                        clearTimeout(Server._serverMessageHideTimer);
                    }
                    Server._serverMessageHideTimer = setTimeout(function () {
                        messageContainer.fadeOut(500, function () {
                            container.empty();
                            Server._serverMessageHideTimer = null;
                        });
                    }, hideTime);
                }
                break;
            case Server.MESSAGE_TYPE.ERROR:
                var container = $('#error-message-container>.error-text');
                var messageContainer = $('<span class="error-msg"></span>');
                //Устанавливаем текст сообщения
                if (isHTML) {
                    messageContainer.html(msg);
                } else {
                    messageContainer.text(msg);
                }

                //Удаляем предыдущие сообщения
                container.empty();
                //Добавляем к родительскому контейнеру
                container.append(messageContainer);
                container.css('display', 'block');
                container.parent().css('display', 'block');

                $('.content-container').scrollTop(0);

                //Если преданно время скрытия, то устанвливаем его, и, после того как сообщение скроется, очищаем контейнер
                if (hideTime !== undefined && typeof hideTime === 'number') {
                    if (Server._serverMessageHideTimer !== null) {
                        clearTimeout(Server._serverMessageHideTimer);
                    }
                    Server._serverMessageHideTimer = setTimeout(function () {
                        messageContainer.fadeOut(500, function () {
                            container.empty();
                            Server._serverMessageHideTimer = null;
                            container.parent().css('display', 'none');
                        });
                    }, hideTime);
                }
                break;
        }

    },
    /**
     * Таймер для перерывания сокрытия сообщения (иначе при быстрой установке новых сообщений, они будут скрываться
     * старыми коллбэками)
     * @type number
     */
    _serverMessageHideTimer: null,
    /**
     * Удаляет сообщения сервера
     * @returns {undefined}
     */
    clearServerMessage: function () {
        //Контейнер для сообщений
        var container = $('#message');
        //Удаляем сообщения
        container.empty();
    },
    /*******************************************************************************************************************
     ********************************************************************************************************************
     *******************************************************************************************************************/
    //Диалоговые окна (алерт)

    /**
     * Создает модальное окно с пердупреждением
     * @param {String} message
     * @param {String} title
     * @param {Function} onClose
     * @param {Object} dialogParams
     * @returns {undefined}
     */
    alert: function (message, title, onClose, dialogParams) {
        var container = $('<div></div>');
        container.append('<span>' + message + '</span>');


        var alertParams = $.extend(true, {}, this.defaulAlertParams);
        if (typeof dialogParams === "object") {
            alertParams = $.extend(true, alertParams, dialogParams);
        }

        alertParams.buttons = [
            {
                text: t.ok,
                click: function () {
                    if (typeof onClose === "function") {
                        onClose(container);
                    }
                    $(this).dialog("close");
                }
            }
        ];

        if (typeof title === "string") {
            alertParams.title = title;
        }

        container.dialog(alertParams);
        container.dialog("open");
    },
    defaulAlertParams: {
        autoOpen: false,
        height: 160,
        width: 240,
        modal: true,
        draggable: true,
        resizable: false,
        title: ''
    },
    /*******************************************************************************************************************
     ********************************************************************************************************************
     *******************************************************************************************************************/
    /**
     * Управление настройками хранилищиа
     * @type Object
     */
    storage: {
        /**
         * Меняет тип хранилища
         * @returns {undefined}
         */
        changeStorage: function () {

            //Функция смены типа 
            var change = function () {
                //Выводим засерение экрана

                //Это старый код, вообщем тип хранилиша определеяется по чекбоксу
                if ($('#import-ldap-users-flag').is(':checked')) {
                    var msg = $('<div id="importStatus"></div>');
                    msg.text(t._users_imported.replace("%n", '0'));
                    Server.showLoadEffect(msg);
                    Server.storage.importLdapUsers();
                } else {
                    Server.showLoadEffect();
                    Server.storage.sendChangeStorage();
                }
            };

            //Если сервер на данный момент не остановлен, надо его остановить
            if (parseInt(Server.getCurrentServerStatus()) !== Server.STATUSES_LIST.STOPPED) {
                //Выводим предложение об остановке сервера
                Confirm.func(t._change_storage_question, function () {
                    //Выводим предупреждение остановки сервера
                    Server.showLoadEffect(t._service_is_stopping);
                    //После того, как сервер остановился, вызываем смену хранилища
                    $(document).one('AfterStop', function () {
                        change();
                    });
                    //Останавливаем сервер
                    Server.stopServer();
                });
            } else {
                //Если сервер не запущен, просто меняем тип хранилища
                change();
            }


        },
        /**
         * Отправляет запрос на смену хранилища сервера
         * @returns {undefined}
         */
        sendChangeStorage: function () {
            $.ajax({
                url: tcm.changeStorageUrl,
                data: {'mode': ($('#mode').is(':checked') ? 1 : 0)},
                type: "POST",
                success: function (data) {
                    if (data.status === 'success') {
                        Server.removeLoadEffect();
                        $(document).trigger("onStorageChange");
                        Server.storage.afterChangeStorage();
                    }
                },
                error: function () {
                    Server.removeLoadEffect();
                },
                dataType: 'json'
            });
        },
        /**
         * Отправляет запросы на импорт пользоателей из LDAP-а в реестре
         * @param {int} page номер страницы в LDAP-e
         * @param {int} totalImported сколько уже было импортировано
         * @returns {undefined}
         */
        importLdapUsers: function (page, totalImported) {
            page = page ? page : 0;
            totalImported = totalImported ? totalImported : 0;

            $.ajax({
                url: tcm.importLdapUsersUrl,
                data: {
                    'page': page
                },
                type: "POST",
                dataType: "json",
                success: function (obj) {
                    if (!obj.hasOwnProperty("nextPageId") || obj.nextPageId === false) {
                        setTimeout(function () {
                            Server.removeLoadEffect();
                            Server.storage.sendChangeStorage();
                        }, 1000);
                    } else {
                        totalImported = totalImported + obj.count;
                        $("#importStatus").text(t._users_imported.replace("%n", totalImported));

                        Server.storage.importLdapUsers(obj.nextPageId, totalImported);
                    }
                },
                error: function (obj) {
                    Server.removeLoadEffect();
                }
            });
        },
        /**
         * Вызывается после смены типа хранилища
         * @returns {undefined}
         */
        afterChangeStorage: function () {
            Server.showLoadEffect(t._service_is_starting);
            $(document).one('AfterStart AfterFailedStart', function () {
                location.reload();
            });
            Server.startServer();
        }
    }
};