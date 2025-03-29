// ====================
//   groupBy() Method
// ====================
// The Object.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Object.groupBy() method does not change the original object.
// SYNTAX: Object.groupBy(iterable, callback)

// Create an Array
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);
console.log(result.ok);
console.log(result.low);
