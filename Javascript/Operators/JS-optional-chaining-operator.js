// =================================
//  Optional Chaining Operator (?.)
// =================================
// let value = object?.property;
// If object is not null or undefined, it retrieves object.property.
// If object is null or undefined, it returns undefined without throwing an error.
// The optional chaining operator (?.) in JavaScript is a feature that allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid.

const user = {
  name: "Hussain",
  age: 19,
  address: {
    street: "123 Main Street",
    city: "Lahore",
  },
};

// Safely accessing nested properties
let streetName = user.address?.street;
let cityName = user.address?.city;
console.log(streetName); // 123 Main Street
console.log(cityName); // Lahore

// Trying to access a property on an undefined object
let zipCode = user.address?.zip;
console.log(zipCode); // undefined

// 👉 Combining with Function Calls
const newUser = {
  name: "Jane",
  getAddress: () => ({ city: "Hometown" }),
};

let userCity = newUser.getAddress?.().city; // Output: "Hometown"
let userState = newUser.getAddress?.().state; // Output: undefined
console.log(userCity);
console.log(userState);
