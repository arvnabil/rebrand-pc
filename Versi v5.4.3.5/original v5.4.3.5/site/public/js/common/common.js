function ListCheckAll(mark,frm_name,ele_name)
{
    var elements_length = document.forms[frm_name].elements.length;
    for (i = 0; i < elements_length; i++) 
    {    
        var item = document.forms[frm_name].elements[i];
        if (item.name == ele_name) {
            item.checked = mark;
        }
    }
    
    $('#'+frm_name+' input[name="'+ele_name+'"]:first').trigger('change');
    
}
   
function MultiCheckAll(id, obj) 
{
    if($(obj).is(":checked"))
        $("#" + id + " option").attr("selected", "selected");
    else
        $("#" + id + " option").removeAttr("selected");
}


function MultiMove(id_from, id_to)
{
    $("#" + id_from + " option:selected").remove().appendTo("#" + id_to).removeAttr("selected");
    
    $("#" + id_from + "-checkbox").attr("checked", false);
    $("#" + id_to + "-checkbox").attr("checked", false);
}


function htmlentities(text)
{
   var replacements = Array("&", "<", ">", '"', "'");
   var chars = Array("&amp;", "&lt;", "&gt;", "&quot;", "'");
    
   for (var i = 0; i < chars.length; i++)
   {
       var re = new RegExp(chars[i], "gi");
       if(re.test(text))
       {
           text = text.replace(re, replacements[i]);
       }
   }
   return text;
}

function deleteList(delete_url, data_name, data, step, count, current_count) {
    
    var list = {};
    list[data_name] = data.slice(0,step);
    
    var current_count = (current_count) ? (current_count + list[data_name].length) : (list[data_name].length);
    var count = count || data.length;
    
    if ( (count - current_count + list[data_name].length) <= step) {
        list['last_step'] = 1;
    }
    
    $.ajax({
        url: delete_url,
        data: list,
        type: "POST",
        beforeSend: function () {
            Server.showLoadEffect();
        },
        success: function () {
            data.splice(0,step);
            if (data.length > 0) {
                $('#procents').remove();
                $("div.cont span.msg").append('<span id="procents">' + parseInt(( (current_count*100) / count )) + '%</span>');
                deleteList(delete_url, data_name, data, step, count, current_count);
            } else {
                location.reload();
            }
        },
        error: function () {
            location.reload();
        },
        dataType: 'json'
    });
}