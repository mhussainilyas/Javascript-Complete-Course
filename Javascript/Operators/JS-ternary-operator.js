// ================================
//  Conditional (Ternary) Operator
// ================================
// variableName = (condition) ? trueValue : falseValue;

// SINGLE CONDITION
let age = 19;
let voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable);

// MULTIPLE CONDITIONS
let day = 5;
let dayName =
  day === 1
    ? "Sunday"
    : day === 2
    ? "Monday"
    : day === 3
    ? "Tuesday"
    : day === 4
    ? "Wednesday"
    : day === 5
    ? "Thursday"
    : day === 6
    ? "Friday"
    : day === 7
    ? "Saturday"
    : "Enter Valid Day!";

console.log(dayName);
