// ==========================================
// 18 JavaScript Alert Box
// alert() displays a popup dialog with a message
// ==========================================

console.log("==========================================");
console.log("   18 - Alert Box");
console.log("==========================================\n");

// --- What is an Alert Box ---
console.log("What is an Alert Box?");
console.log("   - A modal popup dialog");
console.log("   - Displays a custom message");
console.log("   - Has a single OK button");
console.log("   - Pauses code until user clicks OK\n");

// --- Syntax ---
console.log("Syntax:");
console.log('   alert("Your message here");\n');

// --- Example from notes ---
console.log("Example from notes:");
console.log('   <script>');
console.log('     alert("Burhan Arshad");');
console.log('   <\/script>\n');

// --- Combining with variables ---
var name = "Burhan Arshad";
console.log("Combining with variables:");
console.log('   var name = "Burhan Arshad";');
console.log('   alert("Hello, " + name + "!");');
console.log("   → Hello, " + name + "!\n");

// --- Key points ---
console.log("Key Points About alert():");
console.log("   1. Built-in browser function");
console.log("   2. Takes a string argument");
console.log("   3. Blocks page until OK clicked");
console.log("   4. Returns undefined");
console.log("   5. Not part of the HTML document\n");

// --- alert vs confirm vs prompt ---
console.log("alert() vs confirm() vs prompt():");
console.log("   alert()    → message with OK");
console.log("   confirm()  → message with OK / Cancel");
console.log("   prompt()   → asks for text input\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use sparingly");
console.log("   - Prefer console.log() for debugging");
console.log("   - Keep messages short and clear");
console.log("   - Avoid in production\n");

console.log("==========================================");
console.log("   ✅ Open index.html to see the alert in action.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const btn = document.getElementById("alertBtn");

    if (output) {
      const log = (msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
      };

      log("✅ Page loaded. Click the button below to trigger an alert.");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        alert("Burhan Arshad");
        console.log("Alert displayed: Burhan Arshad");
      });
    }

    // Show an alert on page load (as per notes)
    // Uncomment the next line to see the original behavior:
    // alert("Burhan Arshad");
  });
}
