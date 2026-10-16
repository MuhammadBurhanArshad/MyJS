# JavaScript Array Methods find() & findIndex()

## Overview
The `find()` and `findIndex()` methods are used to **search an array** for the **first element** that passes a test. Both use a **callback function** and return the result as soon as a match is found.

- **`find()`** → returns the **first matching element**.
- **`findIndex()`** → returns the **index** of the first matching element.

## Target Methods
- **`find()`** — returns the first value that passes a test
- **`findIndex()`** — returns the index of the first value that passes a test

## 1. `find()` Function

The `find()` method **returns the value of the first element** in an array that passes a test.

### Rule
> **`find()` only returns the FIRST element which passes the condition.**

### Syntax

    arrayName.find(functionName);

### Example from Notes

    var ages = [10, 23, 19, 20];
    var b = ages.find(checkAdult);

    document.write(b);

    function checkAdult(age) {
        return age >= 18;
    }

### Step-by-Step
1. `ages = [10, 23, 19, 20]`
2. `checkAdult(age)` returns `true` if `age >= 18`.
3. `find()` checks each element in order:
   - `10 >= 18` → false
   - `23 >= 18` → **true** → returns `23` (and stops)
4. Output is **`23`**.

### Output

    23

> **`find()` only returns the first element which passes the condition.**

## 2. `findIndex()` Function

The `findIndex()` method **returns the index of the first element** in an array that passes a test.

### Rule
> It **returns the index of the first element** in an array that passes a test.

### Syntax

    arrayName.findIndex(functionName);

### Example from Notes

    var ages = [10, 23, 19, 20];
    var b = ages.findIndex(checkAdult);

    document.write(b);

    function checkAdult(age) {
        return age >= 18;
    }

### Step-by-Step
1. `ages = [10, 23, 19, 20]`
2. `checkAdult(age)` returns `true` if `age >= 18`.
3. `findIndex()` checks each element:
   - `index 0` → `10 >= 18` → false
   - `index 1` → `23 >= 18` → **true** → returns `1`
4. Output is **`1`**.

### Output

    1

## find() vs findIndex()

| Method | Returns | Example (on `[10, 23, 19, 20]`) |
|--------|---------|---------------------------------|
| `find()` | The **value** | `23` |
| `findIndex()` | The **index** | `1` |

## What if No Element Matches?

Both methods return an "empty" value when nothing matches:

| Method | No match returns |
|--------|------------------|
| `find()` | `undefined` |
| `findIndex()` | `-1` |

### Example

    [10, 12, 15].find(n => n >= 18);        // undefined
    [10, 12, 15].findIndex(n => n >= 18);   // -1

## More Examples

### Find a String

    var names = ["Sanjay", "Aman", "Burhan"];
    var found = names.find(n => n === "Aman");
    // "Aman"

### Find an Object

    var users = [
        { name: "Ali", age: 22 },
        { name: "Sara", age: 17 },
        { name: "Burhan", age: 25 }
    ];

    var adult = users.find(u => u.age >= 18);
    // { name: "Ali", age: 22 }

### Find Index of a Number

    var nums = [5, 12, 8, 130, 44];
    var idx = nums.findIndex(n => n > 10);
    // 1  (12 > 10)

## Common Use Cases

### find()
- **Get the first matching object** in a list.
- **Get the first matching value** in a set.
- **Searching** with a custom condition.

### findIndex()
- **Locate position** of an item for later use.
- **Deleting** an item by finding its index first.
- **Replacing** an element in an array.

## Difference from `filter()`

| Method | Returns | Matching elements |
|--------|---------|-------------------|
| `find()` | Single element | First match only |
| `filter()` | New array | **All** matches |

## Best Practices
1. Use **`find()`** when you need the **value**.
2. Use **`findIndex()`** when you need the **position**.
3. Both **need a callback function**.
4. Both **stop at the first match** — very efficient.
5. Use **`filter()`** if you need **all matches**.

## Summary
- **`find()`** → returns the **first matching element**.
- **`findIndex()`** → returns the **index** of the first match.
- Both **stop at the first match** (efficient).
- `find()` returns `undefined` if nothing matches.
- `findIndex()` returns `-1` if nothing matches.
- Both **need a callback function** and **do not mutate** the array.
