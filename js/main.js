// puts all buttons into an array with the variable name buttons
var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("display");

//make each button display the value or function associated with the button

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
//on clicking the C button, it will clear the display
buttons[12].onclick = function() { display.value = this.value };
buttons[13].onclick = function() { display.value += this.value};
// on clicking the equals button, it will evaluate what is on the display
buttons[14].onclick = function() { display.value = eval(display.value)};
buttons[15].onclick = function() { display.value += this.value };







