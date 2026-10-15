// ==========================================
// 39 JavaScript Array Method shift() & unshift()
// shift()   → removes the FIRST element
// unshift() → adds an element to the BEGINNING
// ==========================================

console.log("==========================================");
console.log("   39 - Array Method shift() & unshift()");
console.log("==========================================\n");

// --- Array Methods for now ---
console.log("Array Methods for now:");
console.log("   - shift()   → delete first value");
console.log("   - unshift() → add value at first\n");

// --- 1. shift() Method ---
console.log("1. shift() Method:\n");
console.log("   Syntax: arrayName.shift();\n");

var a = ["Sanjay", "Aman", "Rehman", "Karan"];
console.log("   Before : [" + a.join(", ") + "]");

var removed = a.shift();
console.log("   a.shift()");
console.log("   After  : [" + a.join(", ") + "]");
console.log("   Removed: " + removed);
console.log("   (it deletes first value of an array)\n");

// --- 2. unshift() Method ---
console.log("2. unshift() Method:\n");
console.log("   Syntax: arrayName.unshift(value);\n");

var b = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Before : [" + b.join(", ") + "]");

var newLen = b.unshift("Arshad");
console.log('   b.unshift("Arshad")');
console.log("   After  : [" + b.join(", ") + "]");
console.log("   New length: " + newLen);
console.log("   (it adds value at first of an array)\n");

// --- Complete example ---
console.log("Complete Example:\n");
var c = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Start          : [" + c.join(", ") + "]");

c.shift();
console.log("   After shift()  : [" + c.join(", ") + "]");

c.unshift("Arshad");
console.log("   After unshift(): [" + c.join(", ") + "]");
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌────────────┬──────────────────────┬──────────────────┐");
console.log("   │ Method     │ Action               │ Returns          │");
console.log("   ├────────────┼──────────────────────┼──────────────────┤");
console.log("   │ shift()    │ Removes first        │ Removed element  │");
console.log("   │ unshift()  │ Adds at beginning    │ New length       │");
console.log("   └────────────┴──────────────────────┴──────────────────┘");
console.log();

// --- End vs Beginning ---
console.log("Beginning vs End:");
console.log("   ┌───────────┬────────────┬──────────┐");
console.log("   │ Operation │ Beginning  │ End      │");
console.log("   ├───────────┼────────────┼──────────┤");
console.log("   │ Add       │ unshift()  │ push()   │");
console.log("   │ Remove    │ shift()    │ pop()    │");
console.log("   └───────────┴────────────┴──────────┘");
console.log();

// --- Edge case ---
console.log("Edge Case:");
var empty = [];
console.log("   [].shift()  → " + empty.shift() + "  (undefined)\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - push/pop are FASTER than shift/unshift");
console.log("   - Use shift/unshift only when beginning matters");
console.log("   - Both MUTATE the original array");
console.log("   - Store return value if needed\n");

console.log("==========================================");
console.log("   ✅ shift() removes first. unshift() adds first.");
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

    var demo = ["Sanjay", "Aman", "Burhan", "Rehman"];
    log("Start          : [" + demo.join(", ") + "]");

    demo.shift();
    log("After shift()  : [" + demo.join(", ") + "]");

    demo.unshift("Arshad");
    log("After unshift(): [" + demo.join(", ") + "]");
  });
}
