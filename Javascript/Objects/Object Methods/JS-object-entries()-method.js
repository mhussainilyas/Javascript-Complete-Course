// ====================
//   entries() Method
// ====================
// The Object.entries() method returns an array of the key/value pairs of an object.
// The Object.entries() method does not change the original object.
// SYNTAX: Object.entries(object)

const person = {
  firstName: "Muhammad",
  lastName: "Hussain",
  age: 19,
  eyeColor: "brown",
};

let text = Object.entries(person);
console.log(text);

// 👉 Object.entries() makes it simpler to use objects in loops

let strText = ``;
for (let [prop, val] of Object.entries(person)) {
  strText += `${prop} is ${val} \n`;
}
console.log(strText);

// 👉 Object.entries() makes it simpler to convert objects to maps

const myMap = new Map(Object.entries(person));
console.log(myMap);
