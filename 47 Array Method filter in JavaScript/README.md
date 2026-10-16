# JavaScript Array Method filter()

## Overview
The `filter()` method is used to **check an array** against a **given condition** and **make a new array** containing only the elements that passed the test. The original array is **not modified**.

## Target Method
- **`filter()`** → creates a new array with elements that pass a test

## Array-`filter()` Function

The `filter()` method **checks an array by a given condition** and **makes a new array** from the matching elements.

> **`filter()` creates an array filled with all array elements that pass a test.**

### Syntax

    arrayName.filter(functionName);

## Example from Notes

    var ages = [80, 12, 19, 20];
    var b = ages.filter(checkAdult);

    document.write(b);

    function checkAdult(age) {
        return age >= 18;
    }

### Step-by-Step
1. `ages = [80, 12, 19, 20]`
2. `checkAdult(age)` returns `true` if `age >= 18`.
3. `filter()` checks each element:
   - `80 >= 18` → true ✅
   - `12 >= 18` → false ❌
   - `19 >= 18` → true ✅
   - `20 >= 18` → true ✅
4. Returns a **new array** containing only those that passed: `[80, 19, 20]`.

### Output

    80,19,20

## How It Works

    ages = [80, 12, 19, 20]
             ↓   ↓   ↓   ↓
    >= 18?   ✅  ❌  ✅  ✅
             ↓       ↓   ↓
    Result = [80, 19, 20]   ← new array

## Simple Example

    var nums = [1, 2, 3, 4, 5, 6];

    var evens = nums.filter(function (n) {
        return n % 2 === 0;
    });

    // evens → [2, 4, 6]

## Using Arrow Function (Modern)

    var ages = [80, 12, 19, 20];

    var adults = ages.filter(age => age >= 18);

    // adults → [80, 19, 20]

## filter() vs find()

| Method | Returns | Matching elements |
|--------|---------|-------------------|
| `filter()` | **New array** | **All** matches |
| `find()` | Single element | **First** match only |

## What if Nothing Matches?

    [10, 12, 15].filter(n => n >= 18);
    // []  (empty array)

## More Examples

### Filter Strings by Length

    var names = ["Ali", "Burhan", "Sara", "Alexander"];

    var longNames = names.filter(n => n.length > 4);
    // ["Burhan", "Alexander"]

### Filter Objects

    var users = [
        { name: "Ali", age: 22 },
        { name: "Sara", age: 17 },
        { name: "Burhan", age: 25 }
    ];

    var adults = users.filter(u => u.age >= 18);
    // [{ name: "Ali", age: 22 }, { name: "Burhan", age: 25 }]

### Filter Positive Numbers

    var nums = [-5, 10, -3, 8, 0];
    var positives = nums.filter(n => n > 0);
    // [10, 8]

## Key Rules
1. **Needs a callback function** that returns `true` or `false`.
2. Returns a **new array** — does NOT mutate the original.
3. If **nothing matches**, returns an **empty array** `[]`.
4. Works on **any type** — numbers, strings, objects.

## Common Use Cases
- **Filtering lists** — search results, user input.
- **Removing items** based on a condition.
- **Data cleaning** — remove invalid entries.
- **Chaining** — combine with `map()`, `reduce()`, etc.

## Best Practices
1. Use **`filter()`** when you need **all matches**.
2. Use **`find()`** when you only need the **first match**.
3. Keep the callback function **short and readable**.
4. Prefer **arrow functions** for brevity.
5. Remember: `filter()` **does not mutate** the original array.

## Summary
- **`filter()`** → returns a **new array** with elements that pass a test.
- **Needs a callback function** that returns `true` / `false`.
- Does **not change** the original array.
- Returns **`[]`** if nothing matches.
- Perfect for **selecting subsets** of data.
