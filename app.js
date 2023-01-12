$(function(){
    let headerH = $("#header");
    let introH = $("#intro").innerHeight();
    let scroll = $(this).scrollTop();
    let dataScrollEl = $('[data-scroll]');
    let blockOffsetTop = [];
    let blockHeight = [];
    reloadPageOptimize(scroll, introH);
    
    for (let i = 1; i < 6; i++){
        var element = $(dataScrollEl[i]).data('scroll');
        var elementOfftop = $(element).offset().top;
        var elementHeight = $(element).innerHeight();
        
        blockOffsetTop[i] = elementOfftop - 80;
        blockHeight[i] = elementOfftop + elementHeight - 300;
    }
    
    console.log(blockOffsetTop);
    console.log(blockHeight);

    /* Fixed Header */
    $(window).on('scroll resize', function(){
        let introH = $("#intro").innerHeight();
        let scroll = $(this).scrollTop();
        
        console.log(scroll);

        reloadPageOptimize(scroll, introH);
        
        if(scroll > blockOffsetTop[1] && scroll < blockHeight[1]){
            $("#nav a").removeClass('active');
            $(dataScrollEl[1]).addClass('active');
        }
        else if(scroll > blockOffsetTop[2] && scroll < blockHeight[2]){
            $("#nav a").removeClass('active');
            $(dataScrollEl[2]).addClass('active');
        } 
        else if(scroll > blockOffsetTop[3] && scroll < blockHeight[3]){
            $("#nav a").removeClass('active');
            $(dataScrollEl[3]).addClass('active');
        } 
        else if(scroll > blockOffsetTop[4] && scroll < blockHeight[4]){
            $("#nav a").removeClass('active');
            $(dataScrollEl[4]).addClass('active');
        } 
        else if(scroll > blockOffsetTop[5]){
            $("#nav a").removeClass('active');
            $(dataScrollEl[5]).addClass('active');
        } 
        else{
            $("#nav a").removeClass('active');
        }
    });

    /* Smooth Scroll */
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let scrollId = $(this).data('scroll');
        let scrollOffset = $(scrollId).offset().top;
        console.log(scrollOffset);
        
        $("#nav a").removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: scrollOffset + 10
        }, 1000);
        
        $("#nav").removeClass('active');
        $("#toggle").removeClass('active');
        
    });
    
    /* Toggle */
    $('#toggle').on("click", function(event){
         event.preventDefault();
        
         $(this).toggleClass('active');
         $('#nav').toggleClass("active");
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
    
    /* Data Collapse*/
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();
        
        $(this).toggleClass('line');
        $(this).toggleClass('active');
    }); 
});
