// =====================
//   const - keyword
// =====================
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// const a;
// a = "Hello World";
// console.log(a); // error ❌

const myName = "Hussain";
// const myName = "Muhammad Hussain"; // re-declaration ❌
// myName = "Muhammad Hussain Ilyas"; // re-assignment ❌
console.log(myName);

function sayHello() {
  const user = "Hello User";
}
sayHello();
console.log(user); // not show ❌

if (true) {
  const age = 19;
}
console.log(age); // not show ❌ (Block Scope)
