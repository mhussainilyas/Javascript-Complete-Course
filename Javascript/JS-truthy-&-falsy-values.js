// =========================
//  Truthy and Falsy Values
// =========================
// In JavaScript, values can be categorized as truthy or falsy

// 👉 Falsy Values:
// 0
// null
// false
// undefined
// "" (empty string)
// NaN (Not a Number)

if (0) {
  console.log(true);
} else {
  console.log(false);
}

// 👉 Truthy Values:
// All values that are not falsy
// including objects, arrays, non-zero numbers, non-empty strings, etc.

if ([]) {
  console.log(true);
} else {
  console.log(false);
}
