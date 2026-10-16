// ==========================================
// 62 JavaScript DOM Targeting Methods
// Selecting DOM elements by id, class, tag, etc.
// ==========================================

console.log("==========================================");
console.log("   62 - DOM Targeting Methods");
console.log("==========================================\n");

// --- Additional operations ---
console.log("We can also:");
console.log("   - Add HTML Element");
console.log("   - Delete HTML Element\n");

// --- The Three Basic Methods ---
console.log("How to Target DOM Object:\n");
console.log("   Id         → document.getElementById(id)");
console.log("   Class Name → document.getElementsByClassName(name)");
console.log("   Tag Name   → document.getElementsByTagName(name)\n");
console.log("   ⭐ These three are the basic and most important methods.\n");

// --- Other DOM Targeting Methods ---
console.log("Other DOM Targeting Methods:\n");
[
  "document",
  "document.all",
  "document.documentElement",
  "document.head",
  "document.title",
  "document.body",
  "document.images",
  "document.anchors",
  "document.links",
  "document.forms",
  "document.doctype",
  "document.URL",
  "document.baseURI",
  "document.domain"
].forEach((m) => console.log("   - " + m));
console.log();

// ==========================================
// Browser-only DOM examples
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

    log("=== getElementById ===");
    var element1 = document.getElementById("output");
    console.log("getElementById('output'):", element1);
    log("   ID: " + (element1 ? element1.id : "not found"));
    log("");

    log("=== getElementsByClassName ===");
    var element2 = document.getElementsByClassName("demo-item");
    console.log("getElementsByClassName('demo-item'):", element2);
    log("   Found: " + element2.length + " elements");
    log("");

    log("=== getElementsByTagName ===");
    var element3 = document.getElementsByTagName("p");
    console.log("getElementsByTagName('p'):", element3);
    log("   Found: " + element3.length + " <p> elements");
    log("");

    log("=== document.head ===");
    var element4 = document.head;
    console.log("document.head:", element4);
    log("   Tag: " + (element4 ? element4.tagName : "n/a"));
    log("");

    log("=== document.title ===");
    var element5 = document.title;
    console.log("document.title:", element5);
    log("   Title: " + element5);
    log("");

    log("=== document.body ===");
    var element6 = document.body;
    console.log("document.body:", element6);
    log("   Tag: " + (element6 ? element6.tagName : "n/a"));
    log("");

    log("=== document.links ===");
    var element7 = document.links;
    console.log("document.links:", element7);
    log("   Found: " + element7.length + " links");
    log("");

    log("=== document.images ===");
    var element8 = document.images;
    console.log("document.images:", element8);
    log("   Found: " + element8.length + " images");
    log("");

    log("=== document.forms ===");
    var element9 = document.forms;
    console.log("document.forms:", element9);
    log("   Found: " + element9.length + " forms");
    log("");

    log("=== document.doctype ===");
    var element10 = document.doctype;
    console.log("document.doctype:", element10);
    log("   Name: " + (element10 ? element10.name : "n/a"));
    log("");

    log("=== document.URL ===");
    var element11 = document.URL;
    console.log("document.URL:", element11);
    log("   URL: " + element11);
    log("");

    log("=== document.domain ===");
    var element12 = document.domain;
    console.log("document.domain:", element12);
    log("   Domain: " + element12);
    log("");

    log("=== document.baseURI ===");
    var element13 = document.baseURI;
    console.log("document.baseURI:", element13);
    log("   Base URI: " + element13);
    log("");

    log("=== document.documentElement ===");
    var element14 = document.documentElement;
    console.log("document.documentElement:", element14);
    log("   Tag: " + element14.tagName);
  });
}

// --- Node.js console-only (no DOM) ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — no DOM available.");
  console.log("To test, open index.html in a browser.\n");
}

console.log("==========================================");
console.log("   ✅ DOM targeting — select elements to work with.");
console.log("==========================================\n");
