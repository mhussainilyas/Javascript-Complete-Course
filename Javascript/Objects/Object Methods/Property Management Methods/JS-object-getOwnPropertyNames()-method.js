// =================================
//   getOwnPropertyNames() Method
// =================================
// The Object.getOwnPropertyNames() method returns an array with the properties of an object.
// Object.getOwnPropertyNames() will also list properties that is not enumerable.
// The Object.getOwnPropertyNames() method does not change the original object.
// SYNTAX: Object.getOwnPropertyNames(object)

// Create an Object
const person = {
  firstName: "Hussain",
  lastName: "Ilyas",
  age: 19,
  eyeColor: "brown",
};

// Get Properties
let props = Object.getOwnPropertyNames(person);
console.log(props);
