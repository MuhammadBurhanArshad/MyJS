// ==========================================
// 25 JavaScript Events
// Events are user / browser actions
// Attached via HTML attributes (onclick, etc.)
// ==========================================

console.log("==========================================");
console.log("   25 - JavaScript Events");
console.log("==========================================\n");

// --- Basic Events List ---
console.log("JavaScript Basic Events:\n");

console.log("   Mouse Events:");
["Click", "Double Click", "Right Click", "Mouse Hover",
 "Mouse Out", "Mouse Down", "Mouse Up"]
  .forEach((e) => console.log("     - " + e));
console.log();

console.log("   Keyboard Events:");
["Key Press", "Key Up"].forEach((e) => console.log("     - " + e));
console.log();

console.log("   Window / Document Events:");
["Load", "Unload", "Resize", "Scroll"]
  .forEach((e) => console.log("     - " + e));
console.log();

// --- Event Attributes Table ---
console.log("Event → Attribute Mapping:\n");

const eventAttrs = [
  ["Click", "onclick"],
  ["Double Click", "ondblclick"],
  ["Right Click", "oncontextmenu"],
  ["Mouse Hover", "onmouseenter"],
  ["Mouse Out", "onmouseout"],
  ["Mouse Down", "onmousedown"],
  ["Mouse Up", "onmouseup"],
  ["Key Press", "onkeypress"],
  ["Key Up", "onkeyup"],
  ["Load", "onload"],
  ["Unload", "onunload"],
  ["Resize", "onresize"],
  ["Scroll", "onscroll"]
];

eventAttrs.forEach(([ev, attr]) => {
  console.log("   " + ev.padEnd(15) + " → " + attr);
});
console.log();

// --- Example from notes ---
console.log("Example from notes:");
console.log("   <script>");
console.log("     function hello() {");
console.log('       alert("Hello Everyone");');
console.log("     }");
console.log("   <\/script>\n");
console.log('   <button onclick="hello()">Click me</button>\n');

// --- Function used by the button ---
function hello() {
  console.log('   → Function hello() called → alert("Hello Everyone")');
}

// --- How it works ---
console.log("How Event Attributes Work:");
console.log("   1. Attribute name tells the browser what event to listen for.");
console.log("   2. Attribute value is the code to run when the event fires.");
console.log("   3. It can be a function call or a direct statement.\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Prefer addEventListener() in large projects");
console.log("   - Keep handlers short and focused");
console.log("   - Use descriptive function names");
console.log("   - Test across browsers\n");

console.log("==========================================");
console.log("   ✅ Open index.html to trigger events.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const btn = document.getElementById("helloBtn");

    if (output) {
      const log = (msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
      };

      window.__log = log;
      log("✅ Page loaded. Try the interactive elements below.");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        hello();
        if (window.__log) window.__log("🖱️ Button clicked → hello() ran");
      });
    }
  });
}
