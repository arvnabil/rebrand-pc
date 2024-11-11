function TC_LDAPLoginGroup(node, handler){

    function Model(){
        
        this.loadGroupList = function(handler, searchString, onSuccess, onFail){
            $.ajax({
                url: handler,
                data : {
                    cn : searchString
                },
                success: function(data){
                    if(data.status){
                        onSuccess(data.list);
                    } else {
                        onFail(data.error);
                    }
                },
                fail : onFail,
                dataType: 'json'
            });
        };
        
    };
    
    
    function Controller(){
        
        var self = this;
        
        var view;
        var model;
        
        
        var currentList = {};
        
        this.onGroupSelect = function(dn){};
        
        function refreshList(){
            view.showProgressBar();
            currentList = {};
            model.loadGroupList(handler, view.getSearchText, onGetList, onFailGetList);
        };
        
        
        function onFailGetList(){
            view.setTooltipText(_('No groups found'));
        };
        
        function onGetList(list){
            if(!list){
                view.setTooltipText(_('No groups found'));
                return;
            }
                        
            
            var domList = {};
            for(var dn in list){
                var key = generateUniqueId("entry");
                currentList[key] = dn;
                domList[key] = list[dn].displayName;
            }
            
            view.setEntries(domList);
        }
        
        function onEntryClick(id){
            if(currentList[id]){
                self.onGroupSelect(currentList[id]);
            }
        }
        
        (function construct(){
            view = new View();
            model = new Model();
            
            view.onSearchButtonClick = refreshList;
            view.onEntryClick = onEntryClick;
        }).call(this);
        
    };
    
    
    
    function View(){
        
        var self = this;
        
        var searchField;
        var searchButton;
        
        var tooltipWrapper;
        var tooltip;
        var list;
        
        
        this.setEntries = function(entries){
            list.innerHTML = "";
            tooltipWrapper.style.display = "none";
            list.style.display = "block";
            
            
            for(var key in entries){
                var li = document.createElement('li');
                li.innerText = entries[key];
                li.id = key;
                list.appendChild(li);
            }
        };
        
        
        this.getSearchText = function(){
            return searchField.value;
        };
        
        this.setTooltipText = function(text){
            list.style.display = "none";
            tooltipWrapper.style.display = "table";
            
            tooltip.className = "";
            tooltip.innerText = text;
        };
        
        
        this.showProgressBar = function(){
            list.style.display = "none";
            tooltipWrapper.style.display = "table";
            
            tooltip.className = "progressBar";
            tooltip.innerText = "";
        };
        
        
        this.onSearchButtonClick = function(){};
        
        this.onEntryClick = function(id){};
        
        
        function createTooltip(parentNode){
            tooltipWrapper = document.createElement('div');
            tooltipWrapper.className = "tooltip";
            parentNode.appendChild(tooltipWrapper);
            
            tooltip = document.createElement('div');
            tooltip.innerText = _('Enter a search request');
            tooltipWrapper.appendChild(tooltip);
        }
        
        function createList(){
            var listWrapper = document.createElement('div');
            listWrapper.className = "list";
            node.appendChild(listWrapper);
            
            createTooltip(listWrapper);
            
            list = document.createElement('ul');
            list.style.display = "none";
            listWrapper.appendChild(list);
            
            list.onclick = function(event){
                if(event.target === list){
                    return;
                }
                
                self.onEntryClick(event.target.id);
            };
        }
        
        function createSearchBlock(){
            var searchFiledWrapper = createSearchField();
            var searchButtonWrapper = createSearchButton();
            
            var searchBlock = document.createElement('div');
            searchBlock.className = "searchBlock";
            node.appendChild(searchBlock);
            
            searchBlock.appendChild(searchFiledWrapper);
            searchBlock.appendChild(searchButtonWrapper);
        }
        
        function createSearchField(){
            var div = document.createElement('div');
            
            searchField = document.createElement('input');
            searchField.type = "text";
            
            div.appendChild(searchField);
            
            
            $(searchField).placeholder(_('Search: enter group name'))
                    .on("input", onSearchFieldChage)
                    .keyup(function(event){
                            if(event.keyCode === 13){
                                searchButton.click();
                            }
                    });
            
            return div;
        }
        
        function onSearchFieldChage(){
            if(searchField.value.length === 0){
                searchButton.disabled = true;
                searchButton.className = "disabled";
            } else {
                searchButton.disabled = false;
                searchButton.className = "";
            }
        }
        
        function reset(){
            searchButton.disabled = true;
            searchButton.className = "disabled";
        }
        
        function createSearchButton(){
            var div = document.createElement('div');
            
            searchButton = document.createElement('input');
            searchButton.type = "button";
            searchButton.value = "🔍";
            div.appendChild(searchButton);
            
            searchButton.onclick = function(){
                searchButton.disabled = true;
                searchButton.className = "disabled";
                self.onSearchButtonClick();
            };
            return div;
        }
        
        
        (function construct(){
            createSearchBlock();
            createList();
            reset();
        })();
    };
    
    
    
    return new Controller();
    
}