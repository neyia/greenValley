/**
 * Created by nzhyrkova on 06.06.2016.
 */

$(document).ready(function(){

    $('#sandwich').on('click', function (e) {
        e.preventDefault();
        $('.main-nav--sliding').slideToggle('slow');
    });

    $('.about-room__slider .zoom').fancybox({
        'transitionIn'  : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }

    });

});