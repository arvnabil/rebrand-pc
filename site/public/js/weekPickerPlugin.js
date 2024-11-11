(function($){
    
    
    
    var WeekPicker = function(){
        $.extend(WeekPicker.prototype, params);
    };
    
    WeekPicker.prototype.get = function(){
        var wrapper = $('<div class="ui-weekpicker-wrapper" id="dayOfWeekContainerWrapper" >');
        wrapper.append(this.getContainer());
        wrapper.append('<br class="clear" />');
        wrapper.append('<br/>');
        return wrapper;
    };
    
    var params = {
        locale: {
            monday : _("Monday"),
            tuesday : _("Tuesday"),
            wednesday : _("Wednesday"),
            thursday : _("Thursday"),
            friday : _("Friday"), 
            saturday : _("Saturday"),
            sunday : _("Sunday"),

            mon : _("mon"),
            tue : _("tue"),
            wed : _("wed"),
            thu : _("thu"),
            fri : _("fri"),
            sat : _("sat"),
            sun : _("sun")
        },
        holidays : true,
        sundayFirst : true,
        fieldName : 'weekday',
        weekdays : {
            monday : 0,
            tuesday : 1,
            wednesday : 2,
            thursday : 3,
            friday : 4,
            saturday : 5,
            sunday : 6
        },
        weekdaysList : ['mon','tue','wed','thu','fri','sat','sun'],
        getContainer : function(){

            var container = $('<div class="ui-weekpicker" id="dayOfWeekContainer">');
            var arrowButton = this.actionButton.container;
            arrowButton.append(this.actionButton.downArrow);
            container.append(arrowButton);
            
            var description = this.description;
            description.text(_("no selection"));
            container.append(description.container);  
            
            var list = this.createList();
            container.append(list);
            
            container.append('<br class="clear"/>');
    
            this._addActions();
    
            return container;
        },
        createList : function(){
            var instance= this;
            
            this.list.container = $('<div class="option-list hidden">');
            if(this.listHeight !== null && typeof this.listHeight === "number"){
                this.list.container.css("height", this.listHeight + "px");
            }
            var list = $('<ul>');
            
            
            $.each(this.weekdays, function(day, numday){
                var checkbox = $('<input type="checkbox" name="' + instance.fieldName + '[]"  value="'+ numday + '" />');
                var listEntry = $('<li></li>');
                listEntry.append(checkbox);
                listEntry.append('<span>' + instance.locale[day] + '</span>');
                list.append(listEntry);
                
                listEntry.click(function(event){
                    if(event.target.nodeName.toLowerCase() !== "input"){
                        checkbox.trigger("click");
                    }
                });
                
                checkbox.change(function(){
                    instance._updateDescription(checkbox);
                    instance.onChange(checkbox.val());
                });
            });
            this.list.container.append(list);
      
            return this.list.container;
        },
        actionButton : {
            container : $('<div class="btn-arrow"></div>'),
            downArrow : $('<div class="down-arrow">&nbsp;</div>'),
            upArrow : $('<div class="up-arrow">&nbsp;</div>')
        },
        description : {
            container : $('<div class="descr"><span></span></div>'),
            text : function(text){
                if(text === undefined){
                    return this.container.find('span').text();
                } else {
                    this.container.find('span').text(text);
                    return text;
                }
            }
        },
        getDays : function(){
            var instance = this;
            var items = this.list.container.find(":checked");
            var values = [];
            $.each(items, function(index, item){
                var value = parseInt(item.value);
                
                if(instance.sundayFirst){
                    if(value === 6){
                        value = 0;
                    } else {
                        value++;
                    }
                }
                values.push(value);
            });
            return values;
        },
        setDays : function(days){
            if(this.sundayFirst){
                days.push(days[0]);
                days = days.slice(1);
            }
            var items = this.list.container;
            var checkbox = items.find(":checkbox");
            $.each(checkbox, function(index,item){
                var i = days[item.value];
                if(i === undefined) return true;
                
                if(i === 0 || i=== -1 || i===false){
                    item.checked = false;
                } else {
                    item.checked = true;
                }
            });
            
            this.description.text(this._createDescription(checkbox));
        },
        list : {
            container : null,
            show : function(params){
                $.weekpicker.beforeShow();
                this.container.show();
                this.visible = true;
                
                params.actionButton.container.empty();
                params.actionButton.container.append(params.actionButton.upArrow);
                
                
                $(document).bind("click", function(event){
                    params.list._documentHide(event, params);
                });
                $.weekpicker.onShow();
            },
            hide : function(params){
                $.weekpicker.beforeClose();
                this.container.hide();
                this.visible = false;
                
                params.actionButton.container.empty();
                params.actionButton.container.append(params.actionButton.downArrow);
                
                $(document).unbind("click", this._documentHide);
                $.weekpicker.onClose();
            },
            _documentHide : function(event, params){
                var target = $(event.target);   
                if(target.parents('#dayOfWeekContainerWrapper').length > 0 
                        || target.is(params.actionButton.downArrow)
                        || target.is(params.actionButton.upArrow)) return;
                params.list.hide(params);
            },
            visible : false
        },
        _addActions : function(){
            var instance = this;
            
            this.actionButton.container.add(this.description.container).click(function(){
                if(instance.list.visible){
                    instance.list.hide(instance);
                } else {
                    instance.list.show(instance);
                }
            });
            
            /*var list = this.list.container.find('li');
            var checkboxes = list.find(':checkbox');
            
            list.add(checkboxes).click(function(){
                instance._updateSelect($(this), checkboxes);
                
                var day = $(this).val();
                instance.onChange(day);
            });*/
        },
        _updateDescription : function(){
            var checkboxes = this.list.container.find(':checkbox');
            var description = this._createDescription(checkboxes);
            this.description.text(description);
            
        },
        _createDescription : function(checkboxes){
            var instance = this;
            var items = [];
            $.each(checkboxes, function(index, item){
                item = $(item);
                
                if(item.is(":checked")){
                    var value = item.prop("value");
                    var name = instance.weekdaysList[value];
                    if(name === undefined){
                        name = value;
                    } else {
                        name = instance.locale[name];
                    }
                    items.push(name);
                }
            });
            if(items.length > 0){
                return items.join(', ');
            } else {
                return _("no selection");
            }
        },
        beforeShow : function(){
            
        },
        onShow : function(){
            
        },
        beforeClose : function(){
            
        },
        onClose : function(){
            
        },
        onChange : function(day){
            
        },
        /**
         * Высота списка в пикселях
         */
        listHeight : null
    };
    
    
    
    $.weekpicker = new WeekPicker();
    
    
    $.fn.weekpicker = function(params){
        if(this.data("weekPickerInit")!==true){
            if(params !== undefined && params !== null && typeof params === 'object'){
                $.extend(true, $.weekpicker, params);
            }
            this.data("weekPickerInit", true);
            this.append($.weekpicker.get());
        } 
        
        return $.weekpicker;
    };
    
    
    
})(jQuery);

