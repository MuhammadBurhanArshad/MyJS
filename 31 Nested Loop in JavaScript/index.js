// ==========================================
// 31 JavaScript Nested Loop
// A loop inside another loop is a NESTED LOOP
// ==========================================

console.log("==========================================");
console.log("   31 - Nested Loop");
console.log("==========================================\n");

// --- What is a nested loop? ---
console.log("Definition:");
console.log("   When we use a loop inside a loop,");
console.log("   it is called a nested loop (or multiloop).\n");

// --- Syntax ---
console.log("Nested Loop Syntax:\n");
console.log("   for (var a = 1; a <= 10; a++) {");
console.log("       for (var b = 1; b <= 10; b++) {");
console.log("           statement");
console.log("       }");
console.log("   }\n");

// --- Simple example: 3 × 3 grid ---
console.log("Example 1 — 3 × 3 Grid:\n");
console.log("   for (var a = 1; a <= 3; a++) {");
console.log("       for (var b = 1; b <= 3; b++) {");
console.log('           document.write(a + "" + b + " ");');
console.log("       }");
console.log("   }\n");

console.log("   Output:");
for (var a = 1; a <= 3; a++) {
  let row = "      ";
  for (var b = 1; b <= 3; b++) {
    row += a + "" + b + " ";
  }
  console.log(row);
}
console.log();

// --- Multiplication table ---
console.log("Example 2 — Multiplication Table (1 to 5):\n");
console.log("   for (var a = 1; a <= 5; a++) {");
console.log("       for (var b = 1; b <= 5; b++) {");
console.log('           document.write(a + " × " + b + " = " + (a * b));');
console.log("       }");
console.log("   }\n");

console.log("   Output (first 2 rows shown):");
for (var i = 1; i <= 2; i++) {
  for (var j = 1; j <= 5; j++) {
    console.log("      " + i + " × " + j + " = " + (i * j));
  }
  console.log();
}
console.log("   ... continues to 5 × 5\n");

// --- Star triangle ---
console.log("Example 3 — Star Triangle:\n");
console.log("   for (var a = 1; a <= 5; a++) {");
console.log("       for (var b = 1; b <= a; b++) {");
console.log('           document.write("*");');
console.log("       }");
console.log("   }\n");

console.log("   Output:");
for (var k = 1; k <= 5; k++) {
  let stars = "      ";
  for (var l = 1; l <= k; l++) {
    stars += "*";
  }
  console.log(stars);
}
console.log();

// --- Total iterations ---
console.log("Total Iterations = outer × inner\n");
console.log("   ┌───────┬───────┬────────────┐");
console.log("   │ Outer │ Inner │ Total      │");
console.log("   ├───────┼───────┼────────────┤");
console.log("   │ 10    │ 10    │ 100        │");
console.log("   │ 5     │ 5     │ 25         │");
console.log("   │ 3     │ 4     │ 12         │");
console.log("   │ 100   │ 100   │ 10,000     │");
console.log("   └───────┴───────┴────────────┘");
console.log();

// --- Common use cases ---
console.log("Common Use Cases:");
console.log("   - Multiplication tables");
console.log("   - 2D arrays / matrices");
console.log("   - Star / number patterns");
console.log("   - HTML table grids");
console.log("   - Pair combinations\n");

// --- Warning ---
console.log("⚠️  Warning:");
console.log("   Nested loops MULTIPLY the total iterations.");
console.log("   Outer 100 × Inner 100 = 10,000 iterations.");
console.log("   Keep loops small for performance.\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Limit the size of nested loops");
console.log("   - Use meaningful variable names");
console.log("   - Break inner loops early if needed");
console.log("   - Indent code clearly to show nesting\n");

console.log("==========================================");
console.log("   ✅ Nested = loop inside loop (multiloop).");
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

    log("Star Triangle:");
    for (var m = 1; m <= 5; m++) {
      let stars = "";
      for (var n = 1; n <= m; n++) {
        stars += "*";
      }
      log(stars);
    }

    log("");
    log("Number Grid (3 × 3):");
    for (var x = 1; x <= 3; x++) {
      let row = "";
      for (var y = 1; y <= 3; y++) {
        row += x + "" + y + " ";
      }
      log(row);
    }
  });
}
