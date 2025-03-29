// ==========================
//   isExtensible() Method
// ==========================
// The Object.isExtensible() returns true if an object is extensible.

// Create Object
const person = { firstName: "John", lastName: "Doe" };

// This will return true
// let answer = Object.isExtensible(person);
// console.log(answer);

// Prevent Extensions
Object.preventExtensions(person);

// This will return false
let answer = Object.isExtensible(person);
console.log(answer);
