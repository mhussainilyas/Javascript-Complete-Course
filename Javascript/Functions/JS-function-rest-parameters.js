// ===================
//   Rest Parameters
// ===================
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

// 👉 EXAMPLE CODE 01

function showSum(...args) {
  let sum = 0;

  for (let key of args) {
    sum += key;
  }

  return sum;
}

// let result = showSum(10, 20);
// let result = showSum(10, 20, 30);
let result = showSum(10, 20, 30, 40);

console.log(result);

// 👉 EXAMPLE CODE 02

function myFunction(name, gender, ...args) {
  let sum = 0;

  for (let key of args) {
    sum += key;
  }

  let result = `Name: ${name}, Gender: ${gender}, Sum: ${sum}`;

  return result;
}

let answer = myFunction("Hussain", "Male", 2, 3, 6);
console.log(answer);