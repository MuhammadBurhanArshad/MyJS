// ==========================================
// 29 JavaScript Break and Continue Statement
// break    → exits the loop completely
// continue → skips the current iteration
// ==========================================

console.log("==========================================");
console.log("   29 - Break and Continue");
console.log("==========================================\n");

// --- Key difference ---
console.log("Key Difference:");
console.log("   break    → breaks / exits the loop");
console.log("   continue → continues loop (skips current iteration)\n");

// --- 1. Break example ---
console.log("1. Break Example:\n");
console.log("   for (var a = 1; a <= 10; a++) {");
console.log("       if (a === 3) {");
console.log("           break;");
console.log("       }");
console.log('       document.write("Hello " + a);');
console.log("   }\n");

console.log("   Output:");
for (var a = 1; a <= 10; a++) {
  if (a === 3) {
    console.log("   → break at a = 3 (loop exits)");
    break;
  }
  console.log("      Hello " + a);
}
console.log();

// --- 2. Continue example ---
console.log("2. Continue Example:\n");
console.log("   for (var a = 1; a <= 5; a++) {");
console.log("       if (a === 3) {");
console.log("           continue;");
console.log("       }");
console.log('       document.write("Hello " + a);');
console.log("   }\n");

console.log("   Output:");
for (var b = 1; b <= 5; b++) {
  if (b === 3) {
    console.log("   → continue at b = 3 (iteration skipped)");
    continue;
  }
  console.log("      Hello " + b);
}
console.log();

// --- 3. Break in while ---
console.log("3. Break in while Loop:\n");
console.log("   var a = 1;");
console.log("   while (a <= 10) {");
console.log("       if (a === 5) break;");
console.log('       document.write(a + " ");');
console.log("       a++;");
console.log("   }\n");

let brkOut = "   Output: ";
var c = 1;
while (c <= 10) {
  if (c === 5) break;
  brkOut += c + " ";
  c++;
}
console.log(brkOut + "\n");

// --- 4. Continue in while ---
console.log("4. Continue in while Loop:\n");
console.log("   var a = 0;");
console.log("   while (a < 5) {");
console.log("       a++;");
console.log("       if (a === 3) continue;");
console.log('       document.write(a + " ");');
console.log("   }\n");

let contOut = "   Output: ";
var d = 0;
while (d < 5) {
  d++;
  if (d === 3) continue;
  contOut += d + " ";
}
console.log(contOut + "\n");

// --- Comparison ---
console.log("Visual Comparison:\n");
console.log("   Break:");
console.log("      Iteration 1 → run");
console.log("      Iteration 2 → run");
console.log("      Iteration 3 → ❌ BREAK (loop stops)\n");
console.log("   Continue:");
console.log("      Iteration 1 → run");
console.log("      Iteration 2 → run");
console.log("      Iteration 3 → ⏭️ SKIP");
console.log("      Iteration 4 → run");
console.log("      Iteration 5 → run\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use break to exit early");
console.log("   - Use continue to skip unwanted iterations");
console.log("   - Update the loop variable before continue in while");
console.log("   - Prefer clear conditions over break / continue when possible\n");

console.log("==========================================");
console.log("   ✅ break exits, continue skips.");
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

    log("Break demo (1 to 10, break at 3):");
    for (var i = 1; i <= 10; i++) {
      if (i === 3) {
        log("   → break at " + i);
        break;
      }
      log("   Hello " + i);
    }

    log("");
    log("Continue demo (1 to 5, skip 3):");
    for (var j = 1; j <= 5; j++) {
      if (j === 3) {
        log("   → continue at " + j);
        continue;
      }
      log("   Hello " + j);
    }
  });
}
