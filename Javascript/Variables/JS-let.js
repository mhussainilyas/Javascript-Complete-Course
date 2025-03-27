// ==================
//   let - keyword
// ==================
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let can be Reassigned in the same scope
// Variables declared with let cannot be Redeclared in the same scope

let a;
a = "Hello World";
document.write(a);

let myName = "Hussain";
// let myName = "Muhammad Hussain"; // re-declaration ❌
myName = "Muhammad Hussain Ilyas"; // re-assignment ✔
console.log(myName);

function sayHello() {
  let user = "Hussain";
}
sayHello();
console.log(user); // not show ❌

if (true) {
  let age = 19;
}
console.log(age); // not show ❌ (Block Scope)
