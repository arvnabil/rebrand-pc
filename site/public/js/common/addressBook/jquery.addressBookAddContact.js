(function ($) {

    var defaultParams = {
        handlers: {
            userList: "/handlers/directory.php"
        },
        prefix: "add2Ab_",
        showDisplayName: true,
        displayNameEditable: true,
        searchDelay: 1000,
        searchLimit: 200,
        mregeApplyXHRObject: true
    };

    function Model(params) {

        var userList = {};

        function sendRequest(request, onSuccess, onFail, always) {
            var req = $.ajax(request);
            req.then(function (data) {
                var filter = $.Deferred();
                if (data.status) {
                    filter.resolve(data);
                } else {
                    var obj = {
                        originalData: data,
                        statusText: "serverError"
                    };
                    filter.reject(obj);
                }

                return filter.promise();
            })
                .done(function (data) {
                    onSuccess ? onSuccess(data) : null;
                })
                .fail(function (data) {
                    onFail ? onFail(data) : null;
                })
                .always(always);
            return req;
        };

        this.addContact = function (login, displayName, onSuccess, onFail, always) {
            var xhr = getApplyXHR({
                type: "POST",
                dataType: "json",
                data: {
                    contactLoginName: login,
                    contactDisplayName: displayName
                }
            }, login, displayName);

            return sendRequest(xhr,
                function (data) {
                    onSuccess(data);
                }, function (data) {
                    onFail(data);
                }, always);
        };

        this.getUserList = function (login, onSuccess, onFail, always) {

            return sendRequest({
                type: "GET",
                url: params.handlers.userList,
                dataType: "json",
                data: {
                    page: 0,
                    limit: params.searchLimit,
                    searchStr: login
                }
            }, function (data) {
                userList = data.list;
                onSuccess(data.list, data.count, data.nextPageId ? true : false);
            }, function (data) {
                onFail(data);
            }, always);
        };

        this.getCurrentUserList = function () {
            return userList;
        };

        this.clearUserList = function () {
            return userList;
        };


        function getApplyXHR(currentXHR, contactLogin, contactDisplayName) {
            if (params.hasOwnProperty("getApplyXHRObject")
                && typeof params.getApplyXHRObject === "function") {
                if (params.mregeApplyXHRObject) {
                    var genXHR = params.getApplyXHRObject(contactLogin, contactDisplayName, currentXHR);
                    return $.extend(true, currentXHR, genXHR);
                } else {
                    return params.getApplyXHRObject(contactLogin, contactDisplayName);
                }
            } else {
                return currentXHR;
            }
        }
    }


    function View(parent, params) {
        var instance = this;
        var container;

        var callbacks = {};

        var displayNameField, loginNameField, applyButton;
        var displayName = "", loginName = "";

        var dropDownBlock, loginNameBlock, displayNameBlock, applyButtonBlock, progressBarBlock;
        var userListLoadProgressBar, userList;

        var userListEmpty = true;

        (function construct() {
            render();
        })();

        function render() {
            parent.empty();

            container = createContainer();
            parent.append(container);

            var tooltip = $('<div></div>');
            tooltip.text(Localizator._("Add user") + ':');
            container.append(tooltip);

            loginNameField = createLoginField();
            userListLoadProgressBar = createProgressBar();
            userList = createUserList();
            dropDownBlock = createDropDownBlock(userListLoadProgressBar, userList);

            loginNameBlock = createLoginNameBlock(loginNameField, dropDownBlock);
            container.append(loginNameBlock);
            container.append($('<div class="login_error"></div>'));

            if (params.showDisplayName) {
                displayNameField = createDisplayNameField();
                displayNameBlock = createDisplayNameBlock(displayNameField);
                container.append(displayNameBlock);
            }

            applyButton = createApplyButton();
            applyButtonBlock = createApplyButtonBlock(applyButton);
            container.append(applyButtonBlock);

            progressBarBlock = createProgressBarBlock();
            container.append(progressBarBlock);
        };

        function createProgressBarBlock() {
            return $('<div style="display: none;" class="' + params.prefix + 'progressBarBlock">&nbsp;</div>');
        }

        function createDisplayNameBlock(displayNameField) {
            var c = $('<div class="' + params.prefix + 'displayNameBlock"></div>');
            c.append(displayNameField);
            return c;
        }

        function createDisplayNameField() {
            var c = $('<input autocomplete="off" type="text" name="displayName">');
            if (!params.displayNameEditable) {
                c.prop("disabled", true);
                return c;
            }

            c.val(Localizator._("Display name")).addClass(params.prefix + "placeholder");

            function p(event) {
                var _displayName = $.trim(c.val());
                if (_displayName === displayName) {
                    return true;
                }

                setDisplayName_ex(_displayName, true);
            }

            c.on("input", p);
            //IE8
            c.on("propertychange", p);

            c.focusin(function () {
                if (c.hasClass(params.prefix + "placeholder")) {
                    c.val("").removeClass(params.prefix + "placeholder");
                }
            });

            c.focusout(function () {
                var displayName = $.trim(c.val());
                if (displayName.length === 0) {
                    c.val(Localizator._("Display name")).addClass(params.prefix + "placeholder");
                }
            });

            return c;
        }

        function createLoginField() {
            var c = $('<input autocomplete="off" type="text" name="loginName">');
            c.val(Localizator._("Enter user ID")).addClass(params.prefix + "placeholder");

            function p(event) {
                var loginName = $.trim(c.val());
                if (!isLoginNameChanged(loginName)) {
                    return true;
                }

                setLoginName_ex(loginName, true, false);
            }

            //IE8
            c.on("propertychange", p);
            c.on("input", p);

            c.focusin(function () {
                if (c.hasClass(params.prefix + "placeholder")) {
                    c.val("").removeClass(params.prefix + "placeholder");
                }

                getCallback(View.CALLBACK.ON_LOGIN_FOCUS).call(instance, true);
            });

            c.focusout(function () {
                var loginName = $.trim(c.val());
                if (loginName.length === 0) {
                    c.val(Localizator._("Enter user ID")).addClass(params.prefix + "placeholder");
                }

                getCallback(View.CALLBACK.ON_LOGIN_FOCUS).call(instance, false);
            });

            return c;
        }

        function createLoginNameBlock(loginNameField, dropDownBlock) {
            var loginNameBlock = $('<div class="' + params.prefix + 'loginNameBlock"></div>');

            loginNameBlock.append(loginNameField);
            loginNameBlock.append(dropDownBlock);

            return loginNameBlock;
        }

        function createDropDownBlock(progressBar, userList) {
            var c = $('<div class="' + params.prefix + 'dropDown"></div>');

            c.append(progressBar);
            c.append(userList);

            return c;
        }

        function createUserList() {
            return $('<div class="' + params.prefix + 'userList"></div>');
        }

        function createProgressBar() {
            return $('<div class="' + params.prefix + 'spinner"></div>');
        }

        function createApplyButtonBlock(applyButton) {
            return $('<div class="' + params.prefix + 'applyButtonBlock"></div>').append(applyButton);
        }

        function createApplyButton() {
            var c = $('<input  class="button button-lock" type="submit" value="' + Localizator._("Add") + '">');
            return c;
        }

        function createContainer() {
            var c = $('<form id="' + params.prefix + 'plugin" action="#" method="post"></form>');
            c.on("submit", function (event) {
                if (!applyButton.hasClass("button-lock")) {
                    getCallback(View.CALLBACK.ON_APPLY).call(instance);
                }
                event.stopPropagation();
                return false;
            });

            return c;
        }

        function isLoginNameChanged(_loginName) {
            return _loginName === undefined ?
                (loginNameField.val() !== loginName)
                : (_loginName !== loginName);
        }

        this.clearLoginName = function () {
            loginName = "";
            loginNameField.val('');
            loginNameField.val(Localizator._("Enter user ID")).addClass(params.prefix + "placeholder");

            checkContact();
        };

        this.clearDisplayName = function () {
            displayName = "";
            displayNameField.val('');
            displayNameField.val(Localizator._("Display name")).addClass(params.prefix + "placeholder");
            checkContact();
        };

        this.setLoginName = function (login) {
            setLoginName_ex(login, false);
        };

        this.setDisplayName = function (displayName) {
            setDisplayName_ex(displayName, false);
        };

        this.disableApplyBtn = function () {
            applyButton.addClass("button-lock");
        };

        this.enableApplyBtn = function () {
            applyButton.removeClass("button-lock");
        };

        setDisplayName_ex = function (_displayName, isEvent) {
            displayName = $.trim(_displayName);
            if (params.showDisplayName && !isEvent) {
                displayNameField.val(displayName);
                if (displayName.length !== 0) {
                    displayNameField.removeClass(params.prefix + "placeholder");
                }
            }

            checkContact();
        };

        function checkContact() {
            if (loginName.length === 0 || displayName.length === 0) {
                instance.disableApplyBtn();
            } else {
                instance.enableApplyBtn();
            }
        }

        function setLoginName_ex(login, isEvent) {
            loginName = $.trim(login);

            if (!isEvent) {
                loginNameField.val(login);
            }

            checkContact();

            if (isEvent) {
                getCallback(View.CALLBACK.ON_LOGIN_CHANGE).call(instance, login);
            }
        }

        function getCallback(name) {
            return callbacks.hasOwnProperty(name) ? callbacks[name] : function () {
            };
        }

        function checkLoginBlockFocus(event) {
            var hasFocus = false;
            if (loginNameBlock.find(event.target).length > 0) {
                hasFocus = true;
            }

            getCallback(View.CALLBACK.ON_LOGIN_BLOCK_FOCUS).call(instance, hasFocus);
        }


        function showDropDownBlock() {
            $(document).on("click", checkLoginBlockFocus);
            dropDownBlock.addClass(params.prefix + 'visible');
        }

        this.setCallbacks = function (callbacksObj) {
            callbacks = callbacksObj;
        };

        this.showUserList = function (userListObject) {
            dropDownBlock.addClass(params.prefix + "showList").removeClass(params.prefix + "wait");
            showDropDownBlock();

            if (userListObject === undefined) {
                return;
            }

            this.setUserList(userListObject);
        };

        this.isUserListEmpty = function () {
            return userListEmpty;
        };

        this.disableForm = function () {
            this.disableApplyBtn();
            this.disableDisplayName();
            this.disableLoginName();
        };

        this.enableForm = function () {
            this.enableApplyBtn();
            this.enableDisplayName();
            this.enableLoginName();
        };

        this.enableDisplayName = function () {
            displayNameField.prop("disabled", false);
        };

        this.disableDisplayName = function () {
            displayNameField.prop("disabled", true);
        };

        this.enableLoginName = function () {
            loginNameField.prop("disabled", false);
        };

        this.disableLoginName = function () {
            loginNameField.prop("disabled", true);
        };

        this.clearUserList = function () {
            userList.empty();
            userListEmpty = true;
        };

        this.getLogin = function () {
            return loginName;
        };

        this.getDisplayName = function () {
            return displayName;
        };

        this.setUserList = function (userListObject) {
            this.clearUserList();

            userListEmpty = false;
            for (var login in userListObject) {
                var userContainer = params.userPlugin.createUser(userListObject[login],
                    {
                        prefix: params.prefix,
                        lineBreak: true
                    });
                userContainer.click(function () {
                    var login = $('#' + this.id + '_id').text();
                    var displayName = $('#' + this.id + '_displayName').text();

                    getCallback(View.CALLBACK.ON_USER_SELECTED)(this.id, login, displayName);
                });
                userList.append(userContainer);
            }
        };

        this.hideUserList = this.hideDropDown = this.hideProgressBar = function () {
            $(document).off("click", checkLoginBlockFocus);
            dropDownBlock.removeClass(params.prefix + 'visible')
                .removeClass(params.prefix + "showList")
                .removeClass(params.prefix + "wait");
        };

        this.showProgressBar = function () {
            dropDownBlock.removeClass(params.prefix + "showList").addClass(params.prefix + "wait");
            showDropDownBlock();
        };


    };

    View.CALLBACK = {};
    View.CALLBACK.ON_APPLY = "onApply";
    View.CALLBACK.ON_LOGIN_CHANGE = "onLoginChange";
    View.CALLBACK.ON_LOGIN_FOCUS = "onLoginFocus";
    View.CALLBACK.ON_LOGIN_BLOCK_FOCUS = "onLoginBlockFocus";
    View.CALLBACK.ON_USER_SELECTED = "onUserSelected";


    /**
     *
     * @param {Model} model
     * @param {View} view
     * @param {object} params
     * @returns {Controller}
     */
    function Controller(model, view, params) {
        var instance = this;
        var userEvents = {};

        var searchProcessID = null;
        var searchXHR = null;

        (function construct() {
            view.setCallbacks(getViewCallbacks());
            params.userPlugin.addUpdateListener(function () {
                updateUsersStatuses.call(instance);
            });
            params.userPlugin.addErrorListener(function () {
                setDefaultUsersStatuses.call(instance);
            });
        })();

        function updateUsersStatuses() {
            params.userPlugin.updateListStatuses(model.getCurrentUserList());
        };

        function setDefaultUsersStatuses() {
            params.userPlugin.setDefaultListStatuses(model.getCurrentUserList());
        };

        function getViewCallbacks() {
            var callbacks = [];


            callbacks[View.CALLBACK.ON_LOGIN_CHANGE] = function (login) {
                onLoginChange(login);
            };

            callbacks[View.CALLBACK.ON_LOGIN_FOCUS] = function (state) {
                if (!state) {
                    return;
                }

                if (!view.isUserListEmpty()) {
                    view.showUserList();
                }
            };

            callbacks[View.CALLBACK.ON_LOGIN_BLOCK_FOCUS] = function (state) {
                if (!state) {
                    view.hideDropDown();
                    stopSearchProcess();
                }
            };

            callbacks[View.CALLBACK.ON_USER_SELECTED] = function (htmlId, login, displayName) {
                view.setLoginName(login);
                view.setDisplayName(displayName);
                view.hideDropDown();
            };

            callbacks[View.CALLBACK.ON_APPLY] = function () {
                saveContact();
            };

            return callbacks;
        };

        this.setUserEvents = function (events) {
            userEvents = $.extend(true, userEvents, events);
        };

        /**
         * Спецификация:
         *  https://projects.trueconf.com/bin/view/Projects/CallIDTypes
         *
         * Метод валидирует формат логина в соответствии со спецификацией.
         * @param login
         * @returns {boolean}
         */
        function loginValidate(login) {
            /** Ограничение допустимых символов CallId */
            var regexp_allowed_symbols = '[^<]';
            var regexp_allowed_url_symbols = '[^!^*()+|\\\\]';

            /** Описание структуры составляющих CallId */
            var regexp_servername = '(@' + regexp_allowed_symbols + '+)';
            var regexp_servername_postfix = '(#' + regexp_allowed_symbols + '+)?';
            var regexp_server_port = '(:[0-9]{1,5})?';
            var regexp_servername_full = "(" + regexp_servername + regexp_server_port + regexp_servername_postfix + ")";

            var regexp_login_id = regexp_allowed_symbols + '+';
            var regexp_login_id_full = '(' + regexp_login_id + regexp_servername_full + '?' + ')';
            var regexp_prefix_id = '#((guest2?)|(sip)|(h323)|(tel)|(mailto)|(fb)|(gl)|(vk)):';

            /** Допустимые символы добора (доб. номер, query параметры, паузы в телефонных звонках и прочее) */
            var regexp_addition = '[;|,|\\\\|\\/|\\?|]{1}[A-Za-zА-Яа-я0-9,;=\\*#\\/?_&!]+'

            var regexp_dialedDigits = '(\\\\e\\\\[0-9#*,]+)';
            var regexp_conf_id = '\\c\\\\' + regexp_login_id_full;
            var regexp_phone = '\\+\\\d+';

            /** Описание допустимых типов CallId */
            var full_id = '^' + regexp_login_id_full + '$';
            var device_id = '^' + regexp_prefix_id
                + '(' + regexp_dialedDigits + '|' + regexp_servername_full + '|' + regexp_login_id_full + ')'
                + '(' + regexp_addition + ')?' + '$';
            var conf_id = '^' + regexp_conf_id + '$';
            var phone = '^' + regexp_phone + regexp_addition + '$';
            var rtsp_call_id = "^#rtsp:" + regexp_allowed_url_symbols + '+$';
            var xmpp_call_id = "^#xmpp:" + regexp_allowed_url_symbols + '+$';

            /** Список допустимых типов CallId */
            var regexp_list = [
                full_id,
                device_id,
                conf_id,
                phone,
                rtsp_call_id,
                xmpp_call_id
            ];

            for (var counter = 0; counter < regexp_list.length; counter++) {
                var matches = login.match(regexp_list[counter]);
                if (matches !== null && matches[0] === login) {
                    return true;
                }
            }

            return false;
        }

        function saveContact() {
            if (!loginValidate(view.getLogin())) {
                var login_error = $('.add2Ab_loginNameBlock+.login_error');
                login_error.css('visibility', 'visible');
                var error_message = t._id_format_not_recognized;
                login_error.text(error_message);
                login_error.prop('title', error_message);
                return;
            }

            $('.add2Ab_loginNameBlock+.login_error').css('visibility', 'hidden');
            view.disableForm();
            model.addContact(view.getLogin(), view.getDisplayName(),
                function (data) {
                    view.clearDisplayName();
                    view.clearLoginName();
                    document.location.reload();
                }, function () {
                    Server.setServerMessage(_('Error'), Server.MESSAGE_TYPE.ERROR, 3000);
                }, function () {
                    view.clearUserList();
                    model.clearUserList();
                    view.enableForm();
                });
        }

        function onLoginChange(login) {
            view.clearUserList();
            model.clearUserList();

            if (login.length === 0) {
                view.hideDropDown();
                stopSearchProcess();
            } else {
                startSearchProcess(login);
            }
        }

        function stopSearchProcess() {
            var hasProcessId = false;
            if (searchProcessID !== null) {
                clearTimeout(searchProcessID);
                searchProcessID = null;
                hasProcessId = true;
            }

            if (searchXHR !== null) {
                searchXHR.abort();
                searchXHR = null;
            }

            return hasProcessId;
        }

        function startSearchProcess(login) {
            var hasProcessId = stopSearchProcess();
            if (!hasProcessId) {
                view.showProgressBar();
            }

            searchProcessID = setTimeout(function () {
                searchProcessID = null;

                searchXHR = model.getUserList(login, onSuccessSearch, onFailSearch, onSearchFineshed);
            }, params.searchDelay);
        };

        function onSuccessSearch(list, count, hasNextPage) {
            view.showUserList(list);
        };

        function onFailSearch(data) {
            view.hideDropDown();
            view.clearUserList();
            model.clearUserList();
        };

        function onSearchFineshed() {
            searchXHR = null;
        };


    }

    Controller.createInstance = function (container, params, onCreate) {
        if (params === undefined) {
            params = {};
        }

        var view = new View(container, params);
        var model = new Model(params);

        var controller = new Controller(model, view, params);
        if (params.hasOwnProperty("events")) {
            controller.setUserEvents(params.events);
        }

        if (typeof onCreate === "function") {
            onCreate(controller);
        }
    };


    $.addContactPlugin = {};
    $.addContactPlugin.regional = {};

    $.addContactPlugin.bind = function (params, container) {
        return container.addContactPlugin(params);
    };

    $.fn.addContactPlugin = function (params) {
        var plugin = this.data('addContactPlugin');
        if (plugin === undefined) {
            params = $.extend(true, $.extend(true, {}, defaultParams), params);
            plugin = createPlugin(this, params);
            this.data('addContactPlugin', plugin);
        }

        return this;
    };

    function createPlugin(container, params) {
        var onSuccess;
        if (params.hasOwnProperty("events")) {
            onSuccess = params.events.hasOwnProperty("onSuccessInit") ?
                params.events.onSuccessInit : function () {
                };
        }

        Controller.createInstance(container, params, function (controller) {
            if (onSuccess !== undefined) {
                onSuccess.call(container, controller, params);
            }
        });

        return true;
    }


})(jQuery);