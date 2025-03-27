// ==================
//  The (=) Operator
// ==================
// The Simple Assignment Operator (=) assigns a value (which is on right hand side) to a variable (which is on left hand side).

// let a = 10;
// let b = 20;
// console.log(a, b);

// =========================================
//   Arithmetic With Assignment operator
// =========================================

// let x = 10;
// x += 5; // x = x + 5
// console.log(x); // 15

// let x = 10;
// x -= 5; // x = x - 5
// console.log(x); // 5

// let x = 10;
// x *= 5; // x = x * 5
// console.log(x); // 50

// let x = 10;
// x /= 5; // x = x / 5
// console.log(x); // 2

// let x = 10;
// x %= 5; // x = x % 5
// console.log(x); // 0

// let x = 10;
// x **= 2; // x = x ** 2
// console.log(x); // 100

// ==============================
//   Shift Assignment Operators
// ==============================

// let a = 5; // 0000 0101 in binary
// a <<= 2;   // a becomes 0001 0100 (which is 20 in decimal)
// console.log(a); // Output: 20

// let b = 10; // 0000 1010 in binary
// b >>= 1;    // b becomes 0000 0101 (which is 5 in decimal)
// console.log(b); // Output: 5

// let f = -8; // In binary (32-bit): 1111 1111 1111 1111 1111 1111 1111 1000  
// f >>>= 1;   // Result: 0111 1111 1111 1111 1111 1111 1111 1100  
// console.log(f); // Output: 2147483644

// ==============================
//  Bitwise Assignment Operators
// ==============================

// let a = 5;  // Binary: 0101  
// a &= 3;     // Binary: 0011  
// console.log(a); // Output: 1 (Binary: 0001) 

// let b = 5;  // Binary: 0101  
// b |= 2;     // Binary: 0010  
// console.log(b); // Output: 7 (Binary: 0111)

// let c = 5;  // Binary: 0101  
// c ^= 3;     // Binary: 0011  
// console.log(c); // Output: 6 (Binary: 0110)

// ==============================
//  Logical Assignment Operators
// ==============================

let a = true;  
let b = false;  

a &&= b; // a becomes false  
console.log(a); // false  

let c = false;  
c ||= true; // c becomes true  
console.log(c); // true  

let d;  
d ??= 5; // d becomes 5  (Nullish Coalescing operator)
console.log(d); // 5  