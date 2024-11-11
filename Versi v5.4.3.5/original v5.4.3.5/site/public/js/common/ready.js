$(document).ready(function () {

    Server.canChangeServerStatus = !tcm.isSecurityAdmin;
    // показать кнопку управления и состояние сервера, а так же установить интервал, проверябщей состояние сервера
    Server.init();

    // добавить пустые строки к таблицам

    $(window).bind('resize', prepare_table);
    $(window).bind('resize', updateCommonCSSProperties);
    updateCommonCSSProperties();

    /* если на какой-то странице требуется пересчет css-свойств с помощбю css, то в шаблоне страницы нужно переопределить блок js и реализовать функцию updateCSSOnPage */
    if (typeof window['updateCSSOnPage'] == 'function') {
        $(window).bind('resize', updateCSSOnPage);
        updateCSSOnPage();
    }
    prepare_table();

    /* выводит текст message в хедере сайта
       data - предпологается что это объект
    */
    $(document).bind('display-header-messages', function (event, data) {
        //var length = $("#header #line-2 #message").text().length;
        var message = '';
        if (data == undefined || data.message == undefined) //  || data.message == ''
            message = t._settings_are_saved;
        else
            message = data.message;

        $("#error-message-container").css('display', 'none');
        $("#header #line-1 #message").hide(200).html('<span class="note-msg">' + message + '</span>').show(200);
    });

    $(document).bind('display-header-error', function (even, data) {
        var message = '';
        if (data == undefined || data.message == undefined)
            message = t._error;
        else
            message = data.message;

        /**
         * https://bug-tracking.trueconf.com/show_bug.cgi?id=42879#c3
         */
        $("#error-message-container").css('display', 'block');
        $("#error-message-container>.error-text").hide(200).html('<span class="error-msg">' + message + '</span>').show(200);
        $('.content-container').scrollTop(0);
    });

    $(document).bind('hidden-header-error', function () {
        $("#error-message-container").css('display', 'none');
    });

    //smooth_text();

    /* добавление livechat */
    if (tcm.livechat_url.length > 0) {
        $.ajax({
            url: tcm.livechat_url + '&lang=' + (t.lang === 'be' ? 'ru' : t.lang),
            success: function (data) {
                if (data.html)
                    $('body').append(data.html);
            },
            dataType: 'jsonp'
        });
    }

    /* проверка обновлений */
    if (tcm.check_update_url.indexOf("://") !== -1) {
        var offline_reg = false;

        $.ajax({
            url: tcm.check_update_url,
            dataType: 'jsonp',
            timeout: 10000,
            success: function (data) {
                if (data.status === 'success') {
                    if (data.message !== 'ok') {
                        var msg_block = $('#outside-msg');
                        if (msg_block.length > 0) {
                            msg_block.html(data.message).slideDown(1000);
                        }
                        $('#general-info-menu-li').addClass('with-notification');
                    }
                }
            },
            error: function (x, t, m) {
                offline_reg = true;
            }
        });
    }

    /* проверка изменения конфига Proxy или WorkDir */
    if (tcm.server_restart_required) {
        Confirm.func(t._server_restart_is_required, function () {
            /**
             * Закомментировал после требования Андрея К.
             */
            // Server.restartServer();
            Server.apache.restart();
        });
    }

    /* проверка необходимости изменить рабочую директорию */
    if (tcm.work_dir_path_requires_change) {
        /* если открыт раздел настроек, открываем диалоговое окно для выбора директории */
        var on_config_page = window.location.pathname.indexOf("/admin/general/config") === 0;
        if (on_config_page) {
            $('#workdirectory').ready(function () {
                $('#workingdirectory-path').click();
            });
            return;
        }

        Confirm.func(t._work_dir_change_is_required, function () {
            /**
             * Закомментировал после требования Андрея К.
             */
            window.location.href = "/admin/general/config#work-path-panel";
        }, t._change_the_path);
    }
});

/*
    функция затемнения текста, который не помещается в таблицу имеющую фиксированную ширину столбцов
*/
function smooth_text() {

    $(".content-container table:not(.users-list) td").each(function () {
        var currentHtml = $(this).html();
        if (!$(this).find("select, textarea, input:not(.long-field)").length && $(this).text().length > 0) {
            $(this).html("<div class='can-be-long'><div></div><span>" + currentHtml + "</span></div>");
            ($(this).find("span").width() > $(this).children("div").width()) ? $(this).find("span").attr('title', $.trim($(this).text())) : $(this).html(currentHtml);
        }
    });
}


