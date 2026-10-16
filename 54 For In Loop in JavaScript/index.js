// ==========================================
// 54 JavaScript For/In Loop
// Iterates over the KEYS of an object
// ==========================================

console.log("==========================================");
console.log("   54 - For/In Loop");
console.log("==========================================\n");

// --- Target ---
console.log("Target:");
console.log("   for/in loop → iterate over object properties\n");

// --- Object definition ---
console.log("Object Definition:\n");
console.log("   var obj = {");
console.log('       fname: "Burhan",');
console.log('       lname: "Arshad",');
console.log("       age: 18");
console.log("   };\n");

var obj = {
  fname: "Burhan",
  lname: "Arshad",
  age: 18
};

// --- 1. Print values only ---
console.log("1. Print Values Only:\n");
console.log("   for (var key in obj) {");
console.log("       document.write(obj[key]);");
console.log("   }\n");

let valuesOutput = "";
for (var key in obj) {
  valuesOutput += obj[key];
}
console.log("   Output: " + valuesOutput + "\n");

// --- 2. Print key + value ---
console.log("2. Print Key + Value:\n");
console.log('   document.write(key + ": " + obj[key]);\n');

console.log("   Output:");
for (var key in obj) {
  console.log("      " + key + ": " + obj[key]);
}
console.log();

// --- 3. Print with separator ---
console.log("3. Print with ' = ' separator:\n");
console.log('   document.write(key + " = " + obj[key] + "<br>");\n');

console.log("   Output:");
for (var k in obj) {
  console.log("      " + k + " = " + obj[k]);
}
console.log();

// --- 4. for...in on array ---
console.log("4. for...in on Array:\n");
var arr = ["Sanjay", "Aman", "Burhan"];
console.log("   var arr = [" + arr.map(x => '"' + x + '"').join(", ") + "];\n");
console.log("   for (var i in arr) {");
console.log("       document.write(i + ': ' + arr[i]);");
console.log("   }\n");

console.log("   Output:");
for (var i in arr) {
  console.log("      " + i + ": " + arr[i]);
}
console.log();

// --- 5. Count properties ---
console.log("5. Count Properties:\n");
let propCount = 0;
for (var key in obj) {
  propCount++;
}
console.log("   Total properties in obj: " + propCount + "\n");

// --- Comparison table ---
console.log("for...in vs for...of:");
console.log("   ┌────────────────┬──────────────────────┬──────────────────┐");
console.log("   │ Feature        │ for...in             │ for...of         │");
console.log("   ├────────────────┼──────────────────────┼──────────────────┤");
console.log("   │ Iterates over  │ Keys / indexes       │ Values           │");
console.log("   │ Best for       │ Objects              │ Arrays, strings  │");
console.log("   │ Order          │ Not guaranteed       │ Guaranteed       │");
console.log("   │ Example        │ for (k in obj)       │ for (v of arr)   │");
console.log("   └────────────────┴──────────────────────┴──────────────────┘");
console.log();

// --- Key point ---
console.log("Key Point:");
console.log("   - for loop is for printing object");
console.log("   - for printing the KEY of an object,");
console.log("     we use  key  before the object variable");
console.log("   - Access values with obj[key] (brackets)\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - for...in → for objects");
console.log("   - for...of → for arrays");
console.log("   - Use obj[key] not obj.key (key is a variable)");
console.log("   - Use hasOwnProperty() to skip inherited props");
console.log("   - Prefer Object.keys() for simple key iteration\n");

console.log("==========================================");
console.log("   ✅ for...in iterates over object KEYS.");
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

    log("Object obj — Key + Value:");
    for (var key in obj) {
      log("   " + key + " = " + obj[key]);
    }
    log("");
    log("Total properties: " + propCount);
    log("");
    log("Array arr — Index + Value:");
    for (var idx in arr) {
      log("   " + idx + ": " + arr[idx]);
    }
  });
}
