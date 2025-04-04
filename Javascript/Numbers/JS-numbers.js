// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals

// let x = 123e5;    // 12300000
// let y = 123e-5;   // 0.00123

// 👉 INTEGER PRECISION
// Integers are accurate up to 15 digits.
// let x = 999999999999999;   // x will be 999999999999999
// let y = 9999999999999999;  // y will be 10000000000000000

// 👉 ADDING NUMBERS AND STRINGS
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

// FOR NUMBERS
// let x = 10;
// let y = 20;
// let z = x + y; // 30

// FOR STRINGS
// let x = "10";
// let y = "20";
// let z = x + y; // 1020

// 👉 A common mistake is to expect this result to be 30
// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y; // The result is: 1020

// 👉 A common mistake is to expect this result to be 102030
// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z; // 3030

// 👉 NaN - Not a Number
// let x = 100 / "Apple"; // NaN
// let x = 100 / "10"; // 10

// 👉 isNaN()
// let x = 100 / "Apple";
// let result = isNaN(x); // true

// 👉 Type of NaN
// console.log(typeof NaN); // number

// 👉 INFINITY
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// Execute until Infinity
// let myNumber = 2;
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
//   console.log(myNumber);
// }

// 👉 HEXADECIMAL
// let num = 0xff; // 255
// let num = 0x96af; // 38575

// 👉 IMPORTANT NOTE:
// you can use the toString() method to output numbers from base 2 to base 36.

// let number = 32;
// let res = number.toString(36); // Hexatrigesimal (base 36): w
// let res = number.toString(32); // Duotrigesimal (base 32): 10
// let res = number.toString(16); // Hexadecimal (base 16): 20
// let res = number.toString(12); // Duodecimal (base 12): 28
// let res = number.toString(10); // Decimal (base 10): 32
// let res = number.toString(8); // Octal (base 8): 40
// let res = number.toString(2); // Binary (base 2): 100000

// 👉 JavaScript Numbers as Objects
// let x = 123; // 123
// let y = new Number(123); // Number {123}