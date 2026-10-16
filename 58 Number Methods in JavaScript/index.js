// ==========================================
// 58 JavaScript Number Methods
// Number() parseInt() parseFloat()
// isFinite() isInteger() toFixed() toPrecision()
// ==========================================

console.log("==========================================");
console.log("   58 - Number Methods");
console.log("==========================================\n");

// --- List ---
console.log("List of Number Methods:");
["Number()", "parseInt()", "parseFloat()", "isFinite()",
 "isInteger()", "toFixed()", "toPrecision()"]
  .forEach((m) => console.log("   - " + m));
console.log();

// --- 1. Number() ---
console.log("1. Number() — Convert to Number:\n");
var s1 = "99";
var n1 = Number(s1);
console.log('   var a = "99";');
console.log("   Number(a) + 10 → " + (n1 + 10));
console.log('   ("99" + 10 without conversion → "' + ("99" + 10) + '")\n');

// --- 2. parseInt() ---
console.log("2. parseInt() — Convert to Integer:\n");
var s2 = "99.99";
var n2 = parseInt(s2);
console.log('   parseInt("99.99") → ' + n2 + "  (decimal removed)");
console.log('   parseInt("42abc") → ' + parseInt("42abc"));
console.log();

// --- 3. parseFloat() ---
console.log("3. parseFloat() — Extract Decimal:\n");
var s3 = "10.3";
var n3 = parseFloat(s3);
console.log('   parseFloat("10.3") → ' + n3);
console.log('   parseFloat("3.14pi") → ' + parseFloat("3.14pi"));
console.log();

// --- 4. isFinite() ---
console.log("4. isFinite() — Check Finite:\n");
console.log("   isFinite(100)      → " + isFinite(100));
console.log("   isFinite(Infinity) → " + isFinite(Infinity));
console.log("   isFinite(NaN)      → " + isFinite(NaN));
console.log('   isFinite("abc")    → ' + isFinite("abc"));
console.log();

// --- 5. isInteger() ---
console.log("5. isInteger() — Check Integer:\n");
console.log("   Number.isInteger(10)    → " + Number.isInteger(10));
console.log("   Number.isInteger(10.50) → " + Number.isInteger(10.50));
console.log('   Number.isInteger("10")  → ' + Number.isInteger("10"));
console.log();

// --- 6. toFixed() ---
console.log("6. toFixed() — Round to Decimal Places:\n");
var a6 = 5.56789;
console.log("   var a = 5.56789;");
console.log("   a.toFixed(0) → " + a6.toFixed(0));
console.log("   a.toFixed(1) → " + a6.toFixed(1));
console.log("   a.toFixed(2) → " + a6.toFixed(2));
console.log("   a.toFixed(3) → " + a6.toFixed(3));
console.log();

// --- 7. toPrecision() ---
console.log("7. toPrecision() — Round to Significant Digits:\n");
var a7 = 5.36789;
console.log("   var a = 5.36789;");
console.log("   a.toPrecision(1) → " + a7.toPrecision(1));
console.log("   a.toPrecision(2) → " + a7.toPrecision(2));
console.log("   a.toPrecision(3) → " + a7.toPrecision(3));
console.log("   a.toPrecision(4) → " + a7.toPrecision(4));
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────────┬───────────────────────────┬───────────────┐");
console.log("   │ Method       │ Purpose                   │ Returns       │");
console.log("   ├──────────────┼───────────────────────────┼───────────────┤");
console.log("   │ Number()     │ Convert to number         │ Number        │");
console.log("   │ parseInt()   │ Convert to integer        │ Integer       │");
console.log("   │ parseFloat() │ Extract decimal           │ Decimal       │");
console.log("   │ isFinite()   │ Check if finite           │ true / false  │");
console.log("   │ isInteger()  │ Check if integer          │ true / false  │");
console.log("   │ toFixed(n)   │ Round to n decimals       │ String        │");
console.log("   │ toPrecision()│ Round to n sig. digits    │ String        │");
console.log("   └──────────────┴───────────────────────────┴───────────────┘");
console.log();

// --- toFixed vs toPrecision ---
console.log("toFixed vs toPrecision (5.56789):");
console.log('   toFixed(3)     → "' + (5.56789).toFixed(3) + '"  (3 decimal places)');
console.log('   toPrecision(3) → "' + (5.56789).toPrecision(3) + '"  (3 significant digits)');
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Number() for general conversions");
console.log('   - parseInt("FF", 16) → ' + parseInt("FF", 16) + "  (with radix)");
console.log("   - Use Number.isInteger() (capital N)");
console.log("   - toFixed/toPrecision RETURN strings");
console.log("   - Validate before math on user input\n");

console.log("==========================================");
console.log("   ✅ Number methods — convert, validate, format.");
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

    log('Number("99") + 10          → ' + (Number("99") + 10));
    log('parseInt("99.99")          → ' + parseInt("99.99"));
    log('parseFloat("10.3")         → ' + parseFloat("10.3"));
    log("isFinite(100)              → " + isFinite(100));
    log("Number.isInteger(10.50)    → " + Number.isInteger(10.50));
    log("(5.56789).toFixed(3)       → " + (5.56789).toFixed(3));
    log("(5.36789).toPrecision(2)   → " + (5.36789).toPrecision(2));
  });
}
