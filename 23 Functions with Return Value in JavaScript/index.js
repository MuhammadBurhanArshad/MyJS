// ==========================================
// 23 JavaScript Functions with Return Value
// return sends a value back to the caller
// ==========================================

console.log("==========================================");
console.log("   23 - Functions with Return Value");
console.log("==========================================\n");

// --- What is return? ---
console.log("return is used for returning a value from a function.\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   function functionName(parameter1, parameter2) {");
console.log("       statements");
console.log("       return value;");
console.log("   }\n");
console.log("   var a = functionName(argument1, argument2);\n");

// --- Example from notes: sum with return ---
console.log("Example — sum(a, b):\n");
console.log("   function sum(a, b) {");
console.log("       return a + b;");
console.log("   }");
console.log("   var result = sum(10, 20);");
console.log("   document.write(result);\n");

function sum(a, b) {
  return a + b;
}

var result = sum(10, 20);
console.log("   result = " + result + "\n");

// --- Multiply with return ---
console.log("Example — multiply(x, y):\n");

function multiply(x, y) {
  return x * y;
}

var total = multiply(5, 4);
console.log("   multiply(5, 4) → " + total + "\n");

// --- Greet with return ---
console.log("Example — greet(name):\n");

function greet(name) {
  return "Hello, " + name + "!";
}

var msg = greet("Burhan");
console.log("   greet(\"Burhan\") → " + msg + "\n");

// --- Max of two numbers ---
console.log("Example — max(a, b):\n");

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log("   max(15, 25) → " + max(15, 25));
console.log("   max(50, 20) → " + max(50, 20) + "\n");

// --- return vs document.write ---
console.log("return vs document.write:");
console.log("   document.write → prints to the page");
console.log("   return         → sends value back to caller");
console.log("   return value can be stored and reused\n");

// --- Key points ---
console.log("Key Points About return:");
console.log("   1. Ends the function immediately");
console.log("   2. Only ONE value can be returned");
console.log("   3. Without return, function returns undefined");
console.log("   4. Returned value can be stored / printed / passed");
console.log("   5. Code after return never runs\n");

console.log("==========================================");
console.log("   ✅ return sends a value back to the caller.");
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

    log("sum(10, 20)      → " + sum(10, 20));
    log("multiply(5, 4)   → " + multiply(5, 4));
    log('greet("Burhan")  → ' + greet("Burhan"));
    log("max(15, 25)      → " + max(15, 25));
    log("max(50, 20)      → " + max(50, 20));
  });
}
