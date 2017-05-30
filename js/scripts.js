var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var add = function(number1,number2) {
  return number1 + number2;
};
var resultAdd = add(number1,number2);
alert(resultAdd);

var subtract = function(number1,number2) {
  return number1 - number2;
};
var resultSubtract = subtract(number1,number2);
alert(resultSubtract);

var multiply = function(number1,number2) {
  return number1 * number2;
};
var resultMultiply = multiply(number1,number2);
alert(resultMultiply);

var divide = function(number1,number2) {
  return number1 * number2;
};
var resultDivide = divide(number1,number2);
alert(resultDivide);


var liters = parseFloat(prompt("Yo, how many liters you got?"));

var litersToCups = function(liters) {
	return liters * 4.22675;
};

var cups = litersToCups(liters);
alert("Hey man, you got " + cups + " cups.");
