# JavaScript Array Method pop() & push()

## Overview
The `pop()` and `push()` methods are used to **add** and **remove** elements from the **end** of an array. They are the most commonly used array methods because they operate in **O(1)** time — very fast.

## Array Methods for Now
- **`pop()`** → removes the **last** value
- **`push()`** → adds a value to the **end**

## 1. `pop()` Method

The `pop()` method **removes the last value** from an array.

### Syntax

    arrayName.pop();

### Example

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];
    a.pop();

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Sanjay" | "Sanjay" |
| 1 | "Aman" | "Aman" |
| 2 | "Burhan" | "Burhan" |
| 3 | "Rehman" | *(removed)* |

> **`pop()` removes the last value from an array.**

### Return Value
`pop()` **returns the removed element** — useful if you want to use it:

    var last = a.pop();   // last = "Rehman"

## 2. `push()` Method

The `push()` method **adds a value to the end** of an array.

### Syntax

    arrayName.push(value);

### Example

    var a = ["Sanjay", "Aman", "Burhan"];
    a.push("Rehman");

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Sanjay" | "Sanjay" |
| 1 | "Aman" | "Aman" |
| 2 | "Burhan" | "Burhan" |
| 3 | — | **"Rehman"** |

> **`push()` adds a value to the end of an array.**

### Return Value
`push()` **returns the new length** of the array:

    var len = a.push("Rehman");   // len = 4

## Complete Example

    var a = ["Sanjay", "Aman", "Burhan", "Rehman"];

    console.log(a);      // ["Sanjay", "Aman", "Burhan", "Rehman"]

    // Remove last
    a.pop();
    console.log(a);      // ["Sanjay", "Aman", "Burhan"]

    // Add to end
    a.push("Rehman");
    console.log(a);      // ["Sanjay", "Aman", "Burhan", "Rehman"]

## pop() vs push()

| Feature | `pop()` | `push()` |
|---------|---------|----------|
| Action | Removes last element | Adds element at end |
| Changes length | ✅ Decreases by 1 | ✅ Increases by 1 |
| Returns | Removed element | New length |
| Position | End of array | End of array |

## Common Use Cases
- **Stacks (LIFO)** — `push` to add, `pop` to remove.
- **Building dynamic lists** — keep appending new items.
- **Undo/Redo** — pop the last action.
- **Queue-like structures** (when combined with `shift`/`unshift`).

## Best Practices
1. Use `push()` to add items at the end — **faster than `unshift()`**.
2. Use `pop()` to remove items from the end.
3. Store the return value if you need it (`var removed = arr.pop();`).
4. Remember `pop()` on an **empty array** returns `undefined`.
5. Both methods **mutate** the original array.

## Summary
- **`pop()`** → removes the **last** element.
- **`push()`** → adds an element to the **end**.
- Both are **fast** and **mutate** the array.
- `pop()` returns the **removed** element.
- `push()` returns the **new length**.
