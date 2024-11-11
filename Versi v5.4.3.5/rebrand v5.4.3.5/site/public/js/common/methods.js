/**
 * Генерирует уникальный айди
 * @param {String} prefix префикс, добавляемый к айди
 * @returns {String}
 */
var generateUniqueId = function(prefix){
    //Если префикс не передан - он равен пустой строке
    if(prefix === undefined || prefix === null){
        prefix = "";
    }
    //Генерируем айди
    var random = prefix + '_' + Math.random().toString(36).substring(2);
    //Проверяем существования айди 
    if($('#' + random).length !== 0){
        //Если существует - генерируем снова
        return generateUniqueId(prefix);
    } else {
        return random;
    }
};

/**
 * Эскейпит символы html
 * @param {String} text
 * @returns {Strign}
 */
function escapeHtml(text) {
    //Объект символов для замены
    var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
    };
    //Заменям символы
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}

/**
 * Считает количество элементов в объекте. Если переданный элемент не объект или пустой, возвращает -1
 * @param {Object} obj
 * @returns {Number}
 */
function countObject(obj){
    //Счетчик
    var count = 0;
    //Если объект не найден, возвращаем -1
    if(obj === undefined){
        return -1;
    }
    //Если тип переданных данных не обьект, или они пустые, возвращаем -1
    if(typeof obj !== 'object' || obj === null){
        return -1;
    }
    //Единственный нормальный кроссплатформенный (в т.ч. ie8) способ посчиатать объект - обойти все его элементы в 
    //цикле, и прибавлять к счетчику 1, для каждого след. элемента
    for(var k in obj){
        if(!obj.hasOwnProperty(k)){
            continue;
        }
        count++;
    }
    
    return count;
}


function getUrlParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(window.location.search);
    if (!results){
        return null;
    }
    if (!results[2]){
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}