// ==========================================
// 50 JavaScript Objects
// Collection of key-value pairs
// Uses { } instead of [ ]
// Uses property names instead of indexes
// ==========================================

console.log("==========================================");
console.log("   50 - Objects");
console.log("==========================================\n");

// --- What is an Object? ---
console.log("What is an Object?");
console.log("   - Object is like an array");
console.log("   - It's the advance version of an array");
console.log("   - We use { } instead of [ ]");
console.log("   - We use name for value instead of index\n");

// --- Array vs Object ---
console.log("Array (index-based):");
var arr = ["Sanjay", "Aman", "Burhan"];
console.log("   var a = [" + arr.map(x => '"' + x + '"').join(", ") + "];");
console.log("             0        1        2\n");

console.log("Object (property-based):");
var obj = {
  firstName: "Sanjay",
  lastName: "Aman",
  age: 18,
  country: "Pakistan"
};
console.log("   var a = {");
console.log('       firstName: "Sanjay",');
console.log('       lastName: "Aman",');
console.log("       age: 18,");
console.log('       country: "Pakistan"');
console.log("   };\n");

// --- Example from notes ---
console.log("Example from notes:\n");
console.log("   var a = {");
console.log('       fname: "Muhammad Burhan",');
console.log('       lname: "Arshad",');
console.log("       age: 18,");
console.log('       email: "burhantheschoolboy@gmail.com"');
console.log("   };\n");

var a = {
  fname: "Muhammad Burhan",
  lname: "Arshad",
  age: 18,
  email: "burhantheschoolboy@gmail.com"
};

console.log("   Accessing properties:");
console.log("   document.write(a.fname);  → " + a.fname);
console.log("   document.write(a.lname);  → " + a.lname);
console.log("   document.write(a.age);    → " + a.age);
console.log("   document.write(a.email);  → " + a.email);
console.log();

// --- Mixed types ---
console.log("Storing Different Types in an Object:\n");
console.log("   We can store array, string, number, and function in it");
console.log("   — also object in object.\n");

var person = {
  name: "Burhan",                 // string
  age: 18,                        // number
  hobbies: ["Coding", "Reading"], // array
  greet: function () {            // function
    return "Hello!";
  },
  address: {                      // object in object
    city: "Lahore",
    country: "Pakistan"
  }
};

console.log("   var person = {");
console.log('       name: "Burhan",');
console.log("       age: 18,");
console.log('       hobbies: ["Coding", "Reading"],');
console.log('       greet: function () { return "Hello!"; },');
console.log('       address: { city: "Lahore", country: "Pakistan" }');
console.log("   };\n");

console.log("   Accessing nested values:");
console.log("   person.name            → " + person.name);
console.log("   person.age             → " + person.age);
console.log("   person.hobbies[0]      → " + person.hobbies[0]);
console.log("   person.greet()         → " + person.greet());
console.log("   person.address.city    → " + person.address.city);
console.log("   person.address.country → " + person.address.country);
console.log();

// --- Two ways to access ---
console.log("Two Ways to Access Properties:\n");
console.log("   Dot notation:     a.fname        → " + a.fname);
console.log('   Bracket notation: a["fname"]     → ' + a["fname"]);
console.log('   Bracket (variable): a["age"]     → ' + a["age"]);
console.log();

// --- Adding & Updating ---
console.log("Adding & Updating Properties:\n");
var b = { fname: "Burhan" };
console.log('   var b = { fname: "Burhan" };');

b.age = 18;
console.log('   b.age = 18;            → ' + b.age);

b.fname = "Muhammad";
console.log('   b.fname = "Muhammad";  → ' + b.fname);
console.log();

// --- Deleting ---
console.log("Deleting a Property:\n");
console.log('   delete b.age;');
delete b.age;
console.log("   b → " + JSON.stringify(b));
console.log();

// --- Comparison table ---
console.log("Objects vs Arrays:");
console.log("   ┌──────────┬───────────────┬────────────────────┐");
console.log("   │ Feature  │ Array         │ Object             │");
console.log("   ├──────────┼───────────────┼────────────────────┤");
console.log("   │ Syntax   │ [ ]           │ { }                │");
console.log("   │ Key type │ Numeric index │ Named property     │");
console.log("   │ Order    │ Ordered       │ Unordered          │");
console.log("   │ Access   │ a[0]          │ a.name / a[\"name\"]│");
console.log("   │ Best for │ Lists         │ Records / entities │");
console.log("   └──────────┴───────────────┴────────────────────┘");
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Use descriptive property names");
console.log("   - Prefer dot notation unless a variable key is needed");
console.log("   - Objects for named fields");
console.log("   - Arrays for lists");
console.log("   - Objects can store any type (arrays, functions, objects)\n");

console.log("==========================================");
console.log("   ✅ Object = key: value pairs with named properties.");
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

    log('a = { fname, lname, age, email }');
    log("   a.fname → " + a.fname);
    log("   a.lname → " + a.lname);
    log("   a.age   → " + a.age);
    log("   a.email → " + a.email);
    log("");
    log("Nested object:");
    log("   person.address.city → " + person.address.city);
    log("   person.hobbies[0]   → " + person.hobbies[0]);
    log("   person.greet()      → " + person.greet());
  });
}
