// ==========================================
// 10 JavaScript Google Chrome Console
// Demonstrates console methods:
// log, table, error, warn, clear, time, timeEnd
// ==========================================

console.log("==========================================");
console.log("   10 - Google Chrome Console");
console.log("==========================================\n");

// --- How to open the console ---
console.log("How to open Chrome Console:");
console.log("   1. Right-click on browser page");
console.log("   2. Click Inspect");
console.log("   3. Select 2nd tab (Console)\n");

// --- Purpose of the console ---
console.log("Purpose:");
console.log("   - Development purpose");
console.log("   - Showing JavaScript errors\n");

// --- 1. console.log() ---
console.log("1. console.log() - print a value:");
var x = 50;
console.log("   var x = 50;");
console.log("   console.log(x);  →  ", x);
console.log();

// --- 2. console.table() ---
console.log("2. console.table() - show data as a table:");
console.table([1, 2, 3]);
console.log();

// --- 3. console.error() ---
console.log("3. console.error() - show an error:");
console.error("   Something Wrong");
console.log();

// --- 4. console.warn() ---
console.log("4. console.warn() - show a warning:");
console.warn("   Warning");
console.log();

// --- 5. console.clear() ---
console.log("5. console.clear() - clears the console");
console.log("   (Not run here to keep output visible)");
console.log();

// --- 6. console.time() / console.timeEnd() ---
console.log("6. console.time() / console.timeEnd() - measure time:");
console.time("Test");
console.warn("   Warning");
console.warn("   Warning");
console.timeEnd("Test");
console.log();

// --- Summary ---
console.log("Summary of Console Methods:");
console.log("   console.log()       → Print a message");
console.log("   console.table()     → Display data as a table");
console.log("   console.error()     → Show an error");
console.log("   console.warn()      → Show a warning");
console.log("   console.clear()     → Clear the console");
console.log("   console.time()      → Start a timer");
console.log("   console.timeEnd()   → Stop the timer");
console.log();

console.log("==========================================");
console.log("   ✅ The Console can run ALL JavaScript commands.");
console.log("   ✅ It is for development and showing errors.");
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

    log("✅ Open the Chrome Console (F12) to see the output.");
    log("console.log(x)  →  " + x);
    log("console.table([1,2,3]) — shown in console.");
    log("console.error('Something Wrong') — shown in console.");
    log("console.warn('Warning') — shown in console.");
  });
}
