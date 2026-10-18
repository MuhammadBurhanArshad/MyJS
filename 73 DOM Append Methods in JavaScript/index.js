// ==========================================
// 73 JavaScript DOM Append Methods
// appendChild(), insertBefore()
// ==========================================

console.log("==========================================");
console.log("   73 - DOM Append Methods");
console.log("==========================================\n");

// --- Target methods ---
console.log("DOM Append Methods:");
console.log("   appendChild()   → add as last child");
console.log("   insertBefore()  → add before a child\n");

// --- appendChild ---
console.log("1. appendChild():\n");
console.log("   parentElement.appendChild(newNode);\n");
console.log("   // Create and append");
console.log('   var newElement = document.createElement("h2");');
console.log('   var newText = document.createTextNode("Burhan");');
console.log("   newElement.appendChild(newText);");
console.log('   document.getElementById("test").appendChild(newElement);');
console.log("   console.log(newElement);\n");

// --- insertBefore ---
console.log("2. insertBefore():\n");
console.log("   parentElement.insertBefore(newNode, referenceNode);\n");
console.log("   var newElement = document.createElement(\"h2\");");
console.log('   var newText = document.createTextNode("This is just Text");');
console.log("   newElement.appendChild(newText);");
console.log('   var target = document.getElementById("test");');
console.log("   target.insertBefore(newElement, target.childNodes[0]);\n");

// --- Comparison ---
console.log("appendChild vs insertBefore:");
console.log("   ┌──────────────────┬────────────────────┬─────────────────────────┐");
console.log("   │ Feature          │ appendChild()      │ insertBefore()          │");
console.log("   ├──────────────────┼────────────────────┼─────────────────────────┤");
console.log("   │ Position         │ End of parent      │ Before a specific child │");
console.log("   │ Arguments        │ newNode            │ newNode, referenceNode  │");
console.log("   │ Use case         │ Add at end         │ Add at specific position│");
console.log("   └──────────────────┴────────────────────┴─────────────────────────┘");
console.log();

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const container = document.getElementById("container");
    const btnAppend = document.getElementById("btnAppend");
    const btnInsert = document.getElementById("btnInsert");
    const btnReset = document.getElementById("btnReset");

    if (!output || !container) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- 1. Append Example ---
    log("=== 1. appendChild() ===");
    var newElement = document.createElement("h2");
    var newText = document.createTextNode("Burhan");

    newElement.appendChild(newText);
    container.appendChild(newElement);

    log('   Created <h2> and appended "Burhan" to #container');
    log("   console.log(newElement) → " + newElement.outerHTML);
    console.log("appended newElement:", newElement);
    log("");

    // --- 2. InsertBefore Example ---
    log("=== 2. insertBefore() ===");
    var newElement2 = document.createElement("h2");
    var newText2 = document.createTextNode("This is just Text");

    newElement2.appendChild(newText2);

    var target = document.getElementById("container");
    target.insertBefore(newElement2, target.childNodes[0]);

    log('   Inserted <h2> with "This is just Text" before first child');
    log("   console.log(newElement2) → " + newElement2.outerHTML);
    console.log("inserted newElement2:", newElement2);
    log("");

    // --- Button handlers for interactive demo ---
    if (btnAppend) {
      btnAppend.addEventListener("click", () => {
        var item = document.createElement("li");
        item.textContent = "Appended at " + new Date().toLocaleTimeString();
        container.appendChild(item);
        log("   ➕ Appended: " + item.textContent);
      });
    }

    if (btnInsert) {
      btnInsert.addEventListener("click", () => {
        var item = document.createElement("li");
        item.textContent = "Inserted at " + new Date().toLocaleTimeString();
        container.insertBefore(item, container.firstElementChild);
        log("   ⬆️ Inserted: " + item.textContent);
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        container.innerHTML = '<p id="first">First Item</p><p id="last">Last Item</p>';
        log("   🔄 Container reset");
      });
    }
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test appendChild / insertBefore.\n");

  console.log("Concept summary:");
  console.log("   parent.appendChild(newNode);");
  console.log("   parent.insertBefore(newNode, referenceNode);");
  console.log();
  console.log("   appendChild   → adds at END of parent");
  console.log("   insertBefore  → adds BEFORE the reference child");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Create first (createElement, createTextNode)");
console.log("   - Then append (appendChild, insertBefore)");
console.log("   - Cache parent references in variables");
console.log("   - Check references exist before calling");
console.log("   - For multiple nodes, use append() (modern)\n");

console.log("==========================================");
console.log("   ✅ Append methods — build the DOM dynamically.");
console.log("==========================================\n");
