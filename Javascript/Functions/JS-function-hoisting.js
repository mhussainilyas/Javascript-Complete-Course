// ===================
//  Function Hoisting
// ===================
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared

// 👉 FUNCTION CALL
add(10, 59);

// 👉 FUNCTION DEFINATION
function add(...args) {
  let sum = 0;
  for (let key of args) {
    sum += key;
  }
  console.log(sum);
}
