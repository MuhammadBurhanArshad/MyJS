// ==========================================
// 33 JavaScript Arrays
// An array stores MULTIPLE values in one variable
// Indexing starts from 0
// ==========================================

console.log("==========================================");
console.log("   33 - Arrays");
console.log("==========================================\n");

// --- Data Types in JavaScript ---
console.log("Data Types in JavaScript:");
["String", "Number", "Boolean", "Array", "Object", "Null", "Undefined"]
  .forEach((t) => console.log("   - " + t));
console.log();

// --- What is an Array? ---
console.log("What is an Array?");
console.log("   A single variable that stores MULTIPLE values.\n");

// --- Wrong ways ---
console.log("❌ Wrong Ways:");
console.log("   var a = 10, 20, 30;       → Error");
console.log('   var a = "10, 20, 30";     → String, not Array\n');

// --- Correct way ---
console.log("✅ Correct Way (Array):");
console.log("   var a = [10, 20, 30];\n");

var a = [10, 20, 30];
console.log("   a = [" + a.join(", ") + "]\n");

// --- How array stores values ---
console.log("How an Array Stores Values:\n");
console.log("   var a = [10, 20, 30]");
console.log("            0   1   2   ← index\n");

a.forEach((val, i) => {
  console.log("   a[" + i + "] = " + val);
});
console.log();

// --- Accessing array elements ---
console.log("Accessing Array Elements:");
console.log("   a[0] → " + a[0]);
console.log("   a[1] → " + a[1]);
console.log("   a[2] → " + a[2]);
console.log();

// --- Array of strings ---
console.log("Array of Strings:");
var names = ["Burhan", "Ali", "Sara"];
console.log("   var names = [" + names.map(n => '"' + n + '"').join(", ") + "];");
console.log("   names[0] → " + names[0]);
console.log("   names[1] → " + names[1]);
console.log("   names[2] → " + names[2]);
console.log();

// --- Array with mixed types ---
console.log("Array with Mixed Types:");
var mixed = [10, "Hello", true, null];
console.log('   var mixed = [10, "Hello", true, null];');
console.log("   → JavaScript arrays can hold different types.\n");

// --- Array length ---
console.log("Array Length (.length):");
console.log("   a.length → " + a.length);
console.log("   names.length → " + names.length);
console.log();

// --- Updating a value ---
console.log("Updating a Value:");
console.log("   a[1] = 99;");
a[1] = 99;
console.log("   a → [" + a.join(", ") + "]\n");

// --- Key points ---
console.log("Key Points:");
console.log("   1. Arrays store multiple values in one variable.");
console.log("   2. Declared with square brackets [ ].");
console.log("   3. Each element has an index, starting from 0.");
console.log("   4. Access via arrayName[index].");
console.log("   5. .length gives total number of elements.\n");

console.log("==========================================");
console.log("   ✅ Array = one variable, many values.");
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

    log("var a = [10, 20, 30];");
    log("   a[0] = " + a[0]);
    log("   a[1] = " + a[1]);
    log("   a[2] = " + a[2]);
    log("   a.length = " + a.length);

    log("");
    log('var names = ["Burhan", "Ali", "Sara"];');
    log("   names[0] = " + names[0]);
    log("   names[1] = " + names[1]);
    log("   names[2] = " + names[2]);
    log("   names.length = " + names.length);
  });
}
