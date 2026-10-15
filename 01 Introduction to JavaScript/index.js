// ==========================================
// 01 Introduction to JavaScript
// Demonstrates JavaScript as an event-based,
// client-side scripting language.
// ==========================================

console.log("==========================================");
console.log("   JavaScript Introduction Demo");
console.log("==========================================\n");

// --- 1. JavaScript is a Client-Side Scripting Language ---
console.log("1. JavaScript runs on the client (browser) side.");
console.log("   Other client-side scripts: VBScript");
console.log("   Server-side scripts: PHP, .NET, Python\n");

// --- 2. Event-Based Programming ---
console.log("2. JavaScript is event-based. Common events:");

const events = [
  "Click", "Double Click", "Right Click", "Mouse Hover",
  "Mouse Out", "Drag Drop", "Key Press", "Key Up",
  "Load", "Unload", "Resize", "Scroll"
];

events.forEach((event, i) => {
  console.log(`   ${String(i + 1).padStart(2, "0")}. ${event}`);
});
console.log();

// --- 3. Benefits of Learning JavaScript ---
console.log("3. Benefits of learning JavaScript:");
["Web Development", "Desktop App Development", "Mobile App Development"]
  .forEach((b) => console.log("   - " + b));
console.log();

// --- 4. Frameworks / Libraries You Can Learn ---
console.log("4. What you can learn:");

const learningPaths = {
  "Web Development": ["jQuery", "AngularJS", "ReactJS", "VueJS", "NodeJS"],
  "Desktop App Development": ["ElectronJS (Angular + NodeJS)"],
  "Mobile App Development": [
    "AngularJS", "ReactJS", "VueJS", "React Native",
    "NodeJS (server-side script)"
  ]
};

for (const [path, items] of Object.entries(learningPaths)) {
  console.log(`   ${path}:`);
  items.forEach((item) => console.log("     - " + item));
}
console.log();

// --- 5. Uses of JavaScript in Web Development ---
console.log("5. Uses of JavaScript in Web Development:");
[
  "Dropdown Menu", "Animated Sliders", "Maps", "Chart-Graphs",
  "Pop-up Window", "Audio Players", "Video Players", "Zoom Effects",
  "Animated Gallery", "Form Validations", "Accordions", "Calendar"
].forEach((use) => console.log("   - " + use));
console.log();

// --- 6. Node.js is also a Backend Language ---
console.log("6. Node.js is also a backend language.");
console.log();

console.log("==========================================");
console.log("   Note: Open index.html in browser to see");
console.log("   a live event-based demo (click, hover).");
console.log("==========================================");

// ==========================================
// Live Event Demo (browser only)
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("demoBox");
    const log = document.getElementById("eventLog");

    if (!box || !log) return;

    const addLog = (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      log.prepend(p);
    };

    box.addEventListener("click", () => addLog("🖱️ Click event fired"));
    box.addEventListener("dblclick", () => addLog("🖱️ Double Click event fired"));
    box.addEventListener("mouseover", () => addLog("🖱️ Mouse Hover event fired"));
    box.addEventListener("mouseout", () => addLog("🖱️ Mouse Out event fired"));

    window.addEventListener("resize", () => addLog("📐 Resize event fired"));
    window.addEventListener("scroll", () => addLog("📜 Scroll event fired"));
    document.addEventListener("keyup", (e) =>
      addLog(`⌨️ Key Up event fired: "${e.key}"`)
    );

    addLog("✅ Event listeners attached. Try interacting!");
  });
}
