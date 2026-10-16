// ==========================================
// 57 JavaScript String Methods II
// charAt, charCodeAt, fromCharCode, concat, split,
// repeat, slice, substr, substring, toString, valueOf
// ==========================================

console.log("==========================================");
console.log("   57 - String Methods II");
console.log("==========================================\n");

// --- 1. charAt() ---
console.log("1. charAt():\n");
var str1 = "Burhan is a good boy";
console.log('   var str = "Burhan is a good boy";');
console.log("   str.charAt(3) → \"" + str1.charAt(3) + "\"");
console.log("   str.charAt(0) → \"" + str1.charAt(0) + "\"");
console.log("   str.charAt(5) → \"" + str1.charAt(5) + "\"\n");

// --- 2. charCodeAt() ---
console.log("2. charCodeAt():\n");
console.log("   str.charCodeAt(4) → " + str1.charCodeAt(4) + "  (Unicode of 'a')");
console.log("   str.charCodeAt(0) → " + str1.charCodeAt(0) + "  (Unicode of 'B')\n");

// --- 3. fromCharCode() ---
console.log("3. fromCharCode():\n");
console.log('   String.fromCharCode(65) → "' + String.fromCharCode(65) + '"');
console.log('   String.fromCharCode(66) → "' + String.fromCharCode(66) + '"');
console.log('   String.fromCharCode(97) → "' + String.fromCharCode(97) + '"');
console.log();

// --- 4. concat() ---
console.log("4. concat():\n");
var s1 = "Burhan ";
var s2 = "Arshad";
console.log('   var str  = "Burhan ";');
console.log('   var str2 = "Arshad";');
console.log('   str.concat(str2) → "' + s1.concat(s2) + '"\n');

// --- 5. split() ---
console.log("5. split():\n");
var str5 = "Burhan Arshad";
console.log('   "Burhan Arshad".split(" ")');
console.log("   → " + JSON.stringify(str5.split(" ")));
console.log('   "a,b,c".split(",") → ' + JSON.stringify("a,b,c".split(",")));
console.log('   "hello".split("")  → ' + JSON.stringify("hello".split("")) + "\n");

// --- 6. repeat() ---
console.log("6. repeat():\n");
var str6 = "Burhan ";
console.log('   "Burhan ".repeat(2) → "' + str6.repeat(2) + '"');
console.log('   "ab".repeat(3)      → "' + "ab".repeat(3) + '"\n');

// --- 7. slice() ---
console.log("7. slice():\n");
var str7 = "Burhan Arshad";
console.log('   var str = "Burhan Arshad";');
console.log("   str.slice(1, 10) → \"" + str7.slice(1, 10) + "\"");
console.log("   str.slice(7)     → \"" + str7.slice(7) + "\"");
console.log("   str.slice(-6)    → \"" + str7.slice(-6) + "\"\n");

// --- 8. substr() ---
console.log("8. substr():\n");
console.log("   str.substr(3, 5) → \"" + str7.substr(3, 5) + "\"  (start 3, length 5)");
console.log("   (deprecated — prefer slice/substring)\n");

// --- 9. substring() ---
console.log("9. substring():\n");
console.log("   str.substring(1, 5) → \"" + str7.substring(1, 5) + "\"");
console.log("   (end index is EXCLUSIVE)\n");

// --- 10. toString() ---
console.log("10. toString():\n");
var num = 50;
console.log("   var str = 50;");
console.log("   str.toString() + 20 → " + (num.toString() + 20) + "  (string concat, not math)");
console.log("   50 + 20 (number)     → " + (50 + 20));
console.log();

// --- 11. valueOf() ---
console.log("11. valueOf():\n");
var str11 = "Burhan Arshad";
console.log('   "Burhan Arshad".valueOf() → "' + str11.valueOf() + '"\n');

// --- Comparison table ---
console.log("slice() vs substr() vs substring():\n");
console.log("   str = \"Burhan Arshad\"");
console.log("   ┌───────────────────┬────────────────────┬─────────────────┐");
console.log("   │ Method            │ Parameters         │ Result          │");
console.log("   ├───────────────────┼────────────────────┼─────────────────┤");
console.log('   │ slice(1, 10)      │ start, end (excl)  │ "urhan Arsh"    │');
console.log('   │ substr(3, 5)      │ start, length      │ "han A"         │');
console.log('   │ substring(1, 5)   │ start, end (excl)  │ "urha"          │');
console.log("   └───────────────────┴────────────────────┴─────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - charAt() for individual characters");
console.log("   - Prefer slice() over deprecated substr()");
console.log("   - Use split(\"\") for array of characters");
console.log("   - Use repeat() for patterns");
console.log("   - substring() excludes end index");
console.log("   - Chain methods: str.trim().toUpperCase()\n");

console.log("==========================================");
console.log("   ✅ String Methods II — extract & transform.");
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

    log('str.charAt(3)              → "' + str1.charAt(3) + '"');
    log('str.charCodeAt(4)          → ' + str1.charCodeAt(4));
    log('String.fromCharCode(65)    → "' + String.fromCharCode(65) + '"');
    log('"Burhan ".repeat(2)        → "' + str6.repeat(2) + '"');
    log('"Burhan Arshad".slice(1,10) → "' + str7.slice(1, 10) + '"');
    log('"Burhan Arshad".substr(3,5) → "' + str7.substr(3, 5) + '"');
    log('"Burhan Arshad".substring(1,5) → "' + str7.substring(1, 5) + '"');
    log("(50).toString() + 20       → " + (50).toString() + 20);
  });
}
