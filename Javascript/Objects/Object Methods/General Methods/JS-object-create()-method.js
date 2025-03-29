// ====================
//   create() Method
// ====================
// The Object.create() creates an object from an existing object.
// SYNTAX: Object.create(object, properties)

// create an object
const user = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
};

// create new object
const newUser = Object.create(user);

// show in console
console.log(user); // {fname: 'Muhammad', lname: 'Hussain', age: 19}
console.log(newUser); // {}

// chnage values of new object
newUser.fname = "Suleman";
console.log(newUser.fname); // Suleman 
console.log(newUser.lname); // Hussain (inherits property from "user") 
console.log(newUser.age); // 19 (inherits property from "user")
console.log(newUser); // {fname: 'Suleman'} 