/* global User, Function */

(function ($) {
    var ConferenceParticipantsPlugin = function () {
    };

    /**
     * Устанавливает пдагин списка пользователей
     * @param {MemberListPlugin} plugin
     * @param {Function} pluginInitFunc функция, результат выполнения которой передается в качестве аргумента params
     * в метод bind() плагина
     * @returns {undefined}
     */
    ConferenceParticipantsPlugin.prototype.setMemberListPlugin = function (plugin, pluginInitFunc) {
        std_obj.plugins.addFromList = plugin;
        if (pluginInitFunc !== undefined) {
            std_obj.plugins.getAddFromListObj = pluginInitFunc;
        }
    };

    ConferenceParticipantsPlugin.prototype.setAddByIdPlugin = function (plugin, pluginInitFunc) {
        std_obj.plugins.addById = plugin;
        if (pluginInitFunc !== undefined) {
            std_obj.plugins.getAddByIdObj = pluginInitFunc;
        }
    };

    ConferenceParticipantsPlugin.prototype.init = function (params) {
        $.extend(true, std_obj, params);
    };

    ConferenceParticipantsPlugin.prototype.setUserPlugin = function (plugin) {
        std_obj.plugins.user = plugin;
    };


    ConferenceParticipantsPlugin.prototype.bind = function (params, container) {
        var plugin = container.conferenceParticipantsPlugin(params);
        return plugin;
    };

    var std_obj = {
        /***************************************************************************************************************
         *********************************************Параметры**********************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="properties">

        inviteMessage: {
            text: "Текст приглашения",
            subject: "Заголовок сообщения"
        },
        /**
         * Флаг дебага
         */
        debug: false,
        /**
         * Включить автоматическое отправление приглешений
         */
        enableInvitations: true,
        /**
         * Статус отправки приглашения - т.е. конференция уже созданна, время указно и т.д.
         */
        invitationStatus: false,

        /**
         * Объект локализованных фраз
         */
        text: {},

        /**
         * Список хэндлеров для получения различных данных
         */
        handlers: {
            /**
             * Хэндлер для поиска пользователя по его ID
             */
            userById: '/admin/handler/getUserById',
            /**
             * Сохраняет пригласительное сообщение
             */
            saveInviteMessage: '/admin/handler/saveInviteMessage'
        },
        /**
         * Префикс для html id
         */
        prefix: 'cpl',
        /**
         * Префикс для css
         */
        cssPrefix: 'cpl_',
        /**
         * Объект родительского класса
         */
        conferencePlugin: null,
        // </editor-fold>

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * "Точка входа" в плагин
         * @param {std_obj} obj
         * @returns {$}
         */
        getContainer: function (obj) {
            return obj.containers.get(obj);
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /***************************************************************************************************************
         ******************************************Список пользователей**************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="participants">
        /**
         * Объект содержит список пользователей и методы для работы с ним
         */
        participants: {
            /**
             * Максимальное количество пользователей в конференции
             */
            max: 5,
            /**
             * Разрешенны ли гостевые пользователи
             */
            guestAccess: true,
            /**
             * Запрещенно-ли добавление участников
             */
            addLocked: false,
            /**
             * Сам объект со списком. Формат объекта:
             * <code>
             * <pre>
             * {
             *      trueconfId : {
             *          id : 'vasya',
             *          name : 'вася',
             *          htmlId : '1sdadkdckmdjcduh7apam927ryfhcna',
             *          groups : {
             *              '0021' : 'Группа 12',
             *              '49' : 'Васина группа'
             *          },
             *          //Тип пользователя, берется из user
             *          type : 1,
             *          //Тип пользователя 
             *          participantType : 1,
             *          //Ниже не обязательные значения
             *          //Есть только для пользователей, добавленных в список через плагин memberList
             *          extPluginId : 'mlpl_9jd48rjdf43098_member_9nfn3f983fhnc',
             *          hidden: false,
             *          disabled : false
             *      },
             *      ...
             * }
             * </pre>
             * </code>
             */
            list: {},
            /**
             * Добавить сразу целый список пользователей
             * @param {std_obj} obj
             * @param {Object} list
             * @returns {undefined}
             */
            setList: function (obj, list) {
                //В цикле добавляем значения
                $.each(list, function (index, value) {
                    obj.participants.list[index] = value;
                });
            },
            /**
             * Подсчитать количество добавленных пользовтелей
             * @param {std_obj} obj
             * @returns {Number}
             */
            count: function (obj) {
                var counter = 0;
                for (var participant in obj.participants.list) {
                    if (obj.participants.list.hasOwnProperty(participant)) {
                        counter++;
                    }
                }
                return counter;
            },
            /**
             * Возвращает айди всех добавленных в список пользователей
             * @param {std_obj} obj
             * @returns {String[]}
             */
            getIDs: function (obj) {
                var ids = new Array();
                //Использовать Object.keys не вариант, из-за необходимости поддержки ie8
                var list = obj.participants.list;
                for (var key in list) {
                    ids.push(key);
                }

                return ids;
            },
            /**
             * Подсчитать количество пользователей в группах
             * @param {std_obj} obj
             * @returns {Number}
             */
            countGroups: function (obj) {
                //Список групп
                var list = {};
                //В цикле обходим список пользователей
                for (var participant in obj.participants.list) {
                    if (!obj.participants.list.hasOwnProperty(participant)) {
                        continue;
                    }
                    //Если нет параметра groups - переходим к след. пользователю
                    if (!obj.participants.list[participant].hasOwnProperty("groups")) {
                        continue;
                    }
                    //Получаем список групп
                    var groups = obj.participants.list[obj].groups;
                    //Обходим его в цикле, и добавляем в массив
                    for (var group in groups) {
                        if (!list.hasOwnProperty(group)) {
                            list[group] = 0;
                        }
                        list[group]++;
                    }
                }

                return list;
            },

            /**
             * Устанавливает максимальное количество пользователей
             * @param {std_obj} obj
             * @param {Number} max
             * @returns {undefined}
             */
            setMax: function (obj, max) {
                //Старое максимальное количество пользователей
                var oldMax = obj.participants.max;
                //устанавливаем новое максимальное количество пользователей
                obj.participants.max = max;
                //Считаем кол-во сейчас
                var current = obj.participants.count(obj);

                //Если старое значение не равно новому, проверяем, возможно надо отключить кнопки добавления пользователей
                if (obj.plugins.addFromList !== null && obj.plugins.addFromList !== undefined) {
                    if (oldMax !== max) {
                        //Если текущее кол-во пользователей больше или равно максимальному, отключаем добавление
                        var list = obj.plugins.addFromList.containers.list._list;
                        if (max > current) {
                            obj.participants.addLocked = false;
                            list.find('.' + obj.plugins.user.cssPrefix + 'iconAdd').addClass("activeIcon");
                        } else {
                            obj.participants.addLocked = true;
                            list.find('.' + obj.plugins.user.cssPrefix + 'iconAdd').removeClass("activeIcon");
                        }
                    }
                }

                //Если количество добавленных не превыжает максимальное количество - ничего не делаем
                if (current <= max) {
                    //Запускаем коллбэк что макисмальное количество изменилось
                    obj.onMaxParticipantsChanged(obj, oldMax, max, obj.participants.setMax);
                    return;
                }

                //Обходим лист в цикле, и удаляем лишние значения
                var i = 0;
                $.each(obj.participants.list, function (index, value) {
                    //Счетчик циклов
                    i++;
                    //Пропускаем, если счетчик не достиг предела
                    if (i <= max) return true;
                    //Удаляем лишние элементы
                    delete obj.participants.list[index];
                });

                //Запускаем коллбэк что макисмальное количество изменилось
                obj.onMaxParticipantsChanged(obj, oldMax, max, obj.participants.setMax);
                // а так-же что изменился список
                obj.onListChanged(obj, obj.participants.setMax);
            },
            /**
             * Удаляет всех гостей из списка пользователей
             * @param {std_obj} obj
             * @returns {undefined}
             */
            removeGuests: function (obj) {
                //Обходим лист в цикле, и удаляем гостей
                $.each(obj.participants.list, function (index, value) {
                    //Удаляем
                    if (value.participantType === obj.plugins.user.USER_TYPE.GUEST) {
                        delete obj.participants.list[index];
                    }
                });
                //перезагружаем список
                obj.containers.memberList.refreshList(obj);
                //Вызываем коллбэк что изменился список
                obj.onListChanged(obj, obj.participants.setMax);
            },
            /**
             * Проверяет заполнен-ли список пользователей
             * @param {std_obj} obj
             * @returns {Boolean}
             */
            isFull: function (obj) {
                if (obj.participants.count(obj) >= obj.participants.max) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // </editor-fold>

        /***************************************************************************************************************
         ******************************************Груупы операторов*****************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="operatorsGroups">
        operatorsGroups: {

            _isListLoaded: false,
            list: {},

            isMemberOperator: function (obj, member) {
                if (!member.hasOwnProperty("groups")) {
                    return false;
                }

                for (var groupId in member.groups) {
                    if (obj.operatorsGroups.list.hasOwnProperty(groupId)) {
                        return true;
                    }
                }

                return false;
            },

            isOperatorsGroup: function (obj, groupId) {
                return obj.operatorsGroups.list.hasOwnProperty(groupId);
            },

            isListLoaded: function (obj) {
                return obj.operatorsGroups._isListLoaded;
            }

        },
        // </editor-fold>

        /***************************************************************************************************************
         *********************************************Контейнеры*********************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="containers">
        /**
         * Содержит всё html представление
         */
        containers: {

            /**
             * Возвращает основной контейнер плагина, реалезует синглтон
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            get: function (obj) {
                //Сиглтон
                if (obj.containers._rendered === null) {
                    //*(((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))
                    /*var names = ['Ваня','Иван','Костя','Саша','Кузнецов Александр Александрович','Женя','Юра','Алексей','Юля','Абанина','Марина'];
                    var ids = ['Ivan','ivan','kostya','sasha','Alex','zzz','hren','Alex','Julia','abanina','U.S.A Marines'];
                    var srb = {
                            'id' : 'Ivan',
                            'name' : 'Ваня',
                            'htmlId' : '',
                            'groups' : {
                                '0021' : 'Группа 12',
                                '49' : 'Васина группа'
                            },
                            'type' : 1
                    };
                    for(var i = 0; i<55; i++){
                        var rand = Math.floor((Math.random() * 11) + 1) - 1;
                        var sbr = $.extend(true, {}, srb);
                        sbr.id = ids[rand] + "-" + i;
                        sbr.name = names[rand] + "-" + i;
                        sbr.htmlId = generateUniqueId(i);
                        
                        obj.participants.list[sbr.id] = sbr;
                    }*/

                    /////////??????????????????????????????????????????????????????????????????????????????????????????
                    obj.containers._rendered = obj.containers._render(obj);
                }
                //Обновляем список
                obj.containers.memberList.refreshList(obj);

                return obj.containers._rendered;
            },
            /**
             * рендерит html
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render: function (obj) {
                return obj.containers.mainPanel.get(obj);
            },
            /**
             * Сохраненный рендер
             */
            _rendered: null,


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Параметры для диалогового окна
             */
            mainPanel: {
                /**
                 * Высота диалогового окна в пикслеях
                 */
                height: 660,
                /**
                 * Ширина диалогового окна в пикслеях
                 */
                width: 1200,
                /**
                 * Возвращает основной контейнер плагина, реалезует синглтон
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    //Сиглтон
                    if (obj.containers.mainPanel._rendered === null) {
                        obj.containers.mainPanel._rendered = obj.containers.mainPanel._render(obj);
                    }

                    return obj.containers.mainPanel._rendered;
                },
                /**
                 * рендерит html
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $(' <div class="' + obj.cssPrefix + 'participantsPlugin">')
                        .append('<table style="width:100%; height:100%"><tr><td class="' + obj.cssPrefix + 'leftPanel"></td>'
                            + '<td class="' + obj.cssPrefix + 'rightPanel"></td></tr></table>');

                    //Получаем контейнер списка пользователей
                    var memberListContainer = obj.containers.memberList.get(obj);
                    //Добавляем контейнер в первую ячейку
                    container.find("td:first").append(memberListContainer);

                    //Получаем контейнер боковых кнопочек
                    var rightPanel = obj.containers.rightPanel.get(obj);
                    //Добавляем контейнер во второю ячейку
                    container.find("td:last").append(rightPanel);

                    return container;
                },
                /**
                 * Отрендеренная панель
                 */
                _rendered: null
                //End mainPanel
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Правая панель, содержит кнопки открытия методов добавления пользователей, и контейнеры самих методов
             */
            rightPanel: {
                /**
                 * Возвращает контейнер правой панели
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.rightPanel._rendered === null) {
                        obj.containers.rightPanel._rendered = obj.containers.rightPanel._render(obj);
                    }

                    return obj.containers.rightPanel._rendered;
                },
                /**
                 * рендерит правую панель
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div style="width: 100%; height: 100%">')
                        .append('<div style="padding-bottom: 6px;">' + _("Add new participants") + '</div>');


                    var inner = $('<div id="' + obj.prefix + 'addMembersContainer" style="width: 100%; height: 100%;" >');
                    //Добавляем кнопки
                    inner.append(obj.containers.buttonsPanel.get(obj));

                    //Добавляем панель добавления из списка
                    if (obj.plugins.addFromList !== null) {
                        inner.append(obj.containers.addFromListPanel.get(obj).hide());
                    }

                    //Добавляем панель добавления по айди
                    if (obj.plugins.addById !== null) {
                        inner.append(obj.containers.addByIdPanel.get(obj).hide());
                    }

                    inner.append(obj.containers.inviteGuestsPanel.get(obj).hide());

                    //Добавляем кнопку сокрытия панель добавления
                    inner.append(obj.containers.otherMethodsButton.get(obj).hide());

                    container.append(inner);

                    return container;
                },
                /**
                 * Отрендеренная панель
                 */
                _rendered: null,
                /**
                 * Содержит имя видимой в данный момент панели добавления пользователей, или null, если никакая не открыта
                 */
                _visibleMethodObjName: null
                //End rightPanel
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Кнопки для добавления пользователей
             */
            buttonsPanel: {
                /**
                 * Возвращает контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.buttonsPanel._rendered === null) {
                        obj.containers.buttonsPanel._rendered = obj.containers.buttonsPanel._render(obj);
                    }
                    return obj.containers.buttonsPanel._rendered;
                },
                /**
                 * Рендерит контейнер с кнопками
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var instance = obj.containers.buttonsPanel;
                    var container = $('<div id="' + obj.prefix + 'addMembersButtonsPanel" >').append('<hr/>');
                    //Массив с кнопками
                    var buttons = instance._buttons;
                    //Если конференция не имеет гостевой доступ, то удаляем кнопку добавить гостей
                    /////!!!!!!!!!!!!!! IE8 не поддерживает indexOF в массивах, поэтому сделал через жопу
                    //Обходим массив в цикле
                    for (var key in  buttons) {
                        if (key === "inviteGuests" && !obj.participants.guestAccess) {
                            continue;
                        } else if (key === "addById" && obj.plugins.addById === null) {
                            continue;
                        } else if (key === "addFromList" && obj.plugins.addFromList === null) {
                            continue;
                        }

                        //Создаем кнопку
                        var button = instance._createButton(obj, key, buttons[key]);
                        container.append(button);
                    }

                    return container;
                },
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null,
                /**
                 * Массив с названиями кнопок.
                 */
                _buttons: {
                    'addFromList': _("Select from the contact list"),
                    'addById': _("Add via ID"),
                    'inviteGuests': _("Invite guests")
                },
                /**
                 * Создает новую кнопку
                 * @param {std_obj} obj
                 * @param {String} id
                 * @param {String} name имя кнопки
                 * @returns {jQuery}
                 */
                _createButton: function (obj, id, name) {
                    var container = $('<div class="grayButton contentMargin memberListActionButton">');
                    //Добавляем ид
                    container.prop("id", obj.prefix + id);
                    //Устанавливаем текст кнопки
                    container.text(name);

                    //Клик на кнопку
                    container.click(function () {
                        //Получаем id, если его нет, или он пустой - выходим
                        var id = this.id;
                        if (id === undefined) {
                            return;
                        }
                        //Обрабатываем клик по кнопке
                        obj.containers.buttonsPanel._applyClick(obj, id);
                    });

                    return container;
                },
                /**
                 * Обрабатывает нажатие на кнопку
                 * @param {std_obj} obj
                 * @param {String} id айди кнопки
                 * @returns {undefined}
                 */
                _applyClick: function (obj, id) {
                    //Если длинна айди меньше или равна префиксу - значит он  не валиден, выходим
                    if (id.length <= obj.prefix.length) {
                        return;
                    }
                    //Отрезаем префикс из айди
                    id = id.substr(obj.prefix.length);
                    //Добавляем к концу айди постфикс
                    id = id + 'Panel';
                    //Проверям существование такого контейнера
                    if (!obj.containers.hasOwnProperty(id)) {
                        obj.log("Undefined button : " + id);
                        return;
                    }
                    if (!obj.containers[id].hasOwnProperty("show")) {
                        obj.log("Invalid button or method : " + id);
                        return;
                    }
                    //Выводим контейнер и скрываем панель кнопок
                    obj.containers.buttonsPanel.hide(obj);
                    obj.containers[id].show(obj);
                    //Показываем кнопку других способов добавления
                    obj.containers.otherMethodsButton.show(obj);
                    //Устанавливаем айди видимой панели для того, чтобы потом ее было просто скрыть
                    obj.containers.rightPanel._visibleMethodObjName = id;
                },
                /**
                 * Скрыть панель с кнопками
                 * @param {type} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    obj.containers.buttonsPanel.get(obj).hide();
                },
                /**
                 * Показать панель с кнопками
                 * @param {type} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    obj.containers.buttonsPanel.get(obj).show();
                },
                /**
                 * Скрыть кнопку с айди buttonId
                 * @param {std_obj} obj
                 * @param {String} buttonId
                 * @returns {undefined}
                 */
                hideButton: function (obj, buttonId) {
                    var btn = obj.containers.buttonsPanel.get(obj).find('#' + obj.prefix + buttonId);
                    if (btn.length === 0) {
                        console.log("button '" + buttonId + "' not found");
                        return;
                    }

                    btn.hide();
                },
                /**
                 * Показать кнопку с айди buttonId
                 * @param {std_obj} obj
                 * @param {String} buttonId
                 * @returns {undefined}
                 */
                showButton: function (obj, buttonId) {
                    var btn = obj.containers.buttonsPanel.get(obj).find('#' + obj.prefix + buttonId);
                    if (btn.length === 0) {
                        console.log("button '" + buttonId + "' not found");
                        return;
                    }

                    btn.show();
                }
                //End buttonsPanel
            },
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Кнопка для переключения способов добавления пользователей
             * Выводится только если включен какой-то из методов добавления, иначе скрыта
             */
            otherMethodsButton: {
                /**
                 * Возвращает контейнер кнопки
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.otherMethodsButton._rendered === null) {
                        obj.containers.otherMethodsButton._rendered = obj.containers.otherMethodsButton._render(obj);
                    }

                    return obj.containers.otherMethodsButton._rendered;
                },
                /**
                 * Рендерит кнопку
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Тут убогий костыль для IE < 11, т.к. я задолбался пытаться его поправить средствами css
                    var ie = false;
                    if (!!navigator.userAgent.match(/Trident\/7\./)) {
                        var nav = navigator.userAgent.toLowerCase();
                        var ie = (nav.indexOf('msie') !== -1) ? parseInt(nav.split('msie')[1]) : false;
                    }
                    if (ie !== false) {
                        var container = $('<p  style="margin-top: 55px; text-align: center;">'
                            + '<a href="#">'
                            + _("Other ways to add users") + '</a></p>');
                    } else {
                        var container = $('<p  style="margin-top: 5px; text-align: center;">'
                            + '<a href="#">'
                            + _("Other ways to add users") + '</a></p>');
                    }

                    //По клику на кнопку показываем меню и скрываем способ добавления
                    container.click(function () {
                        //Скрываем открытый метод добавления, на всякий случай проверяем, существует ли такой объект
                        if (obj.containers.rightPanel._visibleMethodObjName === null) {
                            return;
                        }
                        if (!obj.containers.hasOwnProperty(obj.containers.rightPanel._visibleMethodObjName)) {
                            return;
                        }
                        if (!obj.containers[obj.containers.rightPanel._visibleMethodObjName].hasOwnProperty("hide")) {
                            return;
                        }
                        //Скрываем
                        obj.containers[obj.containers.rightPanel._visibleMethodObjName].hide(obj);
                        //Скрываем саму себя
                        obj.containers.otherMethodsButton.hide(obj);
                        //Показываем кнопки методов добавления
                        obj.containers.buttonsPanel.show(obj);
                    });

                    return container;
                },
                /**
                 * Скрыть кнопку
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    obj.containers.otherMethodsButton.get(obj).hide();
                },
                /**
                 * Показать кнопку
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    obj.containers.otherMethodsButton.get(obj).show();
                },
                /**
                 * Контейнер
                 */
                _rendered: null
                //End otherMethodsButton
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Список добавленных пользователей
             */
            memberList: {
                /**
                 * Возвращает контейнер для списка пользователей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.memberList._rendered === null) {
                        obj.containers.memberList._rendered = obj.containers.memberList._render(obj);
                    }
                    return obj.containers.memberList._rendered;
                },
                /**
                 * Рендерим панель со списком пользователей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    /**
                     * Текущий объект
                     * @type {memberList}
                     */
                    var instance = obj.containers.memberList;
                    //Заполняем переменные
                    instance._searchInput = $('<input tabindex="-1" class="lightGray" maxlength="64" type="text" />');
                    instance._searchField = $('<div class="inputBlock"></div>');
                    instance._searchField.append(instance._searchInput);
                    instance._list = $('<div class="cpl_members full"></div>');
                    instance._maxUsersAvailable = $('<span></span>');
                    instance._totalMembers = $('<span></span>');
                    instance._listInfoContainer = $('<div class="' + obj.cssPrefix + 'listInfo">');
                    instance._usersNotFoundContainer = $('<div style="display: table; width: 100%; height:100%;">' +
                        '<div class="' + obj.cssPrefix + 'notFound">' + _("No users found. Check the search criteria") + '</div></div>');
                    //@deprecated нужно-ли выводить прогрессбар при поиске?? Пока он не выводится...
                    instance._progressBarContainer = $('<div class="' + obj.cssPrefix + 'wait"><img src="/img/spinner.gif" alt="wait" /></div>');


                    //Создаем контейнер
                    var container = $('<div style="height: 100%; width:100%"></div>')
                        .append('<div style="padding-bottom: 6px;">' + _("Conference participants") + ':</div>');
                    var userList = $('<div class="cpl_userList">');
                    var inner = $('<div class="cpl_inner">');

                    //Контейнер для формы поиска
                    var searchBlock = $('<div class="searchBlock">');

                    //Контейнер для лимитов польщователей
                    instance._limits = $('<div class="limit">');
                    instance._limits.append(instance._maxUsersAvailable);
                    instance._limits.append("<span> / </span>");
                    instance._limits.append(instance._totalMembers);
                    searchBlock.append(instance._limits);
                    searchBlock.append(instance._searchField);
                    searchBlock.append('<div class="clear">');


                    //Добавляем все
                    userList.append(searchBlock);
                    //Добавляем на внутренний контейнер сам список, и панель с данными списка (там выводится например
                    //что поиск по пользователям неудачный
                    inner.append(instance._listInfoContainer);
                    inner.append(instance._list);
                    inner.append('<div class="clear">');
                    //Добавляем внутреннкй контейнер
                    var tcont = $('<div style="display: table-row; height:100%; width:100%">');
                    userList.append(tcont.append($('<div style="display: table-cell; height:100%; width:100%; padding: 2px;">').append(inner)));
                    //Добавляем список пользователей
                    container.append(userList);
                    container.append("<br/>");

                    //Добавляем кнопку приглашения пользователей
                    container.append(obj.containers.inviteButton.get(obj));

                    container.append(obj.containers.inviteMessage.get(obj));
                    container.append(obj.containers.sendInvitations.get(obj));

                    //Устанваливаем максимальное количество пользователей
                    instance.setMaxUsers(obj, obj.participants.max);
                    //Устанваливаем  количество добавленных пользователей
                    instance.setUsersCount(obj, obj.participants.count(obj));

                    //Обрабатываем поле поиска
                    var searchField = this._searchInput;
                    //устанавливаем для поля поиска текст по умолчанию
                    searchField.val(_("Enter the user name"));
                    //Когда пользователь кликает на поле поиска, если там было только описание, удаляем описание
                    //и меняем внешний вид поля ввода
                    searchField.focusin(function () {
                        //Если текст в поле ввода равен описанию поля по умолчанию (т.е. пользователь ничего туда не вводил)
                        if (searchField.val() === _("Enter the user name")) {
                            //Сбрасываем строку в поле ввода
                            searchField.val("");
                            //Cбрасываем сохраненную поисковую строку
                            instance._searchString = "";
                        }
                        searchField.removeClass("lightGray");
                    });
                    //Когда пользователь убирает фокус с поля поиска, если он не ввел никаких данных, возвращаем описание
                    //и меняем внешний вид поля ввода
                    searchField.focusout(function () {
                        if (searchField.val().length === 0) {
                            searchField.val(_("Enter the user name"));
                            instance._searchString = _("Enter the user name");
                            searchField.addClass("lightGray");
                        }
                    });

                    //Если пользователеь начинает печатать, запускаем поиск с небольшой задержкой, что-бы не грузиить браузер
                    var onSearchFieldChange = function (event) {
                        //Если поисковая строка изменилась (необходимо чтобы отсеивать всякие нажатия на shift и т.д.)
                        //запускаем поиск
                        if (instance._searchString !== searchField.val()) {
                            instance._searchString = searchField.val();
                            instance._searchTimeoutFunc(obj);
                        }
                    };

                    searchField.on("input", onSearchFieldChange);
                    // searchField.on("change",onSearchFieldChange);

                    return container;
                },
                /**
                 * Устанваливает максимальное число пользователей
                 * @param {std_obj} obj
                 * @param {Number} max
                 * @returns {undefined}
                 */
                setMaxUsers: function (obj, max) {
                    obj.containers.memberList._maxUsersAvailable.text(max);
                },
                /**
                 * Устанавливает текущее количество добавленных пользователей
                 * @param {std_obj} obj
                 * @param {Number} counter
                 * @returns {undefined}
                 */
                setUsersCount: function (obj, counter) {
                    obj.containers.memberList._totalMembers.text(counter);
                    if (counter >= obj.participants.max) {
                        obj.containers.memberList._limits.addClass("reached");
                    } else {
                        obj.containers.memberList._limits.removeClass("reached");
                    }
                },
                /**
                 * Перерисовывает список пользователей
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                refreshList: function (obj) {
                    //Получаем контейнер со списком
                    var list = obj.containers.memberList._list;
                    //Очищаем его
                    list.empty();
                    //В цикле получаем всех добавленных пользователей
                    for (var realId in obj.participants.list) {
                        //Получаем пользователя
                        var member = obj.participants.list[realId];
                        //Получаем его контейнер
                        var memberContainer = obj.containers.member.get(obj, member);
                        list.append(memberContainer);
                    }
                    //Обновляем максимальное количество пользователей
                    obj.containers.memberList.setMaxUsers(obj, obj.participants.max);
                    //Обновляем количество добавленных пользователей
                    obj.containers.memberList.setUsersCount(obj, obj.participants.count(obj));
                    //Вызываем коллбэк, что список был изменен
                    obj.onHtmlListChanged(obj, obj.containers.memberList.refreshList);
                },
                /**
                 * Осуществляет поиск по списку
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                searchFromList: function (obj) {
                    var searchString = obj.containers.memberList._searchString.toLowerCase();
                    //Если поисковая строка пустая, то выводим весь список
                    //Регулярка для поиска
                    var regexp = new RegExp(searchString, 'ig');
                    //Получаем контейнер со списком
                    var list = obj.containers.memberList._list;

                    var searchFields = {
                        displayName: {
                            type: 1
                        },
                        id: {
                            type: 1
                        }//,
                        /*groups : {
                            type : 2
                        }*/
                    };

                    //флаг, найдены ли пользователи
                    var usersFound = false;
                    //Обходим массив с пользователями в цикле, и делаем видимыми тех, которые совпдают с поисковой строкой
                    for (var key in obj.participants.list) {
                        var currentMatch = false;
                        var member = obj.participants.list[key];

                        for (var field in searchFields) {
                            var type = searchFields[field].type;

                            switch (type) {
                                case 1:

                                    var value = member[field];

                                    if (regexp.test(value) && searchString.length !== 0) {
                                        value = value.replace(regexp, '<span class="' + obj.cssPrefix + 'found">$&</span>');
                                        $('#' + member.htmlId + '_' + field).html(value);
                                        currentMatch = true;
                                    } else {
                                        $('#' + member.htmlId + '_' + field).text(value);
                                    }

                                    break;
                                case 2 :
                                    var values = member[field];
                                    var valuesList = [];
                                    for (var key2 in values) {
                                        var value = values[key2];

                                        if (regexp.test(value) && searchString.length !== 0) {
                                            currentMatch = true;
                                            value = value.replace(regexp, '<span class="' + obj.cssPrefix + 'found">$&</span>');
                                        }
                                        valuesList.push(value);
                                    }
                                    if (valuesList.length !== 0) {
                                        $('#' + member.htmlId + '_' + field).html(valuesList.join(", "));
                                    }
                                    break;
                            }

                            //Находим контейнер пользователя
                            var memberContainer = list.find('#' + member.htmlId);
                            if (currentMatch === false && searchString.length !== 0) {
                                memberContainer.hide();
                            } else {
                                usersFound = true;
                                memberContainer.show();
                            }
                        }
                    }


                    //Если был найден хоть один пользователь
                    if (usersFound) {
                        //Скрываем надпись что пользователи не найденны
                        obj.containers.memberList._listInfoContainer.hide();
                    }
                    //Если пользователи не найдены, но была введена поисковая строка (если она пустая, то пользоватеил не 
                    //ищутся ), то выводим подсказку что ничего не найдено
                    else if (searchString.length > 0) {
                        obj.containers.memberList._listInfoContainer.empty();
                        obj.containers.memberList._listInfoContainer.append(obj.containers.memberList._usersNotFoundContainer);
                        obj.containers.memberList._listInfoContainer.show();
                    }
                    //Если была введена пустая поисковая строка, просто скрываем надпись not found
                    else {
                        obj.containers.memberList._listInfoContainer.hide();
                    }
                    //Вызываем коллбэк, что список был изменен
                    obj.onHtmlListChanged(obj, obj.containers.memberList.searchFromList);
                },

                highlightMember: function () {

                },
                /**
                 * Добавить нового пользователя в список
                 * Передача параметра member, необходима для того, чтобы если у нас заполненно поле поиска по пользователям,
                 * пользователь не соответсвующий поисковому запросу, визуально не добавлялся в список
                 * @param {std_obj} obj
                 * @param {jQuery} memberContainer
                 * @param {Object} member
                 * @param {Object} params доп. параметры создания пользователя
                 * @returns {Boolean}
                 */
                addMember: function (obj, memberContainer, member, params) {
                    /**
                     * Текущий нэймспейс
                     * @type {memberList}
                     */
                    var instance = obj.containers.memberList;
                    //Скрываем пользователя, чтобы он не мигал в случае введенной поисковой строке
                    memberContainer.hide();

                    //Добавляем пользователя к списку
                    //Если есть флаг добавить в начало, добавляем в начало
                    if (params.addToTop === true) {
                        instance._list.prepend(memberContainer);
                    } else {
                        instance._list.append(memberContainer);
                    }

                    //Обновляем кол-во добавленных пользователей
                    obj.containers.memberList.setUsersCount(obj, obj.participants.count(obj));

                    //Если поисковая строка не пуста и не равна описанию поиска, то необходимо проверить добавляемого 
                    //пользователя, соотвествует ли он поисковой строке
                    if (instance._searchString.length !== 0 && instance._searchString !== _("Enter the user name")) {
                        //Обновляем список
                        instance.searchFromList(obj);
                        return true;
                    }
                    //Делаем пользователя видимым
                    memberContainer.show();
                    //Вызываем коллбэк, что лист был изменен
                    obj.onHtmlListChanged(obj, obj.containers.memberList.addMember);
                    return true;
                },
                /**
                 * Удаляет пользователя из списка
                 * @param {std_obj} obj
                 * @param {String} id htmlID пользователя (может отличаться от реального ид в объекте list)
                 * @returns {Boolean}
                 */
                removeMember: function (obj, id) {
                    //Получаем контейнер пользоваетля
                    var memberContainer = $('#' + id);
                    //Если пользователя не существует возвращаем false
                    if (memberContainer === undefined || memberContainer.length === 0) {
                        return false;
                    }
                    //Удаляем
                    memberContainer.remove();
                    //Обновляем кол-во добавленных пользователей
                    obj.containers.memberList.setUsersCount(obj, obj.participants.count(obj));
                    //Вызываем коллбэк, что лист был изменен
                    obj.onHtmlListChanged(obj, obj.containers.memberList.removeMember);

                    return true;
                },
                /**
                 * Осуществляет задержку перед поиском, чтобы не грузить браузер
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                _searchTimeoutFunc: function (obj) {
                    /**
                     * @type {memberList}
                     */
                    var instance = obj.containers.memberList;
                    //Очищаем прошлый таймаут
                    clearTimeout(instance._searchTimeout);
                    //Устанавливаем новый таймаут
                    instance._searchTimeout = setTimeout(function () {
                        //Выполнить поиск по списку
                        instance.searchFromList(obj);
                    }, instance._searchDelay);
                },
                /**
                 * Задержка перед поиском, для того чтобы не грузить браузер, если пользователь очень быстро печатает
                 */
                _searchDelay: 50,
                /**
                 * Объект таймаута, для прерывания задержки поиска
                 */
                _searchTimeout: null,
                /**
                 * Cтрока поиска, необходимо сохранять ее, для отсеивания нажатий служебных кнопок
                 */
                _searchString: "",
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null,
                /**
                 * Контейнер для максимального количества пользователей
                 */
                _maxUsersAvailable: null,
                /**
                 * Контейнер для числа добавленных/максимального количества пользователей
                 */
                _limits: null,
                /**
                 * Контейнер с общим количеством пользователей
                 */
                _totalMembers: null,
                /**
                 * Контейнер для списка пользователей
                 */
                _list: null,
                /**
                 * Поле ввода для поиска по пользователям
                 */
                _searchField: null,
                /**
                 * Контейнер для всякой информации листа, а так-же для вывода прогрессбара при поиске по списку
                 */
                _listInfoContainer: null,
                /**
                 * Контейнер для прогрессбара
                 * @deprecated нужно-ли выводить прогрессбар при поиске?? Пока он не выводится...
                 */
                _progressBarContainer: null,
                /**
                 * Контейнер для подсказки что пользователи не найденны
                 */
                _usersNotFoundContainer: null
                //End participantsList
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Кнопка приглашения пользователей в кофнеренцию
             */
            inviteButton: {
                /**
                 * Возвращает контейнер для кнопки приглашения пользователей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.inviteButton._rendered === null) {
                        obj.containers.inviteButton._rendered = obj.containers.inviteButton._render(obj);
                    }

                    return obj.containers.inviteButton._rendered;
                },
                /**
                 * Рендерит контейнер для кнопки приглашения
                 * @param {std_obj} obj
                 * @returns {$}
                 */
                _render: function (obj) {
                    var container = $('<div class="blueButton disabled" style="margin: 0 auto; width: 240px;">'
                        + obj.text.sendInvitations + '</div>');

                    //Если мы создаем конференцию - нельзя позволять отправлять приглашения, пока пользователь не сохрнаит
                    //конференцию
                    container.addClass("disabled");

                    //Обрабатываем клик по кнопке
                    container.click(function () {
                        //Если кнопка заблокированна ничего не делаем
                        if (container.hasClass("disabled")) {
                            return false;
                        }
                        obj.onInvitationClick(obj);
                    });

                    return container;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                enable: function (obj) {
                    if (obj.participants.count(obj) < 1) {
                        return false;
                    }
                    var container = obj.containers.inviteButton.get(obj);
                    container.removeClass("disabled");
                    container.removeAttr("title");
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @param {String} title
                 * @returns {undefined}
                 */
                disable: function (obj, title) {
                    var container = obj.containers.inviteButton.get(obj);
                    container.addClass("disabled");
                    if (typeof title === "string") {
                        container.attr("title", title);
                    } else if (title !== false) {
                        container.removeAttr("title");
                    }
                },
                /**
                 * Отрендеренная кнопка отправки приглашений
                 */
                _rendered: null
                //End inviteButton
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Создание контейнера пользователя и методы для работы с ним
             */
            member: {
                /**
                 * Создает контейнер для пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @param {Object} pluginParams параметры создания пользователя
                 * @returns {jQuery}
                 */
                get: function (obj, member, pluginParams) {
                    //В том случае, если вдруг не установлен плагин обработки пользователей
                    if (obj.plugins.user === null) {
                        return $('<div>');
                    }
                    //Параметры создания пользователя
                    var params = {
                        prefix: obj.prefix,
                        nameLength: obj.containers.member._nameVisibleLength,
                        idLength: obj.containers.member._idVisibleLength,
                        groupsLength: obj.containers.member._groupsVisibleLength
                    };
                    //Если переданны доп.параметры, то сливаем их с основными
                    if (pluginParams !== undefined && typeof pluginParams === "object" && pluginParams !== null) {
                        params = $.extend(true, params, pluginParams);
                    }

                    //Создаем контейнер пользователя
                    var container = obj.plugins.user.createUser(member, params);
                    //var container = $('<div>');

                    //Кнопки пользователя
                    var buttons = $('<div class="' + obj.plugins.user.cssPrefix + 'memberActionsIcon">');
                    container.prepend(buttons);
                    container.addClass(obj.plugins.user.cssPrefix + "hasButtons");

                    if (member.disabled !== true) {
                        var removeButton = $('<div class="' + obj.plugins.user.cssPrefix + 'iconRemove activeIcon">');
                        //Обрабатываем нажатие на кнопку удаления
                        removeButton.click(function () {
                            obj.removeParticipant(obj, member.id);
                        });
                        buttons.append(removeButton);

                    }

                    var operatorButton = $('<div class="' + obj.plugins.user.cssPrefix + 'iconOperator activeIcon">');
                    //Обрабатываем нажатие на кнопку удаления
                    operatorButton.click(function () {
                        obj.changeOperatorStatus(obj, member);
                    });
                    buttons.append(operatorButton);

                    if (member.isOperator) {
                        container.addClass(obj.plugins.user.cssPrefix + "operator");
                    }

                    if (member.isOwner || member.hasOperatorsGroup) {
                        operatorButton.addClass(obj.plugins.user.cssPrefix + "immutable");
                        if (member.isOwner) {
                            operatorButton.attr("title", _("The user is the conference owner. He or she automatically becomes a moderator in the conference."));
                        } else if (member.hasOperatorsGroup) {
                            operatorButton.attr("title", _("The user is a member of operators group. He or she automatically becomes a moderator in the conference."));
                        }
                    } else if (member.isOperator) {
                        operatorButton.attr("title", _("Revoke moderator rights"));
                    } else {
                        operatorButton.attr("title", _("Assign as a moderator"));
                    }


                    //Добавляем коллбэки к контейнеру
                    //Если провели мышкой над контейнером
                    container.hover(
                        //Если навели мышку со стороны
                        function () {
                            obj.mouseOnParticipant(obj, member, container);
                        },
                        //Если убрали мышку с контейнера
                        function () {
                            obj.mouseOutParticipant(obj, member, container);
                        }
                    );

                    return container;
                },
                /**
                 * Возвращает объект с параметрами для плагина пользователей
                 * @param {std_obj} obj
                 * @returns {searchByIdPlugin_L1.std_obj.userContainer.getCreateUserObj.searchByIdPluginAnonym$1}
                 */
                getCreateUserObj: function (obj) {
                    return {
                        prefix: obj.prefix,
                        cssPrefix: obj.cssPrefix,
                        nameLength: obj.containers.member._nameVisibleLength,
                        idLength: obj.containers.member._idVisibleLength,
                        groupsLength: obj.containers.member._groupsVisibleLength
                    };
                },
                /**
                 * Вызывается при обновлении статуса пользователя
                 * @param {User} userPlugin
                 * @param {Object} json
                 * @param {Object} eventData
                 * @returns {undefined}
                 */
                updateMembersStatus: function (userPlugin, json, eventData) {
                    var obj = eventData.obj;
                    userPlugin.updateListStatuses(obj.participants.list);
                },
                /**
                 * Вызывается в случае ошибки получения статуса пользователей
                 * @param {type} userPlugin
                 * @param {type} eventData
                 * @returns {undefined}
                 */
                setDefaultMembersStatus: function (userPlugin, eventData) {
                    var obj = eventData.obj;
                    userPlugin.setDefaultListStatuses(obj.participants.list);
                },
                //Три параметра ниже нельзя автоматизировать, т.к. ширина контейнера, а тем более ширина символов 
                //неизвестна до того, как элемент будет выведен на экран. Можно, конечно, сначала показывать пользователю
                //контейнер с полными именами, и скрывать все что за контейнером при помощи overflow: hidden, а потом уже 
                //обрезать, но это получается очень некрасиво.
                /**
                 * Максимальное количество символов в имени, все что больше будет обрезаться
                 */
                _nameVisibleLength: 23,
                /**
                 * Максимальное количество символов в id, все что больше будет обрезаться
                 */
                _idVisibleLength: 24,
                /**
                 * Максимальное количество символов в группах пользователя, все что больше будет обрезаться
                 */
                _groupsVisibleLength: 40
                //End Member
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Панель добавления пользователей в список по их айди
             */
            addByIdPanel: {
                /**
                 * Возвращает контейнер панели добавления пользователей в список по их айди
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.addByIdPanel._rendered === null) {
                        obj.containers.addByIdPanel._rendered = obj.containers.addByIdPanel._render(obj);
                    }
                    return obj.containers.addByIdPanel._rendered;
                },
                /**
                 * Рендерит плагин
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div>');
                    //Плагин добавления по айди
                    obj.plugins.addById = obj.plugins.addById.bind(container, obj.plugins.getAddByIdObj(obj));

                    return container;
                },

                /**
                 * Скрыть панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    //Скрыаем панель
                    obj.containers.addByIdPanel.get(obj).hide();
                    //Сбрасываем все параметры панели
                    obj.plugins.addById.container.clear(obj.plugins.addById);
                    //Лочим кнопки
                    obj.plugins.addById.btnContainer.getButton(obj.plugins.addById, "addByIdButton")._rendered.addClass("disabled");
                    obj.log("hide AddById plugin");
                },
                /**
                 * Показать панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    obj.containers.addByIdPanel.get(obj).show();
                    obj.log("show AddById plugin");
                },
                /**
                 * Контейнер
                 */
                _rendered: null
                //End addByIdPanel
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Панель добавления пользователей из списка всех пользователей
             */
            addFromListPanel: {
                /**
                 * Возвращает контейнер панели добавления пользователей из списка
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.addFromListPanel._rendered === null) {
                        obj.containers.addFromListPanel._rendered = obj.containers.addFromListPanel._render(obj);
                    }
                    return obj.containers.addFromListPanel._rendered;
                },
                /**
                 * Рендерит плагин
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div style="height: 100%; width: 100%">');
                    //Плагин добавления из списка
                    obj.plugins.addFromList = obj.plugins.addFromList.bind(container, obj.plugins.getAddFromListObj(obj));
                    return container;
                },
                /**
                 * Преобразует данные пользователя в списке
                 * @param {std_obj} obj
                 * @param {MemberListPlugin} plugin
                 * @param {Object} member
                 * @param {jQuery} container
                 * @returns {undefined}
                 */
                prepareMember: function (obj, plugin, member, container) {
                    //Если пользователь отключен, ему не нужны никакие кнопки
                    if (member.disabled === true) {
                        return container;
                    }

                    //Если пользователь уже есть в списке добавленных, скрываем его в  списке всех пользователей
                    if (obj.participants.list.hasOwnProperty(member.id)) {
                        container.hide();
                    }

                    //Кнопка добавления в список
                    var buttons = $('<div class="' + obj.plugins.user.cssPrefix + 'memberActionsIcon">');
                    var addButton = $('<div class="' + obj.plugins.user.cssPrefix + 'iconAdd">');
                    //Обрабатываем нажатие на кнопку добавления
                    addButton.click(function () {
                        container.hide();
                        var participant = $.extend(true, {}, member);
                        participant.htmlId = generateUniqueId(obj.prefix + "member_");
                        obj.addParticipant(obj, participant);
                    });

                    //Если есть свободные места для пользователей, включаем кнопки добавления
                    if (obj.participants.count(obj) < obj.participants.max) {
                        addButton.addClass("activeIcon");
                    }

                    if (obj.operatorsGroups.isMemberOperator(obj, member)) {
                        container.addClass(obj.plugins.user.cssPrefix + "operator");
                        member.isOperator = true;
                        member.hasOperatorsGroup = true;
                    }

                    buttons.append(addButton);
                    container.prepend(buttons);
                    return container;
                },
                /**
                 * Скрыть панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    //Скрыаем панель
                    obj.containers.addFromListPanel.get(obj).hide();
                    obj.log("hide addFromListPanel plugin");

                },
                /**
                 * Показать панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    //Сбрасываем все параметры панели
                    obj.plugins.addFromList.refreshList(obj.plugins.addFromList);
                    obj.containers.addFromListPanel.get(obj).show();
                    obj.log("show addFromListPanel plugin");
                },
                /**
                 * Контейнер
                 */
                _rendered: null
                //End selectFromListPanel
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Панель добавления гостей
             */
            inviteGuestsPanel: {
                /**
                 * Возвращает контейнер панели добавления гостей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.inviteGuestsPanel._rendered === null) {
                        obj.containers.inviteGuestsPanel._rendered = obj.containers.inviteGuestsPanel._render(obj);
                    }
                    return obj.containers.inviteGuestsPanel._rendered;
                },
                /**
                 * Рендерит панель добавления гостей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Поле ввода имени
                    obj.containers.inviteGuestsPanel._nameField = $('<input type="text" />');
                    var nameField = obj.containers.inviteGuestsPanel._nameField;

                    //Поле ввода e-mail
                    obj.containers.inviteGuestsPanel._emailField = $('<input type="text" />');
                    var emailField = obj.containers.inviteGuestsPanel._emailField;

                    //Кнопка добавления гостя
                    obj.containers.inviteGuestsPanel._addButton = $('<div class="grayButton small disabled"><div>');
                    var addButton = obj.containers.inviteGuestsPanel._addButton;

                    var container = $('<div class="' + obj.cssPrefix + 'inviteGuests">');
                    container.append('<div class="' + obj.cssPrefix + 'title">' + _("Add guests") + ':</div>');
                    container.append('<hr/>');

                    var innerContainer = $('<div class="' + obj.cssPrefix + 'inner"></div>');

                    var nameContainer = $('<div class="' + obj.cssPrefix + 'tr"></div>');
                    nameContainer.append('<div class="' + obj.cssPrefix + 'td">' + _("Name") + ':</div>');
                    nameContainer.append($('<div class="' + obj.cssPrefix + 'td ' + obj.cssPrefix + 'filed">')
                        .append(nameField));

                    var emailContainer = $('<div class="' + obj.cssPrefix + 'tr"></div>');
                    emailContainer.append('<div class="' + obj.cssPrefix + 'td">' + _("E-mail") + ':</div>');
                    emailContainer.append($('<div class="' + obj.cssPrefix + 'td ' + obj.cssPrefix + 'filed">')
                        .append(emailField));

                    innerContainer.append(nameContainer);
                    innerContainer.append(emailContainer);

                    //Если пользователь начал печатать имя пользователя, отключаем кнопку добавления
                    nameField.add(emailField).keyup(function () {
                        if (addButton.hasClass("locked")) {
                            return false;
                        }

                        if ($.trim(nameField.val()).length > 0 && $.trim(emailField.val()).length > 0) {
                            addButton.removeClass("disabled");
                        } else {
                            addButton.addClass("disabled");
                        }
                    });

                    emailField.keydown(function () {
                        emailField.removeClass(obj.cssPrefix + "error");
                    });

                    var instance = obj.containers.inviteGuestsPanel;
                    //Нажатие кнопки добавления гостя
                    addButton.click(function () {
                        if (addButton.hasClass("disabled")) return;
                        //Если почта не соответсвтует регулярке, выводим ошибку
                        if (!instance._emailRegex.test(emailField.val())) {
                            addButton.addClass("disabled");
                            emailField.addClass(obj.cssPrefix + "error");
                            emailField.focus();
                        }
                        //Если все в порядке, добавляем гостя в список
                        else {
                            //Айди пользователя равно его почте
                            var id = emailField.val();
                            //генерируем гостю htmlid
                            var htmlId = generateUniqueId(obj.prefix + "guest_");

                            //Создаем объект гостя
                            var guest = {};
                            guest.id = id;
                            guest.htmlId = htmlId;
                            guest.displayName = nameField.val();
                            guest.groups = [];
                            guest.type = obj.plugins.user.USER_TYPE.GUEST;
                            guest.participantType = obj.plugins.user.USER_TYPE.GUEST;

                            //Добавляем пользователей в список
                            obj.addParticipant(obj, guest);
                            emailField.val("");
                            nameField.val("");
                            addButton.addClass("disabled");
                        }
                    });
                    addButton.text(_("Add"));

                    container.append(innerContainer);
                    container.append(addButton);
                    return container;
                },
                /**
                 * Поле ввода имени гостя
                 */
                _nameField: null,
                /**
                 * Полее ввода почты гостя
                 */
                _emailField: null,
                /**
                 * Кнопка добавления пользователя
                 */
                _addButton: null,
                /**
                 * Скрыть данную панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hide: function (obj) {
                    obj.containers.inviteGuestsPanel.get(obj).hide();
                    obj.log("hide inviteGuest panel");
                },
                /**
                 * Показать данную панель
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                show: function (obj) {
                    obj.containers.inviteGuestsPanel.get(obj).show();
                    obj.log("show inviteGuest panel");
                },
                /**
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                lock: function (obj) {
                    obj.containers.inviteGuestsPanel._addButton.addClass("locked");
                    obj.containers.inviteGuestsPanel._addButton.addClass("disabled");
                },
                /**
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                unlock: function (obj) {
                    obj.containers.inviteGuestsPanel._addButton.removeClass("locked");
                    if ($.trim(obj.containers.inviteGuestsPanel._nameField.val()).length > 0
                        && $.trim(obj.containers.inviteGuestsPanel._emailField.val()).length > 0) {
                        obj.containers.inviteGuestsPanel._addButton.removeClass("disabled");
                    }

                },
                /**
                 * Отрендеренный конетейнер
                 */
                _rendered: null,
                /**
                 * Регулярка для проверки почты пользователя
                 */
                _emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                //End inviteGuestsPanel
            },

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Кнопка и окно пригласительного сообщения
             */
            inviteMessage: {
                /**
                 * возвращает кнопку открытия окна изменения пригласительного сообщения
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.containers.inviteMessage._rendered === null) {
                        obj.containers.inviteMessage._rendered = obj.containers.inviteMessage._render(obj);
                    }

                    return obj.containers.inviteMessage._rendered;
                },
                /**
                 * Рендерит кнопу и окно пригласительного сообщения
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    var container = $('<div class="' + obj.cssPrefix + 'inviteMessage">');

                    //Ссылка открытия окна
                    obj.containers.inviteMessage._inviteMessageAnchor = $('<a href="#"></a>');
                    obj.containers.inviteMessage._inviteMessageAnchor.css('font-weight', 'normal');

                    //Контейнер для сообщения
                    var inviteMessage = $('<span>');
                    //Добавляем ссылку открытия окна изменения текста
                    inviteMessage.append(obj.containers.inviteMessage._inviteMessageAnchor);
                    container.append(inviteMessage);

                    //По клику на кнопку открываем диалоговое окно
                    obj.containers.inviteMessage._inviteMessageAnchor.click(function () {
                        obj.containers.inviteMessage._dialog.dialog("open");
                    });

                    //Рендерим диалоговое окно
                    obj.containers.inviteMessage._dialog = obj.containers.inviteMessage._renderDialog(obj);
                    //Рендерим окошко сохранения
                    obj.containers.inviteMessage._saveDialog = obj.containers.inviteMessage._renderSaveDialog(obj);

                    //Обновляем данные кнопки
                    obj.containers.inviteMessage.updateDialogBtn(obj);


                    return container;
                },
                /**
                 * Рендерит диалоговое окно
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _renderDialog: function (obj) {
                    var container = $('<div class="' + obj.cssPrefix + 'inviteMessageDialog">');

                    container.dialog({
                        autoOpen: false,
                        height: (this.height === undefined ? 360 : this.height),
                        width: (this.width === undefined ? 640 : this.width),
                        modal: true,
                        dialogClass: 'tc-plugin-ui',
                        draggable: true,
                        resizable: true,
                        close: function () {
                            obj.containers.inviteMessage.onClose(obj);
                        },
                        buttons: [
                            {
                                text: _("Save"),
                                id: obj.prefix + "buttonApplyInviteMessage",
                                click: function () {
                                    obj.containers.inviteMessage.onApply(obj);
                                }
                            },
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCloseInviteMessage",
                                click: function () {
                                    obj.containers.inviteMessage.onClose(obj);
                                    obj.containers.inviteMessage._dialog.dialog("close");
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Invitation message"));

                    obj.containers.inviteMessage._errorField = $('<div class="' + obj.cssPrefix + 'error"></div>');
                    obj.containers.inviteMessage._errorField.hide();
                    container.append(obj.containers.inviteMessage._errorField);

                    container.append('<label for="' + obj.prefix + 'inviteMessageSubject" class="smallTitle">'
                        + _("Invitation message subject") + ':</label>');
                    obj.containers.inviteMessage._inviteMessageSubjectField =
                        $('<input id="' + obj.prefix + 'inviteMessageSubject" type="text" '
                            + ' value="' + obj.inviteMessage.subject + '" />');
                    container.append(obj.containers.inviteMessage._inviteMessageSubjectField);

                    container.append('<label for="' + obj.prefix + 'inviteMessageText" class="smallTitle">' + _("Invitation message") + ':</label>');
                    obj.containers.inviteMessage._inviteMessageField =
                        $('<textarea  id="' + obj.prefix + 'inviteMessageText" rows="6"></textarea>');
                    obj.containers.inviteMessage._inviteMessageField.text(obj.inviteMessage.text);
                    container.append(obj.containers.inviteMessage._inviteMessageField);

                    obj.containers.inviteMessage._inviteMessageField.on("input", function () {
                        if (obj.containers.inviteMessage._inviteMessageField.val().trim().length === 0) {
                            $('#' + obj.prefix + "buttonApplyInviteMessage").prop("disabled", true).addClass("disabled");
                        } else {
                            $('#' + obj.prefix + "buttonApplyInviteMessage").prop("disabled", false).removeClass("disabled");
                        }
                    });

                    return container;
                },
                /**
                 * Рендерит дилаоговое окно процесса сохранения
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _renderSaveDialog: function (obj) {
                    var container = $('<div class="' + obj.cssPrefix + 'inviteMessageDialog">');

                    container.dialog({
                        autoOpen: false,
                        height: (this.saveDialogHeight === undefined ? 160 : this.saveDialogHeight),
                        width: (this.saveDialogWidth === undefined ? 320 : this.saveDialogWidth),
                        modal: true,
                        draggable: true,
                        resizable: true,
                        buttons: [
                            {
                                text: _("Cancel"),
                                id: obj.prefix + "buttonCancelSaveInviteMessage",
                                click: function () {
                                    if (obj.containers.inviteMessage._saveXHR !== null) {
                                        obj.containers.inviteMessage._saveXHR.abort();
                                    }
                                }
                            }
                        ]
                    });
                    container.dialog("option", "title", _("Saving"));
                    container.append('<div>' + _("Please wait") + '</div>');

                    return container;
                },
                /**
                 * Устанвливает текст ошибки сохранения
                 * @param {std_obj} obj
                 * @param {String} error
                 * @returns {undefined}
                 */
                setError: function (obj, error) {
                    obj.containers.inviteMessage._errorField.show();
                    obj.containers.inviteMessage._errorField.text(error);
                },
                /**
                 * Убирает ошибку сохранения
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                removeError: function (obj) {
                    obj.containers.inviteMessage._errorField.empty();
                    obj.containers.inviteMessage._errorField.hide();
                },
                /**
                 * Обновляет параметры кнопки
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                updateDialogBtn: function (obj) {
                    var message = obj.text.invitationSample;
                    obj.containers.inviteMessage._inviteMessageAnchor.text(message);
                },
                /**
                 * Если была нажата кнопка закрытия диалоговго окна
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                onClose: function (obj) {
                    //Сбрасываем введенные данные
                    obj.containers.inviteMessage._inviteMessageField.val(obj.inviteMessage.text);
                    obj.containers.inviteMessage._inviteMessageSubjectField.val(obj.inviteMessage.subject);
                    //Разблоируем кнопку сохранения
                    $('#' + obj.prefix + "buttonApplyInviteMessage").prop("disabled", false).removeClass("disabled");
                },
                /**
                 * Если была нажата кнопка подтверждения диалогового окна
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                onApply: function (obj) {

                    obj.containers.inviteMessage._saveDialog.dialog("open");

                    obj.containers.inviteMessage._saveXHR =
                        $.post(obj.handlers.saveInviteMessage, {
                                'message': obj.containers.inviteMessage._inviteMessageField.val(),
                                'subject': obj.containers.inviteMessage._inviteMessageSubjectField.val()
                            },
                            function () {
                            },
                            'json')
                            .done(function (data) {
                                if (!data.status) {
                                    if (data.error === 'undefined') {
                                        obj.containers.inviteMessage.setError(obj, _("Unknown error"));
                                    } else {
                                        obj.containers.inviteMessage.setError(obj, data.error);
                                    }
                                    return;
                                }
                                obj.inviteMessage.text = obj.containers.inviteMessage._inviteMessageField.val();
                                obj.inviteMessage.subject = obj.containers.inviteMessage._inviteMessageSubjectField.val();

                                obj.containers.inviteMessage.updateDialogBtn(obj);
                                obj.containers.inviteMessage._dialog.dialog("close");
                            })
                            .fail(function (jqXHR, textStatus, errorThrown) {
                                obj.containers.inviteMessage.setError(obj, _("System error") + ': ' + textStatus);
                            })
                            .always(function () {
                                obj.containers.inviteMessage._saveXHR = null;
                                obj.containers.inviteMessage._saveDialog.dialog("close");
                            });
                },
                /**
                 * Поле ввода заголовка сообщения
                 */
                _inviteMessageSubjectField: null,
                /**
                 * Поле ввода пригласительного сообщения
                 */
                _inviteMessageField: null,
                /**
                 * Поле с ошибкой сохранения
                 */
                _errorField: null,
                /**
                 * Ссылка открытия диалоговго окна
                 */
                _inviteMessageAnchor: null,
                /**
                 * Диалогове окно
                 */
                _dialog: null,
                /**
                 * Диалог сохранения
                 */
                _saveDialog: null,
                /**]
                 * Ajax-запрос сохранения
                 */
                _saveXHR: null,
                /**
                 * Отрендеренная кнопка открытия диалогового окна
                 */
                _rendered: null
                //End obj.containers.inviteMessage
            },
            /**
             * Отправлять приглашения пользователям
             */
            sendInvitations: {

                get: function (obj) {
                    if (obj.containers.sendInvitations._rendered === null) {
                        obj.containers.sendInvitations._rendered = obj.containers.sendInvitations._render(obj);
                    }

                    return obj.containers.sendInvitations._rendered;
                },
                /**
                 *
                 * @param {std_obj} obj
                 * @returns {$}
                 */
                _render: function (obj) {

                    var container = $('<div class="' + obj.cssPrefix + 'inviteMessage"></div>');

//                    var checkbox = $('<input type="checkbox" id=' + obj.prefix + 'sendInvitationsCheckbox" />'); 
//                    checkbox.prop("checked", obj.enableInvitations);
//                    checkbox.change(function(){
//                        obj.enableInvitations = checkbox.prop("checked");
//                    });
//                    container.append(checkbox);
//                    obj.containers.sendInvitations._chcekbox = checkbox;
//                    
//                    container.append('<span> ' + _("Send invitations automatically to users when the conference starts") + '</span>');

                    return container;
                },
                /**
                 * Включить или выключить отпраку приглашений
                 * @param {std_obj} obj
                 * @param {boolean} enabled
                 * @returns {undefined}
                 */
                setEnabled: function (obj, enabled) {
                    if (obj.containers.sendInvitations._chcekbox !== null) {
                        obj.containers.sendInvitations._chcekbox.prop("checked", enabled);
                    }
                },

                _chcekbox: null,

                _rendered: null

                //End send invitations
            }

            //End Containers
        },
        // </editor-fold>

        /***************************************************************************************************************
         *******************************************ОСНОВНЫЕ МЕТОДЫ******************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="general">
        /**
         * Добавляет пользователя к списку
         * @param {std_obj} obj
         * @param {Object} data
         * @param {Object} params
         * @param {boolean} checkOperatorRights
         * @returns {undefined}
         */
        addParticipant: function (obj, data, params, checkOperatorRights) {
            obj.groupLog({
                    name: "Add participant (id : " + data.id + ")",
                    fields: ["participant", "params"]
                },
                data, params);

            //Получаем текущее количество пользователей в списке
            var count = obj.participants.count(obj);
            //Если пользователей больше чем можно - ничего не делаем
            if (count > obj.participants.max) {
                obj.log("Participants list is full, unable to add user");
                return false;
            }

            //Если не переданы параметры, создаем пустой объект
            if (params === undefined || params === null || typeof params !== 'object') {
                params = {};
            }
            //Если пользователь уже есть в списке,  и не передан флаг перезаписи - ничего не делаем
            if (obj.participants.list.hasOwnProperty(data.id) && params.refresh !== true) {
                return;
            }
            //Если передан параметр refresh, то удаляем данные
            else if (obj.participants.list.hasOwnProperty(data.id) && params.refresh === true) {
                obj.removeParticipant(obj, data.id);
                obj.plugins.addFromList.refreshList(obj.plugins.addFromList);
                count--;
            }

            //Если есть флаг проверки наличия пользователя в группе операторов
            if (checkOperatorRights && !data.isOwner) {
                if (obj.operatorsGroups.isMemberOperator(obj, data)) {
                    data.isOperator = true;
                    data.hasOperatorsGroup = true;
                }
            }

            //Добавляем к списку
            obj.participants.list[data.id] = data;
            //Создаем контейнер пользователя
            var participant = obj.containers.member.get(obj, data, params);
            //Добавляем контейнер в лист
            obj.containers.memberList.addMember(obj, participant, data, params);

            //Вызываем коллбэк изменения списка
            obj.onListChanged(obj, obj.addParticipant);

            //Увеличиваем количество добавленных на 1 
            count++;
            obj.log("Paricipants.count: " + count);

            //Обрабатывааем блоки, которые должны были заблокироваться при пустом списке, и разблокироваться при хотя-бы одном
            //добавленном пользовтателе
            //Кнопка отправки приглшений
            //Если статус ок
            if (obj.invitationStatus === $.conferencePlugin.INVITATIONS_STATUSES.OK) {
                obj.containers.inviteButton.enable(obj);
            }

            //Если пользователей еще можно добавлять - ничего не делаем, иначе блокируем кнопки добавления
            if (count < obj.participants.max) {
                return true;
            }

            //флаг что добавление заблокированно
            obj.participants.addLocked = true;
            obj.log("Participants list is full, lock adding buttons");

            //Отключаем кнопки добавления из списка
            if (obj.plugins.addFromList !== null) {
                obj.plugins.addFromList.containers.list._list.find('.' + obj.plugins.user.cssPrefix + 'iconAdd').removeClass("activeIcon");
            }

            //Блокируем кнопку добавления гостей
            obj.containers.inviteGuestsPanel.lock(obj);

            //Блокируем кнопку добавления по ID
            if (obj.plugins.addById !== null) {
                obj.plugins.addById.btnContainer.lockAll(obj.plugins.addById);
            }

        },
        /**
         * Удаляет пользователя из списка
         * @param {std_obj} obj
         * @param {String} id
         * @returns {undefined}
         */
        removeParticipant: function (obj, id) {
            obj.log("Remove participant (id : " + id + " )");
            //Если пользователя нет в списке - ничего не делаем
            if (!obj.participants.list.hasOwnProperty(id)) {
                obj.log("Participant ID '" + id + "' not found!");
                return;
            }
            //Сначала сохраняем параметры пользователя, а затем удаляем его, для того, чтобы потом
            //методы удлаения из html при вызове count() отображали правильное значение
            //htmlId пользователя
            var htmlId = obj.participants.list[id].htmlId;
            //Удаляем пользователя
            delete obj.participants.list[id];

            //Удаляем пользователя из html
            obj.containers.memberList.removeMember(obj, htmlId);
            //Вызываем коллбэк изменения списка
            obj.onListChanged(obj, obj.removeParticipant);

            //Получаем текущее количество пользователей в списке
            var count = obj.participants.count(obj);
            //Проверяем плагины

            if (obj.plugins.addFromList !== null) {
                if (obj.plugins.addFromList.inList(obj.plugins.addFromList, id)) {
                    htmlId = obj.plugins.addFromList.list[id].htmlId;
                    $('#' + htmlId).show();
                }
            }

            obj.log("Participants count: " + count);

            //Обрабатываем пустой список
            if (count === 0) {
                obj.containers.inviteButton.disable(obj, false);
            }

            //Если счетчик по какой-то причине всеравно больше чем доступное количество пользователей,
            //или кнопки добавления не блокировались - ничего не делаем
            if (count >= obj.participants.max) {
                return;
            } else {
                //В том случае, если из-за переполенения списка кнопки были заблокированны - разблокируем их,
                //иначе ничего не делаем
                if (!obj.participants.addLocked) {
                    return;
                }

                obj.participants.addLocked = false;
            }

            obj.log("Participants list has free space, unlock adding buttons");

            //Разблокируем кнопку добавления гостей
            obj.containers.inviteGuestsPanel.unlock(obj);

            //Разблокироваем кнопку добавления по ID
            if (obj.plugins.addById !== null) {
                obj.plugins.addById.btnContainer.unlockAll(obj.plugins.addById);
            }

            if (obj.plugins.addFromList !== null) {
                //включаем кнопки добавления
                obj.plugins.addFromList.containers.list._list.find('.' + obj.plugins.user.cssPrefix + 'iconAdd').addClass("activeIcon");
            }


        },

        changeOperatorStatus: function (obj, member) {
            if (member.isOwner || member.hasOperatorsGroup) {
                return false;
            }

            var container = $('#' + member.htmlId);

            if (!member.isOperator) {
                member.isOperator = true;
                container.addClass(obj.plugins.user.cssPrefix + "operator");
                container.find('.' + obj.plugins.user.cssPrefix + 'iconOperator').attr("title", _("Revoke moderator rights"));
            } else {
                member.isOperator = false;
                container.removeClass(obj.plugins.user.cssPrefix + "operator");
                container.find('.' + obj.plugins.user.cssPrefix + 'iconOperator').attr("title", _("Assign as a moderator"));
            }
        },

        /**
         * Возвращает массив с добавленными пользователями
         * @param {std_obj} obj
         * @param {Boolean} full возвратит не масств с  trueconfId, а весь объект пользователей
         * @returns {Object|Array}
         */
        getParticipants: function (obj, full) {
            if (full === true) {
                return $.extend({}, obj.participants.list);
            }
            var data = [];
            $.each(obj.participants.list, function (index, value) {
                data.push(value.id);
            });

            return data;
        },

        /**
         * Надо-ли отправлять приглащения
         * @param {std_obj} obj
         * @returns {Boolean}
         */
        isInvitationEnabled: function (obj) {
            return obj.enableInvitations;
        },

        /**
         * Устанавливает отправку приглашений
         * @param {std_obj} obj
         * @param {boolean} enabled
         * @returns {undefined}
         */
        setInvitationEnabled: function (obj, enabled) {
            obj.enableInvitations = enabled;
            obj.containers.sendInvitations.setEnabled(enabled);
        },

        /**
         * Устанавливает статус возможности отправки
         * @param {std_obj} obj
         * @param {Number} status
         * @returns {undefined}
         */
        setInvitationsStatus: function (obj, status) {
            obj.invitationStatus = status;

            switch (status) {
                case $.conferencePlugin.INVITATIONS_STATUSES.NOT_SAVE:
                    obj.containers.inviteButton.disable(obj, _("Invitations delivery will be available after saving the conference and setting the starting time"));
                    break;
                case $.conferencePlugin.INVITATIONS_STATUSES.SCHEDULE_NONE:
                    obj.containers.inviteButton.disable(obj, _("Invitations delivery will be available after setting the starting time"));
                    break;
                case $.conferencePlugin.INVITATIONS_STATUSES.OK:
                    obj.containers.inviteButton.enable(obj);
            }
        },
        // </editor-fold>

        /***************************************************************************************************************
         *********************************************CALLBACKS**********************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="callbacks">
        /**
         * Callback, вызывается при создании
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCreated: function (obj) {
        },
        /**
         * Если вид плагина - диалог, то при закрытии диалога вызывается этот каллбэк
         * @param {std_obj} obj
         * @param {jQuery} container контейнер диалога
         * @returns {undefined}
         */
        onDialogApply: function (obj, container) {

        },
        /**
         * Вызывается, когда изменяется максимальное число пользователей в списке
         * @param {std_obj} obj
         * @param {Number} oldMax старое максимальное количество пользователей
         * @param {Number} newMax текущее максимальное количество пользователей
         * @returns {undefined}
         */
        onMaxParticipantsChanged: function (obj, oldMax, newMax) {
        },
        /**
         * Вызывается, когда так или иначе изменяется список пользователей
         * @param {std_obj} obj
         * @param {Function} owner кто вызывал коллбэк
         * @returns {undefined}
         */
        onListChanged: function (obj, owner) {

        },
        /**
         * Вызывается, когда изменеяется внешний вид списка пользователей, при этом оригианльный список пользователей
         * может быть без изменений, например, такое возможно, в случае поиска по списку добавленных пользователей -
         * на экране отображаются пользователи, только соотуетствующие поисковой строке, однако объект со списком не менятеся
         * @param {std_obj} obj
         * @param {Function} owner фунция, вызвавшая коллбэк
         * @returns {undefined}
         */
        onHtmlListChanged: function (obj, owner) {

        },

        /**
         * Коллбэк, вызывается при нажатии на кнопку открытии окна отправки приглашений
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onInvitationClick: function (obj) {

        },
        /**
         * Если навели мышку на контейнер с пользователем
         * @param {std_obj} obj
         * @param {Obect} member
         * @param {jQuery} container
         * @returns {undefined}
         */
        mouseOnParticipant: function (obj, member, container) {

        },
        /**
         * Если убрали мышку с контейнера пользователя
         * @param {std_obj} obj
         * @param {Object} member
         * @param {jQuery} container
         * @returns {undefined}
         */
        mouseOutParticipant: function (obj, member, container) {

        },
        /**
         * Если клинкули на пользователя
         * @param {std_obj} obj
         * @param {Object} member
         * @param {jQuery} container
         * @returns {undefined}
         */
        onParticipantClick: function (obj, member, container) {

        },
        // </editor-fold>


        /***************************************************************************************************************
         ***********************************************ПЛАГИНЫ**********************************************************
         ***************************************************************************************************************/
        // <editor-fold defaultstate="collapsed" desc="plugins">
        /**
         * Содержит объекты плагинов и методы работы с ними
         */
        plugins: {
            /**
             * Класс, реализующий работу с данными пользователей и их статусами
             */
            user: null,
            /**
             * Класс объекта для работы с плагином добавления по айли
             */
            addById: null,
            /**
             * Класс объекта для работы с плагином добавления из списка
             */
            addFromList: null,

            /**
             * Объект для предопределения плагина добавления по айди
             * @param {std_obj) obj
             * @returns {Object}
             */
            getAddByIdObj: function (obj) {
                /**
                 * Предопределяем параметры
                 */
                var pluginObj = {
                    /**
                     * Кнопки
                     */
                    buttons: {
                        /**
                         * Кнопка добавления пользователя в список
                         */
                        addByIdButton: {

                            text: _("Add"),
                            /**
                             * Событие, вызываемое по клику на кнопку
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container контейнер этой кнопки
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            click: function (plugin, container, button) {
                                //Получаем параметры найденного пользователя
                                var member = $.extend(true, {}, plugin.member);
                                //Меняем ему htmlId на новый
                                member.htmlId = generateUniqueId(obj.prefix + "member");
                                //Добавляем нового пользователя в список
                                obj.addParticipant(obj, member);
                                //Отключаем кнопку добавления
                                plugin.btnContainer.lockAll(plugin);
                            },

                            /**
                             * Cобытие, вызываемое в случае, если поле поиска пустое
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onSearchFieldEmpty: function (plugin, container, button) {
                                //Блокируем кнопку добавления пользователя
                                plugin.btnContainer.lockAll(plugin);
                            },
                            /**
                             * Событие, вызываемое когда начинается поиск пользователя
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onSearchStarted: function (plugin, container, button) {
                                //Блокируем кнопку добавления пользователя
                                plugin.btnContainer.lockAll(plugin);
                            },
                            /**
                             * Событие, вызываемое когда поиск завершен (не важно был ли найден пользователь или нет)
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Boolean} searchStatus если true, то пользователь найден, иначе false
                             * @param {String} searchString
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onSearchFinished: function (plugin, container, searchStatus, searchString, button) {
                                //Если пользователь  не найден, ничего не делаем
                                if (searchStatus === false) return;
                                //Если пользователь уже есть в списке участников конференции, ничего не делаем
                                /*
                                 * Bug 45058. Если количество участников конференции достигло максимально допустимое значение,
                                 * ничего не делаем.
                                 */
                                if (obj.participants.list.hasOwnProperty(plugin.member.id)
                                    || obj.participants.addLocked) {
                                    return;
                                }
                                //разблокируем кнопку добавления пользователя в список
                                plugin.btnContainer.unlockAll(plugin);
                            },
                            /**
                             * Вызывается, когда кнопка отрендерилась
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onRendered: function (plugin, container, button) {
                                plugin.btnContainer.lockAll(plugin);
                            },
                            /**
                             * Вызывается, когда кнопка была заблокированна для нажатия
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onLock: function (plugin, container, button) {
                                container.addClass("disabled");
                            },
                            /**
                             * Вызывается, когда кнопка была разблокированна для нажатия
                             * @param {SearchByIdPlugin} plugin
                             * @param {jQuery} container
                             * @param {Object} button объект данной кнопки
                             * @returns {undefined}
                             */
                            onUnlock: function (plugin, container, button) {
                                //Если пользователь уже есть в списке участников конференции, или id для поиска пустой -
                                //кнопку разблокировать не надо
                                if (obj.participants.list.hasOwnProperty(plugin.member.id)
                                    || plugin.member.id === undefined || plugin.member.id === null) {
                                    return;
                                }
                                container.removeClass("disabled");
                            }
                        }
                    },
                    /**
                     * Список плагинов плагина
                     */
                    plugins: {
                        'user': obj.plugins.user
                    }
                };
                return pluginObj;
            },
            getAddFromListObj: function (obj) {
                var params = {
                    height: 440,
                    onMemberClick: function (plugin, member) {
                    },
                    plugins: {
                        'user': obj.plugins.user
                    },
                    beforeMemberAdd: function (plugin, member, container) {
                        var c = obj.containers.addFromListPanel.prepareMember(obj, plugin, member, container);

                        return c;
                    }
                };

                return params;
            },
            /**
             * Инициализирует все плагины
             * @param {std_obj} obj
             * @returns {undefined}
             */
            init: function (obj) {
                if (obj.plugins.user !== null) {
                    obj.plugins.user.addUpdateListener(obj.containers.member.updateMembersStatus, {'obj': obj});
                    obj.plugins.user.addErrorListener(obj.containers.member.setDefaultMembersStatus, {'obj': obj});
                }
            }
        },
        // </editor-fold>

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

    $.fn.conferenceParticipantsPlugin = function (params) {
        var plugin = this.data('participantsPlugin');
        if (plugin === undefined || plugin === false) {
            var plugin = $.extend(true, {}, std_obj);
            $.extend(true, plugin, $.conferenceParticipantsPlugin);
            $.extend(true, plugin, params);
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            plugin.parent = this;

            this.append(plugin.getContainer(plugin));
            this.data('participantsPlugin', plugin);

            //Инициализируем плагины
            plugin.plugins.init(plugin);

            plugin.onCreated(plugin, params);
        }
        return plugin;
    };

    $.conferenceParticipantsPlugin = new ConferenceParticipantsPlugin();

})(jQuery);