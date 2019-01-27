

var myUrl = window.location.href.toString();
var lastChar = myUrl.charAt(myUrl.length - 1);
console.log(lastChar);
$(function() {
    $('#carouselExampleControls').carousel(parseInt(lastChar));
});
