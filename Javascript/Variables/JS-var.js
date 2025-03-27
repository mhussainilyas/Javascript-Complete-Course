// =================
//   var - keyword
// =================
// Variables declared with var have Global Scope
// Variables declared with var can be Reassigned in the same scope
// Variables declared with var can be Redeclared in the same scope

var a;
a = "Muhammad Hussain";
console.log(a);

var myName = "Hussain";
var myName = "Hussain Ilyas"; // re-declaration ✔
myName = "Muhammad Hussain Ilyas"; // re-assignment ✔
console.log(myName);

function sayHello() {
  var user = "Hussain";
}
console.log(user); // not show ❌

if (true) {
  var age = 19;
}
console.log(age); // 19 ✔ (Global Scope)
