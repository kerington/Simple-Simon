// $(document).ready(function(){
	"use strict";

var memoryArray = [];
var levelCounter = 0 
var level = $("#countDisplay");

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
	
	levelCounter ++;
	level.html(levelCounter);
	var i = 0;
	var intervalId = setInterval(function(){
		animateRandomSquare(memoryArray[i]);
		if(i < memoryArray.length){
			i++;
		}else{
			usersTurn();
			clearInterval(intervalId);
		}
	},850);
	}

function animateRandomSquare (buttonId) {
	console.log(buttonId);
	$(buttonId) .animate({
		opacity: 1
	}, 400, function(){
		$(buttonId).animate({
			opacity: .5
		}, 400);
	})
};

function usersTurn() {
	var clickCount = 0;

	$(".fourButtons").on("click", function(){
		var clickedId = "#" + $(this).attr("id");
		console.log("Clicked: " + clickedId);
		console.log("Array: " + memoryArray[clickCount]);
		animateRandomSquare(clickedId);
		console.log(this);
		if (clickedId == memoryArray[clickCount]){
			if (clickCount == memoryArray.length -1 ) {
				newMemory();
				clickCount = 0;
				$(".fourButtons").off("click");
			} else {
				clickCount++;
			}
		}else{
			memoryArray =[];
			console.log("u loser!!!");
		}

	})
}
$("#startButton").click(function(){
	levelCounter = 0;
	memoryArray = [];
	newMemory();
});



// function getRandomNumberBetween0And(input) {
//     return Math.floor(Math.random() * input)
// }

// var squares = ["buttonRed", "buttonYellow", "buttonBlue", "buttonGreen"];

// var randomIndex = getRandomNumberBetween0And(squares.length);

// var randomSquare = squares[randomIndex];

// console.log("meow");


// });

