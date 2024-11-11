var Localizator = (function() {
    
    var currentLocale;
    var locales = {};
    
    function Localizator(){ 
    };
    
    Localizator.prototype.setLocale  = function(locale){
        if(locales.hasOwnProperty(locale)){
            currentLocale = locale;
        } else {
            console.warn("Locale '" + locale + "' not loaded!");
        }
    };
    
    Localizator.prototype.getLocale  = function(){
        return currentLocale;
    };
    
    
    Localizator.prototype.getLocaleObject  = function(localeName){
        if(localeName === undefined || localeName === null){
            localeName = currentLocale;
        }
        
        if(locales.hasOwnProperty(localeName)){
            return locales[localeName];
        }
    };
    
    Localizator.prototype.setLocaleObject = function(localeName, object){
        if(typeof currentLocale !== "string"){
            currentLocale = localeName;
        }
        
        locales[localeName] = object;
    };
    
    Localizator.prototype.loadLocale = function(onLoad, onFail){
        
    };
    
    Localizator.prototype.gettext = function(key){
        return this._(key);
    };
    
    Localizator.prototype._ = function(key){
        if(typeof currentLocale !== "string"){
            return key;
        }
        
        if(!locales.hasOwnProperty(currentLocale)){
            return key;
        }
        
        if(!locales[currentLocale].hasOwnProperty(key)){
            return key;
        }
        
        return locales[currentLocale][key];
    };
    
    return new Localizator();
})();


function _(key){
    return Localizator._(key);
};