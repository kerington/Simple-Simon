$(document).ready(function(){
	"use strict";

//===========================================================
// Global Variables
//===========================================================
var memoryArray = [];
var levelCounter = 0 
var level = $("#countDisplay");

//===========================================================
// 
//===========================================================

function newMemory() {
	var temp = Math.floor((Math.random() * 4) + 1);
	var i = 0;
	var intervalId;

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
	intervalId = setInterval(function(){
		
		if(i < memoryArray.length){
			animateRandomSquare(memoryArray[i], 400);
			i++;
		} else {
			usersTurn();
			clearInterval(intervalId);
		}
	}, 850);
}

//===========================================================
// Start button animation
//===========================================================

function animateStartButton (buttonId, speed) {
	// console.log(buttonId);
	$(buttonId) .animate({
		opacity: .5
	}, 250, function(){
		$(buttonId).animate({
			opacity: 1
		}, 250);
	})
};

//===========================================================
// Animation for Random Squares (Computer's Turn)
//===========================================================

function animateRandomSquare (buttonId, speed) {
	// console.log(buttonId);
	$(buttonId) .animate({
		opacity: 1
	}, speed, function(){
		$(buttonId).animate({
			opacity: .5
		}, speed);
	})
};

//===========================================================
// 
//===========================================================

function usersTurn() {
	var clickCount = 0;

	$(".fourButtons").on("click", function(){
		// console.log("user clicked a button");
		var clickedId = "#" + $(this).attr("id");
		// console.log("Clicked: " + clickedId);
		// console.log("Array: " + memoryArray[clickCount]);
		animateRandomSquare(clickedId, 180);
		if (clickedId == memoryArray[clickCount]){
			if (clickCount == memoryArray.length -1 ) {
				newMemory();
				clickCount = 0;
				$(".fourButtons").off("click");
			} else {
				clickCount++;
			}
		} else {
			memoryArray = [];
			$("#textTitle").css("visibility", "hidden");
			$(".gameOver").css("visibility", "visible");
			$(".fourButtons").off("click");
			// console.log(memoryArray);
		}
	})
}

//===========================================================
// Makes the start button clear the array and counter
//===========================================================

$("#startButton").click(function(){
	levelCounter = 0;
	memoryArray = [];
	newMemory();
});

//===========================================================
// Animates the start button
//===========================================================

$("#startButton").on("click", function(){
	var clickedId = "#" + $(this).attr("id");
	animateStartButton(clickedId, 180);
	$(".gameOver").css("visibility", "hidden");
	$("#textTitle").css("visibility", "visible");
});

});

