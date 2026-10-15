# JavaScript Array Method isArray()

## Overview
The `Array.isArray()` method is used to **check whether a variable is an array or not**. It returns a **boolean** — `true` if the variable is an array, and `false` otherwise.

## Target Method
- **`Array.isArray()`** → identifies if a variable is an array

## Array-`isArray()` Function

This function is used for **identifying a variable** — is that variable an **array or not**.

### Syntax

    Array.isArray(variable);

### Return Value

| Input | Returns |
|-------|---------|
| An array `[ ]` | `true` |
| A number | `false` |
| A string | `false` |
| An object `{ }` | `false` |
| `null` | `false` |
| `undefined` | `false` |

> **It will return `true` or `false`.**

## Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = 20;
    var c = "Burhan";

    // We can check these variables
    // by isArray() method.

### Check Each Variable

    Array.isArray(a);   // true   (it's an array)
    Array.isArray(b);   // false  (it's a number)
    Array.isArray(c);   // false  (it's a string)

## Example — Store and Print

    var a = ["Sanjay", "Aman", "Burhan"];

    var b = Array.isArray(a);

    document.write(b);

### Output

    true

> **It will return `true` or `false`.**

## Why Use `isArray()`?

In JavaScript, the `typeof` operator returns `"object"` for **both arrays and objects**:

    typeof [1, 2, 3];      // "object"
    typeof { a: 1 };       // "object"

So `typeof` cannot tell an array from an object. **`Array.isArray()`** solves this problem:

    Array.isArray([1, 2, 3]);    // true
    Array.isArray({ a: 1 });     // false

## More Examples

### Array → true

    Array.isArray([10, 20, 30]);         // true
    Array.isArray([]);                   // true
    Array.isArray(new Array(5));         // true

### Non-Array → false

    Array.isArray(25);                   // false
    Array.isArray("hello");              // false
    Array.isArray({ name: "Burhan" });   // false
    Array.isArray(null);                 // false
    Array.isArray(undefined);            // false

### Using in a Condition

    var data = [1, 2, 3];

    if (Array.isArray(data)) {
        document.write("Yes, it's an array");
    } else {
        document.write("No, it's not an array");
    }

## Comparison with `typeof`

| Value | `typeof` | `Array.isArray()` |
|-------|----------|-------------------|
| `[1, 2, 3]` | `"object"` | `true` |
| `{ a: 1 }` | `"object"` | `false` |
| `"hello"` | `"string"` | `false` |
| `25` | `"number"` | `false` |

> ✅ **`Array.isArray()` is the correct way to check for arrays.**

## Common Use Cases
- **Input validation** — ensure a parameter is an array before processing.
- **Type checking** — distinguish arrays from plain objects.
- **Defensive coding** — avoid calling array methods on non-arrays.
- **Debugging** — confirm what a variable actually contains.

## Best Practices
1. Always use `Array.isArray()` instead of `typeof` for arrays.
2. Combine with `if` statements for safe processing.
3. Use it before calling methods like `.map()`, `.filter()`.
4. Remember: **`typeof []` is `"object"`** — not useful for arrays.
5. Available in all modern browsers and Node.js.

## Summary
- **`Array.isArray(x)`** → returns `true` or `false`.
- It checks whether `x` is an array.
- More reliable than `typeof` for detecting arrays.
- Returns `true` for arrays, `false` for everything else.
- Essential for **type validation** and **safe coding**.
