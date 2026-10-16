// ==========================================
// 53 JavaScript const variable with Array & Objects
// const locks the BINDING, not the VALUE
// ==========================================

console.log("==========================================");
console.log("   53 - Const Variable with Array & Objects");
console.log("==========================================\n");

// --- Rule ---
console.log("Rule:");
console.log("   We can't assign const variable multiple times.\n");

// --- 1. const with Array — Changing values (allowed) ---
console.log("1. const with Array — Changing Values:\n");
console.log("   const a = [10, 20, 30];");
console.log("   a[1] = 25;");
console.log("   console.log(a);   // [10, 25, 30]\n");

const a = [10, 20, 30];
a[1] = 25;
console.log("   Output: [" + a.join(", ") + "]\n");

// --- 2. const with Array — Reassigning (not allowed) ---
console.log("2. const with Array — Reassigning (NOT allowed):\n");
console.log("   const b = [10, 20, 30];");
console.log("   b = [1, 2, 3];   // ❌ TypeError\n");

const b = [10, 20, 30];
try {
  // Deliberately attempt reassignment to demonstrate the error
  eval("b = [1, 2, 3]");
} catch (e) {
  console.log("   ❌ " + e.constructor.name + ": " + e.message + "\n");
}

// --- 3. const with Object — Changing properties (allowed) ---
console.log("3. const with Object — Changing Properties:\n");
console.log("   const c = {");
console.log('       name: "Burhan",');
console.log("       age: 18");
console.log("   };");
console.log('   c.name = "Burhan Arshad";');
console.log("   console.log(c);\n");

const c = { name: "Burhan", age: 18 };
c.name = "Burhan Arshad";
console.log("   Output: " + JSON.stringify(c) + "\n");

// --- 4. const with Object — Reassigning (not allowed) ---
console.log("4. const with Object — Reassigning (NOT allowed):\n");
console.log("   const d = { name: \"Burhan\" };");
console.log("   d = { name: \"Aman\" };   // ❌ TypeError\n");

const d = { name: "Burhan" };
try {
  eval("d = { name: 'Aman' }");
} catch (e) {
  console.log("   ❌ " + e.constructor.name + ": " + e.message + "\n");
}

// --- 5. Side-by-side example ---
console.log("5. Side-by-Side Example:\n");

const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
fruits[0] = "Mango";
console.log("   const fruits — after push + update:");
console.log("      [" + fruits.join(", ") + "]");
console.log();

const person = { name: "Burhan", age: 18 };
person.age = 19;
person.city = "Lahore";
console.log("   const person — after update + add:");
console.log("      " + JSON.stringify(person));
console.log();

// --- Summary table ---
console.log("Summary Table:");
console.log("   ┌──────────────────────────────┬───────────┬───────────┐");
console.log("   │ Action                       │ Array     │ Object    │");
console.log("   ├──────────────────────────────┼───────────┼───────────┤");
console.log("   │ Modify elements/properties   │ ✅ Yes    │ ✅ Yes    │");
console.log("   │ Add elements/properties      │ ✅ Yes    │ ✅ Yes    │");
console.log("   │ Delete elements/properties   │ ✅ Yes    │ ✅ Yes    │");
console.log("   │ Reassign the whole variable  │ ❌ No     │ ❌ No     │");
console.log("   └──────────────────────────────┴───────────┴───────────┘");
console.log();

// --- Why does this work ---
console.log("Why Does This Work?");
console.log("   const locks the BINDING (variable name),");
console.log("   NOT the VALUE (array/object).");
console.log("   The name must point to the same value,");
console.log("   but that value can still be modified.\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use const for arrays/objects by default");
console.log("   - Modify contents freely");
console.log("   - Use Object.freeze() for real immutability");
console.log("   - Use let if you need to reassign");
console.log("   - Remember: const locks binding, not value\n");

console.log("==========================================");
console.log("   ✅ const = no reassign, but still mutable.");
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

    log('const a = [10, 20, 30];');
    log("   a[1] = 25 → [" + a.join(", ") + "]");
    log("");
    log('const c = { name: "Burhan", age: 18 };');
    log('   c.name = "Burhan Arshad" → ' + JSON.stringify(c));
    log("");
    log('const fruits = ["Apple", "Banana"];');
    log("   push + update → [" + fruits.join(", ") + "]");
  });
}