/*
    обновление css-параметров общих для всех страниц
*/
function updateCommonCSSProperties() {
    $('div.content-container').css('bottom', $('#license-block').height());
}

/*
    добавляет пустые строки в таблицу
*/
function prepare_table() {
    // TODO скрипт нужно изменить так: проходить через each по всем таблицам, отдельно для каждой считать число столбцов, после чего добавлять строки

    if ($('.table-body').length == 0 || $('.table-body tr').length == 0 || $(".block-table-wrapper").height() === 0 ||
        $('.table-body').height() === 0) {
        return;
    }

    $('.table-body').each(function () {
        // count_td - число ячеек в строке
        var count_td = (($(this).find('tr:last-child > td').length - $(this).find('table td').length) / $(this).length) - $(this).find('tr:last-child td:hidden').length;
        var colspan = $(this).find('tr:first-child > td').attr('colspan');
        var i = 0, tr = "<tr class='empty-tr'>";
        while (i++ < count_td) {
            tr += "<td " + (colspan ? ("colspan='" + colspan + "'") : '') + "></td>";
        }
        tr += "</tr>";

        $(this).find(" tr.empty-tr").remove();

        // добавляем пустые строки на всю высоту таблицы
        var over = 41; // высота строки

        while ($(".block-table-wrapper").height() - $(this).height() >= over)
            $(this).append(tr);
    });

}

/* добавляем в обработчик click с указанием action отправки сообщения */

function sendMail(action) {
    Server.showLoadEffect();
    $.ajax({
        url: action,
        type: "POST",
        dataType: 'json',
        success: function (data) {
            if (data.status) {
                $(document).trigger('display-header-messages', data);
            } else {
                $(document).trigger('display-header-error', data);
            }
            Server.removeLoadEffect();
        },
        error: function (data) {
            Server.removeLoadEffect();
        }
    });
}

function htmlspecialchars_decode(string, quote_style) {
    var optTemp = 0,
        i = 0,
        noquotes = false;
    if (typeof quote_style === 'undefined') {
        quote_style = 2;
    }
    string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE': 1,
        'ENT_HTML_QUOTE_DOUBLE': 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE': 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') {
        quote_style = [].concat(quote_style);
        for (i = 0; i < quote_style.length; i++) {
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            } else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/&#0*39;/g, "'");
    }
    if (!noquotes) {
        string = string.replace(/&quot;/g, '"');
    }
    string = string.replace(/&amp;/g, '&');

    return string;
}

function generateSecretKey(component) {
    $.post(tcm.generate_secret_key_url, function(data) {
        var jsonData = $.parseJSON(data);
        $(component).val(jsonData['secretKey']);
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// дублирование twig фильтра cut
function cutLongString(str, length) {
    var result = str;
    var length = length || 32;
    var str_length = str.length;
    if (str_length > length) {
        var cutstr = str.substr(0, Math.round(length / 2)) + '...';
        cutstr += str.substr(str_length - Math.round(length / 2), Math.round(length / 2));
        result = cutstr;
    }
    return result;
}

// проверяет равны ли два массива объектов
isEqualObjectArrays = function (array1, array2, withKeys) {
    withKeys = typeof (withKeys) === 'undefined' ? true : withKeys;

    if (array1.length != array2.length) {
        return false;
    }

    if(!withKeys){
        for (var key in array1) {
            if (array2.indexOf(array1[key]) !== -1) {
                return false;
            }
        }
        return true;
    }

    for (var key in array1) {
        if (!objectInArray(array2, array1[key])) {
            return false;
        }
    }
    return true;
};

// проверяет существование объекта в массиве объектов
objectInArray = function (array, obj) {
    for (var key in array) {
        if (compareObjects(array[key], obj)) {
            return true;
        }
    }
    return false;
};

// сравнение двух объектов
compareObjects = function (o1, o2) {
    for (var p in o1) {
        if (o1.hasOwnProperty(p)) {
            if (o1[p] !== o2[p]) {
                return false;
            }
        }
    }
    for (var p in o2) {
        if (o2.hasOwnProperty(p)) {
            if (o1[p] !== o2[p]) {
                return false;
            }
        }
    }
    return true;
};