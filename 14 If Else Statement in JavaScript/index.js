// ==========================================
// 14 JavaScript If Else Statement
// if → runs when condition is true
// else → runs when condition is false
// ==========================================

console.log("==========================================");
console.log("   14 - If Else Statement");
console.log("==========================================\n");

// --- Flow ---
console.log("Flow:");
console.log("   If → Conditions → False → Statement");
console.log("          ↓");
console.log("         True");
console.log("          ↓");
console.log("       Statement\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   if (condition) {");
console.log("       // statement for TRUE");
console.log("   } else {");
console.log("       // statement for FALSE");
console.log("   }\n");

// --- Example from notes: false case ---
var x = 15;
console.log("var x = 15;\n");
console.log("if (x > 30) {");
console.log('    document.write("x is Greater");');
console.log("} else {");
console.log('    document.write("x is Smaller");');
console.log("}\n");

if (x > 30) {
  console.log('→ x is Greater (condition TRUE)\n');
} else {
  console.log('→ x is Smaller (condition FALSE)\n');
}

// --- Example: true case ---
var y = 50;
console.log("var y = 50;\n");
console.log("if (y > 30) {");
console.log('    document.write("y is Greater");');
console.log("} else {");
console.log('    document.write("y is Smaller");');
console.log("}\n");

if (y > 30) {
  console.log('→ y is Greater (condition TRUE)\n');
} else {
  console.log('→ y is Smaller (condition FALSE)\n');
}

// --- if vs if else ---
console.log("if  vs  if else:\n");
console.log("   if       → run code only if condition is true");
console.log("   if else  → choose between two alternatives");
console.log();

// --- Summary ---
console.log("Summary:");
console.log("   if    block → runs when condition is TRUE");
console.log("   else  block → runs when condition is FALSE");
console.log("   Syntax: if (condition) { ... } else { ... }");
console.log();

console.log("==========================================");
console.log("   ✅ if else handles BOTH outcomes.");
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

    log("x = 15 → x > 30 ? " + (x > 30) + " → " + (x > 30 ? "x is Greater" : "x is Smaller"));
    log("y = 50 → y > 30 ? " + (y > 30) + " → " + (y > 30 ? "y is Greater" : "y is Smaller"));
  });
}
