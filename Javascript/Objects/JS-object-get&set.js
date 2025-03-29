// ====================
//   Getter & Setter
// ====================
// Getters and setters allow you to define Object Accessors (Computed Properties).

// 👉 JAVASCRIPT GETTER (The get Keyword)

const obj = {
  fname: "Muhammad",
  lname: "Hussain",
  lang: "Arabic",
  age: 19,
  get language() {
    return this.lang;
  },
};

console.log(obj.language);

// 👉 JAVASCRIPT SETTER (The set Keyword)

const person = {
  name: "Suleman",
  age: 20,
  salary: 40_000,
  lang: "English",
  set language(l) {
    this.lang = l;
  },
};

console.log(person);

person.language = "Urdu";
console.log(person);
