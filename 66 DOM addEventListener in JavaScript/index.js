// ==========================================
// 66 JavaScript DOM addEventListener()
// Modern way to attach events to elements
// Syntax: addEventListener(event, function, useCapture)
// ==========================================

console.log("==========================================");
console.log("   66 - DOM addEventListener()");
console.log("==========================================\n");

// --- Target ---
console.log("Target:");
console.log("   - Event Listeners in JavaScript");
console.log("   - Events in JavaScript\n");

// --- HTML Event Attributes (old way) ---
console.log("HTML Event Attributes (old way):");
console.log('   <button onclick="abc()">Click me</button>');
console.log('   <img src="..." onmouseover="xyz()">\n');
console.log("   ⚠️ But we want to add JavaScript in a JavaScript file.\n");

// --- Two ways ---
console.log("Two ways to attach events from JavaScript:");
console.log("   1. Assign Events using the HTML DOM");
console.log("   2. DOM addEventListener\n");

// --- 1. Assign using HTML DOM ---
console.log("1. Assign Events using the HTML DOM:");
console.log('   document.getElementById("header").onclick = abc;');
console.log();
console.log("   function abc() {");
console.log('       document.getElementById("header").style.background = "green";');
console.log("   }");
console.log();

// --- 2. addEventListener ---
console.log("2. DOM addEventListener:");
console.log('   document.getElementById("header").addEventListener("click", abc);');
console.log();
console.log("   function abc() {");
console.log('       document.getElementById("header").style.background = "green";');
console.log("   }");
console.log();

// --- 3 parameters ---
console.log("3 Parameters of addEventListener():");
console.log("   addEventListener(event, function, useCapture);");
console.log();
console.log("   event       → event name (string), e.g., \"click\"");
console.log("   function    → function to run when event fires");
console.log("   useCapture  → true (capture) or false (bubble, default)");
console.log();
console.log("   ⭐ useCapture: true = capture phase, false = bubble phase");
console.log();

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const header = document.getElementById("header");
    const btnAdd = document.getElementById("btnAdd");
    const btnRemove = document.getElementById("btnRemove");
    const btnOnce = document.getElementById("btnOnce");
    const btnMulti = document.getElementById("btnMulti");

    if (!output || !header) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    log("✅ DOM loaded. Try clicking the buttons.");
    log("");

    // --- Change color function ---
    function changeColor() {
      header.style.background = "green";
      header.style.color = "white";
      console.log("→ changeColor() called");
      log("🟢 header background → green");
    }

    // --- Button: add listener ---
    if (btnAdd) {
      btnAdd.addEventListener("click", () => {
        header.addEventListener("click", changeColor);
        console.log("Added click listener to header");
        log("➕ Listener added — now click the header div");
      });
    }

    // --- Button: remove listener ---
    if (btnRemove) {
      btnRemove.addEventListener("click", () => {
        header.removeEventListener("click", changeColor);
        console.log("Removed click listener from header");
        log("➖ Listener removed");
      });
    }

    // --- Button: once ---
    if (btnOnce) {
      btnOnce.addEventListener(
        "click",
        () => {
          log("🔂 This fired only ONCE (once: true)");
          console.log("Fired once");
        },
        { once: true }
      );
    }

    // --- Multiple listeners on same event ---
    if (btnMulti) {
      btnMulti.addEventListener("click", () => {
        log("👉 First handler fired");
        console.log("First handler");
      });
      btnMulti.addEventListener("click", () => {
        log("👉 Second handler fired");
        console.log("Second handler");
      });
    }
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test addEventListener.\n");

  console.log("Concept summary:");
  console.log('   el.addEventListener("click", handler);');
  console.log('   el.addEventListener("click", handler, true);  // capture phase');
  console.log('   el.addEventListener("click", handler, false); // bubble phase');
  console.log('   el.removeEventListener("click", handler);');
  console.log('   el.addEventListener("click", handler, { once: true });');
  console.log();
}

// --- Comparison table ---
console.log("HTML Attribute vs addEventListener:");
console.log("   ┌────────────────────┬──────────────────┬─────────────────────┐");
console.log("   │ Feature            │ HTML Attribute   │ addEventListener    │");
console.log("   ├────────────────────┼──────────────────┼─────────────────────┤");
console.log("   │ Location           │ In HTML          │ In JavaScript       │");
console.log("   │ Multiple handlers  │ ❌ No            │ ✅ Yes              │");
console.log("   │ Prefix             │ on needed        │ No on               │");
console.log("   │ Removal            │ Hard             │ removeEventListener │");
console.log("   │ Best practice      │ ❌ Old           │ ✅ Modern           │");
console.log("   └────────────────────┴──────────────────┴─────────────────────┘");
console.log();

console.log("==========================================");
console.log("   ✅ addEventListener — modern event handling.");
console.log("==========================================\n");
