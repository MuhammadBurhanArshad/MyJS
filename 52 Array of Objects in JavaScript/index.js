// ==========================================
// 52 JavaScript Array of Objects
// An array where each element is an object
// ==========================================

console.log("==========================================");
console.log("   52 - Array of Objects");
console.log("==========================================\n");

// --- Target ---
console.log("Target:");
console.log("   - Array having objects");
console.log("   - Array of objects\n");

// --- Array of Objects ---
console.log("Array of Objects:\n");
console.log("   var student = [");
console.log('       { Name: "Burhan", Age: 18 },');
console.log('       { Name: "Aman",   Age: 19 },');
console.log('       { Name: "Rehman", Age: 20 }');
console.log("   ];\n");

var student = [
  { Name: "Burhan", Age: 18 },
  { Name: "Aman",   Age: 19 },
  { Name: "Rehman", Age: 20 }
];

// --- Print the whole array ---
console.log("console.log(student):");
console.log(student);
console.log();

// --- Access one object ---
console.log("Access One Object:");
console.log("   student[0] → " + JSON.stringify(student[0]));
console.log("   student[1] → " + JSON.stringify(student[1]));
console.log("   student[2] → " + JSON.stringify(student[2]));
console.log();

// --- Access properties ---
console.log("Access Properties (arr[index].property):");
console.log('   student[0].Name → ' + student[0].Name);
console.log("   student[0].Age  → " + student[0].Age);
console.log('   student[1].Name → ' + student[1].Name);
console.log("   student[1].Age  → " + student[1].Age);
console.log('   student[2].Name → ' + student[2].Name);
console.log("   student[2].Age  → " + student[2].Age);
console.log();

// --- Loop with for ---
console.log("Looping with for:\n");
console.log("   for (var a = 0; a < student.length; a++) {");
console.log('       document.write(student[a].Name + "<br>");');
console.log("   }\n");

console.log("   Output:");
for (var a = 0; a < student.length; a++) {
  console.log("      " + student[a].Name);
}
console.log();

// --- Loop with forEach ---
console.log("Looping with forEach:\n");
console.log("   student.forEach(function (s) {");
console.log('       document.write(s.Name + " - " + s.Age + "<br>");');
console.log("   });\n");

console.log("   Output:");
student.forEach(function (s) {
  console.log("      " + s.Name + " - " + s.Age);
});
console.log();

// --- Loop with for...of ---
console.log("Looping with for...of:\n");
console.log("   for (var s of student) {");
console.log('       document.write(s.Name + "<br>");');
console.log("   }\n");

console.log("   Output:");
for (var s of student) {
  console.log("      " + s.Name);
}
console.log();

// --- Common use cases ---
console.log("Common Use Cases:");
console.log("   - List of users from an API");
console.log("   - Products in a shopping cart");
console.log("   - Students / employees in a database");
console.log("   - Records with multiple fields\n");

// --- Best practices ---
console.log("Best Practices:");
console.log("   - Keep property names consistent");
console.log("   - Use meaningful array names (students, users)");
console.log("   - Loop with for, forEach, or for...of");
console.log("   - Access with dot notation: arr[i].Name");
console.log("   - Use console.log() to inspect the array\n");

console.log("==========================================");
console.log("   ✅ Array of objects = list of records.");
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

    log("Array of Students:");
    log("");
    for (var i = 0; i < student.length; i++) {
      log("   " + i + ": " + student[i].Name + " (Age: " + student[i].Age + ")");
    }
    log("");
    log("Total students: " + student.length);
  });
}
