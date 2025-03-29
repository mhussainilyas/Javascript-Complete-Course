// ==================
//   keys() Method
// ==================
// The Object.keys() method returns an array with the keys of an object.
// The Object.keys() method list only enumerable object properties {enumerable: true}
// The Object.keys() method does not change the original object.

// Create an Object
const person = {
  firstName: "Hussain",
  lastName: "Ilyas",
  age: 19,
  eyeColor: "brown",
};

// Get the Keys
const keys = Object.keys(person);
console.log(keys);
