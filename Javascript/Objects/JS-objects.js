// ======================
//   Javascript Objects
// ======================
// Objects are variables too. But objects can contain many values.

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// =======================
//    Object Defination
// =======================
// How to Define a JavaScript Object

// 👉 1) Using an Object Literal

// 1st method
const person = {
  firstName: "Muhammad",
  lastName: "Hussain",
  age: 19,
};
console.log(person);

// 2nd method
const person1 = {};
person1.firstName = "Suleman";
person1.lastName = "Amjad";
person1.age = 20;
console.log(person1);

// 👉 2) Using the new Keyword

let user = new Object();

user.firstName = "Zaryab";
user.lastName = "Haider";
user.age = 18;
console.log(user);

// =======================
//    Object Properties
// =======================

const obj = {
  name: "Hussain",
  department: "BSCS",
  age: 19,
};

// 👉 ACCESSING OBJECTS PROPERTIES

console.log(obj.name);
console.log(obj.department);
console.log(obj.age);

// 👉 ADDING OBJECT PROPERTIES

obj.department = "BSCS";
obj.grade = "A+";
console.log(obj);

// 👉 MODIFYING OBJECT PROPERTIES

obj.name = "Suleman";
obj.department = "BSIT";
console.log(obj);

// 👉 DELETING OBJECT PROPERTIES

delete obj.age;
delete obj.department;
console.log(obj);

// ====================
//    Object Methods
// ====================

const student = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
  fullName: function () {
    return `Full Name: ${this.fname} ${this.lname}`;
  },
};

// Accessing object method
let name = student.fullName();
console.log(name);

// Adding a Method to an Object
student.statement = function () {
  let str = `${this.fname} ${this.lname} is ${this.age} years old.`;
  return str;
};

// Using JavaScript Methods
student.studentName = function () {
  let str = `${this.fname} ${this.lname}`;
  return str.toUpperCase();
};

console.log(student.studentName());

// ========================
//   OBJECTS ARE MUTABLE
// ========================
// They are addressed by reference, not by value.

let myObj = { name: "Hussain", age: 19 };
let newObj = myObj; // ⬅ Try to create a copy
newObj.age = 20; // ⬅ This will also change age in myObj
console.log(myObj);
console.log(newObj);
