// ==========================================
// 38 JavaScript Array Method pop() & push()
// pop()  → removes the LAST element
// push() → adds an element to the END
// ==========================================

console.log("==========================================");
console.log("   38 - Array Method pop() & push()");
console.log("==========================================\n");

// --- Array Methods for now ---
console.log("Array Methods for now:");
console.log("   - pop()  → remove last value");
console.log("   - push() → add a value at the end\n");

// --- 1. pop() Method ---
console.log("1. pop() Method:\n");
console.log("   Syntax: arrayName.pop();\n");

var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Before : [" + a.join(", ") + "]");

var removed = a.pop();
console.log("   a.pop()");
console.log("   After  : [" + a.join(", ") + "]");
console.log("   Removed: " + removed);
console.log();

// --- 2. push() Method ---
console.log("2. push() Method:\n");
console.log("   Syntax: arrayName.push(value);\n");

var b = ["Sanjay", "Aman", "Burhan"];
console.log("   Before : [" + b.join(", ") + "]");

var newLen = b.push("Rehman");
console.log('   b.push("Rehman")');
console.log("   After  : [" + b.join(", ") + "]");
console.log("   New length: " + newLen);
console.log();

// --- Complete Example ---
console.log("Complete Example:\n");
var c = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Start          : [" + c.join(", ") + "]");

c.pop();
console.log("   After pop()    : [" + c.join(", ") + "]");

c.push("Rehman");
console.log("   After push()   : [" + c.join(", ") + "]");
console.log();

// --- Comparison Table ---
console.log("Comparison:");
console.log("   ┌──────────┬───────────────────┬──────────────────┐");
console.log("   │ Method   │ Action            │ Returns          │");
console.log("   ├──────────┼───────────────────┼──────────────────┤");
console.log("   │ pop()    │ Removes last      │ Removed element  │");
console.log("   │ push()   │ Adds at end       │ New length       │");
console.log("   └──────────┴───────────────────┴──────────────────┘");
console.log();

// --- Edge case: pop() on empty array ---
console.log("Edge Case:");
var empty = [];
console.log("   [].pop()  → " + empty.pop() + "  (undefined)");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - push() is faster than unshift()");
console.log("   - pop() is faster than shift()");
console.log("   - Both MUTATE the original array");
console.log("   - Store return value if needed\n");

console.log("==========================================");
console.log("   ✅ pop() removes last. push() adds last.");
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
    log("Start      : [" + demo.join(", ") + "]");

    demo.pop();
    log("After pop(): [" + demo.join(", ") + "]");

    demo.push("Rehman");
    log("After push(): [" + demo.join(", ") + "]");
  });
}
