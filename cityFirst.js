$(document).ready(function() {
    var cityFirstArray = [1, 2, 3];
    //Pulls number of photo clicked
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('img');
    var myParamNum = parseInt(myParam);
    console.log("The number: " + myParamNum);
    //finds the index number of the matching value in the natureFirstArray
    function startingIndexFunction(element) {

        return element == myParamNum;
      }
      console.log(cityFirstArray.findIndex(startingIndexFunction));
      var startingIndex = cityFirstArray.findIndex(startingIndexFunction);
      var j;
      for(var i = 0,j = 0; i < 9, j < cityFirstArray.length; i++, j++) {
          console.log(i);
           //Loops through cityFirstArray to start the grid images based on what photo was selected by the user

    var offset = startingIndex;
    var pointer = (j + offset) % cityFirstArray.length;
    console.log("The array loop: " + cityFirstArray[pointer]);
    var srcNum = cityFirstArray[pointer];
    
    var srcUrl = "https://picsum.photos/200/200/?image=" + srcNum;
    $("#pic" + i).attr("src", srcUrl);
    $("#pic" + i).attr("data-imgNum", srcNum);
    

      }

    
    
});