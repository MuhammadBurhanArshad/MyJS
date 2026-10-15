// ==========================================
// 22 JavaScript Function with Parameters
// Parameters = variables in function definition
// Arguments  = actual values passed in the call
// ==========================================

console.log("==========================================");
console.log("   22 - Function with Parameters");
console.log("==========================================\n");

// --- What are parameters? ---
console.log("Parameters vs Arguments:");
console.log("   Parameter → variable in the function definition");
console.log("   Argument  → actual value passed at call time\n");

// --- Syntax ---
console.log("Syntax:");
console.log("   function functionName(parameter1, parameter2) {");
console.log("       statement");
console.log("   }\n");
console.log("   functionName(argument1, argument2);\n");

// --- Example from notes: sum(a, b) ---
console.log("Example — sum(a, b):\n");
console.log("   function sum(a, b) {");
console.log("       document.write(a + b);");
console.log("   }");
console.log("   sum(10, 20);");
console.log("   sum(20, 30);\n");

function sum(a, b) {
  console.log("   sum(" + a + ", " + b + ") → " + (a + b));
}

console.log("   Output:");
sum(10, 20);
sum(20, 30);
console.log();

// --- Greet by name ---
console.log("Example — Greet by Name:\n");

function greet(name) {
  console.log("   greet(\"" + name + "\") → Hello, " + name + "!");
}

console.log("   function greet(name) {");
console.log('       document.write("Hello, " + name + "!");');
console.log("   }\n");

greet("Burhan");
greet("Ali");
console.log();

// --- Multiply two numbers ---
console.log("Example — Multiply:\n");

function multiply(x, y) {
  console.log("   multiply(" + x + ", " + y + ") → " + (x * y));
}

console.log("   function multiply(x, y) {");
console.log("       document.write(x * y);");
console.log("   }\n");

multiply(5, 4);
multiply(10, 3);
console.log();

// --- Parameter vs Argument table ---
console.log("Parameter vs Argument:");
console.log("   ┌───────────┬────────────────────────┬─────────────────┐");
console.log("   │ Term      │ Meaning                │ Example         │");
console.log("   ├───────────┼────────────────────────┼─────────────────┤");
console.log("   │ Parameter │ Variable in definition │ a, b            │");
console.log("   │ Argument  │ Actual value passed    │ 10, 20          │");
console.log("   └───────────┴────────────────────────┴─────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use meaningful parameter names");
console.log("   - Keep parameter count small");
console.log("   - Match argument order with parameter order");
console.log("   - Use parameters to avoid repetition");
console.log();

console.log("==========================================");
console.log("   ✅ Parameters make functions flexible.");
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

    log("sum(10, 20)        → " + (10 + 20));
    log("sum(20, 30)        → " + (20 + 30));
    log('greet("Burhan")    → Hello, Burhan!');
    log('greet("Ali")       → Hello, Ali!');
    log("multiply(5, 4)     → " + (5 * 4));
    log("multiply(10, 3)    → " + (10 * 3));
  });
}
