// =========================
//    Object Constructors
// =========================
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.

// creating Constructor
function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

// 👉 Creating an Instance
let user1 = new Person("Muhammad", "Hussain", 19);

// 👉 Displaying Result
console.log(user1);

// 👉 Checking type
console.log(typeof user1);

// 👉 Accessing Properties
console.log(user1.fname);
console.log(user1.lname);
console.log(user1.age);

// 👉 Adding a Property to an Object
user1.nationality = "Pakistan";
console.log(user1);

// 👉 Adding a Property to a Constructor
Person.prototype.lang = "English";
let user2 = new Person("Suleman", "Amjad", 20);
console.log(user2); // lang will note show here
console.log(user2.lang); // here (in prototype) lang will show

// =========================
//  Property Default Values
// =========================

function User(name, age, salary) {
  this.name = name;
  this.salary = salary;
  this.age = age;
  this.language = "Arabic";
  this.hobby = "coding";
}

let newUser = new User("Hussain", 19, "$32000");
console.log(newUser);

// ================================
//   Constructor Function Methods
// ================================

function UserData(name, father, mother, age) {
  this.name = name;
  this.father = father;
  this.mother = mother;
  this.age = age;
  this.about = function () {
    return `My name is ${name} & I'm ${age} years old.`;
  };
}

let student1 = new UserData("Hussain", "Ilyas", "Samina", 19);
console.log(student1);
console.log(student1.about());

// 👉 Adding a Method to an Object

student1.parents = function () {
  return `${this.father} & ${this.mother} are parent of ${this.name}`;
};

console.log(student1.parents());

// 👉 Adding a Method to a Constructor

UserData.prototype.changeAge = function (newAge) {
  this.age = newAge;
};

student1.changeAge(90); // now age is 90.
console.log(student1);

// ====================================
//   Built-in JavaScript Constructors
// ====================================

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object