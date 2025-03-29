// ============================
//   defineProperty() Method
// ============================
// The Object.defineProperty() method adds or changes an object property.
// The Object.defineProperty() method lets you change property metadata.
// The Object.defineProperty() method lets you add getters and setters.
// SYNTAX: Object.defineProperty(object, property, descriptor)

// 👉 NOTE THAT
// Object.defineProperty() adds or changes one property.
// Object.defineProperties() adds or changes many properties.

const person = {
  firstName: "Muhammad",
  lastName: "Hussain",
};

console.log(person);

// 👉 Change property value

Object.defineProperty(person, "firstName", { value: "Suleman" });

console.log(person);

// 👉 Add Properties

Object.defineProperty(person, "language", {
  value: "en",
  // 👉 change property metadata
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person);

Object.defineProperty(person, "year", {
  value: 2025,
  // 👉 change property metadata
  writable: false, // This property cannot be changed
  enumerable: true,
  configurable: true,
});

console.log(person);

Object.defineProperty(person, "age", {
  value: 19,
  // 👉 change property metadata
  writable: true,
  enumerable: false, // This property will not show in loops
  configurable: true,
});

console.log(person);

// Changing "year" property's value
person.year = 2030; // not work (because writable: false)
console.log(person.year); // still 2025

// Loop through person object
// NOTE THAT: "age" property will not show in this loop
for (let key in person) {
  console.log(`The ${key} key is ${person[key]}`);
}

// 👉 you add getters and setters

// Create an empty object
let user = {};

// Define properties with getters and setters
Object.defineProperty(user, "firstName", {
  get: function () {
    return firstName;
  },
  set: function (value) {
    firstName = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(user, "lastName", {
  get: function () {
    return lastName;
  },
  set: function (value) {
    lastName = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(user, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  enumerable: true,
  configurable: true,
});

// Set values using the setters
user.firstName = "Mr.";
user.lastName = "Hussain";

// Access the properties and use the getter for fullName
console.log(user.fullName); // Output: Mr. Hussain
