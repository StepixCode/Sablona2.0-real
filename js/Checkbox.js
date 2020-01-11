
$(document).ready(function(){
    $(".responsive-filter-btn").click(function(){
        responsiveLayout();
    });
    $(".responsive-close-left").click(function(){
        responsiveLayout();
    });

    $(window).resize(function() {
        var win =  $(window).width(); 
        if (win >= 992 && $("#left-layout-col").hasClass("layout-show")) 
        { 
            responsiveLayout();
        }
    });


//Zobrazí / skryje responzivní leftMenu u produkt layoutu
function responsiveLayout(){
    $("#left-layout-col").toggleClass("layout-show");
    $("#left-layout-col").toggleClass("d-none");
    $("#left-layout-col").toggleClass("col-4");
    $(".responsive-close-left").toggleClass("d-none");
    $(".product-layout-aside").toggleClass("col-12");
}






});
function resetCheckbox(number,boxName)
{
    for(var i = 0; i < document.getElementsByClassName(boxName).length; i++){
        if(i != number)
            document.getElementsByClassName(boxName)[i].checked = false;

    }
}
