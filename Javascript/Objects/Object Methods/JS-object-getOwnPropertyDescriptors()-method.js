// =====================================
//   getOwnPropertyDescriptors() Method
// =====================================
// The Object.getOwnPropertyDescriptors() method returns the property descriptors of an object.
// The Object.getOwnPropertyDescriptors() method does not change the original object.
// SYNTAX: Object.getOwnPropertyDescriptors(object)

// 👉 NOTE THAT
// Object.getOwnPropertyDescriptors() returns the descriptor of a property.
// Object.getOwnPropertyDescriptors() returns the descriptors of all properties

// create an object
const person = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
};

// Get property descriptors
const descriptors = Object.getOwnPropertyDescriptors(person);

// show in console
console.log(descriptors);
