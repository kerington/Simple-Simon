$(document).ready(function(){
    "use strict";

var memoryArray = []


function newMemory() {
  var temp = Math.floor((Math.random() * 4) + 1);
  switch(temp) {
    case 1:
      memoryArray.push("#buttonGreen");
      break;
    case 2:
      memoryArray.push("#buttonRed");
      break;
    case 3:
      memoryArray.push("#buttonYellow");
      break;
    case 4:
      memoryArray.push("#buttonBlue");
      break;
  }
  var i = 0;
  var intervalId = setInterval(function(){
    animateRandomSquare(memoryArray[i]);
    if(i < memoryArray.length){
        i++;
    }else{
        clearInterval(intervalId);
    }
  },750)
}
newMemory();

// function getRandomColor () {
//     var squares = ["#buttonRed", "#buttonYellow", "#buttonBlue", "#buttonGreen"]
//     var randomNumber = Math.floor(Math.random() * squares.length);
//     return squares[randomNumber];
//     console.log("working!");
// }

function animateRandomSquare (buttonId) {
    $(buttonId) .animate({
        opacity: 1
    }, 500, function(){
        $(buttonId).animate({
            opacity: .5
        }, 500);
    })
};

var clickCount = 0;

$(".fourButton").click(function(){
    var clickedId = "#" + $(this).attr("id");
    console.log("Clicked: " + clickedId);
    console.log("Array: " + memoryArray[clickCount]);
    if (clickedId == memoryArray[clickCount]){
        if (clickCount == memoryArray.length -1 ) {
            newMemory();
            clickCount = 0;
        } else {
            clickCount++;
        }
    }else{
        memoryArray =[];
        console.log("u loser!!!");
    }

})


// function getRandomNumberBetween0And(input) {
//     return Math.floor(Math.random() * input)
// }

// var squares = ["buttonRed", "buttonYellow", "buttonBlue", "buttonGreen"];

// var randomIndex = getRandomNumberBetween0And(squares.length);

// var randomSquare = squares[randomIndex];

// console.log("meow");


});

