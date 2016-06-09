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

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: false,
        pagination: false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200
    });

    sync2.owlCarousel({
        items : 5,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination: false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
        }
    }

    $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
    });

    function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
            if(num === sync2visible[i]){
                var found = true;
            }
        }

        if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
        }

    }

    //-----------------------------------------------------------

    var owl = $("#owl-demo");
    var owlL = $(".shares__slider-wrapper");

    owl.owlCarousel({
        items : 2,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination: false
    });

    owlL.owlCarousel({
        items : 1,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination:true
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    });
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    });


    //-----------------------------------------------------------

        $('.our-location__map').each(function(){
            var container = this;
            var latlng = new google.maps.LatLng(
                parseFloat($(container).data('lat')),
                parseFloat($(container).data('lng'))
            );
            var infowindow = new google.maps.InfoWindow({ content: '<div class="map_content">' +
            'Центр стоматологии и имплантации Velum' +
            '</div>'});
            var mapOptions = {
                zoom: parseInt($(container).data('zoom')),
                center: latlng,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                scrollwheel: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(container, mapOptions);
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: $(container).data('marker')
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
            google.maps.event.addListener(map, 'click', function(event){
                if(infowindow != null){
                    infowindow.close();
                }
            });
        });


});