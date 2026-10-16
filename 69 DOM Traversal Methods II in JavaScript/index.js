// ==========================================
// 69 JavaScript DOM Traversal Methods II
// children vs childNodes — going down the tree
// ==========================================

console.log("==========================================");
console.log("   69 - DOM Traversal Methods II");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   children   → only element children");
console.log("   childNodes → every node (text, comments, elements)\n");

// --- children ---
console.log("1. children — DOM Traversal:");
console.log('   var a = document.getElementById("inner").children;');
console.log("   → For targeting children elements");
console.log("   → For specific children we can use indexing\n");

// --- childNodes ---
console.log("2. childNodes — DOM Traversal:");
console.log('   var a = document.getElementById("inner").childNodes;');
console.log("   → For returning every node like text");
console.log("   → It returns every node (text, comment, everything)");
console.log("   → We can also use indexing\n");

// --- Comparison table ---
console.log("children vs childNodes:");
console.log("   ┌──────────────────┬───────────────────┬──────────────────┐");
console.log("   │ Feature          │ children          │ childNodes       │");
console.log("   ├──────────────────┼───────────────────┼──────────────────┤");
console.log("   │ Returns          │ HTMLCollection    │ NodeList         │");
console.log("   │ Includes         │ Only elements     │ All nodes        │");
console.log("   │ Whitespace?      │ ❌ No             │ ✅ Yes           │");
console.log("   │ Comments?        │ ❌ No             │ ✅ Yes           │");
console.log("   │ Best for         │ Element iteration │ Full inspection  │");
console.log("   └──────────────────┴───────────────────┴──────────────────┘");
console.log();

// --- Node types ---
console.log("Node Types:");
console.log("   1 → Element");
console.log("   2 → Attribute");
console.log("   3 → Text");
console.log("   8 → Comment");
console.log("   9 → Document\n");

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

    // --- children ---
    log("=== children — Only Elements ===");
    log("   inner.children.length → " + inner.children.length);
    for (let i = 0; i < inner.children.length; i++) {
      log("   [" + i + "] " + inner.children[i].tagName + " → \"" + inner.children[i].textContent + "\"");
    }
    console.log("children:", inner.children);
    log("");

    // --- childNodes ---
    log("=== childNodes — Every Node ===");
    log("   inner.childNodes.length → " + inner.childNodes.length);
    for (let i = 0; i < inner.childNodes.length; i++) {
      const node = inner.childNodes[i];
      const type = node.nodeType;
      const typeName = { 1: "Element", 3: "Text", 8: "Comment" }[type] || "Other";
      const preview = (node.nodeName + " | " + typeName).padEnd(25);
      log("   [" + i + "] " + preview + " → \"" + (node.textContent || "").substring(0, 25).replace(/\n/g, "\\n") + "\"");
    }
    console.log("childNodes:", inner.childNodes);
    log("");

    // --- Filter elements only ---
    log("=== Filter: Elements Only (nodeType === 1) ===");
    for (let i = 0; i < inner.childNodes.length; i++) {
      if (inner.childNodes[i].nodeType === 1) {
        log("   Element [" + i + "] → " + inner.childNodes[i].tagName);
      }
    }
    log("");

    // --- Direct child access ---
    log("=== Direct Child Access by Index ===");
    log("   children[0] → " + inner.children[0].textContent);
    log("   children[1] → " + inner.children[1].textContent);
    log("   children[2] → " + inner.children[2].textContent);
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test children / childNodes.\n");

  console.log("Simulated comparison:");
  console.log('   HTML: <div id="inner">');
  console.log("             <p>One</p>");
  console.log("             <p>Two</p>");
  console.log("             <p>Three</p>");
  console.log("         </div>");
  console.log();
  console.log("   children   → [<p>One</p>, <p>Two</p>, <p>Three</p>]  length = 3");
  console.log("   childNodes → [text, <p>One</p>, text, <p>Two</p>, text, <p>Three</p>, text]  length = 7");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - children → only elements");
console.log("   - childNodes → every node");
console.log("   - Filter by nodeType === 1 to skip text/comments");
console.log("   - Use indexing for specific children");
console.log("   - Cache the collection in a variable\n");

console.log("==========================================");
console.log("   ✅ children vs childNodes — know the difference.");
console.log("==========================================\n");
