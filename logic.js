$(document).ready(function() {
//$(document).on("click", "button", function() {
    //console.log("JQuery is connected");
    //$( "#test" ).toggleClass( "hidden" );
 // });
 //When the powerpoint slides on the homepage are clicked, the user is routed to a collection of images
 //With the image cat of that image appearing first
 $(".cityFirst").on("click", function() {
  console.log("City Image was clicked!!!");
  console.log(this.id);
  var idInfo = this.id
  var importantNumber = idInfo.replace("n", "");
  console.log(importantNumber);
  window.location.href = "cityFirst.html?img=" + importantNumber;
 });

 $(".personFirst").on("click", function() {
  console.log("Person Image was clicked!!!");
  console.log(this.id);
  var idInfo = this.id
  var importantNumber = idInfo.replace("n", "");
  console.log(importantNumber);
  window.location.href = "personFirst.html?img=" + importantNumber;
});

$(".natureFirst").on("click", function() {
  console.log(" Nature Image was clicked!!!");
  console.log(this.id);
  var idInfo = this.id
  var importantNumber = idInfo.replace("n", "");
  console.log(importantNumber);
  window.location.href = "natureFirst.html?img=" + importantNumber;
});

//When user clicks on a specific photo in photo grid, they are routed back to the slides page of that cat.
//They start on the image slide that matches what was clicked

$(".citySlides").on("click", function() {
  console.log("City image was clicked from photo grid!");
  var clickedImgStr = this.id.replace("pic", "");
  var clickedImgNum = parseInt(clickedImgStr);
  window.location.href = "citySlides.html?img=" + clickedImgNum;
 // console.log(this.id.replace("pic", ""));


  
  //if(clicked === true) {
   
 // }
  
});

//These are for when someone clicks an image on the index carousel
$(".personSlides").on("click", function() {
  console.log("Person image was clicked from photo grid!");
  console.log(this.src);
  var picNumForUrl = this.src.replace("https://picsum.photos/200/200/?image=", "");
  window.location.href = "personSlides.html?img=" + picNumForUrl;
});
$(".natureSlides").on("click", function() {
  
  //var clickedImgNatureStr = this.id.replace("pic", "");
  //var clickedImgNatureNum = parseInt(clickedImgNatureStr);
  console.log("Nature image was clicked from photo grid!");
  console.log(this.src);
  var picNumForUrl = this.src.replace("https://picsum.photos/200/200/?image=", "");
  window.location.href = "natureSlides.html?img=" + picNumForUrl;
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