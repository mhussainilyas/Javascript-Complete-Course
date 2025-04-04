// ============================
//   Replacing String Content
// ============================

// 👉 replace()
// The replace() method replaces only the first match
// let text = "Please visit Google.";
// let newStr = text.replace("Google", "W3School");

// NOTE THAT:
// If you want to replace all matches, use a regular expression with the /g flag set.
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// NOTE THAT:
// By default, the replace() method is case sensitive. Writing MICROSOFT will not work:
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools"); // ❌
// let newText = text.replace(/MICROSOFT/i, "W3Schools"); // ✔ /i flag (insensitive)

// NOTE THAT:
// To replace all matches, use a regular expression with a /g flag (global match)
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

// 👉 replaceAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("cats", "dogs");
text = text.replaceAll("Cats", "Dogs");

console.log(text);
