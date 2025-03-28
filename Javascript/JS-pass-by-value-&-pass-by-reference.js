// =================
//   Pass by Value
// =================
// When a variable is passed to a function by value, a copy of the variable's value is made. This means that changes made to the parameter inside the function do not affect the original variable.

function increment(num) {
  num += 1;
  return num;
}

let originalNum = 5;
let newNum = increment(originalNum);

console.log(originalNum); // 5
console.log(newNum); // 6

// =====================
//   Pass by Reference
// =====================
// When an object is passed to a function by reference, the function receives a reference to the original object. This means that changes made to the object inside the function will affect the original object.

function updateUser(obj) {
  obj.age += 1;
  return obj;
}

const user = { name: "Hussain", age: 19 };
const newUser = updateUser(user);

console.log(user); // { name: "Hussain", age: 20 }
console.log(newUser); // { name: "Hussain", age: 20 }
