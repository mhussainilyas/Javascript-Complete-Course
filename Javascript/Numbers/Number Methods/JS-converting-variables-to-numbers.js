// 👉 Number() Method
// The Number() method can be used to convert JavaScript variables to numbers
// let res = Number(false); // 0
// let res = Number(true); // 1
// let res = Number("10"); // 10
// let res = Number("  10"); // 10
// let res = Number("10  "); // 10
// let res = Number(" 10  "); // 10
// let res = Number("10.33"); // 10.33
// let res = Number("10,33"); // NaN
// let res = Number("10 33"); / NaN
// let res = Number("John"); // NaN
// console.log(res);

// 👉 parseInt() Method
// parseInt() parses a string and returns a whole number.
// Only the first number is returned.
// Spaces are allowed.
// let res = parseInt("-10"); // -10
// let res = parseInt("-10.33"); // -10
// let res = parseInt("10"); // 10
// let res = parseInt("10.33"); // 10
// let res = parseInt("10 20 30"); // 10
// let res = parseInt("10 years"); // 10
// let res = parseInt("years 10"); // NaN
// console.log(res);

// 👉 parseFloat() Method
// parseFloat() parses a string and returns a number.
// Only the first number is returned.
// Spaces are allowed.
// let res = parseFloat("10"); // 10
// let res = parseFloat("10.33"); // 10.33
// let res = parseFloat("10 20 30"); // 10
// let res = parseFloat("10 years"); // 10
// let res = parseFloat("years 10"); // NaN
// console.log(res);
