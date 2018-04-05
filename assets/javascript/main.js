var map;
var service;
var infowindow;
var pyrmont;

function initialize(lat, long) {
    pyrmont = new google.maps.LatLng(lat, long);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);
        }
    }
}

function onPositionReceived(position) {
    console.log(position);

    initialize(position.coords.latitude, position.coords.longitude);

    var request = {
        location: pyrmont,
        radius: '500',
        type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function locationNotReceived(positionError) {
    console.log(positionError);
}

$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
    }
});



