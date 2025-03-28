// ======================
//  Javascript Closures
// ======================

// 👉 A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables. A closure is created when a function is defined inside another function and retains access to the outer function’s scope..

// 👉 Properties of Closures
// 1) A closure is the combination of a function and the lexical environment within which that function was declared.
// 2) The inner function can access:
//   -> Its own variables.
//   -> Variables of the outer function.
//   -> Global variables.

// ==================
//   Simple Example
// ==================

function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let add = myCounter();
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// ====================================
//    Example of Data Encapsulation
// ====================================

const createCounter = () => {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
};

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.increment()); // 4
console.log(counter.decrement()); // 3
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2
console.log(counter.reset()); // 0

// ==================================
//   Example of Function Factories
// ==================================

function outerFunction(fname) {
  return function (lname) {
    console.log(`Full Name: ${fname} ${lname}`);
  };
}

let outerFuncRes = outerFunction("Muhammad");
outerFuncRes("Hussain"); // Full Name: Muhammad Hussain
outerFuncRes("Suleman"); // Full Name: Muhammad Suleman

// ===================================
//    Example of Maintaining State
// ===================================

function counterDown(count) {
  return function () {
    count--;
    return count;
  };
}

let count = counterDown(10);
console.log(count()); // 9
console.log(count()); // 8
console.log(count()); // 7

// =====================================
//   Example of Asynchronous Closures
// =====================================

function delayedLonger(msg, delay) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new Error("Message must be a string!"));
    } else if (typeof delay !== "number" || delay < 0) {
      reject(new Error("Delay must be a positive number!"));
    } else {
      setTimeout(() => {
        resolve(msg);
      }, delay);
    }
  });
}

async function displayMessage() {
  try {
    const message = await delayedLonger("I'm Muhammad Hussain!", 5000);
    console.log(message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayMessage();

// ===============================
//   Example of Event Listeners
// ===============================

function setupListener(elementId) {
  let count = 0;
  document.getElementById(elementId).addEventListener("click", () => {
    count++;
    console.log(`Button clicked ${count} times.`);
  });
}

setupListener("fetchButton");