// ==========================================
// 76 JavaScript DOM cloneNode()
// Copies a node (with or without children)
// ==========================================

console.log("==========================================");
console.log("   76 - DOM cloneNode()");
console.log("==========================================\n");

// --- What is cloneNode ---
console.log("What is cloneNode?");
console.log("   cloneNode() is used to copy nodes.");
console.log("   - true  → deep clone (node + children)");
console.log("   - false → shallow clone (node only)\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   var copyElement = target.cloneNode(true);\n");

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const list = document.getElementById("list");
    const list2 = document.getElementById("list2");
    const btnClone = document.getElementById("btnClone");
    const btnReset = document.getElementById("btnReset");

    if (!output || !list || !list2) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- Example from notes ---
    log("=== Example from notes ===");
    if (list.children.length > 0) {
      var target = list.children[0];
      var copyElement = target.cloneNode(true);

      log("   Cloning first child of #list: \"" + target.textContent + "\"");
      console.log("cloneNode result:", copyElement);

      list2.appendChild(copyElement);
      log("   ✅ Appended copy to #list2");
    }
    log("");

    // --- Deep vs Shallow ---
    log("=== Deep vs Shallow Clone ===");
    if (list.children.length > 0) {
      var original = list.children[0];

      var shallow = original.cloneNode(false);
      log("   cloneNode(false) → " + shallow.outerHTML.substring(0, 50));

      var deep = original.cloneNode(true);
      log("   cloneNode(true)  → " + deep.outerHTML.substring(0, 80));
    }
    log("");

    // --- Interactive buttons ---
    if (btnClone) {
      btnClone.addEventListener("click", () => {
        if (list.children.length === 0) {
          log("   ⚠️ #list is empty");
          return;
        }

        var randomIndex = Math.floor(Math.random() * list.children.length);
        var original = list.children[randomIndex];
        var clone = original.cloneNode(true);

        // Remove id if present (avoid duplicates)
        clone.removeAttribute("id");

        // Add a timestamp for visibility
        clone.textContent += " (Cloned " + new Date().toLocaleTimeString() + ")";
        clone.style.background = "#c8e6c9";
        clone.style.padding = "6px 10px";
        clone.style.margin = "4px 0";
        clone.style.borderRadius = "4px";
        clone.style.display = "block";

        list2.appendChild(clone);
        log("   🧬 Cloned item: \"" + original.textContent + "\" → #list2");
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        list2.innerHTML = "";
        log("   🔄 #list2 cleared");
      });
    }

    log("Click 'Clone Item' to duplicate items from #list to #list2.");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test cloneNode.\n");

  console.log("Concept summary:");
  console.log("   var copy = element.cloneNode(true);   // deep");
  console.log("   var copy = element.cloneNode(false);  // shallow");
  console.log("   parent.appendChild(copy);");
  console.log();
  console.log("Note: JS event listeners added via addEventListener are NOT copied.");
  console.log();
}

// --- What gets copied ---
console.log("What gets copied (cloneNode true):");
console.log("   Element tag           → ✅ Yes");
console.log("   Attributes (class, id) → ✅ Yes");
console.log("   Children               → ✅ Yes");
console.log("   JS event listeners     → ❌ No");
console.log("   Inline HTML handlers   → ✅ Yes");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use cloneNode(true) for deep copy");
console.log("   - Remove or change cloned IDs to avoid duplicates");
console.log("   - Re-attach JS event listeners after cloning");
console.log("   - Cache cloned nodes in variables\n");

console.log("==========================================");
console.log("   ✅ cloneNode — duplicate DOM elements.");
console.log("==========================================\n");
