// ==========================================
// 11 JavaScript Comparison Operators
// ==  ===  !=  !==  >  <  >=  <=
// All return true or false
// ==========================================

console.log("==========================================");
console.log("   11 - Comparison Operators");
console.log("==========================================\n");

// --- Basic example from notes ---
var x = 15;
var y = 25;

console.log("var x = 15;");
console.log("var y = 25;\n");

console.log("x > y   →", x > y, " (false)\n");

// --- All comparison operators ---
console.log("All Comparison Operators:\n");

console.log("   ==    x == 15       →", x == 15);
console.log("   ===   x === 15      →", x === 15);
console.log("   !=    x != y        →", x != y);
console.log("   !==   x !== y       →", x !== y);
console.log("   >     y > x         →", y > x);
console.log("   <     x < y         →", x < y);
console.log("   >=    x >= 15       →", x >= 15);
console.log("   <=    x <= 10       →", x <= 10);
console.log();

// --- == vs === (type coercion) ---
console.log("== vs ===  (Loose vs Strict):\n");
console.log('   5 ==  "5"   →', 5 == "5",  " (value only — true)");
console.log('   5 === "5"   →', 5 === "5", " (value AND type — false)");
console.log('   5 !=  "5"   →', 5 != "5",  " (values equal — false)");
console.log('   5 !== "5"   →', 5 !== "5", " (types differ — true)");
console.log();

// --- Summary table ---
console.log("Summary:");
console.log("   ┌──────────┬─────────────────────────────────┐");
console.log("   │ Operator │ Description                     │");
console.log("   ├──────────┼─────────────────────────────────┤");
console.log("   │ ==       │ equal to                        │");
console.log("   │ ===      │ equal value AND equal type      │");
console.log("   │ !=       │ not equal                       │");
console.log("   │ !==      │ not equal value OR not equal type│");
console.log("   │ >        │ greater than                    │");
console.log("   │ <        │ less than                       │");
console.log("   │ >=       │ greater than or equal to        │");
console.log("   │ <=       │ less than or equal to           │");
console.log("   └──────────┴─────────────────────────────────┘");
console.log();

console.log("==========================================");
console.log("   ✅ Comparison operators return true / false.");
console.log("   ✅ Prefer === and !== over == and !=.");
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

    log("x = 15, y = 25");
    log("x > y   → " + (x > y));
    log("x == 15 → " + (x == 15));
    log("x === 15 → " + (x === 15));
    log("x != y  → " + (x != y));
    log('5 ==  "5"  → ' + (5 == "5"));
    log('5 === "5"  → ' + (5 === "5"));
    log('5 !== "5"  → ' + (5 !== "5"));
  });
}
