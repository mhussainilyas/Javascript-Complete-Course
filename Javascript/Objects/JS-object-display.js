// ======================================
//   How to Display JavaScript Objects?
// ======================================

let obj = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
};

// Displaying a JavaScript object will output [object Object].
document.write(obj); // [object object]
document.write("<br>");

// 👉 SOLUTIONS
// Some solutions to display JavaScript objects are:
// 1) Displaying the Object Properties by name
// 2) Displaying the Object Properties in a Loop
// 3) Displaying the Object using Object.values()
// 4) Displaying the Object using JSON.stringify()

// 👉 DISPLAY OBJECT'S PROPERTIES

let objToDisplay = obj.fname + "," + obj.lname + "," + obj.age;
document.write(objToDisplay);
document.write("<br>");
document.write(obj.fname);
document.write("<br>");

// 👉 DISPLAYING PROPERTIES IN A LOOP

let text = "";
for (let key in obj) {
  text += obj[key] + ",";
}

document.write(text);
document.write("<br>");

// 👉 USING OBJECT.VALUES()
// Object.values() creates an array from the property values

let output = Object.values(obj);
console.log(output); // ['Muhammad', 'Hussain', 19]
document.write(output);
document.write("<br>");

// 👉 USING OBJECT.ENTRIES()
// Object.entries() is a built-in JavaScript method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This method is particularly useful when you want to iterate through the properties of an object.

let strText = ``;
console.log(Object.entries(obj));
for (let [prop, value] of Object.entries(obj)) {
  strText += `The ${prop} is ${value} <br>`;
}
document.write(strText);

// 👉 USING JSON.STRINGIFY()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

let objectToString = JSON.stringify(obj);
console.log(obj);
console.log(objectToString);
document.write(objectToString);
