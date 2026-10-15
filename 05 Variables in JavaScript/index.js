// ==========================================
// 05 Variables in JavaScript
// Variable = container for storing values
// Types: var, let, const
// ==========================================

console.log("==========================================");
console.log("   05 - Variables in JavaScript");
console.log("==========================================\n");

// --- 1. What is a Variable? ---
console.log("1. A variable stores a value and can be used multiple times.\n");

// --- 2. Use of Variables ---
var A = "Burhan Arshad";
console.log("   Assigned: A =", A);
console.log("   document.write(A) →", A);
console.log("   document.write(A) →", A);
console.log("   document.write(A) →", A);
console.log();

// --- 3. Commas vs No Commas ---
console.log("3. ⚠️ Commas matter in document.write():");
console.log('   document.write("Z"); → prints letter Z (as a string)');
console.log("   document.write(Z);   → prints value of variable Z");
console.log();

// --- 4. Three Types of Variables ---
console.log("4. Three Types of Variables:");

var oldWay = "I am var";       // function-scoped, old
let modernWay = "I am let";    // block-scoped, reassignable
const fixedWay = "I am const"; // block-scoped, cannot reassign

console.log("   var   :", oldWay);
console.log("   let   :", modernWay);
console.log("   const :", fixedWay);
console.log();

// Reassignment demo
let counter = 1;
counter = 2; // allowed with let
console.log("   let reassigned to:", counter);

const PI = 3.14;
// PI = 3.15;  ❌ Not allowed — would throw an error
console.log("   const PI cannot be reassigned:", PI);
console.log();

// --- 5. How to Use Variables ---
console.log("5. How to use variables:");
console.log('   <script> var x = "Burhan Arshad"; </script>');
console.log("   - var            → keyword");
console.log("   - x              → variable name");
console.log('   - "Burhan Arshad" → variable value\n');

// --- 6. Variable Naming ---
console.log("6. Variable Naming:\n");

console.log("   ✅ Write Way (valid):");
const validNames = ["firstname", "first_name", "first-name", "firstName", "firstname99"];
validNames.forEach((n) => console.log("      - " + n));
console.log();

console.log("   ❌ Wrong Way (invalid):");
const invalidNames = ["first name  (space not allowed)", "99firstname  (cannot start with number)"];
invalidNames.forEach((n) => console.log("      - " + n));
console.log();

console.log("==========================================");
console.log("   ✅ Variables store values for reuse.");
console.log("   Use var / let / const to declare them.");
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

    log("A = " + A);
    log("var   : " + oldWay);
    log("let   : " + modernWay);
    log("const : " + fixedWay);
    log("let reassigned: " + counter);
  });
}
