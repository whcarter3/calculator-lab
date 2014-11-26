(function (){
function calculator() {
	// puts all buttons into an array with the variable name buttons
	var buttons = document.getElementsByClassName("buttons");
	var display = document.getElementById("display");
	var clear = document.getElementById("clear");
	var equals = document.getElementById("equal")
	//make each button display the value or function associated with the button
	for (i=0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function displayValue(){
			display.value += this.value;
		});
	};
	// clear the display
	clear.onclick = function() { 
		display.value = this.value 
	};
	//evaluate the display
	equals.onclick = function() { 
		display.value = eval(display.value) 
	};
};
var CALCULATOR = new calculator();
})();





