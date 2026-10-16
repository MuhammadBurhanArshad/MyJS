// ==========================================
// 71 JavaScript DOM Traversal Methods IV
// Siblings: nextElementSibling, previousElementSibling,
//           nextSibling, previousSibling
// ==========================================

console.log("==========================================");
console.log("   71 - DOM Traversal Methods IV");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   nextElementSibling");
console.log("   nextSibling");
console.log("   previousSibling");
console.log("   previousElementSibling\n");

// --- Method descriptions ---
console.log("1. nextElementSibling — DOM Traversal:");
console.log('   var a = document.getElementById("child-c").nextElementSibling;');
console.log("   → For targeting next tag\n");

console.log("2. previousElementSibling — DOM Traversal:");
console.log('   var a = document.getElementById("child-c").previousElementSibling;');
console.log("   → For targeting previous tag\n");

console.log("3. nextSibling — DOM Traversal:");
console.log('   var a = document.getElementById("child-c").nextSibling;');
console.log("   → For targeting next node (text, enter, ...)\n");

console.log("4. previousSibling — DOM Traversal:");
console.log('   var a = document.getElementById("child-c").previousSibling;');
console.log("   → For targeting previous node (text, enter, ...)\n");

// --- Comparison ---
console.log("Element vs Node Siblings:");
console.log("   ┌──────────────────────┬────────────────────┬────────────────────┐");
console.log("   │ Property             │ Element?           │ Node?              │");
console.log("   ├──────────────────────┼────────────────────┼────────────────────┤");
console.log("   │ next/prev Element    │ ✅ Element         │ ❌ No              │");
console.log("   │ next/prev Sibling    │ ❌ No              │ ✅ Any node        │");
console.log("   │ Includes text?       │ ❌ No              │ ✅ Yes             │");
console.log("   │ Includes comments?   │ ❌ No              │ ✅ Yes             │");
console.log("   └──────────────────────┴────────────────────┴────────────────────┘");
console.log();

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const c = document.getElementById("child-c");

    if (!output || !c) return;

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

    log("=== Siblings of #child-c ===");
    log("   nextElementSibling     → " + describe(c.nextElementSibling));
    log("   previousElementSibling → " + describe(c.previousElementSibling));
    log("   nextSibling            → " + describe(c.nextSibling));
    log("   previousSibling        → " + describe(c.previousSibling));
    console.log("nextElementSibling:", c.nextElementSibling);
    console.log("previousElementSibling:", c.previousElementSibling);
    console.log("nextSibling:", c.nextSibling);
    console.log("previousSibling:", c.previousSibling);
    log("");

    // --- Move forward through element siblings ---
    log("=== Walk Forward (Element-wise) ===");
    let node = document.getElementById("child-a");
    while (node) {
      log("   " + node.id + " → \"" + node.textContent + "\"");
      node = node.nextElementSibling;
    }
    log("");

    // --- Move backward through element siblings ---
    log("=== Walk Backward (Element-wise) ===");
    let back = document.getElementById("child-d");
    while (back) {
      log("   " + back.id + " → \"" + back.textContent + "\"");
      back = back.previousElementSibling;
    }
    log("");

    // --- Move forward through ALL nodes ---
    log("=== Walk Forward (Node-wise, includes text) ===");
    let allNode = c.nextSibling;
    let count = 0;
    while (allNode && count < 5) {
      log("   " + describe(allNode));
      allNode = allNode.nextSibling;
      count++;
    }
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test sibling traversal.\n");

  console.log("Simulated example:");
  console.log('   HTML: <div id="parent">');
  console.log('             <p id="child-a">A</p>');
  console.log('             <p id="child-b">B</p>');
  console.log('             <p id="child-c">C</p>');
  console.log('             <p id="child-d">D</p>');
  console.log("         </div>");
  console.log();
  console.log('   #child-c.nextElementSibling     → <p id="child-d">D</p>');
  console.log('   #child-c.previousElementSibling → <p id="child-b">B</p>');
  console.log("   #child-c.nextSibling            → #text (whitespace)");
  console.log("   #child-c.previousSibling        → #text (whitespace)");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Prefer *Element* variants to skip whitespace");
console.log("   - Use node variants for full inspection");
console.log("   - Always check for null at edges");
console.log("   - Use while loops to walk through siblings\n");

console.log("==========================================");
console.log("   ✅ Siblings — navigate horizontally in the DOM.");
console.log("==========================================\n");
