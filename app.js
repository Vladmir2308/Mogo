$(function(){
    let headerH = $("#header");
    let introH = $("#intro").innerHeight();
    let scroll = $(this).scrollTop();
    let linkOnClick = "#about";
    
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
        
        if(linkOnClick == $(this).data('scroll')){
            $(this).removeClass('active');
            linkOnClick = $(this).data('scroll');
        }
        else{
            $(this).addClass('active');
        }

        let scrollId = $(this).data('scroll');
        let scrollOffset = $(scrollId).offset().top;
        
        console.log(scrollOffset);
        
        $('html, body').animate({
            scrollTop: scrollOffset + 10
        }, 1000);
    });
    
    function reloadPageOptimize(scroll, introH){
        if (scroll > introH){
            headerH.addClass('fixed');
        }
        else{
            headerH.removeClass('fixed');
        }
    }
});