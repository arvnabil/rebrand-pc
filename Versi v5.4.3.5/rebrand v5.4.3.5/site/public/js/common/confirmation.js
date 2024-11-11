var Confirm = {};

Confirm.id = "#js_confirmation"; // id перманентного div в шаблоне base.twig

/*
    По умолчанию диалог вызывается для формы, а не для ссылки. Для ссылки нужно вторым параметром в Confirm.dialog передавать url для редиректа.
    Пример ссылки с диалогом подтверждения:
        <a href="http://trueconf.ru" onclick="Confirm.dialog('Вопрос?', this.href); return !1;">Ссылка</a>
        или
        <a href="" onclick="Confirm.dialog('Вопрос?', 'http://trueconf.ru'); return !1;">Ссылка</a>
*/
Confirm.link = false;

Confirm.form_id = '';

/**
 *   Выводит диалоговое окно взаимодействия с пользователем (ok, cancel)
 *   param может быть: 
 *       - строка с id формы (может начинаться с # или нет);
 *       - непосредственно строка с вопросом (вариант для ссылок);
 */
Confirm.dialog = function(param, link) {

    this.prepare(param, link);
    
    $(this.id).dialog({
                title: t._question,
                autoOpen: true,
                position: ['center','center'],
                closeOnEscape: true,
                draggable: true,
                modal: true,
                resizable: false,
                dialogClass: 'dialog-question-form',
                width: 400,
                height: 150,
                buttons: [
                    {
                        text: t._ok,
                        click: this.ok
                    },
                    {
                        text: t._cancel,
                        click: this.cancel
                    }
                ]
        });
    
};

/**
 * Назначаем свойства классу. Добавляем в перманентный блок (который будет
 * содержать диалог) вопрос к пользователю.
 */
Confirm.prepare = function (param, link) {
  if (link) {
    $(this.id).html(param);
    this.link = link;
  } else {
    this.form_id = param.charAt(0) != '#' ? '#' + param : param;
    $(this.id).html($(this.form_id + " .question").html());
  }
};

/**
 * Обработка положительного ответа в контексте диалога.
 * В случае с формой выполняется submit оной.
 */
Confirm.ok = function () {
  $(this).dialog("close");
  if (Confirm.link)
    document.location.href = Confirm.link;
  else
    $(Confirm.form_id)[0].submit();
};

/**
 * Обработка отрицательного ответа в контексте диалога
 */
Confirm.cancel = function() {
    $(this).dialog("close");
};

Confirm.func = function(message, func, ok_text, cancel_text) {
    $(this.id).html(message);
    var ok_text = typeof(ok_text) === 'undefined' ? t._ok : ok_text;
    var cancel_text = typeof(cancel_text) === 'undefined' ? t._cancel : cancel_text;

    $(this.id).dialog({
            title: t._warning,
            autoOpen: true,
            position: ['center','center'],
            closeOnEscape: true,
            draggable: true,
            modal: true,
            resizable: false,
            dialogClass: 'dialog-question-form',
            width: 'auto',
            height: 150,
            buttons: [
                {
                    text: ok_text,
                    click: function () {$(this).dialog("close"); func();}
                },
                {
                    "class": "hack_for_japanese_cancel_button",
                    text: cancel_text,
                    click: function() {$(this).dialog("close");}
                }
            ]
    });
};
