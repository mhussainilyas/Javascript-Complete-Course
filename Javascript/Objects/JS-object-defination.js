// ========================
//    Object Definition
// ========================
// Using an Object Literal {}
// Using the new Keyword
// Using an Object Constructor

// 👉 USING OBJECT LITERALS

let obj1 = { fname: "Hussain", lname: "Ilyas", age: 19 };
console.log(obj1);

// 👉 USING NEW KEYWORD

let obj2 = new Object();
obj2.fname = "Suleman";
obj2.lname = "Amjad";
obj2.age = 20;
console.log(obj2);

// 👉 USING CONSTRUCTOR FUNCTION

function Person(name, salary, age) {
  this.name = name;
  this.salary = salary;
  this.age = age;
}

let person = new Person("Hussain", "$100,000", 19);
console.log(person);