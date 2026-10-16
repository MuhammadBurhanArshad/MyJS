// ==========================================
// 44 JavaScript Array Method includes()
// Checks if a value exists in an array
// Returns true or false
// ==========================================

console.log("==========================================");
console.log("   44 - Array Method includes()");
console.log("==========================================\n");

// --- Target method ---
console.log("Target Method:");
console.log("   includes() → check if a value is in the array\n");

// --- What is it? ---
console.log("Purpose:");
console.log("   Used for testing a condition to check");
console.log("   if a value is in the array or not.\n");

// --- Syntax ---
console.log("Syntax:");
console.log('   arrayName.includes("search item");\n');

// --- Return value ---
console.log("Return Value:");
console.log("   true  → value exists");
console.log("   false → value does NOT exist\n");

// --- Example from notes ---
console.log("Example from notes:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   var b = a.includes("Burhan");');
console.log("   document.write(b);\n");

var a = ["Sanjay", "Aman", "Burhan"];
var b = a.includes("Burhan");

console.log("   Output: " + b + "\n");

// --- Not found example ---
console.log("Not Found Example:");
console.log('   a.includes("Rehman") → ' + a.includes("Rehman"));
console.log();

// --- Case-sensitive ---
console.log("Case-Sensitive:");
console.log('   a.includes("burhan")  → ' + a.includes("burhan") + "  (lowercase b)");
console.log('   a.includes("Burhan")  → ' + a.includes("Burhan") + "  (correct case)");
console.log();

// --- With start index ---
console.log("Using a Start Index:");
var c = [10, 20, 30, 20];
console.log("   var c = [" + c.join(", ") + "]\n");
console.log("   c.includes(20)     → " + c.includes(20));
console.log("   c.includes(20, 2)  → " + c.includes(20, 2) + "  (start at 2)");
console.log("   c.includes(10, 1)  → " + c.includes(10, 1) + "  (10 skipped)");
console.log();

// --- Comparison with indexOf ---
console.log("Comparison with indexOf():\n");
console.log("   // Old style:");
console.log('   a.indexOf("Burhan") !== -1  → ' + (a.indexOf("Burhan") !== -1));
console.log("   // Modern style:");
console.log('   a.includes("Burhan")        → ' + a.includes("Burhan"));
console.log("   (includes is cleaner for existence check)\n");

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌────────────────────┬──────────────┬──────────────┐");
console.log("   │ Feature            │ includes()   │ indexOf()    │");
console.log("   ├────────────────────┼──────────────┼──────────────┤");
console.log("   │ Returns            │ true/false   │ index / -1   │");
console.log("   │ Readability        │ ✅ High      │ ⚠️  Lower    │");
console.log("   │ Best for           │ existence    │ position     │");
console.log("   └────────────────────┴──────────────┴──────────────┘");
console.log();

// --- NaN special case ---
console.log("Special Case — NaN:");
var nanArr = [NaN];
console.log("   [NaN].includes(NaN) → " + nanArr.includes(NaN));
console.log("   [NaN].indexOf(NaN)  → " + nanArr.indexOf(NaN) + "  (indexOf fails on NaN)");
console.log();

// --- Common use cases ---
console.log("Common Use Cases:");
console.log("   - Checking if a value exists");
console.log("   - Form validation (input in allowed list)");
console.log("   - Conditional logic");
console.log("   - Filtering items\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - includes() → need true/false");
console.log("   - indexOf()  → need the position");
console.log("   - Case-sensitive for strings");
console.log("   - Works with NaN (unlike indexOf)\n");

console.log("==========================================");
console.log("   ✅ includes() → true or false.");
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

    log('Array: ["Sanjay", "Aman", "Burhan"]');
    log('   a.includes("Burhan")  → ' + a.includes("Burhan"));
    log('   a.includes("Rehman")  → ' + a.includes("Rehman"));
    log('   a.includes("burhan")  → ' + a.includes("burhan") + "  (case-sensitive)");
    log("");
    log("Array: [10, 20, 30, 20]");
    log("   c.includes(20)        → " + c.includes(20));
    log("   c.includes(20, 2)     → " + c.includes(20, 2));
    log("   c.includes(10, 1)     → " + c.includes(10, 1));
  });
}
