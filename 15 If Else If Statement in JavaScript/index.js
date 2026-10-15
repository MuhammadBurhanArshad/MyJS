// ==========================================
// 15 JavaScript If Else If Statement
// Multiple conditions — first true block wins
// ==========================================

console.log("==========================================");
console.log("   15 - If Else If Statement");
console.log("==========================================\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   if (condition1) { ... }");
console.log("   else if (condition2) { ... }");
console.log("   else { ... }\n");

// --- Example 1: Greeting by time ---
console.log("Example 1: Greeting by time\n");

function greet(time) {
  if (time < 10) {
    return "Good Morning";
  } else if (time < 20) {
    return "Good day";
  } else {
    return "Good evening";
  }
}

console.log("   time = 8   →", greet(8));
console.log("   time = 15  →", greet(15));
console.log("   time = 22  →", greet(22));
console.log();

// --- Example 2: Grade by percentage ---
console.log("Example 2: Grade by Percentage\n");
console.log("   Percentage      Grade");
console.log("   80 – 100%   →   Merit");
console.log("   60 – 79%    →   1st Division");
console.log("   45 – 59%    →   2nd Division");
console.log("   33 – 44%    →   3rd Division");
console.log("   < 33%       →   Fail\n");

function getGrade(percentage) {
  if (percentage >= 80 && percentage <= 100) {
    return "Merit";
  } else if (percentage >= 60 && percentage <= 79) {
    return "1st Division";
  } else if (percentage >= 45 && percentage <= 59) {
    return "2nd Division";
  } else if (percentage >= 33 && percentage <= 44) {
    return "3rd Division";
  } else {
    return "Fail";
  }
}

var percentage = 75;
console.log("   var percentage = " + percentage);
console.log("   Grade: " + getGrade(percentage) + "\n");

console.log("   Test all ranges:");
[95, 75, 52, 40, 20].forEach((p) => {
  console.log("      " + p + "% → " + getGrade(p));
});
console.log();

// --- Summary ---
console.log("Summary:");
console.log("   - Conditions checked from top to bottom");
console.log("   - First TRUE condition wins");
console.log("   - else runs when nothing matches");
console.log();

console.log("==========================================");
console.log("   ✅ if else if handles multiple conditions.");
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

    log("Greeting at 8  → " + greet(8));
    log("Greeting at 15 → " + greet(15));
    log("Greeting at 22 → " + greet(22));
    log(" ");
    log("Percentage 95% → " + getGrade(95));
    log("Percentage 75% → " + getGrade(75));
    log("Percentage 52% → " + getGrade(52));
    log("Percentage 40% → " + getGrade(40));
    log("Percentage 20% → " + getGrade(20));
  });
}
