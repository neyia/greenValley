/**
 * Created by nzhyrkova on 06.06.2016.
 */

$(document).ready(function(){
    
    $('.promo-slider__pagination a').click(function(e) {
        e.preventDefault();
        
        $('.promo-slider__pagination a').removeClass('link--underline-active');
        $(this).addClass('link--underline-active');

        var tab = $(this).attr('href');
        $('.promo-slider__item').not(tab).css({'display':'none'});

        var tab2 = $(this).attr('href')+'0';
        
        $('.healthy-rest__slide-item').css({'display':'block'}).not(tab2).css({'display':'none'});
        
        $(tab).fadeIn(400);
    });
    
});