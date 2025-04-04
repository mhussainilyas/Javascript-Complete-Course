// 👉 JAVASCRIPT INTEGER ACCURACY
// avaScript integers are only accurate up to 15 digits
// let x = 999999999999999; // ✔
// let y = 9999999999999999; // ❌

// 👉 HOW TO CREATE BIGINT
// let x = 9999999999999999n;
// console.log(x);
// console.log(typeof x); // bigint

// 👉 BIGINT OPERATIONS
// let x = 9007199254740995n;
// let y = 9007199254740995n;
// let z = x * y; // 81129638414606735738984533590025n

// let x = 9007199254740995n;
// let y = 9007199254740995n;
// let z = x + y; // 18014398509481990n

// let x = 9007199254740995n;
// let y = 9007199254740994n;
// let z = x - y; // 1n

// console.log(z);

// 👉 BIGINT DECIMAL
// Error: Cannot mix BigInt and other types, use explicit conversion.
// let x = 5n;
// let y = x / 2;
// console.log(y);

// 👉 MINIMUM & MAXIMUM SAFE INTEGER
// let x = Number.MAX_SAFE_INTEGER;
// let x = Number.MIN_SAFE_INTEGER;
// console.log(x);

// 👉 Number.isInteger() Method
// let res = Number.isInteger(10); // true
// let res = Number.isInteger(10.4); // false
// console.log(res);

// 👉 Number.isSafeInteger() Method
// let res = Number.isSafeInteger(10); // true
// let res = Number.isSafeInteger(12345678901234567890); // false
// console.log(res);