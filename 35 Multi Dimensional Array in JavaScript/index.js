// ==========================================
// 35 JavaScript Multi Dimensional Array
// An array inside an array
// Access with two indexes: a[row][col]
// ==========================================

console.log("==========================================");
console.log("   35 - Multi Dimensional Array");
console.log("==========================================\n");

// --- What is a Multi Dimensional Array? ---
console.log("Definition:");
console.log("   A multi dimensional array is used for");
console.log("   making an array in array.\n");

// --- Syntax / Example from notes ---
console.log("Example (from notes):\n");
console.log("   var a = [");
console.log('       ["Harray", 18, "Male", "B.Com"],');
console.log('       ["Sunny",  19, "Male", "BCA"],');
console.log('       ["Burhan", 18, "Male", "CS"]');
console.log("   ];\n");

var a = [
  ["Harray", 18, "Male", "B.Com"],
  ["Sunny",  19, "Male", "BCA"],
  ["Burhan", 18, "Male", "CS"]
];

// --- Visual layout ---
console.log("Visual Layout:\n");
console.log("            0        1      2      3");
console.log("        ┌────────┬──────┬──────┬────────┐");
a.forEach((row, i) => {
  const padded = row.map((v) => String(v).padEnd(6)).join(" │ ");
  console.log("   " + i + "    │ " + padded + "│");
});
console.log("        └────────┴──────┴──────┴────────┘");
console.log();

// --- Accessing values ---
console.log("Accessing Values (a[row][col]):\n");
console.log('   a[0][0]  → ' + a[0][0] + '   (Harray)');
console.log('   a[0][1]  → ' + a[0][1] + '   (18)');
console.log('   a[1][0]  → ' + a[1][0] + '   (Sunny)');
console.log('   a[2][3]  → ' + a[2][3] + '   (CS)');
console.log();

// --- Lengths ---
console.log("Array Length:\n");
console.log("   a.length      → " + a.length + "  (outer — number of rows)");
console.log("   a[0].length   → " + a[0].length + "  (inner — number of columns)");
console.log();

// --- Nested loop traversal ---
console.log("Traversing with Nested Loops:\n");
console.log("   for (var row = 0; row < a.length; row++) {");
console.log("       for (var col = 0; col < a[row].length; col++) {");
console.log("           document.write(a[row][col] + \" \");");
console.log("       }");
console.log("   }\n");

console.log("   Output:");
for (var row = 0; row < a.length; row++) {
  let line = "      ";
  for (var col = 0; col < a[row].length; col++) {
    line += a[row][col] + "  ";
  }
  console.log(line);
}
console.log();

// --- Students table example ---
console.log("Students Table:\n");
console.log('   students[i][0] + " | " + students[i][1] + " | " + ...\n');

console.log("   Output:");
for (var i = 0; i < a.length; i++) {
  console.log(
    "      " +
    a[i][0] + " | " +
    a[i][1] + " | " +
    a[i][2] + " | " +
    a[i][3]
  );
}
console.log();

// --- Common use cases ---
console.log("Common Use Cases:");
console.log("   - Table / grid data (rows × columns)");
console.log("   - Matrices in math");
console.log("   - Game boards (chess, tic-tac-toe)");
console.log("   - Records with multiple fields\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Keep inner arrays the same length");
console.log("   - Use meaningful variable names");
console.log("   - Traverse with nested loops");
console.log("   - Watch index bounds");
console.log("   - Prefer literal [ [ ], [ ] ] syntax\n");

console.log("==========================================");
console.log("   ✅ Multi dimensional = array inside array.");
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

    log("Students Table:");
    for (var i = 0; i < a.length; i++) {
      log(
        a[i][0] + " | " +
        a[i][1] + " | " +
        a[i][2] + " | " +
        a[i][3]
      );
    }

    log("");
    log("a.length    = " + a.length);
    log("a[0].length = " + a[0].length);
  });
}
