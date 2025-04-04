// ===========================
//   Extracting String Parts
// ===========================
// There are 3 methods for extracting a part of a string:
// 1) slice(start, end)
// 2) substring(start, end)
// 3) substr(start, length)

let str = "Apple, Banana, Mango";

// 👉 slice(start, end)
// let strPart = str.slice(7); // Banana, Mango
// let strPart = str.slice(7, 13); // Banana
// let strPart = str.slice(-13); // Banana, Mango
// let strPart = str.slice(-13, -7); // Banana

// 👉 substring(start, end)
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// let strPart = str.substring(15); // Mango
// let strPart = str.substring(7, 13); // Banana

// 👉 substr(start, length) 🚨deprecated!
// let strPart = str.substr(7); // Banana, Mango
// let strPart = str.substr(7, 6); // Banana
// let strPart = str.substr(-13); // Banana, Mango
let strPart = str.substr(-13, 6); // Banana

console.log(strPart);
