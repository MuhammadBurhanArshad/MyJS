// ==========================================
// 51 JavaScript Object Part II
// Second way to create an object: new Object()
// ==========================================

console.log("==========================================");
console.log("   51 - Object Part II");
console.log("==========================================\n");

// --- Target method ---
console.log("Target Method:");
console.log("   new Object() → creates an empty object\n");

// --- Method II: Creating an object ---
console.log("Creating an Object — Method II:\n");
console.log("   var a = new Object();");
console.log('   a.firstName = "Tom";');
console.log('   a.lastName = "Burhan";\n');

var a = new Object();
a.firstName = "Tom";
a.lastName = "Burhan";

console.log("Saved object a =");
console.log(a);
console.log();

// --- Three ways to access ---
console.log("Three Ways to Access the Object:\n");

console.log("1. console.log(a):");
console.log(a);
console.log();

console.log("2. document.write(a.firstName):");
console.log("   → " + a.firstName);
console.log();

console.log('3. document.write(a["firstName"]):');
console.log("   → " + a["firstName"]);
console.log();

// --- Two ways comparison ---
console.log("Two Ways to Create an Object:\n");

console.log("Method I (Literal):");
var obj1 = { firstName: "Tom", lastName: "Burhan" };
console.log('   var a = { firstName: "Tom", lastName: "Burhan" };');
console.log("   → " + JSON.stringify(obj1));
console.log();

console.log("Method II (Constructor):");
var obj2 = new Object();
obj2.firstName = "Tom";
obj2.lastName = "Burhan";
console.log("   var a = new Object();");
console.log('   a.firstName = "Tom";');
console.log('   a.lastName = "Burhan";');
console.log("   → " + JSON.stringify(obj2));
console.log();

// --- Adding properties dynamically ---
console.log("Adding Properties Dynamically:\n");
var user = new Object();
user.name = "Burhan";
user.age = 18;
user.email = "burhan@example.com";

console.log("   var user = new Object();");
console.log('   user.name = "Burhan";');
console.log("   user.age = 18;");
console.log('   user.email = "burhan@example.com";');
console.log();
console.log("   user =");
console.log(user);
console.log();

// --- Comparison table ---
console.log("Comparison:");
console.log("   ┌──────────────────┬────────────────┬────────────────┐");
console.log("   │ Feature          │ Literal { }    │ new Object()   │");
console.log("   ├──────────────────┼────────────────┼────────────────┤");
console.log("   │ Syntax           │ Short          │ Longer         │");
console.log("   │ Readability      │ ✅ Clear       │ ⚠️  Verbose    │");
console.log("   │ Modern preferred │ ✅ Yes         │ ⚠️  Rarely     │");
console.log("   │ Add props later  │ Possible       │ Common         │");
console.log("   │ Empty first      │ ❌ No          │ ✅ Yes         │");
console.log("   └──────────────────┴────────────────┴────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Prefer literal { } in modern JS");
console.log("   - Use new Object() when adding dynamically");
console.log("   - Dot notation for readability");
console.log("   - Bracket notation when key is a variable");
console.log("   - console.log() for debugging whole objects\n");

console.log("==========================================");
console.log("   ✅ Method II: new Object() + assign props.");
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

    log("Method II object a:");
    log("   a.firstName              → " + a.firstName);
    log('   a["firstName"]           → ' + a["firstName"]);
    log("   a.lastName               → " + a.lastName);
    log("");
    log("Dynamic object user:");
    log("   user.name  → " + user.name);
    log("   user.age   → " + user.age);
    log("   user.email → " + user.email);
  });
}
