$(document).ready(function() {
//Pulls number of photo clicked
var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('img');
console.log("This is myParam: " + myParam);
var myNewParam = myParam.replace("file:///C:/Users/Morgan/Desktop/coding/freelance/nick_portfolio/darlingnickv.github.io/photos/the-crack-in-everything/crack", "");
var myNewestParam = myParam.replace("https://darlingnickv.github.io/photos/the-crack-in-everything/crack", "");

console.log("This is the new param: " + myNewestParam);
var myFinalParamNum = myNewestParam.replace('.jpg', '');
console.log("This is the final param: " + myFinalParamNum);
  $(function() {
    $('#carouselExampleControls').carousel(parseInt(myFinalParamNum));
    console.log("Opening Carousel");
  });
var natureFirstArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
var myParamNum = parseInt(myFinalParamNum);
console.log("The number: " + myParamNum);
//finds the index number of the matching value in the natureFirstArray
function startingIndexFunction(element) {

    return element == myParamNum;
  }
  console.log(natureFirstArray.findIndex(startingIndexFunction));
  var startingIndex = natureFirstArray.findIndex(startingIndexFunction);
  var j;
  for(var i = 0,j = 0; i < 9, j < natureFirstArray.length; i++, j++) {
      console.log("This is i, the position of the photo in the array: " + i);
       //Loops through natureFirstArray to start the grid images based on what photo was selected by the user

var offset = startingIndex;
var pointer = (j + offset) % natureFirstArray.length;
var srcNum = natureFirstArray[pointer];
console.log("This is the srcNum that set as the url in this for loop :" + srcNum);

var srcUrl = "photos/the-crack-in-everything/crack" + srcNum + ".jpg";
$("#nSlide" + i).attr("src", srcUrl);
$("#nSlide" + i).attr("data-imgNum", srcNum); 
  }

});