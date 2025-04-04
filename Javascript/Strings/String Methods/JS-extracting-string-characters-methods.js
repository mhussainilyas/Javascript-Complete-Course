// ================================
//   Extracting String Characters
// ================================
// There are 4 methods for extracting string characters
// 1) The at(position) Method
// 2) The charAt(position) Method
// 3) The charCodeAt(position) Method
// 4) Using property access [] like in arrays

let text = "Muhammad Hussain";

// 👉 charAt()
// SYNTAX: str.charAt(index)
let char = text.charAt(7);
console.log(char); // d

// 👉 charCodeAt()
// SYNTAX: str.charCodeAt(index)
let char1 = text.charCodeAt(7);
console.log(char1); // 100 (ASCII code of "d")

// 👉 at()
// SYNTAX: str.at(index)
let char2 = text.at(2);
console.log(char2); // h

// 👉 PROPERTY ACCESS [index]
let char3 = text[5];
console.log(char3); // m

// IMPORTANT NOTE:
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length - 2).

// let char4 = text.at(text.length - 2); // i
let char4 = text.at(-2); // i
console.log(char4);
