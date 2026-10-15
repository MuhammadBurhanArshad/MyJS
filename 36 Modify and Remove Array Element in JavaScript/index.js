// ==========================================
// 36 JavaScript Modify and Remove Array Element
// Modify → assign a new value at an index
// Remove → use the `delete` keyword
// ==========================================

console.log("==========================================");
console.log("   36 - Modify and Remove Array Element");
console.log("==========================================\n");

// --- Modify Array Element ---
console.log("1. Modify Array Element:\n");
console.log('   var a = ["Burhan", 17, "BBA"];');
console.log("   a[1] = 18;\n");

var a = ["Burhan", 17, "BBA"];
console.log("   Before: [" + a.join(", ") + "]");

a[1] = 18;
console.log("   After:  [" + a.join(", ") + "]");
console.log();

// --- Remove Array Element with delete ---
console.log("2. Remove Array Element (delete):\n");
console.log('   var b = ["Burhan", 18, "BCA"];');
console.log("   delete b[1];\n");

var b = ["Burhan", 18, "BCA"];
console.log("   Before: [" + b.join(", ") + "]");
console.log("   b.length before: " + b.length);

delete b[1];
console.log("   After:  [" + b.join(", ") + "]");
console.log("   b[1] = " + b[1]);
console.log("   b.length after: " + b.length + "  (still 3 — hole left behind)");
console.log();

// --- delete vs splice ---
console.log("3. delete vs splice:\n");

var c = ["Burhan", 18, "BCA"];
console.log('   Original:             ["' + c.join('", "') + '"]');

delete c[1];
console.log('   After delete c[1]:    ["' + c.join('", "') + '"]  ← hole');
console.log("   c.length = " + c.length);
console.log();

var d = ["Burhan", 18, "BCA"];
d.splice(1, 1);
console.log('   After splice(1, 1):   ["' + d.join('", "') + '"]  ← clean');
console.log("   d.length = " + d.length);
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌─────────────────┬────────────────────────┬────────┐");
console.log("   │ Method          │ Effect                 │ Length │");
console.log("   ├─────────────────┼────────────────────────┼────────┤");
console.log("   │ delete a[i]     │ value = undefined      │ same   │");
console.log("   │ a.splice(i, 1)  │ element removed, shift │ -1     │");
console.log("   └─────────────────┴────────────────────────┴────────┘");
console.log();

// --- Combined example ---
console.log("Combined Example:\n");
console.log('   var x = ["Burhan", 17, "BBA"];');
console.log("   x[1] = 18;              // modify");
console.log('   delete x[2];            // remove');
console.log();

var x = ["Burhan", 17, "BBA"];
x[1] = 18;
delete x[2];
console.log("   Result: [" + x.join(", ") + "]\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use arrayName[index] = value to update");
console.log("   - Prefer splice() over delete for clean removal");
console.log("   - Avoid holes in arrays");
console.log("   - Verify the result after modifying");
console.log("   - Remember: delete does NOT change length\n");

console.log("==========================================");
console.log("   ✅ Modify → assign.  Remove → delete/splice.");
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

    log('Modify:  ["Burhan", 17, "BBA"]  →  a[1] = 18');
    log("   Result: [" + a.join(", ") + "]");
    log("");

    log('Remove:  ["Burhan", 18, "BCA"]  →  delete b[1]');
    log("   Result: [" + b.join(", ") + "]  (hole left)");
    log("");

    log('Splice:  ["Burhan", 18, "BCA"]  →  splice(1, 1)');
    log("   Result: [" + d.join(", ") + "]  (clean)");
  });
}
