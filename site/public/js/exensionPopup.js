(function ($) {
    $.fn.extensionsPopup = function (name) {
        this.click(function () {
            window.setTimeout(function () {
                $.getJSON("/admin/web/extension", {"ext": name}, function (res) {
                    showPopup(res);
                });
            }, 0);
            return false;
        });
    };
})(jQuery);

function showPopup(param) { // title, img, text, link, buttonName, contact
    var dialog = $('<div class="extDialog"></div>');
    if (param.img) {
        param.img = "/images/extensions/" + param.img;
        $(dialog).append('<img src="' + param.img + '" height="255" width="255"/>');
    }

    if ($.type(param.text) !== "array")
        $(dialog).append('<p>' + param.text + '</p>');
    else
        for (var i in param.text)
            $(dialog).append('<p>' + param.text[i] + '</p>');

    if (param.displayButton || param.displayLink) {
        var div = $('<div>', {'class': 'buttons'});
        if (param.displayButton && param.buttonName)
            div.append('<a href="' + param.buttonHref + '" target="_blank" rel="noopener" class="button btn_green">' + param.buttonName + '</a>');

        if (param.displayLink && param.linkHref)
            div.append('<a href="' + param.linkHref + '" target="_blank" rel="noopener" class="' + (!param.displayButton ? 'button btn_green' : '') + '">' + param.linkName + '</a>');
        $(dialog).append(div);
    }
    $(dialog).append('<br clear="left"/>');
    /*
        if ($.type(param.contact) !== "array")
            $(dialog).append('<p>'+param.contact+'</p>');
        else
            for (var i in param.contact)
                $(dialog).append('<p>'+param.contact[i]+'</p>');
    */
    dialog.dialog({
        modal: true,
        title: param.title,
        minWidth: 600,
        close: function () {
            dialog.remove();
        }
    });
}
