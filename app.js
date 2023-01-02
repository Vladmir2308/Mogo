$(function(){
    let headerH = $("#header");
    let introH = $("#intro").innerHeight();
    let scroll = $(this).scrollTop();
    let linkOnClick = "";
    
    let heightSection = [964, 1606, 1990, 2616];
    let dataScroll = $('[data-scroll]');
    
    console.log($('#service').offset().top);
    console.log($('#service').innerHeight());
    
    let i = 0;
    let j = 0;
    let trigger = 0;
    
    reloadPageOptimize(scroll, introH);
    
    /* Fixed Header */
    $(window).on('scroll resize', function(){
        let introH = $("#intro").innerHeight();
        let scroll = $(this).scrollTop();

        reloadPageOptimize(scroll, introH);
        
        if(scroll > heightSection[i] && scroll < heightSection[i+1]){
            $(dataScroll[j]).addClass('active');
            
            trigger = 1;
        }
        else{
            $(dataScroll[j]).removeClass('active');
            
            if(trigger == 1){
                if (scroll < heightSection[i]){
                    if (i == 0)
                        return;
                    else{
                        i -= 2;
                        j--; 
                    }
                }
                
                if(scroll > heightSection[i+1]){
                    i += 2;
                    j++
                }
                
                trigger = 0;
            }
        }
        
        console.log(scroll);
        console.log("trigger = " + trigger);
        console.log("i = " + i);
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