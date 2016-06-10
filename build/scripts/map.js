/**
 * Created by neyia on 10.06.2016.
 */

$(document).ready(function(){
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