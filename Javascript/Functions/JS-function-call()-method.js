// =================
//   Call() Method
// =================
// It can be used to invoke (call) a method with an object as an argument (parameter).
// With the call() method, you can write a method that can be used on different objects.

// 👉 NOTE THAT: All Functions are Methods
// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object
// "window object" is commonly called global object.

// 👉 CALL() WITHOUT ARGUMENTS

const obj = {
  fullname: function () {
    let str = this.fname + " " + this.lname;
    return str;
  },
};

const firstUser = { fname: "Muhammad", lname: "Hussain" };
const secondUser = { fname: "Suleman", lname: "Amjad" };
const thirdUser = { fname: "Zaryab", lname: "Haider" };

// let myFullName = obj.fullname.call(firstUser); // 'Muhammad Hussain'
// let myFullName = obj.fullname.call(secondUser); // 'Suleman Amjad'
let myFullName = obj.fullname.call(thirdUser); // 'Zaryab Haider'
console.log(myFullName);

// 👉 CALL() WITH ARGUMENTS

const obj1 = {
  statement: function (city, country) {
    let str = `${this.fname} ${this.lname} belongs to ${city}, ${country}`;
    return str;
  },
};

const user1 = { fname: "Ali", lname: "Hassan" };
const user2 = { fname: "Hamid", lname: "Munir" };
const user3 = { fname: "Faizan", lname: "Murtaza" };

// let res = obj1.statement.call(user1, "Lahore", "Pakistan");
// let res = obj1.statement.call(user2, "Karachi", "Pakistan");
let res = obj1.statement.call(user3, "Multan", "Pakistan");
console.log(res);
