# JavaScript Array Method map()

## Overview
The `map()` method is used to **transform every element** in an array and return a **new array** with the transformed values. The original array is **not modified**.

## Target
- **`map()`** — transform each element of an array

## Array-`map()` Function

- **`map()` is for changing the whole array.**
- It returns a **new array** where each element is the result of the callback function.

### Syntax

    var newArray = arrayName.map(function (value) {
        statement
        return newValue;
    });

Or with an outer function:

    var newArray = arrayName.map(functionName);

## Example from Notes

    var a = [1, 3, 5, 8, 10];

    a.map(...)      // transform each element
    // Result: [10, 30, 50, 80, 100]

Each element is multiplied by **10**.

## Full Example with Named Function

    var ary = [11, 4, 9, 16];
    var b = ary.map(test);

    document.write(b);

    function test(x) {
        return x * 10;
    }

### Step-by-Step
1. `ary = [11, 4, 9, 16]`
2. `test(x)` returns `x * 10`.
3. `map()` applies `test` to **each element**:
   - `test(11)` → 110
   - `test(4)` → 40
   - `test(9)` → 90
   - `test(16)` → 160
4. Returns a **new array** `[110, 40, 90, 160]`.

### Output

    110,40,90,160

## Using `map()` with an Inline Function

    var a = [1, 3, 5, 8, 10];

    var b = a.map(function (x) {
        return x * 10;
    });

    console.log(b);
    // [10, 30, 50, 80, 100]

## Using `map()` with an Arrow Function

    var a = [1, 3, 5, 8, 10];

    var b = a.map(x => x * 10);
    console.log(b);
    // [10, 30, 50, 80, 100]

## `map()` with Strings

> ⭐ **We can also use `map()` with string.**

When you use `map()` on a string, JavaScript treats it as an array of characters.

    var str = "Hello";

    var result = Array.from(str).map(ch => ch.toUpperCase());
    console.log(result.join(""));
    // "HELLO"

Or simpler with string concatenation:

    var str = "Hello";
    var upper = "";
    for (var ch of str) {
        upper += ch.toUpperCase();
    }
    console.log(upper);
    // "HELLO"

## `map()` vs `forEach()`

| Feature | `map()` | `forEach()` |
|---------|---------|-------------|
| Returns | **New array** | `undefined` |
| Purpose | Transform | Side effects |
| Chain-able | ✅ Yes | ❌ No |
| Common use | Convert data | Print / log |

## `map()` vs `filter()`

| Feature | `map()` | `filter()` |
|---------|---------|------------|
| Output length | Same as input | Can be smaller |
| Purpose | Transform each | Select some |
| Returns | New array (all) | New array (subset) |

## More Examples

### Square Each Number

    var nums = [1, 2, 3, 4];
    var squares = nums.map(n => n * n);
    // [1, 4, 9, 16]

### Convert to Uppercase

    var names = ["burhan", "aman", "rehman"];
    var upper = names.map(n => n.toUpperCase());
    // ["BURHAN", "AMAN", "REHMAN"]

### Extract a Property

    var users = [
        { name: "Ali", age: 22 },
        { name: "Sara", age: 17 }
    ];

    var namesOnly = users.map(u => u.name);
    // ["Ali", "Sara"]

## Key Rules
1. **Needs a callback function** that returns a value.
2. Returns a **new array** — does NOT mutate original.
3. Length of result = length of the original.
4. Always **return** from the callback (otherwise you get `undefined`).

## Best Practices
1. Use **`map()`** to transform, not for side effects.
2. Always **return** a value from the callback.
3. Use **arrow functions** for brevity.
4. Chain `map()` with `filter()` for powerful transformations.
5. Use `forEach()` when you don't need the result.

## Summary
- **`map()`** → transforms each element into a **new array**.
- **Needs a callback** returning a value.
- **Does not mutate** the original array.
- Result length = original length.
- Works on **arrays**, and via `Array.from()` on **strings**.
- Use it for **conversion, transformation, and data mapping**.
