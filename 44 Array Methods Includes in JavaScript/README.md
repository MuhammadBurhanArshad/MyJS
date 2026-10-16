# JavaScript Array Method includes()

## Overview
The `includes()` method is used to **check whether a value exists** inside an array. It returns a **boolean** — `true` if the value is found, `false` otherwise.

## Target Method
- **`includes()`** → checks if a value is in the array

## Array-`includes()` Function

It is used for **testing a condition to check** if a value is in the array or not.

### Syntax

    arrayName.includes("search item");

### Return Value
- **`true`** → value exists in the array
- **`false`** → value does NOT exist

> **It returns `true` or `false`.**

## Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];

    var b = a.includes("Burhan");

    document.write(b);

### Result

    true

### Explanation
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. Search for `"Burhan"` inside the array.
3. `"Burhan"` **is** present → returns **`true`**.

## Another Example — Not Found

    var a = ["Sanjay", "Aman", "Burhan"];

    a.includes("Rehman");
    // false

## Case-Sensitive
> ⚠️ **`includes()` is case-sensitive.**

    var a = ["Sanjay", "Aman", "Burhan"];

    a.includes("burhan");   // false  (lowercase 'b')
    a.includes("Burhan");   // true   (correct case)

## Using a Start Index

`includes()` accepts an **optional second parameter** — the index to start searching from.

    var a = [10, 20, 30, 20];

    a.includes(20);       // true
    a.includes(20, 2);    // true  (start at index 2)
    a.includes(10, 1);    // false (start after 10)

## Comparison with `indexOf()`

| Feature | `includes()` | `indexOf()` |
|---------|--------------|-------------|
| Returns | `true` / `false` | index / `-1` |
| Readability | ✅ High | ⚠️ Lower |
| Best for | Checking existence | Finding position |
| Readable check | `a.includes(x)` | `a.indexOf(x) !== -1` |

### Same Check, Two Ways

    a.indexOf("Burhan") !== -1    // older style
    a.includes("Burhan")          // modern, cleaner

## Common Use Cases
- **Checking if a value exists** before using it.
- **Form validation** — verify input is in allowed list.
- **Conditional logic** — branch based on presence.
- **Filtering** — filter items that contain a value.

## Best Practices
1. Use `includes()` when you only need **true / false**.
2. Use `indexOf()` when you need the **position**.
3. Remember it is **case-sensitive** for strings.
4. Works with **NaN** (unlike `indexOf()`):

       [NaN].includes(NaN);       // true
       [NaN].indexOf(NaN);        // -1

5. Available in all modern browsers and Node.js.

## Summary
- **`includes()`** → returns `true` or `false`.
- Checks if a value **exists** in the array.
- **Case-sensitive** for strings.
- Cleaner alternative to `indexOf() !== -1`.
- Accepts an optional **start index** as the second parameter.
