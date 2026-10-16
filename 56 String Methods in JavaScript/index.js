// ==========================================
// 56 JavaScript String Methods
// Built-in methods for string operations
// ==========================================

console.log("==========================================");
console.log("   56 - String Methods");
console.log("==========================================\n");

// --- List ---
console.log("List of String Methods:");
["length", "toLowerCase()", "toUpperCase()", "includes()", "startsWith()",
 "endsWith()", "search()", "match()", "indexOf()", "lastIndexOf()",
 "replace()", "trim()", "split()", "concat()", "repeat()", "slice()",
 "substr()", "substring()", "charAt()", "charCodeAt()", "fromCharCode()",
 "toString()", "valueOf()"]
  .forEach((m) => console.log("   - " + m));
console.log();

// --- 1. length ---
console.log("1. length — Character Counting:\n");
var str1 = "JavaScript is a Great Language";
console.log('   var str = "JavaScript is a Great Language";');
console.log("   str.length → " + str1.length + "\n");

// --- 2. toLowerCase ---
console.log("2. toLowerCase():\n");
var str2 = "Burhan";
console.log('   "Burhan".toLowerCase() → "' + str2.toLowerCase() + '"\n');

// --- 3. toUpperCase ---
console.log("3. toUpperCase():\n");
console.log('   "Burhan".toUpperCase() → "' + str2.toUpperCase() + '"\n');

// --- 4. includes ---
console.log("4. includes():\n");
console.log('   "Burhan".includes("Burhan") → ' + str2.includes("Burhan"));
console.log('   "Burhan".includes("burhan") → ' + str2.includes("burhan") + "  (case-sensitive)\n");

// --- 5. startsWith ---
console.log("5. startsWith():\n");
var str3 = "Burhan is a good boy";
console.log('   str = "Burhan is a good boy"');
console.log('   str.startsWith("Burhan") → ' + str3.startsWith("Burhan") + "\n");

// --- 6. endsWith ---
console.log("6. endsWith():\n");
console.log('   str.endsWith("boy") → ' + str3.endsWith("boy") + "\n");

// --- 7. search ---
console.log("7. search():\n");
var str4 = "Burhan Arshad";
console.log('   var str = "Burhan Arshad";');
console.log('   str.search("Arshad") → ' + str4.search("Arshad"));
console.log('   str.search("Mango")  → ' + str4.search("Mango") + "  (not found)\n");

// --- 8. match ---
console.log("8. match():\n");
console.log('   var str = "Burhan is a good boy";');
var matches = str3.match(/is/g);
console.log('   str.match(/is/g) → ' + JSON.stringify(matches));
console.log("   (uses regular expressions)\n");

// --- 9. indexOf ---
console.log("9. indexOf():\n");
console.log('   "Burhan is a good boy".indexOf("is") → ' + str3.indexOf("is") + "\n");

// --- 10. lastIndexOf ---
console.log("10. lastIndexOf():\n");
console.log('   "Burhan is a good boy".lastIndexOf("is") → ' + str3.lastIndexOf("is") + "\n");

// --- 11. replace ---
console.log("11. replace():\n");
var str5 = "JavaScript is a great language";
console.log('   var str = "JavaScript is a great language";');
var replaced = str5.replace("JavaScript", "PHP");
console.log('   str.replace("JavaScript", "PHP")');
console.log('   → "' + replaced + '"\n');

// --- 12. trim ---
console.log("12. trim():\n");
var str6 = "   Burhan   ";
console.log('   var str = "   Burhan   ";');
console.log('   str.trim() → "' + str6.trim() + '"');
console.log("   (removes leading and trailing spaces)\n");

// --- Bonus examples ---
console.log("Bonus Examples:\n");

// split
var fruits = "Apple,Banana,Cherry";
console.log('   "Apple,Banana,Cherry".split(",")');
console.log("   → " + JSON.stringify(fruits.split(",")));

// concat
console.log('   "Hello".concat(" ", "World") → "' + "Hello".concat(" ", "World") + '"');

// repeat
console.log('   "ab".repeat(3) → "' + "ab".repeat(3) + '"');

// charAt
console.log('   "Burhan".charAt(0) → "' + "Burhan".charAt(0) + '"');

// slice
console.log('   "Burhan Arshad".slice(0, 6) → "' + "Burhan Arshad".slice(0, 6) + '"');
console.log();

// --- Case-sensitive summary ---
console.log("Case Sensitivity:");
console.log("   includes()   → case-sensitive");
console.log("   startsWith() → case-sensitive");
console.log("   endsWith()   → case-sensitive");
console.log("   search()     → case-sensitive");
console.log("   match()      → case-sensitive");
console.log("   indexOf()    → case-sensitive");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - length is a property, not a function");
console.log("   - String methods are case-sensitive");
console.log("   - includes() for existence, indexOf() for position");
console.log("   - trim() to clean user input");
console.log("   - Chain methods: str.trim().toLowerCase()\n");

console.log("==========================================");
console.log("   ✅ 20+ string methods for text manipulation.");
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

    log('str.length                → ' + str1.length);
    log('"Burhan".toLowerCase()    → ' + str2.toLowerCase());
    log('"Burhan".toUpperCase()    → ' + str2.toUpperCase());
    log('str.includes("Burhan")    → ' + str2.includes("Burhan"));
    log('str3.startsWith("Burhan") → ' + str3.startsWith("Burhan"));
    log('str3.endsWith("boy")      → ' + str3.endsWith("boy"));
    log('str4.search("Arshad")     → ' + str4.search("Arshad"));
    log('str3.indexOf("is")        → ' + str3.indexOf("is"));
    log('str5.replace(JS, PHP)     → "' + replaced + '"');
    log('"   Burhan   ".trim()     → "' + str6.trim() + '"');
  });
}
