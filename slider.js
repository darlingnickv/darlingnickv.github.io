$(document).ready(function() {
    console.log("congrats u made it to the slider.js that opens the carousel u genius");
//Pulls number of photo clicked
var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('img');
console.log(myParam);


$(function() {
    $('#carouselExampleControls').carousel(parseInt(myParam));
    console.log("DOIN THINGS... OPENING CAROUSEL... OR AT LEAST I SHOULD BE???");
});
});

