// ==========================================
// 17 JavaScript Switch Statement
// Selects one block from many based on a value
// ==========================================

console.log("==========================================");
console.log("   17 - Switch Statement");
console.log("==========================================\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   switch (expression) {");
console.log("       case condition1:");
console.log("           statement(s);");
console.log("           break;");
console.log("       case condition2:");
console.log("           statement(s);");
console.log("           break;");
console.log("       case condition3:");
console.log("           statement(s);");
console.log("           break;");
console.log("       default:");
console.log("           statement(s);");
console.log("   }\n");

// --- Example: Day of the week ---
console.log("Example — Day of the Week:\n");

function getDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    default:
      return "Unknown day";
  }
}

console.log("   day = 1 →", getDay(1));
console.log("   day = 2 →", getDay(2));
console.log("   day = 3 →", getDay(3));
console.log("   day = 4 →", getDay(4));
console.log("   day = 9 →", getDay(9));
console.log();

// --- Fall-through demo (without break) ---
console.log("Fall-through demo (without break):\n");

function fallThrough(x) {
  let result = "";
  switch (x) {
    case 1:
      result += "One";
    case 2:
      result += "Two";
    case 3:
      result += "Three";
  }
  return result;
}

console.log("   switch (2) without break → " + fallThrough(2));
console.log("   (fall-through: runs case 2 AND case 3)");
console.log();

// --- Switch vs If Else If ---
console.log("Switch vs If Else If:\n");
console.log("   switch      → compares ONE value vs many cases");
console.log("   if else if  → any condition / range checks");
console.log();

// --- Summary ---
console.log("Summary:");
console.log("   - switch selects one block from many.");
console.log("   - break; prevents fall-through.");
console.log("   - default; handles unmatched values.");
console.log("   - Great for menus, days, statuses, options.");
console.log();

console.log("==========================================");
console.log("   ✅ switch is clean for multiple fixed cases.");
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

    log("day = 1 → " + getDay(1));
    log("day = 2 → " + getDay(2));
    log("day = 3 → " + getDay(3));
    log("day = 4 → " + getDay(4));
    log("day = 9 → " + getDay(9));
    log(" ");
    log("Fall-through: switch(2) without break → " + fallThrough(2));
  });
}
