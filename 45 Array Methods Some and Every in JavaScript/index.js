// ==========================================
// 45 JavaScript Array Methods some() & every()
// some()  → any element passes the test
// every() → all elements pass the test
// Both need a callback function
// ==========================================

console.log("==========================================");
console.log("   45 - Array Methods some() & every()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - some()  → checks if ANY element matches");
console.log("   - every() → checks if ALL elements match\n");

// --- Rules ---
console.log("Rules:");
console.log("   - Needs a FUNCTION (callback)");
console.log("   - Returns TRUE or FALSE\n");

// --- 1. some() Example ---
console.log("1. some() Function:\n");
console.log("   Checks if ANY of the elements match or pass a test.\n");

console.log("   var ages = [10, 13, 15, 20];");
console.log("   var b = ages.some(checkAdult);");
console.log("   document.write(b);\n");
console.log("   function checkAdult(age) {");
console.log("       return age >= 18;");
console.log("   }\n");

var ages1 = [10, 13, 15, 20];

function checkAdult(age) {
  return age >= 18;
}

var b1 = ages1.some(checkAdult);
console.log("   ages1 = [" + ages1.join(", ") + "]");
console.log("   some(checkAdult) → " + b1 + "  (20 >= 18)\n");

// --- 2. every() Example ---
console.log("2. every() Function:\n");
console.log("   Checks ALL values of an array for a given condition.\n");

console.log("   var ages = [10, 13, 18, 20];");
console.log("   var b = ages.every(checkAdult);");
console.log("   document.write(b);\n");

var ages2 = [10, 13, 18, 20];
var b2 = ages2.every(checkAdult);
console.log("   ages2 = [" + ages2.join(", ") + "]");
console.log("   every(checkAdult) → " + b2 + "  (10 < 18 fails)\n");

// --- 3. every() passes ---
console.log("3. every() — All Pass:\n");
var ages3 = [18, 20, 25, 30];
var b3 = ages3.every(checkAdult);
console.log("   ages3 = [" + ages3.join(", ") + "]");
console.log("   every(checkAdult) → " + b3 + "  (all >= 18)\n");

// --- 4. More examples ---
console.log("4. More Examples:\n");

var nums1 = [1, 3, 5, 8];
console.log("   [1, 3, 5, 8].some(n => n % 2 === 0) → " + nums1.some(n => n % 2 === 0));

var nums2 = [2, 4, 6, 8];
console.log("   [2, 4, 6, 8].every(n => n % 2 === 0) → " + nums2.every(n => n % 2 === 0));

var nums3 = [2, 4, 5, 8];
console.log("   [2, 4, 5, 8].every(n => n % 2 === 0) → " + nums3.every(n => n % 2 === 0));
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌────────────┬─────────────────────────┬───────────────────┐");
console.log("   │ Method     │ Returns TRUE when…      │ Returns FALSE when│");
console.log("   ├────────────┼─────────────────────────┼───────────────────┤");
console.log("   │ some()     │ At least one passes     │ None pass         │");
console.log("   │ every()    │ All pass                │ At least one fails│");
console.log("   └────────────┴─────────────────────────┴───────────────────┘");
console.log();

// --- Use cases ---
console.log("Common Use Cases:");
console.log("   some()  → at least one field filled, any admin role");
console.log("   every() → all fields filled, all conditions met\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - some() → one match is enough");
console.log("   - every() → all must match");
console.log("   - Use arrow functions for compactness");
console.log("   - Both stop early once the result is known\n");

console.log("==========================================");
console.log("   ✅ some() → any.  every() → all.");
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

    log('ages1 = [10, 13, 15, 20]');
    log("   some(checkAdult)  → " + ages1.some(checkAdult) + "  (20 passes)");
    log("");
    log('ages2 = [10, 13, 18, 20]');
    log("   every(checkAdult) → " + ages2.every(checkAdult) + "  (10 fails)");
    log("");
    log('ages3 = [18, 20, 25, 30]');
    log("   every(checkAdult) → " + ages3.every(checkAdult) + "  (all pass)");
  });
}
