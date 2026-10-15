// ==========================================
// 24 JavaScript Global and Local Variables
// Global  = declared outside a function
// Local   = declared inside a function
// ==========================================

console.log("==========================================");
console.log("   24 - Global and Local Variables");
console.log("==========================================\n");

// --- Global Variable ---
var a = 10;   // Declared outside → GLOBAL

console.log("Global Variable:");
console.log("   var a = 10;  (declared outside function)\n");

// --- Function with a Local Variable ---
function myFunction() {
  var b = 25;   // Declared inside → LOCAL
  console.log("   Inside function:");
  console.log("      b (local) = " + b);
  console.log("      a (global) = " + a);
}

myFunction();
console.log();

// --- Accessing global outside function ---
console.log("Outside function:");
console.log("   a (global) = " + a);
console.log();

// --- Trying to access local outside (would throw error) ---
console.log("Trying to access local variable outside function:");
try {
  console.log(b);   // ReferenceError: b is not defined
} catch (e) {
  console.log("   ❌ " + e.constructor.name + ": " + e.message);
}
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────┬──────────────────┬──────────────────────┐");
console.log("   │ Type     │ Declared         │ Accessible           │");
console.log("   ├──────────┼──────────────────┼──────────────────────┤");
console.log("   │ Global   │ Outside function │ Inside AND outside   │");
console.log("   │ Local    │ Inside function  │ Only inside          │");
console.log("   └──────────┴──────────────────┴──────────────────────┘");
console.log();

// --- Local shadows global ---
console.log("Local Shadows Global:\n");
var x = 10;
console.log("   Global x = " + x);

function test() {
  var x = 20;   // local shadows global
  console.log("   Inside function, local x = " + x);
}

test();
console.log("   After function, global x = " + x + "\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Minimize global variables");
console.log("   - Prefer local variables inside functions");
console.log("   - Use let / const instead of var");
console.log("   - Use descriptive names to avoid conflicts");
console.log("   - Pass globals as parameters when possible\n");

console.log("==========================================");
console.log("   ✅ Global works inside AND outside.");
console.log("   ✅ Local works ONLY inside its function.");
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

    log("Global a = " + a);
    log("Inside function → local b = 25");
    log("Trying to access b outside → ReferenceError");
    log("Local x (inside) = 20, Global x (outside) = 10");
  });
}
