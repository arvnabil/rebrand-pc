(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery", "../jquery.validate"], factory );
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory( require( "jquery" ) );
    } else {
        factory( jQuery );
    }
}(function( $ ) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: ES (Spanish; Español)
     */
    $.extend( $.validator.messages, {
        required: "Гэта поле з'яўляецца абавязковым.",
        remote: "Выпраўце гэта поле.",
        email: "Калі ласка, увядзіце дзейны адрас электроннай пошты.",
        url: "Калі ласка, увядзіце правільны URL.",
        date: "Калі ласка, увядзіце правільную дату.",
        dateISO: "Калі ласка, увядзіце правільную дату (ISO).",
        number: "Калі ласка, увядзіце правільны нумар.",
        digits: "Калі ласка, увядзіце толькі лічбы.",
        equalTo: "Калі ласка, увядзіце тое ж значэнне зноў.",
        maxlength: $.validator.format( "Калі ласка увядзіце не больш {0} знакаў." ),
        minlength: $.validator.format( "Калі ласка, увядзіце па крайняй меры {0} знакаў." ),
        rangelength: $.validator.format( "Калі ласка, увядзіце значэнне паміж {0} і {1} знакаў." ),
        range: $.validator.format( "Калі ласка, увядзіце значэнне паміж {0} і {1}." ),
        max: $.validator.format( "Калі ласка, увядзіце значэнне менш або роўна {0}." ),
        min: $.validator.format( "Калі ласка, увядзіце значэнне, большая ці роўнае {0}." ),
        step: $.validator.format( "Калі ласка, увядзіце кратнае {0}" )
    } );
    return $;
}));