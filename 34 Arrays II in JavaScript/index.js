// ==========================================
// 34 JavaScript Arrays II
// Another way to create arrays: new Array()
// ==========================================

console.log("==========================================");
console.log("   34 - Arrays II");
console.log("==========================================\n");

// --- Old way: array literal ---
console.log("1. Old Way (Array Literal):");
console.log("   var a = [10, 20, 30];\n");

var a1 = [10, 20, 30];
console.log("   a1 = [" + a1.join(", ") + "]");
console.log("   a1.length = " + a1.length + "\n");

// --- Another way: new Array() ---
console.log("2. Another Way (new Array()):");
console.log("   var a = new Array();\n");

var a2 = new Array();
a2[0] = 10;
a2[1] = 20;
a2[2] = 30;
console.log("   After filling values:");
console.log("   a2 = [" + a2.join(", ") + "]");
console.log("   a2.length = " + a2.length + "\n");

// --- Empty array with size ---
console.log("3. Specifying the Number of Values:");
console.log("   var a = new Array(3);\n");

var a3 = new Array(3);
console.log("   a3.length = " + a3.length);
console.log("   a3 = [ <3 empty items> ]\n");

// Fill values
a3[0] = "HTML";
a3[1] = "CSS";
a3[2] = "JS";
console.log("   After filling:");
console.log("   a3 = [" + a3.join(", ") + "]\n");

// --- Important note ---
console.log("4. Important Note:");
console.log("   new Array(3)          → length 3, empty array");
console.log("   new Array(10, 20, 30) → [10, 20, 30]\n");

var a4 = new Array(10, 20, 30);
console.log("   a4 = [" + a4.join(", ") + "]");
console.log("   a4.length = " + a4.length + "\n");

// --- Comparison ---
console.log("Comparison:");
console.log("   ┌───────────────────┬──────────┬──────────────┐");
console.log("   │ Feature           │ [ ]      │ new Array()  │");
console.log("   ├───────────────────┼──────────┼──────────────┤");
console.log("   │ Syntax            │ a=[1,2]  │ a=new Array()│");
console.log("   │ When to use       │ values   │ no values    │");
console.log("   │ Specify size      │ ❌       │ ✅           │");
console.log("   │ Modern preferred  │ ✅       │ ⚠️           │");
console.log("   └───────────────────┴──────────┴──────────────┘");
console.log();

// --- Which way to use ---
console.log("Which Way to Use?");
console.log("   ✅ Literal [ ]        → modern, preferred");
console.log("   ⚠️  new Array()       → only when you need empty array with length\n");

// --- Summary ---
console.log("Summary:");
console.log("   - Array literal [ ] → modern, preferred");
console.log("   - new Array()      → another way");
console.log("   - new Array(3)     → creates 3 empty slots");
console.log("   - Both produce the same array at the end\n");

console.log("==========================================");
console.log("   ✅ Prefer [ ] over new Array() in modern JS.");
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

    log("Literal way:        a1 = [" + a1.join(", ") + "]");
    log("Constructor way:    a2 = [" + a2.join(", ") + "]");
    log("new Array(3):       a3.length = " + a3.length + " → [" + a3.join(", ") + "]");
    log("new Array(10,20,30): a4 = [" + a4.join(", ") + "]");
  });
}
