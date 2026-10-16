// ==========================================
// 67 JavaScript DOM classList Methods
// add, remove, toggle, contains, item, length
// ==========================================

console.log("==========================================");
console.log("   67 - DOM classList Methods");
console.log("==========================================\n");

// --- List of methods ---
console.log("JavaScript classList Methods:");
console.log("   add(class1, class2, ...)     → add classes");
console.log("   remove(class1, class2, ...)  → remove classes");
console.log("   toggle(class)                → toggle class");
console.log("   contains(class)              → true / false");
console.log("   item(index)                  → class at index");
console.log("   length                       → number of classes\n");

// --- Example code ---
console.log("Example Code:\n");
console.log('   var el = document.getElementById("header");');
console.log('   el.classList.add("active");           // add');
console.log('   el.classList.remove("primary");       // remove');
console.log('   el.classList.toggle("highlight");     // toggle');
console.log('   el.classList.contains("active");      // true / false');
console.log('   el.classList.item(0);                 // first class');
console.log('   el.classList.length;                  // count\n');

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const el = document.getElementById("header");

    if (!output || !el) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    const currentClasses = () => Array.from(el.classList).join(" ") || "(none)";

    log("=== Initial State ===");
    log("   classList: " + currentClasses());
    log("   length: " + el.classList.length);
    log("");

    // --- add ---
    log("=== add() ===");
    el.classList.add("active");
    log("   add('active') → " + currentClasses());
    el.classList.add("bold", "large");
    log("   add('bold', 'large') → " + currentClasses());
    log("");

    // --- remove ---
    log("=== remove() ===");
    el.classList.remove("bold");
    log("   remove('bold') → " + currentClasses());
    el.classList.remove("large", "active");
    log("   remove('large', 'active') → " + currentClasses());
    log("");

    // --- toggle ---
    log("=== toggle() ===");
    el.classList.toggle("highlight");
    log("   toggle('highlight') → " + currentClasses());
    el.classList.toggle("highlight");
    log("   toggle('highlight') again → " + currentClasses());
    log("");

    // --- contains ---
    log("=== contains() ===");
    el.classList.add("demo");
    log("   contains('demo')    → " + el.classList.contains("demo"));
    log("   contains('missing') → " + el.classList.contains("missing"));
    log("");

    // --- item(index) ---
    log("=== item(index) ===");
    log("   item(0) → " + el.classList.item(0));
    log("   item(1) → " + el.classList.item(1));
    log("   item(9) → " + el.classList.item(9) + "  (out of range)");
    log("");

    // --- length ---
    log("=== length ===");
    log("   classList.length → " + el.classList.length);
    log("");

    // --- toggle with event listener ---
    log("=== Toggle with Event Listener ===");
    log("   Click the header div to toggle 'open'");

    el.addEventListener("click", function () {
      el.classList.toggle("open");
      log("   🖱️ Clicked → classList: " + currentClasses());
      console.log("toggle fired. Current:", currentClasses());
    });

    log("");
    log("=== Final State ===");
    log("   " + currentClasses());
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test classList methods.\n");

  console.log("Concept summary:");
  console.log("   el.classList.add('x')       → add");
  console.log("   el.classList.remove('x')    → remove");
  console.log("   el.classList.toggle('x')    → add/remove");
  console.log("   el.classList.contains('x')  → true/false");
  console.log("   el.classList.item(0)        → first class");
  console.log("   el.classList.length         → count");
  console.log();
}

// --- Comparison table ---
console.log("classList vs className:");
console.log("   ┌──────────────────┬──────────────────┬──────────────────┐");
console.log("   │ Feature          │ className        │ classList        │");
console.log("   ├──────────────────┼──────────────────┼──────────────────┤");
console.log("   │ Type             │ String           │ DOMTokenList     │");
console.log("   │ Add class        │ Overwrites all   │ add()            │");
console.log("   │ Remove class     │ String replace   │ remove()         │");
console.log("   │ Toggle           │ Manual logic     │ toggle()         │");
console.log("   │ Check exists     │ indexOf !== -1   │ contains()       │");
console.log("   │ Safe?            │ ⚠️ Risk          │ ✅ Safe          │");
console.log("   └──────────────────┴──────────────────┴──────────────────┘");
console.log();

console.log("==========================================");
console.log("   ✅ classList — safe, modern class control.");
console.log("==========================================\n");
