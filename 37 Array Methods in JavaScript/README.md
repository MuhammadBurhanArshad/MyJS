# JavaScript Array Methods

## Overview
JavaScript provides many **built-in methods** for working with arrays. These methods let you **sort, reverse, add, remove, merge, search, filter, and iterate** through array elements without writing complex logic yourself.

## List of Array Methods

| Method | Description |
|--------|-------------|
| `sort()` | Sorts the array alphabetically / numerically |
| `reverse()` | Reverses the order of the array |
| `pop()` | Removes the **last** element |
| `push()` | Adds an element to the **end** |
| `shift()` | Removes the **first** element |
| `unshift()` | Adds an element to the **beginning** |
| `concat()` | Merges two or more arrays |
| `join()` | Joins array elements into a string |
| `slice()` | Returns a **portion** of the array |
| `splice()` | Adds / removes elements at a position |
| `isArray()` | Checks if a value is an array |
| `indexOf()` | Returns the **first index** of a value |
| `lastIndexOf()` | Returns the **last index** of a value |
| `entries()` | Returns an iterator of key/value pairs |
| `every()` | Tests if **all** elements pass a test |
| `filter()` | Returns elements that pass a test |
| `find()` | Returns the **first** matching element |
| `findIndex()` | Returns the **index** of the first match |
| `includes()` | Checks if an array contains a value |
| `some()` | Tests if **any** element passes a test |
| `forEach()` | Runs a function for each element |
| `toString()` | Converts the array to a string |
| `valueOf()` | Returns the array itself |
| `fill()` | Fills elements with a static value |

## 1. `sort()` Method
Sorts the array in **alphabetical / ascending** order.

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    a.sort();
    // ["Aman", "Burhan", "Rehman", "Sanjay"]

## 2. `reverse()` Method
Reverses the order — used for **descending** order.

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    a.reverse();
    // ["Rehman", "Burhan", "Aman", "Sanjay"]

## 3. `pop()` and `push()`

    var a = [10, 20, 30];

    a.pop();       // removes 30 → [10, 20]
    a.push(40);    // adds 40    → [10, 20, 40]

## 4. `shift()` and `unshift()`

    var a = [10, 20, 30];

    a.shift();       // removes 10 → [20, 30]
    a.unshift(5);    // adds 5     → [5, 20, 30]

## 5. `concat()` — Merge Arrays

    var a = [1, 2];
    var b = [3, 4];
    var c = a.concat(b);
    // [1, 2, 3, 4]

## 6. `join()` — Array to String

    var a = ["HTML", "CSS", "JS"];
    a.join(" - ");
    // "HTML - CSS - JS"

## 7. `slice()` — Extract a Portion

    var a = [10, 20, 30, 40, 50];
    a.slice(1, 3);
    // [20, 30]

## 8. `splice()` — Add / Remove at Position

    var a = [10, 20, 30];
    a.splice(1, 1);          // removes 1 element at index 1 → [10, 30]
    a.splice(1, 0, 99);      // adds 99 at index 1 → [10, 99, 30]

## 9. `isArray()` — Type Check

    Array.isArray([1, 2, 3]);    // true
    Array.isArray("hello");      // false

## 10. `indexOf()` and `lastIndexOf()`

    var a = [10, 20, 30, 20];

    a.indexOf(20);       // 1   (first occurrence)
    a.lastIndexOf(20);   // 3   (last occurrence)

## 11. `includes()` — Contains?

    var a = [10, 20, 30];
    a.includes(20);   // true
    a.includes(99);   // false

## 12. `forEach()` — Loop Through

    var a = [10, 20, 30];
    a.forEach(function (val) {
        document.write(val + "<br>");
    });

## 13. `filter()` — Keep Matching Elements

    var a = [10, 25, 30, 45];
    var result = a.filter(function (v) { return v > 20; });
    // [25, 30, 45]

## 14. `find()` and `findIndex()`

    var a = [10, 25, 30, 45];

    a.find(function (v) { return v > 20; });       // 25
    a.findIndex(function (v) { return v > 20; });  // 1

## 15. `every()` and `some()`

    var a = [10, 20, 30];

    a.every(function (v) { return v > 5; });   // true  (all > 5)
    a.some(function (v) { return v > 25; });   // true  (at least one > 25)

## 16. `fill()` — Fill with a Value

    var a = [1, 2, 3, 4];
    a.fill(0);
    // [0, 0, 0, 0]

## 17. `toString()` and `valueOf()`

    var a = [10, 20, 30];

    a.toString();   // "10,20,30"
    a.valueOf();    // [10, 20, 30]

## 18. `entries()` — Iterate Key/Value Pairs

    var a = ["a", "b", "c"];
    for (var pair of a.entries()) {
        // [0, "a"], [1, "b"], [2, "c"]
    }

## Best Practices
1. Use **`push` / `pop`** for end operations.
2. Use **`shift` / `unshift`** for beginning operations.
3. Use **`filter` / `find`** instead of manual loops.
4. Prefer **`includes()`** over `indexOf() !== -1`.
5. Use **`slice`** for extracting, **`splice`** for modifying.
6. Remember: **`sort()` and `reverse()` mutate** the original array.

## Summary
- JavaScript arrays have **24+ built-in methods**.
- They cover **adding, removing, sorting, searching, filtering, iterating**.
- Learn them well — they save time and make code cleaner.
- Always check whether a method **mutates** the original or returns a new array.
