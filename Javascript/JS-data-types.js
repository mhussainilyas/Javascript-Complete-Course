// ==================
//  Data Types In JS
// ==================
// JavaScript has 9 Datatypes
// 1) String
// 2) Number
// 3) Bigint
// 4) Boolean
// 5) Undefined
// 6) Null
// 7) Symbol
// 8) Object
// 9) Function

// 👉 String
// let name = "Hussain";
let name = 'Hussain';

// 👉 Number
let age = 25;
// let age = -25;
// let age = -25.7;
// let age = 25.7;
// let age = 25e3;
// let age = 25e-4;

// 👉 Boolean
// let isStudent = true;
let isStudent = false;

// 👉 Undefined
// let undefinedVar = undefined;
let undefinedVar;

// 👉 Null
let nullVar = null;

// 👉 BigInt
// let bigInteger = 1234567890123456789012345678901234567890n;
let bigInteger = BigInt("123456789012345678901234567890");

// 👉 Symbol
let uniqueSymbol = Symbol("description");

// 👉 Object
let person = {
  name: "Alice",
  age: 25,
};

// 👉 Array (data-type: Object)
let numbers = [1, 2, 3];

// 👉 Function
let greet = function () {
  return "Hello!";
};

// =======================
//   The typeof Operator
// =======================
// The typeof operator returns the type of a variable or an expression
console.log(typeof numbers);
console.log(typeof greet);