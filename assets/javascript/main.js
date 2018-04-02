// Adding click event listen listener to all buttons
$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var nightLife = $(this).attr("data-places");

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
    })
});