/* global t, Server, _, User */

(function ($) {
    /**
     * Конструктор класса
     * @param {Object} obj
     * @returns {AddressBook}
     */
    var AddressBook = function (obj) {

    };

    /**
     * Предопределяет методы плагина. Предопределяет "глобально", т.е. во всех плагинах на странце будут данные параметры
     * если необходимо предопределять параметры для определенного плагина, то надо передавать их или в метод jquery плагина,
     * либо в AddressBook.bind()
     * @param {Object} items
     * @returns {undefined}
     */
    AddressBook.prototype.init = function (items) {
        if (items !== undefined && typeof items === 'object' && items !== null) {
            $.extend(true, std_obj, items);
        }
    };

    /**
     * Добавляет плагин к элементу
     * @param {jQuery} container
     * @param {Object} items
     * @returns {undefined}
     */
    AddressBook.prototype.bind = function (container, items) {
        return container.addressBookPlugin(items);
    };


    AddressBook.prototype.DELETE_MODE = {
        ALL: 1,
        USERS: 2,
        CONTACTS: 3,
        NONE: 4
    };

    AddressBook.prototype.OWNER_TYPE_USER = 1;
    AddressBook.prototype.OWNER_TYPE_GROUP = 2;

    /**
     * Плагин выбора элементов из выпадающего списка
     */
    $.addressBookPlugin = new AddressBook();

    /**
     * Основной объект плагина
     * @type Object
     */
    var std_obj = {

        prefix: 'adpl',
        cssPrefix: 'adpl_',

        ownerType: $.addressBookPlugin.OWNER_TYPE_USER,
        ownerId: null,

        handlers: {
            removeUser: "/admin/users/remove/",
            editUser: "/admin/users/edit/",
            userList: '/handlers/directory.php',
            addressBookOwners: '/handlers/addressBookOwners.php'
        },

        deleteMode: $.addressBookPlugin.DELETE_MODE.ALL,

        /*
         * Локализация плагина
         */
        locale: {},

        _main: function (obj) {
            if (obj.ownerId) {
                obj.abOwners._loadList(obj);
            }
            return obj.containers.get(obj);
        },

        containers: {
            get: function (obj) {
                var container = obj.parentObject;
                obj.plugins.memberList = obj.plugins.memberList.bind(container, obj.plugins.getInitMemberListObj(obj));

                container.append(obj.containers.errorList.get(obj));

                return container;
            },


            member: {
                prepareMember: function (obj, member, container) {
                    if (member.type === obj.plugins.user.USER_TYPE.USER
                        || member.type === obj.plugins.user.USER_TYPE.USER_IN_CONTACTS) {
                        container.css("cursor", "pointer");
                    }

                    if (obj.deleteMode === $.addressBookPlugin.DELETE_MODE.NONE) {
                        return container;
                    }
                    else if (obj.deleteMode === $.addressBookPlugin.DELETE_MODE.CONTACTS) {
                        if ((member.type === obj.plugins.user.USER_TYPE.USER || member.owner !== obj.ownerId) &&
                            (obj.ownerId !== User.NO_GROUP_ID && member.owner !== null)) {
                            return container;
                        }
                    }
                    else if (member.type !== obj.plugins.user.USER_TYPE.USER && obj.deleteMode === $.addressBookPlugin.DELETE_MODE.USERS) {
                        return container;
                    }

                    var buttons = $('<div class="' + obj.plugins.user.cssPrefix + 'memberActionsIcon">');
                    var removeButton = $('<div class="' + obj.plugins.user.cssPrefix + 'iconRemove activeIcon">');
                    //Обрабатываем нажатие на кнопку удаления
                    removeButton.click(function () {
                        obj.containers.removeDialog.show(obj, function (obj, dialog) {
                            dialog.dialog("close");
                            obj.deleteMember(obj, member);
                        });
                    });

                    buttons.append(removeButton);
                    container.prepend(buttons);

                    return container;
                }
            },

            removeDialog: {
                get: function (obj) {
                    if (obj.containers.removeDialog._rendered === null) {
                        obj.containers.removeDialog._rendered = obj.containers.removeDialog._render(obj);
                    }

                    return obj.containers.removeDialog._rendered;
                },
                _render: function (obj) {
                    var container = $('<div></div>');
                    container.append('<span>' + _('The user will be <b>deleted</b>. Are you sure?') + '</span>');

                    container.dialog({
                        title: _('Question'),
                        autoOpen: false,
                        position: ['center', 'center'],
                        closeOnEscape: true,
                        draggable: true,
                        modal: true,
                        resizable: false,
                        dialogClass: 'dialog-question-form',
                        width: 400,
                        height: 150,
                        buttons: {
                            close: {
                                text: _('Cancel'),
                                click: function () {
                                    container.dialog("close");
                                }
                            },
                            apply: {
                                text: _('Delete'),
                                click: function () {
                                    container.dialog("close");
                                }
                            }
                        }
                    });

                    return container;
                },
                show: function (obj, onApply) {
                    var dialog = obj.containers.removeDialog.get(obj);
                    dialog.dialog("open");
                    var buttons = dialog.dialog("option", "buttons");
                    buttons["apply"].click = function () {
                        onApply(obj, dialog);
                    };
                    dialog.dialog("option", "buttons", buttons);
                },
                _rendered: null
            },

            errorList: {

                INVALID_LIMIT_TYPE: 0,
                LIMIT_BY_GROUP_CUSTOM_CONTACTS: 1,
                LIMIT_BY_ALL_USERS: 2,
                LIMIT_BY_GROUP: 3,

                LIMIT_BY_USER: 4,

                WARN_BY_GROUP: 5,
                WARN_BY_USER: 6,

                LEVEL_ERROR: 1,
                LEVEL_WARNING: 2,

                CATEGORY_GROUP_ERROR: 1,
                CATEGORY_GROUP_CONTACTS_ERROR: 2,
                CATEGORY_USER_CONTACTS_ERROR: 3,
                CATEGORY_GROUP_WARNING: 4,
                CATEGORY_USER_CONTACTS_WARNING: 5,

                get: function (obj) {
                    if (obj.containers.errorList._rendered === null) {
                        obj.containers.errorList._rendered = obj.containers.errorList._render(obj);
                    }

                    return obj.containers.errorList._rendered;
                },

                _render: function (obj) {
                    var self = this;

                    var c = $('<div class="' + obj.cssPrefix + 'abLimitsButtons"></div>');

                    this.errorBtn = $('<span class="' + obj.cssPrefix + 'errorBtn"></span>');
                    this.errorBtn.hide();
                    this.errorBtn.text(_('Error'));
                    this.errorBtn.click(function () {
                        self.showDialog(obj, self.LEVEL_ERROR);
                    });
                    c.append(this.errorBtn);


                    this.warningBtn = $('<span class="' + obj.cssPrefix + 'warningBtn"></span>');
                    this.warningBtn.hide();
                    this.warningBtn.text(_('Warning'));
                    this.warningBtn.click(function () {
                        self.showDialog(obj, self.LEVEL_WARNING);
                    });

                    c.append(this.warningBtn);

                    this.dialog = $('<div></div>');
                    this.dialog.dialog({
                        title: '',
                        autoOpen: false,
                        position: ['center', 'center'],
                        closeOnEscape: true,
                        draggable: true,
                        dialogClass: obj.cssPrefix + "abLimitsPopup",
                        modal: true,
                        resizable: true,
                        width: 640,
                        height: 320,
                        buttons: {
                            close: {
                                text: _('Close'),
                                click: function () {
                                    $(this).dialog("close");
                                }
                            }
                        }
                    });


                    this.errorsBlock = $('<div class="' + obj.cssPrefix + 'errors ' + obj.cssPrefix + 'list"></div>');
                    this.errorsBlock.hide();
                    this.dialog.append(this.errorsBlock);
                    this.warningsBlock = $('<div class="' + obj.cssPrefix + 'warnings ' + obj.cssPrefix + 'list"></div>');
                    this.warningsBlock.hide();
                    this.dialog.append(this.warningsBlock);

                    return c;
                },

                clear: function (obj) {
                    this.errorBtn.hide();
                    this.errorsBlock.empty();
                    this.warningBtn.hide();
                    this.warningsBlock.empty();
                },

                setList: function (obj, errors) {
                    var countErrors = {};
                    countErrors[this.LEVEL_WARNING] = 0;
                    countErrors[this.LEVEL_ERROR] = 0;

                    for (var i = 0; i < errors.length; i++) {
                        var type = obj.containers.errorList.add(obj, errors[i]);
                        countErrors[type]++;
                    }

                    this.get(obj).show();

                    if (countErrors[this.LEVEL_WARNING] > 0) {
                        this.warningBtn.text(_('Warning') + ': ' + countErrors[this.LEVEL_WARNING]);
                        this.warningBtn.show();
                    }

                    if (countErrors[this.LEVEL_ERROR] > 0) {
                        this.errorBtn.text(_('Error') + ': ' + countErrors[this.LEVEL_ERROR]);
                        this.errorBtn.show();
                    }
                },

                add: function (obj, error) {
                    var errorInfo = this.getErrorParams(error.type);

                    var c = this.errorsBlock;
                    if (errorInfo.level === this.LEVEL_WARNING) {
                        c = this.warningsBlock;
                    }

                    if (!error.hasOwnProperty("invalid_group_id") || error.invalid_group_id.length === 0) {
                        error.invalid_group_id = error.parent_group_id;
                    }

                    var item = $('<div></div>');
                    c.append(item);

                    var title = this.getCategoryTitle(obj, errorInfo.category);
                    if (title) {
                        item.append($('<b></b>').text(title));
                    }

                    var errorTextBlock = $('<div></div>');
                    if (this.setCategoryErrorText(obj, errorInfo.category, error, errorTextBlock)) {
                        item.append(errorTextBlock);
                    }

                    return errorInfo.level;
                },

                getErrorParams: function (type) {
                    switch (type) {
                        case this.LIMIT_BY_ALL_USERS:
                        case this.LIMIT_BY_GROUP:
                            return {
                                level: this.LEVEL_ERROR,
                                category: this.CATEGORY_GROUP_ERROR
                            };
                            break;
                        case this.LIMIT_BY_GROUP_CUSTOM_CONTACTS:
                            return {
                                level: this.LEVEL_ERROR,
                                category: this.CATEGORY_GROUP_CONTACTS_ERROR
                            };
                            break;
                        case this.LIMIT_BY_USER:
                            return {
                                level: this.LEVEL_ERROR,
                                category: this.CATEGORY_USER_CONTACTS_ERROR
                            };
                            break;
                        case this.WARN_BY_GROUP:
                            return {
                                level: this.LEVEL_WARNING,
                                category: this.CATEGORY_GROUP_WARNING
                            };
                            break;
                        case this.WARN_BY_USER:
                            return {
                                level: this.LEVEL_WARNING,
                                category: this.CATEGORY_USER_CONTACTS_WARNING
                            };
                            break;
                    }

                    return false;
                },

                getLevelBlock: function (level) {
                    switch (level) {
                        case this.LEVEL_ERROR:
                            return this.errorsBlock;
                            break;
                        case this.LEVEL_WARNING:
                            return this.warningsBlock;
                            break;
                    }
                },

                getCategoryTitle: function (obj, category) {
                    switch (category) {
                        case this.CATEGORY_GROUP_ERROR:
                            return _('Failed to add contacts from the group');
                        case this.CATEGORY_GROUP_CONTACTS_ERROR:
                            return _('Maximum number of custom entries in group Address Book has been exceeded');
                    }

                    return false;
                },

                setCategoryErrorText: function (obj, category, error, block) {
                    switch (category) {
                        case this.CATEGORY_GROUP_ERROR:
                        case this.CATEGORY_GROUP_CONTACTS_ERROR:

                            block.append('<span>' + _('Group name') + ': </span>');

                            var groupDisplayName = obj.abOwners.getGroupDisplayName(obj, error.invalid_group_id);
                            var groupId = obj.abOwners.getGroupValidId(obj, error.invalid_group_id);
                            var groupAnchor = $('<a target="_blank" rel="noopener" href="/admin/group/ab/?key=' + encodeURIComponent(groupId) + '"></a>');
                            groupAnchor.text(groupDisplayName);
                            block.append(groupAnchor);

                            block.append('<span>; ' + _('The number of users in the group') + ': ' + error.invalid_group_size + '; </span>');
                            block.append('<span>' + _('Current address book capacity') + ': ' + error.current_size + '; </span>');
                            block.append('<span>' + _('The number of vacant entries in address book') + ': ' + (error.max_size - error.current_size) + '</span>');
                            break;
                        case this.CATEGORY_USER_CONTACTS_ERROR:
                            block.text(_("Maximum number of custom entries in user's Address Book has been exceeded (%n)").replace("%n", error.max_size));
                            break;
                        case this.CATEGORY_USER_CONTACTS_WARNING:
                            block.text(_('You are approaching the maximum number of custom entries'));
                            break;
                        case this.CATEGORY_GROUP_WARNING:
                            block.text(_('You are approaching the maximum Address Book capacity'));
                            break;

                    }

                    return category;
                },

                showDialog: function (obj, level) {
                    this.warningsBlock.hide();
                    this.errorsBlock.hide();

                    this.getLevelBlock(level).show();

                    switch (level) {
                        case this.LEVEL_ERROR:
                            this.dialog.dialog("option", "title", _('Error'));
                            break;
                        case this.LEVEL_WARNING:
                            this.dialog.dialog("option", "title", _('Warning'));
                            break;
                    }

                    this.dialog.dialog("open");
                },


                warningBtn: null,
                errorBtn: null,

                errorsBlock: null,
                warningsBlock: null,

                _errorListDialog: null,
                _rendered: null
            }
        },

        abOwners: {

            onLoad: function (obj, onLoad) {
                this.callbacks.push(onLoad);

                if (this.ready) {
                    this._loadList(obj);
                }
            },

            _loadList: function (obj) {
                this.ready = false;

                if (this.loadXHR) {
                    this.loadXHR.abort();
                    this.loadXHR = null;
                }
                this.loadXHR = $.getJSON(obj.handlers.addressBookOwners,
                    {
                        'owner': obj.ownerId,
                        'ownerType': obj.ownerType
                    })
                    .done(function (data) {
                        obj.abOwners.list = data;

                        obj.abOwners.runCallbacks(obj, data);
                        obj.abOwners.clearCallbacks();
                    })
                    .always(function () {
                        obj.abOwners.ready = true;
                    });
            },

            runCallbacks: function (obj, data) {
                for (var i = 0; i < this.callbacks.length; i++) {
                    this.callbacks[i].call(obj, data);
                }
            },

            getGroupDisplayName: function (obj, groupId) {
                var groupObject = this.getGroupObject(obj, groupId);
                if (!groupObject) {
                    return groupId;
                }
                if (!groupObject.displayName) {
                    if (groupId === User.NO_GROUP_ID) {
                        return _('Without group');
                    }

                    return groupId;
                }

                return groupObject.displayName;

            },

            getGroupValidId: function (obj, groupId) {
                var groupObject = this.getGroupObject(obj, groupId);
                if (!groupObject) {
                    return groupId;
                }

                if (!groupObject.hasOwnProperty("id")) {
                    return groupId;
                }

                if (groupObject.id.length === 0) {
                    return groupId;
                }

                return groupObject.id;
            },

            getGroupObject: function (obj, groupId) {
                if (!this.list.hasOwnProperty("groups")) {
                    return false;
                }
                if (!this.list.groups.hasOwnProperty(groupId)) {
                    return false;
                }

                return this.list.groups[groupId];
            },

            clearCallbacks: function () {
                this.callbacks = [];
            },

            callbacks: [],

            list: {},
            loadXHR: null,
            ready: false
        },

        deleteMember: function (obj, member) {
            Server.showLoadEffect();
            $.post(obj.handlers.removeUser, {'uid': member.id})
                .done(function (data) {
                    obj.plugins.memberList.removeMember(obj.plugins.memberList, member.id);
                    Server.setServerMessage(_('User have been successfully deleted'), Server.MESSAGE_TYPE.NOTE, 2000);
                    obj.parentObject.trigger(obj.prefix + "onUserRemoved", {status: true});
                })
                .fail(function (error) {
                    Server.setServerMessage(_('Unable to delete the user'), Server.MESSAGE_TYPE.ERROR, 3000);
                    obj.parentObject.trigger(obj.prefix + "onUserRemoved", {status: false});
                })
                .always(function () {
                    Server.removeLoadEffect();
                });
        },

        refreshList: function (obj) {
            obj.plugins.memberList.refreshList(obj.plugins.memberList);
        },

        onNextPartLoaded: function (list) {
            this.containers.errorList.clear(this);
            if (list.hasOwnProperty("errors")) {
                this.abOwners.onLoad(this, function () {
                    this.containers.errorList.setList(this, list.errors);
                });
            }
        },

        onMemberClick: function (obj, plugin, member, container, event) {
            if ((member.type === obj.plugins.user.USER_TYPE.USER
                || member.type === obj.plugins.user.USER_TYPE.USER_IN_CONTACTS) &&
                !$(event.target).is('.' + obj.plugins.user.cssPrefix + 'iconRemove')) {
                document.location.href = obj.handlers.editUser + '?login=' + encodeURIComponent(member.id);
            }
        },

        onCreated: function (obj) {

        },


        plugins: {
            user: null,
            memberList: null,

            getInitMemberListObj: function (obj) {

                return {
                    height: 640,
                    onMemberClick: function (pluginObj, member, container, event) {
                        obj.onMemberClick(obj, pluginObj, member, container, event);
                    },
                    handlers: {
                        userList: obj.handlers.userList
                    },

                    plugins: {
                        'user': obj.plugins.user
                    },
                    beforeMemberAdd: function (pluginObj, member, container) {
                        return obj.containers.member.prepareMember(obj, member, container);
                    },
                    onCreated: function (plugin) {
                        plugin.events.add(plugin, plugin.events.NEXT_PART_LOADED, obj, obj.onNextPartLoaded);
                        plugin.start(plugin);
                    }
                };
            }
        },

        parentObject: null
    };


    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {ConferencesList}
     */
    $.fn.addressBookPlugin = function (params) {
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('addressBookPlugin');
        //Если плагин не найден, или false создаем его
        if (plugin === undefined || plugin === false) {
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина
            $.extend(true, plugin, $.addressBookPlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            this.append(plugin._main(plugin));
            //Сохраняем объект плагина в данные контейнреа
            this.data('addressBookPlugin', plugin);
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };

})(jQuery);

