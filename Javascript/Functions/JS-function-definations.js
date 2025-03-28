// =========================
//   Function Definations
// =========================
// JavaScript functions are defined with the function keyword.
// You can use a function declaration or a function expression.

// 👉 FUNCTION DECLARATION
function multiply(a, b) {
  let product = a * b;
  return product;
}

// 👉 FUNCTION EXPRESSION
const add = function (a, b) {
  let sum = a + b;
  return sum;
};
// After a function expression, the variable can be used as a function.
let sumResult = add(10, 20);

// 👉 FUNCTION CONSTRUCTOR
const minus = new Function("a", "b", "let res = a - b; return res;");
let minusResult = minus(10, 5);

// 👉 FUNCTION CAN BE USED AS VALUE
function showName() {
  let name = "Hussain";
  return name;
}
let fullName = "Muhammad" + " " + showName();
console.log(fullName);

// 👉 FUNCTION ARE OBJECTS
// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.

// arguments.length (property)
function totalArg() {
  return arguments.length;
}
console.log(totalArg("arg1", "arg2", "arg3"));

// toString() (method)
function multiplier(a, b) {
  return a * b;
}
let multiplierResult = multiplier(10, 26).toString();
console.log(multiplierResult);

// 👉 ARROW FUNCTION

// ES5
const x = (a, b) => {
  return a - b;
};

// ES6
const y = (a, b) => a - b;
