(function ($) {

    /**
     * Конструктор класса
     * @constructor
     */
    var ConferenceSchedulePlugin = function () {

    };

    /**
     * Список полей типов дат поддерживаемых плагином
     */
    ConferenceSchedulePlugin.prototype.FIELD = {
        DAY_OF_WEEK: 1,
        MONTHLY_INTERVAL: 2,
        START_DATE: 3,
        START_TIME: 4,
        DURATION: 5,
        TIME_ZONE: 6
    };

    /**
     * Список полей типов дат в обратном виде, необходимо чтобы убыстрить поиск локали и т.д.
     */
    ConferenceSchedulePlugin.prototype.INV_FIELDS = {
        1: "DAY_OF_WEEK",
        2: "MONTHLY_INTERVAL",
        3: "START_DATE",
        4: "START_TIME",
        5: "DURATION",
        6: "TIME_ZONE"
    };

    /**
     * Предопределяет методы в основном объекте плагина
     * @param {Object} items
     * @returns {undefined}
     */
    ConferenceSchedulePlugin.prototype.init = function (items) {
        if (items !== undefined && typeof items === 'object') {
            $.extend(true, std_obj, items);
        }
    };

    /**
     * Биндид плагин к выбранному контейнеру
     * @param {Object} params
     * @param {jQuery} container
     * @returns {undefined}
     */
    ConferenceSchedulePlugin.prototype.bind = function (params, container) {
        return container.conferenceSchedulePlugin(params);
    };
    //Создаем объект класса плагина
    $.conferenceSchedulePlugin = new ConferenceSchedulePlugin();

    /**
     * Основной объект плагина
     * @type std_obj
     */
    var std_obj = {
        /**
         * Регион, установленный на данный момент, необходим для выбора локализации плагина
         */
        region: 'ru',
        /**
         * Объект с локализовнным списком таймзон
         */
        timeZones: {},
        /**
         * Префикс плагина
         */
        prefix: "cspl_",

        /**
         * Cохраненное расписание
         */
        schedule: "none",
        /**
         * Выбранное на данный момент расписание
         */
        currentSchedule: "none",
        /**
         * Объект со всеми возможными типами расписаний
         * Например:
         //Id типа
         none : {
                //Массив полей, используемых в типе
                fields : [$.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELD.START_TIME,
                    $.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELDS.END_TIME, 
                    $.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELDS.TIME_ZONE],
                //Если true, то поля только для чтения
                disabled : true,
                //Вызывается при рендере подсказки 
                renderTooltip : function(obj, fieldsContainers){
                    return locale.manualEventStarting;
                }
            },
         once : {
                fields : [$.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELD.START_TIME,
                    $.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELDS.END_TIME,
                    $.conferenceSchedulePlugin.$.conferenceSchedulePlugin.FIELDS.TIME_ZONE]
            }
         * ... и т.д.
         */
        items: {
            none: {
                fields: [$.conferenceSchedulePlugin.FIELD.START_DATE,
                    $.conferenceSchedulePlugin.FIELD.TIME_ZONE],
                disabled: true,
                renderTooltip: function (obj) {
                    return _("The conference will be started manually.");
                },
                name: _("Without schedule")
            },
            once: {
                fields: [$.conferenceSchedulePlugin.FIELD.START_DATE,
                    $.conferenceSchedulePlugin.FIELD.DURATION,
                    $.conferenceSchedulePlugin.FIELD.TIME_ZONE],
                renderTooltip: function (obj) {
                    var startTime = new Date(obj.getStartTime(obj));
                    return _("Next event start") + ': ' + obj.formatTime(startTime);
                },
                onChange: function (obj, triggerField, fieldContainer) {
                    obj.refreshTooltip(obj, this);
                },
                name: _("Nonrecurrent")
            },
            weekly: {
                fields: [$.conferenceSchedulePlugin.FIELD.DAY_OF_WEEK,
                    $.conferenceSchedulePlugin.FIELD.START_TIME,
                    $.conferenceSchedulePlugin.FIELD.DURATION,
                    $.conferenceSchedulePlugin.FIELD.TIME_ZONE],
                renderTooltip: function (obj) {
                    var startTime = obj.getStartTime(obj);
                    if (startTime === -1) {
                        return '';
                    }
                    return _("Next event start") + ': ' + obj.formatTime(new Date(startTime));
                },
                onChange: function (obj, triggerField, fieldContainer) {
                    obj.refreshTooltip(obj, this);
                },
                name: _("Every week")
            }
        },
        /**
         * Объект полей плагина
         */
        fields: {
            DAY_OF_WEEK: [0, 0, 0, 0, 0, 0, 0],
            MONTHLY_INTERVAL: null,
            START_DATE: null,
            START_TIME: null,
            DURATION: null,
            TIME_ZONE: null
        },
        /**
         * Имена полей плагина
         */
        fieldNames: {
            DAY_OF_WEEK: "scheduleDayOfWeek",
            MONTHLY_INTERVAL: "scheduleInterval",
            START_DATE: "scheduleStartDate",
            START_TIME: "scheduleStartTime",
            DURATION: "scheduleDuration",
            TIME_ZONE: "scheduleTimeZone"
        },

        /**
         * Последняя валидная дата
         */
        last_valide_start_date: new Date().getTime(),

        /**
         * Максимальное смещение даты начала конференции в днях
         * По умолчанию: ~1 год (365 дней)
         */
        max_start_date_offset: 365,

        /**
         * Точка входа в плагин
         * @param {std_obj} obj
         * @returns {jQuery}
         */
        getContainer: function (obj) {
            var container = obj.container.get(obj);
            //Эмулируем клик по пункту меню
            var selectedItem = container.find('li.selected').removeClass('selected');
            obj.onMenuItemSelected(obj, container, selectedItem);

            return container;
        },
        /**
         * Основной контейнер плагина
         */
        container: {
            /**
             * Возвращает основной контейнер плагина
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            get: function (obj) {
                if (obj.container._rendered === null) {
                    obj.container._rendered = obj.container._render(obj);
                }
                return obj.container._rendered;
            },
            /**
             * Рендерит плагин
             * @param {std_obj} obj
             * @returns {jQuery}
             */
            _render: function (obj) {
                //Проверяем параметры
                /*if(obj.fields.START_DATE === null || obj.fields.START_DATE === undefined){
                    obj.fields.START_DATE = obj._formatCurrentTime();
                    console.log(obj.fields.START_DATE);
                }*/
                var menu = obj.container.menu.get(obj);
                var scheduleForm = obj.container.schedule.get(obj);

                var container = $('<div class="tc-plugin-ui">')
                    .append('<div class="smallTitle">' + _("Conference schedule") + ':</div>')
                    .append(menu);

                //Добавляем костыль для отключения автофокуса на полях ввода
                container.append($('<input type="text" style="height:0px;width:1px; border-radius: none; padding:0px;margin:0px; '
                    + 'line-height: 0px;  border:none; outline:none;"  />'));
                container.append(scheduleForm);

                var menu = container.find('#' + obj.prefix + 'scheduleMenu');
                if (menu.length > 0) {
                    menu.find("li").click(function (event) {
                        obj.onMenuItemSelected(obj, container, $(event.target));
                    });
                }


                var startDate = container.find('#' + obj.prefix + obj.fieldNames.START_DATE);
                var duration = container.find('#' + obj.prefix + obj.fieldNames.DURATION);

                startDate.datetimepicker($.extend(
                    $.timepicker.regional[obj.region],
                    $.datepicker.regional[obj.region],
                    {
                        buttonText: '',
                        beforeShow: function (event) {
                            $('#' + event.id + 'Entry').find('td.fieldError').empty();
                        },
                        onSelect: function (timeString, datepickerObj) {
                            obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.START_DATE, startDate, timeString);
                            // if(duration.datetimepicker('getDate') <= startDate.datetimepicker('getDate')
                            //     && startDate.datetimepicker('getDate') !== null){
                            //     duration.datetimepicker('setDate', new Date(startDate.datetimepicker('getDate').getTime() +  86400 * 1000));
                            // }
                        },
                        //Костыль для обработки события по кнопке "Сейчаc"
                        onChangeMonthYear: function (year, month, dpinst, tminst) {
                            obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.START_DATE, startDate, tminst.formattedDateTime);
                            // if(duration.datetimepicker('getDate') <= startDate.datetimepicker('getDate')
                            //     && startDate.datetimepicker('getDate') !== null){
                            //     duration.datetimepicker('setDate', new Date(startDate.datetimepicker('getDate').getTime() +  86400 * 1000));
                            // }
                        },
                        dateFormat: "dd.mm.yy"
                    }
                ));
                if (obj.fields.START_DATE === null) {
                    startDate.datetimepicker('setDate', new Date());
                }

                var startTime = container.find('#' + obj.prefix + obj.fieldNames.START_TIME);
                startTime.timepicker($.extend(
                    $.timepicker.regional[obj.region],
                    $.datepicker.regional[obj.region],
                    {
                        onSelect: function (timeString, datepickerObj) {
                            obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.START_TIME, startTime, timeString);
                        },
                        beforeShow: function (event) {
                            $('#' + event.id + 'Entry').find('td.fieldError').empty();
                        },
                        //Костыль для обработки события по кнопке "Сейчаc"
                        onChangeMonthYear: function (year, month, dpinst, tminst) {
                            obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.START_TIME, startTime, tminst.formattedDateTime);
                        },
                        buttonPanel: "<div>test</div>",
                        showButtonPanel: false
                    }
                ));

                if (obj.fields.START_TIME === null) {
                    startTime.val("00:00");
                }

                duration.timepicker($.extend(
                    $.timepicker.regional[obj.region],
                    $.datepicker.regional[obj.region],
                    {
                        onSelect: function (timeString, datepickerObj) {
                            obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.DURATION, duration, timeString);
                        },
                        beforeShow: function (event) {
                            $('#' + event.id + 'Entry').find('td.fieldError').empty();
                        }
                    }
                ));

                if (obj.fields.DURATION === null) {
                    duration.val("");
                }

                var weeks = container.find('#' + obj.prefix + obj.fieldNames.DAY_OF_WEEK);
                var weekpicker = weeks.weekpicker({
                    listHeight: 130,
                    onShow: function () {
                        weeks.parent('tr').find('td.fieldError').empty();
                    },
                    onChange: function (day) {
                        obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.DAY_OF_WEEK, weeks, day);
                    }
                });
                weekpicker.setDays(obj.fields.DAY_OF_WEEK);

                return container;
            },
            /**
             * Объект для меню выбора режима запуска
             */
            menu: {
                /**
                 * Возвращает контейнер меню
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.container.menu._rendered === null) {
                        obj.container.menu._rendered = obj.container.menu._render(obj);
                    }

                    return obj.container.menu._rendered;
                },
                /**
                 * Рендерит меню
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {
                    //Если нет элементов меню, то ничего не делаем
                    if (obj.items === undefined || typeof obj.items !== 'object') {
                        return $('<span>');
                    }

                    //Считаем количество элекментов в меню
                    var count = 0;
                    for (var i in obj.items) {
                        if (obj.items.hasOwnProperty(i)) {
                            count++;
                        }
                    }
                    //Если количество элементов меньше двух (зачем на меню, если у нас только один элемент?) то ничего не делаем
                    if (count < 2) {
                        return $('<span>');
                    }

                    //Контейнер меню плагина
                    var container = $('<div class="menu">');
                    //Пункт меню плагина 
                    var child = '<ul id="' + obj.prefix + 'scheduleMenu">';
                    //Обходим в цикле список расписаний
                    $.each(obj.items,
                        /**
                         * Создаем элемент меню
                         * @param {String} id
                         * @param {Object} item
                         * @returns {undefined}
                         */
                        function (id, item) {
                            var htmlId = 'itemSchedule' + id[0].toUpperCase() + id.substring(1);
                            child += '<li '
                                + (id === obj.schedule ? 'class="selected"' : '')
                                + 'id="' + obj.prefix + htmlId + '">'
                                + (item.name === undefined ? id : item.name)
                                + '</li>';
                        }
                    );
                    child += '</ul>';
                    container.append(child);
                    container.append('<div class="clear"></div>');
                    //Если не выбран не один из пунктов меню расписания, выбираем первый пункт
                    if (container.find('li.selected').length === 0) {
                        container.find('li:first').addClass('selected');
                    }

                    return container;
                },
                /**
                 * Отрендеренный контейнер
                 */
                _rendered: null
            },
            /**
             * РГенерация полей расписания
             */
            schedule: {
                /**
                 * Возвращает контейнер с полями расписания
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                get: function (obj) {
                    if (obj.container.schedule._rendered === null) {
                        obj.container.schedule._rendered = obj.container.schedule._render(obj);
                    }
                    return obj.container.schedule._rendered;
                },
                /**
                 * Рендерит контейнер с полями расписаний
                 * @param {std_obj} obj
                 * @returns {jQuery}
                 */
                _render: function (obj) {

                    var container = $('<table id="schedule-form" class="scheduleTable">')

                        .append('<colgroup class="fieldName" />').append('<colgroup />').append('<colgroup class="fieldError" />')

                        .append('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.DAY_OF_WEEK
                            + 'Entry"><td>' + _("Day of week") + ':</td><td id="'
                            + obj.prefix + obj.fieldNames.DAY_OF_WEEK + '" class="field"></td><td class="fieldError"></td></tr>')

                        .append('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.MONTHLY_INTERVAL
                            + 'Entry"><td>' + _("The interval between conferences") + ':</td><td class="field">'
                            + '<select class="' + obj.prefix + 'scheduleValue" ' +
                            +' id="' + obj.prefix + obj.fieldNames.MONTHLY_INTERVAL + '" '
                            + '><option>' + _("Calendar month") + '</option><option>' + _("4 weeks") + '</option></select>'
                            + '</td><td class="fieldError"></td></tr>')

                        .append('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.START_DATE
                            + 'Entry"><td>' + _("The start date and time") + ':</td><td class="field">'
                            + '<input id="' + obj.prefix + obj.fieldNames.START_DATE + '" class="'
                            + obj.prefix + 'scheduleValue start-date-value" readonly="readonly" tabindex="-1" type="text" '
                            + (obj.fields.START_DATE !== null ? ' value="' + obj.fields.START_DATE + '" ' : '')
                            + ' /></td><td class="fieldError"></td></tr>')

                        .append('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.START_TIME
                            + 'Entry"><td>' + _("The start time") + ':</td><td class="field">'
                            + '<input id="' + obj.prefix + obj.fieldNames.START_TIME + '" class="'
                            + obj.prefix + 'scheduleValue" readonly="readonly" tabindex="-1" type="text" '
                            + (obj.fields.START_TIME !== null ? ' value="' + obj.fields.START_TIME + '" ' : '')
                            + ' /></td><td class="fieldError"></td></tr>')

                        .append('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.DURATION
                            + 'Entry"><td>' + _("Duration") + ':</td><td class="field">'
                            + '<input id="' + obj.prefix + obj.fieldNames.DURATION + '" class="'
                            + obj.prefix + 'scheduleValue" tabindex="-1" readonly="readonly" type="text" '
                            + (obj.fields.DURATION !== null ? ' value="' + obj.fields.DURATION + '" ' : '')
                            + ' /></td><td class="fieldError"></td></tr>');


                    if (obj.fields.TIME_ZONE === null || obj.fields.TIME_ZONE === 'null') {
                        obj.fields.TIME_ZONE = (new Date().getTimezoneOffset() * -1);
                    }

                    var timeZone = $('<select class="' + obj.prefix + 'scheduleValue" name="'
                        + obj.prefix + obj.fieldNames.TIME_ZONE + '" id="'
                        + obj.prefix + obj.fieldNames.TIME_ZONE + '">');
                    $.each(obj.timeZones, function (index, value) {
                        if (parseInt(index) === parseInt(obj.fields.TIME_ZONE)) {
                            timeZone.append('<option selected="selected" value="' + index + '">' + value + '</option>');
                        } else {
                            timeZone.append('<option value="' + index + '">' + value + '</option>');
                        }
                    });
                    timeZone.change(function () {
                        obj.onFieldChange(obj, $.conferenceSchedulePlugin.FIELD.TIME_ZONE, timeZone, timeZone.val());
                    });

                    var tr = $('<tr class="hidden" id="' + obj.prefix + obj.fieldNames.TIME_ZONE + 'Entry">');
                    tr.append('<td>' + _("Timezone") + ':</td>');
                    var td = $('<td class="field">');
                    td.append(timeZone);
                    tr.append(td);
                    tr.append('<td class="fieldError"></td>');

                    container.append(tr)
                        .append('<tr class="scheduleHint hidden" id="' + obj.prefix + 'scheduleHint"><td class="greenText" colspan="3"></td></tr>');

                    return container;
                },
                _rendered: null
            },
            _renderedButton: null,
            _rendered: null
        },
        onCreated: function (obj, params) {

        },
        onRendered: function (container) {
        },
        onMenuItemSelected: function (obj, container, menuItem) {
            if (menuItem.hasClass("selected")) return;

            if (menuItem === undefined || menuItem.length === 0) return;

            var itemId = menuItem.attr("id").substr(obj.prefix.length + 'itemSchedule'.length);
            itemId = itemId[0].toLowerCase() + itemId.substr(1);

            var item = obj.items[itemId];
            if (item === undefined) return;
            obj.currentSchedule = itemId;

            container.find('#' + obj.prefix + 'scheduleMenu li').removeClass("selected");
            container.find('tr').addClass('hidden');
            container.find('.' + obj.prefix + 'scheduleValue').prop("disabled", false);
            menuItem.addClass("selected");

            container.find('.fieldError').empty();

            var fields = item.fields;
            if (fields === undefined) return;

            var disabled = false;
            if (item.hasOwnProperty('disabled')) {
                if (item.disabled === false) {
                    return;
                }
                if ($.isArray(item.disabled)) {
                    disabled = item.disabled;
                } else if (item.disabled === true) {
                    disabled = fields;
                }
            }

            var visibleFields = [];
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var fieldContainer = null;
                var fieldId = obj.fieldNames[$.conferenceSchedulePlugin.INV_FIELDS[field]];

                fieldContainer = container.find('#' + obj.prefix + fieldId + 'Entry').removeClass('hidden');
                if (fieldContainer !== null) {
                    fieldContainer = fieldContainer.find('.' + obj.prefix + 'scheduleValue');
                    if (disabled !== false) {
                        if ($.inArray(field, disabled) !== -1) {
                            fieldContainer.prop("disabled", true);
                        }
                    }

                    visibleFields[field] = fieldContainer;
                }
            }

            if (item.hasOwnProperty('renderTooltip')) {

                var tooltip = item.renderTooltip.call(item, obj);
                if (tooltip === undefined) {
                    tooltip = '';
                }
                container.find('#' + obj.prefix + 'scheduleHint').removeClass('hidden')
                    .find('td').text(tooltip);
            }
        },

        refreshTooltip: function (obj, item) {

            if (item.hasOwnProperty('renderTooltip')) {
                var tooltip = item.renderTooltip.call(item, obj);
                if (tooltip === undefined) {
                    tooltip = '';
                }
                obj.container.get(obj).find('#' + obj.prefix + 'scheduleHint').removeClass('hidden')
                    .find('td').text(tooltip);
            }

        },

        onFieldChange: function (obj, field, fieldContainer, newValue) {
            var itemData = obj.items[obj.currentSchedule];
            if (!itemData.hasOwnProperty("onChange")) {
                return;
            }

            itemData.onChange.call(itemData, obj, field, fieldContainer);
        },

        onSave: function (obj) {
            $('.date-error-message').addClass('hidden');

            if (!obj.items.hasOwnProperty(obj.currentSchedule)) return;

            var schedule = obj.items[obj.currentSchedule];
            if (schedule.disabled) {
                return true;
            }

            var fieldsWithErrors = [];
            var fields = schedule.fields;
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var fieldId = obj.fieldNames[$.conferenceSchedulePlugin.INV_FIELDS[field]];

                switch (field) {
                    case $.conferenceSchedulePlugin.FIELD.DAY_OF_WEEK:
                        var fieldValues = $('#' + obj.prefix + fieldId).weekpicker().getDays();
                        if (fieldValues.length === 0) {
                            fieldsWithErrors.push([fieldId, 1]);
                        }
                        break;
                    case $.conferenceSchedulePlugin.FIELD.START_DATE:
                        var fieldValues = $('#' + obj.prefix + fieldId).datetimepicker('getDate');
                        var isValidDate = (new Date(Date.now() - 300000) <= fieldValues);
                        if (!isValidDate) {
                            fieldsWithErrors.push([fieldId, 2]);
                        }
                        break;
                    case $.conferenceSchedulePlugin.FIELD.DURATION:
                        var fieldValue = $('#' + obj.prefix + fieldId)[0].value;
                        if (fieldValue.length === 0 || fieldValue === "00:00") {
                            fieldsWithErrors.push([fieldId, 3]);
                        }
                        break;
                    default:
                        var fieldValue = $('#' + obj.prefix + fieldId).val();
                        if (fieldValue === null || fieldValue === undefined) {
                            fieldsWithErrors.push([fieldId, 1]);
                        } else if (fieldValue.length === 0) {
                            fieldsWithErrors.push([fieldId, 1]);
                        }
                }
            }

            if (fieldsWithErrors.length === 0) {
                return true;
            }

            for (var i = 0; i < fieldsWithErrors.length; i++) {
                var errorContainer = $('#' + obj.prefix + fieldsWithErrors[i][0] + "Entry").find("td:last");
                if (errorContainer.length === 0) {
                    continue;
                }
                errorContainer.empty();

                var errorString = "";
                switch (fieldsWithErrors[i][1]) {
                    case 1:
                        errorString = _("Error: The field is empty");
                        break;
                    case 2:
                        errorString = _("You can’t select a date in the past");
                        break;
                    case 3:
                        errorString = _("Please specify the conference duration");
                }

                errorContainer.append($('<div class="error"></div>').text(errorString));
            }

            return false;
        },

        getSchedule: function (obj) {
            var item = obj.items[obj.schedule];
            var container = obj.container.get(obj);

            var data = {'type': obj.schedule};

            var fields = item.fields;

            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var fieldId = $.conferenceSchedulePlugin.INV_FIELDS[field];
                var fieldName = obj.fieldNames[fieldId];
                if (fieldName === undefined) continue;

                var realField = container.find('#' + obj.prefix + fieldName);
                if (realField.length === 0) {
                    continue;
                }

                switch (field) {
                    case $.conferenceSchedulePlugin.FIELD.DAY_OF_WEEK:
                        data[fieldId] = realField.weekpicker().getDays();
                        break;
                    case $.conferenceSchedulePlugin.FIELD.START_DATE:
                    case $.conferenceSchedulePlugin.FIELD.START_TIME:
                        data[fieldId] = {};
                        data[fieldId].raw = realField.val();
                        data[fieldId].value = realField.datetimepicker('getDate');
                        break;
                    case $.conferenceSchedulePlugin.FIELD.DURATION:
                    default:
                        data[fieldId] = realField.val();
                        break;
                }
            }
            return data;
        },

        getStartTime: function (obj) {
            switch (obj.currentSchedule) {
                case "weekly":
                    var weekPicker = this.container.get(obj).find('#' + obj.prefix + obj.fieldNames.DAY_OF_WEEK).weekpicker();
                    var days = weekPicker.getDays();
                    if (days.length === 0) {
                        return -1;
                    }
                    var currentDate = new Date();
                    var currentWeekday = currentDate.getDay();

                    var overflowCurrentDate = new Date(Date.now() - 300000);

                    var startDate = this.container.get(obj).find('#' + obj.prefix + obj.fieldNames.START_TIME).datepicker('getDate');

                    for (var i = 0, counter = 0; i <= 1; i++, currentWeekday = 0) {
                        for (var w = currentWeekday; w <= 6; w++, counter++) {
                            //Если на текущий день не установлен запуск
                            if ($.inArray(w, days) === -1) {
                                continue;
                            }

                            startDate.setDate(currentDate.getDate() + counter);
                            if (overflowCurrentDate < startDate) {
                                return startDate.getTime();
                            }
                        }
                    }
                    return 0;
                    break;
                case "once":

                    var startDatepicker = this.container.get(obj).find('#' + obj.prefix + obj.fieldNames.START_DATE);
                    var startDate = startDatepicker.datepicker('getDate');
                    var startTime = startDate.getTime();
                    startTime = (startTime - (new Date().getTime())) < std_obj.daysTo_msecs(std_obj.max_start_date_offset) ? startTime : std_obj.last_valide_start_date;
                    startDatepicker.value = std_obj.formatTime(new Date(startTime));
                    // console.log(std_obj.last_valide_start_date, startTime, startTime - new Date().getTime());
                    std_obj.last_valide_start_date = startTime;

                    return startTime;

                    break;
                default:
                    return 0;
            }
        },

        daysTo_msecs: function (days_count) {
            return days_count * 24 * 3600 * 1000
        },

        getTimeZoneString: function (obj) {
            var scheduleTimeZone = parseInt($('#' + obj.prefix + obj.fieldNames["TIME_ZONE"]).find("option:selected").val());
            if (scheduleTimeZone === 0) {
                return "GMT";
            }

            var timeZoneHours = 0;
            if (scheduleTimeZone > 0) {
                timeZoneHours = Math.floor(scheduleTimeZone / 60).toString();
                if (timeZoneHours.length < 2) {
                    timeZoneHours = "+0" + timeZoneHours;
                } else {
                    timeZoneHours = "+" + timeZoneHours;
                }
            } else {
                timeZoneHours = Math.ceil(scheduleTimeZone / 60).toString();
                if (timeZoneHours.length === 2) {
                    timeZoneHours = "-0" + timeZoneHours.substr(1);
                }
            }
            var timeZoneMinutes = Math.abs((scheduleTimeZone % 60)).toString();
            if (timeZoneMinutes.length < 2) {
                timeZoneMinutes = "0" + timeZoneMinutes;
            }

            return 'GMT ' + timeZoneHours + ':' + timeZoneMinutes;
        },

        formatTime: function (date) {
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }

            var month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }

            var year = date.getFullYear();
            var hour = date.getHours();
            if (hour < 10) {
                hour = "0" + hour;
            }
            var minute = date.getMinutes();
            if (minute < 10) {
                minute = "0" + minute;
            }

            var outputString = day + "." + month + "." + year + " " + hour + ":" + minute;

            return outputString;
        }
    };


    /**
     * Добавляем плагин к методам jQuery
     * @param {Object} params
     * @returns {SearchByIdPlugin}
     */
    $.fn.conferenceSchedulePlugin = function (params) {
        //Получаем объект плагина из данных контейнера к которому цепляется плагин
        var plugin = this.data('conferenceSchedulePlugin');
        //Если плагин не найден, или false создаем его
        if (plugin === undefined || plugin === false) {
            //Создаем новый объект из основного объекта плагина
            var plugin = $.extend(true, {}, std_obj);
            //Объединяем объект плагина и класс searchByIdPlugin
            $.extend(true, plugin, $.searchByIdPlugin);
            //Объединяем объект плагина и параметры, переданные на плагин
            $.extend(true, plugin, params);
            //Генерируем уникальный префикс для плагина
            plugin.prefix = generateUniqueId(plugin.prefix) + "_";
            //Устанавливаем родителя в объект плагина
            plugin.parentObject = this;
            //Генерируем все html-данные плагина, и добавляем их к текущему контейнеру
            this.append(plugin.getContainer(plugin));
            //Сохраняем объект плагина в данные контейнреа
            this.data('conferenceSchedulePlugin', plugin);
            //Вызываем коллбэк, что плагин был создан
            plugin.onCreated(plugin, params);
        }
        //Возвращаем объект плагина
        return plugin;
    };

})(jQuery);

