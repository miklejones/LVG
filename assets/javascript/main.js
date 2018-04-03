
// Adding click event listen listener to all buttons
$("#run-search").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // geolocation
    var queryURL1 = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDHegTvoYcDXW5dGr4-Nlq2Ocuhq733V_I";
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.yelp.com/v3/businesses/search";
    // Here we grab the text from the input box
    var city = $("#city-input").val();

    // yelp api key
    queryURL += "sBLewF9JJvwNNvQR-3G6jn6R2OSVBAFU_ngzjtX0aPTQlvnKJRCGktgIjcN8F8ZCwLUlp2Zh3zJpa7WnYx=10";
    // open weather key
    queryURLweather +="https://api.openweathermap.org/data/2.5/weather?q" + city + "&appid=0376d3f7071bd7a61aec6379bed27dbc";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#well-section").text(JSON.stringify(response));

        var results = response.data;
        console.log(results);
    })

});