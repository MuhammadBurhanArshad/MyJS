# JavaScript Array Methods concat() & join()

## Overview
The `concat()` and `join()` methods are used to **combine** and **convert** arrays. They are called **target methods** because they operate on the array as a whole without modifying the original.

## Target Methods
- **`concat()`** → merges multiple arrays into one
- **`join()`** → converts an array into a **string**

## 1. `concat()` Method

The `concat()` method is used to **merge two or more arrays** into a single new array.

### Syntax

    var newArray = arrayName.concat(otherArray);
    var newArray = arrayName.concat(value1, value2);
    var newArray = arrayName.concat(array1, array2);

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = ["Karan", "Rehman"];

    var c = a.concat("Karan", "Rehman");

### Result

    var c = ["Sanjay", "Aman", "Burhan", "Karan", "Rehman"];

### Explanation
- **We can also put variable name in concat()**.
- **We can merge multiple variables**.

### Example — Merging Two Arrays

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = ["Karan", "Rehman"];

    var c = a.concat(b);
    // c → ["Sanjay", "Aman", "Burhan", "Karan", "Rehman"]

### Example — Merging Three Arrays

    var a = ["Sanjay"];
    var b = ["Aman"];
    var c = ["Burhan"];

    var d = a.concat(b, c);
    // d → ["Sanjay", "Aman", "Burhan"]

> ⚠️ **`concat()` does NOT change the original arrays.** It returns a **new array**.

## 2. `join()` Method

The `join()` method is used to **convert an array into a string**.

### Syntax

    var str = arrayName.join(separator);

- `separator` (optional) — the character(s) placed between elements. Default is `","`.

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    var b = a.join(" - ");

### Result

    var b = "Sanjay - Aman - Burhan - Rehman"

### Explanation
> **It makes a String** from the array elements.

### Example — Default Separator

    var a = ["HTML", "CSS", "JS"];
    a.join();
    // "HTML,CSS,JS"

### Example — Custom Separator

    var a = ["HTML", "CSS", "JS"];
    a.join(" | ");
    // "HTML | CSS | JS"

### Example — No Separator

    var a = ["H", "e", "l", "l", "o"];
    a.join("");
    // "Hello"

> ⚠️ **`join()` does NOT change the original array.** It returns a **new string**.

## Comparison of concat() and join()

| Feature | `concat()` | `join()` |
|---------|-----------|----------|
| Purpose | Merge arrays | Convert array to string |
| Returns | New array | New string |
| Modifies original | ❌ No | ❌ No |
| Separator | N/A | Optional |
| Arguments | Arrays / values | Separator string |

## Common Use Cases

### concat()
- **Merging lists** (e.g., combining two arrays of items).
- **Appending** values to create a new array.
- **Combining data** from multiple sources.
- **Copying** an array (concat with no arguments).

### join()
- **Creating CSV / display strings** (e.g., `"a,b,c"`).
- **Formatting output** for the browser.
- **Building SQL-like strings** or URLs.
- **Rendering** array contents as text.

## Best Practices
1. Remember that `concat()` and `join()` do **NOT mutate** the original array.
2. Assign the result to a **new variable**.
3. Use `join()` with a **specific separator** for clean output.
4. Use `concat()` when you want to **combine** but not modify.
5. Prefer `join("")` to concatenate **string elements** quickly.

## Summary
- **`concat()`** → merges arrays / values → returns a **new array**.
- **`join()`** → converts array to string → returns a **new string**.
- Both are **non-mutating** methods.
- They are called **target methods** because they work on the whole array.
- Useful for **data formatting** and **array composition**.
