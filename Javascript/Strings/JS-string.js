// 👉 USING DOUBLE QUOTES
let str = "Muhammad Hussain";

// 👉 USING SINGLE QUOTES
let str2 = "Hussain Ilyas";

// 👉 DISPLAYING STRINGS
console.log(str);

// 👉 ACCESSING CHARACTER FROM STRING
console.log(str[7]); // d
console.log(str[14]); // i

// 👉 QUOTES INSIDE QUOTES
let str3 = "It's alright";
let str4 = "He is called 'Hussain'";
let str5 = 'He is called "Hussain"';

// 👉 TEMPLATE STRING
let str6 = `He's often called "Hussain Ilyas"`;

// 👉 STRING LENGTH
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strLength = text.length;
console.log(strLength);

// 👉 ESCAPE CHARACTER
let escStr = "It's okay";
let escStr1 = 'My name is "Hussain"';

// 👉 STRINGS AS OBJECT
let myName = "Hussain Ilyas";
let myName1 = new String("Hussain Ilyas");
console.log(myName1); // String {'Hussain Ilyas'}
console.log(myName1[1]); // u
console.log(myName1[9]); // l
console.log(myName == myName1); // true
console.log(myName === myName1); // false
