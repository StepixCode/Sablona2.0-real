
function resetCheckbox(number)
{
    for(var i = 0; i < document.getElementsByClassName("submenu-checkbox").length; i++){
        if(i != number)
            document.getElementsByClassName("submenu-checkbox")[i].checked = false;

    }
}