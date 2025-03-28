// =====================
//  Function Parameters
// =====================
// Function parameters are the names listed in the function definition.

// 👉 FUNCTION PARAMETERS RULE
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// here 'num1' & 'num2' are parameters.
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// ====================
//  Function Arguments
// ====================
// Function arguments are the real values passed to (and received by) the function.

// here '100' & '200' are arguments.
let result = add(100, 200);
console.log(result);

// =======================
//   Default Parameters
// =======================
// If a function is called with missing arguments (less than declared), the missing values are set to undefined. Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.

function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}

// case 01
console.log(myFunction(10)); // 20
// case 02
console.log(myFunction(10, 25)); // 250

// 👉 DEFAULT PARAMETERS VALUE
function product(x, y = 5) {
  return x * y;
}

// case 01
console.log(product(5)); // 25
// case 02
console.log(product(10, 30)); // 300
