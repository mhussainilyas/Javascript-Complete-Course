// Template Strings use back-ticks (``) rather than the quotes ("") to define a string.

// 👉 SYNONYMS:
// 1) String Templates
// 2) Template Strings
// 3) Template Literals
// 4) Back-Tics Syntax

// let text = `Muhammad Hussain!`;

// 👉 Quotes Inside Strings
// let text = `He's often called "Hussain"`;

// 👉 Multiline Strings
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// 👉 Interpolation

// 1. Variable Substitutions
// let firstName = "Muhammad";
// let lastName = "Hussain";
// let text = `Welcome ${firstName}, ${lastName}!`;

// 2. Expression Substitution
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// 👉 HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.write(html);

console.log(html);
