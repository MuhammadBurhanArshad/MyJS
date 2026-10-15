// ==========================================
// 20 JavaScript Prompt Box
// prompt() displays a popup that takes text input
// Returns a string (or null if cancelled)
// ==========================================

console.log("==========================================");
console.log("   20 - Prompt Box");
console.log("==========================================\n");

// --- What is a Prompt Box ---
console.log("What is a Prompt Box?");
console.log("   - A popup dialog that asks for input");
console.log("   - Has a text input field");
console.log("   - Has OK and Cancel buttons");
console.log("   - Returns a string (or null if cancelled)\n");

// --- Syntax ---
console.log("Syntax:");
console.log('   prompt("Your message here");\n');

// --- Return values ---
console.log("Return Values:");
console.log("   OK with text → the entered string");
console.log("   Cancel       → null\n");

// --- Example from notes ---
console.log("Example from notes:");
console.log('   <script>');
console.log('     prompt("What is your name?");');
console.log('   <\/script>\n');

// --- Capturing the response ---
console.log("Capturing the Response:");
console.log('   var name = prompt("What is your name?");');
console.log("   if (name !== null) {");
console.log('       document.write("Hello, " + name + "!");');
console.log("   } else {");
console.log('       document.write("You cancelled the prompt.");');
console.log("   }\n");

// --- Practical example ---
console.log("Practical Example — Greeting a User:");
console.log('   var name = prompt("Enter your name:");');
console.log('   var city = prompt("Enter your city:");');
console.log('   alert("Hello " + name + " from " + city + "!");\n');

// --- Comparison ---
console.log("Comparison — alert vs confirm vs prompt:");
console.log("   alert()    → show a message       → returns undefined");
console.log("   confirm()  → ask OK / Cancel      → returns true / false");
console.log("   prompt()   → take text input      → returns string / null\n");

// --- Key points ---
console.log("Key Points About prompt():");
console.log("   1. Built-in browser function");
console.log("   2. Takes a string as a message");
console.log("   3. Returns a string (or null)");
console.log("   4. Blocks the page until user responds");
console.log("   5. Always returns a string — even for numbers\n");

// --- Handling numeric input ---
console.log("Handling Numeric Input:");
console.log('   var age = prompt("Enter your age:");');
console.log("   age = Number(age);");
console.log('   if (age >= 18) { alert("You are an adult."); }\n');

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use only for quick, simple input");
console.log("   - Always handle the null case");
console.log("   - Convert input to the right type");
console.log("   - Use HTML forms for critical input");
console.log("   - Keep messages clear and short\n");

console.log("==========================================");
console.log("   ✅ Open index.html to trigger a prompt dialog.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const btn = document.getElementById("promptBtn");

    if (output) {
      const log = (msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
      };

      log("✅ Page loaded. Click the button to trigger a prompt dialog.");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        const name = prompt("What is your name?");

        let msg;
        if (name !== null && name.trim() !== "") {
          msg = "✅ Hello, " + name + "! (returned string)";
        } else if (name === null) {
          msg = "❌ You cancelled the prompt. (returned null)";
        } else {
          msg = "⚠️ You entered an empty string.";
        }

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
