(function($){
    /**
     * Конструктор класса
     * @param {Object} obj
     * @returns {Multicheck}
     */
    var Multicheck = function(obj){
        
    };
    
    /**
     * Предопределяет методы плагина. Предопределяет "глобально", т.е. во всех плагинах на странце будут данные параметры
     * если необходимо предопределять параметры для определенного плагина, то надо передавать их или в метод jquery плагина,
     * либо в Multicheck.bind()
     * @param {Object} items
     * @returns {undefined}
     */
    Multicheck.prototype.init = function(items){
        if(items !== undefined && typeof items === 'object' && items !== null){
            $.extend(true, std_obj, items);
        }
    };
    
    /**
     * Добавляет плагин к элементу
     * @param {jQuery} container
     * @param {Object} items
     * @returns {undefined}
     */
    Multicheck.prototype.bind = function(container, items){
        return container.multicheckPlugin(items);
    };
    
    /**
     * Основной объект плагина
     * @type Object
     */
    var std_obj = {
        /**
         * Префикс для айди
         */
        prefix : 'mlc',
        /**
         * Префикс для css
         */
        cssPrefix : 'mlc_',

        /**
         * Локализация плагина
         */
        locale : {
            selectItem : 'Select items:',
            selected : 'Items selected: '
        },
        
        /**
         * Список, с элементами для выбора . Должен иметь след. формат
         * Айди чекбокса прописывается в его value
         * id : {
         *          //Обязательные
         *          text : "текст для вывода на экран",
         *          //Необязательные
         *          id : "Уникальный ид чекбокса",
         *          description : "Описание чекбокса (вылазиет при наведении мыши",
         *          name : "Параметр name у чекбокса",
         *          disabled : true, //Отключен или включен
         *          onChecked : callback(obj, id, data, container){}, //Ф-я, вызываемая при выборе чекбокса
         * }
         */
        list :{
        },
        /**
         * Точка входа в плагин
         * @param {std_obj} obj
         * @returns {jQuery}
         */
        _main : function(obj){
            //Получаем контейнер
            var container =  obj.containers.get(obj);
            //Если небыло добавлено ни одного элемента в список, то отключаем его
            if(obj.count(obj) === 0){
                obj.disable(obj);
            }

            return container;
        },
        /**
         * Рендеринг html данных
         */
        containers : {
            /**
             * Возвращает контейнер плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            get : function(obj){
                if(obj.containers._rendered === null){
                    obj.containers._rendered = obj.containers._render(obj);
                }
                return obj.containers._rendered;
            },
            /**
             * Рендерит контейнер плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render : function(obj){
                //Создаем контейнер
                var container = $('<div id="' + obj.prefix + 'multicheck" class="' + obj.cssPrefix + 'multicheck"></div>');
                //Контейнер для псевдо <select>
                var fieldContainer = $('<div class="' + obj.cssPrefix + 'dropdown"></div>');
                //Контейнер для засерения
                obj.containers.disabledField = $('<div class="' + obj.cssPrefix + 'disabled" style="display: none"></div>');
                fieldContainer.append(obj.containers.disabledField);
                //Добавляем описание для контейнера
                fieldContainer.append(obj.containers.tooltip.get(obj));  
                //Добавляем кнопки открытия / скрытия списка
                var actionButton = obj.containers.actionButton.get(obj);
                fieldContainer.append(actionButton);
                
                fieldContainer.append('<div class="clear"></div>');
                //Добавляем клик по контейнеру, чтобы открывать / скрывать список не только по клику на кнопку открытия
                fieldContainer.click(function(event){
                    //Для того чтобы список нормально открывался, надо проверять не является ли обьект кнопкой открытия списка
                    //(actionButton является ребенком fieldContainer, поэтому при триггере на actionButton, так-же сработает
                    //клик fieldContainer
                    var target = $(event.target);
                    if(target.is(actionButton) || target.parent().is(actionButton) || obj.disabled === true){
                        return;
                    }

                    actionButton.trigger("click");
                });
                //Добавляем контейнер 
                container.append(fieldContainer);
                
                //Добавляем список
                container.append(obj.containers.list.get(obj));
                
                return container;
            },
            
            
            disabledField : null,
            /**
             * Кнопки открытия / скрытия списка
             */
            actionButton : {
                /**
                 * 
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get : function(obj){
                    if(obj.containers.actionButton._rendered === null){
                        obj.containers.actionButton._rendered = obj.containers.actionButton._render(obj);
                    }

                    return obj.containers.actionButton._rendered;
                },
                /**
                 * Рендер кнопок открытия списка
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render : function(obj){
                    //Контейнер кнопок
                    var container = $('<div class="' + obj.cssPrefix + 'btnArrow"></div>');
                    //Создаем кнопку открытия списка
                    obj.containers.actionButton._downArrow = $('<div class="' + obj.cssPrefix + 'downArrow">&nbsp;</div>');
                    container.append(obj.containers.actionButton._downArrow);
                    //создаем кнопку сокрытия списка
                    obj.containers.actionButton._upArrow = $('<div class="' + obj.cssPrefix + 'upArrow" '
                            + ' style="display: none">&nbsp;</div>');
                    container.append(obj.containers.actionButton._upArrow);
                    //Хэндлер для сокртытия списка по нажатию на любое место страницы
                    var handler = function(event){
                        obj.containers.actionButton._documentHide(obj, event);
                    };
                    //Если кликнули по кнопке
                    container.click(function(){
                        //Если список на данный момент открыт, то сворачиваем его
                        if(obj.expanded === true){
                            obj.collapse(obj);
                            $(document).unbind("click", handler);
                        }
                        //Если список скрыт, то разворачиваем его
                        else {
                            obj.expand(obj);
                            $(document).bind("click", handler);
                        }
                    });
                    return container;
                },
                /**
                 * Сокрытие выпадающего списка по нажатию на свободное место
                 * @param {std_obj} obj
                 * @param {Event} event
                 * @returns {undefined}
                 */
                _documentHide : function(obj, event){
                    //Получаем элемент вызывавший событие
                    var target = $(event.target);   
                    //Определяем, не принадлежит-ли элемент по которому кликнули, контейнеру плагина,
                    //и если принадлежит то ничего не делаем
                    if(target.parents('#' + obj.prefix + 'multicheck').length > 0 
                            || target.is(obj.containers.actionButton._downArrow)
                            || target.is(obj.containers.actionButton._upArrow)) return;
                    //Просто свернуть нельзя, т.к. тогда непонятно как unbind-ить document.click.
                    //поэтому кликаем по кнопке закрытия
                    obj.containers.actionButton.get(obj).trigger("click");
                },
                /**
                 * Стрелка вниз
                 */
                _downArrow : null,
                /**
                 * Стрелка вверх
                 */
                _upArrow : null,
                /**
                 * отрендеренный контейнер
                 */
                _rendered : null
            },
            /**
             * Подсказка на контейнере разворачивания списка
             */
            tooltip : {
                /**
                 * 
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get : function(obj){
                    if(obj.containers.tooltip._rendered === null){
                        obj.containers.tooltip._rendered = obj.containers.tooltip._render(obj);
                    }

                    return obj.containers.tooltip._rendered;
                },
                /**
                 * Рендерит контейнер
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render : function(obj){
                    //Создаем контейнер
                    var container = $('<div class="' + obj.cssPrefix + 'tooltip"></div>');
                    //Создаем контейнер для описания
                    obj.containers.tooltip._textField = $('<span></span>');
                    container.append(obj.containers.tooltip._textField);
                    //Устанавливаем текст
                    obj.containers.tooltip.text(obj, obj.locale.selectItem);
                    return container;
                },
                /**
                 * Устанавливает текст подсказки
                 * @param {std_obj} obj
                 * @param {String} text
                 * @returns {String}
                 */
                text : function(obj, text){
                    //Если параметр text не передан, то просто возвращаем текущий текст
                    if(text === undefined){
                        return obj.containers.tooltip._textField.text();
                    } else {
                        //Иначе устанваливаем новый текст
                        obj.containers.tooltip._textField.text(text);
                        return text;
                    }
                },
                /**
                 * Контейнер для текста с подсказкой
                 */
                _textField : null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered : null
            },
            /**
             * Сам выпадающий список
             */
            list : {
                /**
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
                 * Рендерит список 
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render : function(obj){
                    //Создаем контейнер
                    var container = $('<div class="' + obj.cssPrefix + 'optionListWrapper" style="display: none"></div>');
                    //Создаем внтунтренний контейнер
                    var inner = $('<div class="' + obj.cssPrefix + 'optionList"></div>');
                    //Создаем список
                    var ul = $('<ul id="' + obj.prefix + 'list"></ul>');
                    //Добавляем список
                    inner.append(ul);
                    obj.containers.list._list = ul;
                    //Если список не существует, либо не объект, либо его длина равна 0 - то ничего не делаем,
                    //иначе - заполняем список
                    if(obj.list !== undefined && typeof obj.list === 'object' && countObject(obj.list) > 0){
                        obj.containers.list._addList(obj, obj.list);
                    }
                    
                    //Добавляем внутренний контейнер к родительскому
                    container.append(inner);
                    
                    return container;
                },
                /**
                 * Перезагрузить список
                 * @param {std_obj} obj
                 * @returns {undefined}
                 */
                _refresh : function(obj){
                    //Получаем список
                    var ul = obj.containers.list._list;
                    //Очищаем список
                    ul.empty();
                    //Если со списком все впорядке,то добавляем его
                    if(obj.list !== undefined && typeof obj.list === 'object' && countObject(obj.list) > 0){
                        obj.containers.list._addList(obj, obj.list);
                    }
                },
                /**
                 * Добавляет к списку объект со списокм записей
                 * @param {std_obj} obj
                 * @param {Object} list
                 * @returns {undefined}
                 */
                _addList : function(obj, list){
                    //Получаем контейнер списка
                    var ul = obj.containers.list._list;
                    //Обходим объект списка в цикле, и добавляем к нему новые записи
                    $.each(list, function(key, data){
                        //Создаем элемент списка
                        var li = obj.containers.list._createEntry(obj, key, data);
                        
                        //Добавляем элемент к списку
                        ul.append(li);
                    });
                },
                /**
                 * Удаляет список элементов
                 * @param {std_obj} obj
                 * @param {Object} list
                 * @returns {undefined}
                 */
                _removeList : function(obj, list){
                    //Получаем контейнер списка
                    var ul = obj.containers.list._list;
                    //Обходим объект списка в цикле, и добавляем к нему новые записи
                    $.each(list, function(key, data){
                        //Удаляем элемент
                        ul.find('#' + data.entryId).remove();
                    });
                },
                /**
                 * Добавляет элемент в список
                 * @param {type} obj
                 * @param {type} key
                 * @param {type} value
                 * @returns {undefined}
                 */
                _addItem : function(obj, key, value){
                    var list = obj.containers.list._list;
                    //Создаем элемент списка
                    var item = obj.containers.list._createEntry(obj, key, value);

                    //Добавляем элемент к списку
                    list.append(item);
                },
                /**
                 * Создаем элемент списка
                 * @param {std_obj} obj
                 * @param {String} key
                 * @param {Object} data
                 * @returns {undefined}
                 */
                _createEntry : function(obj, key, data){
                    //Создаем элемент списка
                    var li = $('<li id="' + data.entryId + '"></li>');
                    //Создаем чекбокс выбора элемента списка
                    var checkbox = $('<input type="checkbox"  value="'+ key + '" />');
                    //Добавляем чекбокс к элементу списка
                    li.append(checkbox);
                    
                    //Добавляем описание элемента
                    var text = $('<span></span>');
                    //Если есть параметр text, то добавляем его
                    if(data.hasOwnProperty("text")){
                        text.text(data.text);
                        li.attr("title", escapeHtml(data.text));
                    }
                    //Иначе используем ключ
                    else {
                        text.text(key);
                        li.attr("title", escapeHtml(data.key));
                    }
                    li.append(text);
        
                    //Если есть параметр id, то добавляем его
                    if(data.hasOwnProperty("id")){
                        li.attr("id", data.id);
                    }
                    
                    //Если есть параметр description, то используем его как title
                    if(data.hasOwnProperty("description")){
                        li.attr("title", data.description);
                    }
                    
                    //Если есть параметр name
                    if(data.hasOwnProperty("name")){
                        checkbox.attr("name", data.name);
                    } 
                    
                    //Если есть флаг отключения, то отключаем элемент
                    if(data.hasOwnProperty("disabled")){
                        if(data.disabled === true){
                            checkbox.prop("disabled", true);
                            li.addClass(obj.cssPrefix + 'disabledItem');
                        }
                    }
                    //Если есть коллбэк выбора элемента
                    if(data.hasOwnProperty("onChecked")){
                        checkbox.click(function(){
                            data.onChecked(obj, key, data, checkbox);
                        });
                    }
                    
                    //Добавляем обработчик клика на чекбокс по умолчанию
                    checkbox.click(function(event){
                        obj.containers.list._defaultCheckboxClickHandler(obj, event, this);
                    });
                    //Добавляем обработчик клика на элемент списка по умолчанию
                    li.click(function(event){
                        obj.containers.list._defaultListItemClickHandler(obj, event, this);
                    });
                    
                    return li;
                },
                /**
                 * Удаляет элемент из списка
                 * @param {std_obj} obj
                 * @param {String} key
                 * @returns {undefined}
                 */
                _removeItem : function(obj, key){
                    var list = obj.containers.list._list;
                    list.find('#' + obj.list[key].entryId).remove();
                },
                /**
                 * Обрабаотчик нажатий на чекбоксы
                 * @param {std_obj} obj
                 * @param {Event} event
                 * @param {HTMLElementObject) checkbox
                 * @returns {undefined}
                 */
                _defaultCheckboxClickHandler : function(obj, event, checkbox){
                    //По нажатию обновляем текст подсказки
                    obj.updateTooltip(obj);
                    //Если чекбокс был выбран
                    if(checkbox.checked){
                        //Запускаем коллбэки
                        obj.onItemsStateChange(obj, "select",  this.value, obj.list[this.value]);
                        obj.onItemSelected(obj, this.value, obj.list[this.value]);

                    }
                    //Если элемент не был выбран
                    else {
                        //Запускаем коллбэки
                        obj.onItemsStateChange(obj, "deselect",  this.value, obj.list[this.value]);
                        obj.onItemDeselected(obj, this.value, obj.list[this.value]);
                    }
                },
                /**
                 * Обработчик нажатий на элемент списка
                 * @param {std_obj} obj
                 * @param {Event} event
                 * @param {HTMLElementObject} item
                 * @returns {undefined}
                 */
                _defaultListItemClickHandler : function(obj, event, item){
                    var target = $(event.target);
                    //Если кликнули на элемент, но это был чекбокс, то ничего не делаем
                    if(target.is(':checkbox')){
                        return;
                    }
                    //Иначе счиатем, что кликнули на чекбокс
                    $(item).children('input:checkbox').trigger("click");
                },
                 /**
                  * Контейнер со списком
                  */
                _list : null,
                /**
                 * Отрендеренный контейнер
                 */
                _rendered : null
            },
            /**
            * Отрендеренный контейнер
            */
            _rendered: null
        },
        /**
         * Развернуть список
         * @param {std_obj} obj
         * @returns {undefined}
         */
        expand : function(obj){
            //Скрываем кнопку разворачивания списка
            obj.containers.actionButton._downArrow.hide();
            //Выводим кнопку сворачивания списка
            obj.containers.actionButton._upArrow.show();        
            //Показываем список
            obj.containers.list.get(obj).show();
            //Вызываем коллбэки
            obj.onStateChange(obj, "expand");
            obj.onExpand(obj);
            //Ставим флаг, что список развернут
            obj.expanded = true;
        },
        /**
         * Мержит список пользователей
         * @param {Object} list
         * @param {std_obj} obj
         * @returns {undefined}
         */
        mergeList : function(obj, list){
            //Для того, чтобы не обнулялось выделение уже выбранных элементов, их нельзя удалять,
            //если они присутствуют в новом списке. Поэтому обходим в цикле список всех уже добавленных 
            //элементов, если такой элемент присутсвует в новом списке - то
            //такой элемент добавлять не надо, он уже есть. Если их значения разные - добавляем элемент. 
            //Ну, и если элемент отсутсвует в переданном списке - удаляем его из основного списка
            for(var key in obj.list){
                //Если такой элемент уже есть в основном списке, то удаляем его из нового списка
                if(list.hasOwnProperty(key)){
                    delete list[key];
                    continue;
                } else {
                    //Если такого элемента нет в новом списке, то удаляем его из основного списка
                    obj.removeItem(obj, key);
                }
            }

            //Если со списком все впорядке,то добавляем его
            if(countObject(list)){
                //Добавляем список
                obj.addList(obj, list);
            }
        },
        /**
         * Добавить в список новый список элементов
         * @param {std_obj} obj
         * @param {Object} list
         * @returns {undefined}
         */
        addList : function(obj, list){
            //Проверяем есть-ли в списке параметры entryId, если нет, то создаем их
            $.each(list, function(key, value){
                if(value.hasOwnProperty('entryId')){
                    return true;
                }
                //Добавляем параметр
                list[key].entryId = generateUniqueId(obj.prefix + '_entry');
            });
            $.extend(true, obj.list, list);
            obj.containers.list._removeList(obj, list);
            obj.containers.list._addList(obj, list);
        },
        /**
         * Удаляет элемент из списка
         * @param {std_obj} obj
         * @param {String} key
         * @returns {undefined}
         */
        removeItem : function(obj, key){
            obj.containers.list._removeItem(obj, key);
            delete obj.list[key];
        },
        /**
         * Добавляет новый параметр в список
         * @param {std_obj} obj
         * @param {String} key
         * @param {Object} value
         * @returns {undefined}
         */
        addItem : function(obj, key, value){
            if(obj.list.hasOwnProperty(key)){
                return;
            }
            
            if(!value.hasOwnProperty("entryId")){
                value.entryId = generateUniqueId(obj.prefix + "_entry");
            }
            
            obj.list[key] = value;
            obj.containers.list._addItem(obj, key, value);
        },
        /**
         * Свернуть список
         * @param {std_obj} obj
         * @returns {undefined}
         */
        collapse : function(obj){
            //Скрываем кнопку сворачивания списка
            obj.containers.actionButton._upArrow.hide();  
            //Выводим кнопку разворачивания списка
            obj.containers.actionButton._downArrow.show();  
            //Скрываем список
            obj.containers.list.get(obj).hide();
            
            //Вызываем коллбэки
            obj.onStateChange(obj, "collapse");
            obj.onCollapse(obj);
            
            //Ставим флаг, что список свернут
            obj.expanded = false;
        },
        
        /**
         * Развернут-ли список
         * @param {std_obj} obj
         * @returns {boolean}
         */
        isExpanded : function(obj){
            return obj.expanded;
        },
        /**
         * Перерендерить списо
         * @param {std_obj} obj
         * @returns {undefined}
         */
        refreshList : function(obj){
            obj.containers.list._refresh(obj);
        },
        /**
         * Возвращает объект со всеми выбранными элементами
         * @param {std_obj} obj
         * @returns {obj.list}
         */
        getSelectedItems : function(obj){
            var values = {};
            var list = obj.containers.list._list.find('input:checked');
            list.each(function(){
                values[this.value] = obj.list[this.value];
            });
            return values;
        },
        /**
         * Возвращает айди выбранных элементов
         * @param {std_obj} obj
         * @returns {Array}
         */
        getSelectedIds : function(obj){
            var values = [];
            
            var list = obj.containers.list._list.find('input:checked');
            list.each(function(){
                values.push(this.value);
            });
            
            return values;
        },
        /**
         * Отключает все элементы
         * @param {std_obj} obj
         * @returns {undefined}
         */
        uncheckAll : function(obj){
            var list = obj.containers.list._list.find('input:checked');
            list.trigger("click");
        },
        /**
         * Считает, сколько элементов выбранно
         * @param {std_obj} obj
         * @returns {int}
         */
        countSelected : function(obj){
            return obj.containers.list._list.find('input:checked').length;
        },
        /**
         * Считает, сколько элементов не выбранно
         * @param {std_obj} obj
         * @returns {int}
         */
        countDeselected : function(obj){
            return obj.containers.list._list.find('input:not(checked)').length;
        },
        /**
         * Cчитает общее количество элементов в списке
         * @param {std_obj} obj
         * @returns {int}
         */
        count : function(obj){
            return obj.containers.list._list.find('input').length;
        },
        
        /**
         * Обновляет текстовую подсказку кол-ва выбранных элементов
         * @param {std_obj} obj
         * @returns {undefined}
         */
        updateTooltip : function(obj){
            var count = obj.countSelected(obj);
            //Если не выбран ни один элемент - выводим текст, что ничего не выбранно
            if(count === 0){
                obj.containers.tooltip.text(obj, obj.locale.selectItem);
                return;
            }
            //Выводим текст с кол-вом выбранных элементов
            obj.containers.tooltip.text(obj, obj.locale.selected + count);
        },
        /**
         * Отключает выпадающий список
         * @param {std_obj} obj
         * @returns {undefined}
         */
        disable : function(obj){
            obj.containers.disabledField.show();
            obj.disabled = true;
        },
        
        /**
         * Включает выпадающий список
         * @param {std_obj} obj
         * @returns {undefined}
         */
        enable : function(obj){
            obj.containers.disabledField.hide();
            obj.disabled = false;
        },
        /**
         * Коллбэк, вызывается при создании плагина
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCreated : function(obj){
        },
        /**
         * Коллбэк, вызывается когда изменяется выпадающий список
         * @param {std_obj} obj
         * @param {String} state "expanded" - если список развернули, "collapsed" - если список свернули
         * @returns {undefined}
         */
        onStateChange : function(obj, state){
            
        },
        /**
         * Коллбэк, сообщающий что список был развернут
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onExpand : function(obj){
            
        },
        /**
         * Коллбэк, что список был свернут
         * @param {std_obj} obj
         * @returns {undefined}
         */
        onCollapse : function(obj){
            
        },
        /**
         * Если был выбран или снят выбор с одного из элементов списка
         * @param {std_obj} obj
         * @param {String} state "checked" или "unchecked"
         * @param {String} key ключ элемента, вызвавшего коллбэк
         * @param {Object} value
         * @returns {undefined}
         */
        onItemsStateChange : function(obj, state, key, value){
            
        },
        /**
         * Если элемент был выбран
         * @param {std_obj} obj
         * @param {String} key
         * @param {String} value
         * @returns {undefined}
         */
        onItemSelected : function(obj, key, value){
        },
        /**
         * Если выбор с элемента был снят
         * @param {std_obj} obj
         * @param {String} key
         * @param {String} value
         * @returns {undefined}
         */
        onItemDeselected : function(obj, key, value){
            
        },
        
        /**
         * Родительский объект (объект, к которому был вызыван плагин)
         */
        parentObj : null,
        /**
         * Раскрыт или скрыт список
         */
        expanded : false,
        /**
         * Отключен или включен список
         */
        disabled : false
    };
    
    /**
     * Плагин выбора элементов из выпадающего списка
     */
    $.multicheckPlugin = new Multicheck();
    
    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {Multicheck}
     */ 
    $.fn.multicheckPlugin = function(params){
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('multicheckPlugin');
        //Если плагин не найден, или false создаем его
        if(plugin === undefined || plugin === false){
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина и класс Multicheck
            $.extend(true, plugin, $.multicheckPlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            this.append(plugin._main(plugin));
            //Сохраняем объект плагина в данные контейнреа
            this.data('multicheckPlugin', plugin);
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };
    
})(jQuery);