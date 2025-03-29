// =======================
//    freeze() Method
// =======================
// The Object.freeze() method prevents any changes to an object.
// The Object.freeze() method will fail silently in non-strict mode.
// The Object.freeze() method will throw a TypeError in strict mode.
// The Object.isFrozen() method can be used to check if an object is frozen.
// SYNTAX: Object.freeze(object)

"use strict";

// Create Object
const person = {
  firstName: "Muhammad",
  lastName: "Hussain",
  age: 19,
  eyeColor: "brown",
};

// Freeze Object
Object.freeze(person);

// Object.isFrozen() methods);
let res = Object.isFrozen(person);
console.log(res);

// This will throw an error
person.age = 51;
