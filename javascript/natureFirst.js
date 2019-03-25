$(document).ready(function() {
    var natureFirstArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    //Pulls number of photo clicked
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('img');
    var myParamNum = parseInt(myParam);
    console.log("The number: " + myParamNum);
    //finds the index number of the matching value in the natureFirstArray
    function startingIndexFunction(element) {

        return element == myParamNum;
      }
      console.log(natureFirstArray.findIndex(startingIndexFunction));
      var startingIndex = natureFirstArray.findIndex(startingIndexFunction);
      var j;
      for(var i = 0,j = 0; i < 20, j < natureFirstArray.length; i++, j++) {
          console.log(i);
           //Loops through natureFirstArray to start the grid images based on what photo was selected by the user

    var offset = startingIndex;
    var pointer = (j + offset) % natureFirstArray.length;
    console.log("The array loop: " + natureFirstArray[pointer]);
    var srcNum = natureFirstArray[pointer];
    
    var srcUrl = "photos/the-crack-in-everything/crack" + srcNum + ".jpg";
    $("#pic" + i).attr("src", srcUrl);
    $("#pic" + i).attr("data-imgNum", srcNum);
    

      }

    
    
});