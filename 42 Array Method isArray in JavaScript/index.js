// ==========================================
// 42 JavaScript Array Method isArray()
// Array.isArray(x) → true if x is an array
// ==========================================

console.log("==========================================");
console.log("   42 - Array Method isArray()");
console.log("==========================================\n");

// --- Target method ---
console.log("Target Method:");
console.log("   Array.isArray() → identify if a variable is an array\n");

// --- What is it? ---
console.log("Purpose:");
console.log("   Used for identifying a variable — is that variable an array or not.\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   Array.isArray(variable);\n");

// --- Example from notes ---
console.log("Example from notes:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log("   var b = 20;");
console.log('   var c = "Burhan";\n');

var a = ["Sanjay", "Aman", "Burhan"];
var b = 20;
var c = "Burhan";

console.log("   Array.isArray(a) → " + Array.isArray(a) + "  (array)");
console.log("   Array.isArray(b) → " + Array.isArray(b) + "  (number)");
console.log("   Array.isArray(c) → " + Array.isArray(c) + "  (string)\n");

// --- Example with assignment ---
console.log("Example with assignment:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log("   var result = Array.isArray(a);");
console.log("   document.write(result);\n");

var result = Array.isArray(a);
console.log("   Output: " + result + "  (it will return true or false)\n");

// --- More test cases ---
console.log("More Test Cases:\n");
console.log("   Array.isArray([10, 20, 30])       → " + Array.isArray([10, 20, 30]));
console.log("   Array.isArray([])                 → " + Array.isArray([]));
console.log("   Array.isArray(new Array(5))       → " + Array.isArray(new Array(5)));
console.log("   Array.isArray(25)                 → " + Array.isArray(25));
console.log('   Array.isArray("hello")            → ' + Array.isArray("hello"));
console.log("   Array.isArray({ name: 'Burhan' }) → " + Array.isArray({ name: "Burhan" }));
console.log("   Array.isArray(null)               → " + Array.isArray(null));
console.log("   Array.isArray(undefined)          → " + Array.isArray(undefined));
console.log();

// --- Why use isArray over typeof ---
console.log("Why use isArray() over typeof?\n");
console.log("   typeof [1, 2, 3]   → \"" + typeof [1, 2, 3] + "\"   (misleading!)");
console.log("   typeof { a: 1 }    → \"" + typeof { a: 1 } + "\"   (same as array!)");
console.log("   Array.isArray([1, 2, 3])  → " + Array.isArray([1, 2, 3]) + "  (correct)");
console.log("   Array.isArray({ a: 1 })   → " + Array.isArray({ a: 1 }) + "  (correct)\n");

// --- Using in an if condition ---
console.log("Using in a condition:\n");
console.log("   var data = [1, 2, 3];");
console.log("   if (Array.isArray(data)) {");
console.log('       document.write("Yes, it\\\'s an array");');
console.log("   }\n");

var data = [1, 2, 3];
if (Array.isArray(data)) {
  console.log('   Output: Yes, it\'s an array\n');
}
console.log();

// --- Comparison table ---
console.log("Comparison with typeof:");
console.log("   ┌───────────────────┬──────────┬─────────────────────┐");
console.log("   │ Value             │ typeof   │ Array.isArray()     │");
console.log("   ├───────────────────┼──────────┼─────────────────────┤");
console.log("   │ [1, 2, 3]         │ object   │ true                │");
console.log("   │ { a: 1 }          │ object   │ false               │");
console.log("   │ \"hello\"           │ string   │ false               │");
console.log("   │ 25                │ number   │ false               │");
console.log("   └───────────────────┴──────────┴─────────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use Array.isArray() instead of typeof for arrays");
console.log("   - Combine with if statements for safe processing");
console.log("   - Use before calling .map(), .filter(), etc.");
console.log("   - typeof [] is 'object' — not useful for arrays\n");

console.log("==========================================");
console.log("   ✅ Array.isArray(x) → true or false.");
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

    log('var a = ["Sanjay", "Aman", "Burhan"];');
    log('var b = 20;');
    log('var c = "Burhan";');
    log("");
    log("Array.isArray(a) → " + Array.isArray(a) + "  (array)");
    log("Array.isArray(b) → " + Array.isArray(b) + "  (number)");
    log("Array.isArray(c) → " + Array.isArray(c) + "  (string)");
    log("");
    log("Array.isArray([1,2,3])  → " + Array.isArray([1, 2, 3]));
    log("Array.isArray({a:1})    → " + Array.isArray({ a: 1 }));
  });
}
