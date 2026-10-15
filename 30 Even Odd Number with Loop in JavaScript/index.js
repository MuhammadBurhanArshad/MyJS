// ==========================================
// 30 Even/Odd Number with Loop in JavaScript
// Uses modulus % to determine even or odd
// ==========================================

console.log("==========================================");
console.log("   30 - Even/Odd Number with Loop");
console.log("==========================================\n");

// --- Rule ---
console.log("Rule:");
console.log("   a % 2 === 0 → Even number");
console.log("   a % 2 !== 0 → Odd number\n");

// --- Finding Even Numbers (1 to 20) ---
console.log("Finding Even Numbers (1 to 20):\n");
console.log("   for (var a = 1; a <= 20; a++) {");
console.log("       if (a % 2 == 0) {");
console.log('           document.write(a + " is Even");');
console.log("       }");
console.log("   }\n");

let evenList = "   Even: ";
for (var a = 1; a <= 20; a++) {
  if (a % 2 === 0) {
    evenList += a + " ";
  }
}
console.log(evenList + "\n");

// --- Finding Odd Numbers (1 to 20) ---
console.log("Finding Odd Numbers (1 to 20):\n");
console.log("   for (var a = 1; a <= 20; a++) {");
console.log("       if (a % 2 != 0) {");
console.log('           document.write(a + " is Odd");');
console.log("       }");
console.log("   }\n");

let oddList = "   Odd: ";
for (var b = 1; b <= 20; b++) {
  if (b % 2 !== 0) {
    oddList += b + " ";
  }
}
console.log(oddList + "\n");

// --- Both Even and Odd in one loop ---
console.log("Both Even and Odd (1 to 10):\n");
console.log("   for (var a = 1; a <= 10; a++) {");
console.log("       if (a % 2 == 0) {");
console.log('           document.write(a + " → Even");');
console.log("       } else {");
console.log('           document.write(a + " → Odd");');
console.log("       }");
console.log("   }\n");

console.log("   Output:");
for (var c = 1; c <= 10; c++) {
  if (c % 2 === 0) {
    console.log("      " + c + " → Even");
  } else {
    console.log("      " + c + " → Odd");
  }
}
console.log();

// --- Modulus table ---
console.log("Modulus Examples:");
console.log("   4 % 2  = " + (4 % 2) + "  → Even");
console.log("   5 % 2  = " + (5 % 2) + "  → Odd");
console.log("   10 % 2 = " + (10 % 2) + "  → Even");
console.log("   11 % 2 = " + (11 % 2) + "  → Odd");
console.log();

// --- Even numbers up to 100 ---
console.log("Even numbers from 1 to 100 (as in notes):\n");
console.log("   for (var a = 1; a <= 100; a++) {");
console.log("       if (a % 2 == 0) { document.write(a); }");
console.log("   }\n");

let even100 = [];
for (var d = 1; d <= 100; d++) {
  if (d % 2 === 0) {
    even100.push(d);
  }
}
console.log("   Total even numbers (1–100): " + even100.length);
console.log("   First 10: " + even100.slice(0, 10).join(", ") + "...\n");

// --- Odd numbers up to 100 ---
console.log("Odd numbers from 1 to 100:\n");

let odd100 = [];
for (var e = 1; e <= 100; e++) {
  if (e % 2 !== 0) {
    odd100.push(e);
  }
}
console.log("   Total odd numbers (1–100): " + odd100.length);
console.log("   First 10: " + odd100.slice(0, 10).join(", ") + "...\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use === and !== instead of == and !=");
console.log("   - Prefer let over var in modern code");
console.log("   - Keep conditions simple and readable");
console.log("   - Combine both checks in one if else when needed\n");

console.log("==========================================");
console.log("   ✅ % 2 === 0 → Even    % 2 !== 0 → Odd");
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

    log("Even & Odd numbers from 1 to 20:");

    for (var i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        log("   " + i + " → Even");
      } else {
        log("   " + i + " → Odd");
      }
    }
  });
}
