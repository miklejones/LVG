var map;
var service;
var infowindow;
var pyrmont;
var lat = 0;
var long = 0;
var tempType = '';
var funList = [];

function initialize(lat, long) {
    pyrmont = new google.maps.LatLng(lat, long);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            funList.push(place);
            createMarker(place);
            // console.log(place);
        }
    }
}

function onPositionReceived(position) {
    console.log(position);

    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat);
    console.log(long);


    $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAS6rcW7TumaYUczp3JckeTH46aA7D2WyU`
    }).then(function (res) {
        console.log(res);

        //make the address components more manageable to manipulate
        let addComp = res.results[0].address_components;

        //run throught the components looking for postal code and then pulling the short_name
        for (let i = 0; i < addComp.length; i++) {
            if (addComp[i]['types'] == 'postal_code') {
                let zipObj = addComp[i];
                let zip = zipObj.short_name;
                console.log(zip);
                $(".location").text(zip);
            }
        }
        console.log(funList);   
        

    });

    initialize(position.coords.latitude, position.coords.longitude);

    var request = {
        location: pyrmont,
        radius: '500',
        type: ['restaurants']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request = {
        location: pyrmont,
        radius: '1000',
        type: ['restaurant']
    };

    service.nearbySearch(request, callback);

    var request = {
        location: pyrmont,
        radius: '1000',
        type: ['shopping_mall']
    };

<<<<<<< HEAD
var googlePlaces = $("<div>");
googlePlaces.text(response.whatever-you-want-from-the-response);
$("#your-container-div-id").append(googlePlaces);
=======
    service.nearbySearch(request, callback);

    //code that will pick three random options and push them to the DOM
    
   

}


function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    // google.maps.event.addListener(marker, 'click', function () {
    //     infowindow.setContent(place.name);
    //     infowindow.open(map, this);
    // });
    var infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div id="info-window"><strong>' + place.name + '</strong><br>' +
          'Address: ' + place.vicinity + '</div>');
        infowindow.open(map, this);
      });
}
>>>>>>> 7ed585f0ee35abcb2b67f2fc454514b77e054f55



function locationNotReceived(positionError) {
    console.log(positionError);
}

$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
    }

});





