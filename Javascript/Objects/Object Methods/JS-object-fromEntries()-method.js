// ========================
//   fromEntries() Method
// ========================
// The fromEntries() method creates an object from a list of key/value pairs.

// 👉 CORRECT EXAMPLE ✔

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);

// 👉 WRONG EXAMPLE ❌

let arr = ["Hussain", "Suleman", "Zaryab"];
const obj = Object.fromEntries(arr);
console.log(obj); // Through Error
