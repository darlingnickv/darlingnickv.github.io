$(document).ready(function() {
//$(document).on("click", "button", function() {
    //console.log("JQuery is connected");
    //$( "#test" ).toggleClass( "hidden" );
 // });
 //When the powerpoint slides on the homepage are clicked, the user is routed to a collection of images
 //With the image cat of that image appearing first
 $(".cityFirst").on("click", function() {
   console.log(" City Image was clicked!!!");
   location.replace("cityFirst.html");
 });

 $(".personFirst").on("click", function() {
  console.log(" Person Image was clicked!!!");
  location.replace("personFirst.html");
});

$(".natureFirst").on("click", function() {
  console.log(" Nature Image was clicked!!!");
  location.replace("natureFirst.html");
});

//When user clicks on a specific photo in photo grid, they are routed back to the slides page of that cat.
//They start on the image slide that matches what was clicked

$(".citySlides").on("click", function() {
  console.log("City image was clicked from photo grid!");
  var clickedImgStr = this.id.replace("pic", "");
  var clickedImgNum = parseInt(clickedImgStr);
  location.replace("citySlides.html?img=" + clickedImgNum);
 // console.log(this.id.replace("pic", ""));


  
  //if(clicked === true) {
   
 // }
  
});
$(".personSlides").on("click", function() {
  var clickedImgPersonStr = this.id.replace("pic", "");
  var clickedImgPersonNum = parseInt(clickedImgPersonStr);
  //console.log("image id : " + this.id);
  location.replace("personSlides.html?img=" + clickedImgPersonNum);
});
$(".natureSlides").on("click", function() {
  var clickedImgNatureStr = this.id.replace("pic", "");
  var clickedImgNatureNum = parseInt(clickedImgNatureStr);
  console.log("Nature image was clicked from photo grid!");
  location.replace("natureSlides.html?img=" + clickedImgNatureNum);
});

});

/*$(document).on("click", "img", function() {
    var state = $(this).attr("data-state");
    var still = $(this).attr("data-still");
    var animate = $(this).attr("data-animate");
    if (state === "still") {
      console.log("if", this);
      $(this).attr("src", animate);
      $(this).attr("data-state", "animate");
    } 
    else {
      console.log("else", this);
      $(this).attr("src", still);
      $(this).attr("data-state", "still");
    }
  });*/