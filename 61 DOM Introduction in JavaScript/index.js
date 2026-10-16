// ==========================================
// 61 JavaScript DOM Introduction
// DOM = Document Object Model
// Represents HTML as a tree of nodes
// ==========================================

console.log("==========================================");
console.log("   61 - DOM Introduction");
console.log("==========================================\n");

// --- What is DOM? ---
console.log("What is DOM?");
console.log("   DOM → Document Object Model");
console.log("   Represents HTML as a tree structure.\n");

// --- HTML DOM Tree ---
console.log("HTML DOM Tree:");
console.log("   Document");
console.log("      ↓");
console.log("   root (html)");
console.log("      ├── element: <head>");
console.log("      │       └── element: <title>");
console.log('      │              └── text: "A New WebSide"');
console.log("      └── element: <body>");
console.log("              ├── element: <nav>");
console.log('              │       └── text: "About Us"');
console.log("              ├── element: <div>  (attribute: class)");
console.log("              └── element: <div>  (attribute: id, class)");
console.log();

// --- Node Types ---
console.log("Node Types:");
console.log("   Document  → the whole page");
console.log("   Element   → <div>, <h1>, <p>");
console.log("   Text      → visible content");
console.log("   Attribute → class, id, href\n");

// --- Why use DOM? ---
console.log("Why Use the DOM?");
console.log("   - Read HTML");
console.log("   - Change HTML");
console.log("   - Add HTML");
console.log("   - Delete HTML\n");

// --- Get and Set ---
console.log("What Can We Do With the DOM?");
console.log("   ⭐ We can do two types of works:");
console.log("      - Get");
console.log("      - Set\n");

// --- How to access DOM elements (works in browser) ---
console.log("How to Access DOM Elements:");
console.log('   document.getElementById("demo");');
console.log('   document.getElementsByClassName("box");');
console.log('   document.getElementsByTagName("p");');
console.log('   document.querySelector("#demo");\n');

// --- Common DOM objects ---
console.log("Common DOM Objects:");
console.log("   document                 → the whole HTML document");
console.log("   window                   → the browser window");
console.log("   document.body            → the <body> element");
console.log("   document.head            → the <head> element");
console.log("   document.documentElement → the <html> element\n");

// --- Demo (browser only) ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    log("✅ DOM Loaded Successfully!");
    log("");
    log("document.title        → " + document.title);
    log("document.URL          → " + document.URL);
    log("document.body.tagName → " + document.body.tagName);
    log("document.head.tagName → " + document.head.tagName);
    log("document.documentElement.tagName → " + document.documentElement.tagName);
    log("");
    log("Total elements on page: " + document.getElementsByTagName("*").length);
  });
}

// --- Key points ---
console.log("Key Points:");
console.log("   1. DOM = representation of HTML as a tree");
console.log("   2. Every part of the page is a node");
console.log("   3. JavaScript uses DOM to read and modify");
console.log("   4. Two operations: Get and Set");
console.log("   5. Access via getElementById, querySelector, etc.\n");

console.log("==========================================");
console.log("   ✅ DOM — the interface between JS and HTML.");
console.log("==========================================\n");
