// ==========================================
// 07 JavaScript Data Types
// Types: String, Number, Boolean, Array,
//        Object, Null, Undefined
// Use typeof to check a variable's type
// ==========================================

console.log("==========================================");
console.log("   07 - JavaScript Data Types");
console.log("==========================================\n");

// --- 1. What is a Data Type ---
console.log("1. A data type describes the kind of value a variable holds.");
console.log('   Example: var x = "Hello World";  → String\n');

// --- 2. Different Types of Data ---
console.log("2. Different Types of Data:\n");

var strVal = "Hello World";
console.log('   var x = "Hello World";              →', typeof strVal);

var numVal = 25;
console.log("   var x = 25;                         →", typeof numVal);

var boolVal = true;
console.log("   var x = true;                       →", typeof boolVal);

var arrVal = ["HTML", "CSS", "JS"];
console.log('   var x = ["HTML","CSS","JS"];        →', typeof arrVal, "(Array is an Object)");

var objVal = { first: "Burhan", last: "Arshad" };
console.log('   var x = {first:"Burhan",last:"Arshad"}; →', typeof objVal);

var nullVal = null;
console.log("   var x = null;                       →", typeof nullVal, "(known JS quirk)");

var undefVal;
console.log("   var x;                              →", typeof undefVal);

console.log();

// --- 3. typeof Operator ---
console.log("3. typeof operator returns the type as a string:");
console.log('   document.write(typeof x);');
console.log();

console.log("   typeof \"Hello\"               →", typeof "Hello");
console.log("   typeof 25                    →", typeof 25);
console.log("   typeof true                  →", typeof true);
console.log("   typeof [\"HTML\"]              →", typeof ["HTML"]);
console.log("   typeof {a:1}                 →", typeof { a: 1 });
console.log("   typeof null                  →", typeof null);
console.log("   typeof undefined             →", typeof undefined);
console.log();

console.log("==========================================");
console.log("   ✅ Arrays are Objects in JavaScript.");
console.log("   ✅ Use typeof to check a variable's type.");
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

    log('typeof "Hello World"  → ' + typeof strVal);
    log("typeof 25             → " + typeof numVal);
    log("typeof true           → " + typeof boolVal);
    log('typeof ["HTML","CSS","JS"] → ' + typeof arrVal);
    log('typeof {first,last}   → ' + typeof objVal);
    log("typeof null           → " + typeof nullVal);
    log("typeof undefined      → " + typeof undefVal);
  });
}
