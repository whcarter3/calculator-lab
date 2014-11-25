var buttons = document.getElementsByClassName("buttons");
// var operator = document.getElementsByClassName("operatorButtons");
var display = document.getElementById("display");

// var one = new newButton(1);
// var two = new newButton(2);
// var three = new newButton(3);
// var four = new newButton(4);
// var five = new newButton(5);
// var six = new newButton(6);
// var seven = new newButton(7);
// var eight = new newButton(8);
// var nine = new newButton(9);
// var zero = new newButton(0);
// var plus = new newButton(" + ");
// var minus = new newButton(" - ");
// var multiply = new newButton(" * ");
// var divide = new newButton(" / ");
// var clear = new newButton("");
// var equals = new newButton(eval(display));

buttons[0].onclick = function() { display.value += this.value };
buttons[1].onclick = function() { display.value += this.value };
buttons[2].onclick = function() { display.value += this.value };
buttons[3].onclick = function() { display.value += this.value };
buttons[4].onclick = function() { display.value += this.value };
buttons[5].onclick = function() { display.value += this.value };
buttons[6].onclick = function() { display.value += this.value };
buttons[7].onclick = function() { display.value += this.value };
buttons[8].onclick = function() { display.value += this.value };
buttons[9].onclick = function() { display.value += this.value };
buttons[10].onclick = function() { display.value += this.value };
buttons[11].onclick = function() { display.value += this.value };
buttons[12].onclick = function() { display.value = this.value };
buttons[13].onclick = function() { display.value += this.value};
buttons[14].onclick = function() { display.value = eval(display.value)};
buttons[15].onclick = function() { display.value += this.value };


// function newButton(value, displayValue){
// 	this.value = value;
	// this.displayValue = onclick.buttons = () {

	// };







