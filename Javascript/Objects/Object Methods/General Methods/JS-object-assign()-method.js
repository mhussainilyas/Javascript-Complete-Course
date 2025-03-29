// ====================
//   assign() Method
// ====================
// The Object.assign() method copies properties from one or more source objects to a target object.
// SYNTAX: Object.assign(target, source(s))

let obj1 = { dep: "BSCS", hobby: "coding", grade: "A+" };
let obj2 = { fname: "Muhammad", lname: "Hussain" };
let obj3 = { fname: "Suleman", lname: "Amjad" };
Object.assign(obj2, obj1);
console.log(obj2);
