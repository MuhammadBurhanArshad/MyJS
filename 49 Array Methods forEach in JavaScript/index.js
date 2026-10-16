// ==========================================
// 49 JavaScript Array Method forEach()
// Loops through an array executing a function for each element
// Shorter way to print or process an array
// ==========================================

console.log("==========================================");
console.log("   49 - Array Method forEach()");
console.log("==========================================\n");

// --- Target method ---
console.log("Target Method:");
console.log("   forEach() → loops through an array with a function\n");

// --- What is it? ---
console.log("Purpose:");
console.log("   - Use for printing array with sequence");
console.log("   - It's a shorter way to print an array\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   arrayName.forEach(function (value) {");
console.log("       statement");
console.log("   });\n");

// --- 1. Basic example ---
console.log("1. Basic forEach():\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   a.forEach(function (value) {');
console.log('       document.write(value + "<br>");');
console.log("   });\n");

var a = ["Sanjay", "Aman", "Burhan"];

console.log("   Output:");
a.forEach(function (value) {
  console.log("      " + value);
});
console.log();

// --- 2. Using index ---
console.log("2. With Index:\n");
console.log("   a.forEach(function (value, index) {");
console.log('       document.write(index + ": " + value);');
console.log("   });\n");

console.log("   Output:");
a.forEach(function (value, index) {
  console.log("      " + index + ": " + value);
});
console.log();

// --- 3. Using a named outer function ---
console.log("3. Using a Named Function:\n");
console.log("   function show(value) {");
console.log('       document.write(value + "<br>");');
console.log("   }");
console.log("   a.forEach(show);\n");

function show(value) {
  console.log("      " + value);
}

console.log("   Output:");
a.forEach(show);
console.log();

// --- 4. Arrow function version ---
console.log("4. Arrow Function Version:\n");
console.log("   a.forEach(value => document.write(value + \"<br>\"));\n");

console.log("   Output:");
a.forEach(value => console.log("      " + value));
console.log();

// --- 5. Sum with forEach ---
console.log("5. Sum Example:\n");
var nums = [10, 20, 30, 40];
console.log("   var nums = [" + nums.join(", ") + "]");

var total = 0;
nums.forEach(function (n) {
  total += n;
});
console.log("   Sum → " + total);
console.log("   Average → " + (total / nums.length) + "\n");

// --- Comparison tables ---
console.log("forEach() vs for loop:");
console.log("   ┌──────────────┬──────────────────┬────────────────┐");
console.log("   │ Feature      │ forEach()        │ for loop       │");
console.log("   ├──────────────┼──────────────────┼────────────────┤");
console.log("   │ Syntax       │ Shorter          │ Longer         │");
console.log("   │ Break        │ ❌ Not supported │ ✅ Supported   │");
console.log("   │ Returns      │ undefined        │ N/A            │");
console.log("   └──────────────┴──────────────────┴────────────────┘");
console.log();

console.log("forEach() vs map():");
console.log("   ┌──────────────┬──────────────────┬────────────────┐");
console.log("   │ Feature      │ forEach()        │ map()          │");
console.log("   ├──────────────┼──────────────────┼────────────────┤");
console.log("   │ Returns      │ undefined        │ New array      │");
console.log("   │ Purpose      │ Side effects     │ Transform      │");
console.log("   │ Chain-able   │ ❌ No            │ ✅ Yes         │");
console.log("   └──────────────┴──────────────────┴────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use forEach() for side effects");
console.log("   - Use map() to build a new array");
console.log("   - Use for loop when break/continue needed");
console.log("   - Keep callback short and focused");
console.log("   - Prefer arrow functions for brevity\n");

console.log("==========================================");
console.log("   ✅ forEach() → iterate & process each element.");
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

    log('forEach() on ["Sanjay", "Aman", "Burhan"]:');
    a.forEach(function (value, index) {
      log("   " + index + ": " + value);
    });

    log("");
    log("Sum of [" + nums.join(", ") + "] = " + total);
  });
}
