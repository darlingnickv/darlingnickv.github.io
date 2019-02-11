/*$(document).ready(function() {
    //Pulls number of photo clicked
    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('img');
    console.log(myParam);
    var natureFirstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var myParamNum = parseInt(myParam);
    console.log("The number: " + myParamNum);
    //finds the index number of the matching value in the natureFirstArray
    function startingIndexFunction(element) {
    
        return element == myParamNum;
      }
      console.log(natureFirstArray.findIndex(startingIndexFunction));
      var startingIndex = natureFirstArray.findIndex(startingIndexFunction);
      var j;
      for(var i = 0,j = 0; i < natureFirstArray.length, j < natureFirstArray.length; i++, j++) {
          console.log(i);
           //Loops through natureFirstArray to start the grid images based on what photo was selected by the user
    
    var offset = startingIndex;
    var pointer = (j + offset) % natureFirstArray.length;
    console.log("source image number that gets sent to picsum: " + natureFirstArray[pointer]);
    var srcNum = natureFirstArray[pointer];
    
    var srcUrl = "https://picsum.photos/600/600/?image=" + srcNum;
    $("#cSlides" + i).attr("src", srcUrl);
    $("#cSlides" + i).attr("data-imgNum", srcNum);
      }
    
    });*/



  
  
 


    $(document).ready(function() {
      //Pulls number of photo clicked
      var urlParams = new URLSearchParams(window.location.search);
      var myParam = urlParams.get('img');
      console.log(myParam);
        $(function() {
          $('#carouselExampleControls').carousel(parseInt(myParam));
          console.log("Opening Carousel");
      });
      var natureFirstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var myParamNum = parseInt(myParam);
      console.log("The number: " + myParamNum);
      //finds the index number of the matching value in the natureFirstArray
      function startingIndexFunction(element) {
      
          return element == myParamNum;
        }
        console.log(natureFirstArray.findIndex(startingIndexFunction));
        var startingIndex = natureFirstArray.findIndex(startingIndexFunction);
        var j;
        for(var i = 0,j = 0; i < 9, j < natureFirstArray.length; i++, j++) {
            console.log(i);
             //Loops through natureFirstArray to start the grid images based on what photo was selected by the user
      
      var offset = startingIndex;
      var pointer = (j + offset) % natureFirstArray.length;
      console.log("The array loop: " + natureFirstArray[pointer]);
      var srcNum = natureFirstArray[pointer];
      
      var srcUrl = "https://picsum.photos/600/600/?image=" + srcNum;
      $("#nSlide" + i).attr("src", srcUrl);
      $("#nSlide" + i).attr("data-imgNum", srcNum);
        }
      
      });