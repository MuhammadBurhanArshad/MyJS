// ==========================================
// 68 JavaScript DOM Traversal Methods
// parentNode, parentElement, children, siblings, etc.
// ==========================================

console.log("==========================================");
console.log("   68 - DOM Traversal Methods");
console.log("==========================================\n");

// --- List of traversal methods ---
console.log("DOM Traversal Methods:");
[
  "parentNode",
  "parentElement",
  "children",
  "childNodes",
  "firstChild",
  "firstElementChild",
  "lastChild",
  "lastElementChild",
  "nextElementSibling",
  "nextSibling",
  "previousElementSibling",
  "previousSibling"
].forEach((m) => console.log("   - " + m));
console.log();

// --- Visual tree ---
console.log("DOM Traversal — Visual:");
console.log("   Parent Element →   [ A ]");
console.log("                     /  |  |  \\  \\");
console.log("                   [B] [C] [D] [E] [F]");
console.log("                    ↑    ↑       ↑    ↑");
console.log("               firstChild prev  next lastChild");
console.log("                         sibling sibling");
console.log();

// --- parentNode ---
console.log("1. parentNode:");
console.log('   var a = document.getElementById("main").parentNode;');
console.log("   console.log(a);");
console.log("   → Returns something (not null)\n");

// --- parentElement ---
console.log("2. parentElement:");
console.log('   var a = document.getElementById("main").parentElement;');
console.log("   console.log(a);");
console.log("   → Returns null if not found something\n");

// --- Comparison: parentNode vs parentElement ---
console.log("parentNode vs parentElement:");
console.log("   ┌─────────────────────┬──────────────────┬──────────────────┐");
console.log("   │ Feature             │ parentNode       │ parentElement    │");
console.log("   ├─────────────────────┼──────────────────┼──────────────────┤");
console.log("   │ Returns             │ Any node         │ Only element     │");
console.log("   │ For document node   │ null             │ null             │");
console.log("   └─────────────────────┴──────────────────┴──────────────────┘");
console.log();

// --- Comparison: children vs childNodes ---
console.log("children vs childNodes:");
console.log("   children   → only ELEMENT children");
console.log("   childNodes → ALL nodes (text, comments, elements)\n");

// --- Comparison: element vs node ---
console.log("Element vs Node (firstChild / firstElementChild):");
console.log("   firstChild        → first node (may be text)");
console.log("   firstElementChild → first element child");
console.log("   lastChild         → last node (may be text)");
console.log("   lastElementChild  → last element child\n");

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const parent = document.getElementById("parent");
    const middle = document.getElementById("second");

    if (!output || !parent || !middle) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    const nameOf = (el) => (el ? (el.tagName || el.nodeName) + (el.id ? "#" + el.id : "") : "null");

    log("=== parentNode / parentElement ===");
    log("   second.parentNode    → " + nameOf(middle.parentNode));
    log("   second.parentElement → " + nameOf(middle.parentElement));
    console.log("parentNode:", middle.parentNode);
    console.log("parentElement:", middle.parentElement);
    log("");

    log("=== children vs childNodes ===");
    log("   parent.children.length   → " + parent.children.length);
    log("   parent.childNodes.length → " + parent.childNodes.length);
    log("   (childNodes includes text nodes/whitespace)");
    console.log("children:", parent.children);
    console.log("childNodes:", parent.childNodes);
    log("");

    log("=== firstChild vs firstElementChild ===");
    log("   firstChild        → " + nameOf(parent.firstChild));
    log("   firstElementChild → " + nameOf(parent.firstElementChild));
    log("");

    log("=== lastChild vs lastElementChild ===");
    log("   lastChild        → " + nameOf(parent.lastChild));
    log("   lastElementChild → " + nameOf(parent.lastElementChild));
    log("");

    log("=== Siblings of #second ===");
    log("   nextSibling            → " + nameOf(middle.nextSibling));
    log("   nextElementSibling     → " + nameOf(middle.nextElementSibling));
    log("   previousSibling        → " + nameOf(middle.previousSibling));
    log("   previousElementSibling → " + nameOf(middle.previousElementSibling));
    log("");

    log("=== Loop through children ===");
    for (let i = 0; i < parent.children.length; i++) {
      log("   [" + i + "] " + parent.children[i].id + " → " + parent.children[i].textContent);
    }
    log("");

    log("=== Walk up to <body> ===");
    let cur = middle;
    while (cur && cur.tagName !== "BODY") {
      cur = cur.parentElement;
    }
    log("   Reached: " + (cur ? cur.tagName : "not found"));
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test traversal.\n");

  console.log("Concept summary:");
  console.log("   parentNode, parentElement");
  console.log("   children, childNodes");
  console.log("   firstChild, firstElementChild");
  console.log("   lastChild, lastElementChild");
  console.log("   nextSibling, nextElementSibling");
  console.log("   previousSibling, previousElementSibling");
  console.log();
}

console.log("==========================================");
console.log("   ✅ Traversal — walk up, down, and sideways.");
console.log("==========================================\n");
