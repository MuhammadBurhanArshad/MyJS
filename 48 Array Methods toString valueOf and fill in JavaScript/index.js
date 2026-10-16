// ==========================================
// 48 JavaScript Array Methods toString(), valueOf() & fill()
// toString() → array to string
// valueOf()  → returns the array itself
// fill()     → fills all elements with a static value
// ==========================================

console.log("==========================================");
console.log("   48 - Array Methods toString(), valueOf() & fill()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - toString() → array to string");
console.log("   - valueOf()  → returns the array");
console.log("   - fill()     → fills with a static value\n");

// --- 1. toString() Function ---
console.log("1. toString() Function:\n");
console.log("   Changes Array to String.");
console.log("   Converts an array into a string and returns the result.\n");

var a1 = ["Sanjay", "Aman", "Burhan"];
console.log("   var a = [" + a1.map(x => '"' + x + '"').join(", ") + "];");
console.log("   a.toString()");
console.log("   document.write(a);\n");

var str1 = a1.toString();
console.log('   Output: "' + str1 + '"');
console.log('   typeof(a1.toString()) → "' + typeof str1 + '"\n');

// --- 2. valueOf() Function ---
console.log("2. valueOf() Function:\n");
console.log("   Returns the array itself.\n");

var a2 = ["Sanjay", "Aman", "Burhan"];
console.log("   var a = [" + a2.map(x => '"' + x + '"').join(", ") + "];");
console.log("   document.write(a.valueOf());\n");

var val = a2.valueOf();
console.log('   Output (printed): "' + val + '"');
console.log('   typeof(a.valueOf()) → "' + typeof val + '"');
console.log("   Array.isArray(a.valueOf()) → " + Array.isArray(val) + "\n");

// --- 3. fill() Function ---
console.log("3. fill() Function:\n");
console.log("   Fills all the elements with a static value.\n");

var a3 = ["Sanjay", "Aman", "Burhan"];
console.log("   var a = [" + a3.map(x => '"' + x + '"').join(", ") + "];");
console.log('   a.fill("Hello");');
console.log("   document.write(a);\n");

a3.fill("Hello");
console.log('   Output: "' + a3.join(",") + '"');
console.log("   Array: [" + a3.map(x => '"' + x + '"').join(", ") + "]\n");

// --- fill with start/end ---
console.log("4. fill(value, start, end):\n");

var a4 = [1, 2, 3, 4, 5];
console.log("   var a = [" + a4.join(", ") + "]");
a4.fill(0, 2, 4);
console.log("   a.fill(0, 2, 4) → [" + a4.join(", ") + "]");
console.log("   (fills index 2 and 3 only)\n");

// --- Difference between toString and valueOf ---
console.log("Difference — toString() vs valueOf():\n");
console.log('   typeof(a1.toString()) → "' + typeof a1.toString() + '"  (string)');
console.log('   typeof(a2.valueOf())  → "' + typeof a2.valueOf() + '"  (array/object)');
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌─────────────┬────────────────────┬───────────┬─────────────────┐");
console.log("   │ Method      │ Purpose            │ Mutates?  │ Returns         │");
console.log("   ├─────────────┼────────────────────┼───────────┼─────────────────┤");
console.log("   │ toString()  │ Convert to string  │ ❌ No     │ String          │");
console.log("   │ valueOf()   │ Return the array   │ ❌ No     │ Array           │");
console.log("   │ fill()      │ Fill with a value  │ ✅ Yes    │ Modified array  │");
console.log("   └─────────────┴────────────────────┴───────────┴─────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - toString() → for string conversion");
console.log("   - valueOf()  → when you need the array itself");
console.log("   - fill()     → mutates the array (use carefully)");
console.log("   - toString() joins with commas by default");
console.log("   - Use join() for custom separator\n");

console.log("==========================================");
console.log("   ✅ toString → String. valueOf → Array. fill → Static.");
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
    log('   toString() → "' + ["Sanjay", "Aman", "Burhan"].toString() + '"');
    log('   valueOf()  → "' + ["Sanjay", "Aman", "Burhan"].valueOf() + '"');
    log("");
    log('fill("Hello"):');
    var demo = ["Sanjay", "Aman", "Burhan"];
    demo.fill("Hello");
    log('   Result → [' + demo.map(x => '"' + x + '"').join(", ") + ']');
  });
}
