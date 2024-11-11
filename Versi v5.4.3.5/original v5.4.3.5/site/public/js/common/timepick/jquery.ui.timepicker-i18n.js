jQuery(function ($) {
    $.timepicker.regional['en'] = $.timepicker.regional[''];
    $.timepicker.regional['ru'] = {
            timeOnlyTitle: 'Выберите время',
            timeText: 'Время',
            hourText: 'Часы',
            minuteText: 'Минуты',
            secondText: 'Секунды',
            millisecText: 'Миллисекунды',
            microsecText: 'Микросекунды',
            timezoneText: 'Часовой пояс',
            currentText: 'Сейчас',
            closeText: 'Закрыть',
            timeFormat: 'HH:mm',
            amNames: ['AM', 'A'],
            pmNames: ['PM', 'P'],
            isRTL: false
        };

    $.timepicker.regional['be'] = {
        timeOnlyTitle: 'Выберыце час',
        timeText: 'Час',
        hourText: 'Гадзіннік',
        minuteText: 'Хвіліны',
        secondText: 'Секунды',
        millisecText: 'Мілісекунды',
        microsecText: 'Мікрасекунды',
        timezoneText: 'Гадзінны пояс',
        currentText: 'Зараз',
        closeText: 'Зачыніць',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['cs'] = {
        timeOnlyTitle: 'Vyberte čas',
        timeText: 'Čas',
        hourText: 'Hodiny',
        minuteText: 'Minuty',
        secondText: 'Vteřiny',
        millisecText: 'Milisekundy',
        microsecText: 'Mikrosekundy',
        timezoneText: 'Časové pásmo',
        currentText: 'Nyní',
        closeText: 'Zavřít',
        timeFormat: 'HH:mm',
        amNames: ['dop.', 'AM', 'A'],
        pmNames: ['odp.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['es'] = {
        timeOnlyTitle: 'Elegir una hora',
        timeText: 'Hora',
        hourText: 'Horas',
        minuteText: 'Minutos',
        secondText: 'Segundos',
        millisecText: 'Milisegundos',
        microsecText: 'Microsegundos',
        timezoneText: 'Uso horario',
        currentText: 'Hoy',
        closeText: 'Cerrar',
        timeFormat: 'HH:mm',
        amNames: ['a.m.', 'AM', 'A'],
        pmNames: ['p.m.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['pl'] = {
        timeOnlyTitle: 'Wybierz godzinę',
        timeText: 'Czas',
        hourText: 'Godzina',
        minuteText: 'Minuta',
        secondText: 'Sekunda',
        millisecText: 'Milisekunda',
        microsecText: 'Mikrosekunda',
        timezoneText: 'Strefa czasowa',
        currentText: 'Teraz',
        closeText: 'Gotowe',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['pt'] = {
        timeOnlyTitle: 'Escolha uma hora',
        timeText: 'Hora',
        hourText: 'Horas',
        minuteText: 'Minutos',
        secondText: 'Segundos',
        millisecText: 'Milissegundos',
        microsecText: 'Microssegundos',
        timezoneText: 'Fuso horário',
        currentText: 'Agora',
        closeText: 'Fechar',
        timeFormat: 'HH:mm',
        amNames: ['a.m.', 'AM', 'A'],
        pmNames: ['p.m.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['pt-BR'] = {
        timeOnlyTitle: 'Escolha o horário',
        timeText: 'Horário',
        hourText: 'Hora',
        minuteText: 'Minutos',
        secondText: 'Segundos',
        millisecText: 'Milissegundos',
        microsecText: 'Microssegundos',
        timezoneText: 'Fuso horário',
        currentText: 'Agora',
        closeText: 'Fechar',
        timeFormat: 'HH:mm',
        amNames: ['a.m.', 'AM', 'A'],
        pmNames: ['p.m.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['de'] = {
        timeOnlyTitle: 'Zeit wählen',
        timeText: 'Zeit',
        hourText: 'Stunde',
        minuteText: 'Minute',
        secondText: 'Sekunde',
        millisecText: 'Millisekunde',
        microsecText: 'Mikrosekunde',
        timezoneText: 'Zeitzone',
        currentText: 'Jetzt',
        closeText: 'Fertig',
        timeFormat: 'HH:mm',
        amNames: ['vorm.', 'AM', 'A'],
        pmNames: ['nachm.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['fr'] = {
        timeOnlyTitle: 'Choisir une heure',
        timeText: 'Heure',
        hourText: 'Heures',
        minuteText: 'Minutes',
        secondText: 'Secondes',
        millisecText: 'Millisecondes',
        microsecText: 'Microsecondes',
        timezoneText: 'Fuseau horaire',
        currentText: 'Maintenant',
        closeText: 'Terminé',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['it'] = {
        timeOnlyTitle: 'Scegli orario',
        timeText: 'Orario',
        hourText: 'Ora',
        minuteText: 'Minuti',
        secondText: 'Secondi',
        millisecText: 'Millisecondi',
        microsecText: 'Microsecondi',
        timezoneText: 'Fuso orario',
        currentText: 'Adesso',
        closeText: 'Chiudi',
        timeFormat: 'HH:mm',
        amNames: ['m.', 'AM', 'A'],
        pmNames: ['p.', 'PM', 'P'],
        isRTL: false
    };

    $.timepicker.regional['nl'] = {
        timeOnlyTitle: 'Tijdstip',
        timeText: 'Tijd',
        hourText: 'Uur',
        minuteText: 'Minuut',
        secondText: 'Seconde',
        millisecText: 'Milliseconde',
        microsecText: 'Microseconde',
        timezoneText: 'Tijdzone',
        currentText: 'Vandaag',
        closeText: 'Sluiten',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };

    /**
     * Locale : Chinese (China) [zh-cn]
     * Source: https://raw.githubusercontent.com/trentrichardson/jQuery-Timepicker-Addon/master/dist/i18n/jquery-ui-timepicker-addon-i18n.min.js
     */
    $.timepicker.regional['zh'] = {
        timeOnlyTitle: "选择时间",
        timeText: "时间",
        hourText: "小时",
        minuteText: "分钟",
        secondText: "秒钟",
        millisecText: "毫秒",
        microsecText: "微秒",
        timezoneText: "时区",
        currentText: "现在时间",
        closeText: "关闭",
        timeFormat: "HH:mm",
        timeSuffix: "",
        amNames: ["AM", "A"],
        pmNames: ["PM", "P"],
        isRTL: false
    };

    /**
     * Locale : Vietnamese [vi]
     * Source: https://raw.githubusercontent.com/trentrichardson/jQuery-Timepicker-Addon/master/dist/i18n/jquery-ui-timepicker-addon-i18n.min.js
     */
    $.timepicker.regional['vi'] = {
        timeOnlyTitle: "Chọn giờ",
        timeText: "Thời gian",
        hourText: "Giờ",
        minuteText: "Phút",
        secondText: "Giây",
        millisecText: "Mili giây",
        microsecText: "Micrô giây",
        timezoneText: "Múi giờ",
        currentText: "Hiện thời",
        closeText: "Đóng",
        timeFormat: "HH:mm",
        timeSuffix: "",
        amNames: ["SA", "S"],
        pmNames: ["CH", "C"],
        isRTL: false
    };

    /**
     * Locale : Ukrainian [uk]
     * Source: https://github.com/trentrichardson/jQuery-Timepicker-Addon/blob/master/src/i18n/jquery-ui-timepicker-uk.js
     */
    $.timepicker.regional['uk'] = {
        timeOnlyTitle: 'Виберіть час',
        timeText: 'Час',
        hourText: 'Години',
        minuteText: 'Хвилини',
        secondText: 'Секунди',
        millisecText: 'Мілісекунди',
        microsecText: 'Мікросекунди',
        timezoneText: 'Часовий пояс',
        currentText: 'Зараз',
        closeText: 'Закрити',
        timeFormat: 'HH:mm',
        timeSuffix: '',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };

    /**
     * Locale : Persian [fa]
     * Source: https://github.com/trentrichardson/jQuery-Timepicker-Addon/blob/master/src/i18n/jquery-ui-timepicker-fa.js
     */
    $.timepicker.regional['fa'] = {
        timeOnlyTitle: 'انتخاب زمان',
        timeText: 'زمان',
        hourText: 'ساعت',
        minuteText: 'دقیقه',
        secondText: 'ثانیه',
        millisecText: 'میلی ثانیه',
        microsecText: 'میکرو ثانیه',
        timezoneText: 'منطقه زمانی',
        currentText: 'الان',
        closeText: 'انتخاب',
        timeFormat: 'HH:mm',
        timeSuffix: '',
        amNames: ['قبل ظهر', 'AM', 'A'],
        pmNames: ['بعد ظهر', 'PM', 'P'],
        isRTL: true
    };
});

