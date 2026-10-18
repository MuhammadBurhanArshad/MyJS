// ==========================================
// 72 JavaScript DOM Create Methods
// createElement(), createTextNode(), createComment()
// ==========================================

console.log("==========================================");
console.log("   72 - DOM Create Methods");
console.log("==========================================\n");

// --- Target methods ---
console.log("DOM Create Methods:");
console.log("   createElement()");
console.log("   createTextNode()");
console.log("   createComment()\n");

// --- Use cases ---
console.log("Use Cases:");
console.log("   Tag     → createElement()   → <p></p>");
console.log("   Text    → createTextNode()  → \"This is just text\"");
console.log("   Comment → createComment()   → <!-- comment -->\n");

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const dynamicArea = document.getElementById("dynamic-area");

    if (!output || !dynamicArea) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- 1. createElement() ---
    log("=== 1. createElement() ===");
    var newElement = document.createElement("p");
    console.log("createElement('p'):", newElement);
    log("   Created: <p></p> (empty — not yet in page)");
    log("   newElement.outerHTML → \"" + newElement.outerHTML + "\"");
    log("");

    // --- 2. createTextNode() ---
    log("=== 2. createTextNode() ===");
    var newText = document.createTextNode("This is just text");
    console.log("createTextNode('This is just text'):", newText);
    log("   Created text node: \"" + newText.textContent + "\"");
    log("   nodeType: " + newText.nodeType + "  (3 = Text)");
    log("");

    // --- 3. createComment() ---
    log("=== 3. createComment() ===");
    var newComment = document.createComment("This is Comment");
    console.log("createComment('This is Comment'):", newComment);
    log("   Created comment node: \"" + newComment.textContent + "\"");
    log("   nodeType: " + newComment.nodeType + "  (8 = Comment)");
    log("");

    // --- Combine: element + text ---
    log("=== Combine: Element + Text ===");
    var p = document.createElement("p");
    var text = document.createTextNode("This text was created by JavaScript!");
    p.appendChild(text);
    p.style.color = "#2c3e50";
    p.style.background = "#e3f2fd";
    p.style.padding = "10px";
    p.style.borderRadius = "6px";

    log("   Created <p> with text inside");
    log("   Now appending to #dynamic-area...");
    dynamicArea.appendChild(p);
    log("   ✅ Added to DOM (see box below)");
    log("");

    // --- Combine: element + text + comment ---
    log("=== Combine: Element + Text + Comment ===");
    var p2 = document.createElement("p");
    var text2 = document.createTextNode("Second paragraph created dynamically");
    var comment = document.createComment("This paragraph was created via JS");

    p2.appendChild(text2);
    p2.style.background = "#fff3cd";
    p2.style.padding = "10px";
    p2.style.borderRadius = "6px";

    dynamicArea.appendChild(comment);
    dynamicArea.appendChild(p2);

    log("   Created paragraph + comment");
    log("   ✅ Appended both to DOM");
    log("");

    // --- Dynamic list example ---
    log("=== Dynamic List Example ===");
    var ul = document.createElement("ul");
    ["Item 1", "Item 2", "Item 3"].forEach(function (itemText) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(itemText));
      ul.appendChild(li);
    });
    dynamicArea.appendChild(ul);
    log("   ✅ Created a <ul> with 3 <li> items dynamically");
    log("");

    log("Note: none of these nodes appear in the page");
    log("until you call appendChild() on a parent element.");
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test create methods.\n");

  console.log("Concept summary:");
  console.log('   document.createElement("p")                → <p></p>');
  console.log('   document.createTextNode("Hello")           → "Hello"');
  console.log('   document.createComment("Comment")          → <!--Comment-->');
  console.log();
  console.log("To add them to the page:");
  console.log("   parent.appendChild(newElement);");
  console.log();
}

// --- Best practices ---
console.log("Best Practices:");
console.log("   - createElement → tags");
console.log("   - createTextNode → safe text (no HTML injection)");
console.log("   - createComment → developer notes");
console.log("   - Always append with appendChild()");
console.log("   - Cache parent references\n");

console.log("==========================================");
console.log("   ✅ Create methods — build DOM dynamically.");
console.log("==========================================\n");
