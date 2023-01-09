$(function(){
    let headerH = $("#header");
    let introH = $("#intro").innerHeight();
    let scroll = $(this).scrollTop();

    reloadPageOptimize(scroll, introH);

    /* Fixed Header */
    $(window).on('scroll resize', function(){
        let introH = $("#intro").innerHeight();
        let scroll = $(this).scrollTop();

        reloadPageOptimize(scroll, introH);
    });

    /* Smooth Scroll */
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let scrollId = $(this).data('scroll');
        let scrollOffset = $(scrollId).offset().top;

        $('html, body').animate({
            scrollTop: scrollOffset + 10
        }, 1000);
    });

    /* Functions */
    function reloadPageOptimize(scroll, introH){
        if (scroll > introH){
            headerH.addClass('fixed');
        }
        else{
            headerH.removeClass('fixed');
        }
    }
});
