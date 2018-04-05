$(document).ready(function () {

    var loc = document.getElementById("myloc");

    function onPositionReceived(position) {
        console.log(position);
    }
        function locationNotReceived(positionError) {
        console.log(positionError);
    }
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);

    }


});

// Adding click event listen listener to all buttons

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    // event.preventDefault();

    // geolocation
    // var queryURLgeo = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDHegTvoYcDXW5dGr4-Nlq2Ocuhq733V_I";

    // queryURL is the url we'll use to query the API


    // yelp api key

    // var queryURL = "https://maps.googleapis.com/maps/api/js?AIzaSyAS6rcW7TumaYUczp3JckeTH46aA7D2WyU";

    // open weather key
    // queryURLweather +="https://api.openweathermap.org/data/2.5/weather?q" + queryURLgeo + "&appid=0376d3f7071bd7a61aec6379bed27dbc";

    // Performing an AJAX request with the queryURL
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     $(".container").text(JSON.stringify(response));
    //     console.log(response);
    //
    //     var results = response.data;
    //     console.log(results);
    //
    // })
//
//
// });