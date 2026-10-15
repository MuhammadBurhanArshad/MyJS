// ==========================================
// 09 JavaScript Assignment Operators
// = += -= *= /= %= **=
// ==========================================

console.log("==========================================");
console.log("   09 - Assignment Operators");
console.log("==========================================\n");

// --- Basic example from notes ---
var a = 10;
var b = 20;

console.log("var a = 10;");
console.log("var b = 20;");
console.log("a += b;");
a += b;
console.log("document.write(a);  →  " + a + "\n");

// --- Demonstration of each operator ---
console.log("Demonstration of each assignment operator:\n");

// =
let x1 = 5;
console.log("   =    x = 5;      → x =", x1);

// +=
let x2 = 5;
x2 += 3;
console.log("   +=   x += 3;     → x =", x2, " (x = x + 3)");

// -=
let x3 = 5;
x3 -= 3;
console.log("   -=   x -= 3;     → x =", x3, " (x = x - 3)");

// *=
let x4 = 5;
x4 *= 3;
console.log("   *=   x *= 3;     → x =", x4, " (x = x * 3)");

// /=
let x5 = 15;
x5 /= 3;
console.log("   /=   x /= 3;     → x =", x5, " (x = x / 3)");

// %=
let x6 = 10;
x6 %= 3;
console.log("   %=   x %= 3;     → x =", x6, " (x = x % 3)");

// **=
let x7 = 2;
x7 **= 3;
console.log("   **=  x **= 3;    → x =", x7, " (x = x ** 3)");
console.log();

// --- Summary table ---
console.log("Summary Table:");
console.log("   ┌──────────┬──────────┬──────────────┐");
console.log("   │ Operator │ Example  │ Same As      │");
console.log("   ├──────────┼──────────┼──────────────┤");
console.log("   │ =        │ x = y    │ x = y        │");
console.log("   │ +=       │ x += y   │ x = x + y    │");
console.log("   │ -=       │ x -= y   │ x = x - y    │");
console.log("   │ *=       │ x *= y   │ x = x * y    │");
console.log("   │ /=       │ x /= y   │ x = x / y    │");
console.log("   │ %=       │ x %= y   │ x = x % y    │");
console.log("   │ **=      │ x **= y  │ x = x ** y   │");
console.log("   └──────────┴──────────┴──────────────┘");
console.log();

console.log("==========================================");
console.log("   ✅ Assignment operators make code shorter.");
console.log("   ✅ x += y  means  x = x + y");
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

    log("a = " + 10 + ", b = " + 20);
    log("a += b   → " + a);
    log("=        → " + x1);
    log("+=       → " + x2);
    log("-=       → " + x3);
    log("*=       → " + x4);
    log("/=       → " + x5);
    log("%=       → " + x6);
    log("**=      → " + x7);
  });
}
