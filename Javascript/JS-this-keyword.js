// =================
//   What is this?
// =================
// In JavaScript, the this keyword refers to an object.

// 👉 "THIS" KEYWORD'S BEHAVIOUR
// 1) In an object method, this refers to the object.
// 2) Alone, this refers to the global object.
// 3) In a function, this refers to the global object.
// 4) In a function, in strict mode, this is undefined.
// 5) In an event, this refers to the element that received the event.
// 6) Methods like call(), apply(), and bind() can refer this to any object.

// 👉 IN OBJECT METHOD

const obj = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
  fullname: function () {
    let fullName = this.fname + " " + this.lname;
    return fullName;
  },
};

let myFullName = obj.fullname();
console.log(myFullName);

// 👉 ALONE

console.log(this);

// 👉 IN A FUNCTION

function showThis() {
  console.log(this);
}

showThis();

// 👉 IN A FUNCTION WITH "STRICT MODE"

function thisShowUndefined() {
  "use strict";
  console.log(this);
}

thisShowUndefined();

// 👉 IN AN EVENT

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log(this); // Output: <button id="myButton">Click me!</button>
});

// 👉 WITH METHODS LIKE CALL(), APPLY(), BIND()

const person = {
  name: "Hussain",
};

function showName() {
  let statement = "Assalam-o-alaikum!" + " " + this.name;
  return statement;
}

// let result = showName.call(person);
// let result = showName.apply(person);
// console.log(result);

let result = showName.bind(person);
console.log(result());
