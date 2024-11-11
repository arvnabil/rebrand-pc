(function($){
    
    var TYPE_SYMMETRIC = 0;
    var TYPE_ASYMMETRIC = 1;
    var TYPE_ROLE_BASED = 3;
    
    
    var schemesListHandler = "/admin/conferences/schemesList/";
    
    
    $.conferenceSchemaPlugin = {};
    $.conferenceSchemaPlugin.regional = {};
    
    $.conferenceSchemaPlugin.bind = function(params, container){
        return container.conferenceSchemaPlugin(params);
    };
    
    $.fn.conferenceSchemaPlugin = function(params){
        var plugin = this.data('conferenceSchemaPlugin');
        if(plugin === undefined){
            params = $.extend(true, $.extend(true, {}, defaultParams), params);
            plugin = createPlugin(this, params);
            this.data('conferenceSchemaPlugin', plugin);
        }

        return this;
    };
    
    
   
  
    
    function Schemes(schemes){
        
        var schemesIds;
        var affectedFlags = {};
        
        (function construct(){  
            init();
        })();
        
        
        this.getSchemaDescription = function(type){
            switch(type){
                case TYPE_ROLE_BASED:
                    return _("In role-based mode all participants see and hear several casters. Anyone can start casting, if invited or approved by host.");
                case TYPE_ASYMMETRIC:
                    return _("In asymmetric mode conference owner sees all participants and all participants see the host.");
                case TYPE_SYMMETRIC:
                    return _("In symmetric mode all participants see each other.");
            }
        };

        this.getSchemaName = function(type){
            switch(type){
                case TYPE_ROLE_BASED:
                    return _("Role-based");
                case TYPE_ASYMMETRIC:
                    return  _("Asymmetric");
                case TYPE_SYMMETRIC:
                    return _("Symmetric");
            }
        };
        
        this.countSchemes = function(){
            return countObject(schemes);
        };
        
        this.getList = function(flags){
            if(typeof flags !== "number"){
                flags = Schemes.FLAGS.NONE;
            }
            
            var list = {};
            
            for(var key in schemes){
                
                list[key] = this.getSchema(key, flags);
            }
            return list;
        };
        
        this.getSchema = function(schemaId, flags){            
            var schema = {};
            schema.id = schemes[schemaId].id;
            schema.isSelectable = schemes[schemaId].isSelectable;
            schema.maxParticipants = this.getMaxParticipants(schemaId, flags);
            schema.podiums = this.getPodiums(schemaId, flags);
            if(schemes[schemaId].isSelectable && schemes[schemaId].hasOwnProperty("podiumsDepend")){
                schema.podiumsDepend = this.getPodiumsDepend(schemaId, flags);
            }
            return schema;
        };
        
        this.countSchemes = function(){
            return schemesIds.length;
        };
        
        this.getPodiumsDepend = function(schemaId, flags){
            return schemes[schemaId].podiumsDepend[affectedFlags[schemaId].podiumsDepend & flags];
        };
        
        this.getMaxParticipants = function(schemaId, flags){
            return schemes[schemaId].maxParticipants[affectedFlags[schemaId].maxParticipants & flags];
        };
        
        this.getPodiums = function(schemaId, flags){
            return schemes[schemaId].podiums[affectedFlags[schemaId].podiums & flags];
        };
        
        this.isSelectableSchema = function(schemaId){
            return schemes[schemaId].isSelectable;
        };
        
        this.getOriginalSchemesList = function(){
            return schemes;
        };
        
        this.destruct = function(){
        };
        
        this.getSchemesIds = function(){            
            return schemesIds;
        };
        
        function init(){
            schemesIds = [];
            
            
            for(var key in schemes){
                schemesIds.push(key);
                
                affectedFlags[key] =  {};
                sumFlags(key, "podiums");
                sumFlags(key, "maxParticipants");
                if(schemes[key].isSelectable && schemes[key].hasOwnProperty("podiumsDepend")){
                    sumFlags(key, "podiumsDepend");
                }
            }
            
            function sumFlags(key, name){
                for(var flag in schemes[key][name]){
                    affectedFlags[key][name] |= flag;
                }
            }
        }
    }
    
    Schemes.FLAGS = {
        NONE : 0,
        WEBINAR : 1,
        UDP : 2
    };
    $.conferenceSchemaPlugin.FLAGS = Schemes.FLAGS;
    
    
    Schemes.createInstance = function(schemesListHandler, conferenceId, onSuccess, onFail){
        var instance = this;
        
        if(typeof onSuccess !== "function"){
            console.error("invalid callback");
            return false;
        }
        
        
        $.getJSON(schemesListHandler, {key : conferenceId })
            .done(function(data){
                var schemes = new Schemes(data);
                onSuccess.call(schemes, schemes);
            })
            .fail(function(xhr, status, error){
                typeof onFail === "function" ? onFail.call(instance, status, error) : null;
            });
            
        return true;
    };
    
    function SchemesView(parent){
        
        var container;
        var schemesTable;
        
        (function construct(){
            parent.empty();
            
            container = createContainer();
            parent.append(container);
        })();
        
        
        function SchemesTable(){
            var numSchemes  = 0;
            
            var cols = 1;
            var rows = 1;
            var rem = 1;
            
            var container;
            var colgroup;
            var renderedCells = [];
            var renderedSchemaInstances = {};
            
            
            (function construct(){
                container = createContainer();
                colgroup = $('<colgroup></colgroup>');
                
                container.append(colgroup);
            })();
            
            
            this.getRenderedSchema = function(schemaId){       
                if(renderedSchemaInstances.hasOwnProperty(schemaId)){
                    return renderedSchemaInstances[schemaId];
                }
                
                return null;
            };
            
            this.getRenderedSchemesList = function(){
                return renderedSchemaInstances;
            };
            
            this.addSchema = function(renderedSchema){
                numSchemes++;
                renderedSchemaInstances[renderedSchema.getId()] = renderedSchema;
                
                
                var td = createTableCell();
                renderedCells.push(td);
                
                var c = renderedSchema.getContainer();
                td.append(c);
         
                refreshTable();
            };
            
            
            this.removeSchema = function(schemaId){
                /*numSchemes--;
                
               */
            };
            
            this.getContainer = function(){
                return container;
            };
            
            
            function createContainer(){
                return $('<table class="schemaTable"></table>');
            }
            
            function createTableCell(){
                return $('<td></td>');
            }
            
            
            function refreshTable(){
                recalcParams();
                refreshColgroup();
                
                var rowsList = container.find('tr');
                
                var i = 0;
                for(var y = 0; y<rows; y++){
                    var tr = rowsList[y] ? $(rowsList[y]) : $('<tr></tr>');
                    for(var x = 0; x<cols; x++){
                        if(i === renderedCells.length){
                            break;
                        }
                        
                        if(i ===  renderedCells.length - 2){
                            renderedCells[i].removeAttr("colspan");
                        }
                        
                        if(rem !== 0){
                            if(i === renderedCells.length - 1){
                                renderedCells[i].attr("colspan", cols - rem + 1);
                            }
                        }

                        tr.append(renderedCells[i]);   
                        i++;
                    }

                    container.append(tr);
                }
            }
            
            
            function recalcParams(){
                cols = Math.ceil(Math.sqrt(numSchemes));
                rows = Math.ceil(numSchemes / cols);
                rem = numSchemes % cols;
            };
            
            function refreshColgroup(){
                colgroup.empty();
                
                var colWidth = 100 / cols;
                
                for(var i = 0; i<cols; i++){
                    colgroup.append('<col width="' + colWidth + '%" />');
                }
            }
        };
        
        
        this.getSchemesTable = function(){
            if(schemesTable !== undefined && schemesTable !== null){
                return schemesTable;
            }
            
            schemesTable =  new SchemesTable();
            container.append(schemesTable.getContainer());
            return schemesTable;
        };
        
        this.destruct = function(){
            
        };
        
        
        function createContainer(){
            var c = $('<div class="tc-plugin-ui"></div>');
            c.append('<div class="smallTitle">'+ _('Choose conference mode') +':</div>');
            
            return c;
        }
        
    };
    
    function RenderedSchema(schemaId){

        var instance = this;

        var container;

        var dataContainer;
        var counterContainer;
        var counterObject;

        var titleContainer;
        var descriptionContainer;
        var iconContainer;
        var sizeDescriptionContainer;


        var clickCallbacks = [];

        (function construct(){
            container = createContainer();  

            container.click(function(){
                for(var i = 0; i<clickCallbacks.length; i++){
                    clickCallbacks[i].call(instance, schemaId);
                }
            });
        })();

        this.getContainer = function(){
            return container;
        };

        this.getId = function(){
            return schemaId;
        };

        this.setTitle = function(title){
            titleContainer.text(title);
        };

        this.setDescription = function(description){
            descriptionContainer.text(description);
        };

        this.setIcon = function(url, alt){
            var icon = $('<img src="' + url + '" />');
            icon.attr("alt", alt);
            iconContainer.append(icon);
        };

        this.setSizeDescription = function(description){
            sizeDescriptionContainer.text(description);
        };

        this.click = function(callback){
            clickCallbacks.push(callback);
        };

        this.setCounter = function(schemaCounter){
            counterObject = schemaCounter;
            
            counterContainer.empty();
            counterContainer.append(schemaCounter.getContainer());
            counterContainer.show();
        };
        
        this.hasCounter = function(){
            return counterObject !== undefined;
        };
        
        this.getCounter = function(){
            return counterObject;
        };

        this.enableHighlight = function(){
            container.addClass("selected");
        };

        this.disableHighlight = function(){
            container.removeClass("selected");
        };

        function createContainer(){
            var c = $('<div id="schema_' + schemaId + '" class="selectableBlock contentPadding confTypeSelectionSide"></div>');

            dataContainer = $('<td class="schemaEntry"></td>');
            counterContainer = $('<td style="display: none; width: 20%" class="schemaCounterBlock"></td>');
            c.append($('<table><tr></tr></table>').append(dataContainer).append(counterContainer));

            titleContainer = $('<div class="schemaTitle"></div>');
            dataContainer.append(titleContainer);

            iconContainer = $('<div class="schemaIcon"></div>');
            dataContainer.append(iconContainer);                

            descriptionContainer = $('<div class="schemaDescription"></div>');
            dataContainer.append(descriptionContainer);
            dataContainer.append('<div class="clear"></div>');

            sizeDescriptionContainer = $('<div class="sizeDescription"></div>');
            dataContainer.append(sizeDescriptionContainer);

            return c;
        };
    };
    
    
    
    function SchemaCounter(schemaId){
        
        var container;
        
        var onChangeCallbacks = [];
        
        (function construct(){
            container = createContainer();
            
            container.change(function(){
                var current = container.find('option:selected');
                
                for(var i = 0; i<onChangeCallbacks.length; i++){
                    onChangeCallbacks[i].call(this, schemaId, current.val(), current.text());
                }
            });
        })();
        
        this.getContainer = function(){
            return container;
        };
        
        this.getSelectedValue = function(){
            var currentNode = container.find('option:selected');
            return currentNode.val();
        };
        
        this.change = function(callback){
            onChangeCallbacks.push(callback);
        };
        
        this.disable = function(){
            container.addClass("disabled");
        };
        
        this.enable = function(){
            container.removeClass("disabled");
        };
        
        this.setValues = function(values){
            container.empty();
            for(var key in values){
                var option = $('<option id="schemaCounter_'+schemaId+'_option_'+key+'">');
                option.attr("value", key);
                option.text(key + "x" + values[key]);
                container.append(option);
            }
            option.prop("selected", true);
        };
        
        this.setSelected = function(key){
            container.find('#schemaCounter_'+schemaId+'_option_'+key).prop("selected", true);
        };
        
        function createContainer(){
            return $('<select class="fullBlock blueText usersCounter disabled" id="schemaCounter_' 
                    + schemaId + '" name="schemaCounter_'+ schemaId + '">');
        };
    };
    
    SchemaCounter.TYPE_SELECT = 1;
    
    /**
     * 
     * @param {Schemes} schemesModel
     * @param {SchemesView} schemesView
     * @returns {conferenceSchemaPlugin2L#15.SchemesController}
     */
    function SchemesController(schemesModel, schemesView){    
        var instance = this;
        
        var currentPodiums = 6;
        var currentSchemaId;
        var currentFlags = Schemes.FLAGS.NONE;
        
        (function construct(){
            render();
        })();
        
        this.setUserEvents = function(events){
            userEvents = $.extend(true, userEvents, events);
        };
        
        var userEvents = {
            
        };
        
        this.refreshTable = function(){
            var table = schemesView.getSchemesTable();
            var list = schemesModel.getList(currentFlags);
            
            for(var schemaId in list){
                var schema = list[schemaId];
                var renderedSchema = table.getRenderedSchema(schemaId);
                
                if(schema.hasOwnProperty('podiumsDepend')){
                    var counter = renderedSchema.getCounter();
                    counter.setValues(schema.podiumsDepend);
                    counter.setSelected(currentPodiums);
                } else {
                    renderedSchema.setSizeDescription(schema.podiums + 'x' + schema.maxParticipants);
                }
            }
        };
        
        function render(){
            var table = schemesView.getSchemesTable();
            
            var list = schemesModel.getList(currentFlags);
            
            for(var schemaId in list){
                var schema = list[schemaId];
                var renderedSchema = new RenderedSchema(schemaId);
                
                renderedSchema.setTitle(schemesModel.getSchemaName(schema.id));
                renderedSchema.setDescription(schemesModel.getSchemaDescription(schema.id));
                renderedSchema.setIcon('/images/schema_id_' + schemaId + '.png');
                
                if(schema.hasOwnProperty('podiumsDepend')){
                    var counter = new SchemaCounter(schemaId);
                    counter.setValues(schema.podiumsDepend);
                    counter.change(function(schemaId, podiums){
                        if(currentSchemaId !== schemaId){
                            return;
                        }
                        
                        currentPodiums = parseInt(podiums);
                    });
                    renderedSchema.setCounter(counter);
                } else {
                    renderedSchema.setSizeDescription(schema.podiums + 'x' + schema.maxParticipants);
                }
                                
                renderedSchema.click(function(id){
                    instance.setCurrentSchemaId(id);
                });
                table.addSchema(renderedSchema);
            }

        };
        
        function chahgeSelectedSchema(oldId, newId){
            var table = schemesView.getSchemesTable();

            if(oldId !== undefined){
                var oldSchema = table.getRenderedSchema(oldId);
                oldSchema.disableHighlight();
                if(oldSchema.hasCounter()){
                    oldSchema.getCounter().disable();
                }
            }
            
            var newSchema = table.getRenderedSchema(newId);
            
            newSchema.enableHighlight();
            if(newSchema.hasCounter()){
                var counter = newSchema.getCounter();
                counter.enable();
                
                currentPodiums = parseInt(counter.getSelectedValue());
            }
        };
        
     
        
        this.setCurrentSchemaId = function(schemaId){
            chahgeSelectedSchema(currentSchemaId, schemaId);
            currentSchemaId = schemaId;
        };
        
        this.setCurrentPodiums = function(podiums){
            currentPodiums = podiums;
            
            if(!schemesModel.isSelectableSchema(currentSchemaId)){
                return;
            }
            
            var renderedSchema = schemesView.getSchemesTable().getRenderedSchema(currentSchemaId);
            var counter = renderedSchema.getCounter();
            counter.setSelected(currentPodiums);
        };
        
        this.setFlags = function(flags){
            currentFlags = flags;
            this.refreshTable();
        };
       
       
        this.getCurrentSchema = function(){
            return schemesModel.getSchema(currentSchemaId, currentFlags);
        };
        
        this.getCurrentSchemaId = function(){
            return currentSchemaId;
        };
        
        this.getCurrentPodiums = function(){
            return currentPodiums;
        };
        
        this.getCurrentSchemaShortDescription = function(){
            var schema = schemesModel.getSchema(currentSchemaId, currentFlags);
            
            var str = schemesModel.getSchemaName(schema.id);
            var sizeDescription = "";
            
            if(schema.isSelectable){
                sizeDescription = currentPodiums + "x" + schema.podiumsDepend[currentPodiums];
            } else {
                sizeDescription = schema.podiums + 'x' + schema.maxParticipants;
            }
            
            str += " " + sizeDescription;
            
            return str;
        };
        
        this.getCurrentMaxParticipants = function(){
            var schema = schemesModel.getSchema(currentSchemaId,currentFlags);
            
            if(!schema.isSelectable){
                return schema.maxParticipants;
            } else {
                return schema.podiumsDepend[currentPodiums];
            }
        };
    }
    
    SchemesController.createInstance = function(container, params, onCreate, onFailCreate){
        if(params === undefined){
            params = {};
        }
        
        if(typeof onCreate !== "function"){
            console.error("invalid callback");
            return false;
        }
        
        var status = true;
        
        var model, view;
        var listHandler = params.hasOwnProperty("schemesListHandler") ? 
                    params.schemesListHandler : schemesListHandler;
                   
        var conferenceId = params.hasOwnProperty('conferenceId') ? params.conferenceId : null;
                    
        function checkValid(){
            if(model !== undefined && view !== undefined){
                return true;
            }
        };
        
        function createController(){
            var controller = new SchemesController(model, view);
            if(params.hasOwnProperty("events")){
                controller.setUserEvents(params.userEvents);
            }
            
            if(params.hasOwnProperty("flags")){
                controller.setFlags(params.flags);
            }
            
            if(model.countSchemes() === 0){
                onCreate.call(controller, controller);
                return;
            }
            
            if(params.hasOwnProperty("schemaId")){
               controller.setCurrentSchemaId(params.schemaId);
            } else {
                controller.setCurrentSchemaId(model.getSchemesIds()[0]);
            }
            
            if(params.hasOwnProperty("podiums")){
                controller.setCurrentPodiums(params.podiums);
            }
            
            
            onCreate.call(controller, controller);
        };
        
        function failCreate(){
            status = false;
            
            if(model !== undefined){
                model.destruct();
            }
            if(view !== undefined){
                view.destruct();
            }
            
            typeof onFailCreate === "function" ? onFailCreate() : null;
        }
        

        
        view = new SchemesView(container);
        
        Schemes.createInstance(listHandler, conferenceId, function(schemes){
            if(!status){
                return;
            }
            
            model = schemes;
            
            if(checkValid()){
                createController();
            }
        }, function(){
            failCreate();
        });
        
    };
   
    var defaultParams = {
        
    };
    
    function createPlugin(container, params){
        var onSuccess, onFail;
        if(params.hasOwnProperty("events")){
            onSuccess = params.events.hasOwnProperty("onSuccessInit") ? 
                    params.events.onSuccessInit : function(){};
            onFail = params.events.hasOwnProperty("onFailInit") ? 
                    params.events.onFailInit : function(){};
        }

        SchemesController.createInstance(container, params, function(controller){
            if(onSuccess !== undefined){
                onSuccess.call(container, controller, params);
            }
        }, function(){
            if(onFail !== undefined){
                onFail.call(container, params);
            }
        });
        
        return true;
    }
       
    
})(jQuery);