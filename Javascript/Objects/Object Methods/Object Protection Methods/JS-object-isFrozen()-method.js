// ======================
//   isFrozen() Method
// ======================
// The Object.isFrozen() returns true if an object is frozen.

// Create Object
const person = { firstName: "Hussain", lastName: "Ilyas" };

// This will return false
// let text = Object.isFrozen(person);
// console.log(text);

// Freeze Object
Object.freeze(person);

// This will return true
let text = Object.isFrozen(person);
console.log(text);
