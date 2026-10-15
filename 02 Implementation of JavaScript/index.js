// ==========================================
// 02 JavaScript Implementation
// 2 ways: Internal (in <head>) and External (linked .js)
// Best practice: place <script> at END of <body>
// ==========================================

console.log("==========================================");
console.log("   JavaScript Implementation Demo");
console.log("==========================================\n");

console.log("Software Requirements:");
console.log("   - Web Browser : Google Chrome (recommended)");
console.log("   - HTML Editor : VS Code / Notepad++\n");

console.log("2 Ways to Implement JavaScript:");
console.log("   1. Internal → <script>...</script> inside <head>");
console.log("   2. External → <script src=\"myScript.js\"></script> inside <head>");
console.log();

console.log("Typical structure (Internal):");
console.log(`
    <html>
      <head>
        <script>
          console.log("Internal JS");
        <\/script>
      </head>
      <body> ... </body>
    </html>
`);

console.log("Typical structure (External):");
console.log(`
    <html>
      <head>
        <script src="myScript.js"><\/script>
      </head>
      <body> ... </body>
    </html>
`);

console.log("⭐ Best Practice: <script> at the END of <body>");
console.log(`
    <body>
      <h1>Hello</h1>
      <script src="myScript.js"><\/script>
    </body>
`);
console.log("Why?");
console.log("   1. HTML loads first → faster page display");
console.log("   2. DOM elements exist before script runs");
console.log("   3. Avoids null-reference errors\n");

console.log("Runtime Info:");
console.log("   Node.js version :", process.version);
console.log("   Platform        :", process.platform);
console.log();

console.log("==========================================");
console.log("   ✅ This file (index.js) is EXTERNAL JS");
console.log("   loaded via: <script src=\"index.js\"><\/script>");
console.log("==========================================");

// Browser-only demo
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    log("✅ External script (index.js) loaded successfully.");
    log("✅ DOM is ready — script ran safely at end of <body>.");
    log("👉 The button above uses a function from index.js.");
  });
}

function showExternalMessage() {
  const msg = "Hello from EXTERNAL JavaScript (index.js)!";
  alert(msg);
  console.log(msg);
}
