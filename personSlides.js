$(document).ready(function() {
    //Pulls number of photo clicked
    console.log("The personSlides.js is connected.")
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('img');
    console.log(myParam);
    var personFirstArray = [19, 20, 21, 22, 23, 24, 25, 26, 27];
    var myParamNum = parseInt(myParam);
    console.log("The number: " + myParamNum);
    //finds the index number of the matching value in the personFirstArray
    function startingIndexFunction(element) {
    
        return element == myParamNum;
      }
      console.log(personFirstArray.findIndex(startingIndexFunction));
      var startingIndex = personFirstArray.findIndex(startingIndexFunction);
      var j;
      for(var i = 0,j = 0; i < 9, j < personFirstArray.length; i++, j++) {
          console.log(i);
           //Loops through personFirstArray to start the grid images based on what photo was selected by the user
    
    var offset = startingIndex;
    var pointer = (j + offset) % personFirstArray.length;
    console.log("The array loop: " + personFirstArray[pointer]);
    var srcNum = personFirstArray[pointer];
    
    var srcUrl = "https://picsum.photos/600/600/?image=" + srcNum;
    $("#pSlide" + i).attr("src", srcUrl);
    $("#pSlide" + i).attr("data-imgNum", srcNum);
      }
    
    }); 
