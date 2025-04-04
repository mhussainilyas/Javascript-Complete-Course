// let text = "Please locate where 'locate' occurs!";
let text = "The rain in SPAIN stays mainly in the plain";

// 👉 indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
// let index = text.indexOf("l"); // 1
// let index = text.indexOf("locate"); // 7
// let index = text.indexOf("locate", 15); // 21

// 👉 lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string, or it returns -1 if the string is not found.
// let index = text.lastIndexOf("l"); // 21
// let index = text.lastIndexOf("locate"); // 21
// let index = text.lastIndexOf("locate", 15); // 7

// 👉 search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match.
// let position = text.search("locate"); // 7
// let position = text.search(/LOCATE/i); // 7
// let position = text.search(/locate/); // 7

// 👉 match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// let result = text.match("ain");
// let result = text.match(/ain/);
// let result = text.match(/ain/g); // main useful important ✔
// let result = text.match(/ain/gi); // main useful important ✔

// 👉 matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
// let result = text.matchAll("ain");
// let result = text.matchAll(/ain/g);
// result.forEach((match) => {
//   console.log(match[0]);
// });

// 👉 includes()
// The includes() method returns true if a string contains a specified value.
// let result = text.includes("rain") // true
// let result = text.includes("spain"); // false
// let result = text.includes("rain", 12); // false

// 👉 startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// let result = text.startsWith("The"); // true
// let result = text.startsWith("T"); // true
// let result = text.startsWith("the"); // false
// let result = text.startsWith("rain", 4); // true

// 👉 endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// let result = text.endsWith("plain"); // true
// let result = text.endsWith("n"); // true
// let result = text.endsWith("Plain"); // false
let result = text.endsWith("rain", 8); // true

console.log(result);
