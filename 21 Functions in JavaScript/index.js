// ==========================================
// 21 JavaScript Functions
// A function is a reusable block of code
// Define once → Call many times
// ==========================================

console.log("==========================================");
console.log("   21 - Functions");
console.log("==========================================\n");

// --- Without functions (repetitive) ---
console.log("❌ Without Functions (repetitive):");
console.log('   document.write("Burhan");');
console.log('   document.write("Burhan");');
console.log('   document.write("Burhan");');
console.log("   → Same code written multiple times.\n");

// --- With functions (reusable) ---
console.log("✅ With Functions (reusable):");
console.log("   function myName() {");
console.log('       document.write("Burhan");');
console.log("   }");
console.log("   myName();");
console.log("   myName();");
console.log("   myName();\n");

// --- Defining a function ---
function myName() {
  console.log("   → Burhan");
}

console.log("Calling the function myName():");
myName();
myName();
myName();
console.log();

// --- Why use functions ---
console.log("Why Use Functions?");
console.log("   1. Reusability — write once, use many times");
console.log("   2. Reduces code size — no repetition");
console.log("   3. Easier maintenance");
console.log("   4. Better readability");
console.log("   5. Modularity\n");

// --- Syntax ---
console.log("Function Syntax:");
console.log("   Defining:  function functionName() {");
console.log("                  statement");
console.log("              }\n");
console.log("   Calling:   functionName();\n");

// --- Practical example ---
console.log("Practical Example:\n");

function greet() {
  console.log("      Hello from greet()!");
}

console.log("   function greet() {");
console.log('       console.log("Hello from greet()!");');
console.log("   }\n");

console.log("   greet();");
greet();
console.log("   greet();");
greet();
console.log("   greet();");
greet();
console.log();

// --- Key points ---
console.log("Key Points:");
console.log("   1. Define once with 'function'");
console.log("   2. Call many times with name + ()");
console.log("   3. Function names follow variable naming rules");
console.log("   4. Function does NOT run until called");
console.log("   5. Functions can be called before their definition (hoisting)\n");

console.log("==========================================");
console.log("   ✅ Functions = reusable blocks of code.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const btn = document.getElementById("callBtn");

    if (output) {
      const log = (msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
      };

      window.__log = log;
      log("✅ Page loaded. Click the button to call the function.");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        // call the function
        document.write("Burhan");
      });
    }
  });
}
