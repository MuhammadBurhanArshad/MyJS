// ==========================================
// 04 JavaScript Comments
// Demonstrates the 2 types of comments:
//   1. Single Line  → //
//   2. Multiple Line → /* ... */
// ==========================================

console.log("==========================================");
console.log("   04 - JavaScript Comments");
console.log("==========================================\n");

// --- 1. Single Line Comment ---
console.log("1. Single Line Comment uses //");
console.log('   Example: document.write("Burhan"); // Comment');
console.log();

// --- 2. Multiple Line Comment ---
/*
   This is a
   Multiple Line Comment
*/
console.log("2. Multiple Line Comment uses /* ... */");
console.log('   Example: document.write("Burhan"); /* This is');
console.log('            Multiple line Comment */');
console.log();

// --- 3. Why Use Comments ---
console.log("3. Why use comments?");
console.log("   - Explain complex logic");
console.log("   - Document functions / blocks");
console.log("   - Debug by disabling code temporarily");
console.log("   - Organize code into sections");
console.log();

// --- 4. Best Practices ---
console.log("4. Best Practices:");
console.log("   - Keep comments short and meaningful");
console.log("   - Explain WHY, not WHAT");
console.log("   - Update comments when code changes");
console.log("   - Avoid commenting out large code blocks in production");
console.log("   - Use /* */ for headers / section dividers");
console.log();

console.log("==========================================");
console.log("   ✅ Comments are ignored by the JS engine.");
console.log("   They exist only for humans reading the code.");
console.log("==========================================\n");

// --- Browser-only demo ---
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;

    const log = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      output.appendChild(p);
    };

    // This line uses a single line comment
    log('✅ document.write("Burhan"); // Comment'); // single line

    /*
       This is a
       multiple line comment
       used to log the next example
    */
    log('✅ document.write("Burhan"); /* Multiple line Comment */');
  });
}
