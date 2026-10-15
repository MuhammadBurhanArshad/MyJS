// ==========================================
// 27 JavaScript Do/While Loop
// Body runs FIRST, then condition is checked
// Guaranteed to run at least once
// ==========================================

console.log("==========================================");
console.log("   27 - Do/While Loop");
console.log("==========================================\n");

// --- Key concept ---
console.log("Key Point:");
console.log("   In a do while loop, the FIRST time the condition is NOT checked.");
console.log("   It checks the condition FROM THE 2nd time onwards.\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   var a = 1;");
console.log("   do {");
console.log('       document.write("Burhan");');
console.log("       a = a + 1;   // (a++)");
console.log("   } while (a <= 10);\n");

// --- Example from notes ---
console.log("Example from notes:\n");

var a = 1;
let count = 0;
let firstRun = true;

do {
  if (firstRun) {
    console.log("   [1st iteration] Condition NOT checked → body runs");
    firstRun = false;
  } else {
    console.log("   [Iteration " + (count + 1) + "] Checked a <= 10 → true → body runs");
  }
  count++;
  a = a + 1;
} while (a <= 10);

console.log("   Loop ended. a = " + a + " → condition false\n");

// --- Runs at least once ---
console.log("Example — Runs At Least Once:\n");
console.log("   var a = 100;");
console.log("   do {");
console.log('       document.write("This runs once");');
console.log("       a++;");
console.log("   } while (a <= 10);\n");

var b = 100;
let ranOnce = false;
do {
  ranOnce = true;
  b++;
} while (b <= 10);

console.log("   → Body ran at least once: " + ranOnce);
console.log("   → Condition (100 <= 10) was false, but body still ran.\n");

// --- Comparison ---
console.log("Comparison — while vs do/while:\n");

// while with false condition
let whileRan = false;
var x = 100;
while (x <= 10) {
  whileRan = true;
  x++;
}
console.log("   while  (a = 100, a <= 10) → Body ran? " + whileRan);

// do/while with false condition
let doRan = false;
var y = 100;
do {
  doRan = true;
  y++;
} while (y <= 10);
console.log("   do/while (a = 100, a <= 10) → Body ran? " + doRan);
console.log();

// --- Comparison table ---
console.log("Comparison Table:");
console.log("   ┌─────────────┬──────────────────┬───────────────────┐");
console.log("   │ Loop        │ Condition Check  │ Body Runs         │");
console.log("   ├─────────────┼──────────────────┼───────────────────┤");
console.log("   │ while       │ Before body      │ 0 or more times   │");
console.log("   │ do/while    │ After body       │ At least once     │");
console.log("   └─────────────┴──────────────────┴───────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Always update the loop variable");
console.log("   - Use do/while when body must run at least once");
console.log("   - Use while when body may not need to run");
console.log("   - Keep the body short and clear\n");

console.log("==========================================");
console.log("   ✅ do/while runs the body BEFORE checking.");
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

    // do/while with false condition
    var z = 100;
    do {
      log("do/while ran even though 100 <= 10 is false");
      z++;
    } while (z <= 10);

    log("Loop ended. z = " + z);
  });
}
