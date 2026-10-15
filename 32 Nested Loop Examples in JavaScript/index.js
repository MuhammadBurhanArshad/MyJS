// ==========================================
// 32 Nested Loop Examples in JavaScript
// Four classic patterns using nested loops
// ==========================================

console.log("==========================================");
console.log("   32 - Nested Loop Examples");
console.log("==========================================\n");

// --- Example 1: Number Triangle (1 to n) ---
console.log("Example 1 — Number Triangle (1 to n):\n");
console.log("   Pattern:");
console.log("   1");
console.log("   1 2");
console.log("   1 2 3");
console.log("   1 2 3 4");
console.log("   1 2 3 4 5\n");

console.log("   Output:");
for (var a = 1; a <= 5; a++) {
  let row = "      ";
  for (var b = 1; b <= a; b++) {
    row += b + " ";
  }
  console.log(row);
}
console.log();

// --- Example 2: Repeated Number Triangle ---
console.log("Example 2 — Repeated Number Triangle:\n");
console.log("   Pattern:");
console.log("   1");
console.log("   2 2");
console.log("   3 3 3");
console.log("   4 4 4 4");
console.log("   5 5 5 5 5\n");

console.log("   Output:");
for (var a = 1; a <= 5; a++) {
  let row = "      ";
  for (var b = 1; b <= a; b++) {
    row += a + " ";
  }
  console.log(row);
}
console.log();

// --- Example 3: Reverse Repeated Triangle ---
console.log("Example 3 — Reverse Repeated Triangle:\n");
console.log("   Pattern:");
console.log("   5 5 5 5 5");
console.log("   4 4 4 4");
console.log("   3 3 3");
console.log("   2 2");
console.log("   1\n");

console.log("   Output:");
for (var a = 5; a >= 1; a--) {
  let row = "      ";
  for (var b = 1; b <= a; b++) {
    row += a + " ";
  }
  console.log(row);
}
console.log();

// --- Example 4: Reverse Number Pyramid ---
console.log("Example 4 — Reverse Number Pyramid:\n");
console.log("   Pattern:");
console.log("   5 4 3 2 1");
console.log("   4 3 2 1");
console.log("   3 2 1");
console.log("   2 1");
console.log("   1\n");

console.log("   Output:");
for (var a = 5; a >= 1; a--) {
  let row = "      ";
  for (var b = a; b >= 1; b--) {
    row += b + " ";
  }
  console.log(row);
}
console.log();

// --- Summary Table ---
console.log("Summary of Patterns:");
console.log("   ┌─────────┬──────────┬───────────┬─────────┐");
console.log("   │ Example │ Outer    │ Inner     │ Printed │");
console.log("   ├─────────┼──────────┼───────────┼─────────┤");
console.log("   │ 1       │ 1 → 5    │ 1 → a     │ b       │");
console.log("   │ 2       │ 1 → 5    │ 1 → a     │ a       │");
console.log("   │ 3       │ 5 → 1    │ 1 → a     │ a       │");
console.log("   │ 4       │ 5 → 1    │ a → 1     │ b       │");
console.log("   └─────────┴──────────┴───────────┴─────────┘");
console.log();

// --- Key Takeaways ---
console.log("Key Takeaways:");
console.log("   - Outer loop → rows");
console.log("   - Inner loop → items per row");
console.log("   - Direction of outer loop flips the pattern");
console.log("   - Printing 'a' vs 'b' changes the shape\n");

console.log("==========================================");
console.log("   ✅ Practice patterns with nested loops!");
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

    log("Example 1 — Number Triangle:");
    for (var i = 1; i <= 5; i++) {
      let row = "";
      for (var j = 1; j <= i; j++) row += j + " ";
      log(row);
    }

    log("");
    log("Example 2 — Repeated Triangle:");
    for (var k = 1; k <= 5; k++) {
      let row = "";
      for (var l = 1; l <= k; l++) row += k + " ";
      log(row);
    }

    log("");
    log("Example 3 — Reverse Repeated Triangle:");
    for (var m = 5; m >= 1; m--) {
      let row = "";
      for (var n = 1; n <= m; n++) row += m + " ";
      log(row);
    }

    log("");
    log("Example 4 — Reverse Number Pyramid:");
    for (var x = 5; x >= 1; x--) {
      let row = "";
      for (var y = x; y >= 1; y--) row += y + " ";
      log(row);
    }
  });
}
