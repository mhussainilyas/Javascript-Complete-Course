// =======================
//   Function Invocation
// =======================
// The code inside a function is not executed when the function is defined.
// The code inside a function is executed when the function is invoked.

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

// 👉 SIMPLY INVOKING FUNCTION

let multiplyResult = multiply(10, 88);
console.log(multiplyResult); // 880

// 👉 INVOKING FUNCTION USING WINDOW OBJECT

let multiplyResult2 = window.multiply(20, 3);
console.log(multiplyResult2); // 60

// 👉 YOUR MULTIPLY() FUNCTION IS PLACED HERE

console.log(window);