// ==========================================
// 28 JavaScript For Loop
// Combines initialization + condition + increment in one line
// ==========================================

console.log("==========================================");
console.log("   28 - For Loop");
console.log("==========================================\n");

// --- Syntax ---
console.log("For Loop Syntax:\n");
console.log("   for (initialization; condition; increment/decrement) {");
console.log("       statement");
console.log("   }\n");

console.log("Example:");
console.log("   for ( var a = 1 ;  a <= 10 ;  a++ ) {");
console.log("        ↑              ↑         ↑");
console.log("   Initialization  Condition  Increment/Decrement");
console.log("   }\n");

// --- Example from notes ---
console.log("Example from notes:");
console.log('   for (var a = 1; a <= 10; a++) {');
console.log('       document.write("Burhan");');
console.log('   }\n');

let count = 0;
for (var a = 1; a <= 10; a++) {
  count++;
}
console.log('   → "Burhan" printed ' + count + ' times\n');

// --- Count 1 to 5 ---
console.log("Count 1 to 5:\n");
let output = "   Output: ";
for (var i = 1; i <= 5; i++) {
  output += i + " ";
}
console.log(output + "\n");

// --- Count down 10 to 1 ---
console.log("Count down from 10 to 1:\n");
let down = "   Output: ";
for (var j = 10; j >= 1; j--) {
  down += j + " ";
}
console.log(down + "\n");

// --- Iterating an array ---
console.log("Iterating an Array:\n");
var fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("   var fruits = [" + fruits.map(f => '"' + f + '"').join(", ") + "];\n");
console.log("   for (var k = 0; k < fruits.length; k++) {");
console.log("       console.log(fruits[k]);");
console.log("   }\n");

console.log("   Output:");
for (var k = 0; k < fruits.length; k++) {
  console.log("      " + k + " → " + fruits[k]);
}
console.log();

// --- Comparison with while ---
console.log("For Loop vs While Loop:\n");
console.log("   for   → all 3 parts in one line (compact)");
console.log("   while → parts scattered (easier to forget update)");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use descriptive variable names");
console.log("   - Prefer let over var");
console.log("   - Keep the body short and focused");
console.log("   - Avoid changing the loop variable inside the body");
console.log("   - Use break / continue for fine control\n");

console.log("==========================================");
console.log("   ✅ for is ideal when you know the count.");
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

    log("For loop 1 to 5:");
    for (var n = 1; n <= 5; n++) {
      log("   Iteration " + n + " → i = " + n);
    }

    log("For loop counting down 5 to 1:");
    for (var m = 5; m >= 1; m--) {
      log("   Countdown: " + m);
    }
  });
}
