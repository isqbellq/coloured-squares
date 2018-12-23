"use strict"

function randomColor() {
	let number = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return number;
};

function colorBackground() {
	$(this).animate({ backgroundColor: randomColor()}, 100);
}

function blackBackground() {
	$(this).animate({ backgroundColor:"#222"}, 10000);
}


$(document).ready(function() {

	$(".square").mouseover(colorBackground).mouseout(blackBackground);

	$(".square").click(colorBackground);

	randomColor();

	/* let randomColor = function() {
		let number = Math.floor(Math.random() * 11);

		if (number === 0) {
			return "#92f7d8";
		} else if (number === 1) {
			return "#92def7";
		} else if (number === 2) {
			return "#f792ba";
		} else if (number === 3) {
			return "#d292f7";
		} else if (number === 4) {
			return "#938ad6";
		} else if (number === 5) {
			return "#8ad68d";
		} else if (number === 6) {
			return "#e9f7b5";
		} else if (number === 7) {
			return "#e8c98c";
		} else if (number === 8) {
			return "#f3576a";
		} else if (number === 9) {
			return "#bbc0c4";
		} else if (number === 10) {
			return "#99f9f2";
		};
	}; */
});