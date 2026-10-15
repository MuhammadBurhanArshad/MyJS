# JavaScript Array Methods slice() & splice()

## Overview
The `slice()` and `splice()` methods are both **target methods** that extract or modify parts of an array. Despite similar names, they behave **very differently**:

- **`slice()`** → **extracts** a portion and returns a **new array** (does NOT modify original).
- **`splice()`** → **adds/removes** elements **in place** (DOES modify original).

## Target Methods
- **`slice()`** → takes a slice from an array
- **`splice()`** → adds/removes values from an array

## 1. `slice()` Method

The `slice()` method **takes a slice from an array** by **start and end indexing**.

### Syntax

    var newArray = arrayName.slice(startIndex, endIndex);

- **startIndex** → where to begin (inclusive).
- **endIndex** → where to stop (**exclusive** — end is NOT included).
- Original array is **unchanged**.

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    var b = a.slice(1, 3);

### Result

    b = ["Aman", "Burhan", "Rehman"]   ← Wait, this is incorrect!

Let's recheck:
- `slice(1, 3)` → indexes `1` and `2` (end is exclusive).
- `a[1] = "Aman"`, `a[2] = "Burhan"` → result is `["Aman", "Burhan"]`.

But the notes show **`Aman, Burhan, Rehman`** — that would be `slice(1, 4)` or `slice(1)`. If your teacher's example shows 3 values with `slice(1, 3)`, they may be using **1-based inclusive** logic conceptually. In standard JS, `slice(1, 3)` returns only 2 elements.

### Standard JS Examples

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];

    a.slice(1, 3);      // ["Aman", "Burhan"]
    a.slice(1);         // ["Aman", "Burhan", "Rehman"]
    a.slice(-2);        // ["Burhan", "Rehman"]

> **slice() takes a slice from an array by start and end indexing.**

## 2. `splice()` Method

The `splice()` method is used for **adding values** by giving:
1. **Index** — where to start
2. **Number of values to delete**
3. **New value(s)** to insert

### Syntax

    arrayName.splice(startIndex, deleteCount, newValue1, newValue2, ...);

- **startIndex** → position to start modifying.
- **deleteCount** → how many elements to remove (0 = none).
- **newValue…** → values to insert at that position.

### Example — Add Value

    var a = ["Sanjay", "Aman", "Burhan"];
    var b = a.splice(2, 0, "Rehman");
    document.write(b);

### Step-by-Step
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. `splice(2, 0, "Rehman")` → at index `2`, delete `0` items, insert `"Rehman"`.
3. `a` becomes `["Sanjay", "Aman", "Rehman", "Burhan"]`.
4. `b` (the return value) is an **empty array** `[]` — because no elements were deleted.

> **It's for adding value by giving index location, number of deletes, and value.**

### Example — Delete Values

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    a.splice(1, 2);
    // a → ["Sanjay", "Rehman"]
    // returns ["Aman", "Burhan"]

### Example — Replace Values

    var a = ["Sanjay", "Aman", "Burhan"];
    a.splice(1, 1, "Rehman");
    // a → ["Sanjay", "Rehman", "Burhan"]

### Example — Add Multiple Values

    var a = ["Aman", "Rehman", "Karan"];
    a.splice(1, 0, "Burhan", "Sanjay");
    // a → ["Aman", "Burhan", "Sanjay", "Rehman", "Karan"]

## slice() vs splice()

| Feature | `slice()` | `splice()` |
|---------|-----------|-------------|
| Purpose | Extract portion | Add / remove in place |
| Modifies original | ❌ No | ✅ Yes |
| Returns | New array | Array of **removed** elements |
| Arguments | start, end | start, deleteCount, values |
| End index | Exclusive | N/A |

## Common Use Cases

### slice()
- Extracting a sub-array.
- Copying an array (`slice()` with no args).
- Getting the last N items (`slice(-n)`).

### splice()
- Inserting items at a specific position.
- Removing items by index.
- Replacing items.

## Best Practices
1. Use **`slice()`** when you want to **keep the original intact**.
2. Use **`splice()`** when you want to **modify in place**.
3. Remember `splice()` **mutates** the original array.
4. `splice()` returns the **removed elements**, not the new array.
5. Always double-check indexes — especially with end-exclusive behavior in `slice()`.

## Summary
- **`slice()`** → extracts a portion → returns a **new array** → does NOT mutate.
- **`splice()`** → adds/removes → **mutates the original** → returns removed elements.
- `slice(start, end)` → end is **exclusive**.
- `splice(start, deleteCount, ...values)` → modifies in place.
- Both are important **target methods** for array manipulation.
