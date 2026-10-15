// ==========================================
// 26 JavaScript While Loop
// Repeats a block of code while a condition is true
// 3 parts: Initialization → Condition → Increment/Decrement
// ==========================================

console.log("==========================================");
console.log("   26 - While Loop");
console.log("==========================================\n");

// --- Without loop (repetitive) ---
console.log("❌ Without Loop (repetitive):");
console.log('   document.write("Burhan");');
console.log('   document.write("Burhan");');
console.log('   document.write("Burhan");');
console.log("   → Same code written multiple times.\n");

// --- With loop ---
console.log("✅ With Loop (reusable):");
console.log('   Loop (3 Times) {');
console.log('       document.write("Burhan");');
console.log('   }\n');

// --- Loop structure ---
console.log("Loop has 3 parts:");
console.log("   1. Initialization");
console.log("   2. Condition (checked before each iteration)");
console.log("   3. Increment / Decrement\n");

// --- Types of loops ---
console.log("Types of Loops in JavaScript:");
["While Loop", "Do / While Loop", "For Loop",
 "For / In Loop (Objects)", "For Each (Array)"]
  .forEach((t) => console.log("   - " + t));
console.log();

// --- Example from notes ---
console.log("While Loop Example:\n");
console.log("   var a = 1;");
console.log("   while (a <= 10) {");
console.log('       document.write("Yahoo Baba");');
console.log("       a = a + 1;");
console.log("   }\n");

var a = 1;
let count = 0;
while (a <= 10) {
  count++;
  a = a + 1;
}
console.log('   → "Yahoo Baba" printed ' + count + ' times\n');

// --- Simple 1 to 5 example ---
console.log("Count from 1 to 5:\n");
console.log("   var i = 1;");
console.log("   while (i <= 5) {");
console.log('       document.write(i + "<br>");');
console.log("       i++;");
console.log("   }\n");

var i = 1;
let output = "   Output: ";
while (i <= 5) {
  output += i + " ";
  i++;
}
console.log(output + "\n");

// --- Infinite loop warning ---
console.log("⚠️  Common Mistake — Infinite Loop:");
console.log("   while (a <= 10) {");
console.log("       document.write(...);");
console.log("       // ❌ forgot to increment a!");
console.log("   }");
console.log("   → Condition never becomes false.\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Always initialize the variable");
console.log("   - Always update the variable inside the loop");
console.log("   - Ensure the condition eventually becomes false");
console.log("   - Keep the loop body short and clear\n");

console.log("==========================================");
console.log("   ✅ while repeats code while condition is true.");
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

    // Demonstrate a while loop 1 to 5
    var j = 1;
    while (j <= 5) {
      log("Iteration " + j + " → while (j <= 5) is true");
      j++;
    }
    log("Loop finished. j = " + j + " → condition false");
  });
}
