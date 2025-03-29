// ========================
//   .prototype Property
// ========================
// The prototype is a global property available with all JavaScript objects.
// The prototype property allows you to add new properties and methods to objects.

// Constructor function
function Employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}

// Adding a property to the prototype
Employee.prototype.salary = 2000;

// Adding a method to the prototype
Employee.prototype.speak = function () {
  console.log(`${this.name} speaks English.`);
};

// Creating an instance
const user = new Employee("Hussain", "Web Developer", 2005);
console.log(user); // Employee {name: 'Hussain', jobtitle: 'Web Developer', born: 2005}
console.log(user.salary); // 2000
user.speak(); // Hussain speaks English.
