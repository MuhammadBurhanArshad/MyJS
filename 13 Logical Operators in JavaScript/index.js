// ==========================================
// 13 JavaScript Logical Operators
// &&  (AND)  ||  (OR)  !  (NOT)
// Used to combine multiple conditions in if
// ==========================================

console.log("==========================================");
console.log("   13 - Logical Operators");
console.log("==========================================\n");

// --- Flow ---
console.log("Flow:");
console.log("   If →  Condition 1");
console.log("         Condition 2 → False → Out");
console.log("            ↓");
console.log("           True");
console.log("            ↓");
console.log("         Statement\n");

// --- Types of logical operators ---
console.log("Types of Logical Operators:");
console.log("   &&   → Logical AND");
console.log("   ||   → Logical OR");
console.log("   !    → Logical NOT\n");

// --- 1. AND (&&) ---
console.log("1. AND (&&) — runs only when BOTH conditions are true:\n");

var age = 25;
var hasID = true;

console.log("   var age = 25;");
console.log("   var hasID = true;\n");
console.log("   if (age >= 18 && hasID) { ... }\n");

if (age >= 18 && hasID) {
  console.log("   → Both true → Allowed to enter\n");
}

// AND truth table
console.log("   Truth Table — AND");
console.log("   true  && true   →", true && true);
console.log("   true  && false  →", true && false);
console.log("   false && true   →", false && true);
console.log("   false && false  →", false && false);
console.log();

// --- 2. OR (||) ---
console.log("2. OR (||) — runs when EITHER condition is true:\n");

var isAdmin = false;
var isEditor = true;

console.log("   var isAdmin = false;");
console.log("   var isEditor = true;\n");
console.log("   if (isAdmin || isEditor) { ... }\n");

if (isAdmin || isEditor) {
  console.log("   → Either true → Can edit content\n");
}

// OR truth table
console.log("   Truth Table — OR");
console.log("   true  || true   →", true || true);
console.log("   true  || false  →", true || false);
console.log("   false || true   →", false || true);
console.log("   false || false  →", false || false);
console.log();

// --- 3. NOT (!) ---
console.log("3. NOT (!) — reverses the boolean value:\n");

var isLoggedIn = false;

console.log("   var isLoggedIn = false;\n");
console.log("   if (!isLoggedIn) { ... }\n");

if (!isLoggedIn) {
  console.log("   → !false = true → Please log in first\n");
}

// NOT truth table
console.log("   Truth Table — NOT");
console.log("   !true   →", !true);
console.log("   !false  →", !false);
console.log();

// --- Summary ---
console.log("Summary:");
console.log("   &&  → ALL conditions must be true");
console.log("   ||  → AT LEAST ONE condition must be true");
console.log("   !   → REVERSES the boolean value");
console.log("   Used to combine conditions inside a single if.");
console.log();

console.log("==========================================");
console.log("   ✅ Logical operators combine multiple conditions.");
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

    log("AND  (age >= 18 && hasID)  → " + (age >= 18 && hasID));
    log("OR   (isAdmin || isEditor) → " + (isAdmin || isEditor));
    log("NOT  (!isLoggedIn)         → " + !isLoggedIn);
  });
}
