$(document).ready(function() {
    console.log("ow OWWWW (;");
//Pulls number of photo clicked
var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('img');
console.log(myParam);


$(function() {
    $('#carouselExampleControls').carousel(parseInt(myParam));
    console.log("DOIN THINGS... OPENING CAROUSEL... OR AT LEAST I SHOULD BE???");
});
});

