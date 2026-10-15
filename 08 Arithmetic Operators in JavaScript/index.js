// ==========================================
// 08 JavaScript Arithmetic Operators
// + - * ** / % ++ --
// ==========================================

console.log("==========================================");
console.log("   08 - Arithmetic Operators");
console.log("==========================================\n");

// --- Basic example from notes ---
var a = 20;
var b = 10;
var c = a + b;

console.log("var a = 20;");
console.log("var b = 10;");
console.log("var c = a + b;");
console.log("document.write(c);  →  " + c + "\n");

// --- All arithmetic operators ---
console.log("All Arithmetic Operators (a = 20, b = 10):\n");

console.log("   +   Addition         a + b   →", a + b);
console.log("   -   Subtraction      a - b   →", a - b);
console.log("   *   Multiplication   a * b   →", a * b);
console.log("   **  Exponentiation   2 ** 3  →", 2 ** 3);
console.log("   /   Division         a / b   →", a / b);
console.log("   %   Modulus          a % b   →", a % b);
console.log();

// --- Division vs Modulus (from notes: 14 ÷ 2) ---
console.log("Division vs Modulus (14 ÷ 2):\n");
console.log("           7      ← Division (/)");
console.log("         ┌─────");
console.log("       2 │ 14");
console.log("         │ -14");
console.log("         ──────");
console.log("           0      ← Modulus (%)");
console.log();
console.log("   14 / 2  →", 14 / 2, " (quotient)");
console.log("   14 % 2  →", 14 % 2, " (remainder)");
console.log();

// --- Increment & Decrement ---
console.log("Increment & Decrement:\n");

var x = 5;
console.log("   var x = 5;");
x++;
console.log("   x++;   → x becomes", x);
x--;
console.log("   x--;   → x becomes", x);
console.log();

// --- Summary table ---
console.log("Summary of Operators:");
console.log("   +   → Addition");
console.log("   -   → Subtraction");
console.log("   *   → Multiplication");
console.log("   **  → Exponentiation");
console.log("   /   → Division (quotient)");
console.log("   %   → Modulus (remainder)");
console.log("   ++  → Increment");
console.log("   --  → Decrement");
console.log();

console.log("==========================================");
console.log("   ✅ Arithmetic operators do math on numbers.");
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

    log("a = " + a + ", b = " + b);
    log("a + b  → " + (a + b));
    log("a - b  → " + (a - b));
    log("a * b  → " + (a * b));
    log("2 ** 3 → " + (2 ** 3));
    log("a / b  → " + (a / b));
    log("a % b  → " + (a % b));
    log("14 / 2 → " + (14 / 2) + "  (quotient)");
    log("14 % 2 → " + (14 % 2) + "  (remainder)");
  });
}
