/* global generateUniqueId */

(function($){    
    /**
     * 
     * @type Array
     */
    var instances = {};
    
    /**
     * Поддерживаются-ли стандартные плейсхолдеры
     * @type boolean
     */
    var supportNativePlaceholders = (function(){
        var input = document.createElement('input');
        return "placeholder" in input;
    })();
    
    
    function TCPlaceholder(node, fieldType){
        
        var text = "";
        var hasPlaceholder = true;
        
        this.setText = function(value){
            text = value;
            
            if(node.val().length === 0 && document.activeElement !== node[0]){
                node.val(value);
                
                if(fieldType === TCPlaceholder.FIELD_PASSWORD){
                    node.prop("type", "text");
                    hasPlaceholder = true;
                }
            }
        };
        
        
        this.destroy = function(){
            node.off("blur", onBlur);
            node.off("focus", onFocus);
            
            if(hasPlaceholder){
                node.val("");
                if(fieldType === TCPlaceholder.FIELD_PASSWORD){
                    node.prop("type", "password");
                }
            }
        };
        
        
        this.getNode = function(){
            return node;
        };
        
        
        function onBlur(){
            if(this.value.length === 0){
                if(fieldType === TCPlaceholder.FIELD_PASSWORD){
                    node.prop("type", "text");
                }
                node.val(text);
                node.addClass("placeholder");
                hasPlaceholder = true;
            }
        };
        
        function onFocus(){
            if(hasPlaceholder){
                node.val("");
                node.removeClass("placeholder");
                hasPlaceholder = false;

                if(fieldType === TCPlaceholder.FIELD_PASSWORD){
                    node.prop("type", "password");
                }
            }
        };
        
        (function construct(){
            node.on("blur", onBlur);
            node.on("focus", onFocus);
        }).call(this);
        
    };
    
    TCPlaceholder.FIELD_TEXT = 1;
    TCPlaceholder.FIELD_PASSWORD = 2;
    
    
    
    function createInstanceId(){
        var id = Math.random();
        if(instances.hasOwnProperty(id)){
            return createInstanceId();
        }
        
        return id;
    }
    
    
    $.fn.placeholder = function(value){
        if(this.prop("tagName") !== "INPUT"){
            return this;
        }
        
        
        var inputType = this.prop("type").toLowerCase();
        if(inputType !== "text" && inputType !== "password"){
            return this;
        }
        
        if(supportNativePlaceholders){
            this.prop("placeholder", value);
            return this;
        }
        
        var instanceId = this.data("TC-Placeholder-Id");
        
        if(instanceId){
            if(instances[instanceId].getNode().is(this)){
                instances[instanceId].setText(value);
                return this;
            }
        }
        
        if(!instanceId){
            instanceId = createInstanceId();
        }
        
        var type = TCPlaceholder.FIELD_TEXT;
        if(inputType === "password"){
            type = TCPlaceholder.FIELD_PASSWORD;
        }
        
        var instance = new TCPlaceholder(this, type);
        instance.setText(value);
        instances[instanceId] = instance;
        
        this.data("TC-Placeholder-Id", instanceId);
        
        return this;
    };
    
    
    $.fn.removePlaceholder = function(){
        if(supportNativePlaceholders){
            this.removeProp("placeholder");
            return this;
        }
        
        var instanceId = this.data("TC-Placeholder-Id");
        if(!instanceId){
            return this;
        }
        
        var instance = instances[instanceId];
        
        if(!instances[instanceId].getNode().is(this)){
            return this;
        }

        instance.destroy();
        delete instances[instanceId];
        
        this.removeData("TC-Placeholder-Id");
        
        return this;
    };
       
    
})(jQuery);