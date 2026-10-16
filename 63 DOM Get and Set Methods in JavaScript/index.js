// ==========================================
// 63 JavaScript DOM Get & Set Methods
// innerText, innerHTML, getAttribute, setAttribute, etc.
// ==========================================

console.log("==========================================");
console.log("   63 - DOM Get & Set Methods");
console.log("==========================================\n");

// --- What we can get with DOM ---
console.log("What We Can Get with DOM?");
console.log("   - HTML");
console.log("   - Text");
console.log("   - Attribute\n");

// --- Get vs Set methods ---
console.log("DOM Get Methods   |   DOM Set Methods");
console.log("   innerHTML      |   innerHTML");
console.log("   innerText      |   innerText");
console.log("   getAttribute() |   setAttribute()");
console.log("   getAttributeNode() | attributes");
console.log("   attributes     |   removeAttribute()\n");

// --- What each method does ---
console.log("Method Summaries:\n");
console.log("   innerText          → get/set visible text");
console.log("   innerHTML          → get/set HTML content");
console.log("   getAttribute()     → read attribute value");
console.log("   getAttributeNode() → get Attr node");
console.log("   attributes         → all attributes array");
console.log("   setAttribute()     → write attribute");
console.log("   attributes[i].value → set by index");
console.log("   removeAttribute()  → delete attribute\n");

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

    // --- innerText ---
    const header = document.getElementById("header");

    log("=== innerText (Get) ===");
    log("   header.innerText → \"" + header.innerText + "\"");
    console.log("innerText:", header.innerText);
    log("");

    log("=== innerText (Set) ===");
    header.innerText = "Burhan (via innerText)";
    log("   header.innerText = \"Burhan\"");
    log("   After set: \"" + header.innerText + "\"");
    log("");

    // --- innerHTML ---
    log("=== innerHTML (Get) ===");
    const firstP = document.getElementById("para1");
    log("   para1.innerHTML → \"" + firstP.innerHTML + "\"");
    log("");

    log("=== innerHTML (Set) ===");
    firstP.innerHTML = "<strong>Burhan</strong> via innerHTML";
    log("   para1.innerHTML = \"<strong>Burhan</strong>\"");
    log("   After set (visible): \"" + firstP.innerText + "\"");
    log("");

    // --- getAttribute ---
    log("=== getAttribute() (Get) ===");
    log("   header.getAttribute('id')    → " + header.getAttribute("id"));
    log("   header.getAttribute('class') → " + header.getAttribute("class"));
    console.log("getAttribute('id'):", header.getAttribute("id"));
    log("");

    // --- getAttributeNode ---
    log("=== getAttributeNode() (Get) ===");
    const attrNode = header.getAttributeNode("id");
    log("   Attr node: name = " + attrNode.name + ", value = " + attrNode.value);
    log("");

    // --- attributes ---
    log("=== attributes (Get) ===");
    log("   header.attributes.length → " + header.attributes.length);
    for (let i = 0; i < header.attributes.length; i++) {
      log("   [" + i + "] " + header.attributes[i].name + " = " + header.attributes[i].value);
    }
    log("");

    // --- setAttribute ---
    log("=== setAttribute() (Set) ===");
    header.setAttribute("class", "xyz");
    log("   header.setAttribute('class', 'xyz')");
    log("   New class → " + header.getAttribute("class"));
    log("");

    // --- attributes[i].value ---
    log("=== attributes[i].value (Set) ===");
    if (header.attributes.length > 1) {
      header.attributes[1].value = "abc";
      log("   header.attributes[1].value = 'abc'");
      log("   attributes[1] → " + header.attributes[1].name + " = " + header.attributes[1].value);
    } else {
      log("   Only 1 attribute on header — skipping");
    }
    log("");

    // --- removeAttribute ---
    log("=== removeAttribute() (Set) ===");
    header.setAttribute("style", "color:red;");
    log("   Before: style = " + header.getAttribute("style"));
    header.removeAttribute("style");
    log("   After removeAttribute('style') → " + header.getAttribute("style"));
    log("");
  });
}

// --- Node.js console-only ---
if (typeof document === "undefined") {
  console.log("Running in Node.js — DOM not available.");
  console.log("Open index.html in a browser to test these methods.\n");

  // Simulate get/set conceptually
  console.log("Simulated get/set demonstration:");
  const obj = { header: { innerText: "Old Header", class: "old" } };
  console.log("   Before: " + JSON.stringify(obj.header));
  obj.header.innerText = "New Header";
  obj.header.class = "new";
  console.log("   After:  " + JSON.stringify(obj.header));
  console.log();
}

console.log("==========================================");
console.log("   ✅ Get reads. Set writes. Know the difference.");
console.log("==========================================\n");
