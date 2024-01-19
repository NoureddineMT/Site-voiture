$(document).ready(function(){

    $(".img_container img:first-child").addClass("active");

    $("#burger_menu").click(function(){
        $("#scrolling_menu").slideToggle();
        $("#burger_menu").toggleClass("bg-color-white");
        $("#burger_menu div").toggleClass("bg-color-black");
    });

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".toBeFaded").fadeIn(2000);
        }
    });

    var nbrImgs;
    var counter;
    var leftValue;

    function init(elem) {
        counter = elem.parent().find(".img_container img.active").index();
        leftValue = counter * -100;
        nbrImgs = elem.parent().find(".img_container img").length;
    }

    function handleCarousel(scenario, elem) {

        var eqPosition;

        if(scenario == 1) {
            eqPosition = counter - 1;
            leftValue += 100;
        } else {
            eqPosition = counter + 1;
            leftValue -= 100;
        }

        elem.parent().find(".img_container img").removeClass("active");
        elem.parent().find(".img_container img").eq(eqPosition).addClass("active");
        elem.parent().find(".img_container").animate({left : leftValue + "%"}, 1000);

    }

    $(".arrow_left").click(function(){

        init($(this));
        if(counter > 0) {
            handleCarousel(1, $(this));
        }

    });

    $(".arrow_rigth").click(function(){

        init($(this));
        if(counter < nbrImgs - 1) {
            handleCarousel(2, $(this));
        }

    });

});