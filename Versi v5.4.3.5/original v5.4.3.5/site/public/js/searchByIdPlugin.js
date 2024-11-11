(function($){
    
    /**
     * Конструктор класса
     * @class SearchByIdPlugin
     * @constructor
     */
    var SearchByIdPlugin = function(){
    };
    
    /**
     * Предопределяет параметры плагина
     * @param {Object} params
     * @returns {undefined}
     */
    SearchByIdPlugin.prototype.init = function(params){
        if(params !== null && params !== undefined && typeof params === 'object'){
            $.extend(true, std_obj, params);
        }
    };
    
    /**
     * Биндит данный плагин на переданный контейнер
     * @param {jQuery} container
     * @param {Object} params
     * @returns {Object}
     */
    SearchByIdPlugin.prototype.bind = function(container, params ){
        var plugin = container.searchByIdPlugin(params);
        return plugin;
    };
    
    /**
     * Объект со всеми методами, нужен для того, чтобы можно было все предопределять
     * @type Object
     */
    var std_obj = {
        /**
         * Префикс для html id
         */
        prefix : 'sbid',
        /**
         * Префикс для css
         */
        cssPrefix : 'sbid_',
        /**
         * Время задрежки перед поиском, задержка нужна для ограничения скорости отправки запроса при печатании айди
         */
        searchTimeout : 400,   
        /**
         * Добавлять только реальных пользователей
         */
        fakeUsers : true,
        
        /**
         * Адрес хэндлера для поиска
         */
        handler : '/admin/handler/getUserById',
        /**
         * Объект с данными найденного пользователя
         */
        member : {
        },
        /**
         * Объект с кнопками
         */
        buttons : {
            //Собственно, пример объекта
            /*
             * ID кнопки
             ./
            okBtn : {
                /**
                 * Тест кнопки, если его нет, будет браться айди кнопки
                 ./
                text : "Button text",
                /**
                 * Заголовок кнопки по наведению мыши, не обязательно
                 ./
                title : "Button title",
                /**
                 * Флаг заблокированности кнопки на нажатие. Однако, даже если он true, это не значит что
                 * визуально кнопка будет "заблокированна" - надо вручную добавляеть к кнопке классы основываясь 
                 * на данном флаге.
                 * не обязательно
                 ./
                locked : false,
                /**
                 * Коллбэк клика по кнопке
                 * @param {std_obj} obj
                 * @param {jQuery} container контейнер этой кнопки
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                click : function(obj, container, button){
                    if(container.hasClass("disabled")){
                        return;
                    }
                    alert('Hello, ' + obj.member.name);
                },
                /**
                 * Коллбэк начала поиска. Можно использовать, например, для блокировки кнопки в случае, если поиск начат
                 * @param {std_obj} obj
                 * @param {jQuery} container контейнер кнопки
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                onSearchStarted : function(obj, container, button){
                    container.addClass("disabled");
                },
                /**
                 * Коллбэк конца поиска, если нужно узнать параметры найденного пользователя, надо обратиться к obj.member
                 * @param {std_obj} obj
                 * @param {jQuery} container контейнер кнопки
                 * @param {Boolean} searchStatus статус поиска - true, если пользователь успешно найден, либо false, если
                 * пользователь не найден, или сервер не отвечает.
                 * @param {Strign} searchString строка, по которой осуществлялся поиск
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                onSearchFinished : function(obj, container, searchStatus, searchString, button){
                    if(searchStatus === false) return;
                    
                    if(container.hasClass("disabled")){
                        container.removeClass("disabled");
                    }
                },
                /**
                 * Вызывается, когда кнопка отрендерилась. Можно использовать, например, чтобы сразу заблокировать
                 * данную кнопку
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                onRendered : function(obj, container, button){
                    container.addClass("disabled");
                },
                /**
                 * Вызывается, когда кнопка была заблокированна для нажатия
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                onLock : funciton(obj, container, button){
                },
                /**
                 * Вызывается, когда кнопка была разблокированна для нажатия
                 * данную кнопку
                 * @param {std_obj} obj
                 * @param {jQuery} container
                 * @param {Object} button объект данной кнопки
                 * @returns {undefined}
                 ./
                onUnlock : function(obj, container, button){
                }
            }*/
        },
        
        /**
        * Возвращает контейнер панели добавления пользователей в список по их айди
        * @param {std_obj} obj
        * @returns {jQuery}
        */
        getContainer : function(obj){
            if(obj.container._rendered === null){
                obj.container._rendered = obj.container._render(obj);
            }

            return obj.container._rendered;
        },
        
        /***************************************************************************************************************
        **************************************ОСНОВНОЙ КОНТЕЙНЕР ПЛАГИНА************************************************ 
        ***************************************************************************************************************/
        container : {
            /**
             * Рендерит панель добавления пользователей по айди
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render : function(obj){
                var container = $('<div class="'+obj.cssPrefix + 'searchById">');

                //Обрабатываем поле поиска
                var idField  =  $('<input class="'+obj.cssPrefix + 'lightGray" maxlength="128" type="text" />');
                //устанавливаем для поля поиска текст по умолчанию
                idField.val(_("Enter user ID"));
                //Когда пользователь кликает на поле поиска, если там было только описание, удаляем описание
                //и меняем внешний вид поля ввода
                idField.focusin(function(){
                    if(idField.val() === _("Enter user ID")){
                        idField.val("");
                        obj.container._searchString = "";
                    }
                    idField.removeClass(obj.cssPrefix + "lightGray");
                });
                //Когда пользователь убирает фокус с поля поиска, если он не ввел никаких данных, возвращаем описание
                //и меняем внешний вид поля ввода
                idField.focusout(function() {
                    if(idField.val().length === 0){
                        idField.val(_("Enter user ID"));
                        idField.addClass(obj.cssPrefix + "lightGray");
                    }
                });
                
                function onChange(){
                    //Проверяем, изменилась ли строка поиска, если она не изменилась,
                    //незачем снова искать
                    if(obj.container._searchString === idField.val()){
                        return;
                    } 
                    //Устанавливаем поисковую строку
                    obj.container._searchString = idField.val();
                    
                    //Если строка поиска пустая
                    if(obj.container._searchString.length === 0){
                        //Очищаем контейнер с данными пользователя
                        obj.container._dataContainer.empty();
                        //Устанавливаем текст, что данные недоступны
                        obj.container._dataStatusContainer.text(_("User data is not available"));
                        obj.container._dataContainer.append(obj.container._dataStatusContainer);
                        //Вызываем событие пустого поля поиска
                        obj.btnContainer.triggerSearchFieldEmpty(obj);
                        return;
                    }
                    
                    //Запускаем поиск
                    obj.search(obj);
                    
                    //Дальнейшая обработка вызывается только если процесс поиска еще не начался. Этот флаг станет false,
                    //только после получения ответа от сервера
                    if(obj.container._waitingForSearch){
                        return;
                    }
                    //Запускаем коллбэк начала поиска
                    obj.onStartSearch(obj);
                    //Для кнопок передаем что поиск начался
                    obj.btnContainer.triggerSearchStarted(obj);
                    //Удаляем все из данных пользователя
                    obj.container._dataContainer.empty();
                    //Добавляем прогресс бар
                    obj.container._dataContainer.append(obj.container._waitContainer);
                    obj.container._waitingForSearch = true;
                };
                
                //Если пользователеь прекращает печатать, запускаем поиск
                idField.on("input", function(event){
                    onChange();
                });
                //Добавляем поле в глобальную переменную
                obj.container._idField = idField;
                //Контейнер для поля с id пользователя
                var searchBlock = $('<div class="'+obj.cssPrefix + 'searchBlock">');
                searchBlock.append(idField);
                container.append(searchBlock);

                //Контейнер для данных пользователя
                var dataContainer = $('<div class="'+obj.cssPrefix + 'userData">');
                container.append(dataContainer);
                obj.container._dataContainer = dataContainer;
                
                //Добавляем на конейтнер для описаний (например, если пользователь не найден)
                var dataStatus = $('<div class="' + obj.cssPrefix + 'dataStatus">');
                dataStatus.text(_("User data is not available"));
                dataContainer.append(dataStatus);
                obj.container._dataStatusContainer = dataStatus;
                
                //Если кнопки есть, обрабатываем их
                if(countObject(obj.buttons) > 0 ){
                    //Контейнер для кнопок
                    var buttonsContainer = $('<div class="'+obj.cssPrefix+'buttons">');
                    container.append(buttonsContainer);

                    //Генерируем кнопки
                    var buttons = obj.btnContainer.get(obj);
                    buttonsContainer.append($('<div class="'+ obj.cssPrefix + 'inner">').append(buttons));
                }

                //Хреновина для вывода ожидания загрзуки 
                obj.container._waitContainer = $('<div class="'+obj.cssPrefix + 'wait"><img src="/img/spinner.gif" alt="wait" /></div>');
                return container;
            },
            /**
             * Устанавливает параметры по умолчанию
             * @param {std_obj} obj
             * @returns {undefined}
             */
            clear : function(obj){
                //Устанваливаем поле ввода айди по умолчанию
                obj.container._idField.val(_("Enter user ID"));
                obj.container._idField.addClass(obj.cssPrefix + "lightGray");
                //Сбрасываем значение строки поиска
                obj.container._searchString = "";
                
                //Поиск на данный момент не идет
                obj.container._waitingForSearch = false;
                //Очищаем контейнер с данными пользователя
                obj.container._dataContainer.empty();
                //Устанавливаем текст, что данные недоступны
                obj.container._dataStatusContainer.text(_("User data is not available"));
                obj.container._dataContainer.append(obj.container._dataStatusContainer);
            },
            /**
             * Поле ввода айди
             */
            _idField : null,
            /**
             * Контейнер для прогрессбара
             */
            _waitContainer : null,
            /**
             * Контейнер для данных пользователя, или для статуса поиска
             */
            _dataContainer: null,
            /**
             * Контейнер для статуса поиска, например, что пользователь не найден
             */
            _dataStatusContainer : null,
            /**
             * Строка из _idField, нужна для того, чтобы отсекать всякие нажатия от не-символьных кнопок 
             * т.е. сюда пишем строку, когда пользователь нажал кнопку, вызывается метод keyDown, если строка не изменилась,
             * ну, например, он ткнул на ctrl, то ничего не делаем, т.к. он типа никуда не нажал.
             * Использовать всякие методы, из серии получения event.char или String.fromCharCode(event.which) нельзя, 
             * т.к. возвращают хрень,  в зависимости от клавиатуры
             */
            _searchString : null,
            /**
             * Флаг, что надо ждать завершения поиска
             */
            _waitingForSearch : false,
            /**
             * Контейнер
             */
            _rendered : null
        //End container
        },
        
        /***************************************************************************************************************
        *******************************************КНОПКИ ПЛАГИНА******************************************************* 
        ***************************************************************************************************************/
        btnContainer : {
            /**
             * Возвращает контейнер 
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            get : function(obj){
                if(obj.btnContainer._rendered === null){
                    obj.btnContainer._rendered = obj.btnContainer._render(obj);
                }
                return obj.btnContainer._rendered;
            },
            /**
             * Рендерит панель кнопок
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render : function(obj){
                var container = $('<ul>');
                //Обходим в цикле объект с кнопками, и обрабатываем данные
                $.each(obj.buttons, function(id, button){
                    //Создаем контейнер кнопки
                    var li = $('<li id=' + obj.prefix + 'btn_' + id + '>');
                    //Если есть параметр текст, то устанавливаем его как текст кнопки, иначе берем ее айди
                    li.text((!button.hasOwnProperty("text") ? id : button.text));
                    //Добавляем тайтл
                    if(button.hasOwnProperty("title")){
                        li.prop("title", button.title);
                    }
                    //Добавляем обработчик нажатия, если он есть
                    if(button.hasOwnProperty("click")){
                        li.click(function(){
                            //Если кнопка заблокированна, не вызываем метод клик
                            if(button.locked !== true){
                                button.click(obj, $(this), button);
                            }
                        });
                    }
                    //Добавляем кнопку к контейнеру
                    container.append(li);
                    //Добавляем к кнопке отрендеренные данные
                    button._rendered = li;
                    
                    //Вызываем коллбэк, что кнопка отрендеренна, если такой коллбэк есть
                    if(button.hasOwnProperty("onRendered")){
                        button.onRendered(obj, li, button);
                    }
                });
                
                return container;
            },
            /**
             * @private
             * Объект контейнера
             */
            _rendered : null,
            
            /**
             * Возвращает кнопку по ее ID
             * @param {std_obj} obj
             * @param {String} btnId
             * @returns {Object}
             */
            getButton : function(obj, btnId){
                if(!obj.buttons.hasOwnProperty(btnId)){
                    return null;
                }
                
                return obj.buttons[btnId];
            },
            /**
             * Вызывает метод кнопки onSearchStarted, вызывается когда начался процесс поиска
             * @param {std_obj} obj
             * @returns {undefined}
             */
            triggerSearchStarted : function(obj){
                //В цикле обходим все кнопки
                
                $.each(obj.buttons, function(id, button){
                    //Переходим к след.циклу если у кнопки нет коллбэка
                    if(!button.hasOwnProperty("onSearchStarted")){
                        return true;
                    }
                    
                    //Вызываем коллбэк
                    button.onSearchStarted(obj, button._rendered, button);
                });
            },
            
            /**
             * Вызывается в случае, если поле поиска стало пустым
             * @param {std_obj} obj
             * @returns {undefined}
             */
            triggerSearchFieldEmpty : function(obj){
                //В цикле обходим все кнопки
                $.each(obj.buttons, function(id, button){
                    //Переходим к след.циклу если у кнопки нет коллбэка
                    if(!button.hasOwnProperty("onSearchFieldEmpty")){
                        return true;
                    }
                    
                    //Вызываем коллбэк
                    button.onSearchFieldEmpty(obj, button._rendered, button);
                });
            },
            
            /**
             * Вызывает метод кнопки onSearchFinished, вызывается когда поиск завершен
             * @param {type} obj
             * @param {String} searchString поисковая строка
             * @param {String} searchStatus true, если пользователь найден, или false, если пользователь не найден 
             * или произошла ошибка
             * @returns {undefined}
             */
            triggerSearchFinished : function(obj, searchStatus, searchString){
                //В цикле обходим все кнопки
                $.each(obj.buttons, function(id, button){
                    //Переходим к след.циклу если у кнопки нет коллбэка
                    if(!button.hasOwnProperty("onSearchStarted")){
                        return true;
                    }
                    //Вызываем коллбэк
                    button.onSearchFinished(obj, button._rendered, searchStatus, searchString, button);
                });
            },
            
            /**
             * Заблокировать все кнопки
             * @param {std_obj} obj
             * @returns {undefined}
             */
            lockAll : function(obj){
                //В цикле обходим все кнопки
                $.each(obj.buttons, function(id, button){
                    //Добавляем флаг заблокированности
                    button.locked = true;
                    //Переходим к след.циклу если у кнопки нет коллбэка
                    if(!button.hasOwnProperty("onLock")){
                        return true;
                    }
                    //Вызываем коллбэк
                    button.onLock(obj, button._rendered, button);
                });
            },
            
            /**
             * Разблокировать все кнопки
             * @param {std_obj} obj
             * @returns {undefined}
             */
            unlockAll : function(obj){
                //В цикле обходим все кнопки
                $.each(obj.buttons, function(id, button){
                    //Удаляем флаг заблокированности
                    button.locked = false;
                    //Переходим к след.циклу если у кнопки нет коллбэка
                    if(!button.hasOwnProperty("onUnlock")){
                        return true;
                    }
                    //Вызываем коллбэк
                    button.onUnlock(obj, button._rendered, button);
                });
            }
            
        //End buttonContainer
        },
        
        /***************************************************************************************************************
        *****************************************СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ************************************************** 
        ***************************************************************************************************************/
        userContainer : {
            /**
             * Создает контейнер для пользователя
             * @param {std_obj} obj
             * @param {Object} member
             * @param {Object} params доп. параметры создания
             * @returns {jQuery}
             */
            get : function(obj, member, params){
                //Если плагин пользователей не установлен - ничего не возвращаем
                if(obj.plugins.user === null){
                    return $('<div>');
                }
                //Создаем контейнер для статуса
                var container = obj.plugins.user.createUser(member, $.extend(true, obj.userContainer.getCreateUserObj(obj), params));
                //Пробуем установить ему статус, т.к. ожидание вызова коллбэка может занять некоторое время, 
                //а статус был уже доли секунды назад получен
                obj.plugins.user.updateMemberStatus(member);
                
                return container;
            },
            /**
             * Возвращает объект с параметрами для плагина пользователей
             * @param {std_obj} obj
             * @returns {searchByIdPlugin_L1.std_obj.userContainer.getCreateUserObj.searchByIdPluginAnonym$1}
             */
            getCreateUserObj : function(obj){
                return {
                    prefix : obj.prefix,
                    nameLength : obj.userContainer._nameVisibleLength,
                    idLength : obj.userContainer._idVisibleLength,
                    groupsLength : obj.userContainer._groupsVisibleLength,
                    lineBreak : true,
                    noBorder : true
                };
            },
            /**
             * Вызывается при обновлении статуса пользователя
             * @param {User} userPlugin
             * @param {Object} json
             * @param {Object} eventData
             * @returns {undefined}
             */
            updateUserStatus : function(userPlugin, json, eventData){
                var obj = eventData.obj;
                
                if(!obj.member.hasOwnProperty('id')){
                    return;
                }
                userPlugin.updateMemberStatus(obj.member);
            },
            /**
             * Вызывается в случае ошибки получения статуса пользователей
             * @param {type} userPlugin
             * @param {type} eventData
             * @returns {undefined}
             */
            setDefaultUserStatus : function(userPlugin, eventData){
                var obj = eventData.obj;
                
                if(!obj.member.hasOwnProperty('id')){
                    return;
                }
                userPlugin.setDefaultMemberStatus(obj.member);
            },
            
            //Три параметра ниже нельзя автоматизировать, т.к. ширина контейнера, а тем более ширина символов 
            //неизвестна до того, как элемент будет выведен на экран. Можно, конечно, сначала показывать пользователю
            //контейнер с полными именами, и скрывать все что за контейнером при помощи overflow: hidden, а потом уже 
            //обрезать, но это получается очень некрасиво.
            /**
             * Максимальное количество символов в имени, все что больше будет обрезаться
             */
            _nameVisibleLength : 40,
            /**
             * Максимальное количество символов в id, все что больше будет обрезаться
             */
            _idVisibleLength : 50,
            /**
             * Максимальное количество символов в группах пользователя, все что больше будет обрезаться
             */
            _groupsVisibleLength : 50
        //End userContainer    
        },
        /**
         * Возвращает параметры несуществующего (SIP, H323 и т.д.) пользователя 
         * @param {std_obj} obj
         * @param {String} userId
         * @returns {Object}
         */
        getDefaultFakeUser : function(obj, userId){
            //Создаем объект пользователя
            var data= {};
            //Айди пользователя
            data['id'] = userId;
            //Имя пользователя
            data['displayName'] = userId;
            //Список групп пользователя
            data['groups'] = Array();
            
            //Обрабатываем параметры id, для определения его типа
            //Если ид начинается с SIP
            if(userId.indexOf(obj.plugins.user.USER_ID_PREFIX.SIP) === 0){
                data["type"] = obj.plugins.user.USER_TYPE.SIP;
            }
            //Если ид начинается с H323
            else if(userId.indexOf(obj.plugins.user.USER_ID_PREFIX.H323) === 0){
                data["type"] = obj.plugins.user.USER_TYPE.H323;
            }
            //Если ид начинается с TEL
            else if(userId.indexOf(obj.plugins.user.USER_ID_PREFIX.TEL) === 0){
                data["type"] = obj.plugins.user.USER_TYPE.TEL;
            }
            //Иначе тип пользователя не определен
            else {
                data["type"] = obj.plugins.user.USER_TYPE.UNKNOWN;
            }
            
            return data;
        },
        
        /***************************************************************************************************************
        *******************************************CALLBACKS ДЛЯ ПОИСКА************************************************* 
        ***************************************************************************************************************/
        /**
         * Функция, вызывается в случае успешного ответа от сервера, т.е. пользователь может быть и не найден
         * @param {std_obj} obj
         * @param {Object} json
         * @param {String} userId
         * @returns {undefined}
         */
        successSearch : function(obj, json, userId){
            //Поиск прошел
            obj.container._waitingForSearch = false;
            //Очищаем контйнер с найденными данными
            obj.container._dataContainer.empty();

            //Если пользователь найден
            if(json.status === true){
                //Добавляем тип пользователя
                json["type"] = obj.plugins.user.USER_TYPE.USER;
                //Добавляем к объекту найденного пользователя данные с сервера
                obj.member = json;

                //Создаем контейнер для пользователя
                var user = obj.userContainer.get(obj, json);
                obj.container._dataContainer.append(user);

                //Вызываем коллбэк завершения поиска
                obj.onFinishSearch(obj, true, obj.container._searchString);
                //Вызываем коллбэк заверщения поиска у всех добавленных кнопок
                obj.btnContainer.triggerSearchFinished(obj, true, obj.container._searchString);
            } else {
                //Если добавляем только реально существующих пользователей
                if(!obj.fakeUsers){
                    //Выводим текст что пользователь не найден
                    obj.container._dataStatusContainer.text(_("User not found"));
                    obj.container._dataContainer.append(obj.container._dataStatusContainer);

                    //Вызываем коллбэк завершения поиска
                    obj.onFinishSearch(obj, false, obj.container._searchString);
                    //Вызываем коллбэк заверщения поиска у всех добавленных кнопок
                    obj.btnContainer.triggerSearchFinished(obj, false, obj.container._searchString);
                } else {
                    //Создаем пользователя
                    var userData = obj.getDefaultFakeUser(obj, userId);           
                    //Добавляем к объекту найденного пользователя данные с сервера
                    obj.member = userData;
                
                    //Создаем контейнер для пользователя
                    var user = obj.userContainer.get(obj, userData);
                    obj.container._dataContainer.append(user);

                    //Вызываем коллбэк завершения поиска
                    obj.onFinishSearch(obj, true, obj.container._searchString);
                    //Вызываем коллбэк заверщения поиска у всех добавленных кнопок
                    obj.btnContainer.triggerSearchFinished(obj, true, obj.container._searchString);
                }
            }
        },
        
        /**
         * Если по какой-то причине сервер не отвечает
         * @param {std_obj} obj
         * @returns {undefined}
         */
        failSearch : function(obj) {
            //Поиск завершен
            obj.container._waitingForSearch = false;
            //Очищаем контейнер с данными пользователя
            obj.container._dataContainer.empty();

            //Устанавливаем текст, что данные недоступны
            obj.container._dataStatusContainer.text(_("User data is not available"));
            obj.container._dataContainer.append(obj.container._dataStatusContainer);

            //Вызываем коллбэк завершения поиска
            obj.onFinishSearch(obj, false, obj.container._searchString);
            //Вызываем коллбэк заверщения поиска у всех добавленных кнопок
            obj.btnContainer.triggerSearchFinished(obj, false, obj.container._searchString);
        },
        
        /***************************************************************************************************************
        *****************************************ПОИСК ПОЛЬЗОВАТЕЛЯ ПО ID*********************************************** 
        ***************************************************************************************************************/
        /**
        * Создает процесс поиска по пользователям
        * @param {std_obj} obj
        * @returns {undefined}
        */
        search : function(obj){
            //Обнуляем таймаут предыдущего поиска
            clearTimeout(obj._searchTimeoutFn);
            //Обнуляем объект найденного пользователя
            obj.member = {};
            //Создаем таймаут для поиска, необходим для задержки при печатании айди юзера
            obj._searchTimeoutFn = setTimeout(function(){
                //Отправляем запрос к серверу
                if(obj.container._searchString.length === 0){
                    return;
                }
                obj.loadUser(obj, obj.container._searchString, obj.successSearch, obj.failSearch, null);
            }, obj.searchTimeout);
        },
        /**
        * 
        * @param {std_obj} obj
        * @param {String} userId tueconfID пользователя
        * @param {Function} successCallback вызывается при удачном запросе к серверу. Т.е. вызовется даже если
        * пользователь с указанным trueconfID не буедт найден.
        * @param {Function} failCallback  вызывается в случае неудачного запроса, например сервер ответил 401 или 404
        * @param {Function} finallyCallback вызывается всегда
        * @param {Boolean} abortIfWork прерывает запрос к серверу, если он выполняется
        * @returns {undefined}
        */
       loadUser : function(obj, userId, successCallback, failCallback, finallyCallback, abortIfWork){
            //Если прерываение запроса не отменено, и запрос выполняется - прерываем запрос к серверу
            if(abortIfWork !== false && obj._loadUserXHR !== null){
                obj._loadUserXHR.abort();
            }
            
            //Выполняем GET запрос
            obj._loadUserXHR = $.getJSON(
                obj.handler, 
                {
                    'id' : userId
                })
                //Если запрос удачен
                .done(function(json) {
                    if(successCallback !== undefined && successCallback !== null) {
                        successCallback(obj, json, userId);
                    }
                })
                //Если сервер ответил хренью
                .fail(function(xhr, status, error) {
                    if(failCallback !== undefined && failCallback !== null) {
                        failCallback(obj, userId, xhr, status, error);
                    }
                })
                //Вызывается всегда
                .always(function() {
                    if(finallyCallback !== undefined && finallyCallback !== null){
                        finallyCallback(obj, userId);
                    }
                });
        },
        /**
         * Содержит XMLHttpRequest для obj.loadUser , нужен для прерывания запроса при необходимости
         */
        _loadUserXHR : null,
        /**
         * Объект таймера поиска, чтобы можно было отменить предыдущую операцию поиска
         */
        _searchTimeoutFn : null,
        
        /***************************************************************************************************************
        *********************************************CALLBACKS********************************************************** 
        ***************************************************************************************************************/
       /**
        * Callback, вызывается при создании
        * @param {std_obj} obj
        * @param {Object} params параметры, с которыми вызывалось создание плагина
        * @returns {undefined}
        */
        onCreated : function(obj, params){
            
        },
        /**
         * Вызывается, когда начат поиск , поиск считается начатым, как только запускается таймер ф-и obj.search 
         * между вызовом коллбэка и отправкой поискового запроса на сервер, может пройти значительное время, т.к.
         * таймер сбрасывается каждый раз, когда пользователь печатает букву (коллбэк при этом повторно не вызывается)
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onStartSearch : function(obj){
            
        },
        /**
         * Вызывается когда поиск завершен, при этом, невозможно передать в метод данные пользователя, т.к. поиск может
         * быть завершен и в случае ошибки сервера. Для получения данных пользователя необходимо смотреть searchStatus, 
         * если он true, то обращаться к obj.member, содержащим ответ от сервера
         * @param {std_obj} obj
         * @param {Boolean} searchStatus
         * @param {String} searchString
         * @returns {undefined}
         */
        onFinishSearch : function(obj, searchStatus, searchString){
            
        },
        
        /**
         * Объект внешних плагинов и методов работы с нимим
         */
        plugins : {
            /**
             * Плагин создания пользователей и их обработки их статусов
             * @type User
             */
            user : null,
            /**
             * Вызывается при инициализации плагина
             * @param {std_obj} obj
             * @returns {undefined}
             */
            _initUserPlugin : function(obj){
                obj.plugins.user.addUpdateListener(obj.userContainer.updateUserStatus, {'obj' : obj});
                obj.plugins.user.addErrorListener(obj.userContainer.setDefaultUserStatus, {'obj' : obj});
            }
        }
        
    };
    
    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {SearchByIdPlugin}
     */ 
    $.fn.searchByIdPlugin = function(params){
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('searchByIdPlugin');
        //Если плагин не найден, или false создаем его
        if(plugin === undefined || plugin === false){
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина и класс searchByIdPlugin
            $.extend(true, plugin, $.searchByIdPlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            this.append(plugin.getContainer(plugin));
            //Сохраняем объект плагина в данные контейнреа
            this.data('searchByIdPlugin', plugin);
            //Если был установлен плагин user - инициализиурем его
            if(plugin.plugins.user !== null){
                plugin.plugins._initUserPlugin(plugin);
            }
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };
    
    //Создаем объект класса плагина
    $.searchByIdPlugin = new SearchByIdPlugin();
    
})(jQuery);