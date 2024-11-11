(function($){
    
    var settings = {
        // массив объектов для тображения
        elements : [],
        header : true,
        columns : {
            selector : { 
                enabled: true,
                show: true,
                width: '3%'
            },
            fields : {
                display_name : {
                    label : t._display_name,
                    width : '40%'
                },
                login_name : {
                    label : t._trueconf_id,
                    width : '40%'
                },
                online_status : {
                    label : t._status,
                    width : '17%'
                }
            }
        },
        // фильтр по указанному полю
        filter : {
            enabled : true,
            placeholder : t._online,
            field : 'online_status'
        },
        // строка поиска по указанным полям
        search : {
            enabled : true,
            placeholder : t._search_users,
            close_img : 'images/ab-cross.png',
            fields : ['login_name', 'display_name']
        },
        // высота видимой области таблицы (px)
        height : 500,
        // количество добавляемых строк за итерацию
        show_step : 100,
        // пауза между добавлениями строк (милисек)
        append_timeout : 200,
        // текст для отображения при отсутствии записей
        no_elements_text : t._no_users
    };
    
    var $this; // jquery элемент на котором был вызван плагин
    var $progressbar; // jquery progressbar
    var $elements_block; // tbody для отображения элементов
    var elements_block_height;
    var $search; // jquery элемент поля поиска
    var $online;
    var $check_all; // jquery объект "выбрать всех"
    var current_elements = []; // массив элементов для отображения (на основе settings.elements)
    var visible_elements = 0; // количество
    
    var methods = {
        /* 
         * рисует все элементы плагина в соответствии с настройками плагина,
         * навешивает события на добавленные элементы
         */
        init: function(options) {
            $this = this;
            settings = $.extend(settings, options);
            
            $("<div id='elements-list'><div class='tools'></div><div class='list'></div></div>").appendTo($this);
            $("<table class='tb-fix'><tbody><tr></tr></tbody></table>").appendTo($this.find('.tools'));
            
            if (settings.search.enabled) {
                $("<td><div id='strpos-block'></div></td>").appendTo($this.find('.tools tr'));
                $search_placeholder = $("<div id='pre-text'>" + settings.search.placeholder + "</div>").appendTo($this.find('#strpos-block'));
                $search = $("<input id='search-str' type='text' value='' maxlength='255' />").appendTo($this.find('#strpos-block'));
                $close_btn = $("<img id='close-btn' src='" + settings.search.close_img + "' style='display: none;'>").appendTo($this.find('#strpos-block'));
                
                // добавление обработчиков на элементы поиска
                $search.keyup(function () {
                    if ($(this).val().length) {
                        $close_btn.show();
                    } else {
                        $close_btn.hide();
                    }
                    methods.renderElements();
                }).focus(function () {
                    $search_placeholder.hide();
                }).focusout(function () {
                    if (!$(this).val().length) {
                        $search_placeholder.show();
                    }
                });
                
                $search_placeholder.click(function () {
                    $search.trigger('focus');
                });
                
                $close_btn.click(function () {
                    $search.val('').trigger('focusout').trigger('keyup');
                });
            }
            
            if (settings.filter.enabled) {
                $("<colgroup><col><col width='100px'></colgroup>").prependTo($this.find('.tools table'));
                $("<td><input id='filter' type='checkbox' /> <label for='filter' style='margin-left: 5px;'>" + settings.filter.placeholder + "</label></td>").appendTo($this.find('.tools tr'));
                $online = $('#filter');
                
                // добавление обработчика для фильтра онлайн пользователей
                $online.change(function() {
                    methods.renderElements();
                });
            }
            
            $progressbar = $("<div />", {'id' : 'progressbar'}).appendTo($this.find('.list'));
            $progressbar.progressbar({value: 0});
            
            $("<div />", {'class' : 'wrapper', 'style' : 'height: ' + settings.height + 'px' }).appendTo($this.find('.list'));
            $("<div />", {'class' : 'header-wrapper'}).appendTo($this.find('.wrapper'));
            $("<table class='table-header tb-fix " + (!(settings.header) ? 'none' : '') + "'><colgroup></colgroup><tbody><tr></tr></tbody></table>").appendTo($this.find('.header-wrapper'));
            if (settings.columns.selector.enabled) {
                $("<col class='" +(!(settings.columns.selector.show) ? 'none' : '') + "' width='" + settings.columns.selector.width + "'>").appendTo($this.find('.table-header colgroup'));
                $("<th class='text-c " + (!(settings.columns.selector.show) ? 'none' : '') + "'><input class='radio' type='checkbox' name='checkall' /></th>").appendTo($this.find('.table-header tr'));
                $check_all = $('input.radio[name="checkall"]');
                
                // добавление обработчика для выделения всех элементов
                $check_all.on('check-all-click', function() {
                    var checked = $(this).is(':checked');
                    $elements_block.find('input:checkbox:enabled').prop('checked', checked).first().trigger('change');
                }).click(function() {
                    $(this).trigger('check-all-click');
                });
            }
            
            for (field in settings.columns.fields) {
                $("<col width='" + settings.columns.fields[field].width + "'>").appendTo($this.find('.table-header colgroup'));
                $("<th class='sort desc' field='" + field + "'><a href='#'>" + settings.columns.fields[field].label + "</a></th>").appendTo($this.find('.table-header tr'));
            }
            
            // добавление обработчиков для сортировки столбцов
            $('.sort > a').each(function () {
                $(this).click(function () {
                    $('.sort').each(function() { $(this).removeClass('current-sort'); });
                
                    var parent_obj = $(this).parent();
                    var desc = parent_obj.hasClass('desc');

                    if (desc) {
                        parent_obj.removeClass('desc');
                    } else {
                        parent_obj.addClass('desc');
                    }
                    
                    parent_obj.addClass('current-sort');
                    methods.renderElements();
                    return !1;
                });
            });

            elements_block_height = $('.wrapper').height() - $('.header-wrapper').height();
            $("<div />", {'class' : 'body-wrapper', 'style' : 'height:' + elements_block_height + 'px'}).appendTo($this.find('.wrapper'));
            $("<table class='table-body tb-fix'><colgroup></colgroup><tbody></tbody></table>").appendTo($this.find('.body-wrapper'));
            if (settings.columns.selector.enabled) {
                $("<col class='" +(!(settings.columns.selector.show) ? 'none' : '') + "' width='" + settings.columns.selector.width + "'>").appendTo($this.find('.body-wrapper colgroup'));
            }
            for (field in settings.columns.fields) {
                $("<col width='" + settings.columns.fields[field].width + "'>").appendTo($this.find('.body-wrapper colgroup'));
            }
            $elements_block = $this.find(".table-body tbody");
            
            current_elements = settings.elements.slice(0);
            methods.renderElements();
            return $this;
        },
        updateElements: function(elements) {
            settings.elements = elements.slice(0);
            return $this;
        },
        searchElements: function(str) {
            var list = [];
            var rgx = new RegExp(str, 'i');
            for (var key in current_elements) {
                for (var field in settings.search.fields) {
                    if (rgx.test(current_elements[key][settings.search.fields[field]])) {
                        list.push(current_elements[key]);
                        break;
                    }
                }
            }
            current_elements = list.slice(0);
            return $this;
        },
        sortElements: function(field, desc) {
            desc = desc || false;
            if (field == 'online_status') {
                return current_elements.sort(function(a,b){
                    var result = 0, argA = Number(a[field]), argB = Number(b[field]);
                    if (argA < argB)
                        result = -1;
                    if (argA > argB)
                        result = 1;
                    return (result * ((desc)?(-1):1));
                });
            }
            current_elements.sort(function(a,b){return (a[field].localeCompare(b[field]) * ((desc)?(-1):1));});
            return $this;
        },
        onlineFilterElements: function() {
            var list = [];
            for (var k in current_elements) {
                if (parseInt(current_elements[k].online_status) > 0)
                    list.push(current_elements[k]);
            }
            current_elements = list.slice(0);
            return $this;
        },
        appendElements: function(elements) {
            html = '';
            for (var element in elements) {
                html += elements[element].render(($search) ? $search.val() : '');
            }
            $elements_block.append(html);
            visible_elements += settings.show_step;
            return $this;
        },
        renderElements: function() {
            visible_elements = 0;
            current_elements = settings.elements.slice(0);
            $progressbar.progressbar({value: 0});
            
            // пока весь список не будет подгружен, делаем не доступным выбор всех пользователей
            if ($check_all) {
                $check_all.attr('disabled', 'disabled').trigger('check-all-click').removeAttr('checked');
            }
            
            if ($online && $online.is(':checked')) {
                methods.onlineFilterElements();
            }
            
            if ($search && $search.val().length) {
                methods.searchElements($search.val());
            }
            
            $sort = $('.current-sort');
            if ($sort.length) {
                methods.sortElements($sort.attr('field'), $sort.hasClass('desc'));
            }
            
            // очищаем текущих пользователей (!!!самое узкое место!!!)
            if(navigator.appVersion.match(/MSIE\s+(5|6|7|8|9)/i)) {
                $elements_block.html('');
            } else {
                if ($elements_block[0])
                    $elements_block[0].innerHTML = '';
            }
            
            if (current_elements.length > 0) {
                $(document).bind('elements.block-render', function () {
                    var current_elements_length = current_elements.length;
                    if (visible_elements < current_elements_length) {
                        methods.appendElements(current_elements.slice(visible_elements, visible_elements + settings.show_step));
                        $progressbar.progressbar({value: (visible_elements * 100 / current_elements_length)});
                        if (visible_elements < current_elements_length) {
                            setTimeout(function() {$(document).trigger('elements.block-render')}, settings.append_timeout);
                        } else {
                            if ($check_all && ($elements_block.find('input:checkbox:enabled').length > 0)) {
                                $check_all.removeAttr('disabled');
                            }
                        }
                    }
                    $(document).trigger('elements.block-render.success'); // генерация события говорящего об успешном добавлении блока элементов
                });

                $(document).trigger('elements.block-render');
            } else {
                $progressbar.progressbar({value: 100});
                
                var colspan = 0;
                if (settings.columns.selector.enabled) {
                    colspan++;
                }
                for (field in settings.columns.fields) {
                    colspan++;
                }
                $("<tr><td colspan='" + colspan +"' class='text-c'><b>" + settings.no_elements_text + "</b></td></tr>").appendTo($elements_block);
            }
            
            methods.addEmptyLines(); // добавление пустых строк в таблицу (если они нужны)
            return $this;
        },
        addEmptyLines: function() {
            var $first_line = $elements_block.find('tr:first-child > td:visible');
            var count_td = $first_line.length;
            var colspan = $first_line.attr('colspan');
            var line_height = $first_line.parent().height();
            
            var i = 0, tr = "<tr class='empty-tr' style='height:" + line_height + "px;'>";
            while(i++ < count_td) {
                tr += "<td "+(colspan ? ("colspan='"+colspan+"'") : '' )+"></td>";
            }
            tr += "</tr>";
            
            while ( (elements_block_height - $elements_block.height()) >= line_height) {
                $elements_block.append(tr);
            }
            return $this;
        }
        
    };

    $.fn.elementsList = function( method ) {
        
        // логика вызова метода
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' not exists in jQuery.elementsList' );
        } 
    };
})(jQuery);
