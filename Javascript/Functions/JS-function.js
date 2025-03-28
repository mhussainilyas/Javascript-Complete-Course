// 👉 FUNCTION DECLARATION
function myFunction(p1, p2) {
  document.write(p1 * p2);
}

// 👉 FUNCTION INVOCATION
myFunction(10, 12);

// 👉 FUNCTION RETURN
function multiply(a, b) {
  return a * b;
}
let result = multiply(8, 2);
console.log(result);

// 👉 EXAMPLE: Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return `${(5 / 9) * (fahrenheit - 32)} Celsius`;
}
// let value = toCelsius; // return function as whole ❌
// let value = toCelsius(); // return NaN ❌
let value = toCelsius(32); // 0 ✔
console.log(value);

// 👉 LOCAL VARIABLE
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
function showName() {
  let name = "Muhammad Hussain";
  document.write("<br>" + name);
}
showName();
