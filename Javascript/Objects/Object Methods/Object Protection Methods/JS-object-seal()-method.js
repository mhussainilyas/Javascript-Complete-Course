// =================
//   seal() Method
// =================
// The Object.seal() method prevents additions or deletions of new properties.
// The Object.seal() method makes existing properties non-configurable.
// The Object.seal() method will fail silently in non-strict mode.
// The Object.seal() method will throw a TypeError in strict mode.
// The Object.isSealed() method can be used to check if an object is sealed.
// SYNTAX: Object.seal(object)

"use strict";

// Create Object
const person = {
  firstName: "Muhammad",
  lastName: "Hussain",
  age: 19,
  eyeColor: "brown",
};

// Seal Object
Object.seal(person);

// This will throw an error
// person.dep = "BSCS";
delete person.age;
