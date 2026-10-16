// ==========================================
// 55 JavaScript Array Method map()
// Transforms each element, returns a new array
// ==========================================

console.log("==========================================");
console.log("   55 - Array Method map()");
console.log("==========================================\n");

// --- Target ---
console.log("Target:");
console.log("   map() → transform each element of an array\n");

// --- What is map? ---
console.log("Purpose:");
console.log("   map is for changing the whole array.");
console.log("   It returns a NEW array.\n");

// --- 1. Basic example from notes ---
console.log("1. Basic Example:\n");
console.log("   var a = [1, 3, 5, 8, 10];");
console.log("   a.map(x => x * 10)");
console.log("   → [10, 30, 50, 80, 100]\n");

var a = [1, 3, 5, 8, 10];
var mapped1 = a.map(x => x * 10);
console.log("   Output: [" + mapped1.join(", ") + "]\n");

// --- 2. Using named function ---
console.log("2. Named Function:\n");
console.log("   var ary = [11, 4, 9, 16];");
console.log("   var b = ary.map(test);");
console.log("   document.write(b);\n");
console.log("   function test(x) {");
console.log("       return x * 10;");
console.log("   }\n");

var ary = [11, 4, 9, 16];

function test(x) {
  return x * 10;
}

var b = ary.map(test);
console.log("   Output: " + b.join(",") + "\n");

// --- 3. Inline function ---
console.log("3. Inline Function:\n");
console.log("   a.map(function (x) {");
console.log("       return x * 10;");
console.log("   });\n");

var mapped2 = a.map(function (x) {
  return x * 10;
});
console.log("   Output: [" + mapped2.join(", ") + "]\n");

// --- 4. map() with strings ---
console.log("4. map() with Strings:\n");
console.log("   We can also use map() with string.\n");

var str = "Hello";
var upper = Array.from(str).map(ch => ch.toUpperCase());
console.log('   "Hello" mapped to uppercase → "' + upper.join("") + '"\n');

// --- 5. More examples ---
console.log("5. More Examples:\n");

var nums = [1, 2, 3, 4];
var squares = nums.map(n => n * n);
console.log("   [" + nums.join(", ") + "].map(n => n * n) → [" + squares.join(", ") + "]");

var names = ["burhan", "aman", "rehman"];
var upperNames = names.map(n => n.toUpperCase());
console.log("   names.map(toUpperCase) → [" + upperNames.map(n => '"' + n + '"').join(", ") + "]");

var users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 17 }
];
var namesOnly = users.map(u => u.name);
console.log("   users.map(u => u.name) → [" + namesOnly.map(n => '"' + n + '"').join(", ") + "]");
console.log();

// --- Comparison tables ---
console.log("map() vs forEach():");
console.log("   ┌──────────────┬──────────────────┬──────────────────┐");
console.log("   │ Feature      │ map()            │ forEach()        │");
console.log("   ├──────────────┼──────────────────┼──────────────────┤");
console.log("   │ Returns      │ New array        │ undefined        │");
console.log("   │ Purpose      │ Transform        │ Side effects     │");
console.log("   │ Chain-able   │ ✅ Yes           │ ❌ No            │");
console.log("   └──────────────┴──────────────────┴──────────────────┘");
console.log();

console.log("map() vs filter():");
console.log("   ┌────────────────┬──────────────────┬──────────────────┐");
console.log("   │ Feature        │ map()            │ filter()         │");
console.log("   ├────────────────┼──────────────────┼──────────────────┤");
console.log("   │ Output length  │ Same as input    │ Can be smaller   │");
console.log("   │ Purpose        │ Transform each   │ Select some      │");
console.log("   └────────────────┴──────────────────┴──────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - map() for transforming, not side effects");
console.log("   - Always RETURN a value from callback");
console.log("   - Use arrow functions for brevity");
console.log("   - Chain map() with filter() for power");
console.log("   - Use forEach() when you don't need the result\n");

console.log("==========================================");
console.log("   ✅ map() = transform every element.");
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

    log("[1, 3, 5, 8, 10].map(x => x * 10)");
    log("   → [" + mapped1.join(", ") + "]");
    log("");
    log("[11, 4, 9, 16].map(test)");
    log("   → [" + b.join(", ") + "]");
    log("");
    log('"Hello" mapped to uppercase');
    log("   → " + upper.join(""));
  });
}
