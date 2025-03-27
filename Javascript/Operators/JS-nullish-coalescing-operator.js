// ======================================
//  The Nullish Coalescing Operator (??)
// ======================================
// let result = value1 ?? value2;
// The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.

let username; // undefined
let guestname = "Guest";
let result = username ?? guestname;
console.log(result); // Guest

username = "Hussain";
result = username ?? guestname;
console.log(result); // Hussain

username = null; // null
result = username ?? guestname;
console.log(result); // Guest

username = 0; // false (0)
result = username ?? guestname;
console.log(result); // 0
