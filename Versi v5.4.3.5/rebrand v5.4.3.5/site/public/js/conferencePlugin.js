/* global tinymce */

(function ($) {


    var ConferencePlugin = function (obj) {

    };

    /**
     * Предопределяет методы плагина. Предопределяет "глобально", т.е. во всех плагинах на странце будут данные параметры
     * если необходимо предопределять параметры для определенного плагина, то надо передавать их или в метод jquery плагина,
     * либо в ConferencePlugin.bind()
     * @param {Object} items
     * @returns {undefined}
     */
    ConferencePlugin.prototype.init = function (items) {
        if (items !== undefined && typeof items === 'object' && items !== null) {
            $.extend(true, std_obj, items);
        }
    };

    /**
     * Возможные типы конференций - конференция или вебинар
     */
    ConferencePlugin.prototype.CONFERENCE_TYPE = {
        CONFERENCE: 0,
        WEBINAR: 1
    };

    /**
     * Возможные типы действий на данный момент - создание конференции или ее изменение
     * Необходимо для опеределения хэнделера на который отправляются данные при сохранении параметров конференции
     */
    ConferencePlugin.prototype.CURRENT_ACTION = {
        CREATE: 1,
        EDIT: 2
    };

    /**
     * Возможные причины отключения рассылки приглащений
     */
    ConferencePlugin.prototype.INVITATIONS_STATUSES = {
        OK: 1,
        //LIST_EMPTY : 2,
        SCHEDULE_NONE: 3,
        NOT_SAVE: 4
    };

    /**
     *
     */
    ConferencePlugin.prototype.SAVING_ERRORS = {
        CONFERENCE_NOT_FOUND: 1,
        CONFERENCE_RUNNING: 2
    };

    /**
     * Макисмальная длина описания конференции
     */
    ConferencePlugin.prototype.DESCRIPTION_MAX_LENGTH = 10000;

    /**
     * Устаналивает класс User
     * @param {User} userPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setUserPlugin = function (userPlugin) {
        std_obj.plugins.userPlugin = userPlugin;
    };

    /**
     * Устанавливает плагин спсика пользователей
     * @param {MemberListPlugin} memberListPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setMemberListPlugin = function (memberListPlugin) {
        std_obj.plugins.memberListPlugin = memberListPlugin;
    };

    /**
     * Устанавливает плагин схемы конференции
     * @param {ConferenceSchemaPlugin} schemaPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setSchemaPlugin = function (schemaPlugin) {
        std_obj.plugins.schemaPlugin = schemaPlugin;
    };

    /**
     * Устанавливает плагин расписания конференции
     * @param {ConferenceSchedulePlugin} schedulePlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setSchedulePlugin = function (schedulePlugin) {
        std_obj.plugins.schedulePlugin = schedulePlugin;
    };

    /**
     * Устанавливает плагин списка участников
     * @param {ConferenceParticipantsPlugin} participantsPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setParticipantsPlugin = function (participantsPlugin) {
        std_obj.plugins.participantsPlugin = participantsPlugin;
    };

    /**
     * Устанавливает плагин добавления по ID
     * @param {AddByIdPlugin} addByIdPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setAddByIdPlugin = function (addByIdPlugin) {
        std_obj.plugins.addByIdPlugin = addByIdPlugin;
    };

    /**
     * Устанавливает плагин менеджера пресетов
     * @param {presetManagerPlugin} presetManagerPlugin
     * @returns {undefined}
     */
    ConferencePlugin.prototype.setPresetManagerPlugin = function (presetManagerPlugin) {
        std_obj.plugins.presetManagerPlugin = presetManagerPlugin;
    };


    //Создаем объект класса плагина, необходимо для того чтобы мы могли использовать константы класса и устанавливать
    //локаль
    $.conferencePlugin = new ConferencePlugin();

    /**
     * Главный объект плагина
     * @type std_obj
     */
    var std_obj = {
        /**
         * Текущая локализация
         */
        region: 'en',
        /**
         * Флаг дебага
         */
        debug: false,
        /**
         * Префикс плагина
         */
        prefix: 'cmpl',
        /**
         * Префикс css плагина
         */
        cssPrefix: 'cmpl_',
        /**
         * Список хэндлеров плагина
         */
        handlers: {
            /**
             * Список пользователей, которые могут быть назаначенны модераторами конференции
             */
            owner: "/admin/handler/getUserById",
            /**
             * Список участников конференции
             */
            participantsList: "/admin/handler/getParticipants",
            /**
             * Обработчик данных при создании конференции
             */
            applyCreate: "/admin/conferences/applyCreate",
            /**
             * Обработчик данных при изменении конференции
             */
            applyEdit: "/admin/conferences/applyEdit",
            /**
             * Отправка пригласительных сообщеий
             */
            sendInvitations: '/admin/conferences/sendInvitations/',
            /**
             * Существует ли конференция с таким cid
             */
            cidExists: '/admin/conferences/isExists/',
            /**
             * Получение списка пресетов сервера вещания
             */
            getPresetList: '/admin/conferences/getPresetList',
            /**
             * Получение HTML-кода для встраивания плеера
             */
            getCDNvideoIframe: '/admin/handler/getCDNvideoIframe',
            /**
             * Список групп являющихся операторами
             */
            getOperatorsGroups: '/admin/group/getOperators',
            /**
             * Url-адрес API-контроллера для упраавления шаблонами конференций
             */
            conferenceTemplatesControllerUrl: '/api/v3.1/templates/conferences',
            /**
             * Изменение пользовательской временной зоны шаблона конференции
             */
            setTemplateUserTimeZone: '/admin/conferences/setTemplateUserTimeZone'
        },
        /**
         * Список ссылок на внешние страницы
         */
        links: {
            recordController: '/admin/conferences/recordings/'
        },
        /**
         * Параметры готсевого доступа плагина
         */
        guestAccess: {
            /**
             * Можно ли гостю отправлять текстовые сообшения
             */
            sendMsg: true,
            /**
             * Можно ли гостю слать видео
             */
            sendVideo: true,
            /**
             * Макисмальное количество гостей
             */
            count: 0
        },

        /**
         * Имя конференции
         */
        name: null,
        /**
         * Параметры conferenceID. Необходимо, т.к. теперь пользователь может устанавливать пользовательский CID
         */
        cid: {
            charRegexp: /[a-z\d\.\-\_ ]/i,
            regexp: /^(\\c\\)[a-z\d\.\-\_]+$/i,
            /**
             * Значение CID с \c\e3e3e
             */
            value: null,
            /**
             * Реальный  CID конференции e3e3e
             */
            real: null,
            /**
             * Алиас для конференции
             */
            alias: null
        },

        /**
         * ID шаблона конференции
         */
        template_id: "",

        rtsp: {
            status: false,
            allowed: true,
            announce: false,
            announceURL: "",
            announceLogin: "",
            announcePassword: "",
            inactiveReceiverTimeout: 60,
            rtpOverTcp: true,
            videoCodec: "VP8",
            audioCodec: "MP3",
            preset: "",
            provider_type: "",
            videoCodecList:
                {
                    'VP8': 'VP8',
                    'H264': 'H264'
                },
            audioCodecList:
                {
                    'MP3': 'MP3',
                    'PCM': 'L16',
                    'G711U': 'G711Ulaw64k',
                    'G711A': 'G711Alaw64k'
                }
        },

        udp: {
            status: false,
            address: '',
            allowed: true
        },
        /**
         * Адрес для внешней страницы вебинаров
         */
        webUrl: "/",
        /**
         * Внешний адрес сервера (для rtps)
         */
        outsideUrl: "/",
        /**
         * Владелец конференции
         */
        owner: null,
        /**
         * Описание конференции
         */
        description: null,
        /**
         * Текущий тип конференции - конференция или вебинар
         */
        type: $.conferencePlugin.CONFERENCE_TYPE.CONFERENCE,
        /**
         * Текущий метод работы с конференцией - создание или изменение
         */
        action: $.conferencePlugin.CURRENT_ACTION.CREATE,
        /**
         * Включен-ли на сервере HTTPS
         */
        sslEnabled: false,
        /**
         * Айди текущей схемы
         */
        schemaId: 3,
        /**
         * Количество подиумов конференции (на данный момент актуально для Role-based)
         */
        podiums: 6,
        /**
         * Настройка записи видеозвонков
         */
        enableRecording: {
            globalSetting: 0, // 0 - выкл. для всех конференций, 1 - вкл. для всех конференций, 2 - зависит от 'thisConference'
            thisConference: false
        },

        /**
         * Точка входа в конференцию
         * @param {std_obj} obj
         * @returns {undefined}
         */
        main: function (obj) {
            var container = obj.containers.get(obj);

            //Проверяем есть ли владелец конференции
            if (obj.owner !== null) {
                obj._loadOwner(obj);
            }

            //Устанавливаем тип конференции
            if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR ||
                obj.type === $.conferencePlugin.CONFERENCE_TYPE.CONFERENCE) {
                obj._setConferenceType(obj, obj.type);
            } else {
                return $('<div></div>');
            }

            return container;
        },

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Объект контейнеров плагина
         */
        containers: {
            /**
             * Возвращает основной контейнер плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            get: function (obj) {
                if (obj.containers._rendered === null) {
                    obj.containers._rendered = obj.containers._render(obj);
                }

                return this._rendered;
            },
            /**
             * Рендерит основной контейнер плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render: function (obj) {
                var container = $('<div></div>');
                //Ренедирт панель настроек
                var mainPanel = obj.containers._renderMainPanel(obj);

                var schedule = obj.containers.scheduleContainer.get(obj);
                var members = obj.containers.participantsContainer.get(obj);
                var additional = obj.containers.additional.get(obj);
                var rtsp = obj.containers.rtsp.get(obj);
                var conferenceRecording = obj.containers.enableRecording.get(obj);

                var buttons = obj.containers._renderButtons(obj);

                var mainPage = $('<div></div>').append(mainPanel)
                    .append('<div class="clear"><br/></div>').append(members).append(schedule)
                    .append('<div class="clear"><br/></div>').append(additional)
                    .append('<div class="clear"><br/></div>').append(rtsp)
                    .append('<div class="clear"><br/></div>').append(conferenceRecording);
                //Добавляем код интеграции только если это вебинар
                if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR) {
                    var integration = obj.containers.integration.get(obj);
                    if (obj.schemaId === 1 || obj.schemaId === "1") {
                        obj.containers.integration.hide(obj);
                    } else {
                        obj.containers.integration.show(obj);
                    }
                    mainPage.append('<div class="clear"><br/></div>').append(integration);
                }
                mainPage.append('<div class="clear"><br/></div>').append(buttons)
                    .append('<div class="clear"></div>');

                container.append(mainPage);


                return container;
            },

            /**
             * Рендирит основную панель плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _renderMainPanel: function (obj) {
                var container = $('<div class="whiteBlock">');

                var table = $('<table>').append('<colgroup>'
                    + '<col width="200px"></col>'
                    + '<col></col>'
                    + '<col width="200px"></col>'
                    + '</colgroup>')
                    .append(obj.containers.name.get(obj))
                    .append(obj.containers.schemaContainer.get(obj))
                    .append(obj.containers.owner.get(obj))
                    .append(obj.containers.cid.get(obj))
                    //.append(obj.containers.alias.get(obj))
                    .append(obj.containers.guestAccess.get(obj))
                    .append(obj.containers.showAdvanced.get(obj))
                    .append(obj.containers.udp.get(obj));

                if (!obj.udp.allowed) {
                    obj.containers.udp.setEnabled(obj, false);
                }

                container.append(table);

                return container;
            },

            type: {
                get: function (obj) {
                    if (obj.containers.type._rendered === null) {
                        obj.containers.type._rendered = obj.containers.type._render(obj);
                    }

                    return obj.containers.type._rendered;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {$}
                 */
                _render: function (obj) {
                    var container = $('<div></div>');
                    container.append('<h1>' + _("New video conference") + '</h1>');
                    container.append('<div>' + _("Select the type of the conference") + ':</div>');

                    var typeList = $('<div class="typeList"></div>');
                    container.append(typeList);

                    var typeConferenceWrapper = $('<div></div>');
                    var typeConference = $('<div class="conferenceType"></div>');
                    var typeConferenceContent = $('<div class="content"></div>');
                    typeConference.append(typeConferenceContent);
                    typeConferenceContent.append('<div class="title">' + _("Private Conference") + '</div>');
                    typeConferenceContent.append('<div class="description">'
                        + _("Authentication is required. Any TrueConf client application supporting WebRTC can join it. Allows to invite existing users via calendar invitations and conference web pages. Automatically adds pre-configured participants to the conference.")
                        + '</div>');
                    typeConference.append('<div type="' + $.conferencePlugin.CONFERENCE_TYPE.CONFERENCE + '" class="btn">' + _("Create") + '</div>');
                    typeConferenceWrapper.append(typeConference);

                    var typeWebinarWrapper = $('<div></div>');
                    var typeWebinar = $('<div class="conferenceType"></div>');
                    var typeWebinarContent = $('<div class="content"></div>');
                    typeWebinar.append(typeWebinarContent);
                    typeWebinarContent.append('<div class="title">' + _("Public Web Conference") + '</div>');
                    typeWebinarContent.append('<div class="description">'
                        + _("In addition to Private Conference features allows any user with a link to join it, including guests and remote participants. Can be embedded into third-party web sites via HTML5 widget. Also known as Web Conference or Webinar.")
                        + '</div>');

                    if (!obj.enableWebinars) {
                        typeWebinarContent.append('<div class="notAvailable">('
                            + _('Not available in your <a href="%license_url">license</a>')
                                .replace("%license_url", "/admin/general/info") + ')</div>');
                        typeWebinar.addClass("disabled");
                    }
                    typeWebinar.append('<div type="' + $.conferencePlugin.CONFERENCE_TYPE.WEBINAR + '" class="btn">' + _("Create") + '</div>');
                    typeWebinarWrapper.append(typeWebinar);

                    typeList.append(typeConferenceWrapper);
                    typeList.append(typeWebinarWrapper);

                    typeList.find('.btn').click(function () {
                        var btn = $(this);
                        if (btn.parent().hasClass("disabled")) {
                            return false;
                        }

                        var type = $(this).attr("type");
                        obj.containers.type.onSelect(obj, type);
                    });

                    return container;
                },

                onSelect: function (obj, type) {
                    //
                },

                _rendered: null
            },

            /**
             * Рендерит поле изменения названия конференции
             */
            name: {
                /**
                 * Возвращает контейнер изменения названия конференции
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.name._rendered === null) {
                        obj.containers.name._rendered = obj.containers.name._render(obj);
                    }

                    return obj.containers.name._rendered;
                },
                /**
                 * Рендерит контейнер поля изменения названия конференции
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {

                    var container = $('<tr>');

                    var td1 = $('<td>');
                    td1.append('<label for="' + obj.prefix + 'conferenceName">' + _("Topic") + ':</label>');
                    container.append(td1);


                    var field = this._field;
                    var name = (obj.name === null || obj.name === undefined) ? "" : obj.name;

                    field.val(name);

                    field.prop("id", obj.prefix + "conferenceName");
                    field.prop("name", obj.prefix + "conferenceName");

                    var td2 = $('<td>');
                    td2.append(field);
                    container.append(td2);

                    var td3 = $('<td>');
                    var error = this._error;
                    error.text(_("Please specify the conference name"));
                    td3.append(error);
                    error.hide();

                    field.keyup(function () {
                        if (this.value.length === 0) {
                            error.show();
                        } else {
                            error.hide();
                        }

                        obj.name = field.val();
                    });

                    container.append(td3);

                    return container;
                },
                /**
                 * Устанавливает имя
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                val: function (obj) {
                    return obj.containers.name._field.val();
                },
                /**
                 * Показывает ошибку под полем ввода
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                _showError: function (obj) {
                    obj.containers.name._error.show();
                    obj.containers.name._field.focus();
                },
                /**
                 * Поле ввода имени
                 */
                _field: $('<input maxlength="240" class="fullBlock" type="text" />'),
                /**
                 * Контейнер для ошибки в поле ввода
                 */
                _error: $('<span class="error"></span>'),
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },
            /**
             * Объект для контейнера айди конференции
             */
            cid: {
                /**
                 * Возвращает контейнер поля ввода cid
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.cid._rendered === null) {
                        obj.containers.cid._rendered = obj.containers.cid._render(obj);
                    }

                    return obj.containers.cid._rendered;
                },
                /**
                 * Рендерит контейнер с cid-ом
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var tr1 = $('<tr>');
                    tr1.append('<td colspan="3">' + _("ID for connecting from client applications") + '</td>');

                    var tr2 = $('<tr>');

                    var td1 = $('<td></td>');
                    td1.append('<label for="' + obj.prefix + 'conferenceId">' + _("Conference ID") + ':</label>');
                    tr2.append(td1);

                    obj.containers.cid._field = $('<input maxlength="128" class="fullBlock" type="text" />');
                    var field = obj.containers.cid._field;

                    var td2 = $('<td></td>');
                    td2.append(field);
                    tr2.append(td2);

                    var td3 = $('<td></td>');
                    tr2.append(td3);

                    var cid = (obj.cid.value === null || obj.cid.value === undefined) ? "" : obj.cid.value;

                    field.val(cid);
                    field.prop("id", obj.prefix + "conferenceId");
                    field.prop("name", obj.prefix + "conferenceId");
                    if (obj.type !== $.conferencePlugin.CONFERENCE_TYPE.WEBINAR ||
                        obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                        field.attr("readonly", "readonly");
                        field.addClass("disabled");
                        field.attr("onclick", "this.select();");

                        return tr1.add(tr2);
                    }

                    field.keydown(function (event) {
                        if (field.val() === "\\c\\" && event.keyCode === 8) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });

                    field.keypress(function (event) {
                        var ch = String.fromCharCode(event.which);

                        if (event.charCode !== 0 && !ch.match(obj.cid.charRegexp)) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }
                    });

                    field.keyup(function (event) {
                        var value = field.val();

                        if (value.length === 0) {
                            field.val("\\c\\");
                            obj.containers.outside.setAddress(obj, "/c/");
                            // временно obj.containers.rtsp.setAddress(obj, "/c/");
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }

                        var prefixPos = value.indexOf("\\c\\");
                        if (prefixPos === -1 || prefixPos > 0) {
                            var lastSlash = value.lastIndexOf("\\");
                            value = "\\c\\" + value.substr(lastSlash + 1);
                            if (event.keyCode === 8) {
                                field.val(value);
                            }
                        }


                        if (event.keyCode === 8) {
                            obj.containers.outside.setAddress(obj, value.replace("\\c\\", "/c/"));
                            // временно obj.containers.rtsp.setAddress(obj, value.replace("\\c\\", "/c/"));
                            return;
                        }

                        var selectionStart = this.selectionStart,
                            selectionEnd = this.selectionEnd;

                        if (selectionEnd === undefined) {
                            obj.containers.outside.setAddress(obj, value.replace("\\c\\", "/c/"));
                            // временно obj.containers.rtsp.setAddress(obj, value.replace("\\c\\", "/c/"));
                            return;
                        }

                        var value = value.toLowerCase();
                        value = value.replace(/ /g, "_");
                        field.val(value);
                        obj.containers.outside.setAddress(obj, value.replace("\\c\\", "/c/"));
                        // временно obj.containers.rtsp.setAddress(obj, value.replace("\\c\\", "/c/"));

                        if (this.setSelectionRange) {
                            this.focus();
                            this.setSelectionRange(selectionStart, selectionEnd);
                        }
                    });

                    field.focusin(function () {
                        obj.containers.cid._errorText.hide();
                        obj.containers.cid._waitSpinner.hide();
                        obj.containers.cid._successText.hide();
                        field.removeClass("errorInput");
                        obj.saveButton.removeClass("disabled");
                    });

                    field.focusout(function () {
                        var value = field.val();
                        if (obj.cid.value === value) {
                            obj.containers.cid._successText.show();
                            return;
                        }

                        if (!value.match(obj.cid.regexp)) {
                            obj.containers.cid._errorText.text(_("Invalid ID"));
                            field.addClass("errorInput");
                            obj.containers.cid._errorText.show();
                            return;
                        }

                        obj.saveButton.addClass("disabled");
                        field.prop("disabled", true);

                        obj.containers.cid._waitSpinner.show();
                        obj.containers.cid.isCidExists(obj, value,
                            function () {
                                obj.containers.cid._errorText.text(_("ID not available"));
                                field.addClass("errorInput");
                                obj.containers.cid._errorText.show();
                            },
                            function () {
                                obj.containers.cid._successText.show();
                                obj.cid.value = value;
                                obj.cid.real = value.replace("\\c\\", "");
                                obj.saveButton.removeClass("disabled");

                                obj.containers.cid.onCidChanged(obj);
                            },
                            function () {
                                obj.containers.cid._waitSpinner.hide();
                                field.prop("disabled", false);
                            });
                    });

                    var errorContainer = $('<div class="errorText"></div>');
                    obj.containers.cid._error = errorContainer;
                    td3.append(errorContainer);

                    obj.containers.cid._errorText = $('<div style="display: none;" class="errorFieldText"></div>');
                    errorContainer.append(obj.containers.cid._errorText);

                    obj.containers.cid._successText = $('<div style="display: none;" class="successFieldText">'
                        + _("ID available")
                        + '</div>');
                    errorContainer.append(obj.containers.cid._successText);


                    obj.containers.cid._waitSpinner = $('<div style="display: none;" class="spinner"></div>');
                    errorContainer.append(obj.containers.cid._waitSpinner);


                    if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR &&
                        obj.action === $.conferencePlugin.CURRENT_ACTION.CREATE) {
                        obj.containers.cid._successText.show();

                        var tr3 = $('<tr></tr>');
                        tr3.append('<td></td>');
                        tr3.append('<td class="underlayText" colspan="2">'
                            + _("Please note that changing Conference ID will be unavailable once the conference has been created")
                            + '</td>');
                        return tr1.add(tr2).add(tr3);
                    }

                    return tr1.add(tr2);

                },

                isCidExists: function (obj, cid, existsCallback, notExistsCallback, alwaysCallback) {
                    if (obj.containers.cid._cidExistsHxr !== null) {
                        obj.containers.cid._cidExistsHxr.abort();
                    }

                    obj.containers.cid._cidExistsHxr = $.post(obj.handlers.cidExists, {'key': cid}, null, "json")
                        .success(function (data) {
                            if (data.status === true) {
                                existsCallback(obj, cid);
                            } else {
                                notExistsCallback(obj, cid);
                            }
                        })
                        .fail(function () {
                            notExistsCallback(obj, cid);
                        })
                        .always(function () {
                            obj.containers.cid._cidExistsHxr = null;
                            if (typeof alwaysCallback === "function") {
                                alwaysCallback(obj, cid);
                            }
                        });
                },
                /**
                 * Установить значение поля ввода
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                val: function (obj) {
                    return obj.containers.cid._field.val();
                },

                onCidChanged: function (obj) {
                    obj.containers.integration.onCidChanged(obj);
                    // временно obj.containers.rtsp.onCidChanged(obj);
                },
                /**
                 * Поле ввода айди
                 */
                _field: null,
                /**
                 * Контейнер с ошибкой
                 */
                _error: null,
                /**
                 * Контейнер с текстом ошибки
                 */
                _errorText: null,
                /**
                 * Контейнер с текстом успешной проверки CID-a
                 */
                _successText: null,
                /**
                 * Крутилка проверки CID-a
                 */
                _waitSpinner: null,
                /**
                 * Ajax проверки cid-a
                 */
                _cidExistsHxr: null,
                /**
                 * Имеет ли ошибки данное поле
                 */
                hasError: false,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для контейнера алиаса конференции
             */
            alias: {
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.alias._rendered === null) {
                        obj.containers.alias._rendered = obj.containers.alias._render(obj);
                    }

                    return obj.containers.alias._rendered;
                },
                /**
                 * Рендерит контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var tr1 = $('<tr>');

                    var td1 = $('<td></td>');
                    td1.append('<label for="' + obj.prefix + 'alias">' + _("Alias") + ':</label>');
                    tr1.append(td1);

                    var field = $('<input  class="fullBlock" type="text" />');
                    var alias = (obj.cid.alias === null || obj.cid.alias === undefined) ? "" : obj.cid.alias;

                    field.val(alias);
                    field.prop("id", obj.prefix + "alias");
                    field.prop("name", obj.prefix + "alias");

                    field.keyup(function () {
                        obj.cid.alias = field.val();
                        obj.containers.alias._hideError(obj);
                    });

                    obj.containers.alias._field = field;

                    var td = $('<td>');
                    td.append(field);
                    tr1.append(td);

                    var td3 = $('<td></td>');
                    var error = $('<span style="display: none;" class="error"></span>');
                    obj.containers.alias._error = error;
                    td3.append(error);

                    tr1.append(td3);

                    return tr1;

                },
                /**
                 * Валидация алиаса
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                validate: function (obj) {
                    var regexp = new RegExp(obj.containers.alias.regexp, "gi");
                    return regexp.test(obj.containers.alias._field.val());
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                _showError: function (obj) {
                    obj.containers.alias._error.empty();
                    obj.containers.alias._error.text(_("Invalid conference alias"));
                    obj.containers.alias._error.show();
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                _hideError: function (obj) {
                    obj.containers.alias._error.empty();
                    obj.containers.alias._error.hide();
                },
                /**
                 * Установить значение поля ввода
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                val: function (obj) {
                    return obj.containers.alias._field.val();
                },

                regexp: "^[а-яА-ЯёЁa-zA-Z0-9-_]+$",
                /**
                 * Поле ввода алиаса
                 */
                _field: null,
                /**
                 * Контейнер для ошибки
                 */
                _error: null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },
            /**
             * Объект для хранения контейнера поля ввода udp
             */
            udp: {
                /**
                 * Возвращает контейнер поля ввода udp адреса
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.udp._rendered === null) {
                        obj.containers.udp._rendered = obj.containers.udp._render(obj);
                    }

                    return obj.containers.udp._rendered;
                },
                /**
                 * Рендерит контейнер поля ввода udp адреса
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Создаем ряд таблицы
                    var tr1 = $('<tr></tr>');
                    var td1 = $('<td colspan="3"></td>');
                    tr1.append(td1);

                    //Создаем чекбокс выключения/выключения udp
                    obj.containers.udp._checkbox = $('<input type="checkbox" />');
                    var checkbox = obj.containers.udp._checkbox;
                    //Если udp включен, то включаем чекбокс
                    if (obj.udp.status === true || obj.udp.status === 1) {
                        checkbox.prop("checked", true);
                    }
                    //Айди чекбоскса
                    checkbox.prop("id", obj.prefix + "udpMulticast");
                    //Имя чекбокса
                    checkbox.prop("name", obj.prefix + "udpMulticast");
                    //Добавляем чекбокс в ячейку
                    td1.append(checkbox);

                    //Создаем лэйбл для чекбокса
                    obj.containers.udp._checkboxLabel = $('<label for="' + obj.prefix + 'udpMulticast">&nbsp;'
                        + _("Use UDP Multicast in the conference") + ':</label>');
                    //Добавляем лэйбл в ячейку
                    td1.append(obj.containers.udp._checkboxLabel);

                    //Второй ряд таблицы
                    var tr2 = $('<tr></tr>');
                    var td2 = $('<td></td>');
                    tr2.append(td2);

                    //Создаем лэйбл для поля с адресом
                    obj.containers.udp._addressLabel = $('<label for="' + obj.prefix + 'multicastAddress"  class="leftMargin">'
                        + _("Multicast address") + ': </label>');
                    //Добавляем лэйбл в ячейку
                    td2.append(obj.containers.udp._addressLabel);

                    //Создаем ячейку для поля ввода адреса
                    var td3 = $('<td></td>');
                    tr2.append(td3);

                    //Cоздаем поле ввода адреса
                    obj.containers.udp._addressField = $('<input onclick="this.select();" type="text" />');
                    var field = obj.containers.udp._addressField;
                    //Адрес udp
                    var udp = (obj.udp.address === null || obj.udp.address === undefined) ? "" : obj.udp.address;
                    //Устанвливаем адрес
                    field.val(udp);
                    //Устанавливаем айди поля
                    field.prop("id", obj.prefix + "multicastAddress");
                    //Устанавливаем имя поля
                    field.prop("name", obj.prefix + "multicastAddress");
                    //В том случае, если udp не включен, отключаем поле
                    if (obj.udp.status !== true && obj.udp.status !== 1) {
                        field.attr('readonly', 'readonly');
                        field.addClass('disabled');
                    }
                    //Добавляем поле ввода в ячейку
                    td3.append(field);

                    //Добавляем ячейку для ошибки
                    var td4 = $('<td>');
                    var error = this._error;
                    error.text(_("Invalid address"));
                    error.hide();

                    td4.append(error);
                    tr2.append(td4);

                    field.keyup(function () {
                        if (obj.containers.udp.isValid(obj)) {
                            error.hide();
                            return;
                        }

                        error.show();
                    });


                    //Обрабатываем клик по чекбоксу
                    checkbox.click(function () {
                        //Сохраняем выбор пользователя
                        obj.udp.status = this.checked;

                        ///Если пользователь выключил udp, отключаем поле ввода адреса
                        if (!this.checked) {
                            field.attr("readonly", "readonly");
                            field.addClass("disabled");
                            error.hide();
                        }
                        //Если пользователь включил udp, позволяем ему редактировть поле ввода адреса
                        else {
                            field.removeAttr("readonly");
                            field.removeClass("disabled");
                            if (!obj.containers.udp.isValid(obj)) {
                                error.show();
                            }
                        }
                        //А так-же измениям статус выбора rtsp вещания (если есть лицензия на rtsp) т.к. их нельзя включать одновременно
                        if (obj.rtsp.allowed) {
                            obj.containers.rtsp.setEnabled(obj, !this.checked);
                        }
                    });

                    if (!obj.udp.allowed) {
                        var localeString = _('Not available in your <a href="%license_url">license</a>').replace(/<\/?[^>]+>/gi, '');
                        obj.containers.udp._checkbox.attr("title", localeString);
                    }

                    //Подсказка по udp
                    var tr3 = $('<tr></tr>');
                    var td5 = $('<td colspan="3"></td>');
                    var udpDescription = $('<label class="leftMargin smallText">' +
                        _("This feature requires a special configuration of your network infrastructure. Conference recording, WebRTC broadcasting and RTSP are not available in a UDP Multicast conference")
                        + '.</label>');
                    td5.append(udpDescription);
                    tr3.append(td5);

                    obj.containers.udp._udpDescription = udpDescription;

                    return tr1.add(tr2).add(tr3);
                },
                _error: $('<span class="error"></span>'),
                /**
                 * Поле ввода udp адреса
                 */
                _addressField: null,
                /**
                 * Чекбокс включения udp multicast
                 */
                _checkbox: null,
                /**
                 * Лэйбл для чекбоса
                 */
                _checkboxLabel: null,
                /**
                 * Лэйбл для адреса
                 */
                _addressLabel: null,
                /**
                 * Описание udp
                 */
                _udpDescription: null,
                /**
                 * Включен или выключен udp multicast
                 * @param {std_obj} obj
                 * @returns {Boolean}
                 */
                status: function (obj) {
                    return obj.udp.status;
                },
                /**
                 * Возвращает установленный адрес udp
                 * @param {std_obj} obj
                 * @returns {String}
                 */
                address: function (obj) {
                    return obj.containers.udp._addressField.val();
                },
                /**
                 * Валидирует Multicast Address
                 * @param obj
                 * @returns {boolean}
                 */
                isValid: function (obj) {
                    var address = obj.containers.udp.address(obj);

                    /**
                     *
                     * @param port1
                     * @param port2
                     * @returns {boolean}
                     */
                    var validPort = function (port1, port2) {
                        if (port1 < 1 || port1 > 65535 || port1 > port2) {
                            return false;
                        }

                        if (port2 < 1 || port2 > 65535) {
                            return false;
                        }

                        return true;
                    };

                    /**
                     * valid format: ( 224.0.0.0 - 239.255.255.255 ) : (1 - 65535);
                     * example: 224.0.1.224:4000-6000
                     * @param {string} value
                     * @returns {boolean}
                     */
                    var validIp4Address = function (value) {
                        var regex = /^(\d+)\.(\d+).(\d+).(\d+):(\d+)\-(\d+)$/i;
                        var match = regex.exec(value);
                        if (match === null) {
                            return false;
                        }

                        var match0 = parseInt(match[0]);
                        if (match0 < 224 || match0 > 239) {
                            return false;
                        }

                        for (var i = 1; i < 4; i++) {
                            var number = parseInt(match[i]);
                            if (number < 0 || number > 255) {
                                return false;
                            }
                        }

                        var port1 = parseInt(match[5]);
                        var port2 = parseInt(match[6]);

                        return validPort(port1, port2);
                    };

                    /**
                     * valid format: ff00::/8 ( [ff00::1] - [ffff:..:ffff] ) : (1 - 65535)
                     * example: [FF00:2:3:4:5:6:7:8]:4000-6000
                     * @param {string} value
                     * @returns {boolean}
                     */
                    var validIp6MulticasAddress = function (value) {
                        var HEXADECATETO = "[0-9a-fA-F]{1,4}";
                        var FIRST_HEXADECATETO = "FF[0-9a-fA-F]{2}";

                        var MULTICAST_IPV6 = "^\\[(";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){7}|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,6}::|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,5}::" + HEXADECATETO + "|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,4}:(:" + HEXADECATETO + "){2}|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,3}:(:" + HEXADECATETO + "){3}|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,2}:(:" + HEXADECATETO + "){4}|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + "(:" + HEXADECATETO + "){0,1}:(:" + HEXADECATETO + "){5}|";
                        MULTICAST_IPV6 += FIRST_HEXADECATETO + ":(:" + HEXADECATETO + "){6}";
                        MULTICAST_IPV6 += ")\\]:(\\d+)\-(\\d+)$";

                        var regex = new RegExp(MULTICAST_IPV6, 'i');
                        var match = regex.exec(value);
                        if (match === null) {
                            return false;
                        }

                        var port1 = parseInt(match[14]);
                        var port2 = parseInt(match[15]);
                        return validPort(port1, port2);
                    };

                    /**
                     * valid format: host : (1 - 65535)
                     * example: multicast.domain.com:4000-6000
                     * @param {string} value
                     * @returns {boolean}
                     */
                    var validHostname = function (value) {
                        var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]:(\d+)\-(\d+))$/i;
                        var match = regex.exec(value);

                        if (match === null) {
                            return false;
                        }

                        var port1 = parseInt(match[4]);
                        var port2 = parseInt(match[5]);
                        return validPort(port1, port2);
                    };

                    if (validIp4Address(address) || validIp4Address(address) || validIp6MulticasAddress(address)) {
                        return true;
                    }

                    return false;
                },
                /**
                 * Включает или выключает блок настройки параметров udp
                 * @param {std_obj} obj
                 * @param {boolean} status
                 * @returns {undefined}
                 */
                setEnabled: function (obj, status) {
                    //Если необходимо включить блок
                    if (status) {
                        //Нельзя включать, если udp нет в лицензии
                        if (!obj.udp.allowed) {
                            return;
                        }
                        //Включаем чекбокс
                        obj.containers.udp._checkbox.prop("disabled", false);
                        //Убираем у чекбокса описание причны его отключения
                        obj.containers.udp._checkbox.removeAttr("title");
                        //Убираем затемнение у лэйбла чекбокса
                        obj.containers.udp._checkboxLabel.removeClass("disabled");
                        //Включаем поле ввода адреса
                        obj.containers.udp._addressLabel.removeClass("disabled");
                        //Убираем затемнение у лэйбла поля с адресом
                        obj.containers.udp._addressField.prop("disabled", false);
                        //Убираем затемнение у описания udp
                        obj.containers.udp._udpDescription.removeClass("disabled");
                    }
                    //Если необходимо выключить блок
                    else {
                        //Выключаем чекбокс
                        obj.containers.udp._checkbox.prop("disabled", true);
                        //Добавляем чекбоксу описание причны его отключения
                        if (obj.udp.allowed) {
                            obj.containers.udp._checkbox.attr("title", _("Unavailable if RTSP broadcasting is enabled"));
                        }
                        //Добавляем затемнение у лэйбла чекбокса
                        obj.containers.udp._checkboxLabel.addClass("disabled");
                        //Добавляем затемнение к лэйблу поля с адресом
                        obj.containers.udp._addressLabel.addClass("disabled");
                        //Выключаем поле ввода адреса
                        obj.containers.udp._addressField.prop("disabled", true);
                        //Добавляем затемнение  описанию udp
                        obj.containers.udp._udpDescription.addClass("disabled");
                    }
                },
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для ссылки разворачивающей доп.настройки
             */
            showAdvanced: {
                /**
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.showAdvanced._rendered === null) {
                        obj.containers.showAdvanced._rendered = obj.containers.showAdvanced._render(obj);
                    }

                    return obj.containers.showAdvanced._rendered;
                },
                /**
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {

                    //Создаем ряд таблицы
                    var tr = $('<tr></tr>');
                    var td = $('<td colspan="3"></td>');
                    var anchor = $('<a href="#">' + _("Show advanced settings") + '</a>');

                    anchor.click(function () {
                        if (obj.containers.showAdvanced.collapsed) {
                            obj.containers.udp.get(obj).show();
                            obj.containers.showAdvanced.setExpanded(obj);
                        } else {
                            obj.containers.udp.get(obj).hide();
                            obj.containers.showAdvanced.setCollapsed(obj);
                        }

                        return false;
                    });

                    td.append(anchor);
                    obj.containers.showAdvanced._anchor = anchor;
                    tr.append(td);

                    return tr;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                setCollapsed: function (obj) {
                    obj.containers.showAdvanced._anchor.text(_("Show advanced settings"));
                    obj.containers.showAdvanced.collapsed = true;
                },

                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                setExpanded: function (obj) {
                    obj.containers.showAdvanced._anchor.text(_("Hide advanced settings"));
                    obj.containers.showAdvanced.collapsed = false;
                },

                collapsed: true,

                _anchor: null,
                _rendered: null
            },


            /**
             * Объект для хранения поля ввода rtsp
             */
            rtsp: {
                /**
                 * Возвращает контейнер rtsp
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.rtsp._rendered === null) {
                        obj.containers.rtsp._rendered = obj.containers.rtsp._render(obj);
                    }

                    return obj.containers.rtsp._rendered;
                },
                /**
                 * Рендерит контейнер rtsp
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div style="position: relative;" class="whiteBlock extBlock"></div>');

                    obj.containers.rtsp._fade = $('<div style="display: none;" class="transparentBlock"></div>');
                    obj.containers.rtsp._fade.attr("title", _("Unavailable if UDP Multicast is enabled"));
                    container.append(obj.containers.rtsp._fade);

                    var table = $('<table>', {id: 'streaming'});
                    table.append('<colgroup width="150"></colgroup>');
                    table.append('<colgroup></colgroup>');
                    table.append('<colgroup width="100"></colgroup>');
                    table.append(obj.containers.rtsp.broadcast.get(obj));

                    //Если udp был включен, или нет лицензии  RTSP, то выключаем текущий блок
                    if (obj.udp.status === true || obj.udp.status === 1/* || !obj.rtsp.allowed*/) {
                        obj.containers.rtsp.setEnabled(obj, false);
                    }
                    //Если rtsp был включен в настройках, а так-же выключен udp, то включаем чекбокс, и отключаем udp
                    else if (obj.rtsp.status === true || obj.rtsp.status === 1) {
                        obj.containers.rtsp.setEnabled(obj, true);
                        //Выключаем udp, но только в том случае, если RTSP есть в лицензии, что-бы не получить два 
                        //заблокированных состояния (udp и rtsp)
                        if (obj.rtsp.allowed) {
                            obj.containers.udp.setEnabled(obj, false);
                        }
                    } else if (obj.rtsp.status !== true && obj.rtsp.status !== 1) {
                        // временно obj.containers.rtsp.setEnabled(obj, false);
                    }

                    //Если rtsp нет в лицензии, добавляем блоку соотвествующий title
                    /*if(!obj.rtsp.allowed){
                        //Вырезаем сслыку на лицензию
                        var localeString = obj.locale.notAvailableInLicense.replace(/<\/?[^>]+>/gi, '');
                        obj.containers.rtsp._fade.attr("title", localeString);
                    }*/

                    container.append(table);

                    return container;
                },

                broadcast: {
                    _rendered: null,

                    /**
                     *
                     * @param {std_obj} obj
                     * @returns {undefined}
                     */
                    get: function (obj) {
                        if (obj.containers.rtsp.broadcast._rendered === null) {
                            obj.containers.rtsp.broadcast._rendered = obj.containers.rtsp.broadcast._render(obj);
                        }

                        return obj.containers.rtsp.broadcast._rendered;
                    },

                    _render: function (obj) {
                        var tr = $('<tr>');

                        var div = $('<div>');
                        div.append($('<span>').html('<i class="zmdi zmdi-rss zmdi-hc-2x"></i>'))
                            .append($('<span>', {'class': 'stream'}).text(_("Streaming") + ':'));

                        tr.append($('<td>').append(div))
                            .append($('<td>').append(obj.containers.rtsp.presetManager.get(obj)));

                        return tr;
                    }
                },

                onCidChanged: function (obj) {

                },

                setAddress: function (obj, value) {
                    // временно obj.containers.rtsp.broadcast._addressField.val("rtsp://" + obj.outsideUrl + value);
                },

                /**
                 * Включает или выключает раздел
                 * @param {std_obj} obj
                 * @param {boolean} enabled
                 * @returns {undefined}
                 */
                setEnabled: function (obj, enabled) {
                    //Если необходимо включить раздел
                    if (enabled) {
                        obj.containers.rtsp._fade.hide();
                    }
                    //Если надо выключить раздел
                    else {
                        obj.containers.rtsp._fade.show();
                    }
                },

                presetManager: {
                    _rendered: null,
                    _renderedPlugin: null,

                    get: function (obj) {
                        if (this._rendered === null) {
                            this._rendered = this.init(obj);
                        }

                        return this._rendered;
                    },

                    init: function (obj) {
                        obj.containers.rtsp.presetManager._renderedPlugin = $('<div>');

                        obj.plugins.presetManagerPlugin = obj.plugins.presetManagerPlugin.bind(obj.plugins.presetManagerObj(obj), obj.containers.rtsp.presetManager._renderedPlugin);

                        if (!obj.rtsp.allowed) {
                            var errorText = _('Not available in your license. <a>How to enable this feature?</a>').replace("<a>", "<a id='dlg_broadcasting' href='#'>");

                            var block = $('<span></span>');
                            block.html(errorText);
                            block.find('#dlg_broadcasting').extensionsPopup('streaming');

                            return block;
                        }

                        return obj.containers.rtsp.presetManager._renderedPlugin;
                    },

                    savePreset: function (obj, preset_id) {
                        obj.containers.udp.setEnabled(obj, false);
                        obj.rtsp.preset = preset_id;
                        obj.rtsp.status = 1;
                    },

                    deletePreset: function (obj, preset_id) {
                        if (obj.rtsp.preset == preset_id) {
                            obj.containers.rtsp.presetManager.broadcastDisable(obj);
                        }
                    },

                    broadcastDisable: function (obj) {
                        obj.containers.udp.setEnabled(obj, true);
                        obj.rtsp.status = 0;
                        obj.rtsp.preset = null;
                    }
                },

                _fade: null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для  параметров гостевого доступа
             */
            guestAccess: {
                /**
                 * Возвращает контейнер с настройками гостевого доступа
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.guestAccess._rendered === null) {
                        obj.containers.guestAccess._rendered = obj.containers.guestAccess._render(obj);
                    }

                    return obj.containers.guestAccess._rendered;
                },
                /**
                 * Рендерит контейнер с настройками гостевого доступа
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var enabled = true;
                    if (obj.guestAccess.count === 0) {
                        enabled = false;
                    }


                    var sendMsg = obj.containers.guestAccess._sendMsg;
                    if (obj.guestAccess.sendMsg) {
                        sendMsg.prop("checked", true);
                    } else {
                        sendMsg.prop("checked", false);
                    }
                    sendMsg.prop("id", obj.prefix + "guestMsg");
                    sendMsg.prop("name", obj.prefix + "guestMsg");


                    var sendAudio = this._sendAudio;
                    if (obj.guestAccess.sendAudio) {
                        sendAudio.prop("checked", true);
                    } else {
                        sendAudio.prop("checked", false);
                    }
                    sendAudio.prop("id", obj.prefix + "guestAudio");
                    sendAudio.prop("name", obj.prefix + "guestAudio");


                    var sendVideo = this._sendVideo;
                    if (obj.guestAccess.sendVideo) {
                        sendVideo.prop("checked", true);
                    } else {
                        sendVideo.prop("checked", false);
                    }
                    sendVideo.prop("id", obj.prefix + "guestVideo");
                    sendVideo.prop("name", obj.prefix + "guestVideo");

                    if (!enabled) {
                        sendMsg.prop("disabled", true);
                        sendAudio.prop("disabled", true);
                        sendVideo.prop("disabled", true);
                    }


                    /*guestAccess.click(function(){
                        var status = !$(this).prop("checked");
                        sendVideo.prop("disabled", status);
                        sendMsg.prop("disabled", status);

                        if(obj.plugins.participantPlugin !== null){
                            if(status === false){
                                obj.plugins.participantsPlugin.containers.buttonsPanel.showButton(
                                        obj.plugins.participantsPlugin, 'inviteGuests');
                            } else {
                                obj.plugins.participantsPlugin.containers.buttonsPanel.hideButton(
                                        obj.plugins.participantsPlugin, 'inviteGuests');
                                obj.plugins.participantsPlugin.participants.removeGuests(obj.plugins.participantsPlugin);
                            }
                        }
                    });*/


                    var tr2 = $('<tr>');
                    var td2 = $('<td colspan="3">');

                    var guestCountDescripiton = $('<span></span>');
                    guestCountDescripiton.append('<span>' + _("The maximum number of guests") + ': </span>');
                    if (obj.guestAccess.count === -1) {
                        guestCountDescripiton.append('<b>' + _("unlimited") + '</b>');
                    } else {
                        guestCountDescripiton.append('<b>&nbsp;&nbsp;' + obj.guestAccess.count + '&nbsp;&nbsp;&nbsp;</b>');
                        guestCountDescripiton.append('<a id="increaseLink" href="#">' + _("Increase") + '</a>');
                    }
                    td2.append(guestCountDescripiton);
                    tr2.append(td2);


                    var tr3 = $('<tr>');
                    var td3 = $('<td colspan="3">');
                    var div1 = $('<div class="leftMargin"></div>');
                    div1.append(sendAudio);
                    var label2 = $('<label for="' + obj.prefix + 'guestAudio">&nbsp;' + _("Allow guests to transmit audio") + '</label>');
                    div1.append(label2);
                    td3.append(div1);
                    tr3.append(td3);

                    var tr4 = $('<tr>');
                    var td4 = $('<td colspan="3">');
                    var div1 = $('<div class="leftMargin"></div>');
                    div1.append(sendVideo);
                    var label3 = $('<label for="' + obj.prefix + 'guestVideo">&nbsp;' + _("Allow guests to transmit video") + '</label>');
                    div1.append(label3);
                    td4.append(div1);
                    tr4.append(td4);

                    var tr5 = $('<tr>');
                    var td5 = $('<td colspan="3">');
                    var div2 = $('<div class="leftMargin"></div>');
                    div2.append(sendMsg);
                    var label4 = $('<label for="' + obj.prefix + 'guestMsg">&nbsp;' + _("Allow guests to send messages") + '</label>');
                    div2.append(label4);
                    td5.append(div2);
                    tr5.append(td5);

                    if (!enabled) {
                        label2.addClass("disabled");
                        label3.addClass("disabled");
                        label4.addClass("disabled");
                    }


                    return tr2.add(tr3).add(tr4).add(tr5);

                },
                /**
                 * Включен ли гостевой доступ
                 * @param {std_obj} obj
                 * @returns {Boolean}
                 */
                allow: function (obj) {
                    return obj.containers.guestAccess._guestAccess.prop("checked");
                },
                /**
                 * Включена-ли отправка сообщений гостями
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                allowMsg: function (obj) {
                    return obj.containers.guestAccess._sendMsg.prop("checked");
                },
                /**
                 * Включена-ли отправка аудио гостями
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                allowAudio: function (obj) {
                    return obj.containers.guestAccess._sendAudio.prop("checked");
                },
                /**
                 * Включена-ли отправка видео гостями
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                allowVideo: function (obj) {
                    return obj.containers.guestAccess._sendVideo.prop("checked");
                },
                /**
                 * Чекбокс разрешения отправки гостями сообщений
                 */
                _sendMsg: $('<input type="checkbox" />'),
                /**
                 * Чекбокс разрешения отправки аудио гостями
                 */
                _sendAudio: $('<input type="checkbox" />'),
                /**
                 * Чекбокс разрешения отправки видео гостями
                 */
                _sendVideo: $('<input type="checkbox" />'),
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для контейнреа модератора конеференции
             */
            owner: {
                /**
                 * Возвращает контейнер панели добавления пользователей из списка
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.owner._rendered === null) {
                        obj.containers.owner._rendered = obj.containers.owner._render(obj);
                    }
                    return obj.containers.owner._rendered;
                },
                /**
                 * Рендерит плагин
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<tr></tr>');
                    //Кнопка открытия окна плагина
                    obj.containers.owner._showPluginButton = $('<a id="' + obj.prefix + 'selectOwner" href="#">'
                        + _("Select") + '</a>');

                    //Если мы редактируем созданную конференцию, то дизеблим ссылку до тех пор, пока не загрузится владелец
                    if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                        obj.containers.owner._showPluginButton.addClass("disabled");
                    }
                    //Добавляем кнопку к контейнеру
                    container.append('<td>' + _("Owner") + ': </td>');
                    container.append($('<td></td>').append(obj.containers.owner._showPluginButton));

                    obj.containers.owner._error = $('<span style="display: none;" class="error">'
                        + _("You didn't choose the conference owner")
                        + '</span>');
                    container.append($('<td></td>').append(obj.containers.owner._error));

                    obj.containers.owner._listFullDialog = $('<div>');
                    obj.containers.owner._listFullDialog.append('<div>' + _("You have reached the maximum number of participants allowed. To add a host, please remove one participant from the list.") + '</div>');
                    obj.containers.owner._listFullDialog.dialog({
                        autoOpen: false,
                        modal: true,
                        draggable: true,
                        resizable: true,
                        buttons: [
                            {
                                text: _("Ok"),
                                id: obj.prefix + "buttonCloseOwnerErrorDialog",
                                click: function () {
                                    obj.containers.owner._listFullDialog.dialog("close");
                                }
                            }
                        ]
                    });
                    obj.containers.owner._listFullDialog.dialog("option", "title", _("Error"));

                    obj.containers.owner._renderedPlugin = $('<div class="tc-plugin-ui">');
                    //Плагин добавления из списка
                    obj.plugins.ownerPlugin = obj.plugins.memberListPlugin.bind(obj.containers.owner._renderedPlugin,
                        obj.plugins.getOwnerObj(obj));
                    //Применяем окно
                    obj.containers.owner._applyDialog(obj, obj.containers.owner._renderedPlugin);
                    //Добавляем клик для кнопки открытия окна
                    obj.containers.owner._showPluginButton.click(function () {
                        //Если ссылка отключена - ничего не делаем
                        if (obj.containers.owner._showPluginButton.hasClass("disabled")) {
                            return false;
                        }
                        //В том случае, если есть плагин с пользователеями конференции, проверям список пользователей,
                        // и если он полон, выводим предупреждение
                        if (obj.plugins.participantsPlugin !== null) {
                            if (obj.plugins.participantsPlugin.participants.isFull(obj.plugins.participantsPlugin) &&
                                !obj.plugins.participantsPlugin.participants.list.hasOwnProperty(obj.owner)) {
                                obj.containers.owner._listFullDialog.dialog("open");
                            } else {
                                obj.plugins.ownerPlugin.refreshList(obj.plugins.ownerPlugin);
                                obj.containers.owner._renderedPlugin.dialog("open");
                            }
                        }
                        //Если нет плагина, то просто открываем окно добавления
                        else {
                            obj.plugins.ownerPlugin.refreshList(obj.plugins.ownerPlugin);
                            obj.containers.owner._renderedPlugin.dialog("open");
                        }
                    });

                    return container;
                },
                /**
                 * Применить диалог к плагину
                 * @param {std_ob} obj
                 * @param {jQuery} container
                 * @returns {undefined}
                 */
                _applyDialog: function (obj, container) {
                    container.dialog({
                        autoOpen: false,
                        height: (obj.containers.owner.height === undefined ? 600 : obj.containers.owner.height),
                        width: (obj.containers.owner.width === undefined ? 1024 : obj.containers.owner.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        close: function () {
                            obj.plugins.ownerPlugin.stop(obj.plugins.ownerPlugin);
                        },
                        buttons: [
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseOwnerDialog",
                                click: function () {
                                    container.dialog("close");
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Owner"));
                },
                /**
                 * Скрывает плагин выбора модератора
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hidePlugin: function (obj) {
                    obj.containers.owner._renderedPlugin.dialog("close");
                },
                /**
                 * Устанавливает пользователя в качестве владельца конференции
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @returns {undefined}
                 */
                setOwner: function (obj, member) {
                    obj.owner = member.id;
                    obj.containers.owner._showPluginButton.text(member.displayName);
                    obj.containers.owner._error.hide();
                },

                showError: function (obj) {
                    obj.containers.owner._error.show();
                    document.location.hash = "";
                    document.location.hash = 'wrapper';
                },
                /**
                 * Кнопка открытия плагина
                 */
                _showPluginButton: null,
                /**
                 * Отрендеренный плагин
                 */
                _renderedPlugin: null,
                /**
                 * Окно ошибки, что список пользователей полон
                 */
                _listFullDialog: null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             *
             */
            additional: {
                /**
                 * Возвращает отрендеренный контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.additional._rendered === null) {
                        obj.containers.additional._rendered = obj.containers.additional._render(obj);
                    }

                    return obj.containers.additional._rendered;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Создаем контейнер для плагина
                    var container = $('<div class="whiteBlock extBlock"></div>');

                    var table = $('<table></table>');
                    table.append('<colgroup width="150" />');
                    table.append('<colgroup />');
                    table.append('<colgroup width="100" />');
                    container.append(table);

                    table.append(obj.containers.outside.get(obj));
                    table.append(obj.containers.description.get(obj));


                    return container;
                },

                /**
                 *
                 */
                _rendered: null
            },

            description: {
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.description._rendered === null) {
                        obj.containers.description._rendered = obj.containers.description._render(obj);
                    }

                    return obj.containers.description._rendered;
                },
                /**
                 * Рендерит контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<tr></tr>');
                    obj.containers.description.dialog = obj.containers.description._renderDialog(obj);
                    obj.containers.description.pasteOverflowDialog = obj.containers.description._renderOverflowDialog(obj);


                    container.append('<td>' + _("Description") + ":</td>");

                    var showDescriptionDialogBtn = $('<a href="#">' + _("Edit description") + '</a>');
                    showDescriptionDialogBtn.click(function () {
                        obj.containers.description.dialog.dialog("open");
                    });

                    container.append($('<td></td>').append(showDescriptionDialogBtn));
                    container.append('<td></td>');


                    return container;

                },

                _renderDialog: function (obj) {
                    var container = $('<div></div>');
                    container.append('<h2>' + _("Enter the conference description") + ':</h2>');
                    container.append('<div><br/></div>');

                    var textarea = $('<textarea id="' + obj.prefix + 'conferenceDescription">' + obj.description + '</textarea>');
                    container.append(textarea);

                    tinymce.init({
                        selector: '#' + obj.prefix + 'conferenceDescription',
                        plugins: [
                            "advlist autolink lists link charmap preview anchor",
                            "searchreplace visualblocks code",
                            "insertdatetime  contextmenu paste"
                        ],
                        doctype: '<!DOCTYPE HTML>',
                        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link ",
                        height: 240,
                        count_chars: 0,
                        limit_chars: $.conferencePlugin.DESCRIPTION_MAX_LENGTH,

                        setup: function (editor) {
                            editor.on("init", function (e) {
                                editor.settings.count_chars = editor.getContent().length;
                            });

                            editor.on("keydown", function (e) {
                                editor.settings.count_chars = editor.getContent().length;
                                if (editor.settings.count_chars >= editor.settings.limit_chars) {
                                    if (e.which !== 8 && e.which !== 46) {
                                        e.preventDefault();
                                    }
                                }
                            });
                        },
                        paste_preprocess: function (pasteObject, clipboard) {
                            var editor = tinymce.activeEditor;
                            var countChars = editor.settings.count_chars;
                            var limitChars = editor.settings.limit_chars;
                            var clipboardChars = clipboard.content.length;


                            if ((countChars + clipboardChars) > limitChars) {
                                clipboard.preventDefault();
                                clipboard.stopPropagation();

                                obj.containers.description.showPasteOverflow(obj);
                            }
                            else {
                                editor.settings.count_chars += clipboardChars;
                            }

                        }
                    });

                    container.dialog({
                        autoOpen: false,
                        height: (obj.containers.description.height === undefined ? 520 : obj.containers.description.height),
                        width: (obj.containers.description.width === undefined ? 960 : obj.containers.description.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        title: _("Description"),
                        buttons: [
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseTinymce",
                                click: function (event) {
                                    obj.containers.description.onCancel(obj, container, event);
                                }
                            },
                            {
                                text: _("Save"),
                                id: obj.prefix + "buttonApplyTinymce",
                                click: function (event) {
                                    obj.containers.description.onApply(obj, container, event);
                                }
                            }
                        ],
                        open: function () {
                            tinymce.activeEditor.setContent(obj.description);
                            tinymce.activeEditor.show();
                        }
                    });

                    return container;
                },

                _renderOverflowDialog: function (obj) {
                    var container = $('<div></div>');
                    container.append('<span>' + _("Conference description cannot be larger than 10000 characters") + '</span>');

                    container.dialog({
                        title: _("Error"),
                        autoOpen: false,
                        modal: true,
                        draggable: true,
                        resizable: false,
                        buttons: [
                            {
                                text: _("Ok"),
                                click: function () {
                                    container.dialog("close");
                                }
                            }
                        ]
                    });

                    return container;
                },

                showPasteOverflow: function (obj) {
                    obj.containers.description.pasteOverflowDialog.dialog("open");
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                onCancel: function (obj) {
                    obj.containers.description.dialog.dialog("close");
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                onApply: function (obj) {
                    var description = tinymce.activeEditor.getContent();
                    obj.description = description;

                    obj.containers.description.dialog.dialog("close");
                },

                /**
                 * @type $
                 */
                dialog: null,
                /**
                 * type $
                 */
                pasteOverflowDialog: null,
                /**
                 * Отрендеренный контейнер
                 * @type $
                 */
                _rendered: null
            },

            /**
             * Объект для контейнера внешнего адреса конференции
             */
            outside: {
                /**
                 * Возвращает контейнер с внешним адресом конференции
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.outside._rendered === null) {
                        obj.containers.outside._rendered = obj.containers.outside._render(obj);
                    }

                    return obj.containers.outside._rendered;
                },
                /**
                 * Рендерит контейнер с внешним адресом конференций
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<tr></tr>');
                    container.append('<td>' + _("External page") + ":</td>");
                    var addressContainer = $('<td></td>');
                    addressContainer.append(obj.containers.outside._address);
                    if (!obj.sslEnabled) {
                        addressContainer.append('<br/><span class="error">'
                            + _('Full conference participation via WebRTC is available only when [a]HTTPS is on[/a]')
                                .replace("[a]", '<a target="_blank" href="/admin/web/https/">')
                                .replace("[/a]", "</a>")
                            + '</span>');
                    }
                    container.append(addressContainer);
                    container.append('<td></td>');

                    if (obj.action === $.conferencePlugin.CURRENT_ACTION.CREATE) {
                        obj.containers.outside._address.click(function () {
                            return false;
                        });
                        obj.containers.outside._address.addClass("disabled");
                    }

                    var cid = obj.cid.value;
                    if (cid === undefined || cid === null || cid.length === 0) {
                        obj.containers.outside.setAddress(obj, "");
                    } else {
                        cid = cid.replace(/\\/g, "/");
                        obj.containers.outside.setAddress(obj, cid);
                    }

                    return container;

                },
                /**
                 * Контейнер с внешним адресом
                 */
                _address: $('<a href="#" target="_blank"></a>'),
                /**
                 * Устанавливает внешний адрес конференции
                 * @param {std_obj} obj
                 * @param {String} path
                 * @returns {undefined}
                 */
                setAddress: function (obj, path) {
                    if (path.indexOf("/") === 0 && obj.webUrl.indexOf("/") === obj.webUrl.length - 1) {
                        path = path.substr(1);
                    }
                    obj.containers.outside._address.prop("href", obj.webUrl + path);
                    obj.containers.outside._address.text(obj.webUrl + path);
                },
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для хранения поля ввода rtsp
             */
            integration: {
                /**
                 * Возвращает контейнер rtsp
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.integration._rendered === null) {
                        obj.containers.integration._rendered = obj.containers.integration._render(obj);
                    }

                    return obj.containers.integration._rendered;
                },
                /**
                 * Рендерит контейнер rtsp
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div></div>');

                    obj.containers.integration._anchor = $('<a href="#">'
                        + _("HTML code for conference integration")
                        + '</a>');
                    obj.containers.integration._anchor.click(function () {
                        obj.containers.integration._dialog.dialog("open");
                        return false;
                    });
                    container.append(obj.containers.integration._anchor);

                    obj.containers.integration._dialog = obj.containers.integration._renderDialog(obj);

                    return container;
                },

                _renderDialog: function (obj) {
                    var container = $('<div></div>');
                    container.append('<h2>' + _("Use this code to embed the conference in external website") + ':</h2>');
                    container.append('<div><br/></div>');

                    var textarea = $('<textarea id="' + obj.prefix + 'integrationCode" class="' + obj.cssPrefix + 'integrationCode">'
                        + obj.description + '</textarea>');
                    container.append(textarea);
                    obj.containers.integration._codeTextArea = textarea;
                    obj.containers.integration._integrationObj = obj.containers.integration._createIntegrationCode(obj);
                    textarea.val(obj.containers.integration._integrationObj.prop('outerHTML'));

                    container.dialog({
                        autoOpen: false,
                        height: (obj.containers.description.height === undefined ? 400 : obj.containers.description.height),
                        width: (obj.containers.description.width === undefined ? 800 : obj.containers.description.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        dialogClass: 'tc-plugin-ui',
                        title: _("HTML code for conference integration"),
                        buttons: [
                            {
                                text: _("Ok"),
                                id: obj.prefix + "buttonCloseIntegrationDialog",
                                click: function (event) {
                                    container.dialog("close");
                                }
                            }
                        ]
                    });

                    return container;
                },

                _createIntegrationCode: function (obj) {
                    var iframe = $('<iframe allowfullscreen="allowfullscreen"></iframe>');

                    iframe.attr("width", "720");
                    iframe.attr("height", "405");
                    iframe.attr("allow", "microphone; camera");

                    iframe.attr("src", obj.webUrl + "/c/" + obj.cid.real);
                    return iframe;
                },

                onCidChanged: function (obj) {
                    obj.containers.integration._integrationObj.attr("src", obj.webUrl + "/c/" + obj.cid.real);
                    obj.containers.integration._codeTextArea.val(obj.containers.integration._integrationObj.prop('outerHTML'));
                },

                /**
                 * Показать блок
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    obj.containers.integration.get(obj).show();
                },

                /**
                 * Скрыть блок
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    obj.containers.integration.get(obj).hide();
                },

                _anchor: null,
                _integrationObj: null,
                _codeTextArea: null,
                _dialog: null,
                _rendered: null
            },
            /**
             * Кнопки управления плагином
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _renderButtons: function (obj) {
                var container = $('<div style="float: right;" class="contentMargin">');
                var saveTemplateButtonText = _('Add to templates');
                var saveTemplateButton = $('<span class="grayButton"></span>');
                saveTemplateButton.text(saveTemplateButtonText);
                obj.saveTemplateButton = saveTemplateButton;
                saveTemplateButton.click(function () {
                    if (saveTemplateButton.hasClass("disabled")) {
                        return false;
                    }
                    obj.onTemplateSave(obj);
                });

                var saveButton = $('<span class="grayButton leftMargin">' + _("Save") + '</span>');
                obj.saveButton = saveButton;
                saveButton.click(function () {
                    if (saveButton.hasClass("disabled")) {
                        return false;
                    }
                    obj.onSave(obj);
                });

                var cancelButton = $('<span class="grayButton leftMargin">' + _("Cancel") + '</span>');
                cancelButton.click(function () {
                    obj.onCancel(obj);
                });

                container.append(cancelButton).append(saveTemplateButton);
                container.append(cancelButton).append(saveButton);
                return container;
            },
            /**
             * Кнопка сохранения конфы
             */
            saveButton: null,
            /**
             * Кнопка сохранения шаблона конфы
             */
            saveTemplateButton: null,
            /**
             * Отрендеренная mainPanel
             */
            _rendered: null,


            /**
             * Объект для управления контейнером плагина выбора схемы конференции
             */
            schemaContainer: {
                /**
                 * Возвращает контейнер плагина выбора схемы
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.schemaContainer._rendered === null) {
                        obj.containers.schemaContainer._rendered = obj.containers.schemaContainer._render(obj);
                    }

                    return obj.containers.schemaContainer._rendered;
                },
                /**
                 * Рендирит панель плагина выбора схемы
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Создаем html для плагина
                    obj.containers.schemaContainer._renderedPlugin = $('<div class="tc-plugin-ui">');
                    obj.plugins.schemaPlugin = obj.plugins.schemaPlugin.bind(obj.plugins.getSchemaObj(obj),
                        obj.containers.schemaContainer._renderedPlugin);
                    //Добавляем плагину диалоговое окно
                    obj.containers.schemaContainer._applyDialog(obj, obj.containers.schemaContainer._renderedPlugin);

                    //Создаем кнопку открытия плагина
                    obj.containers.schemaContainer._showPluginButton = $('<a class="disabled" href="#">' + _("Select") + '</a>');

                    var container = $('<tr></tr>');
                    container.append('<td><span>' + _("Conference mode") + ':</span></td>');
                    container.append($('<td></td>').append(obj.containers.schemaContainer._showPluginButton));
                    var errorContainer = $('<div></div>');
                    container.append($('<td></td>').append(errorContainer));

                    //По клику на кнопку открываем окно плагина
                    obj.containers.schemaContainer._showPluginButton.click(function () {
                        if (obj.containers.schemaContainer._showPluginButton.hasClass("disabled")) {
                            return false;
                        }
                        obj.containers.schemaContainer._renderedPlugin.dialog("open");
                    });

                    return container;
                },
                /**
                 * Применить диалог к плагину
                 * @param {std_ob} obj
                 * @param {jQuery} container
                 * @returns {undefined}
                 */
                _applyDialog: function (obj, container) {
                    container.dialog({
                        autoOpen: false,
                        height: (obj.containers.schemaContainer.height === undefined ? 520 : obj.containers.schemaContainer.height),
                        width: (obj.containers.schemaContainer.width === undefined ? 1200 : obj.containers.schemaContainer.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        close: function (event) {
                            obj.containers.schemaContainer.onClose(obj, container, event);
                        },
                        buttons: [
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseScheme",
                                click: function (event) {
                                    obj.containers.schemaContainer.onCancel(obj, container, event);
                                }
                            },
                            {
                                text: _("Save"),
                                id: obj.prefix + "buttonApplyScheme",
                                click: function (event) {
                                    obj.containers.schemaContainer.onApply(obj, container, event);
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Conference mode"));
                },

                enablePluginBtn: function (obj) {
                    obj.containers.schemaContainer._showPluginButton.removeClass("disabled");
                },
                /**
                 * Установить кнопке название схемы
                 * @param {std_obj} obj
                 * @param {String} typeName название типа схемы
                 * @returns {undefined}
                 */
                setSchemaTitle: function (obj, typeName) {
                    obj.containers.schemaContainer._showPluginButton.text(typeName);
                },

                onApply: function (obj, container, event) {
                    obj.schemaId = obj.plugins.schemaController.getCurrentSchemaId();
                    obj.podiums = obj.plugins.schemaController.getCurrentPodiums();

                    obj.containers.schemaContainer.setSchemaTitle(obj,
                        obj.plugins.schemaController.getCurrentSchemaShortDescription());

                    if (obj.plugins.hasOwnProperty("participantsPlugin")) {
                        obj.plugins.participantsPlugin.participants.setMax(obj.plugins.participantsPlugin,
                            parseInt(obj.plugins.schemaController.getCurrentMaxParticipants()));
                        obj.plugins.participantsPlugin.containers.memberList.refreshList(obj.plugins.participantsPlugin);
                    }


                    if (obj.schemaId === 1 || obj.schemaId === "1") {
                        obj.containers.integration.hide(obj);
                    } else {
                        obj.containers.integration.show(obj);
                    }

                    container.dialog("close");
                },

                onCancel: function (obj, container, event) {
                    container.dialog("close");
                },

                onClose: function (obj, container, event) {
                    if (obj.schemaId !== obj.plugins.schemaController.getCurrentSchemaId()) {
                        obj.plugins.schemaController.setCurrentSchemaId(obj.schemaId);
                    }

                    if (obj.podiums !== obj.plugins.schemaController.getCurrentPodiums()) {
                        obj.plugins.schemaController.setCurrentPodiums(obj.podiums);
                    }
                },
                /**
                 * Кнопка открытия плагина
                 */
                _showPluginButton: null,
                /**
                 * Отрендеренный плагин
                 */
                _renderedPlugin: null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },

            /**
             * Объект для управления контейнером плагина пользователей
             */
            participantsContainer: {
                /**
                 * Возвращает отрендеренный контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.participantsContainer._rendered === null) {
                        if (obj.plugins.participantsPlugin !== null) {
                            obj.containers.participantsContainer._rendered = obj.containers.participantsContainer._render(obj);
                        } else {
                            return $('<div>');
                        }

                    }

                    return obj.containers.participantsContainer._rendered;
                },
                /**
                 * Биндит плагин списка пользователей и добавляет к нему диалогое окно. Рендерит кнопку открытия окна плагина
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Создаем контейнер для плагина
                    obj.containers.participantsContainer._renderedPlugin = $('<div class="tc-plugin-ui">');
                    //Биндим плагин
                    obj.plugins.participantsPlugin = obj.plugins.participantsPlugin.bind(obj.plugins.getParticipantsObj(obj),
                        obj.containers.participantsContainer._renderedPlugin);

                    //Создаем конетйнер для текущего кол-ва пользователей
                    obj.containers.participantsContainer._currentMembers =
                        $('<span>'
                            + obj.plugins.participantsPlugin.participants.count(obj.plugins.participantsPlugin)
                            + '</span>');
                    //Создаем контейнер для максимального кол-ва пользователей
                    obj.containers.participantsContainer._maxMembers =
                        $('<span>'
                            + obj.plugins.participantsPlugin.participants.max
                            + '</span>');

                    //Контейнер кнопки
                    var container = $('<div class="tc-plugin-ui grayBlock halfLeftBlock">');
                    var inner = $('<div class="stbtn"></div>');
                    //inner.append('<img src="/images/ic_addfriends.png" alt="" />');
                    inner.append('<i class="zmdi zmdi-account-add zmdi-hc-2x"></i>');


                    var buttonData = $('<div class="buttonData"></div>');
                    buttonData.append('<span>' + _("Participants") + ':</span>');

                    obj.containers.participantsContainer._openParticipantsPluginBtn = $('<a href="#" id="' + obj.prefix + 'showMemberListAnchor"></a>');
                    obj.containers.participantsContainer._openParticipantsPluginBtn.append($('<span class="leftMargin"></span>')
                        .append(obj.containers.participantsContainer._currentMembers)
                        .append("<span> / </span>").append(obj.containers.participantsContainer._maxMembers));
                    buttonData.append(obj.containers.participantsContainer._openParticipantsPluginBtn);

                    inner.append(buttonData);
                    inner.append('<div class="clear"></div>');

                    if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                        obj.containers.participantsContainer._openParticipantsPluginBtn.addClass("disabled");
                    }

                    //По клику на кнопку, открыаем окно плагина
                    obj.containers.participantsContainer._openParticipantsPluginBtn.click(function (event) {
                        if (obj.containers.participantsContainer._openParticipantsPluginBtn.hasClass('disabled')) {
                            event.stopPropagation();
                            return false;
                        }
                        obj.containers.participantsContainer.showDialog(obj);
                    });
                    //Добавляем окно к плагину
                    obj.containers.participantsContainer._setDialog(obj, obj.containers.participantsContainer._renderedPlugin);

                    container.append(inner);

                    if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                        obj.containers.participantsContainer._loadList(obj, obj.cid.real);
                    }

                    return container;
                },
                /**
                 * Контейнер с кнопкой отображения списка участников конференции
                 */
                _openParticipantsPluginBtn: null,
                /**
                 * Контейнер для максимального количества пользователей
                 */
                _maxMembers: null,
                /**
                 * Контейнер для текущего количества пользователей
                 */
                _currentMembers: null,
                /**
                 * Изменяет у кнопки максимальное количество пользователей
                 * @param {std_obj} obj
                 * @param {String|Integer} max
                 * @returns {undefined}
                 */
                setMax: function (obj, max) {
                    obj.containers.participantsContainer._maxMembers.text(max);
                },
                /**
                 * Изменяет у кнопки текущее количество пользователей
                 * @param {std_obj} obj
                 * @param {String|Integer} current
                 * @returns {undefined}
                 */
                setCurrent: function (obj, current) {
                    obj.containers.participantsContainer._currentMembers.text(current);
                },
                /**
                 * Применить диалоговое окно к плагину
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @returns {undefined}
                 */
                _setDialog: function (obj, container) {
                    var instance = obj.containers.participantsContainer;

                    container.dialog({
                        autoOpen: false,
                        height: (obj.containers.participantsContainer.height === undefined ? 480 : obj.containers.participantsContainer.height),
                        width: (obj.containers.participantsContainer.width === undefined ? 640 : obj.containers.participantsContainer.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        buttons: [
                            {
                                text: _("Apply"),
                                id: obj.prefix + "buttonApplyMembers",
                                click: function () {
                                    instance.onApply(obj);
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Participants list"));
                },
                /**
                 * Если окно плагина закрыли или нажали ок
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                onApply: function (obj) {
                    obj.containers.participantsContainer._renderedPlugin.dialog("close");
                },
                /**
                 * Показать окно плагина
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                showDialog: function (obj) {
                    obj.containers.participantsContainer._renderedPlugin.dialog("open");
                },
                /**
                 * Обновляет данные кнопки
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                updateButton: function (obj) {
                    obj.containers.participantsContainer.setCurrent(obj,
                        obj.plugins.participantPlugin.participants.count(obj.plugins.participantPlugin));
                    obj.containers.participantsContainer.setMax(obj, obj.plugins.participantPlugin.participants.max);
                },
                /**
                 * Загружает список пользователей конференции
                 * @param {type} obj
                 * @param {type} cid
                 * @returns {undefined}
                 */
                _loadList: function (obj, cid) {

                },
                /**
                 * Отрендеренная кнопка
                 */
                _rendered: null,
                /**
                 * Отрендеренный плагин
                 */
                _renderedPlugin: null,
                /**
                 * Высота окна плагина
                 */
                height: 600,
                /**
                 * Ширина окна плагина
                 */
                width: 1050
            },
            /**
             * Контейнер плагина расписания
             */
            scheduleContainer: {
                /**
                 * Возвращает контейнер плагина расписания
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.scheduleContainer._rendered === null) {
                        obj.containers.scheduleContainer._rendered = obj.containers.scheduleContainer._render(obj);
                    }

                    return obj.containers.scheduleContainer._rendered;
                },
                /**
                 * рендерит плагин расписания
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Добавляем плагин к контейнеру
                    obj.containers.scheduleContainer._renderedPlugin = $('<div>');
                    obj.plugins.schedulePlugin = obj.plugins.schedulePlugin.bind({}, obj.containers.scheduleContainer._renderedPlugin);

                    obj.containers.scheduleContainer._applyDialog(obj, obj.containers.scheduleContainer._renderedPlugin);

                    //Создаем кнопку открытия окна
                    obj.containers.scheduleContainer._showDialogButton = $('<a href="#"></a>');

                    var container = $('<div class="grayBlock halfRightBlock tc-plugin-ui">');
                    var inner = $('<div class="stbtn"></div>');

                    //inner.append('<img src="/images/circular_gray.png" alt="" />');
                    inner.append('<i class="zmdi zmdi-time zmdi-hc-2x" style=""></i>');

                    var buttonData = $('<div class="buttonData">');
                    buttonData.append('<span>' + _("Schedule") + ': </span>');

                    var button = $('<span class="leftMargin"></span>');
                    button.append(obj.containers.scheduleContainer._showDialogButton);
                    buttonData.append(button);
                    inner.append(buttonData);
                    inner.append('<div class="clear"></div>');

                    container.append(inner);

                    obj.containers.scheduleContainer._showDialogButton.click(function () {
                        obj.containers.scheduleContainer._renderedPlugin.dialog("open");
                    });
                    obj.containers.scheduleContainer.setScheduleTitle(obj, obj.plugins.schedulePlugin.schedule);

                    return container;
                },
                _applyDialog: function (obj, container) {
                    container.dialog({
                        autoOpen: false,
                        height: (obj.height === undefined ? 420 : obj.containers.scheduleContainer.height),
                        width: (obj.width === undefined ? 920 : obj.containers.scheduleContainer.width),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        buttons: [
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseSchedule",
                                click: function (event) {
                                    obj.containers.scheduleContainer.onClose(obj, container, event);
                                }
                            },
                            {
                                text: _("Save"),
                                id: obj.prefix + "buttonApplySchedule",
                                'class': 'schedule-save-btn',
                                click: function (event) {
                                    obj.containers.scheduleContainer.onApply(obj, container, event);
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Schedule"));
                },
                /**
                 * Добавляет название к кнопке
                 * @param {std_obj} obj
                 * @param {String} schedule
                 * @returns {undefined}
                 */
                setScheduleTitle: function (obj, schedule) {
                    var scheduleText = _("Without schedule");
                    if (schedule !== undefined && schedule !== null) {
                        switch (schedule) {
                            case 'once':
                                scheduleText = _("Nonrecurrent");
                                break;
                            case 'weekly':
                                scheduleText = _("Every week");
                                break;
                            case 'monthly':
                                scheduleText = _("Every month");
                                break;
                        }
                    }


                    obj.containers.scheduleContainer._showDialogButton.text(scheduleText).attr('title', scheduleText);
                },
                /**
                 * Когда подтвердили закрытия
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @param {Event} event
                 * @returns {undefined}
                 */
                onApply: function (obj, container, event) {
                    var result = obj.plugins.schedulePlugin.onSave(obj.plugins.schedulePlugin);
                    if (result === false) {
                        return;
                    }

                    var itemId = container.find(".selected").attr("id")
                        .substr(obj.plugins.schedulePlugin.prefix.length + 'itemSchedule'.length).toLowerCase();

                    if (!obj.plugins.schedulePlugin.items.hasOwnProperty(itemId)) return;

                    obj.containers.scheduleContainer.setScheduleTitle(obj, itemId);
                    obj.plugins.schedulePlugin.schedule = itemId;

                    if (itemId === "none") {
                        obj.plugins.participantsPlugin.setInvitationsStatus(obj.plugins.participantsPlugin,
                            $.conferencePlugin.INVITATIONS_STATUSES.SCHEDULE_NONE);
                    } else if (obj.action !== $.conferencePlugin.CURRENT_ACTION.CREATE) {
                        obj.plugins.participantsPlugin.setInvitationsStatus(obj.plugins.participantsPlugin,
                            $.conferencePlugin.INVITATIONS_STATUSES.OK);
                    }

                    obj.containers.scheduleContainer._renderedPlugin.dialog("close");
                },
                /**
                 * Когда отменили внесенные изменения
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @param {Event} event
                 * @returns {undefined}
                 */
                onClose: function (obj, container, event) {
                    obj.containers.scheduleContainer._renderedPlugin.dialog("close");
                },
                /**
                 * Кнопка открытия плагина
                 */
                _showDialogButton: null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null,
                /**
                 * Отренедеренный плагин
                 */
                _renderedPlugin: null
            },


            statusDialog: {
                get: function (obj) {
                    if (this._rendered === null) {
                        this._rendered = this._render(obj);
                    }

                    return this._rendered;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {$}
                 */
                _render: function (obj) {
                    var container = $('<div></div>');

                    obj.containers.statusDialog._status = $('<span></span>');
                    container.append(obj.containers.statusDialog._status);

                    container.dialog({
                        autoOpen: false,
                        height: (this.height === undefined ? 120 : this.height),
                        width: (this.width === undefined ? 320 : this.width),
                        modal: true,
                        draggable: true,
                        resizable: false
                    });
                    container.dialog("option", "title", _("Please wait"));

                    return container;
                },

                _status: null,

                /**
                 *
                 * @param {std_obj} obj
                 * @param {String} html
                 * @param {String} title
                 * @returns {undefined}
                 */
                setStatus: function (obj, html, title) {

                },

                /**
                 *
                 * @param {std_obj} obj
                 * @param {Number} errorId
                 * @returns {undefined}
                 */
                setError: function (obj, errorId) {
                    var errorText = _("Error");
                    var title = _("Error");

                    switch (errorId) {
                        case $.conferencePlugin.SAVING_ERRORS.CONFERENCE_RUNNING:
                            title = _("Conference editing error");
                            errorText = _("No changes can be made when the conference is running");
                            break;
                    }

                    obj.containers.statusDialog._status.html(errorText);
                    obj.containers.statusDialog.get(obj).dialog("option", "title", title);
                },

                /**
                 *
                 * @param {std_obj} obj
                 * @param {String} errorText
                 * @param {String} errorTitle
                 * @returns {undefined}
                 */
                setCustomError: function (obj, errorText, errorTitle) {
                    if (errorTitle === undefined) {
                        errorTitle = _("Error");
                    }

                    obj.containers.statusDialog._status.html(errorText);
                    obj.containers.statusDialog.get(obj).dialog("option", "title", errorTitle);
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                setWait: function (obj) {
                    obj.containers.statusDialog._status.html(_("Saving") + '...');
                    obj.containers.statusDialog.get(obj).dialog("option", "title", _("Please wait"));
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                setSaved: function (obj) {
                    obj.containers.statusDialog._status.html(_("Saved"));
                    obj.containers.statusDialog.get(obj).dialog("option", "title", _("Please wait"));
                },

                _rendered: null
            },

            sendInvitationsDialog: {

                get: function (obj) {
                    if (obj.containers.sendInvitationsDialog._rendered === null) {
                        obj.containers.sendInvitationsDialog._rendered = obj.containers.sendInvitationsDialog._render(obj);
                    }

                    return obj.containers.sendInvitationsDialog._rendered;
                },
                /**
                 * Рендерим диалоговное окно для подтверждения приглашения
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div class="' + obj.cssPrefix + 'sendInvitationDialog"></div>');
                    obj.containers.sendInvitationsDialog._questionContainer = $("<span>" + _("Send invitations?") + "</span>");
                    container.append(obj.containers.sendInvitationsDialog._questionContainer);

                    var waitContainer = $('<div style="display: none;"></div>');
                    waitContainer.append('<span>' + _("Please wait") + '</span><br/>');
                    waitContainer.append('<img src="/img/spinner-16.gif" alt="" />');
                    obj.containers.sendInvitationsDialog._waitContainer = waitContainer;
                    container.append(waitContainer);

                    var successSendContainer = $('<div style="display: none;"></div>');
                    successSendContainer.append('<span>' + _("The invitations have been successfully sent") + '</span>');
                    obj.containers.sendInvitationsDialog._successSendContainer = successSendContainer;
                    container.append(successSendContainer);

                    var failedSendContainer = $('<div style="display: none;"></div>');
                    failedSendContainer.append('<span>' + _("Error occured when sending the invitations") + '!</span>');
                    obj.containers.sendInvitationsDialog._failedSendContainer = failedSendContainer;
                    container.append(failedSendContainer);

                    container.dialog({
                        autoOpen: false,
                        height: (this.height === undefined ? 160 : this.height),
                        width: (this.width === undefined ? 320 : this.width),
                        modal: true,
                        draggable: true,
                        resizable: false,
                        title: _("Send invitations?"),
                        buttons: [
                            {
                                text: _("Send"),
                                id: obj.prefix + "buttonSendInvite",
                                click: function () {
                                    obj.containers.sendInvitationsDialog.setDefault(obj);
                                    obj.containers.sendInvitationsDialog.lockDialog(obj);
                                    obj.containers.sendInvitationsDialog.waitSend(obj);
                                    //Отправляем приглашения
                                    obj.sendInvitations(obj, function (obj, data) {
                                            obj.containers.sendInvitationsDialog.finishSend(obj, data.status);
                                        }, function () {
                                            obj.containers.sendInvitationsDialog.finishSend(obj, false);
                                        },
                                        function () {
                                        });
                                }
                            },
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseSendInvite",
                                click: function () {
                                    obj.onInvitationsCancelSend(obj);
                                    container.dialog("close");
                                }
                            }
                        ],
                        beforeClose: function (event, ui) {
                            if (container.hasClass("disabled")) {
                                event.preventDefault();
                                event.stopPropagation();
                                return false;
                            }

                            obj.containers.sendInvitationsDialog.setDefault(obj);
                            obj.onInvitationsCancelSend(obj);
                        }
                    });
                    container.dialog("option", "title", _("Send invitations"));

                    return container;
                },

                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                waitSend: function (obj) {
                    obj.containers.sendInvitationsDialog._questionContainer.hide();
                    obj.containers.sendInvitationsDialog._waitContainer.show();

                },
                /**
                 *
                 * @param {std_obj} obj
                 * @param {Boolean} status
                 * @returns {undefined}
                 */
                finishSend: function (obj, status) {
                    obj.containers.sendInvitationsDialog._waitContainer.hide();
                    $('#' + obj.prefix + "buttonSendInvite").hide();
                    $('#' + obj.prefix + "buttonCloseSendInvite").button("option", "label", _("Close"));
                    obj.containers.sendInvitationsDialog.unlockDialog(obj);
                    if (status) {
                        obj.containers.sendInvitationsDialog.get(obj).dialog('option', 'title', _("Ok"));
                        obj.containers.sendInvitationsDialog._successSendContainer.show();
                        obj.onInvitationsSuccessSend(obj);
                    } else {
                        obj.containers.sendInvitationsDialog.get(obj).dialog('option', 'title', _("Error"));
                        obj.containers.sendInvitationsDialog._failedSendContainer.show();
                        obj.onInvitationsFailedSend(obj);
                    }

                },

                setDefault: function (obj) {
                    obj.containers.sendInvitationsDialog.get(obj).dialog('option', 'title', _("Send"));
                    $('#' + obj.prefix + "buttonSendInvite").show();
                    $('#' + obj.prefix + "buttonCloseSendInvite").button("option", "label", _("Cancel"));
                    obj.containers.sendInvitationsDialog.unlockDialog(obj);
                    obj.containers.sendInvitationsDialog._waitContainer.hide();
                    obj.containers.sendInvitationsDialog._successSendContainer.hide();
                    obj.containers.sendInvitationsDialog._failedSendContainer.hide();
                    obj.containers.sendInvitationsDialog._questionContainer.show();
                },

                lockDialog: function (obj) {
                    obj.containers.sendInvitationsDialog._rendered.addClass("disabled");
                    //Когда включенно окно ожидания, его нельзя закрывать или повторно отправлять сообщения
                    var buttons = obj.containers.sendInvitationsDialog._rendered.dialog('option', 'buttons');
                    for (var i = 0; i < buttons.length; i++) {
                        var btnId = buttons[i].id;
                        if (btnId === undefined) {
                            continue;
                        }

                        var btn = $('#' + btnId);
                        btn.attr("disabled", true);
                        btn.addClass("ui-state-disabled");
                    }
                },

                unlockDialog: function (obj) {
                    obj.containers.sendInvitationsDialog._rendered.removeClass("disabled");
                    //Когда включенно окно ожидания, его нельзя закрывать или повторно отправлять сообщения
                    var buttons = obj.containers.sendInvitationsDialog._rendered.dialog('option', 'buttons');
                    for (var i = 0; i < buttons.length; i++) {
                        var btnId = buttons[i].id;
                        if (btnId === undefined) {
                            continue;
                        }

                        var btn = $('#' + btnId);
                        btn.attr("disabled", false);
                        btn.removeClass("ui-state-disabled");
                    }
                },
                _questionContainer: null,
                _waitContainer: null,
                _failedSendContainer: null,
                _successSendContainer: null,
                /**
                 *
                 */
                _rendered: null
            },

            enableRecording: {
                /**
                 * Возвращает контейнер enableRecording
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.enableRecording._rendered === null) {
                        obj.containers.enableRecording._rendered = obj.containers.enableRecording._render(obj);
                    }

                    return obj.containers.enableRecording._rendered;
                },
                /**
                 * Рендерит контейнер enableRecording
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var status_enabled = $('<a target="_blank" href="' + obj.links.recordController + '" class="tc-plugin-ui"></a>').text(_('Enabled'));
                    var status_disabled = $('<a target="_blank" href="' + obj.links.recordController + '" class="tc-plugin-ui"></a>').text(_('Disabled'));

                    var checked = obj.enableRecording.thisConference
                        ? 'checked'
                        : '';

                    var checkbox = $('<input id="enable-recording" type="checkbox" style="position: relative;top:4px" ' + checked + '>')
                        .change(function () {
                            obj.enableRecording.thisConference = this.checked ? 1 : 0;
                        });

                    var status_enable = $('<div></div>')
                        .append(checkbox)
                        .append('<label style="padding-left: 4px;position: relative;top:3px">' + _('Enable') + '</label>');

                    var statuses = [
                        status_disabled,
                        status_enabled,
                        status_enabled,
                        status_enable
                    ];

                    var status = typeof(statuses[obj.enableRecording.globalSetting]) !== 'undefined'
                        ? statuses[obj.enableRecording.globalSetting]
                        : status_disabled;
                    var container = $('<div style="position: relative;" class="whiteBlock extBlock"></div>');
                    var table = $('<table id="streaming"></table>')
                        .append(
                            $('<tbody></tbody>').append(
                                $('<tr></tr>').append(
                                    $('<td></td>').append(
                                        $('<div></div>').append(
                                            $('<span></span>')
                                                .html(
                                                    $('<i class="material-icons" style="position:relative;top:3px;right:3px"></i>')
                                                        .text('videocam')
                                                )
                                        ).append(
                                            $('<span class="stream" style="position:relative;right:6px;"></span>').text(_('Recording') + ':')
                                        )
                                    )
                                ).append(
                                    $('<td></td>').append(
                                        status
                                    )
                                )
                            )
                        );

                    container.append(table);
                    return container;
                },
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            }
        },

        /**
         * Устанавливает тип конференции
         * @param {std_obj} obj
         * @param {Number} type
         * @returns {undefined}
         */
        _setConferenceType: function (obj, type) {
            obj.type = type;
            if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.CONFERENCE) {
                obj.containers.guestAccess.get(obj).hide();

                if (obj.action === $.conferencePlugin.CURRENT_ACTION.CREATE ||
                    (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT &&
                        obj.udp.status !== true && obj.udp.status !== 1)) {
                    obj.containers.udp.get(obj).hide();
                    obj.containers.showAdvanced.setCollapsed(obj);
                } else {
                    obj.containers.udp.get(obj).show();
                    obj.containers.showAdvanced.setExpanded(obj);
                }
            } else if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR) {
                obj.containers.udp.get(obj).hide();
                obj.containers.showAdvanced.get(obj).hide();
                obj.containers.guestAccess.get(obj).show();

                if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {

                }
            }
        },

        /**
         * Загружает данные владельца конференции
         * @param {std_obj} obj
         * @returns {undefined}
         */
        _loadOwner: function (obj) {
            $.getJSON(obj.handlers.owner, {'id': obj.owner})
                .then(function (data) {
                    var filter = $.Deferred();
                    if (data.status) {
                        filter.resolve(data);
                    } else {
                        filter.reject(data.error);
                    }

                    return filter.promise();
                })
                .done(function (data) {
                    var member = {};
                    member.id = data.id;
                    member.displayName = data.displayName;
                    member.groups = data.groups;
                    member.disabled = true;
                    member.type = data.type;
                    obj.containers.owner.setOwner(obj, member);
                    member.isOperator = true;
                    member.isOwner = true;
                    obj.plugins.participantsPlugin.addParticipant(obj.plugins.participantsPlugin, member,
                        {
                            addToTop: true,
                            refresh: true
                        });
                })
                .always(function () {
                    obj.containers.owner._showPluginButton.removeClass("disabled");
                });
        },

        sendInvitations: function (obj, success, fail, always) {
            obj.log("Send invitations");

            var invitationData = {};
            invitationData.users = new Array();
            invitationData.guests = {};
            invitationData.id = obj.cid.real;
            invitationData.name = obj.name;
            invitationData.owner = obj.owner;

            /**
             * Возвращает дату в формате "dd.mm.yyyy HH:MM'
             * @param date
             * @returns {string}
             */
            function getRawDate(date) {
                var endDate = endTime.getDate();
                var endMonth = endTime.getMonth() + 1;
                var endFullYear = endTime.getFullYear();
                var endHours = endTime.getHours();
                var endMinutes = endTime.getMinutes();

                return [
                    [
                        (endDate + '').length === 1
                            ? '0' + endDate
                            : endDate,
                        (endMonth + '').length === 1
                            ? '0' + endMonth
                            : endMonth,
                        (endFullYear + '').length === 1
                            ? '0' + endFullYear
                            : endFullYear
                    ].join('.'),
                    [
                        (endHours + '').length === 1
                            ? '0' + endHours
                            : endHours,
                        (endMinutes + '').length === 1
                            ? '0' + endMinutes
                            : endMinutes
                    ].join(':')
                ].join(' ');
            }


            /**
             * Возвращает дату в формате "HH:MM'
             * @param date
             * @returns {string}
             */
            function getRawTime(date) {
                var endHours = endTime.getHours();
                var endMinutes = endTime.getMinutes();

                return [
                    (endHours + '').length === 1
                        ? '0' + endHours
                        : endHours,
                    (endMinutes + '').length === 1
                        ? '0' + endMinutes
                        : endMinutes
                ].join(':')
            }

            var schedule = obj.plugins.schedulePlugin.getSchedule(obj.plugins.schedulePlugin);
            invitationData.schedule = schedule.type;
            switch (schedule.type) {
                case "none":
                    invitationData.startTime = -1;
                    invitationData.endTime = -1;
                    break;
                case "once":
                    invitationData.startTime = schedule.START_DATE.raw;
                    var endTime = new Date(schedule.START_DATE.value.getTime() + obj.strToTimestamp(schedule.DURATION) * 1000);
                    invitationData.endTime = getRawDate(endTime);
                    break;
                case "weekly":
                    invitationData.startTime = schedule.START_TIME.raw;
                    var endTime = new Date(schedule.START_TIME.value.getTime() + obj.strToTimestamp(schedule.DURATION) * 1000);
                    invitationData.endTime = getRawTime(endTime);
                    invitationData.days = schedule.DAY_OF_WEEK;
                    break;
            }

            invitationData.timeZone = schedule.TIME_ZONE;
            $.each(obj.plugins.participantsPlugin.participants.list, function (id, data) {
                if (data.type === obj.plugins.userPlugin.USER_TYPE.USER) {
                    invitationData.users.push(id);
                } else {
                    invitationData.guests[id] = data.displayName;
                }
            });

            obj.log("invitatiosn participants list:", invitationData);

            $.ajax({
                type: "POST",
                url: obj.handlers.sendInvitations,
                processData: false,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(invitationData)
            })
                .then(function (data, textStatus, jqXHR) {
                        var filter = $.Deferred();
                        if (data.status !== true) {
                            return filter.reject(jqXHR, data, data);
                        }
                        return filter.resolve(data, textStatus, jqXHR);
                    }
                )
                .done(function (data) {
                    obj.log("Invitations send successfully:", data);
                    if (typeof success === "function") {
                        success(obj, data);
                    }
                    obj.onInvitationsSuccessSend(obj, data);
                })
                .fail(function () {
                    obj.log("Invitations send failed!");
                    if (typeof fail === "function") {
                        fail(obj);
                    }
                    obj.onInvitationsFailedSend(obj);
                })
                .always(function () {
                    if (typeof always === "function") {
                        always(obj);
                    }
                });
        },

        plugins: {
            userPlugin: null,
            schemaPlugin: null,
            schedulePlugin: null,
            participantsPlugin: null,
            memberListPlugin: null,
            addByIdPlugin: null,
            presetManagerPlugin: null,
            presetManagerObj: function (obj) {
                return {
                    confPage: true,
                    onPresetSave: function (preset_id) {
                        obj.containers.rtsp.presetManager.savePreset(obj, preset_id);
                    },
                    onPresetDelete: function (preset_id) {
                        obj.containers.rtsp.presetManager.deletePreset(obj, preset_id);
                    },
                    onBroadcastDisable: function () {
                        obj.containers.rtsp.presetManager.broadcastDisable(obj);
                    }
                };
            },
            getParticipantsObj: function (obj) {
                return {
                    onInvitationClick: function (plugin) {
                        obj.containers.sendInvitationsDialog.get(obj).dialog("open");
                    },
                    onMaxParticipantsChanged: function (plugin) {
                        obj.containers.participantsContainer.setMax(obj, plugin.participants.max);
                    },

                    onListChanged: function (plugin) {
                        obj.containers.participantsContainer.setCurrent(obj, plugin.participants.count(plugin));
                    },

                    onCreated: function (plugin) {
                        obj.plugins._onParticipantsPluginCreated(obj, plugin);
                    }

                };
            },
            getOwnerObj: function (obj) {
                return {
                    height: 440,
                    onMemberClick: function (plugin, member) {
                        if (obj.plugins.participantsPlugin !== null) {
                            var memberObj = $.extend(true, {}, member);
                            delete memberObj.htmlId;
                            memberObj.disabled = true;
                            memberObj.isOperator = true;
                            memberObj.isOwner = true;

                            if (obj.owner !== null) {
                                obj.plugins.participantsPlugin.removeParticipant(obj.plugins.participantsPlugin, obj.owner);
                            }
                            obj.plugins.participantsPlugin.addParticipant(obj.plugins.participantsPlugin, memberObj,
                                {
                                    addToTop: true,
                                    refresh: true
                                });
                        }

                        obj.containers.owner.setOwner(obj, member);
                        obj.containers.owner.hidePlugin(obj);
                    },
                    mouseOnMember: function (plugin, member, container) {
                        container.css("cursor", "pointer");
                    },
                    plugins: {
                        'user': obj.plugins.userPlugins
                    },
                    beforeMemberAdd: function (plugin, member, container) {
                        return container;
                    }
                };
            },
            schemaController: null,
            getSchemaObj: function (obj) {
                return {
                    locale: obj.region,
                    schemaId: obj.schemaId,
                    conferenceId: obj.cid.real,
                    podiums: obj.podiums,
                    flags: obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR ? $.conferenceSchemaPlugin.FLAGS.WEBINAR : $.conferenceSchemaPlugin.FLAGS.NONE,
                    events: {
                        onSuccessInit: function (controller) {
                            obj.plugins.schemaController = controller;
                            obj.containers.schemaContainer.enablePluginBtn(obj);
                            obj.containers.schemaContainer.setSchemaTitle(obj, controller.getCurrentSchemaShortDescription());


                            obj.plugins.participantsPlugin.participants.setMax(obj.plugins.participantsPlugin,
                                parseInt(obj.plugins.schemaController.getCurrentMaxParticipants()));
                            obj.plugins.participantsPlugin.containers.memberList.refreshList(obj.plugins.participantsPlugin);
                        }
                    }
                };
            },

            init: function (obj) {

                if (obj.plugins.memberListPlugin !== null) {
                    if (obj.plugins.userPlugin !== null) {
                        obj.plugins.memberListPlugin.setUserPlugin(obj.plugins.userPlugin);
                    }
                }

                if (obj.plugins.participantsPlugin !== null) {
                    obj.plugins._initParticipantsPlugin(obj);
                }
            },


            _initParticipantsPlugin: function (obj) {
                if (obj.plugins.userPlugin !== null) {
                    obj.plugins.participantsPlugin.setUserPlugin(obj.plugins.userPlugin);
                }

                if (obj.plugins.memberListPlugin !== null) {
                    obj.plugins.participantsPlugin.setMemberListPlugin(obj.plugins.memberListPlugin);
                }

                if (obj.plugins.addByIdPlugin !== null) {
                    obj.plugins.participantsPlugin.setAddByIdPlugin(obj.plugins.addByIdPlugin);
                }
            },

            _onParticipantsPluginCreated: function (obj, plugin) {
                if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                    if (obj.plugins.schedulePlugin.schedule === "none") {
                        plugin.setInvitationsStatus(plugin, $.conferencePlugin.INVITATIONS_STATUSES.SCHEDULE_NONE);
                    } else {
                        plugin.setInvitationsStatus(plugin, $.conferencePlugin.INVITATIONS_STATUSES.OK);
                    }
                } else {
                    plugin.setInvitationsStatus(plugin, $.conferencePlugin.INVITATIONS_STATUSES.NOT_SAVE);
                }


                function loadParticipants(page, done, always) {
                    var pageSize = 20;

                    if (!page) {
                        page = 0;
                    }

                    var params = obj.template_id === ""
                        ? {'cid': obj.cid.real, 'page': page, 'limit': pageSize}
                        : {'template_id': obj.template_id, 'page': page, 'limit': pageSize};

                    $.getJSON(obj.handlers.participantsList, params)
                        .then(function (data) {
                            var filter = $.Deferred();
                            if (data.status) {
                                filter.resolve(data);
                            } else {
                                filter.reject(data.error);
                            }

                            return filter.promise();
                        })
                        .done(function (data) {
                            if (data.count <= 0) {
                                return;
                            }

                            $.each(data.list, function (id, data) {
                                data.id = id;

                                plugin.addParticipant(plugin, data, {}, true);
                            });

                            if (data.nextPageId) {
                                loadParticipants(data.nextPageId);
                            } else {
                                done ? done() : null;
                                always ? always() : null;
                                obj.containers.participantsContainer._openParticipantsPluginBtn.removeClass("disabled");
                            }
                        }).fail(function () {
                        always ? always() : null;
                        obj.containers.participantsContainer._openParticipantsPluginBtn.removeClass("disabled");
                    });
                }

                function loadOperatorsGroups(done, always) {
                    $.getJSON(obj.handlers.getOperatorsGroups)
                        .done(function (data) {
                            if (!data.status) {
                                return;
                            }

                            if (!data.list || typeof data.list !== "object") {
                                return;
                            }

                            for (var i = 0; i < data.list.length; i++) {
                                plugin.operatorsGroups.list[data.list[i]] = data.list[i];
                            }

                            plugin.operatorsGroups._isListLoaded = true;

                            if (typeof done === 'function') {
                                done();
                            }
                        })
                        .always(function () {
                            if (typeof always === 'function') {
                                always();
                            }
                        });
                }

                loadOperatorsGroups(function () {
                }, function () {
                    if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT || obj.template_id !== '') {
                        loadParticipants();
                    }
                });
            }
        },

        getSchedule: function (obj) {
            console.log(obj.plugins);
            console.log(this.plugins);
        },
        /**
         *
         * @param {std_obj} obj
         * @returns {undefined}
         */
        beforeAppend: function (obj) {
        },
        /**
         * Вызывается, когда плагин был создан
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCreated: function (obj) {

        },
        /**
         * Вызывается при клике на кнопку отмена
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCancel: function (obj) {

        },
        onInvitationsCancelSend: function (obj) {

        },

        onInvitationsSuccessSend: function (obj) {

        },

        onInvitationsFailedSend: function (onj) {

        },

        /**
         * Функция преобразует строку формата: HH:MM
         * в timestamp.
         * @param time_str
         * @returns {number}
         */
        strToTimestamp: function (time_str) {
            if (typeof(time_str) !== 'string') {
                return 0;
            }
            var time = time_str.split(':');
            return (parseInt(time[0]) * 60 + parseInt(time[1])) * 60;
        },

        /**
         * Вызывается при клике на кнопку "Добавить в шаблоны"
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onTemplateSave: function (obj) {
            var titleText = _('New template');
            var labelText = _("Topic");
            var inputPlaceholderText = _('Enter template name');
            var inputText = obj.name;

            var templateModal = $('<div id="template-modal"></div>');

            var templateModalDescription = $('<div></div>');
            var templateNameLabel = $('<label></label>');
            var templateNameInput = $('<input id="template-name" type="text">');

            templateNameLabel.text(labelText);
            templateNameLabel.css('float', 'left');
            templateNameLabel.css('margin-top', '5px');
            templateNameLabel.css('margin-bottom', '3px');

            var templateModalCreateId = 'template-modal-create';

            templateNameInput.attr('placeholder', inputPlaceholderText);
            templateNameInput.val(inputText);
            templateNameInput.keyup(function (e) {
                if (e.keyCode === 13) {
                    $('#' + templateModalCreateId).click();
                }
            });
            templateNameInput.css('float', 'left');
            templateNameInput.css('clear', 'left');
            templateNameInput.css('width', '100%');
            templateNameInput.css('border-radius', '5px');
            templateNameInput.css('padding-bottom', '2px');
            templateNameInput.css('padding-top', '2px');

            function nameFieldFillingHandler(_this) {
                var saveButton = $('#template-modal-create');
                var valueIsEmpty = _this.value.length === 0;
                saveButton.prop('disabled', valueIsEmpty);
                if (valueIsEmpty) {
                    saveButton.addClass('ui-state-disabled');
                }
                else {
                    saveButton.removeClass('ui-state-disabled');
                }

                templateNameInput.css('border-color', valueIsEmpty ? 'red' : 'gray');
            }

            templateNameInput.keyup(function () {
                nameFieldFillingHandler(this);
            });

            templateNameInput.change(function () {
                nameFieldFillingHandler(this);
            });

            templateModal.append(templateModalDescription);
            templateModal.append(templateNameLabel);
            templateModal.append(templateNameInput);

            templateModal.dialog(
                {
                    height: 192,
                    width: 480,
                    modal: true,
                    draggable: true,
                    resizable: false,
                    title: titleText,
                    close: function () {
                        templateModal.remove();
                    },
                    buttons: [
                        {
                            text: _('Cancel'),
                            click: function () {
                                $(this).dialog('close');
                            }
                        },
                        {
                            text: _('Create'),
                            id: templateModalCreateId,
                            click: function () {
                                var schedule = null;
                                var scheduleObject = obj.plugins.schedulePlugin.getSchedule(obj.plugins.schedulePlugin)
                                var participants = obj.plugins.participantsPlugin.getParticipants(obj.plugins.participantsPlugin, true);
                                var invitations = [];
                                $.each(participants, function (field_name) {
                                    var item = participants[field_name];
                                    invitations.push({
                                        id: item.id,
                                        display_name: item.displayName
                                    });
                                });

                                /**
                                 *
                                 * @param start_time объект даты начала конференции
                                 * @param user_time_zone timestamp даты начала конференции
                                 * @return {*}
                                 */
                                function getValidStartTimestamp(start_time, user_time_zone) {
                                    /**
                                     * https://bug-tracking.trueconf.com/show_bug.cgi?id=49266
                                     * Поправка на пользовательский часовой пояс
                                     */
                                    var browser_time_zone = start_time.getTimezoneOffset();
                                    var start_timestamp = start_time.getTime()
                                        - (user_time_zone + browser_time_zone) * 60 * 1000;
                                    var current_time = (new Date()).getTime() + browser_time_zone * 60 * 1000;
                                    console.log(
                                        start_timestamp,
                                        new Date(start_timestamp),
                                        current_time,
                                        new Date(current_time)
                                    );
                                    start_timestamp = start_timestamp <= current_time
                                        ? current_time
                                        : start_timestamp;

                                    return Math.trunc(start_timestamp / 1000);
                                }

                                switch (scheduleObject.type) {
                                    default:
                                    case "none":
                                        schedule = {
                                            type: -1
                                        };
                                        break;
                                    case "once":
                                        schedule = {
                                            type: 1,
                                            start_time: getValidStartTimestamp(
                                                scheduleObject.START_DATE.value,
                                                parseInt(scheduleObject.TIME_ZONE)),
                                            duration: obj.strToTimestamp(scheduleObject.DURATION),
                                            time_offset: scheduleObject.TIME_ZONE
                                        };
                                        break;
                                    case "weekly":
                                        var Days = [
                                            "sunday",
                                            "monday",
                                            "tuesday",
                                            "wednesday",
                                            "thursday",
                                            "friday",
                                            "saturday"];
                                        schedule = {
                                            type: 0,
                                            time: scheduleObject.START_TIME.raw,
                                            days: $.map(scheduleObject.DAY_OF_WEEK, function (value) {
                                                return Days[value];
                                            }),
                                            duration: obj.strToTimestamp(scheduleObject.DURATION),
                                            time_offset: scheduleObject.TIME_ZONE
                                        };
                                        break;
                                }

                                var objectData = {
                                    topic: obj.containers.name.val(obj),
                                    owner: obj.owner,
                                    type: obj.schemaId,
                                    description: obj.description,
                                    invitations: invitations,
                                    max_podiums: obj.podiums,
                                    max_participants: obj.plugins.schemaController.getCurrentMaxParticipants(),
                                    schedule: schedule,
                                    allow_guests: obj.type,
                                    recording: obj.enableRecording.thisConference,
                                    multicast_enable: obj.containers.udp.status(obj),
                                    multicast_address: obj.containers.udp.address(obj),
                                    rights: {
                                        guest: {
                                            chat_send: obj.containers.guestAccess.allowMsg(obj),
                                            audio_send: obj.containers.guestAccess.allowAudio(obj),
                                            video_send: obj.containers.guestAccess.allowVideo(obj)
                                        }
                                    }
                                };

                                for (field_name in objectData) {
                                    var field = objectData[field_name];
                                    field = ['string', 'array'].indexOf(typeof(field)) !== -1 && field.length > 0
                                    || ['string', 'array'].indexOf(typeof(field)) === -1
                                        ? field
                                        : undefined;
                                    objectData[field_name] = field;
                                }

                                var conferenceTemplateData = {
                                    name: templateNameInput.val(),
                                    object: objectData
                                };

                                function displayError() {
                                    Server.setServerMessage(_('Error while adding template'), Server.MESSAGE_TYPE.ERROR, 2000);
                                }

                                $.ajax(
                                    {
                                        method: 'POST',
                                        url: obj.handlers.conferenceTemplatesControllerUrl,
                                        dataType: 'json',
                                        data: conferenceTemplateData,
                                        success: function (data) {
                                            if (typeof(data.template) !== undefined) {
                                                Server.setServerMessage(_('Template added'), Server.MESSAGE_TYPE.NOTE, 2000);
                                                /**
                                                 * https://bug-tracking.trueconf.com/show_bug.cgi?id=49266
                                                 */
                                                $.ajax(
                                                    {
                                                        method: 'POST',
                                                        url: obj.handlers.setTemplateUserTimeZone,
                                                        dataType: 'json',
                                                        data: {
                                                            'template_id': data.template.id,
                                                            'user_timezone': scheduleObject.TIME_ZONE
                                                        },
                                                        success: function (data) {
                                                            if (data.result === 'ok') {
                                                                return;
                                                            }
                                                            displayError();
                                                        },
                                                        error: function () {
                                                            displayError();
                                                        }
                                                    }
                                                );
                                                return;
                                            }
                                            displayError();
                                        },
                                        error: function (err) {
                                            displayError();
                                        }
                                    }
                                );

                                $(this).dialog('close');
                            }
                        }
                    ]

                }
            );
            /**
             * Bug 49935
             */
            var saveButton = $('#template-modal-create');
            if ($('#template-name').val().length === 0) {
                saveButton.addClass('ui-state-disabled');
            }
            else {
                saveButton.removeClass('ui-state-disabled');
            }
        },

        /**
         * Вызывается при клике на кнопку "Сохранить"
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onSave: function (obj) {
            var name = obj.containers.name.val(obj);
            if (name === null || name.length === 0) {
                obj.containers.name._showError(obj);
                return;
            }

            name = name.replace(/<\/?[^>]+>/gi, '');

            if (obj.owner === undefined || obj.owner === null) {
                obj.containers.owner.showError(obj);
                return false;
            } else if (obj.owner.length === 0) {
                obj.containers.owner.showError(obj);
                return false;
            }

            if (obj.cid.value !== obj.containers.cid._field.val()) {
                var cidValue = obj.containers.cid._field.val();
                if (!cidValue.match(obj.cid.regexp)) {
                    obj.containers.cid._errorText.text(_("Invalid ID"));
                    obj.containers.cid._field.addClass("errorInput");
                    obj.containers.cid._errorText.show();
                    obj.containers.cid._errorText.focus();
                    return;
                }
            }

            if (!obj.containers.udp.isValid(obj) && obj.containers.udp._checkbox.is(":checked")) {
                obj.containers.udp._error.show();
                obj.containers.udp._addressField.focus();
                return;
            }


            var postData = {};
            if (obj.plugins.participantsPlugin !== null) {
                var participants = obj.plugins.participantsPlugin.getParticipants(obj.plugins.participantsPlugin, true);
                postData["participants"] = {};
                postData["guests"] = {};
                postData["operators"] = [];
                $.each(participants, function (index, value) {
                    //if(value.type === obj.plugins.userPlugin.USER_TYPE.GUEST){
                    postData["guests"][index] = value.displayName;
                    //} else {
                    //postData["participants"][index] = value.displayName;
                    //}

                    if (value.isOperator && !value.isOwner && !value.hasOperatorsGroup) {
                        postData["operators"].push(index);
                    }
                });

                if (obj.plugins.participantsPlugin.isInvitationEnabled(obj.plugins.participantsPlugin)) {
                    postData["send_invite_mail"] = 1;
                }
            }

            /**
             * Функция преобразует строку формата: HH:MM
             * в timestamp.
             * @param time_str
             * @returns {number}
             */
            function strToTimestamp(time_str) {
                var time = time_str.split(':');
                return (parseInt(time[0]) * 60 + parseInt(time[1])) * 60;
            }

            if (obj.plugins.schedulePlugin !== null) {
                var schedule = obj.plugins.schedulePlugin.getSchedule(obj.plugins.schedulePlugin);
                switch (schedule.type) {
                    default:
                    case "none":
                        postData["invitation_type"] = -1;
                        postData["hide_invitation_type"] = -1;
                        break;
                    case "once":
                        postData["invitation_type"] = 1;
                        postData["auto-start-conference"] = 1;
                        postData["hide_invitation_type"] = 1;
                        postData["duration"] = strToTimestamp(schedule.DURATION);
                        break;
                    case "monthly":
                        postData["invitation_type"] = 0;
                        postData["auto-start-conference"] = 1;
                        postData["hide_invitation_type"] = -1;
                        break;
                    case "weekly":
                        postData["invitation_type"] = 0;
                        postData["auto-start-conference"] = 1;
                        postData["hide_invitation_type"] = 0;
                        postData["day"] = schedule.DAY_OF_WEEK;
                        postData["duration"] = strToTimestamp(schedule.DURATION);
                        break;
                }

                if (schedule.type !== "weekly") {
                    var startDate = schedule.START_DATE;
                    if (startDate !== null && startDate !== undefined && startDate.raw) {
                        var startDateStr = startDate.raw.split(' ');
                        postData["date"] = startDateStr[0];
                        postData["time-field"] = startDateStr[1];
                    }

                } else {
                    var startTime = schedule.START_TIME;
                    if (startTime && startTime.raw) {
                        postData["time-field"] = startTime.raw;
                    }
                }
                postData["time_zone"] = schedule.TIME_ZONE;
            }

            postData["subtype"] = obj.schemaId;
            postData["podiums"] = obj.podiums;
            postData["max_participants"] = obj.plugins.schemaController.getCurrentMaxParticipants();

            if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.CONFERENCE && obj.containers.udp.status(obj)) {
                var address = obj.containers.udp.address(obj);
                postData["type"] = 1;
                if (address.length !== 0) {
                    postData["intercom_ip"] = address;
                }
            } else if (obj.rtsp.status && obj.rtsp.preset) {
                postData["rtsp"] = 1;
                postData["preset"] = obj.rtsp.preset;
            }

            postData["cid"] = obj.cid.value;
            postData["key"] = obj.cid.real;
            postData["topic"] = name;
            postData["description"] = obj.description;
            postData["enableRecording"] = obj.enableRecording.thisConference;

            if (obj.type === $.conferencePlugin.CONFERENCE_TYPE.WEBINAR) {
                postData["alias"] = obj.cid.alias;

                postData["allowSendAudio"] = obj.containers.guestAccess.allowAudio(obj) ? 1 : 0;
                postData["allowSendVideo"] = obj.containers.guestAccess.allowVideo(obj) ? 1 : 0;
                postData["allowSendMsg"] = obj.containers.guestAccess.allowMsg(obj) ? 1 : 0;
            }

            var owner = obj.owner;
            if (owner !== null) {
                postData["owner"] = obj.owner;
            } else {
                postData["owner"] = "";
            }
            postData["gconf-edit"] = "ok";

            var handler = null;
            if (obj.action === $.conferencePlugin.CURRENT_ACTION.CREATE) {
                postData["webTtype"] = obj.type;
                handler = obj.handlers.applyCreate;
            } else if (obj.action === $.conferencePlugin.CURRENT_ACTION.EDIT) {
                handler = obj.handlers.applyEdit;
            }

            if (handler === null) return;

            var statusDialog = obj.containers.statusDialog.get(obj);
            statusDialog.dialog("open");

            obj.containers.statusDialog.setWait(obj);

            $.post(handler, postData, function (data) {
            }, "json")
                .done(function (data) {
                    if (data.status === true) {
                        obj.containers.statusDialog.setSaved(obj);
                        obj.onSuccessSave(obj);
                    }
                    else {
                        if (data.hasOwnProperty("errors")) {
                            obj.containers.statusDialog.setCustomError(obj, data.errors.join(';<br/>'));
                        } else if (data.hasOwnProperty("errorId")) {
                            obj.containers.statusDialog.setError(obj, data.errorId);
                        } else if (data.hasOwnProperty("error")) {
                            obj.containers.statusDialog.setCustomError(obj, data.error);
                        } else {
                            obj.containers.statusDialog.setCustomError(obj, _("Error"));
                        }

                        obj.onFailSave(obj);
                    }
                })
                .fail(function (xhr, textStatus, errorThrown) {
                    statusDialog.dialog("option", "title", _("Error"));
                    obj.containers.statusDialog.setStatus(textStatus);
                    obj.onFailSave(obj);
                });
        },

        onSuccessSave: function (obj) {
            if (obj.action === $.conferencePlugin.CURRENT_ACTION.CREATE) {
                var pp = obj.plugins.participantsPlugin;
                if (pp === null) {
                    obj.onSaveRedirect(obj);
                    return;
                }

                if (pp.participants.count(pp) <= 0 || obj.plugins.schedulePlugin.schedule === "none") {
                    obj.onSaveRedirect(obj);
                    return;
                }

                //Костыль для перезагрузки страницы после отправки приглашений
                obj.onInvitationsCancelSend = function (obj) {
                    obj.onSaveRedirect(obj);
                };

                obj.containers.sendInvitationsDialog.get(obj).dialog("open");


            } else {
                //Костыль для возврата на страницу списка конференций
                obj.onSaveRedirect(obj);
            }
        },

        onFailSave: function (obj) {

        },

        log: function () {
            if (!this.debug) {
                return;
            }

            if (arguments.length < 1) {
                return;
            }

            if (arguments.length > 1) {
                console.log.apply(console, arguments);
            } else {
                console.debug(arguments[0]);
            }
        },

        groupLog: function () {
            if (!this.debug) {
                return;
            }

            if (arguments.length < 2) {
                return;
            }

            var groupProps = arguments[0];
            if (typeof groupProps !== "object") {
                return;
            }

            var name = groupProps.name ? groupProps.name : "";
            var collapsed = groupProps.collapsed === false ? false : true;
            var fieldNames = groupProps.fields ? groupProps.fields : new Array();
            var type = groupProps.type === "error" ? "error" : "log";

            if (collapsed && type !== "error") {
                console.groupCollapsed(name);
            } else {
                console.group(name);
            }

            for (var i = 1, k = 0; i < arguments.length; i++, k++) {
                if (fieldNames[k] !== undefined) {
                    console[type](fieldNames[k] + ':', arguments[i]);
                } else {
                    console[type](arguments[i]);
                }
            }
            console.trace();
            console.groupEnd();
        }


    };

    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {SearchByIdPlugin}
     */
    $.fn.conferencePlugin = function (params) {
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('conferencePlugin');
        //Если плагин не найден, или false создаем его
        if (plugin === undefined || plugin === false) {
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина и класс searchByIdPlugin
            $.extend(true, plugin, $.conferencePlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Инициализируем плагины
            plugin.plugins.init(plugin);
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            var htmlData = plugin.main(plugin);

            plugin.beforeAppend(plugin);

            this.empty();
            this.append(htmlData);
            //Сохраняем объект плагина в данные контейнреа
            this.data('conferencePlugin', plugin);
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };
})(jQuery);
