// ======================
//   Function Borrowing
// ======================
// With the bind() method, an object can borrow a method from another object.

const person = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
  fullname: function () {
    let str = `${this.fname} ${this.lname} is ${this.age} years old.`;
    return str;
  },
};

const member = {
  fname: "Suleman",
  lname: "Amjad",
  age: 20,
};

let fullName = person.fullname.bind(member);
console.log(fullName());

// 👉 PRESERVING 'THIS' KEYWORD
// Sometimes the bind() method has to be used to prevent losing this.

const obj = {
  fname: "Muhammad",
  lname: "Hussain",
  display: function () {
    let str = this.fname + " " + this.lname;
    console.log(str);
  },
};

obj.display();

// When a function is used as a callback, this is lost.

setTimeout(obj.display, 3000);

// The bind() method solves this problem.

let result = obj.display.bind(obj);
setTimeout(result, 5000)