// ==========================================
// 70 JavaScript DOM Traversal Methods III
// firstChild, firstElementChild, lastChild, lastElementChild
// ==========================================

console.log("==========================================");
console.log("   70 - DOM Traversal Methods III");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   firstChild");
console.log("   firstElementChild");
console.log("   lastChild");
console.log("   lastElementChild\n");

// --- firstChild ---
console.log("1. firstChild — DOM Traversal:");
console.log('   var a = document.getElementById("inner").firstChild;');
console.log("   → For targeting first node (text, enter, ...)\n");

// --- firstElementChild ---
console.log("2. firstElementChild — DOM Traversal:");
console.log('   var a = document.getElementById("outer").firstElementChild;');
console.log("   → For targeting first element tag\n");

// --- lastChild ---
console.log("3. lastChild — DOM Traversal:");
console.log('   var a = document.getElementById("inner").lastChild;');
console.log("   → For targeting last node (text, enter, ...)\n");

// --- lastElementChild ---
console.log("4. lastElementChild — DOM Traversal:");
console.log('   var a = document.getElementById("inner").lastElementChild;');
console.log("   → For targeting last element tag\n");

// --- Comparison table ---
console.log("firstChild vs firstElementChild:");
console.log("   ┌──────────────────────────┬───────────────┬───────────────────────┐");
console.log("   │ Feature                  │ firstChild    │ firstElementChild     │");
console.log("   ├──────────────────────────┼───────────────┼───────────────────────┤");
console.log("   │ Returns                  │ First node    │ First element         │");
console.log("   │ Includes text?           │ ✅ Yes        │ ❌ No                 │");
console.log("   │ Includes comments?       │ ✅ Yes        │ ❌ No                 │");
console.log("   │ Common surprise          │ Whitespace    │ None                  │");
console.log("   │ Best for                 │ Node detail   │ Element iteration     │");
console.log("   └──────────────────────────┴───────────────┴───────────────────────┘");
console.log();

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const inner = document.getElementById("inner");

    if (!output || !inner) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    const describe = (node) => {
      if (!node) return "null";
      const name = node.nodeName;
      const type = node.nodeType;
      const typeName = { 1: "Element", 3: "Text", 8: "Comment" }[type] || "Other";
      let content = (node.textContent || "").trim().substring(0, 20);
      if (!content) content = "(whitespace)";
      return name + " [" + typeName + "] → \"" + content + "\"";
    };

    log("=== firstChild vs firstElementChild ===");
    log("   inner.firstChild        → " + describe(inner.firstChild));
    log("   inner.firstElementChild → " + describe(inner.firstElementChild));
    console.log("firstChild:", inner.firstChild);
    console.log("firstElementChild:", inner.firstElementChild);
    log("");

    log("=== lastChild vs lastElementChild ===");
    log("   inner.lastChild         → " + describe(inner.lastChild));
    log("   inner.lastElementChild  → " + describe(inner.lastElementChild));
    console.log("lastChild:", inner.lastChild);
    console.log("lastElementChild:", inner.lastElementChild);
    log("");

    log("=== Accessing Content ===");
    if (inner.firstElementChild) {
      log("   First element text: \"" + inner.firstElementChild.textContent + "\"");
    }
    if (inner.lastElementChild) {
      log("   Last element text: \"" + inner.lastElementChild.textContent + "\"");
    }
    log("");

    log("=== Count of Children ===");
    log("   childNodes.length       → " + inner.childNodes.length);
    log("   children.length         → " + inner.children.length);
    log("   (difference = whitespace text nodes)");
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test first/last child.\n");

  console.log("Simulated example:");
  console.log('   HTML: <div id="inner">');
  console.log("             <p>One</p>");
  console.log("             <p>Two</p>");
  console.log("             <p>Three</p>");
  console.log("         </div>");
  console.log();
  console.log("   firstChild        → #text (whitespace)");
  console.log("   firstElementChild → <p>One</p>");
  console.log("   lastChild         → #text (whitespace)");
  console.log("   lastElementChild  → <p>Three</p>");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Prefer *Element* variants to skip whitespace");
console.log("   - firstChild/lastChild include text and comments");
console.log("   - Always check for null before using");
console.log("   - Cache results in variables\n");

console.log("==========================================");
console.log("   ✅ firstChild vs firstElementChild — know the difference.");
console.log("==========================================\n");
