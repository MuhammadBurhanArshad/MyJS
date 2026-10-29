// ==========================================
// 74 JavaScript DOM insertAdjacent Methods
// insertAdjacentElement(), insertAdjacentHTML(), insertAdjacentText()
// Positions: beforebegin, afterbegin, beforeend, afterend
// ==========================================

console.log("==========================================");
console.log("   74 - DOM insertAdjacent Methods");
console.log("==========================================\n");

// --- Target methods ---
console.log("DOM Append and Create Methods:");
console.log("   insertAdjacentElement()");
console.log("   insertAdjacentHTML()");
console.log("   insertAdjacentText()\n");

// --- Uses ---
console.log("Uses:");
console.log("   insertAdjacentElement  → Tag: <p></p>");
console.log('   insertAdjacentHTML     → Tag with Text: <p>This is just text</p>');
console.log('   insertAdjacentText     → Text: "This is just text"\n');

// --- Positions ---
console.log("DOM insertAdjacent Positions:");
console.log("   - beforebegin  → before the element itself");
console.log("   - afterbegin   → inside, before first child");
console.log("   - beforeend    → inside, after last child");
console.log("   - afterend     → after the element itself\n");

// --- Visual ---
console.log("Visual Positions:");
console.log("   <!-- beforebegin -->");
console.log('   <p id="target">');
console.log("       <!-- afterbegin -->");
console.log("       ...existing content...");
console.log("       <!-- beforeend -->");
console.log("   </p>");
console.log("   <!-- afterend -->\n");

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const target = document.getElementById("test");
    const btnElement = document.getElementById("btnElement");
    const btnHTML = document.getElementById("btnHTML");
    const btnText = document.getElementById("btnText");
    const btnReset = document.getElementById("btnReset");

    if (!output || !target) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- 1. insertAdjacentElement ---
    log("=== 1. insertAdjacentElement() ===");
    var newElement = document.createElement("h2");
    var newText = document.createTextNode("This is just text");

    newElement.appendChild(newText);
    target.insertAdjacentElement("beforebegin", newElement);

    log("   Inserted <h2> BEFORE #test → " + newElement.outerHTML);
    console.log("insertAdjacentElement result:", newElement);
    log("");

    // --- 2. insertAdjacentHTML ---
    log("=== 2. insertAdjacentHTML() ===");
    target.insertAdjacentHTML("beforeend", "<p>Appended via HTML</p>");
    log("   Inserted HTML at beforeend of #test");
    log("");

    // --- 3. insertAdjacentText ---
    log("=== 3. insertAdjacentText() ===");
    target.insertAdjacentText("afterbegin", "Hello, world! ");
    log("   Inserted text at afterbegin of #test");
    log("");

    // --- Interactive buttons ---
    if (btnElement) {
      btnElement.addEventListener("click", () => {
        var el = document.createElement("span");
        el.textContent = " [Element-" + Date.now() % 1000 + "] ";
        el.style.background = "#c8e6c9";
        el.style.padding = "2px 6px";
        el.style.borderRadius = "4px";
        target.insertAdjacentElement("beforeend", el);
        log("   ➕ Element inserted (beforeend)");
      });
    }

    if (btnHTML) {
      btnHTML.addEventListener("click", () => {
        target.insertAdjacentHTML("afterbegin", "<b>[HTML]</b> ");
        log("   ➕ HTML inserted (afterbegin)");
      });
    }

    if (btnText) {
      btnText.addEventListener("click", () => {
        target.insertAdjacentText("beforeend", " (text)");
        log("   ➕ Text inserted (beforeend)");
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        // Reset target content
        target.innerHTML = "Original Content";
        // Remove any h2 inserted before
        const prevH2 = document.querySelector("h2.adjacent-h2");
        if (prevH2) prevH2.remove();
        log("   🔄 Reset");
      });
    }

    log("Try the buttons below to test each method interactively:");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test insertAdjacent methods.\n");

  console.log("Concept summary:");
  console.log('   el.insertAdjacentElement("beforebegin", newEl)');
  console.log('   el.insertAdjacentHTML("beforeend", "<p>Hi</p>")');
  console.log('   el.insertAdjacentText("afterbegin", "Hello")');
  console.log();
  console.log("Positions:");
  console.log("   beforebegin, afterbegin, beforeend, afterend");
  console.log();
}

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────────────────────┬─────────────────┬─────────────────┐");
console.log("   │ Method                   │ Inserts         │ Parses HTML?    │");
console.log("   ├──────────────────────────┼─────────────────┼─────────────────┤");
console.log("   │ insertAdjacentElement    │ DOM element     │ ❌ (already)    │");
console.log("   │ insertAdjacentHTML       │ HTML string     │ ✅ Yes          │");
console.log("   │ insertAdjacentText       │ Text string     │ ❌ Literal      │");
console.log("   └──────────────────────────┴─────────────────┴─────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use insertAdjacentHTML only with trusted HTML (XSS risk)");
console.log("   - Use insertAdjacentText for user input (safe)");
console.log("   - Positions must be exact: beforebegin, afterbegin, beforeend, afterend");
console.log("   - Great for precise insertion without extra nodes\n");

console.log("==========================================");
console.log("   ✅ insertAdjacent — flexible insertion at 4 positions.");
console.log("==========================================\n");
