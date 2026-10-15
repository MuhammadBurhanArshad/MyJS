// ==========================================
// 03 Add HTML Tags in JavaScript
// Demonstrates the <script> tag and
// document.write() for outputting HTML.
// ==========================================

console.log("==========================================");
console.log("   03 - Add HTML Tags in JavaScript");
console.log("==========================================\n");

// --- 1. The <script> Tag ---
console.log("1. The <script> tag wraps all JavaScript code:");
console.log(`
    <script>
      // JavaScript code here
    <\/script>
`);
console.log();

// --- 2. document.write() Method ---
console.log("2. document.write() writes text or HTML to the page:");
console.log('   document.write("Some text");');
console.log();

console.log("   Example with HTML tags:");
console.log('   document.write("<h1>Muhammad Burhan</h1>");');
console.log('   document.write("<b>Muhammad Burhan</b>");');
console.log();

// --- 3. Common HTML Tags ---
console.log("3. Common HTML tags you can write:");
const tags = [
  ["<h1> - <h6>", "Headings"],
  ["<b>", "Bold text"],
  ["<i>", "Italic text"],
  ["<u>", "Underline"],
  ["<p>", "Paragraph"],
  ["<br>", "Line break"],
  ["<a>", "Hyperlink"],
  ["<img>", "Image"]
];
tags.forEach(([tag, purpose]) => {
  console.log(`   ${tag.padEnd(14)} → ${purpose}`);
});
console.log();

// --- 4. Best Practices ---
console.log("4. ⚠️ Best Practices:");
console.log("   - Avoid document.write() AFTER page load (overwrites page).");
console.log("   - Prefer innerHTML / textContent / createElement().");
console.log("   - Use document.write() only for quick demos.\n");

console.log("==========================================");
console.log("   ✅ Open index.html to see document.write()");
console.log("   rendering real HTML tags in the browser.");
console.log("==========================================\n");

// --- Browser-only demo using document.write() ---
if (typeof document !== "undefined") {
  // document.write() can only run during initial page load.
  // In this demo, we inject into a container using innerHTML
  // to safely show the same effect after load.
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("writeOutput");
    if (!container) return;

    // Simulating document.write() output safely
    container.innerHTML += "<h1>Muhammad Burhan</h1>";
    container.innerHTML += "<b>Muhammad Burhan</b><br>";
    container.innerHTML += "<p>This content was written using HTML tags from JavaScript.</p>";
  });
}
