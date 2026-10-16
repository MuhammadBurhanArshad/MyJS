// ==========================================
// 59 JavaScript Math Methods
// Math object provides mathematical operations
// ==========================================

console.log("==========================================");
console.log("   59 - Math Methods");
console.log("==========================================\n");

// --- List ---
console.log("List of Math Methods:");
["Math.ceil(x)", "Math.floor(x)", "Math.round(x)", "Math.trunc(x)",
 "Math.max(...)", "Math.min(...)", "Math.sqrt(x)", "Math.cbrt(x)",
 "Math.pow(x,y)", "Math.random()", "Math.abs(x)", "Math.PI"]
  .forEach((m) => console.log("   - " + m));
console.log();

// --- 1. Math.ceil() ---
console.log("1. Math.ceil() — Round UP:\n");
console.log("   Math.ceil(2.25)   → " + Math.ceil(2.25));
console.log("   Math.ceil(2.01)   → " + Math.ceil(2.01));
console.log("   Math.ceil(-2.25)  → " + Math.ceil(-2.25) + "  (inverse with -)\n");

// --- 2. Math.floor() ---
console.log("2. Math.floor() — Round DOWN:\n");
console.log("   Math.floor(2.35)  → " + Math.floor(2.35));
console.log("   Math.floor(2.99)  → " + Math.floor(2.99));
console.log("   Math.floor(-2.25) → " + Math.floor(-2.25) + "  (inverse with -)\n");

// --- 3. Math.round() ---
console.log("3. Math.round() — Round to Nearest:\n");
console.log("   Math.round(2.4)   → " + Math.round(2.4));
console.log("   Math.round(2.5)   → " + Math.round(2.5));
console.log("   Math.round(2.6)   → " + Math.round(2.6) + "\n");

// --- 4. Math.trunc() ---
console.log("4. Math.trunc() — Remove Decimals:\n");
console.log("   Math.trunc(2.4)   → " + Math.trunc(2.4));
console.log("   Math.trunc(2.9)   → " + Math.trunc(2.9));
console.log("   Math.trunc(-2.9)  → " + Math.trunc(-2.9) + "\n");

// --- 5. Math.max() ---
console.log("5. Math.max() — Maximum Value:\n");
var nums1 = [8, 10, 2, 50, 25];
console.log("   Math.max(" + nums1.join(", ") + ") → " + Math.max(...nums1) + "\n");

// --- 6. Math.min() ---
console.log("6. Math.min() — Minimum Value:\n");
var nums2 = [20, 10, 8, 50, 25];
console.log("   Math.min(" + nums2.join(", ") + ") → " + Math.min(...nums2) + "\n");

// --- 7. Math.sqrt() ---
console.log("7. Math.sqrt() — Square Root:\n");
console.log("   Math.sqrt(64)  → " + Math.sqrt(64));
console.log("   Math.sqrt(144) → " + Math.sqrt(144) + "\n");

// --- 8. Math.cbrt() ---
console.log("8. Math.cbrt() — Cube Root:\n");
console.log("   Math.cbrt(125) → " + Math.cbrt(125));
console.log("   Math.cbrt(27)  → " + Math.cbrt(27) + "\n");

// --- 9. Math.pow() ---
console.log("9. Math.pow() — Power:\n");
console.log("   Math.pow(4, 3) → " + Math.pow(4, 3) + "  (4³ = 64)");
console.log("   Math.pow(2, 10) → " + Math.pow(2, 10) + "\n");

// --- 10. Math.random() ---
console.log("10. Math.random() — Random:\n");
console.log("   Math.random()                   → " + Math.random());
console.log("   Math.floor(Math.random() * 10)  → " + Math.floor(Math.random() * 10) + "  (0-9)");
console.log("   Math.floor(Math.random() * 6)+1 → " + (Math.floor(Math.random() * 6) + 1) + "  (dice 1-6)");
console.log();

// --- 11. Math.abs() ---
console.log("11. Math.abs() — Absolute Value:\n");
console.log("   Math.abs(-5.25) → " + Math.abs(-5.25));
console.log("   Math.abs(5.25)  → " + Math.abs(5.25));
console.log("   Math.abs(-100)  → " + Math.abs(-100) + "\n");

// --- 12. Math.PI ---
console.log("12. Math.PI — Constant:\n");
console.log("   Math.PI → " + Math.PI);
var radius = 5;
var area = Math.PI * radius * radius;
console.log("   Circle area (r=5) → " + area.toFixed(2) + "\n");

// --- Comparison of rounding ---
console.log("Rounding Comparison:\n");
console.log("   ┌───────┬────────┬─────────┬─────────┬─────────┐");
console.log("   │ Input │ ceil() │ floor() │ round() │ trunc() │");
console.log("   ├───────┼────────┼─────────┼─────────┼─────────┤");
[2.1, 2.5, 2.9, -2.1, -2.5, -2.9].forEach((n) => {
  const c = Math.ceil(n).toString().padEnd(6);
  const f = Math.floor(n).toString().padEnd(7);
  const r = Math.round(n).toString().padEnd(7);
  const t = Math.trunc(n).toString().padEnd(7);
  console.log("   │ " + n.toString().padEnd(5) + " │ " + c + " │ " + f + " │ " + r + " │ " + t + " │");
});
console.log("   └───────┴────────┴─────────┴─────────┴─────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Math.method() — call on Math, not on number");
console.log("   - Math.floor(Math.random() * n) → integer 0 to n-1");
console.log("   - Add +1 for range 1 to n");
console.log("   - Math.PI is a constant (no parentheses)");
console.log("   - ceil/floor work 'inversely' with negatives\n");

console.log("==========================================");
console.log("   ✅ Math — rounding, roots, powers, random.");
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

    log("Math.ceil(2.25)     → " + Math.ceil(2.25));
    log("Math.floor(2.35)    → " + Math.floor(2.35));
    log("Math.round(2.5)     → " + Math.round(2.5));
    log("Math.trunc(2.9)     → " + Math.trunc(2.9));
    log("Math.max(8,10,2,50,25) → " + Math.max(8, 10, 2, 50, 25));
    log("Math.min(20,10,8,50,25) → " + Math.min(20, 10, 8, 50, 25));
    log("Math.sqrt(64)       → " + Math.sqrt(64));
    log("Math.cbrt(125)      → " + Math.cbrt(125));
    log("Math.pow(4,3)       → " + Math.pow(4, 3));
    log("Math.abs(-5.25)     → " + Math.abs(-5.25));
    log("Math.PI             → " + Math.PI);
  });
}
