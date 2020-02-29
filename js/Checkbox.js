
$(document).ready(function(){
    $(".layout-grid").addClass("active");

    //#region  Reszponzivní filtry
    $(".responsive-filter-btn").click(function(){
        responsiveLayout();
    });
    $(".responsive-close-left").click(function(){
        responsiveLayout();
    });
    //#endregion

    $(".info-nav-link").click(function(){        
        $(this).children(":first").prop('checked', true);
    });


    $(window).resize(function() {
       
        //#region  Responzivní filtry
        var win =  $(window).width(); 
        if (win >= 992 && $("#left-layout-col").hasClass("layout-show")) 
        { 
            responsiveLayout();
        }
        //#endregion
    
    });


//Zobrazí / skryje responzivní leftMenu u produkt layoutu
function responsiveLayout(){
    $("#left-layout-col").toggleClass("layout-show");
    $("#left-layout-col").toggleClass("d-none");
    $("#left-layout-col").toggleClass("col-4");
    $(".responsive-close-left").toggleClass("d-none");
    $(".product-layout-aside").toggleClass("col-12");
}

//#region Typ layoutu
$(".layout-grid").click(function(){
    
    if(!$(".product-layout-row").hasClass('layout-4')){
        $(".product-layout-row").addClass("three-product-row");
        $('.product').attr('class','col-12 col-md-6 col-lg-4 pr-0 pr-lg-3 pr-md-3 product');
    }else{
        $('.product').attr('class','col-12 col-md-6 col-lg-3 pr-0 pr-lg-3 pr-md-3 product');
    }
    
    $(".product-layout-row").removeClass("list-product-row");
    $(this).addClass("active");
    $(".layout-list").removeClass("active");
});
$(".layout-list").click(function(){
    
    if(!$(".product-layout-row").hasClass('layout-4')){
        $(".product-layout-row").removeClass("three-product-row");
    }

    $(".product-layout-row").addClass("list-product-row");
    $('.product').attr('class','product');
    $('.product').addClass('col-12');
    $(this).addClass("active");
    $(".layout-grid").removeClass("active");
});
//#endregion


});


//Pokud je někde víc checkboxů jedné classy bude aktviní jen jeden z nich
function resetCheckbox(number,boxName)
{
    for(var i = 0; i < document.getElementsByClassName(boxName).length; i++){
        if(i != number)
            document.getElementsByClassName(boxName)[i].checked = false;

    }
}
function checkCheckbox(boxName,checkFalse = true)
{
    if(document.getElementById(boxName).checked == false && checkFalse == true)
        document.getElementById(boxName).checked = true;
    else
        document.getElementById(boxName).checked = false;

}
function checkCheckboxes(boxName,checkFalse = true)
{
    var checkboxes = document.getElementsByClassName(boxName);
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked == false && checkFalse == true)
            checkboxes[i].checked = true;
        else
            checkboxes[i].checked = false;
    }


}

function productDetailCarousel(){
    $('.reviews-carousel').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        autoHeight:true,
        nav: true,
        navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
                loop:false,
            }
        }
    })
}
