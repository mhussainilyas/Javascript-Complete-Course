// ======================
//  Comparison Operators
// ======================

// 👉 1. Strict Equality (===)
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === false); // false

// 👉 2. Loose Equality (==)
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == false); // true

// 👉 3. Strict Inequality (!==)
console.log(5 !== 3); // true  
console.log(5 !== '5'); // true  
console.log(0 !== false); // true

// 👉 4. Loose Inequality (!=)
console.log(5 != 3); // true  
console.log(5 != '5'); // false 
console.log(1 != true); // false 

// 👉 5. Greater Than (>)
console.log(5 > 3); // true  
console.log(3 > 5); // false   

// 👉 6. Less Than (<)
console.log(3 < 5); // true  
console.log(5 < 3); // false  

// 👉 7. Greater Than or Equal To (>=)
console.log(5 >= 5); // true  
console.log(4 >= 5); // false  

// 👉 8. Less Than or Equal To (<=)
console.log(5 <= 5); // true  
console.log(6 <= 5); // false