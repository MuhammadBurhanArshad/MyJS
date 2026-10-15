// ==========================================
// 43 JavaScript Array Methods indexOf() & lastIndexOf()
// indexOf()     → first matching index
// lastIndexOf() → last matching index
// Both return -1 if not found
// ==========================================

console.log("==========================================");
console.log("   43 - Array Methods indexOf() & lastIndexOf()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - indexOf()     → searches from start");
console.log("   - lastIndexOf() → searches from last");
console.log();

// --- 1. indexOf() ---
console.log("1. indexOf() Function:\n");
console.log("   Syntax: arrayName.indexOf(\"search item\", start);\n");

var a = ["Sanjay", "Aman", "Burhan"];

console.log("   var a = [" + a.map(x => '"' + x + '"').join(", ") + "];\n");
console.log('   a.indexOf("Burhan")    → ' + a.indexOf("Burhan"));
console.log('   a.indexOf("Burhan", 1) → ' + a.indexOf("Burhan", 1));
console.log('   a.indexOf("Aman")      → ' + a.indexOf("Aman"));
console.log('   a.indexOf("Mango")     → ' + a.indexOf("Mango") + "  (not found)");
console.log();

// --- 2. lastIndexOf() ---
console.log("2. lastIndexOf() Function:\n");
console.log("   Syntax: arrayName.lastIndexOf(\"search item\", start);\n");

var b = ["Sanjay", "Aman", "Burhan"];

console.log('   b.lastIndexOf("Burhan")    → ' + b.lastIndexOf("Burhan"));
console.log('   b.lastIndexOf("Burhan", 2) → ' + b.lastIndexOf("Burhan", 2));
console.log('   b.lastIndexOf("Mango")     → ' + b.lastIndexOf("Mango") + "  (not found)");
console.log();

// --- Difference: duplicates ---
console.log("Difference with Duplicates:\n");
var c = ["Sanjay", "Aman", "Burhan", "Aman", "Rehman"];
console.log("   var c = [" + c.map(x => '"' + x + '"').join(", ") + "];\n");
console.log('   c.indexOf("Aman")     → ' + c.indexOf("Aman") + "  (first match)");
console.log('   c.lastIndexOf("Aman") → ' + c.lastIndexOf("Aman") + "  (last match)");
console.log();

// --- With start index ---
console.log("With Start Index:\n");
var d = ["A", "B", "C", "B", "D"];
console.log("   var d = [" + d.map(x => '"' + x + '"').join(", ") + "];\n");
console.log('   d.indexOf("B")         → ' + d.indexOf("B") + "  (from start)");
console.log('   d.indexOf("B", 2)      → ' + d.indexOf("B", 2) + "  (start at 2)");
console.log('   d.lastIndexOf("B")     → ' + d.lastIndexOf("B") + "  (from end)");
console.log('   d.lastIndexOf("B", 2)  → ' + d.lastIndexOf("B", 2) + "  (backwards from 2)");
console.log();

// --- Return value table ---
console.log("Return Value:");
console.log("   Value found     → index number");
console.log("   Value not found → -1");
console.log();

// --- Existence check ---
console.log("Check Existence with !== -1:\n");
var e = ["Apple", "Banana"];
console.log('   if (e.indexOf("Banana") !== -1) { ... }');
console.log("   Result: " + (e.indexOf("Banana") !== -1 ? "Found!" : "Not found."));
console.log();

// --- Compare with includes ---
console.log("Compare with includes():\n");
console.log("   e.indexOf(\"Banana\") !== -1   → " + (e.indexOf("Banana") !== -1));
console.log("   e.includes(\"Banana\")          → " + e.includes("Banana"));
console.log("   (includes() is cleaner for existence check)\n");

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────────────┬─────────────────┬─────────────────┐");
console.log("   │ Method           │ Direction       │ Returns         │");
console.log("   ├──────────────────┼─────────────────┼─────────────────┤");
console.log("   │ indexOf()        │ Left → Right    │ First index     │");
console.log("   │ lastIndexOf()    │ Right → Left    │ Last index      │");
console.log("   └──────────────────┴─────────────────┴─────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - indexOf() → need the position");
console.log("   - includes() → need true/false only");
console.log("   - Both use strict equality (===)");
console.log("   - -1 means 'not found'\n");

console.log("==========================================");
console.log("   ✅ indexOf() → first. lastIndexOf() → last.");
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
    log('   indexOf("Burhan")     → ' + a.indexOf("Burhan"));
    log('   indexOf("Burhan", 1)  → ' + a.indexOf("Burhan", 1));
    log('   indexOf("Mango")      → ' + a.indexOf("Mango"));
    log("");
    log('   lastIndexOf("Burhan")    → ' + b.lastIndexOf("Burhan"));
    log('   lastIndexOf("Burhan", 2) → ' + b.lastIndexOf("Burhan", 2));
    log("");
    log('Array: ["Sanjay", "Aman", "Burhan", "Aman", "Rehman"]');
    log('   indexOf("Aman")     → ' + c.indexOf("Aman"));
    log('   lastIndexOf("Aman") → ' + c.lastIndexOf("Aman"));
  });
}
