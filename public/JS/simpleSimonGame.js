$(document).ready(function(){
    "use strict";

//     function newRound() {
//     	var sequence = [1,2,1]; //red, yellow, red
//     	animate(sequence);
//     }

//     function animate (sequence) {
//     	var i = 0;
//     	var interval = setInterval (function() {
//     		lightup(sequence[i]);

//     			i++;
//     			if (i >= sequence.length) {
//     				clearInterval(interval);
//     			}
//     	}, 600);
//     }

//     function lightup(title) {
//     	var $tile = $('[data-tile=' + tile + '}').addClass
//     	window.setTimeout(function() {
//     		$tile.removeClass('lit');
//     	}, 300);
//     }


$("#boxRed").click(function(){
	$("#boxRed").fadeOut(200);
	$("#boxRed").fadeIn(200);
	console.log("Red");
})

$("#boxYellow").click(function(){
	$("#boxYellow").fadeOut(200);
	$("#boxYellow").fadeIn(200);
	console.log("Yellow");
})

$("#boxBlue").click(function(){
	$("#boxBlue").fadeOut(200);
	$("#boxBlue").fadeIn(200);
	console.log("Blue");
})

$("#boxGreen").click(function(){
	$("#boxGreen").fadeOut(200);
	$("#boxGreen").fadeIn(200);
	console.log("Green");
})



function getRandomColor () {
	var squares = ["#boxRed", "#boxYellow", "#boxBlue", "#boxGreen"]
	var randomNumber = Math.floor(Math.random() * squares.length);
	return squares[randomNumber];
	console.log("working!");
}

function animateRandomSquare  () {
	var squareToAnimate = getRandomColor();
	animate(squareToAnimate);
}


function getRandomNumberBetween0And(input) {
	return Math.floor(Math.random() * input)
}

var squares = ["boxRed", "boxYellow", "boxBlue", "boxGreen"];

var randomIndex = getRandomNumberBetween0And(squares.length);

var randomSquare = squares[randomIndex];

console.log("meow");


});

