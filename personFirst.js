$(document).ready(function() {
    var personFirstArray = [19, 20, 21, 22, 23, 24, 25, 26, 27];
    //Pulls number of photo clicked
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('img');
   // var myParamNum = parseInt(myParam);
    console.log("The number: " + myParam);
    //finds the index number of the matching value in the personFirstArray
    function startingIndexFunction(element) {

        return element == myParam;
      }
      console.log(personFirstArray.findIndex(startingIndexFunction));
      var startingIndex = personFirstArray.findIndex(startingIndexFunction);
      var j;
      for(var i = 0, j = 0; i < personFirstArray.length, j < personFirstArray.length; i++, j++) {
          console.log(i);
           //Loops through personFirstArray to start the grid images based on what photo was selected by the user

    var offset = startingIndex;
    var pointer = (j + offset) % personFirstArray.length;
    console.log("The array loop number value: " + personFirstArray[pointer]);
    var srcNum = personFirstArray[pointer];
    var srcUrl = "https://picsum.photos/200/200/?image=" + srcNum;
    $("#pic" + i).attr("src", srcUrl);
    $("#pic" + i).attr("data-imgNum", srcNum);
    

      }

    
    
});