const add = function(firstNumber, secondNumber) {
 let addition = firstNumber + secondNumber;
 return addition;	
};

const subtract = function(firstNumber, secondNumber) {
  let subtraction = firstNumber - secondNumber ;
  return subtraction;
	
};

const sum = function(given) {
  let total = 0;
for(let i=0; i<given.length; i++){
 total += given[i];
}
return total;
	
};

const multiply = function(given) {
  let total = 1;
  for(let i=0; i<given.length; i++){
   total *= given[i];
  }
  return total;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
