// ==========================================
// 37 JavaScript Array Methods
// Built-in methods for array operations
// ==========================================

console.log("==========================================");
console.log("   37 - Array Methods");
console.log("==========================================\n");

// --- List ---
console.log("List of Array Methods:");
["sort()", "reverse()", "pop()", "push()", "shift()", "unshift()",
 "concat()", "join()", "slice()", "splice()", "isArray()", "indexOf()",
 "lastIndexOf()", "entries()", "every()", "filter()", "find()",
 "findIndex()", "includes()", "some()", "forEach()", "toString()",
 "valueOf()", "fill()"]
  .forEach((m) => console.log("   - " + m));
console.log();

// --- sort() ---
console.log("1. sort():");
var a1 = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Original : [" + a1.join(", ") + "]");
a1.sort();
console.log("   After    : [" + a1.join(", ") + "]\n");

// --- reverse() ---
console.log("2. reverse():");
var a2 = ["Sanjay", "Aman", "Burhan", "Rehman"];
console.log("   Original : [" + a2.join(", ") + "]");
a2.reverse();
console.log("   After    : [" + a2.join(", ") + "]\n");

// --- pop() and push() ---
console.log("3. pop() and push():");
var a3 = [10, 20, 30];
console.log("   Start    : [" + a3.join(", ") + "]");
a3.pop();
console.log("   pop()    : [" + a3.join(", ") + "]");
a3.push(40);
console.log("   push(40) : [" + a3.join(", ") + "]\n");

// --- shift() and unshift() ---
console.log("4. shift() and unshift():");
var a4 = [10, 20, 30];
console.log("   Start       : [" + a4.join(", ") + "]");
a4.shift();
console.log("   shift()     : [" + a4.join(", ") + "]");
a4.unshift(5);
console.log("   unshift(5)  : [" + a4.join(", ") + "]\n");

// --- concat() ---
console.log("5. concat():");
var a5 = [1, 2];
var b5 = [3, 4];
console.log("   a = [" + a5.join(", ") + "]");
console.log("   b = [" + b5.join(", ") + "]");
console.log("   a.concat(b) = [" + a5.concat(b5).join(", ") + "]\n");

// --- join() ---
console.log("6. join():");
var a6 = ["HTML", "CSS", "JS"];
console.log('   join(" - ") = "' + a6.join(" - ") + '"\n');

// --- slice() ---
console.log("7. slice():");
var a7 = [10, 20, 30, 40, 50];
console.log("   Original : [" + a7.join(", ") + "]");
console.log("   slice(1,3) = [" + a7.slice(1, 3).join(", ") + "]\n");

// --- splice() ---
console.log("8. splice():");
var a8 = [10, 20, 30];
console.log("   Original       : [" + a8.join(", ") + "]");
a8.splice(1, 1);
console.log("   splice(1,1)    : [" + a8.join(", ") + "]");
a8.splice(1, 0, 99);
console.log("   splice(1,0,99) : [" + a8.join(", ") + "]\n");

// --- isArray() ---
console.log("9. isArray():");
console.log("   Array.isArray([1,2,3])  = " + Array.isArray([1, 2, 3]));
console.log('   Array.isArray("hello")  = ' + Array.isArray("hello") + "\n");

// --- indexOf() and lastIndexOf() ---
console.log("10. indexOf() and lastIndexOf():");
var a10 = [10, 20, 30, 20];
console.log("   Array         : [" + a10.join(", ") + "]");
console.log("   indexOf(20)   = " + a10.indexOf(20));
console.log("   lastIndexOf(20) = " + a10.lastIndexOf(20) + "\n");

// --- includes() ---
console.log("11. includes():");
var a11 = [10, 20, 30];
console.log("   includes(20) = " + a11.includes(20));
console.log("   includes(99) = " + a11.includes(99) + "\n");

// --- forEach() ---
console.log("12. forEach():");
var a12 = [10, 20, 30];
console.log("   Loop:");
a12.forEach(function (val) {
  console.log("      " + val);
});
console.log();

// --- filter() ---
console.log("13. filter():");
var a13 = [10, 25, 30, 45];
console.log("   filter(v > 20) = [" + a13.filter(function (v) { return v > 20; }).join(", ") + "]\n");

// --- find() and findIndex() ---
console.log("14. find() and findIndex():");
var a14 = [10, 25, 30, 45];
console.log("   find(v > 20)      = " + a14.find(function (v) { return v > 20; }));
console.log("   findIndex(v > 20) = " + a14.findIndex(function (v) { return v > 20; }) + "\n");

// --- every() and some() ---
console.log("15. every() and some():");
var a15 = [10, 20, 30];
console.log("   every(v > 5)  = " + a15.every(function (v) { return v > 5; }));
console.log("   some(v > 25)  = " + a15.some(function (v) { return v > 25; }) + "\n");

// --- fill() ---
console.log("16. fill():");
var a16 = [1, 2, 3, 4];
console.log("   Original  : [" + a16.join(", ") + "]");
a16.fill(0);
console.log("   fill(0)   : [" + a16.join(", ") + "]\n");

// --- toString() and valueOf() ---
console.log("17. toString() and valueOf():");
var a17 = [10, 20, 30];
console.log("   toString() = " + a17.toString());
console.log("   valueOf()  = [" + a17.valueOf().join(", ") + "]\n");

// --- entries() ---
console.log("18. entries():");
var a18 = ["a", "b", "c"];
console.log("   Key/Value pairs:");
for (var pair of a18.entries()) {
  console.log("      [" + pair[0] + ", " + pair[1] + "]");
}
console.log();

// --- Best practices ---
console.log("Best Practices:");
console.log("   - push/pop for END operations");
console.log("   - shift/unshift for START operations");
console.log("   - filter/find instead of manual loops");
console.log("   - includes() over indexOf() !== -1");
console.log("   - sort() and reverse() MUTATE the array\n");

console.log("==========================================");
console.log("   ✅ Learn array methods — they save time!");
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

    log("sort()      : [" + ["Sanjay", "Aman", "Burhan", "Rehman"].sort().join(", ") + "]");
    log("reverse()   : [" + ["Sanjay", "Aman", "Burhan", "Rehman"].reverse().join(", ") + "]");
    log("filter(v>20): [" + [10, 25, 30, 45].filter(v => v > 20).join(", ") + "]");
    log("find(v>20)  : " + [10, 25, 30, 45].find(v => v > 20));
    log("includes(20): " + [10, 20, 30].includes(20));
    log("join(' - ') : " + ["HTML", "CSS", "JS"].join(" - "));
  });
}
