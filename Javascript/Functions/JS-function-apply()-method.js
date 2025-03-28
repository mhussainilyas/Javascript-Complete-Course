// ===================
//   apply() Method
// ===================
//The apply() method is almost similar to the call() method.
// With the apply() method, you can write a method that can be used on different objects.

// 👉 APPLY() WITHOUT ARGUMENTS

const obj = {
  fullname: function () {
    let str = this.fname + " " + this.lname;
    return str;
  },
};

const firstUser = { fname: "Muhammad", lname: "Hussain" };
const secondUser = { fname: "Suleman", lname: "Amjad" };
const thirdUser = { fname: "Zaryab", lname: "Haider" };

// let myFullName = obj.fullname.apply(firstUser); // 'Muhammad Hussain'
// let myFullName = obj.fullname.apply(secondUser); // 'Suleman Amjad'
let myFullName = obj.fullname.apply(thirdUser); // 'Zaryab Haider'
console.log(myFullName);

// =============================================
//   The Difference Between call() and apply()
// =============================================
// The difference is
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// 👉 APPLY() WITH ARGUMENTS

const obj1 = {
  statement: function (city, country) {
    let str = `${this.fname} ${this.lname} belongs to ${city}, ${country}`;
    return str;
  },
};

const user1 = { fname: "Ali", lname: "Hassan" };
const user2 = { fname: "Hamid", lname: "Munir" };
const user3 = { fname: "Faizan", lname: "Murtaza" };

// let res = obj1.statement.apply(user1, ["Lahore", "Pakistan"]);
// let res = obj1.statement.apply(user2, ["Karachi", "Pakistan"]);
let res = obj1.statement.apply(user3, ["Multan", "Pakistan"]);
console.log(res);

// 👉 EXAMPLE 02 HERE...

// let answer = Math.max(1, 4, 3, 2); // 4
// let answer = Math.max.apply(null, [1, 4, 3, 2]); // 4
// let answer = Math.max.apply("", [1, 4, 3, 2]); // 4
let answer = Math.max.apply(0, [1, 4, 3, 2]); // 4
console.log(answer);

// ========================
//  JavaScript Strict Mode
// ========================
// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.