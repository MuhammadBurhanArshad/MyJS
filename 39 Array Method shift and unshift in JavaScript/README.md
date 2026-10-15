# JavaScript Array Method shift() & unshift()

## Overview
The `shift()` and `unshift()` methods are used to **add** and **remove** elements from the **beginning (first position)** of an array. They are the mirror counterparts of `pop()` and `push()`, which work at the **end**.

## Array Methods for Now
- **`shift()`** → deletes the **first value** of an array
- **`unshift()`** → adds a value at the **first** of an array

## 1. `shift()` Method

The `shift()` method **removes the first value** from an array.

### Syntax

    arrayName.shift();

### Example

    var a = ["Sanjay", "Aman", "Rehman", "Karan"];
    a.shift();

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Sanjay" | "Aman" |
| 1 | "Aman" | "Rehman" |
| 2 | "Rehman" | "Karan" |
| 3 | "Karan" | *(no index 3)* |

> **`shift()` deletes the first value of an array.**  
> Remaining elements shift left by one position.

### Return Value
`shift()` **returns the removed element**:

    var first = a.shift();   // first = "Sanjay"

## 2. `unshift()` Method

The `unshift()` method **adds a value at the first position** of an array.

### Syntax

    arrayName.unshift(value);

### Example

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    a.unshift("Arshad");

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Sanjay" | **"Arshad"** |
| 1 | "Aman" | "Sanjay" |
| 2 | "Burhan" | "Aman" |
| 3 | "Rehman" | "Burhan" |
| 4 | — | "Rehman" |

> **`unshift()` adds value at first of an array.**  
> Existing elements shift right by one position.

### Return Value
`unshift()` **returns the new length** of the array:

    var len = a.unshift("Arshad");   // len = 5

## Complete Example

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];

    console.log(a);           // ["Sanjay", "Aman", "Burhan", "Rehman"]

    // Remove first
    a.shift();
    console.log(a);           // ["Aman", "Burhan", "Rehman"]

    // Add to beginning
    a.unshift("Arshad");
    console.log(a);           // ["Arshad", "Aman", "Burhan", "Rehman"]

## shift() vs unshift()

| Feature | `shift()` | `unshift()` |
|---------|-----------|-------------|
| Action | Removes first element | Adds element at beginning |
| Changes length | ✅ Decreases by 1 | ✅ Increases by 1 |
| Returns | Removed element | New length |
| Position | Beginning of array | Beginning of array |

## shift()/unshift() vs pop()/push()

| Operation | Beginning | End |
|-----------|-----------|-----|
| Add | `unshift()` | `push()` |
| Remove | `shift()` | `pop()` |

## Common Use Cases
- **Queues (FIFO)** — `push` to add, `shift` to remove.
- **Undo stacks** — `unshift` to add latest at top.
- **Recent items list** — add new items at the start.
- **Rotating lists** — move first item to the end.

## Performance Note
⚠️ `shift()` and `unshift()` are **slower** than `pop()` and `push()` because they need to **re-index all remaining elements**. Use them only when order at the beginning matters.

## Best Practices
1. Use `push()` / `pop()` when order at the end is enough — they are **faster**.
2. Use `shift()` / `unshift()` when you specifically need the **beginning**.
3. Store the return value if you need it.
4. Remember both methods **mutate** the original array.
5. Check `length` before calling `shift()` on an empty array (returns `undefined`).

## Summary
- **`shift()`** → removes the **first** element.
- **`unshift()`** → adds an element to the **beginning**.
- Both **mutate** the array and change its length.
- `shift()` returns the **removed** element.
- `unshift()` returns the **new length**.
- Opposite of `pop()` / `push()`.
