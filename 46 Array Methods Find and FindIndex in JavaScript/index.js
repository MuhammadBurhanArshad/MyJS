// ==========================================
// 46 JavaScript Array Methods find() & findIndex()
// find()      → returns first matching value
// findIndex() → returns index of first match
// Both need a callback function
// ==========================================

console.log("==========================================");
console.log("   46 - Array Methods find() & findIndex()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - find()      → first matching value");
console.log("   - findIndex() → index of first match\n");

// --- 1. find() Function ---
console.log("1. find() Function:\n");
console.log("   Returns the value of the first element");
console.log("   that passes a test.\n");

console.log("   var ages = [10, 23, 19, 20];");
console.log("   var b = ages.find(checkAdult);");
console.log("   document.write(b);\n");
console.log("   function checkAdult(age) {");
console.log("       return age >= 18;");
console.log("   }\n");

var ages1 = [10, 23, 19, 20];

function checkAdult(age) {
  return age >= 18;
}

var b1 = ages1.find(checkAdult);
console.log("   ages1 = [" + ages1.join(", ") + "]");
console.log("   find(checkAdult) → " + b1 + "  (23 is the first >= 18)\n");

// --- 2. findIndex() Function ---
console.log("2. findIndex() Function:\n");
console.log("   Returns the index of the first element");
console.log("   that passes a test.\n");

console.log("   var ages = [10, 23, 19, 20];");
console.log("   var b = ages.findIndex(checkAdult);");
console.log("   document.write(b);\n");

var ages2 = [10, 23, 19, 20];
var b2 = ages2.findIndex(checkAdult);
console.log("   ages2 = [" + ages2.join(", ") + "]");
console.log("   findIndex(checkAdult) → " + b2 + "  (index of 23)\n");

// --- 3. No match ---
console.log("3. No Match:\n");
var noMatch = [10, 12, 15];
console.log("   [10, 12, 15].find(n => n >= 18)      → " + noMatch.find(n => n >= 18));
console.log("   [10, 12, 15].findIndex(n => n >= 18) → " + noMatch.findIndex(n => n >= 18));
console.log();

// --- 4. More examples ---
console.log("4. More Examples:\n");

var names = ["Sanjay", "Aman", "Burhan"];
console.log("   names = [" + names.map(n => '"' + n + '"').join(", ") + "]");
console.log("   names.find(n => n === \"Aman\")  → " + names.find(n => n === "Aman"));
console.log();

var users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 17 },
  { name: "Burhan", age: 25 }
];
console.log("   users = [3 objects]");
var adult = users.find(u => u.age >= 18);
console.log("   users.find(u => u.age >= 18) → " + JSON.stringify(adult));
console.log();

var nums = [5, 12, 8, 130, 44];
console.log("   nums = [" + nums.join(", ") + "]");
console.log("   nums.findIndex(n => n > 10) → " + nums.findIndex(n => n > 10));
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌───────────────┬──────────────────┬──────────────────┐");
console.log("   │ Method        │ Returns          │ No match         │");
console.log("   ├───────────────┼──────────────────┼──────────────────┤");
console.log("   │ find()        │ Value            │ undefined        │");
console.log("   │ findIndex()   │ Index            │ -1               │");
console.log("   └───────────────┴──────────────────┴──────────────────┘");
console.log();

// --- Difference from filter ---
console.log("Difference from filter():");
console.log("   find()   → returns single element (first match)");
console.log("   filter() → returns array of ALL matches\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - find() → need the value");
console.log("   - findIndex() → need the position");
console.log("   - Both need a callback function");
console.log("   - Both stop at first match (efficient)");
console.log("   - Use filter() if you need all matches\n");

console.log("==========================================");
console.log("   ✅ find() → value. findIndex() → index.");
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

    log("ages = [10, 23, 19, 20]");
    log("   find(checkAdult)      → " + ages1.find(checkAdult));
    log("   findIndex(checkAdult) → " + ages2.findIndex(checkAdult));
    log("");
    log("ages = [10, 12, 15] (no match)");
    log("   find(n => n >= 18)      → " + noMatch.find(n => n >= 18));
    log("   findIndex(n => n >= 18) → " + noMatch.findIndex(n => n >= 18));
  });
}
