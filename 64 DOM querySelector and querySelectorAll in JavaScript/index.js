// ==========================================
// 64 JavaScript DOM querySelector() & querySelectorAll()
// Modern DOM targeting with CSS selectors
// ==========================================

console.log("==========================================");
console.log("   64 - DOM querySelector() & querySelectorAll()");
console.log("==========================================\n");

// --- Target methods ---
console.log("Target Methods:");
console.log("   querySelector()     → first matching element");
console.log("   querySelectorAll()  → all matching elements");
console.log("   ⭐ These are for direct selecting elements.\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   document.querySelector(css selector)");
console.log("   document.querySelectorAll(css selector)\n");

// --- CSS Selector Examples ---
console.log("CSS Selector Examples:");
console.log('   "#header"           → id="header"');
console.log('   ".box"              → class="box"');
console.log('   "p"                 → all <p> tags');
console.log('   "div p"             → <p> inside <div>');
console.log('   "ul > li"           → direct <li> children of <ul>');
console.log('   "[type=\\"text\\"]"    → inputs with type="text"');
console.log('   "div.box"           → <div class="box">');
console.log('   "#main .item"       → .item inside #main\n');

// ==========================================
// Browser-only demo
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // --- querySelector() ---
    log("=== querySelector() — First Match ===");

    var el1 = document.querySelector("#header");
    console.log("querySelector('#header'):", el1);
    log("   #header → " + (el1 ? el1.tagName + " \"" + el1.innerText + "\"" : "not found"));

    var el2 = document.querySelector(".demo-item");
    console.log("querySelector('.demo-item'):", el2);
    log("   .demo-item → " + (el2 ? "\"" + el2.innerText + "\"" : "not found"));

    var el3 = document.querySelector("p");
    console.log("querySelector('p'):", el3);
    log("   p → " + (el3 ? "\"" + el3.innerText.substring(0, 30) + "...\"" : "not found"));
    log("");

    // --- querySelectorAll() ---
    log("=== querySelectorAll() — All Matches ===");

    var items = document.querySelectorAll(".demo-item");
    console.log("querySelectorAll('.demo-item'):", items);
    log("   .demo-item count → " + items.length);
    log("   Items:");
    items.forEach(function (item, i) {
      log("      [" + i + "] " + item.innerText);
    });
    log("");

    // --- Get Attribute with querySelector ---
    log("=== getAttribute with querySelector ===");
    var el4 = document.querySelector("#header");
    if (el4) {
      log("   #header class → " + el4.getAttribute("class"));
      log("   #header id    → " + el4.getAttribute("id"));
    }
    log("");

    // --- innerHTML with querySelectorAll ---
    log("=== innerHTML with querySelectorAll ===");
    var firstItem = document.querySelectorAll(".demo-item");
    if (firstItem.length > 0) {
      log("   First .demo-item innerHTML → \"" + firstItem[0].innerHTML + "\"");
    }
    log("");

    // --- Loop with for ---
    log("=== Loop with for ===");
    var links = document.querySelectorAll("a");
    log("   Total <a> tags → " + links.length);
    for (var i = 0; i < links.length; i++) {
      log("      [" + i + "] " + links[i].innerText + " (" + links[i].getAttribute("href") + ")");
    }
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test querySelector methods.\n");

  console.log("Selector concept (simulated):");
  console.log("   querySelector('#header')     → 1 element");
  console.log("   querySelectorAll('.item')    → NodeList of all matches");
  console.log("   Loop through with forEach or for\n");
}

console.log("==========================================");
console.log("   ✅ querySelector/All — modern CSS-based selection.");
console.log("==========================================\n");
