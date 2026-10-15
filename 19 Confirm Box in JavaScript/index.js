// ==========================================
// 19 JavaScript Confirm Box
// confirm() displays a popup with OK / Cancel
// Returns true (OK) or false (Cancel)
// ==========================================

console.log("==========================================");
console.log("   19 - Confirm Box");
console.log("==========================================\n");

// --- What is a Confirm Box ---
console.log("What is a Confirm Box?");
console.log("   - A popup dialog with a message");
console.log("   - Has TWO buttons: OK and Cancel");
console.log("   - Returns true (OK) or false (Cancel)");
console.log("   - Like alert(), but with two options\n");

// --- Syntax ---
console.log("Syntax:");
console.log('   confirm("Your message here");\n');

// --- Return values ---
console.log("Return Values:");
console.log("   OK     → true");
console.log("   Cancel → false\n");

// --- Example from notes ---
console.log("Example from notes:");
console.log('   <script>');
console.log('     confirm("Burhan Arshad");');
console.log('   <\/script>\n');

// --- Capturing the response ---
console.log("Capturing the Response:");
console.log("   var result = confirm(\"Do you want to continue?\");");
console.log("   if (result) {");
console.log('       document.write("User clicked OK");');
console.log("   } else {");
console.log('       document.write("User clicked Cancel");');
console.log("   }\n");

// --- Practical example ---
console.log("Practical Example — Delete Confirmation:");
console.log('   var del = confirm("Are you sure you want to delete this item?");');
console.log("   if (del) { alert(\"Item deleted.\"); }");
console.log("   else { alert(\"Action cancelled.\"); }\n");

// --- Comparison ---
console.log("Comparison — alert vs confirm vs prompt:");
console.log("   alert()    → OK           → returns undefined");
console.log("   confirm()  → OK / Cancel  → returns true / false");
console.log("   prompt()   → OK / Cancel + input → returns string / null\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use only for important decisions");
console.log("   - Keep messages clear and specific");
console.log("   - Always handle the return value");
console.log("   - Avoid multiple confirms in a row\n");

console.log("==========================================");
console.log("   ✅ Open index.html to trigger a confirm dialog.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const btn = document.getElementById("confirmBtn");

    if (output) {
      const log = (msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
      };

      log("✅ Page loaded. Click the button to trigger a confirm dialog.");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        const result = confirm("Burhan Arshad\n\nDo you want to continue?");

        const msg = result
          ? "✅ User clicked OK → returned true"
          : "❌ User clicked Cancel → returned false";

        console.log(msg);

        if (output) {
          const p = document.createElement("p");
          p.textContent = msg;
          output.appendChild(p);
        }
      });
    }
  });
}
