// ==========================================
// 41 JavaScript Array Methods slice() & splice()
// slice()  → extract a portion (no mutation)
// splice() → add/remove in place (mutates)
// ==========================================

console.log("==========================================");
console.log("   41 - Array Methods slice() & splice()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   - slice()  → extract a portion");
console.log("   - splice() → add/remove in place\n");

// --- 1. slice() Method ---
console.log("1. slice() Method:\n");
console.log("   Syntax: arrayName.slice(startIndex, endIndex);");
console.log("   (endIndex is EXCLUSIVE — not included)\n");

var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Original a = [" + a.join(", ") + "]");

var b1 = a.slice(1, 3);
console.log("   a.slice(1, 3)  = [" + b1.join(", ") + "]");

var b2 = a.slice(1);
console.log("   a.slice(1)     = [" + b2.join(", ") + "]");

var b3 = a.slice(-2);
console.log("   a.slice(-2)    = [" + b3.join(", ") + "]");

console.log("   Original a (UNCHANGED) = [" + a.join(", ") + "]\n");

// --- 2. splice() — Add Value ---
console.log("2. splice() — Add Value:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   a.splice(2, 0, "Rehman");');
console.log("   (index = 2, delete = 0, new value = Rehman)\n");

var s1 = ["Sanjay", "Aman", "Burhan"];
console.log("   Before : [" + s1.join(", ") + "]");

var removed = s1.splice(2, 0, "Rehman");
console.log("   After  : [" + s1.join(", ") + "]");
console.log("   Returned (removed): [" + removed.join(", ") + "]  (empty)\n");

// --- 3. splice() — Delete Values ---
console.log("3. splice() — Delete Values:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan", "Rehman"];');
console.log("   a.splice(1, 2);   // from index 1, delete 2\n");

var s2 = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Before : [" + s2.join(", ") + "]");

var removed2 = s2.splice(1, 2);
console.log("   After  : [" + s2.join(", ") + "]");
console.log("   Returned (removed): [" + removed2.join(", ") + "]\n");

// --- 4. splice() — Replace Value ---
console.log("4. splice() — Replace Value:\n");
console.log('   var a = ["Sanjay", "Aman", "Burhan"];');
console.log('   a.splice(1, 1, "Rehman");  // delete 1, insert Rehman\n');

var s3 = ["Sanjay", "Aman", "Burhan"];
console.log("   Before : [" + s3.join(", ") + "]");

s3.splice(1, 1, "Rehman");
console.log("   After  : [" + s3.join(", ") + "]\n");

// --- 5. splice() — Add Multiple ---
console.log("5. splice() — Add Multiple Values:\n");
console.log('   var a = ["Aman", "Rehman", "Karan"];');
console.log('   a.splice(1, 0, "Burhan", "Sanjay");\n');

var s4 = ["Aman", "Rehman", "Karan"];
console.log("   Before : [" + s4.join(", ") + "]");

s4.splice(1, 0, "Burhan", "Sanjay");
console.log("   After  : [" + s4.join(", ") + "]\n");

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌────────────────────┬──────────────┬──────────────┐");
console.log("   │ Feature            │ slice()      │ splice()     │");
console.log("   ├────────────────────┼──────────────┼──────────────┤");
console.log("   │ Purpose            │ Extract      │ Add/Remove   │");
console.log("   │ Modifies original  │ ❌ No        │ ✅ Yes       │");
console.log("   │ Returns            │ New array    │ Removed items│");
console.log("   │ Arguments          │ start, end   │ start, del, v│");
console.log("   └────────────────────┴──────────────┴──────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - slice() → keep original intact");
console.log("   - splice() → modify in place");
console.log("   - slice() end is EXCLUSIVE");
console.log("   - splice() returns REMOVED elements");
console.log("   - Double-check indexes!\n");

console.log("==========================================");
console.log("   ✅ slice() extracts. splice() modifies.");
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

    log('slice(1,3) on ["Sanjay","Aman","Burhan","Rehman"]');
    log("   → [" + ["Sanjay", "Aman", "Burhan", "Rehman"].slice(1, 3).join(", ") + "]");
    log("");

    log('splice(2,0,"Rehman") on ["Sanjay","Aman","Burhan"]');
    var demo = ["Sanjay", "Aman", "Burhan"];
    demo.splice(2, 0, "Rehman");
    log("   → [" + demo.join(", ") + "]");
    log("");

    log('splice(1,2) on ["Sanjay","Aman","Burhan","Rehman"]');
    var demo2 = ["Sanjay", "Aman", "Burhan", "Rehman"];
    demo2.splice(1, 2);
    log("   → [" + demo2.join(", ") + "]");
  });
}
