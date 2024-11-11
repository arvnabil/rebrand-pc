
    /* global tcm, Function */

/**
     * Конструктор класса
     * @class User
     * @param {Object} params
     * @param {Boolean} autostart стартовать процесс обновления статусов сразу при создании класса
     * @constructor
     */
    var User = function(params, autostart){
        var obj = $.extend(true, {}, getOriginalUserObject_v1());
        $.extend(true, User.prototype, obj);
        
        if(params !== null && typeof params === 'object'){
            $.extend(true, User.prototype, params);
        }
        this.prefix = generateUniqueId(this.prefix) + "_";
        
        if(autostart === true){
            this.start();
        }
    };
    
    //ID no-group
    User.prototype.NO_GROUP_ID = "@no_group";
    /**
     * Тип пользователя
     */
    User.prototype.USER_TYPE = {
        UNKNOWN : -1,
        USER : 1,
        USER_IN_CONTACTS : 2,
        SIP : 3,
        H323 : 4,
        TEL : 5,
        RTSP : 6,
        GUEST : 7
    };
    
    User.prototype.OWNER_TYPE = {
        GROUP : 1,
        USER : 2
    };
    /**
     * Префиксы для специальных айди пользователей
     */
    User.prototype.USER_ID_PREFIX = {
        SIP : '#sip',
        H323 : '#h323',
        RTSP : '#rtsp',
        TEL : '#tel'
    };
    
    /**
     * Метод для сокрытия основого объекта
     * @returns {getOriginalUserObject_v1.std_obj}
     */
    function getOriginalUserObject_v1(){
        
        var std_obj = {
            /**
             * Время обновления статусов пользователей
             */
            userStatusTimeout : tcm.usersStatusUpdate ,
            /**
             * Таймаут обновления адреса сервера запросов
             */
            refindStatusServerUrl : 1200000,
            /**
             * Таймаут обновления адреса сервера запросов, если ни один из серверов не овтечает
             */
            refindStatusSeverUrlError : 20000,
            /**
             * Адрес хэндлера, возвращающего список серверов статусов
             */
            statusServersHandler : tcm.status_update_url,
            /**
             * Адрес хэндлера, генерирующего секретный ключ
             */
            generateSecretKeyHandler : tcm.generate_secret_key_url,
            /**
             * Работает ли получение статусов пользователя
             */
            statusSeviceStarted : false,

            /**
             * Список статусов сервера, в том виде, в котором приходит ответ с сервера
             */
            STATUS : {
                NOT_ACTIVE : -2,
                INVALID : -1,
                OFFLINE : 0,
                ONLINE : 1,
                BUSY : 2,
                MULTIHOST : 5
            },
            
            /**
             * Имена статусов для классов
             */
            STATUS_NAMES : {
                '-2' : "notActive",
                '-1' : "invalid",
                '0' : "offline",
                '1' : "online",
                '2' : "busy",
                '5' : "multihost"
            },
            
            STATUS_I18N_NAMES : {
                online : _("Online"),
                offline : _("Offline"),
                notActive : _("Inactive"),
                invalid : _("Invalid user"),
                busy : _("Busy"),
                multihost :_("Group conference owner")
            },
            
            /**
             * Префикс для id
             */
            prefix : "mgr",
            /**
             * Префикс для css
             */
            cssPrefix : "mgr_",
            /**
             * Флаг режима дебага
             */
            debug : false,
            /**
             * Статус по умолчанию
             */
            DEFAULT_STATUS : 0,
            /**
             * Объект, содержащий результат последнего успешного запроса статусов
             */
            lastStatusResult : {},

            /**
             * Массив с кллбэками, запускающимися после отправки запроса к серверу
             */
            listeners : [],
            /**
             * Массив с коллбэками в случае ошибок получения статусов
             */
            errorListeners : [],
            /**
             * Добавить слушателя для процесса обновления статусов
             * @param {Function} listener
             * @param {Object} eventData
             * @returns {undefined}
             */
            addUpdateListener : function(listener, eventData){
                var obj = {
                    'listener' : listener,
                    'eventData' : eventData
                };
                this.listeners.push(obj);
                
                this.groupLog({
                    name : "addUpdateListener",
                    fields : ["listener", "event data", "listeners list"]
                }, listener, eventData, this.listeners);
            },
            /**
             * Добавить слушателя для ошибок статусов
             * @param {Fucntion} listener
             * @param {Object} eventData
             * @returns {undefined}
             */
            addErrorListener : function(listener, eventData){
                var obj = {
                    'listener' : listener,
                    'eventData' : eventData
                };
                this.errorListeners.push(obj);
                
                this.groupLog({
                    name : "addErrorListener",
                    fields : ["listener", "event data", "listeners list"]
                }, listener, eventData, this.errorListeners);
            },
            /**
             * Выполняет все errorListeners
             * @param {std_obj} obj
             * @returns {undefined}
             */
            callError : function(obj){
                for(var i = 0; i<obj.errorListeners.length; i++){
                    var listenerObj = obj.errorListeners[i];
                    listenerObj.listener(obj, listenerObj.eventData);
                }
                this.groupLog({
                    name : "callError()",
                    fields : ["listeners"]
                }, obj.listeners);
            },
            /**
             * Выполняет все коллбэки обновления статуса
             * @param {std_obj} obj
             * @returns {undefined}
             */
            callUpdate : function(obj){
                for(var i = 0; i<obj.listeners.length; i++){
                    var listenerObj = obj.listeners[i];
                    listenerObj.listener(obj, obj.lastStatusResult, listenerObj.eventData);
                }
                this.groupLog({
                    name : "callUpdate()",
                    fields : ["listeners"]
                }, obj.listeners);
            },
            /**
             * Запускает процесс обновления статусов
             * @returns {undefined}
             */
            start : function(){
                this.log("start user status updating");
                this.statusSeviceStarted = true;
                this.updateUserStatus(this);
            },
            
            /**
             * Останавливает процесс обновления статусов
             * @returns {undefined}
             */
            stop : function(){
                this.log("Stop user status updating");
                clearTimeout(this.updateUserStatusTimeout);
                this.updateUserStatusTimeout = null;
                this.statusUrl = null;
                if(this.statusRequestXHR !== null){
                    this.statusRequestXHR.abort();
                }
                this.statusSeviceStarted = false;
            },
            
            /**
             * Метод обновления статусов
             * @param {std_obj} obj
             * @returns {undefined}
             */
            updateUserStatus : function(obj){
                if(!this.statusSeviceStarted){
                    return;
                }
                //Удаляем таймаут прошлого запроса статусов
                clearTimeout(obj.updateUserStatusTimeout);
                obj.updateUserStatusTimeout = null;
                //Если нет адреса сервера статусов, запускаем поиск сервера
                if(obj.statusUrl === null){
                    //Ищем сервер статусов
                    obj.findRuningStatusServer(obj, 
                        /**
                         * Если сервер найден
                         * @param {std_obj} obj
                         * @param {String} url
                         * @param {Object} data
                         * @returns {undefined}
                         */
                        function(obj, url, data){
                            //Сохраняем полученные данные 
                            obj.lastStatusResult = obj._removeServerNameFromStatuses(obj, data);
                            //Вызваем всех слушателей статусов
                            obj.callUpdate(obj);
                            //Устанавливаем таймер для след. обновления статусов
                            obj.updateUserStatusTimeout = setTimeout(function(){obj.updateUserStatus(obj);},  obj.userStatusTimeout);
                        }, 
                        //Если сервер не найден, запускаем перезапрос статусов через время obj.refindStatusSeverUrlError
                        function(){
                            obj.updateUserStatusTimeout = setTimeout(function(){obj.updateUserStatus(obj);},  obj.refindStatusSeverUrlError);
                            //Вызываем слушателей ошибки получения статусов
                            obj.callError(obj);
                        }
                    );
                }
                //Если адрес для запросов статусов пользователей есть
                else {
                    //Выполняем запрос по адресу сервера
                    obj.makeStatusRequest(obj, obj.statusUrl,
                        /**
                         * Если запрос успешно выполнен
                         * @param {std_obj} obj
                         * @param {Object} data
                         * @returns {undefined}
                         */
                        function(obj, data){
                            //Сохраняем полученные данные 
                            obj.lastStatusResult = obj._removeServerNameFromStatuses(obj, data);
                            //Вызваем всех слушателей статусов
                            obj.callUpdate(obj);
                            //Запускаем таймер след. запроса статусов
                            obj.updateUserStatusTimeout = setTimeout(function(){obj.updateUserStatus(obj);},  obj.userStatusTimeout);
                        },
                        /**
                         * Если произошла ошибка, например сервер не отвечает
                         * @param {std_obj} obj
                         * @returns {undefined}
                         */
                        function(obj){
                            //Вызываем слушателей ошибки получения статусов
                            obj.callError(obj);
                            //Обнуляем все параметры, и перезапускаем проверку статусов
                            obj.statusUrl = null;
                            clearTimeout(obj.updateStatusUrlTimeout);
                            obj.updateUserStatusTimeout = setTimeout(function(){obj.updateUserStatus(obj);},  1000);
                        }
                    ); 
                }
            },
            /**
             * Поиск запущенных серверов
             * @param {std_obj} obj
             * @param {Function} successFind если удалось найти сервер
             * @param {Function} errorFind если ни один из серверов не работает
             * @returns {undefined}
             */
            findRuningStatusServer : function(obj, successFind, errorFind){
                //Обнуляем урл сервера статусов
                obj.statusUrl = null;
                //Очищаем таймаут поиска работающих серверов
                clearTimeout(obj.updateStatusUrlTimeout);

                /**
                 * Проверяем работоспособность серверов
                 * @param {std_obj} obj
                 * @param {String[]} urls массив адресов серверов
                 * @param {Number} i индекс адреса в массиве
                 * @returns {undefined}
                 */
                var requestFn = function(obj, urls, i){
                    //Текущий адрес сервера для проверки
                    var url = urls[i];
                    //Кол-во всех серверов
                    var count = urls.length;

                    //Выполняем запрос к серверу
                    obj.makeStatusRequest(obj, url, 
                        /**
                         * Если запрос статуса прошел успешно, значит сервер работает
                         * @param {std_obj} obj
                         * @param {Object} data
                         * @returns {undefined}
                         */
                        function(obj, data){
                            obj.statusUrl = url;
                            if(successFind !== undefined && successFind !== null){
                                successFind(obj, url, data);
                            }
                            //Устанавливаем перезапрос адреса сервера по таймауту
                            obj.updateStatusUrlTimeout = setTimeout(function(){obj.findRuningStatusServer(obj);}, obj.refindStatusServerUrl);
                        },
                        /**
                         * Если запрос к серверу прошел с ошибкой, переходим к след. адресу сервера
                         * @param {std_obj} obj
                         * @returns {undefined}
                         */
                        function(obj){
                            i++;
                            //Если больше адресов нет, вызываем коллбэк что серверов не найденно
                            if(i === count){
                                if(errorFind !== undefined && errorFind !== null){
                                    errorFind(obj);
                                }
                            } else {
                                //Переходим к след. адресу 
                                obj.updateStatusUrlTimeout = setTimeout(function(){ 
                                    requestFn(obj, urls, i);
                                }, 100);
                            }
                        }
                    );
                };

                //Получаем массив со списком всех доступных серверов
                obj.getStatusURL(obj, 
                    /**
                     * Если запрос прошел успешно
                     * @param {std_obj} obj
                     * @param {String[]} urls
                     * @returns {undefined}
                     */
                    function(obj, urls){
                        //Запускаем функцию проверки серверов
                        requestFn(obj, urls, 0);
                    },
                    /**
                     * Если запрос не прошел, по таймауту перезапускаем обновления статусов, вдруг таки получится выполнить запрос...
                     * @param {std_obj} obj
                     * @returns {undefined}
                     */
                    function(obj){
                        
                        clearTimeout(obj.updateUserStatusTimeout);
                        clearTimeout(obj.updateStatusUrlTimeout);
                        obj.updateUserStatusTimeout = setTimeout(function(){obj.updateUserStatus(obj);}, obj.userStatusTimeout);
                        //Вызываем слушателей ошибки получения статусов
                        obj.callError(obj);
                    }
                );
            },
            /**
             * Возвращает список доступных адресов сервера
             * @param {std_obj} obj
             * @param {Function} successCallback
             * @param {Function} failCallback
             * @returns {undefined}
             */
            getStatusURL: function(obj, successCallback, failCallback) {
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    cache: false,
                    data: {r: Math.random()},
                    url: obj.statusServersHandler
                })
                .done(function(data, textStatus, jqXHR) {
                    std_obj.groupLog({
                            name : "Success getStatusURL request!",
                            fields : ["answer", "jqXHR", "successCallback", "failCallback"]
                        },
                        data, jqXHR, successCallback, failCallback
                    );
                
                    if (data.urls && successCallback !== undefined && successCallback !== null)
                        successCallback(obj, data.urls);
                })
                .fail(function(jqXHR, textStatus, errorThrow){
                    std_obj.groupLog({
                            name : "Fail getStatusURL request!",
                            fields : ["jqXHR", "textStatus", "errorThrow",, "successCallback", "failCallback"],
                            type : "error"
                        },
                        jqXHR, textStatus, errorThrow, successCallback, failCallback
                    );
                
                    if (failCallback !== undefined && failCallback !== null)
                        failCallback(obj);  
                });
            },
            /**
             * Выполняет запрос на получение статусов
             * @param {std_obj} obj
             * @param {String} url
             * @param {Function} success
             * @param {Function} error
             * @returns {undefined}
             */
            makeStatusRequest: function(obj, url, success, error){
                this.log("send status reuest...");
                obj.statusRequestXHR = $.jsonp({
                    url: url,
                    callbackParameter: 'callback',
                    callback: 'vp_status',
                    dataType: 'jsonp',
                    timeout: 1000,
                    success: function (json, testStatus, jqXHR) {
                        std_obj.groupLog({
                                name : "Success status request!",
                                fields : ["answer", "jqXHR", "successCallback", "failCallback"]
                            },
                            json, jqXHR, success, error
                        );
                        success(obj, json);
                    },
                    error: function (jqXHR, textStatus, errorThrow) {
                        std_obj.groupLog({
                                name : "Fail status request!",
                                fields : ["jqXHR", "textStatus", "errorThrow",, "successCallback", "failCallback"],
                                type : "error"
                            },
                            jqXHR, textStatus, errorThrow, success, error
                        );
                        error(obj);
                    }
                    
                }).always(function(){
                    obj.statusRequestXHR = null;
                });
            },
            /**
             * Удаляет из ответа сервера со статусами пользователей название данного сервера. 
             * Т.к. имя пользователя уже может содержать символ <b>@</b>, удаляем все, 
             * что после последнего найденного символа <b>@</b>. 
             * Т.е. например ответ сервера<br/>
             * <div>
             *      <code color="red">{</code><br/>
             *      <code color="green">&nbsp;&nbsp;&nbsp;&nbsp;1234@ru8tq.trueconf.name : 1</code><br/>
             *      <code color="red">}</code><br/>
             * </div>
             * преобразуется в <br/>
             * <div>
             *      <code color="red">{</code><br/>
             *      <code color="green">&nbsp;&nbsp;&nbsp;&nbsp;1234 : 1</code><br/>
             *      <code color="red">}</code><br/>
             * </div>
             * , а ответ<br/>
             * <div>
             *      <code color="red">{</code><br/>
             *      <code color="green">&nbsp;&nbsp;&nbsp;&nbsp;vasya121@mail.ru@ru8tq.trueconf.name : -2</code><br/>
             *      <code color="red">}</code><br/>
             * </div>
             * преобразуется в<br/>
             * <div>
             *      <code color="red">{</code><br/>
             *      <code color="green">&nbsp;&nbsp;&nbsp;&nbsp;vasya121@mail.ru : -2</code><br/>
             *      <code color="red">}</code><br/>
             * </div>
             * @param {std_obj} obj
             * @param {Object} data
             * @returns {Object} преобразованный объект статусов пользователей
             */
            _removeServerNameFromStatuses : function(obj, data){
                $.each(data, 
                    /**
                     * 
                     * @param {String} index
                     * @param {Number} value
                     * @returns {undefined}
                     */
                    function(index, value){
                        var pos = index.lastIndexOf("@");
                        
                        if(pos < 1) return true;
                        
                        var key = index.substring(0, pos);
                        data[key] = value;
                        delete data[index];
                    }
                );
                return data;
            },
            
            /**
             * Адрес текущего сервера статусов
             */
            statusUrl : null,
            /**
             * Таймаут ф-и обновления адреса сервера статусов
             */
            updateStatusUrlTimeout : null,
            /**
             * Таймаут обновления стаутсов
             */
            updateUserStatusTimeout : null,
            
            /**
             * jqXHR запроса на статусы
             */
            statusRequestXHR : null,
            
            
            
            
            
            /*
             ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
             *                                       ГЕНЕРАЦИЯ ПОЛЬЗОВАТЕЛЯ
             __________________________________________________________________________________________________________
             */
            
            /**
             * Создает контейнер с пользователем
             * @param {Object} member
             * @param {Object} params
             * @returns {jQuery}
             */
            createUser : function(member, params){
                if(!member.hasOwnProperty('type')){
                    member.type = this.USER_TYPE.USER;
                }
                //Если у пользователя нет параметра login, берем его ID
                if(!member.hasOwnProperty('login')){
                    member.login = member.id;
                } 
                //Если у пользователя нет параметра displayName
                if(!member.hasOwnProperty('displayName')){
                    member.displayName = member.login;
                }
                
                var user = this.memberContainer.get(this, member, params);
                this.groupLog({
                    name : "createUser (id : '" + member.id + "'; dn : '" + member.displayName + "')", 
                    fields : ["member", "createParams", "container"]
                    }, 
                    member, params, user);
                return user;
            },
            /**
             * Обновляет статус пользователя, используя последний удачный запрос статусов
             * @param {type} member
             * @returns {undefined}
             */
            updateMemberStatus : function(member){
                var id = member.id.toLowerCase();
                if(this.lastStatusResult.hasOwnProperty(id)){
                    member.status = this.lastStatusResult[id];
                    this.memberContainer.updateStatus(this, member);
                }
            },
            /**
             * Обновлет статус списка пользователей, используя последний удачный запрос статусов
             * @param {type} memberList
             * @returns {undefined}
             */
            updateListStatuses : function(memberList){
                this.groupLog({
                        name: "Recivied request to update list statuses"
                    }, memberList);
                var obj = this;
                //В цикле обходим список пользователей
                $.each(memberList, function(index, member){
                    //Ид пользователя
                    var id = index.toLowerCase();
                    //В том случае, если последний запрос к серверу, имеет статус пользователя, обновляем его
                    if(obj.lastStatusResult.hasOwnProperty(id)){
                        //Меняем статус, только в том случае, если он отличается от старого, иначе нет смысла 
                        //выполнять смену
                        if(member.status !== obj.lastStatusResult[id]){
                            member.status = obj.lastStatusResult[id];
                            obj.memberContainer.updateStatus(obj, member);
                        }
                    }
                    //В том случае, когда статуса пользователя нет в последнем ответе от сервера, и  если у пользователя 
                    //уже был какой-то статус (статус устнавливается коллбэком ответа 
                    //updateUserStatus ) и этот статус не оффлайн, необходимо установить пользователю оффлайн статус.
                    else if(member.status !== undefined && member.status !== obj.STATUS.OFFLINE) {
                        member.status = obj.STATUS.OFFLINE;
                        obj.memberContainer.updateStatus(obj, member);
                    }
                });
            },
            /**
             * Сбрасывает статус указанного пользователя
             * @param {type} member
             * @returns {undefined}
             */
            setDefaultMemberStatus : function(member){
                member.status = this.DEFAULT_STATUS;
                this.memberContainer.updateStatus(this, member);
            },
            /**
             * Сбрасывает статус списка пользователей
             * @param {type} memberList
             * @returns {undefined}
             */
            setDefaultListStatuses : function(memberList){
                var obj = this;
                $.each(memberList, function(index, member){
                    member.status = obj.DEFAULT_STATUS;
                    obj.memberContainer.updateStatus(obj, member);
                });
            },
            memberContainer : {
                /**
                 * Создает контейнер для пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @param {Object} params
                 * @returns {jQuery}
                 */
                get : function(obj, member, params){
                    var instance = obj.memberContainer;
                    //Если у пользователя не сгенерирован htmlId - то генерируем его
                    if(!member.hasOwnProperty('htmlId')){
                        member.htmlId = generateUniqueId((params.prefix === undefined ? obj.prefix : params.prefix) + 'member');
                    }
                    //Если-же он есть, проверяем существование контейнера, т.к. возможно пользователь уже есть в списке
                    else {
                        var c = $('#' + member.htmlId);
                        //Если контейнер существует - возвращаем его
                        if(c.length !== 0){
                            return c;
                        }
                    }
                    
                    //Проверям переданные параметры
                    if(params.cssPrefix === undefined) params.cssPrefix = obj.cssPrefix;
                    
                    //Создаем контейнер
                    var container = $('<div class="'+params.cssPrefix+'member" id="'+member.htmlId +'"></div>');
                    
                    //Если необходим вывод в один столбец
                    if(params.lineBreak === true){
                        container.addClass(params.cssPrefix+"fixedMember");
                    }
                    
                    if(params.noBorder === true){
                        container.addClass(params.cssPrefix+"noBorder");
                    }
                    
                    //Если пользователь отключен, добавляем ему класс
                    if(member.disabled === true){
                        container.addClass(params.cssPrefix+"disabled");
                        container.append($('<div class="'+params.cssPrefix+'fade"></div>'));
                    }
                    
                    if(!member.hasOwnProperty('displayName') 
                            || (typeof member.displayName !== "string"
                            && typeof member.displayName !== "number")){
                        member.displayName = member.login;
                    }

                    //Создаем иконку пользователя
                    container.append(instance._createMemberIcon(obj, member, params));
                    //Преобразуем спецсимволы в имени и айди в их сущности
                    var name = escapeHtml(member.displayName.toString());
                    var id = escapeHtml(member.login.toString());

                    //Контейнер данных пользователя
                    var memberData = $('<div class="'+params.cssPrefix+'memberInfo">');
                    //Добавляем имя пользователя
                    memberData.append('<div id="' + member.htmlId + '_displayName" class="' + params.cssPrefix + 'displayName" '
                            + 'title="' + name + '">' + name + '</div>');
                    //Добавляем статус пользователя
                    memberData.append(instance._userStatusContainer(obj, member, params));
                    //Добавляем id пользователя
                    memberData.append('<div id="' + member.htmlId + '_id" class="' + params.cssPrefix + 'uid" '
                            + 'title="' + id + '">' + id + '</div>');
                    memberData.append('<div class="clear"></div>');
                    container.append(memberData);
                    //Добавляем список групп
                    container.append(instance._groupsContainer(obj, member, params));

                    return container;
                },
                /**
                 * Создаем контейнер для статуса пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @param {Object} params
                 * @returns {jQuery}
                 */
                _userStatusContainer : function(obj, member, params){

                    var container = $('<div class="' + params.cssPrefix + 'status">');
                    //Если пользователь не является контактом или гостем, то ставим ему статус по умолчанию
                    //Получаем код статуса
                    var statusCode = member.status;
                    //Есди объект пользователя пришел без статуса, ставим ему статус по умолчанию
                    if(statusCode === undefined){
                        statusCode = obj.DEFAULT_STATUS;
                    }
                    
                    //Получаем текстовое имя статуса
                    var status = obj.STATUS_NAMES[statusCode];
                    //Если не получилось получить имя, ставим ему offline
                    if(status === undefined){
                        status = "offline";
                    }
                    //Получаем локализованное имя статуса
                    var title = obj.STATUS_I18N_NAMES[status];
                    //Если в локализации не найдено название статуса, то используем его имя
                    if(title === undefined){
                        title = status;
                    }

                    container.append('<div title="'+title+'" id="' + member.htmlId +'_status" class="'+status+'">');
                    return container;
                },
                
                /**
                 * Добавляет список групп к пользователю
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @param {Object} params
                 * @returns {$}
                 */
                _groupsContainer : function(obj, member, params){
                    //Создаем контейнер
                    var  container = $('<div id="'+member.htmlId+'_groups" class="'+params.cssPrefix + 'groups clear"></div>');
                    //Список групп
                    var groups = member.groups;
                    //Массив для имен групп
                    var groupNames  = [];
                    //Если группы существуют, обходим объект с нимим в цикле
                    if(groups !== undefined){
                        $.each(groups, function(id, name){
                            //Добавляем к массиву имена групп, кроме no_group
                            if((id === 0 || id === '0' || id === obj.NO_GROUP_ID) 
                                    && (name === obj.NO_GROUP_ID || name === "")){
                                return true;
                            }
                            
                            groupNames.push(name);
                        });
                    }

                  if (groups === undefined) {
                    if (member.ownerType === User.prototype.OWNER_TYPE.GROUP &&
                      member.type === User.prototype.USER_TYPE.UNKNOWN) {
                      groupNames.push(member.ownerDisplayName)
                    }
                  }
                                        
                    //Если групп не обнаруженно, или есть группа без группы -  пользователь находится в группе без группы
                    if(groupNames.length === 0){
                        groupNames.push(_("Without group"));
                    }
                    //Слепливаем имена групп в одно длинное имя
                    var name = groupNames.join(", ");
                    //Добавляем группы
                    container.text(name);
                    //Добавляем тайтл с полным списком групп
                    container.prop("title", name);

                    return container;
                },
                /**
                 * Создает иконку пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @param {Object} params
                 * @returns {jQuery}
                 */
                _createMemberIcon : function(obj, member, params){
                    var container = $('<div class="'+params.cssPrefix+'memberIcon"></div>');
                    
                    //Провреям тип пользователя, и генерируем картинку пользователя.
                    switch(member.type){
                        case obj.USER_TYPE.USER:
                        case obj.USER_TYPE.USER_IN_CONTACTS:
                            var memberId = member.id.toString();
                            var avatarName = encodeURIComponent(memberId.replace(/[\/\\]/g, "%5"));

                            var wrapper = $('<div class="' + params.cssPrefix + 'memberDefault"></div>');
                            wrapper.attr("title", member.displayName);
                            var avatar = $('<img src="/api/v4/users/' + avatarName + '/avatar" />');
                            avatar.attr("alt", member.displayName);
                            avatar.load(function(){
                                wrapper.addClass("loaded");
                            });
                            wrapper.append(avatar);
                            container.append(wrapper);
                        break;
                        case obj.USER_TYPE.SIP:
                            container.append('<div class="'+params.cssPrefix+'memberSIP"></div>');
                        break;
                        case obj.USER_TYPE.H323:
                            container.append('<div class="'+params.cssPrefix+'memberH323"></div>');
                        break;
                        case obj.USER_TYPE.TEL:
                            container.append('<div class="'+params.cssPrefix+'memberTEL"></div>');
                        break;
                        case obj.USER_TYPE.GUEST:
                            container.append('<div class="'+params.cssPrefix+'memberGuest"></div>');
                        break;
                        case obj.USER_TYPE.UNKNOWN:
                        default :
                            container.append('<div class="'+params.cssPrefix+'memberUnknown"></div>');
                        break;
                    }
                    
                    return container;
                    //Пока, что-бы быстрее работало выводим иконку серого пользователя при помощи css, потом будем 
                    //подставлять картинки
                    //return $('<div class="'+params.cssPrefix+'memberIcon"><img  src="/images/gray-member.png" alt="" /></div>');
                },
                /**
                * Обновляет статус пользователя
                * @param {std_obj} obj
                * @param {Object} member
                * @returns {undefined}
                */
                updateStatus : function(obj, member){
                   //Получаем контейнер со статусом пользователя
                   var statusContainer = $("#" + member.htmlId +"_status");
                   //Если статус пользователя не найден - прерываем выполенение
                   if(statusContainer.length !== 1) return;
                   //Получаем статус пользователя из объекта
                   var status = member.status;
                   //Получаем название статуса
                   var statusClass = obj.STATUS_NAMES[status];
                   //Если статус не найден, используем оффлайн
                   if(statusClass === undefined){
                       statusClass = "offline";
                   }

                   //Получаем локализированное название статуса
                   var title = obj.STATUS_I18N_NAMES[statusClass];
                   
                   if(title === undefined){
                       title = statusClass;
                   }
                   //Удаляем полностью все классы у контейнера, т.к. мы не можем знать какой класс был раньше
                   statusContainer.removeAttr('class');
                   //Устанавливаем новый статус
                   statusContainer.attr("class", statusClass);
                   //Меняем название статуса
                   statusContainer.prop("title", title);
                   
                   std_obj.groupLog({name : "statusUpdated (userId : " + member.id + ")", fields : ["status", "statusName", "memberData"]}, 
                        status, title, member);
               }
            //End memberContainer    
            },
            
            log : function(){
                if(!this.debug){
                    return;
                }
                
                if(arguments.length < 1){
                    return;
                }
                
                if(arguments.length > 1){
                    console.log.apply(console, arguments);
                } else {
                    console.debug(arguments[0]);
                }
            },
            
            groupLog : function(){
                if(!this.debug){
                    return;
                }
                
                if(arguments.length < 2){
                    return;
                }
                
                var groupProps = arguments[0];
                if(typeof groupProps !== "object"){
                    return;
                }
                
                var name = groupProps.name ? groupProps.name : "";
                var collapsed = groupProps.collapsed === false ? false : true;
              var fieldNames = groupProps.fields ? groupProps.fields : [];
                var type = groupProps.type === "error" ? "error" : "log";
                
                if(collapsed && type !== "error"){
                    console.groupCollapsed(name);
                } else {
                    console.group(name);
                }
                
                for(var i = 1, k = 0; i<arguments.length; i++, k++){
                    if(fieldNames[k] !== undefined){
                        console[type](fieldNames[k] + ':', arguments[i]);
                    } else {
                        console[type](arguments[i]);
                    }
                }
                console.trace();
                console.groupEnd();
            }
        };
        
        
        return std_obj;
    }