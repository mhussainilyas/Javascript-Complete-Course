// =====================================
//   getOwnPropertyDescriptor() Method
// =====================================
// The Object.getOwnPropertyDescriptor() method returns the property descriptors of an object.
// The Object.getOwnPropertyDescriptor() method does not change the original object.
// SYNTAX: Object.getOwnPropertyDescriptor(object, prop)

// 👉 NOTE THAT
// Object.getOwnPropertyDescriptor() returns the descriptor of a property.
// Object.getOwnPropertyDescriptors() returns the descriptors of all properties

// Create an Object
const person = {
  firstName: "Hussain",
  lastName: "Ilyas",
  age: 19,
  eyeColor: "brown",
};

// Get Properties
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor); // {value: 'Hussain', writable: true, enumerable: true, configurable: true}