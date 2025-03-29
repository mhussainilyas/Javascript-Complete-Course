// =======================
//    values() Method
// =======================
// The Object.values() method returns an array of the property values of an object.
// The Object.values() method does not change the original object.
// SYNTAX: Object.values(object)

const person = {
  firstName: "Suleman",
  lastName: "Amjad",
  age: 20,
  eyeColor: "black",
};

let text = Object.values(person);
console.log(text);
