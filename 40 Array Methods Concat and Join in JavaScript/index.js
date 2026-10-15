// ==========================================
// 40 JavaScript Array Methods concat() & join()
// concat() → merges arrays
// join()   → converts array to string
// ==========================================

console.log("==========================================");
console.log("   40 - Array Methods concat() & join()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - concat() → merges arrays");
console.log("   - join()   → converts array to string\n");

// --- 1. concat() with individual values ---
console.log("1. concat() with values:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   var c = a.concat("Karan", "Rehman");\n');

var a = ["Sanjay", "Aman", "Burhan"];
var c1 = a.concat("Karan", "Rehman");
console.log("   a = [" + a.join(", ") + "]");
console.log("   c = [" + c1.join(", ") + "]");
console.log("   (a is UNCHANGED)\n");

// --- 2. concat() with arrays ---
console.log("2. concat() with arrays:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   var b = ["Karan", "Rehman"];');
console.log("   var c = a.concat(b);\n");

var a2 = ["Sanjay", "Aman", "Burhan"];
var b2 = ["Karan", "Rehman"];
var c2 = a2.concat(b2);
console.log("   a = [" + a2.join(", ") + "]");
console.log("   b = [" + b2.join(", ") + "]");
console.log("   c = [" + c2.join(", ") + "]\n");

// --- 3. concat() with multiple arrays ---
console.log("3. concat() with multiple arrays:\n");
var x = ["Sanjay"];
var y = ["Aman"];
var z = ["Burhan"];
var merged = x.concat(y, z);
console.log("   a.concat(b, c) = [" + merged.join(", ") + "]\n");

// --- 4. join() with custom separator ---
console.log("4. join() with custom separator:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan", "Rehman"];');
console.log('   var b = a.join(" - ");\n');

var j1 = ["Sanjay", "Aman", "Burhan", "Rehman"];
var j1Str = j1.join(" - ");
console.log('   b = "' + j1Str + '"');
console.log("   (it makes a String)\n");

// --- 5. join() with default separator ---
console.log("5. join() with default separator:\n");
var j2 = ["HTML", "CSS", "JS"];
console.log('   ["HTML", "CSS", "JS"].join()');
console.log('   → "' + j2.join() + '"\n');

// --- 6. join() with no separator ---
console.log("6. join() with no separator:\n");
var j3 = ["H", "e", "l", "l", "o"];
console.log('   ["H","e","l","l","o"].join("")');
console.log('   → "' + j3.join("") + '"\n');

// --- Comparison ---
console.log("Comparison:");
console.log("   ┌───────────┬────────────────────┬────────────────────┐");
console.log("   │ Feature   │ concat()           │ join()             │");
console.log("   ├───────────┼────────────────────┼────────────────────┤");
console.log("   │ Purpose   │ Merge arrays       │ Convert to string  │");
console.log("   │ Returns   │ New array          │ New string         │");
console.log("   │ Mutate?   │ ❌ No              │ ❌ No              │");
console.log("   │ Separator │ N/A                │ Optional           │");
console.log("   └───────────┴────────────────────┴────────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - concat() and join() do NOT mutate");
console.log("   - Assign result to a new variable");
console.log("   - Use join() with specific separator");
console.log("   - Use concat() to combine without modifying\n");

console.log("==========================================");
console.log("   ✅ concat() merges. join() makes a String.");
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

    log('concat() merge  : [' + a2.concat(b2).join(", ") + ']');
    log('concat() values : [' + a.concat("Karan", "Rehman").join(", ") + ']');
    log('join(" - ")     : "' + j1.join(" - ") + '"');
    log('join() default  : "' + j2.join() + '"');
    log('join("") no sep : "' + j3.join("") + '"');
  });
}
