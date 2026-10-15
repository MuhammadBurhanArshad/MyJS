# JavaScript Array Methods indexOf() & lastIndexOf()

## Overview
The `indexOf()` and `lastIndexOf()` methods are used to **search for a value** inside an array and return the **index position** of where it is found. If the value is not present, both return **`-1`**.

## Target Methods
- **`indexOf()`** → searches from the **start** of the array
- **`lastIndexOf()`** → searches from the **end** of the array (backwards)

## 1. `indexOf()` Function

The `indexOf()` method **searches a value from the start** of the array and returns its **first matching index**.

### Parameters
- **First** → the **value to search** for.
- **Second** (optional) → the **index to start searching** from.

> It is used for **searching and checking** whether a value **exists or not**.

### Syntax

    arrayName.indexOf("search item", start);

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = a.indexOf("Burhan", 1);
    document.write(b);

### Result

    (2)

> It will return the **number of index of given value**.  
> For **not found**, it will return **`(-1)`**.

### Step-by-Step
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. Search for `"Burhan"` starting from index `1`.
3. `"Burhan"` is at index `2`.
4. Returns **`2`**.

## 2. `lastIndexOf()` Function

The `lastIndexOf()` method **searches a value from the last** (end) of the array and returns the **last matching index**.

### Parameters
- **First** → the **value to search** for.
- **Second** (optional) → the index to **start searching backwards** from.

> It **starts searching from the last value**.

### Syntax

    arrayName.lastIndexOf("search item", start);

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = a.lastIndexOf("Burhan", 2);
    document.write(b);

### Result

    (2)

> It will return the **number of index of given value**.  
> For **not found**, it will return **`(-1)`**.

## How indexOf() and lastIndexOf() Differ

Consider this array with **duplicates**:

    var a = ["Sanjay", "Aman", "Burhan", "Aman", "Rehman"];

    a.indexOf("Aman");       // 1  (first match)
    a.lastIndexOf("Aman");   // 3  (last match)

| Method | Search Direction | Returns |
|--------|------------------|---------|
| `indexOf()` | Left → Right | **First** matching index |
| `lastIndexOf()` | Right → Left | **Last** matching index |

## Return Value Table

| Situation | `indexOf()` | `lastIndexOf()` |
|-----------|-------------|-----------------|
| Value found | Its index | Its index |
| Value not found | `-1` | `-1` |
| Empty array | `-1` | `-1` |

## More Examples

### Basic Search

    var fruits = ["Apple", "Banana", "Cherry"];

    fruits.indexOf("Banana");       // 1
    fruits.indexOf("Mango");        // -1
    fruits.lastIndexOf("Banana");   // 1

### With a Start Index

    var a = ["A", "B", "C", "B", "D"];

    a.indexOf("B");        // 1  (search from start)
    a.indexOf("B", 2);     // 3  (start from index 2)
    a.lastIndexOf("B");    // 3  (search from end)
    a.lastIndexOf("B", 2); // 1  (start backwards from index 2)

### Check Existence with `!== -1`

    var a = ["Apple", "Banana"];

    if (a.indexOf("Banana") !== -1) {
        document.write("Found!");
    } else {
        document.write("Not found.");
    }

## Comparison with `includes()`

| Feature | `indexOf()` | `includes()` |
|---------|-------------|--------------|
| Returns | Index or `-1` | `true` / `false` |
| Best for | Finding **position** | Checking **existence** |
| Readability | Lower | Higher |

    a.indexOf("Banana") !== -1   // older style
    a.includes("Banana")         // modern, cleaner

## Common Use Cases
- **Checking if a value exists** in an array.
- **Finding the position** of an item for later use.
- **Removing duplicates** by comparing first/last index.
- **Implementing "contains" checks** in older codebases.

## Best Practices
1. Use `indexOf()` when you need the **position**.
2. Use `includes()` when you only need **true / false**.
3. Always compare to `-1` to check if a value **exists**.
4. Remember — **`indexOf()` finds first**, **`lastIndexOf()` finds last**.
5. Both methods use **strict equality (`===`)** internally.

## Summary
- **`indexOf()`** → first matching index (search from start).
- **`lastIndexOf()`** → last matching index (search from end).
- Both return **`-1`** if not found.
- Optional second parameter sets the **start position**.
- Useful for **searching, checking, and de-duplicating**.
