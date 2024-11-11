(function($){
    /**
     * Конструктор класса
     * @param {Object} obj
     * @returns {ConferencesList}
     */
    var ConferencesList = function(obj){
        
    };
    
    /**
     * Предопределяет методы плагина. Предопределяет "глобально", т.е. во всех плагинах на странце будут данные параметры
     * если необходимо предопределять параметры для определенного плагина, то надо передавать их или в метод jquery плагина,
     * либо в ConferencesList.bind()
     * @param {Object} items
     * @returns {undefined}
     */
    ConferencesList.prototype.init = function(items){
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
    ConferencesList.prototype.bind = function(container, items){
        return container.conferencesListPlugin(items);
    };
    
    /**
     * Основной объект плагина
     * @type Object
     */
    var std_obj = {
        
        prefix : 'cfl',
        cssPrefix : 'cfl_',
        
        handlers : {
            conferenceList : "/admin/conferences/getList"
        },
        
        locale : {
            conferenceList : 'Список групповых конференций',
            
        },
        
        _main : function(obj){
            obj._loadList(obj);
            return obj.containers.get(obj);
        },
        
        containers : {
            get : function(obj){
                var container = $('<fieldset id="conferences-list"></fieldset>');
                container.append('<legend>'+obj.locale.conferenceList+'</legend>');
                
                return container;
            },
            
            topActions : {
                buttonCreate : {
                    get : function(obj){
                        if(obj.containers.buttons.buttonCreate._rendered === null){
                            obj.containers.buttons.buttonCreate._rendered
                        }
                        
                    },
                    _render : function(obj){
                        
                    },
                    _rendered : null
                },
            }
            
        },
        
        _loadList : function(obj){
            obj._loadListXHR = obj._loadListXhr = $.getJSON(obj.handlers.conferenceList)
                    .done(function(data, textStatus, jqXHR){
                        for(var key in data){
                            var conference = data[key];
                    
                            $('#tst').append('<p>' + conference.topic + '</p>');
                        }
                        
                    })
                    .fail(function(jqXHR, textStatus, errorThrown){
                        
                    })
                    .always(function(data, textStatus, jqXHR){
                        
                    });
        },
        _loadListXHR : null,
        
        onCreated : function(obj){
            
        },
        
        parentObj : null
    };
    
        
    /**
     * Плагин выбора элементов из выпадающего списка
     */
    $.conferencesListPlugin = new ConferencesList();
    
    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {ConferencesList}
     */ 
    $.fn.conferencesListPlugin = function(params){
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('conferencesListPlugin');
        //Если плагин не найден, или false создаем его
        if(plugin === undefined || plugin === false){
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина и класс Multicheck
            $.extend(true, plugin, $.conferencesListPlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            this.append(plugin._main(plugin));
            //Сохраняем объект плагина в данные контейнреа
            this.data('conferencesListPlugin', plugin);
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };
    
})(jQuery);

