// ===============================
//   preventExtensions() Method
// ===============================
// The Object.preventExtensions() method prevents adding properties to an object.
// You can use Object.isExtensible() to check if an object is extensible.

// Create Object
const person = { firstName: "Hussain", lastName: "Ilyas" };
console.log(person);

// Prevent Extensions
Object.preventExtensions(person);

// This will not add in person object.
person.nationality = "English";
console.log(person);

let res = Object.isExtensible(person);
console.log(res);
