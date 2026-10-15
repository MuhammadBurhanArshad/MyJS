// ==========================================
// 06 JavaScript Variables (let & const)
// Rules of redeclaration & reassignment
// ==========================================

console.log("==========================================");
console.log("   06 - Variables (let & const)");
console.log("==========================================\n");

// --- 1. var: redeclare + reassign ---
console.log("1. var  → can redeclare ✅ and reassign ✅");
var x1 = "Hello";
console.log("   var x = \"Hello\"   ✅");
var x1 = "World";
console.log("   var x = \"World\"   ✅ (redeclared)");
x1 = "Wow";
console.log("   x = \"Wow\"         ✅ (reassigned) →", x1);
console.log();

// --- 2. let: cannot redeclare, can reassign ---
console.log("2. let  → cannot redeclare ❌, can reassign ✅");
let y1 = "Hello";
console.log("   let x = \"Hello\"   ✅");
// let y1 = "World";  ❌ SyntaxError: Identifier 'y1' has already been declared
console.log("   let x = \"World\"   ❌ (redeclaration not allowed)");
y1 = "Wow";
console.log("   x = \"Wow\"         ✅ (reassigned) →", y1);
console.log();

// --- 3. const: cannot redeclare, cannot reassign ---
console.log("3. const → cannot redeclare ❌, cannot reassign ❌");
const z1 = "Hello";
console.log("   const x = \"Hello\" ✅");
// const z1 = "World";  ❌ SyntaxError
console.log("   const x = \"World\" ❌ (redeclaration not allowed)");
try {
  z1 = "Wow"; // ❌ TypeError
} catch (e) {
  console.log("   x = \"Wow\"         ❌ (reassignment) →", e.constructor.name + ":", e.message);
}
console.log();

// --- 4. Declaration examples from notes ---
console.log("4. Declaration syntax:");
console.log('   var   a = "Burhan";');
console.log('   let   a = "Burhan";');
console.log('   const a = "Burhan";');
console.log();

// --- 5. Summary Table ---
console.log("5. Summary:");
console.log("   ┌─────────┬───────────────┬──────────────┐");
console.log("   │ Keyword │ Re-Declare?   │ Re-Assign?   │");
console.log("   ├─────────┼───────────────┼──────────────┤");
console.log("   │ var     │ ✅ Yes        │ ✅ Yes       │");
console.log("   │ let     │ ❌ No         │ ✅ Yes       │");
console.log("   │ const   │ ❌ No         │ ❌ No        │");
console.log("   └─────────┴───────────────┴──────────────┘");
console.log();

console.log("==========================================");
console.log("   ✅ Prefer const, then let. Avoid var.");
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

    log("var x1   → " + x1);
    log("let y1   → " + y1);
    log("const z1 → " + z1);
  });
}
