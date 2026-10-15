// ==========================================
// 12 JavaScript If Statement
// Executes a block only when condition is true
// ==========================================

console.log("==========================================");
console.log("   12 - If Statement");
console.log("==========================================\n");

// --- Flow explanation ---
console.log("Flow of an if statement:");
console.log("   If");
console.log("    ↓");
console.log("   Condition");
console.log("    ↓         ↘");
console.log("   True       False");
console.log("    ↓           ↓");
console.log("   Statement    Out (skip)\n");

// --- Example from notes ---
var x = 15;
console.log("var x = 15;\n");
console.log("if (x > 10) {");
console.log('    document.write("x is Greater");');
console.log("}\n");

if (x > 10) {
  console.log("→ Output: x is Greater (condition TRUE)\n");
}

// --- Example where condition is false ---
var y = 5;
console.log("var y = 5;\n");
console.log("if (y > 10) {");
console.log('    document.write("y is Greater");');
console.log("}\n");

if (y > 10) {
  console.log("→ This will NOT print (condition FALSE)\n");
} else {
  console.log("→ Condition was FALSE — block skipped.\n");
}

// --- Comparison operators used with if ---
console.log("Common comparison operators used inside if:");
console.log("   >    greater than");
console.log("   <    less than");
console.log("   >=   greater than or equal to");
console.log("   <=   less than or equal to");
console.log("   ==   equal to");
console.log("   ===  strictly equal");
console.log("   !=   not equal");
console.log();

// --- Practical day example (from notes) ---
console.log("Day example:");
var today = "Monday";
if (today === "Monday") {
  console.log('   Today is Monday → True → Print "Mon"');
} else {
  console.log('   Today is not Monday → False → Out');
}
console.log();

// --- Summary ---
console.log("Summary:");
console.log("   - if runs a block only when condition is TRUE.");
console.log("   - If condition is FALSE, the block is skipped.");
console.log("   - Syntax:  if (condition) { statement; }");
console.log("   - Conditions are built using comparison operators.");
console.log();

console.log("==========================================");
console.log("   ✅ if is the foundation of decision-making.");
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

    log("var x = 15;");

    if (x > 10) {
      log('if (x > 10) → TRUE → "x is Greater"');
    }

    log("var y = 5;");

    if (y > 10) {
      log('if (y > 10) → TRUE → "y is Greater"');
    } else {
      log("if (y > 10) → FALSE → block skipped");
    }
  });
}
