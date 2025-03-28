// ======================
//  The Arguments Object
// ======================
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called.

// 👉 EXAMPLE PROGRAM

function findMax() {
  let max = -Infinity; // smallest possible number in Js
  
  for (let key of arguments) {
    if (key > max) {
      max = key;
    }
  }
  
  return max;
}

// let maxValue = findMax(10, 20, 34);
let maxValue = findMax(-10, -25, -3);
console.log(maxValue);
