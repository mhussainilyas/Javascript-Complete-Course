// =====================
//   isSealed() Method
// =====================
// The Object.isSealed() returns true if an object is sealed.

// Create Object
const person = { firstName: "Muhammad", lastName: "Hussain" };

// This will return false
// let answer = Object.isSealed(person);
// console.log(answer);

// Seal Object
Object.seal(person);

// This will return true
let answer = Object.isSealed(person);
console.log(answer);
