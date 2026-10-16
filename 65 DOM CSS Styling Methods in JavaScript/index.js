// ==========================================
// 65 JavaScript DOM CSS Styling Methods
// style, className, classList
// ==========================================

console.log("==========================================");
console.log("   65 - DOM CSS Styling Methods");
console.log("==========================================\n");

// --- List ---
console.log("DOM CSS Styling Methods:");
console.log("   - style");
console.log("   - className");
console.log("   - classList");
console.log("   (classList returns value in array)\n");

// --- Syntax examples ---
console.log("Syntax Examples:\n");
console.log('   Get style     → document.querySelector("#header").style.color');
console.log('   Get class     → document.querySelector("#header").className');
console.log('   Get classList → document.querySelector("#header").classList\n');

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    const el = document.getElementById("header");

    // --- 1. style ---
    log("=== 1. style — Inline CSS ===");
    log("   Before color: \"" + el.style.color + "\"  (empty if not set inline)");

    el.style.color = "red";
    el.style.backgroundColor = "yellow";
    el.style.padding = "15px";

    log("   After style.color = 'red'");
    log("   → el.style.color: \"" + el.style.color + "\"");
    log("   → el.style.backgroundColor: \"" + el.style.backgroundColor + "\"");
    console.log("style.color:", el.style.color);
    log("");

    // --- 2. className ---
    log("=== 2. className — Full Class String ===");
    log("   Before className: \"" + el.className + "\"");

    el.className = "new-header-class";
    log("   After className = 'new-header-class'");
    log("   → el.className: \"" + el.className + "\"");
    log("   (This REPLACED all existing classes!)");
    console.log("className:", el.className);
    log("");

    // --- 3. classList ---
    log("=== 3. classList — Array of Classes ===");

    // Reset classes first
    el.className = "header primary";

    log("   Starting classes: \"" + el.className + "\"");
    log("   el.classList.length → " + el.classList.length);
    log("");

    // add()
    el.classList.add("active");
    log("   classList.add('active') → \"" + el.className + "\"");

    // remove()
    el.classList.remove("primary");
    log("   classList.remove('primary') → \"" + el.className + "\"");

    // toggle()
    el.classList.toggle("highlight");
    log("   classList.toggle('highlight') → \"" + el.className + "\"");
    el.classList.toggle("highlight");
    log("   classList.toggle('highlight') again → \"" + el.className + "\"");

    // contains()
    log("   classList.contains('active') → " + el.classList.contains("active"));
    log("   classList.contains('xyz')    → " + el.classList.contains("xyz"));

    // replace()
    el.classList.replace("active", "inactive");
    log("   classList.replace('active', 'inactive') → \"" + el.className + "\"");
    log("");

    // Loop through classList
    log("   Current classes (looped):");
    el.classList.forEach(function (c, i) {
      log("      [" + i + "] " + c);
    });
    log("");

    // Access by index
    log("   classList[0] → \"" + el.classList[0] + "\"");
    log("   classList.item(1) → \"" + el.classList.item(1) + "\"");
    log("");

    // --- Comparison table ---
    log("=== Comparison ===");
    log("   style     → inline CSS properties");
    log("   className → full class string (replaces all)");
    log("   classList → add/remove/toggle safely");
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test CSS styling methods.\n");

  console.log("Concept summary:");
  console.log("   style     → el.style.color = 'red'");
  console.log("   className → el.className = 'new-class'  (replaces all)");
  console.log("   classList → el.classList.add('active')  (safe)");
  console.log("             → el.classList.remove('active')");
  console.log("             → el.classList.toggle('active')");
  console.log("             → el.classList.contains('active')");
  console.log("             → el.classList.replace('a', 'b')");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - classList for add/remove/toggle (safest)");
console.log("   - className replaces ALL classes");
console.log("   - style uses camelCase (fontSize, backgroundColor)");
console.log("   - Prefer CSS classes with classList over inline style\n");

console.log("==========================================");
console.log("   ✅ style, className, classList — control CSS with JS.");
console.log("==========================================\n");
