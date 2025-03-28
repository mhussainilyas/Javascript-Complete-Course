// ==========================
//   Self Invoking Function
// ==========================
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration

(function () {
  let statement = "I will invoke myself!!!";
  console.log(statement);
})();
