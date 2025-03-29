// ========================
//   constructor property
// ========================
// The constructor property returns the function that created the Object prototype.
// For JavaScript objects the constructor property returns:
// function Object() { [native code] }

const obj = {
  fname: "Muhammad",
  lname: "Hussain",
  eyecolor: "brown",
  age: 19,
};

let text = obj.constructor;
console.log(obj);
console.log(text);
