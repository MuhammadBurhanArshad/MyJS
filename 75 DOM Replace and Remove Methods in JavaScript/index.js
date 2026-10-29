// ==========================================
// 75 JavaScript DOM Replace and Remove Methods
// replaceChild(), removeChild()
// (with modern alternatives replaceWith(), remove())
// ==========================================

console.log("==========================================");
console.log("   75 - DOM Replace and Remove Methods");
console.log("==========================================\n");

// --- Target methods ---
console.log("DOM Replace and Remove Methods:");
console.log("   replaceChild()  → replace a child node");
console.log("   removeChild()   → remove a child node\n");

// --- replaceChild syntax ---
console.log("1. replaceChild():\n");
console.log("   parentElement.replaceChild(newNode, oldNode);\n");
console.log("   // Example");
console.log('   var newElement = document.createElement("h1");');
console.log('   newElement.textContent = "Burhan";');
console.log('   var target = document.getElementById("list");');
console.log("   target.replaceChild(newElement, target.firstElementChild);\n");

// --- removeChild syntax ---
console.log("2. removeChild():\n");
console.log("   parentElement.removeChild(childNode);\n");
console.log("   // Example");
console.log('   var target = document.getElementById("list");');
console.log("   target.removeChild(target.firstElementChild);\n");

// --- Modern alternatives ---
console.log("Modern Alternatives:");
console.log("   element.replaceWith(newElement);   // replace self");
console.log("   element.remove();                  // remove self\n");

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────────────┬─────────────────┬──────────────────┐");
console.log("   │ Feature          │ replaceChild()  │ removeChild()    │");
console.log("   ├──────────────────┼─────────────────┼──────────────────┤");
console.log("   │ Called on        │ Parent          │ Parent           │");
console.log("   │ Parameters       │ newNode, oldNode│ childNode        │");
console.log("   │ Browser support  │ ✅ Old          │ ✅ Old           │");
console.log("   │ Returns          │ Replaced node   │ Removed node     │");
console.log("   └──────────────────┴─────────────────┴──────────────────┘");
console.log();

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const list = document.getElementById("list");
    const btnReplace = document.getElementById("btnReplace");
    const btnRemove = document.getElementById("btnRemove");
    const btnReset = document.getElementById("btnReset");

    if (!output || !list) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- Replace Example ---
    log("=== replaceChild() Example ===");
    if (list.children.length > 0) {
      var newHeading = document.createElement("h1");
      newHeading.textContent = "Burhan";

      var firstChild = list.firstElementChild;
      list.replaceChild(newHeading, firstChild);

      log("   Replaced first child with <h1>Burhan</h1>");
      console.log("replaceChild:", newHeading);
    }
    log("");

    // --- Remove Example ---
    log("=== removeChild() Example ===");
    if (list.children.length > 0) {
      var lastChild = list.lastElementChild;
      var removed = list.removeChild(lastChild);
      log("   Removed last child: " + removed.textContent);
      console.log("removeChild:", removed);
    }
    log("");

    log("Current #list HTML:");
    log("   " + list.innerHTML.trim().substring(0, 80) + "...");
    log("");

    // --- Interactive buttons ---
    if (btnReplace) {
      btnReplace.addEventListener("click", () => {
        if (list.children.length === 0) {
          log("   ⚠️ List is empty — nothing to replace");
          return;
        }
        var newEl = document.createElement("h1");
        newEl.textContent = "Replaced #" + (Math.floor(Math.random() * 100));
        newEl.style.color = "#2c3e50";
        list.replaceChild(newEl, list.firstElementChild);
        log("   🔄 Replaced first child with: " + newEl.textContent);
      });
    }

    if (btnRemove) {
      btnRemove.addEventListener("click", () => {
        if (list.children.length === 0) {
          log("   ⚠️ List is empty — nothing to remove");
          return;
        }
        var removed = list.removeChild(list.lastElementChild);
        log("   ❌ Removed: \"" + removed.textContent + "\"");
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        list.innerHTML =
          "<p>Item 1</p>" +
          "<p>Item 2</p>" +
          "<p>Item 3</p>";
        log("   🔄 List reset");
      });
    }

    log("Try the buttons below to test replaceChild / removeChild.");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test replaceChild / removeChild.\n");

  console.log("Concept summary:");
  console.log("   parent.replaceChild(newNode, oldNode);");
  console.log("   parent.removeChild(childNode);");
  console.log();
  console.log("Modern:");
  console.log("   element.replaceWith(newElement);");
  console.log("   element.remove();");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use remove() for simple cleanup");
console.log("   - Use replaceWith() in modern code");
console.log("   - Use removeChild() when you need the removed node");
console.log("   - Always check parent exists");
console.log("   - Cache references to nodes you plan to re-insert\n");

console.log("==========================================");
console.log("   ✅ Replace and Remove — dynamic DOM editing.");
console.log("==========================================\n");	
