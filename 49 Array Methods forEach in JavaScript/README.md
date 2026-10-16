# JavaScript Array Method forEach()

## Overview
The `forEach()` method is used to **loop through an array** and execute a function once for each element. It's the **shorter and cleaner way to print or process an array** compared to a traditional `for` loop.

## Targeted Method
- **`forEach()`** → loops through an array with a function

## Array-`forEach()` Function

- Use for **printing an array with sequence**.
- It's a **shorter way to print an array**.

### Syntax

    arrayName.forEach(function (value) {
        statement
    });

### Parameters of the Callback
| Parameter | Meaning |
|-----------|---------|
| `value` | The current element |
| `index` *(optional)* | The current index |
| `array` *(optional)* | The source array |

## Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];

    a.forEach(function (value) {
        document.write(value + "<br>");
    });

### Step-by-Step
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. `forEach()` calls the function once for **each element**.
3. Each iteration writes the value followed by `<br>`.
4. Output:

       Sanjay
       Aman
       Burhan

## Using `forEach()` with a Named Function

You can **make the function in forEach**, or **make an outer function** and pass it in.

### Inline Function

    a.forEach(function (value) {
        document.write(value + "<br>");
    });

### Outer Function

    function show(value) {
        document.write(value + "<br>");
    }

    a.forEach(show);

Both produce the **same result**.

### Arrow Function (Modern)

    a.forEach(value => document.write(value + "<br>"));

## Using Index

    var a = ["Sanjay", "Aman", "Burhan"];

    a.forEach(function (value, index) {
        document.write(index + ": " + value + "<br>");
    });

### Output

    0: Sanjay
    1: Aman
    2: Burhan

## forEach() vs for Loop

| Feature | `forEach()` | `for` loop |
|---------|-------------|------------|
| Syntax | Shorter, cleaner | Longer, more control |
| Break/continue | ❌ Not supported | ✅ Supported |
| Return value | `undefined` | N/A |
| Best for | Iterating all elements | Custom control |

## forEach() vs map()

| Feature | `forEach()` | `map()` |
|---------|-------------|---------|
| Returns | `undefined` | New array |
| Purpose | Do something for each | Transform each |
| Chain-able | ❌ No | ✅ Yes |

## Key Rules
1. `forEach()` **calls a function once** for each element.
2. It **does not return a value** (`undefined`).
3. It **cannot be stopped early** with `break` (no `continue` either).
4. It **does not mutate** the original array (but the callback can).
5. Works on **arrays only** — not on strings or objects directly.

## Common Use Cases
- **Printing** all elements with a sequence.
- **Applying an action** to each element (e.g., `console.log`).
- **DOM manipulation** — updating each element.
- **Summing** values with an accumulator variable.

## Best Practices
1. Use `forEach()` for **side effects**, not for building new arrays.
2. Use `map()` if you need to **transform** into a new array.
3. Use `for` loop when you need **break / continue**.
4. Keep the callback function **short and focused**.
5. Prefer **arrow functions** for compactness.

## Summary
- **`forEach()`** → loops through an array with a function.
- **Shorter way** to print or process arrays.
- Callback receives `value`, `index`, and `array`.
- **Cannot break** out of it early.
- **Returns `undefined`** — it's for side effects.
- Perfect for **simple iteration** and **printing**.
