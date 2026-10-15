// ==========================================
// 16 JavaScript Conditional (Ternary) Operator
// Syntax: (condition) ? trueStatement : falseStatement;
// Shorthand for if else — only 2 outcomes
// ==========================================

console.log("==========================================");
console.log("   16 - Conditional (Ternary) Operator");
console.log("==========================================\n");

// --- Flow ---
console.log("Flow:");
console.log("   Conditions → False → Statement2");
console.log("       ↓");
console.log("      True");
console.log("       ↓");
console.log("   Statement1\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   (condition) ? true_statement : false_statement;\n");

// --- Example from notes ---
var x = 15;
var z;

console.log("var x = 15;");
console.log("var z;");
console.log('(x > 10) ? z = "True" : z = "False";\n');

(x > 10) ? z = "True" : z = "False";

console.log("document.write(z);  →  " + z + "\n");

// --- Even or Odd example ---
console.log("Example — Even or Odd:\n");
var n = 7;
var result = (n % 2 === 0) ? "Even" : "Odd";
console.log("   var n = 7;");
console.log("   var result = (n % 2 === 0) ? \"Even\" : \"Odd\";");
console.log("   → result = " + result + "\n");

// --- More examples ---
console.log("More Examples:\n");

var age = 20;
var check = (age >= 18) ? "Adult" : "Minor";
console.log("   age = 20 →", check);

var marks = 45;
var grade = (marks >= 50) ? "Pass" : "Fail";
console.log("   marks = 45 →", grade);

var num = -5;
var sign = (num >= 0) ? "Positive" : "Negative";
console.log("   num = -5 →", sign);
console.log();

// --- Comparison with if else ---
console.log("Comparison:\n");
console.log("   if else version:");
console.log("      if (x > 10) { z = \"True\"; } else { z = \"False\"; }\n");
console.log("   ternary version:");
console.log("      (x > 10) ? z = \"True\" : z = \"False\";\n");

// --- Summary ---
console.log("Summary:");
console.log("   - Ternary is shorthand for if else.");
console.log("   - Syntax: (condition) ? true : false;");
console.log("   - Only TWO outcomes supported.");
console.log("   - Use for simple one-line decisions.");
console.log();

console.log("==========================================");
console.log("   ✅ Ternary = concise conditional expression.");
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

    log("x = 15 → (x > 10) ? \"True\" : \"False\" → " + z);
    log("n = 7  → (n % 2 === 0) ? \"Even\" : \"Odd\" → " + result);
    log("age = 20 → " + check);
    log("marks = 45 → " + grade);
    log("num = -5 → " + sign);
  });
}
