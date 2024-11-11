function LDAP(params){
    
    var defaultParams = {
        handlers : {
            getServersList : "/admin/ldap/getServersList"
        }
    };
    
    
    (function construct(){
        if(typeof params !== "object"){
            params = defaultParams;
        } else {
            $.extend(true, params, defaultParams);
        }
    })();
    
    
    this.getServersList = function(onSuccess, onFail){
        $.getJSON(params.handlers.getServersList)
                .done(onSuccess)
                .fail(onFail);
    };
    
    
}