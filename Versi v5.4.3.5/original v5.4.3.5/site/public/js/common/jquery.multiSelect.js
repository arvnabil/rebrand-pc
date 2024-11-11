/* global generateUniqueId */

(function($){    
    
    var defaultParams = {
        defaultDescription : 'empty',
        counterDescription : 'selected item(s): %count',
        maxHeight: 150,
        counterIfNotFit : true,
        events : {
            onItemSelect : function(){},
            onItemDeselect : function(){},
            onListHide : function(){},
            onListShow : function(){}
        }
    };
    
    function Model(params){
        var instance = this;
        var prefix = "multiSelect";
        
        var items = {};
        var itemsIdMap = {};
        
        var selectedItems = {};
        var selectedCount = 0;
        
        var generateDomId = function(){
            return '';
        };
        
        (function construct(){
            if(typeof generateUniqueId === "function"){
                generateDomId = function(){
                    return generateUniqueId(prefix);
                };
            }
        })();
        

        this.addItem = function(id, title, description, selected){
            if(itemsIdMap.hasOwnProperty(id)){
                return false;
            }
            
            var domId = generateDomId();
            var item = new Item(id, domId, title, description);
            items[domId] = item;
            itemsIdMap[id] = domId;
            
            if(selected){
                this.selectItem(domId);
            }
            
            return item;
        };

        
        this.getItems = function(){
            return items;
        };
        
        this.selectItem = function(itemId){
            selectedCount++;
            selectedItems[itemId] =  items[itemId];
        };
        
        this.deselectItem = function(itemId){
            selectedCount--;
            delete selectedItems[itemId];
        };
        
        this.getItem = function(itemId){
            return items[itemId];
        };
        
        this.getSelectedItems = function(){
            return selectedItems;
        };
        
        this.getSelectedItemsIds = function(){
            var ids = [];
            for (var domId in selectedItems) {
                ids.push(selectedItems[domId].getRealId());
            };
            return ids;
        };

        this.getDeselectedDomIds = function(){
            const ids = [];
            for (var domId in items) {
                if (this.isItemSelected(items[domId].getDOMId())) {
                    continue;
                }
                ids.push(items[domId].getDOMId());
            }
            return ids;
        };

        this.isItemSelected = function(itemId){
            return selectedItems.hasOwnProperty(itemId);
        };
        
        this.countSelected = function(){
            return selectedCount;
        };
        
        this.getSelectedTitle = function(){
            var titles = [];
            for(var key in selectedItems){
                var item = selectedItems[key];
                titles.push(item.getTitle());
            }
            
            return titles.join(', ');
        };
        
        this.getItemDomId = function(id){
            return itemsIdMap[id];
        };
            
        function Item(id, domId, title, description){
            
            this.getDescription = function(){
                return description;
            };
            
            this.getTitle = function(){
                return title;
            };
            
            this.getRealId = function(){
                return id;
            };
            
            this.getDOMId = function(){
                return domId;
            };
        };
        
         
    }
    
    
    function DomEvents(){
        
        this.onItemSelect = function(itemId){
            
        };
        
        this.onItemDeselect = function(itemId){
            
        };
        
        this.onListShow = function(){};
        this.onListHide = function(){};
    };
    
    
    function View(parent, params, domEvents){
        var instance = this;
        var container, spinnerBlock, shadeBlock, descriptionBlock, listBlock, itemsTable, expandBtn;
        
        var idPrefs = {
            "row" : "row_",
            "checkbox" : "checkbox_"
        };
        
        var listVisible = false;
        
        
        (function construct(){
            render();
        })();
        
        function render(){
            parent.empty();
            
            container = $('<div class="multiselect">');
            
            renderSpinner();
            renderShade();
            renderDescription();
            renderExpandBtn();
            renderList();
            
            descriptionBlock.add(expandBtn).click(function(){
                if(listVisible){
                    instance.hideList();
                } else {
                    instance.showList();
                }
            });
            
            parent.append(container);
        }
        
        
        function renderDescription(){
            descriptionBlock  = $('<div class="description"></div>');
            container.append(descriptionBlock);
        }
        
        function renderExpandBtn(){
            expandBtn = $('<div class="arrow"></div>');
            container.append(expandBtn);
        }
        
        function getItemIdPrefix(type){
            return idPrefs.hasOwnProperty(type) ? idPrefs[type] : "";
        };
        
        function createDomItemId(type, id){
            return getItemIdPrefix(type) + '' + id;
        }
        
        function getItemId(type, domId){
            return domId.substr(getItemIdPrefix(type).length);
        }

        function renderList(){
            listBlock = $('<div class="list"></div>');
            listBlock.css("max-height", params.maxHeight + "px");
            
            itemsTable = $('<div class="itemsTable"></div>');
            listBlock.append(itemsTable);            
            container.append(listBlock);
        }
        
        function renderSpinner(){
            spinnerBlock = $('<div class="spinner"></div>');
            spinnerBlock.css("display", "none");
            container.append(spinnerBlock);
        }
        
        function renderShade(){
            shadeBlock = $('<div class="shade"></div>');
            shadeBlock.css("display", "none");
            container.append(shadeBlock);
        }
        
        function onItemClick(event){
            var itemId = getItemId("checkbox", this.id);
            var checked = $(this).prop("checked");
            
            if(checked){
                domEvents.onItemSelect(itemId);
            } else {
                domEvents.onItemDeselect(itemId);
            }
        }
        
        function onItemBlockClick(event){
            if (event.target.type && event.target.type === 'checkbox') {
                return;
            }
            
            var listId = getItemId("row", this.id);
            var checkboxId = createDomItemId('checkbox', listId);
            $('#' + checkboxId).click();
        }
        
        function onDocumentClick(event){
            if(container.find(event.target).length !== 0){
                return true;
            }
            
            instance.hideList();
        }
        
        function getBiggestParentNodeHeight(){           
            var currentHeight = 0;
            var node = container.get(0);
            while((node = node.parentNode) !== null){
                if(node.scrollHeight > currentHeight){
                    currentHeight = node.scrollHeight;
                }
            }
            
            return currentHeight;
        }
        
        function canDropDownList(listHeight){
            listHeight = listHeight ? listHeight :  params.maxHeight;
            var listEndY = container.offset().top + container.height() + listHeight;
            return getBiggestParentNodeHeight() > listEndY;
        };
        
        this.getDescriptionWidth = function(){
            return descriptionBlock.width();
        };
        
        this.setDescription = function(description){
            descriptionBlock.empty();
            descriptionBlock.text(description);
        };
        
        this.showSpinner = function(){
            spinnerBlock.show();
        };
        
        this.hideSpinner = function(){
            spinnerBlock.hide();
        };
        
        this.enable = function(){
            shadeBlock.hide();
        };
        
        this.disable = function(){
            shadeBlock.show();
        };
        
        this.showList = function(){
            expandBtn.addClass("up");
            
            if(canDropDownList()){
                listBlock.addClass("down");
            }  else {
                listBlock.addClass("up");
                var listHeight = listBlock.height();
                if(canDropDownList(listHeight)){
                    listBlock.removeClass("up").addClass("down");
                }
            }
            
            $(document).on("click", onDocumentClick);
            listVisible = true;
            
            domEvents.onListShow();
        };
        
        
        this.hideList = function(){
            expandBtn.removeClass("up");
            listBlock.removeClass("down").removeClass("up");
            $(document).off("click", onDocumentClick);
            listVisible = false;
            
            domEvents.onListHide();
        };
        
        this.clearList = function(){
            itemsTable.empty();
        };
        
        this.addItem = function(id, description, checked){
            var row = $('<div></div>');
            var rowId = createDomItemId('row', id);
            row.attr("id", rowId);
            itemsTable.append(row);
            row.click(onItemBlockClick);

            var checkboxCell = $('<div></div>');
            var checkbox = $('<input type="checkbox" />');
            var checkboxId = createDomItemId('checkbox', id);
            checkbox.attr("id", checkboxId);
            if(checked){
                checkbox.prop("checked", true);
            }
            checkbox.click(onItemClick);
            checkboxCell.append(checkbox);
            row.append(checkboxCell);

            var descriptionCell = $('<div></div>');
            var descrptionBlock = $('<div></div>');
            descrptionBlock.text(description);
            descriptionCell.append(descrptionBlock);
            row.append(descriptionCell);
        };
        
        
        this.changeItemState = function(id){
            var checkboxId = createDomItemId('checkbox', id);
            var elem = $('#' + checkboxId);
            elem.click();
        };

        this.disableItem = function(id){
            const checkboxId = createDomItemId('checkbox', id);
            const elem = $('#' + checkboxId);
            elem.prop("disabled", true);
            elem.css({opacity: "40%", cursor: "default"});

            const rowId = createDomItemId('row', id);
            const row = $('#' + rowId);
            row.css({cursor: "default"})
            row.children().eq(1).children().eq(0).css({opacity: "26%"})
        }

        this.enableItem = function(id){
            const checkboxId = createDomItemId('checkbox', id);
            const elem = $('#' + checkboxId);
            elem.prop("disabled", false);
            elem.css({opacity: 1, cursor: "pointer"});

            const rowId = createDomItemId('row', id);
            const row = $('#' + rowId);
            row.css({cursor: "pointer"})
            row.children().eq(1).children().eq(0).css({opacity: 1})
        }
    };
    
    /**
     * 
     * @param {Model} model
     * @param {View} view
     * @param {object} params
     * @param {DomEvents} domEvents
     * @returns {Controller}
     */
    function Controller(model, view, params, domEvents){    
        var instance = this;
        
        
        this.addItem = function(id, title, description, selected){
            if(typeof description === "boolean"){
                selected = description;
                description = title;
            } else if(typeof description === 'undefined'){
                description = title;
                selected = false;
            }
            
            return model.addItem(id, title, description, selected);
        };
        
        this.refreshList = function(){
            var items = model.getItems();
            
            view.clearList();
            for(var domId in items){
                view.addItem(domId, items[domId].getDescription(), model.isItemSelected(domId));
            }
            
            updateDescription();
        };
        
        this.showSpinner = function(){
            view.disable();
            view.showSpinner();
        };
        
        this.hideSpinner = function(){
            view.hideSpinner();
            view.enable();
        };
        
        this.disable = function(){
            view.disable();
        };
        
        this.enable = function(){
            view.enable();
        };
        
        this.selectItem = function(id, isRendered){
            var domId = model.getItemDomId(id);
            if(model.isItemSelected(domId)){
                return;
            }
            
            if(isRendered !== false){
                view.changeItemState(domId);
            } else {
                model.selectItem(domId);
            }
        };
        
        this.getSelectedItemsIds = function(){
            return model.getSelectedItemsIds();
        };

        this.disableItem = function(id){
            return view.disableItem(id)
        }
        
        function updateDescription(){
            var selected = model.countSelected() ;
            if(selected === 0){
                view.setDescription(params.defaultDescription);
            } else {
                var description = model.getSelectedTitle();
                if(params.counterIfNotFit){
                    if(description.length * 9 > view.getDescriptionWidth()){
                        description = params.counterDescription.replace("%count", selected).replace("%n", selected);
                    }
                }
                view.setDescription(description);
            }
        };
        
        domEvents.onItemSelect = function(itemId){
            model.selectItem(itemId);
            updateDescription();
            params.events.onItemSelect(itemId, model.getItem(itemId).getRealId(), view, model);
        };
        
        domEvents.onItemDeselect = function(itemId){
            model.deselectItem(itemId);
            updateDescription();
            params.events.onItemDeselect(itemId, model.getItem(itemId).getRealId(), view, model);
        };
        
        domEvents.onListShow = function(){
            params.events.onListShow(view, model);
        };
        
        domEvents.onListHide = function(){
            params.events.onListHide();
        };
    };
    
    Controller.createInstance = function(container, params, onCreate, onFailCreate){
        if(params === undefined){
            params = {};
        }
        
        var domEvents = new DomEvents();
        
        var view = new View(container, params, domEvents);
        var model = new Model(params);
        
        var controller = new Controller(model, view, params, domEvents);
        
        if(typeof onCreate === "function"){
            onCreate(controller);
        }
    };    
    
    $.multiSelectPlugin = {};
    
    $.multiSelectPlugin.bind = function(params, container){
        return container.multiSelectPlugin(params);
    };
    
    $.fn.multiSelectPlugin = function(params, onCreate, onFail){
        params = $.extend(true, $.extend(true, {}, defaultParams), params);
        createPlugin(this, params, onCreate, onFail);
        return this;
    };
    
    function createPlugin(container, params, onCreate, onFail){
        Controller.createInstance(container, params, function(controller){
            if(onCreate !== undefined){
                onCreate.call(container, controller, params);
            }
        }, function(){
            if(onFail !== undefined){
                onFail.call();
            }
        });
        
        return true;
    }
       
    
})(jQuery);