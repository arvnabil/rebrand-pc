(function($){

    var MemberList = function(){
    };

    MemberList.prototype.init = function(params){
        $.extend(true, MemberList.prototype, params);
    };

    MemberList.prototype.setUserPlugin = function(plugin){
        std_obj.plugins.user = plugin;
    };

    MemberList.prototype.bind = function(container, params){
        var plugin = container.memberListPlugin(params);
        return plugin;
    };
    $.memberListPlugin = new MemberList();
    /**
     * Основной объект плагина
     * @type std_obj
     */
    var std_obj = {
        /**
         * Префикс для айди
         */
        prefix : "mlpl",
        /**
         * Префикс для css
         */
        cssPrefix : "mlpl_",
        /*
         * Высота окна в пикселях
         */
        height : 500,
        /*
         * Сколько пользователей загружать за раз
         */
        loadLimit : 200,
        /*
         * Сколько пикселей должно остаться "снизу", чтобы инициализировать загрзку следущей части пользователей
         */
        expectLimit : 1000,
        /*
         * Родительский контейнер, к которому был вызван плагин
         */
        parent : null,
        /*
         * Задержка запуска поиска по нажатиям клавиш
         */
        searchTypingDelay : 500,
        /*
         * ID следущей страницы с данными
         */
        nextPageId : 0,
        /**
         * Флаг, покзаывающий загружается ли в данный момент список пользователей
         */
        inUpdate : false,
        /**
         * Метод поиска по списку по умолчанию
         */
        //searchMethod : "all",
        /**
         * Строка поиска по списку
         */
        searchString : "",
        /**
         * Регурялрка для поиска по списку
         */
        searchRegexp : null,
        /**
         * Методы поиска по списку
         */
        SEARCH_METHODS : {
            ALL : "all",
            USERS : "users",
            GROUPS : "groups"
        },
        /**
         * Сколько пользователей было добавлено при последнем запросе к серверу.
         * Необходимо для остановки безостановочной загрузки по скроллу, когда достигнут конец списка
         */
        lastInsertedCount : null,
        /**
         * Список хэндлеров плагина
         */
        handlers : {
            /**
             * Хэндлер для загрузки списка пользователей
             */
            userList : '/handlers/directory.php'
        },
        /**
         * Объект с пользователями в списке
         */
        list : {

        },


        /**
         * Проверяет, есть ли пользователь в списке
         * @param {std_obj} obj
         * @param {String} id
         * @returns {undefined}
         */
        inList : function(obj, id){
            if(obj.list.hasOwnProperty(id)){
                return true;
            }

            return false;
        },
        /**
         * Обновлеят список пользователей
         * @param {std_obj} obj
         * @returns {undefined}
         */
        refreshList : function(obj){
            obj.stop(obj);
            obj.start(obj);
        },


        /**
         * Возвращаем контейнер плагина
         * @param {std_obj} obj
         * @returns {unresolved}
         */
        get : function(obj){
            var container =  obj.containers.get(obj);
            return container;
        },

        /**
         * Отстанавливает обработку данных
         * @param {std_obj} obj
         * @returns {undefined}
         */
        stop : function(obj){
            obj.containers.list._list.empty();
            obj.containers.search._searchField.val(_("Enter the user name"));
            //obj.containers.search._searchMethod.hide();
            obj.setDefaultServerParams(obj, true);
        },
        /**
         * Инициализирует первую загрузку списка
         * @param {std_obj} obj
         * @returns {undefined}
         */
        start : function(obj){
            //Добавляем прогрессбар
            obj.containers.list.showProgressBar(obj);

            /**
             * Если пользователь имеет большой экран, например 4к, то 100 пользователей, будут отображаться практически
             * в одну строку. Поэтому необходимо догрузить оставшийся список так, чтобы он заполнил весь экран (если,
             * конечно, есть такое количество пользователей).
             * @returns {undefined}
             */
            var checkIsScreenFill = function(){
                //Удаляем маленький прогресбар снизу списка
                obj.containers.list._wait.remove();
                //Если количество последних загруженных пользователей меньше, чем мы должны грузить по умолчанию, значит
                //мы достигли конца списка, прекращаем выполнение
                if(obj.lastInsertedCount !== obj.loadLimit){
                    //Вручную перезапрашиваем обновление статуса
                    obj.plugins.user.updateUserStatus(obj.plugins.user);
                    return;
                }
                //Если высота прокрутки листа больше чем высота списка с буфером, то выходим
                if(obj.containers.list._list[0].scrollHeight > obj.containers.list._list.height() + obj.expectLimit
                    || obj.containers.list._list[0].scrollHeight === 0){
                    //Вручную перезапрашиваем обновление статуса
                    obj.plugins.user.updateUserStatus(obj.plugins.user);
                    return;
                }
                //Добавляем маленький прогрессбар вниз списка
                obj.containers.list._list.append(obj.containers.list._wait);
                //Выполняем запрос на загрузку следущей части списка
                obj.loadNextPart(obj,
                    /**
                     * Если запрос прошел успешно, заново запускаем проверку
                     * @returns {undefined}
                     */
                    function(){
                        checkIsScreenFill();
                    },
                    /**
                     * Если запрос не прошел - удаляем маленький прогрессбар
                     * @returns {undefined}
                     */
                    function(){
                        obj.containers.list._wait.remove();
                    }
                );
            };

            //Загружаем часть пользователей
            obj.loadNextPart(obj,
                /**
                 * Если запрос прошел успешно
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                function(obj){
                    //Скрываем большой прогрессбар
                    obj.containers.list.hideProgressBar(obj);
                    //Запускаем проверку, заполнилось ли окно пользоваелями
                    checkIsScreenFill();
                },
                /**
                 * В том случае, если список пользователей пустой
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                function(obj){
                    //Скрываем большой прогрессбар
                    obj.containers.list.hideProgressBar(obj);
                    //Выводим подсказку о пустом списке пользователей
                    obj.containers.list.showEmpty(obj);
                }
            );
        },
        /**
         * Объект с  html данными плагина
         */
        containers : {
            /**
             * Возвращает основной контейнер
             * @param {std_obj} obj
             * @returns {unresolved}
             */
            get : function(obj){
                if(obj.containers._rendered === null){
                    obj.containers._rendered = obj.containers._render(obj);
                }

                return obj.containers._rendered;
            },
            /**
             * Рендерит основной контейнер
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render : function(obj){
                var container = $('<div class="'+obj.cssPrefix+'memberList">');

                var inner = $('<div class="'+obj.cssPrefix+'inner">');
                container.append(inner);
                //Добавляем контейнер с поиском
                inner.append(obj.containers.search.get(obj));
                //Добавляем контейнер со списком
                inner.append($('<div style="display: table-row">').append(obj.containers.list.get(obj)));
                inner.append('<div class="clear">');

                return container;
            },
            /**
             * Добавление списка пользователей
             * @param {std_obj} obj
             * @param {Object} members
             * @param {Object} params
             * @returns {undefined}
             */
            addList : function(obj, members, params){
                /**
                 * @type {this.list}
                 */
                var instance = obj.containers.list;
                //В цикле обходим список и добавляем пользователя к списку
                for(var index in members.list){
                    var value = members.list[index];
                    //Если у пользователя нет параметра type - то он является обычным пользователем
                    instance.addMember(obj, value);
                };
            },
            /**
             * Создает контейнер с пользователем
             */
            member : {
                /**
                 * Создает контейнер для пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @returns {jQuery}
                 */
                get : function(obj, member){
                    //В том случае, если вдруг не установлен плагин обработки пользователей
                    if(obj.plugins.user === null){
                        return $('<div>');
                    }
                    //Создаем контейнер пользователя
                    var container = obj.plugins.user.createUser(member, {prefix : obj.prefix});

                    return container;
                },
                /**
                 * Вызывается при обновлении статуса пользователя
                 * @param {User} userPlugin
                 * @param {Object} json
                 * @param {Object} eventData
                 * @returns {undefined}
                 */
                updateMembersStatus : function(userPlugin, json, eventData){
                    /**
                     * @type {std_obj}
                     */
                    var obj = eventData.obj;
                    userPlugin.updateListStatuses(obj.list);
                },
                /**
                 * Вызывается в случае ошибки получения статуса пользователей
                 * @param {type} userPlugin
                 * @param {type} eventData
                 * @returns {undefined}
                 */
                setDefaultMembersStatus : function(userPlugin, eventData){
                    /**
                     * @type {std_obj}
                     */
                    var obj = eventData.obj;
                    userPlugin.setDefaultListStatuses(obj.list);
                },
                /**
                 * Подсвечиваем данные пользователя
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @returns {undefined}
                 */
                highlight : function(obj, member){
                    //Поля для подсветки
                    var fields = Array();
                    //В зависимости от типа способа поиска, необходимо посвечитвать пользователя по своему
                    //Отключено....
                    /*switch(obj.searchMethod){
                        case obj.SEARCH_METHODS.ALL:
                            fields = new Array("id", "name", "groups");
                        break;
                        case obj.SEARCH_METHODS.USERS:
                            fields = new Array("id", "name");
                        break;
                        case obj.SEARCH_METHODS.GROUPS:
                            fields = new Array("groups");
                        break;
                    }*/
                    fields = new Array("id", "displayName");
                    //В цикле обходим необходимые поля и производим поиск по ним
                    for(var i = 0; i<fields.length; i++){
                        var field = fields[i];
                        //Для групп необходимо подсвечивать данные другим способом, т.к. группы это массив строк
                        //if(field !== "groups"){
                        var value  = member[field] + "";

                        if(obj.searchRegexp.test(value)){
                            value = value.replace(obj.searchRegexp, '<span class="'+obj.plugins.user.cssPrefix+'highlighted">$&</span>');
                            $('#' + member.htmlId + '_' + field).html(value);
                        }
                        /*} else {
                            var groups = member[field];
                            var groupList = [];
                            for(var k in groups){
                                var group = groups[k];

                                if(obj.searchRegexp.test(group)){
                                    group = group.replace(obj.searchRegexp, '<span class="'+obj.plugins.user.cssPrefix+'highlighted">$&</span>');
                                }
                                groupList.push(group);
                            }
                            if(groupList.length !== 0){
                                $('#' + member.htmlId + '_' + field).html(groupList.join(", "));
                            }
                        }*/
                    }
                }
            },

            /**
             * Контейнер списка пользователей
             */
            list : {
                /**
                 * Возвращает контейнер списка пользователей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get : function(obj){
                    if(obj.containers.list._rendered === null){
                        obj.containers.list._rendered = obj.containers.list._render(obj);
                    }

                    return obj.containers.list._rendered;
                },
                /**
                 * Рендерит контейнер списка пользователей
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render : function(obj){
                    /**
                     * текущий неймспейс
                     * @type this
                     */
                    var instance = obj.containers.list;

                    var container = $('<div class="'+obj.cssPrefix+'list">');
                    //Создаем список
                    var list = $('<div class="'+obj.cssPrefix+'members">');
                    container.append($('<div class="' + obj.cssPrefix +'innerList">').append(list));
                    //По прокрутке списка дозагружаем пользователей
                    list.scroll(
                        function(){
                            var _this = $(this);
                            instance._reloadByScroll(obj, _this);
                        });
                    //Создаем необходимые контейнеры
                    instance._wait = $('<div class="'+obj.cssPrefix+'wait"><img src="/img/spinner.gif" alt="wait" /></div>');
                    instance._listInfoContainer = $('<div class="'+obj.cssPrefix+'listInfo">');
                    instance._fullWait = $('<div class="'+obj.cssPrefix+'innerListInfo"><img src="/img/spinner.gif" alt="wait" /></div>');
                    instance._emptyList = $('<div class="'+obj.cssPrefix+'emptyList"><span>'
                        + _("No users found. Check the search criteria") + '</span></div>');
                    instance._list  = list;

                    return container;
                },
                /**
                 * Добавление пользователя в список
                 * @param {std_obj} obj
                 * @param {Object} member
                 * @returns {undefined}
                 */
                addMember : function(obj, member){
                    //Создаем пользователя
                    var container = obj.containers.member.get(obj, member);
                    //Выполняем коллбэк перед добавлением пользователя
                    container = obj.beforeMemberAdd(obj, member, container);
                    //Если коллбэк вернул false, то удаляем пользователя из списка и выходим
                    if(!(container instanceof jQuery))
                    {
                        if(obj.list.hasOwnProperty(member.id)){
                            delete obj.list[member.id];
                        }
                        return;
                    }



                    //Клик по пользователю
                    container.click(function(event){
                        obj.onMemberClick(obj, member, container, event);
                    });
                    //Мышь над пользователем
                    container.mouseover(function(event){
                        obj.mouseOnMember(obj, member, container, event);
                    });
                    //Мышь ушла с пользователя
                    container.mouseout(function(event){
                        obj.mouseOutMember(obj, member, container, event);
                    });
                    obj.containers.list._list.append(container);
                    //В том случае, если searchString не пустая, пытаемся посветить параметры пользователя
                    if(obj.searchString !== ""){
                        obj.containers.member.highlight(obj, member);
                    }
                },

                /**
                 * Удаляет пользователя из списка
                 * @param {std_obj} obj
                 * @param {String} id
                 * @returns {undefined}
                 */
                removeMember : function(obj, id){
                    //Если у пользователя нет аттрибута htmlId - то ничего не делаем
                    if(obj.list[id].htmlId === undefined){
                        return;
                    }
                    //Получаем контейнер пользователя
                    var member = obj.containers.list._list.find('#' + obj.list[id].htmlId);
                    //Удаляем пользователя из списка
                    member.remove();
                },


                /**
                 * Метод перезагрузки списка по скроллу
                 * @param {std_obj} obj
                 * @param {jQuery} memberList
                 * @returns {undefined}
                 */
                _reloadByScroll : function(obj, memberList){
                    //Получаем, сколько нам осталось скролить до низа в пикселях
                    var scrollDown = memberList[0].scrollHeight - (memberList[0].scrollTop + memberList.outerHeight());
                    //Если нам осталось скролить до низа меньше чем допустимый предел, и в данный момент список не
                    //дозагружается и последний запрос к списку пользователей вернул количество пользователей равное
                    //запрошенному (а не меньше, что значит, что мы достигли конца списка), выполняем запрос на загрузку
                    if(scrollDown <= obj.expectLimit && !obj.inUpdate
                        && obj.lastInsertedCount >= obj.loadLimit){
                        //Добавляем маленький прогрессбар в конец списка
                        obj.containers.list._list.append(obj.containers.list._wait);
                        //Осуществляем загрузку следущей части списка
                        obj.loadNextPart(obj, function(){
                                //Когда все успешно загружено, удаляем прогрессбар
                                obj.containers.list._wait.remove();
                            }, function(){
                                obj.containers.list._wait.remove();
                            }
                        );
                    }

                },
                /**
                 * Показать большой прогрессбар
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                showProgressBar : function(obj){
                    obj.containers.list._listInfoContainer.empty();
                    obj.containers.list._listInfoContainer.append(obj.containers.list._fullWait);
                    obj.containers.list._list.append(obj.containers.list._listInfoContainer);
                },
                /**
                 * Скрыть большой прогрессбар
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                hideProgressBar : function(obj){
                    obj.containers.list._listInfoContainer.remove();
                },
                /**
                 * Вывести на экран, что список пользователей пустой
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                showEmpty : function(obj){
                    obj.containers.list._list.append(obj.containers.list._emptyList);
                },
                /**
                 * Скрыть предупреждение пустого списка пользователей
                 * @param {type} obj
                 * @returns {undefined}
                 */
                hideEmpty : function(obj){
                    obj.containers.list._emptyList.remove();
                },
                /**
                 * Контейнер списка пользователей
                 */
                _list : null,
                /**
                 * Контейнер пустого списка пользователей
                 */
                _emptyList : null,
                /**
                 * Большой прогрессбар по центру
                 */
                _fullWait : null,
                /**
                 * Маленький прогрессбар внизу списка
                 */
                _wait : null,
                /**
                 * Контейнер с информацией списка
                 */
                _listInfoContainer : null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null

            },
            /**
             * Поск по списку
             */
            search : {
                /**
                 * Получаем контейнер панели поиска
                 * @param {std_obj} obj
                 * @returns {unresolved}
                 */
                get : function(obj){
                    if(obj.containers.search._rendered === null){
                        obj.containers.search._rendered = obj.containers.search._render(obj);
                    }

                    return obj.containers.search._rendered;
                },
                /**
                 * Рендерит панель поиска по списку
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render : function(obj){
                    var container = $('<div class="' + obj.cssPrefix +'innerSearch">');
                    //Поле поиска по списку
                    var searchField = $('<input id="search-str" class="'+obj.cssPrefix+'lightGray" tabindex="-1" type="text" />');
                    var searchFieldWrapper = $('<div class="' + obj.cssPrefix + 'searchFieldWrapper"></div>');
                    searchFieldWrapper.append(searchField);
                    searchField.val(_("Enter the user name"));
                    //Если кликаем по полю ввода, то скрываем подсказку и меням внешний вид текста в поле
                    searchField.focusin(function(){
                        if(searchField.val() === _("Enter the user name")){
                            searchField.val("");
                            searchField.removeClass(obj.cssPrefix+"lightGray");
                        }
                    });
                    //Если убрали фокус с поля ввода поисковой строки, и там не введено никаких данных, сбрасываем
                    //Режим поиска, и выводим подсказку поиска
                    searchField.focusout(function() {
                        if(searchField.val().length === 0){
                            //obj.searchMethod = obj.SEARCH_METHODS.ALL;
                            searchField.val(_("Enter the user name"));
                            searchField.addClass(obj.cssPrefix+"lightGray");
                        }
                    });
                    //При изменении поискового поля, сбрасываем параметры запроса к серверу,
                    //скрываем выбор способа поиска, и запускаем поиск по таймеру
                    var onFieldChange = function(event) {
                        var searchString = searchField.val();
                        if(obj.searchString === searchString){
                            return false;
                        }
                        if(searchString.length === 0){
                            obj.setDefaultServerParams(obj, true);
                        }
                        //А вот эта непонятная конструкция необходима чтобы обработать ctrl+v, а так-же если человек
                        //выделил мышкой текст и начал печатать, тем самым стерев старый текст.
                        else if(searchString !== obj.searchString.substring(0, obj.searchString.length - 1) &&
                            searchString.substring(0, searchString.length - 1) !== obj.searchString) {
                            obj.setDefaultServerParams(obj, true);
                        } else {
                            obj.setDefaultServerParams(obj, false);
                        }
                        obj.searchString = searchString;
                        obj.searchRegexp = new RegExp(searchString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'ig');
                        obj.containers.search._startSearch(obj);
                        //obj.containers.search.hideSearchMethod(obj);

                    };

                    searchField.on("propertychange", onFieldChange);
                    searchField.on("input", onFieldChange);

                    obj.containers.search._searchField = searchField;

                    //Создаем контейнер с методами поиска
                    /*var searchMethod = $('<ul class="'+obj.cssPrefix+'searchMethodSelect">');
                    //Обходим список методов в цикле, и добавляем кнопки выбора метода
                    $.each(obj.SEARCH_METHODS, function(key, method){
                        var methodName = method.charAt(0).toUpperCase() + method.slice(1);
                        var methodLocale = obj.locale.hasOwnProperty("search" + methodName)
                            ? obj.locale["search" + methodName] : methodName;
                        searchMethod.append('<li id="'+obj.prefix+method+'SearchMethod">'+methodLocale+'</li>');
                    });
                    //Если выбран один из методов поиска
                    searchMethod.find('li').click(function(){
                        var _this = $(this);
                        //Если данный метод уже выбран, ничего не делаем
                        if(_this.hasClass(obj.cssPrefix+"selected")) return;

                        //Иначе выбираем нужный
                        container.find("li").removeClass(obj.cssPrefix+"selected");
                        _this.addClass(obj.cssPrefix+"selected");

                        //Получаем метод поиска
                        var method = _this.attr("id");
                        //Число 12 - длина строки SearchMethod
                        method = method.substr(obj.prefix.length, method.length - obj.prefix.length - 12);
                        //Устанавливаем текущий метод поиска
                        obj.searchMethod = method;
                        //Сбрасываем параметры запроса к серверу
                        obj.setDefaultServerParams(obj, false);
                        //Запускаем поиск
                        obj.containers.search._startSearch(obj, true);

                    });
                    searchMethod.hide();
                    obj.containers.search._searchMethod = searchMethod;*/

                    container.append(searchFieldWrapper);
                    //container.append(searchMethod);
                    container.append('<div class="clear"></div>');

                    return $('<div class="'+obj.cssPrefix+'searchBlock">').append(container);;
                },
                /**
                 * Запус поиска по списку
                 * @param {std_obj} obj
                 * @param {Boolean} startImmediately если true, то поиск начинается без задержки
                 * @returns {undefined}
                 */
                _startSearch : function(obj, startImmediately){
                    /**
                     * текущий неймспейс
                     * @type this
                     */
                    var instance = obj.containers.search;
                    //Если уже есть запущенный таймер поиска, отключаем его
                    if(instance._searchTimer !== null){
                        clearTimeout(instance._searchTimer);
                    } else {
                        //очищаем список пользователей
                        obj.containers.list._list.empty();
                        //Выводим большой прогрессбар
                        obj.containers.list.showProgressBar(obj);
                    }
                    /**
                     * Функция поиска
                     * @param {std_obj} obj
                     * @returns {undefined}
                     */
                    var searchFn = function(obj){
                        //Загружаем следущую часть пользователей
                        obj.loadNextPart(obj,
                            /**
                             * Если загрузка списка прошла успешно
                             * @param {std_obj} obj
                             * @param {Object} data
                             * @returns {undefined}
                             */
                            function(obj, data){
                                //Скрываем большой прогрессбар
                                obj.containers.list.hideProgressBar(obj);
                                //Вручную перезапрашиваем обновление статуса
                                obj.plugins.user.updateUserStatus(obj.plugins.user);

                                //Если поиск вернул, что так-же найдены совпадения с названиями групп, то включаем
                                //Выбор метода поиска
                                /*if(data.hasOwnProperty("hasGroups")){
                                    if(data.hasGroups === true){
                                        obj.containers.search.showSearchMethod(obj);
                                    }
                                }*/
                            },
                            /**
                             * Если поиск вернул пустой список
                             * @param {std_obj} obj
                             * @returns {undefined}
                             */
                            function(obj){

                                //Скрываем большой прогрессбар
                                obj.containers.list.hideProgressBar(obj);
                                //выводим подсказку что пользователи не найдены
                                obj.containers.list.showEmpty(obj);
                            }
                        );
                    };

                    //Если необходимо запускать поиск без задержки - запускаем его
                    if(startImmediately === true){
                        searchFn(obj);
                    }
                    //Или запускаем поиск с задержкой
                    else {

                        instance._searchTimer = setTimeout(function(){
                            searchFn(obj);
                            instance._searchTimer = null;
                        }, obj.searchTypingDelay);
                    }
                },
                /**
                 * Показать методы поиска
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                /*showSearchMethod : function(obj){
                    /**
                     * @type {this._searchMethod}
                     /
                    var instance =  obj.containers.search._searchMethod;

                    instance.find("li").removeClass(obj.cssPrefix+"selected");
                    instance.find('#'+obj.prefix+obj.searchMethod+'SearchMethod').addClass(obj.cssPrefix+"selected");

                    instance.show();
                },*/
                /**
                 * Скрываем методы поиска
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                /*hideSearchMethod : function(obj){
                    obj.containers.search._searchMethod.hide();
                },*/
                /**
                 * Таймер поисковой функции
                 */
                _searchTimer : null,
                /**
                 * Поле ввода поисковой строки
                 */
                _searchField : null,
                /**
                 * Контейнер с выбором метода поиска
                 */
                //_searchMethod : null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },


            /**
             * Отрендеренный контейнер
             */
            _rendered : null
        },

        /**
         * Установить параметры запроса к серверу по умолчанию
         * @param {std_obj} obj
         * @param {Boolean} clearSearch так-же сброисить поисковые параметры
         * @returns {undefined}
         */
        setDefaultServerParams: function(obj, clearSearch){
            if(clearSearch === true){
                //obj.searchMethod = obj.SEARCH_METHODS.ALL;
                obj.searchString = "";
            }
            if(obj.ajaxProcess !== null){
                obj.ajaxProcess.abort();
                obj.ajaxProcess = null;
            }
            obj.list = {};
            obj.nextPageId = 0;
            obj.lastInsertedCount = null;
        },

        /**
         * Загрузить след. часть пользователей
         * @param {std_obj} obj
         * @param {Callback} success если список загружен успешно
         * @param {Callback} empty если список загружен успешно, но он пустой
         * @param {Callback} fail если произошла ошибка сервера
         * @param {Callback} always вызывается всегда
         * @returns {undefined}
         */
        loadNextPart : function(obj, success, empty, fail, always){
            //Если уже запущен процесс загрузки списка - прерываем его
            if(obj.ajaxProcess !== null){
                obj.ajaxProcess.abort();
            }
            //Загружаес список пользователей
            obj.loadUsersList(obj,{'nextPageId': obj.nextPageId, 'limit' : obj.loadLimit, 'searchStr' : obj.searchString,
                /**
                 * @param {std_obj} obj
                 * @param {Object} list
                 * @param {Object} params
                 * @returns {undefined}
                 */
                'successCallback' : function(obj, list, params){
                    obj.events.trigger(obj, obj.events.NEXT_PART_LOADED, [list]);

                    if(list.status === true && list.count > 0){
                        obj.nextPageId = list.nextPageId;
                        obj.addList(obj, list, params);

                        if(success !== undefined && success!==null){
                            success(obj, list, params);
                        }
                    } else {
                        obj.lastInsertedCount = 0;

                        if(empty !== undefined && empty!==null){
                            empty(obj, list, params);
                        }
                    }
                },
                'alwaysCallback' : always
            });
        },
        /**
         * Добавить список пользователей в плагин
         * @param {std_obj} obj
         * @param {Object} data
         * @param {Object} params
         * @returns {undefined}
         */
        addList : function(obj, data, params){
            //Если нет пользователей, прекращаем выполнение
            if(data.status === false){
                return;
            }
            //Счетчик добавленных
            var i = 0;
            //В цикле обходим список пользователей и добавляем их в список
            $.each(data.list, function(id, user){
                //Если пользователь уже есть в списке (такое возможно если пользователи добавлялись в реестр во время
                //просмотра списка, поэтому их последовательность смещается), то удалеям его из объекта со списком,
                //и переходим к след. пользователю
                if(obj.list.hasOwnProperty(id)){
                    delete data.list[id];
                    return true;
                }
                //Увеличиваем счетчик добавленных
                i++;
                //Добавляем пользователя в объект пользователей
                user.id = id;
                obj.list[id] = user;
                obj.list[id].htmlId = generateUniqueId(obj.prefix + 'member');
                data.list[id].htmlId = obj.list[id].htmlId;
            });
            //Записываем сколько было добавленно пользователей в последний раз
            obj.lastInsertedCount = i;
            //Добавляем html-список пользователей
            obj.containers.addList(obj, data, params);
            //Вызываем коллбэк что список был обновлен
            obj.onListUpdated(obj, data, params);
        },
        /**
         * Добавить одного пользователя в список
         * @param {std_obj} obj
         * @param {Object} member
         * @param {Object} params
         * @returns {undefined}
         */
        addMember : function(obj, member, params){
            //Если пользователь уже есть в списке (такое возможно если пользователи добавлялись в реестр во время
            //просмотра списка, поэтому их последовательность смещается), то выходим
            if(obj.list.hasOwnProperty(member.id)){
                return;
            }

            //Добавляем пользователя в объект пользователей 
            obj.list[member.id] = member;
            obj.list[member.id].htmlId = generateUniqueId(obj.prefix + 'member');
            member.htmlId = obj.list[member.id].htmlId;

            //Добавляем html-список пользователей
            obj.containers.list.addMember(obj, member, params);
            //Вызываем коллбэк что список был обновлен
            obj.onListUpdated(obj, member, params);
        },

        /**
         * Удаляет пользователя из списка
         * @param {std_obj} obj
         * @param {String} id айди пользователя
         * @returns {undefined}
         */
        removeMember : function(obj, id){
            //Если такого пользователя нет в списке, ничего не делаем
            if(!obj.list.hasOwnProperty(id)){
                return false;
            }

            //Удаляем пользователя
            obj.containers.list.removeMember(obj, id);
            delete obj.list[id];

            //Вызываем коллбэк что список был обновлен
            obj.onListUpdated(obj, obj.list, null);
        },
        /**
         * Процесс запроса к серверу
         */
        ajaxProcess : null,
        /**
         * Загружает список пользователей с сервера
         * @param {std_obj} obj
         * @param {Object} params
         * @returns {undefined}
         */
        loadUsersList : function(obj, params){
            //Если не переданны параметры запроса, то ничего не делаем
            if(params === undefined || params === null) return;

            var nextPageId = params.nextPageId;
            var limit = params.limit;
            var searchStr = params.searchStr;
            var successCallback = params.successCallback;
            var failCallback = params.failCallback;
            var alwaysCallback = params.alwaysCallback;

            if(searchStr === undefined || searchStr === null) searchStr = "";

            if(nextPageId === undefined){
                nextPageId = 0;
            }
            if(limit === undefined){
                limit = 0;
            }

            obj.inUpdate = true;
            obj.ajaxProcess = $.getJSON(obj.handlers.userList,
                { 'page' : nextPageId, 'limit' : limit, 'searchStr' : searchStr},
                function(json){})
                .done(function(json) {
                    if(successCallback !== undefined && successCallback !== null) {
                        successCallback(obj, json, params);
                    }
                })
                .fail(function() {
                    if(failCallback !== undefined && failCallback !== null) {
                        failCallback(obj, params);
                    }
                })
                .always(function() {
                    if(alwaysCallback !== undefined && alwaysCallback !== null){
                        alwaysCallback(obj, params);
                    }
                    obj.inUpdate = false;
                    obj.ajaxProcess = null;
                });
        },

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////CALLBACKS/////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Если навели мышь на пользователя
         * @param {std_obj} obj
         * @param {Object} member
         * @param {jQuery} container
         * @param {Event} event
         * @returns {undefined}
         */
        mouseOnMember : function(obj, member, container, event){
        },
        /**
         * Если убрали мышь с пользователя
         * @param {std_obj} obj
         * @param {Object} member
         * @param {jQuery} container
         * @param {Event} event
         * @returns {undefined}
         */
        mouseOutMember : function(obj, member, container, event){
        },
        /**
         * Если кликнули по пользователю
         * @param {std_obj} obj
         * @param {Object} member
         * @param {jQuery} container
         * @param {Event} event
         * @returns {undefined}
         */
        onMemberClick : function(obj, member, container, event){
        },
        /**
         * Если был обновлен список, например в него добавились пользователи
         * @param {std_obj} obj
         * @param {Object} list список пользователей
         * @param {Object} queryParams параметры, с которыми выполнялся запрос к серверу
         * @returns {undefined}
         */
        onListUpdated : function(obj, list, queryParams){

        },

        onUserStatusUpdated : function(obj, data){

        },
        /**
         * Вызывается перед добавлением пользователя в список пользователей. Коллбэк обязан вернуть два параметра -
         * либо объект jQuery (оригинальный или другой, это не важно), и тогда этот пользователь будет добавлен в список,
         * либо false, null, undefined и т.д., и тогда этот пользователь не будет добавлен
         * @param {std_obj} obj объект данного плагина
         * @param {Object} member объект этого пользователя
         * @param {jQuery} container html-контейнер этого пользователя
         * @returns {unresolved}
         */
        beforeMemberAdd : function(obj, member, container){
            return container;
        },
        /**
         * Вызывается, когда был создан плагин
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCreated : function(obj){
        },

        events : {
            NEXT_PART_LOADED : 1,

            list : {},

            add : function(obj, id, originalContext, callback){
                if(!obj.events.list.hasOwnProperty(id)){
                    obj.events.list[id] = [];
                }

                var callable = {};
                callable.context = originalContext;
                callable.callback = callback;

                obj.events.list[id].push(callable);
            },

            trigger : function(obj, id, data){
                if(!obj.events.list.hasOwnProperty(id)){
                    return false;
                }

                var callableList = obj.events.list[id];

                if(data !== undefined){
                    data.push(obj);
                } else {
                    data = [obj];
                }

                for(var i = 0; i<callableList.length; i++){
                    callableList[i].callback.apply(callableList[i].context, data);
                }
            }
        },
        /**
         * Объект хранящий плагины
         */
        plugins : {
            user : null,

            /**
             * Инициализируем плагины
             * @param {std_obj} obj
             * @returns {Boolean}
             */
            init : function(obj){
                //Если был добавлен плагин пользователей, то добавляем слушателей обноыления статусов пользователей
                if(obj.plugins.user === null){
                    return false;
                }

                obj.plugins.user.addUpdateListener(obj.containers.member.updateMembersStatus, {'obj' : obj});
                obj.plugins.user.addErrorListener(obj.containers.member.setDefaultMembersStatus, {'obj' : obj});

                return true;
            }
        }
    };

    $.fn.memberListPlugin = function(params){
        var plugin = this.data('memberListPlugin');
        if(plugin === undefined || plugin === false){
            var plugin = $.extend(true, {}, std_obj);
            $.extend(true, plugin, $.memberListPlugin);
            $.extend(true, plugin, params);
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            plugin.parent = this;

            if(!plugin.plugins.init(plugin)){
                this.append('<div>Error<div>');
                return;
            }

            this.append(plugin.get(plugin));
            this.data('memberListPlugin', plugin);
            plugin.onCreated(plugin, params);

        }
        return plugin;
    };



})(jQuery);