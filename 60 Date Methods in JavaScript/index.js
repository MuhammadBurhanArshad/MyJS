// ==========================================
// 60 JavaScript Date Methods
// Working with dates and times
// ==========================================

console.log("==========================================");
console.log("   60 - Date Methods");
console.log("==========================================\n");

// --- Date Object ---
console.log("JavaScript Date Object:");
console.log("   var now = new Date();\n");

var now = new Date();
console.log("   Current date and time:");
console.log("   → " + now);
console.log();

// --- toDateString() ---
console.log("1. toDateString() — Current Date in String:\n");
console.log("   now.toDateString() → " + now.toDateString() + "\n");

// --- getDate() ---
console.log("2. getDate() — Just the Date:\n");
console.log("   now.getDate() → " + now.getDate() + "\n");

// --- getFullYear() ---
console.log("3. getFullYear() — Just the Year:\n");
console.log("   now.getFullYear() → " + now.getFullYear() + "\n");

// --- getMonth() ---
console.log("4. getMonth() — Month in Numbers:\n");
console.log("   now.getMonth() → " + now.getMonth() + "  (0 = Jan, 11 = Dec)");
console.log("   (counts month from 0)\n");

// --- getDay() ---
console.log("5. getDay() — Day of Week:\n");
console.log("   now.getDay() → " + now.getDay() + "  (0 = Sun, 6 = Sat)");
console.log("   (starts from Sunday = 0)\n");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("   Today is: " + days[now.getDay()] + "\n");

// --- getHours() ---
console.log("6. getHours() — Just the Hours:\n");
console.log("   now.getHours() → " + now.getHours() + "\n");

// --- getMinutes() ---
console.log("7. getMinutes() — Just the Minutes:\n");
console.log("   now.getMinutes() → " + now.getMinutes() + "\n");

// --- getSeconds() ---
console.log("8. getSeconds() — Just the Seconds:\n");
console.log("   now.getSeconds() → " + now.getSeconds() + "\n");

// --- getMilliseconds() ---
console.log("9. getMilliseconds() — Just the Milliseconds:\n");
console.log("   now.getMilliseconds() → " + now.getMilliseconds() + "\n");

// --- Setter examples ---
console.log("Setter Methods:\n");

// setDate
var d1 = new Date();
d1.setDate(20);
console.log("   setDate(20)      → " + d1);
console.log();

// setFullYear
var d2 = new Date();
d2.setFullYear(2023);
console.log("   setFullYear(2023) → " + d2);
console.log();

// setMonth
var d3 = new Date();
d3.setMonth(4);
console.log("   setMonth(4)       → " + d3 + "  (0 = Jan, 4 = May)");
console.log();

// setHours
var d4 = new Date();
d4.setHours(14);
console.log("   setHours(14)      → " + d4);
console.log();

// setMinutes / setSeconds / setMilliseconds
var d5 = new Date();
d5.setMinutes(30);
d5.setSeconds(15);
d5.setMilliseconds(500);
console.log("   setMinutes(30), setSeconds(15), setMilliseconds(500)");
console.log("   → " + d5);
console.log();

// --- Getter vs Setter table ---
console.log("Getter vs Setter:");
console.log("   ┌────────────────────┬────────────────────┐");
console.log("   │ Getter             │ Setter             │");
console.log("   ├────────────────────┼────────────────────┤");
console.log("   │ getDate()          │ setDate()          │");
console.log("   │ getFullYear()      │ setFullYear()      │");
console.log("   │ getMonth()         │ setMonth()         │");
console.log("   │ getDay()           │ (no setter — derived)│");
console.log("   │ getHours()         │ setHours()         │");
console.log("   │ getMinutes()       │ setMinutes()       │");
console.log("   │ getSeconds()       │ setSeconds()       │");
console.log("   │ getMilliseconds()  │ setMilliseconds()  │");
console.log("   └────────────────────┴────────────────────┘");
console.log();

// --- Important facts ---
console.log("Important Facts:");
console.log("   1. Months are 0-indexed (Jan=0, Dec=11)");
console.log("   2. Days are 0-indexed (Sun=0, Sat=6)");
console.log("   3. getDate() → day of month (1-31)");
console.log("   4. getDay()  → day of week (0-6)");
console.log("   5. toDateString() → readable output\n");

console.log("==========================================");
console.log("   ✅ Date methods — get and set date parts.");
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

    log("Current Date:     " + now.toDateString());
    log("Day of month:     " + now.getDate());
    log("Full Year:        " + now.getFullYear());
    log("Month (0-11):     " + now.getMonth());
    log("Day of week:      " + now.getDay() + " (" + days[now.getDay()] + ")");
    log("Hours:            " + now.getHours());
    log("Minutes:          " + now.getMinutes());
    log("Seconds:          " + now.getSeconds());
    log("Milliseconds:     " + now.getMilliseconds());
  });
}
