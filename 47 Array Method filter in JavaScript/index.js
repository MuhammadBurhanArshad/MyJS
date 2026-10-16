// ==========================================
// 47 JavaScript Array Method filter()
// filter() → creates a NEW array with elements that pass a test
// Original array is NOT modified
// ==========================================

console.log("==========================================");
console.log("   47 - Array Method filter()");
console.log("==========================================\n");

// --- Target method ---
console.log("Target Method:");
console.log("   filter() → new array with passing elements\n");

// --- What is it? ---
console.log("Purpose:");
console.log("   Check an array by a given condition");
console.log("   and make a new array from matching values.");
console.log("   filter() creates an array filled with");
console.log("   all array elements that pass a test.\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   arrayName.filter(functionName);\n");

// --- Example from notes ---
console.log("Example from notes:\n");
console.log("   var ages = [80, 12, 19, 20];");
console.log("   var b = ages.filter(checkAdult);");
console.log("   document.write(b);\n");
console.log("   function checkAdult(age) {");
console.log("       return age >= 18;");
console.log("   }\n");

var ages = [80, 12, 19, 20];

function checkAdult(age) {
  return age >= 18;
}

var b = ages.filter(checkAdult);
console.log("   ages = [" + ages.join(", ") + "]");
console.log("   filter(checkAdult) → [" + b.join(", ") + "]");
console.log("   (original ages unchanged: [" + ages.join(", ") + "])\n");

// --- Even/Odd example ---
console.log("Even Numbers Example:\n");
var nums = [1, 2, 3, 4, 5, 6];
console.log("   var nums = [" + nums.join(", ") + "]");

var evens = nums.filter(function (n) {
  return n % 2 === 0;
});
console.log("   filter(n % 2 === 0) → [" + evens.join(", ") + "]\n");

// --- Arrow function version ---
console.log("Arrow Function Version:\n");
var adults = ages.filter(age => age >= 18);
console.log("   ages.filter(age => age >= 18)");
console.log("   → [" + adults.join(", ") + "]\n");

// --- No match ---
console.log("No Match:\n");
var noMatch = [10, 12, 15].filter(n => n >= 18);
console.log("   [10, 12, 15].filter(n => n >= 18) → [" + noMatch.join(", ") + "]  (empty)\n");

// --- More examples ---
console.log("More Examples:\n");

var names = ["Ali", "Burhan", "Sara", "Alexander"];
var longNames = names.filter(n => n.length > 4);
console.log("   names  = [" + names.map(n => '"' + n + '"').join(", ") + "]");
console.log("   filter(n => n.length > 4) → [" + longNames.map(n => '"' + n + '"').join(", ") + "]\n");

var users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 17 },
  { name: "Burhan", age: 25 }
];
var adultsUsers = users.filter(u => u.age >= 18);
console.log("   users = [3 objects]");
console.log("   filter(u => u.age >= 18) → " + adultsUsers.length + " adult(s)");
console.log("   Names: " + adultsUsers.map(u => u.name).join(", ") + "\n");

var nums2 = [-5, 10, -3, 8, 0];
var positives = nums2.filter(n => n > 0);
console.log("   nums = [" + nums2.join(", ") + "]");
console.log("   filter(n => n > 0) → [" + positives.join(", ") + "]\n");

// --- filter vs find ---
console.log("filter() vs find():\n");
console.log("   filter() → returns NEW array of ALL matches");
console.log("   find()   → returns SINGLE first match\n");

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌───────────┬───────────────────────┬─────────────────────┐");
console.log("   │ Method    │ Returns               │ Matching elements   │");
console.log("   ├───────────┼───────────────────────┼─────────────────────┤");
console.log("   │ filter()  │ New array             │ ALL matches         │");
console.log("   │ find()    │ Single element        │ FIRST match only    │");
console.log("   └───────────┴───────────────────────┴─────────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - filter() → need ALL matches");
console.log("   - find()   → need only the first match");
console.log("   - Keep callback short");
console.log("   - Use arrow functions for brevity");
console.log("   - filter() does NOT mutate original\n");

console.log("==========================================");
console.log("   ✅ filter() selects a subset into a new array.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    log('ages = [80, 12, 19, 20]');
    log("   filter(age >= 18) → [" + ages.filter(checkAdult).join(", ") + "]");
    log("");
    log("nums = [1, 2, 3, 4, 5, 6]");
    log("   filter(even)       → [" + nums.filter(n => n % 2 === 0).join(", ") + "]");
    log("");
    log("nums2 = [-5, 10, -3, 8, 0]");
    log("   filter(> 0)        → [" + nums2.filter(n => n > 0).join(", ") + "]");
  });
}
