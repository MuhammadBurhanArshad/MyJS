# JavaScript Modify and Remove Array Element

## Overview
Arrays are **mutable** — you can change their contents after creating them. You can **modify** an existing element or **remove** an element using simple JavaScript syntax.

## Modify Array Element
To modify an element, simply **assign a new value** to its index.

### Syntax

    arrayName[index] = newValue;

### Example

    var a = ["Burhan", 17, "BBA"];
    a[1] = 18;

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Burhan" | "Burhan" |
| 1 | 17 | **18** |
| 2 | "BBA" | "BBA" |

> The value at index `1` was changed from `17` to `18`.

## Remove Array Element
To remove an element, use the **`delete`** keyword.

### Syntax

    delete arrayName[index];

### Example

    var a = ["Burhan", 18, "BCA"];
    delete a[1];

### Before and After

| Index | Before | After |
|-------|--------|-------|
| 0 | "Burhan" | "Burhan" |
| 1 | 18 | **`undefined`** |
| 2 | "BCA" | "BCA" |

> ⚠️ **Important:** The `delete` keyword **does NOT shift** the remaining elements. It only removes the value, leaving an **empty slot** (`undefined`) at that index.

## `delete` vs `splice` — The Difference

| Method | Effect | Length changes? |
|--------|--------|-----------------|
| `delete a[1]` | Value becomes `undefined`, **hole remains** | ❌ No |
| `a.splice(1, 1)` | Element is **fully removed**, others shift | ✅ Yes |

### Example — `delete` leaves a hole

    var a = ["Burhan", 18, "BCA"];
    delete a[1];
    // a → ["Burhan", undefined, "BCA"]
    // a.length → 3

### Example — `splice` removes cleanly

    var a = ["Burhan", 18, "BCA"];
    a.splice(1, 1);
    // a → ["Burhan", "BCA"]
    // a.length → 2

## Complete Example

    var a = ["Burhan", 17, "BBA"];

    // 1. Modify
    a[1] = 18;
    document.write(a);       // Burhan,18,BBA

    // 2. Remove
    var b = ["Burhan", 18, "BCA"];
    delete b[1];
    document.write(b);       // Burhan,,BCA

## Key Points
1. **Modify** → assign a new value with `arrayName[index] = value;`
2. **Remove** → use `delete arrayName[index];`
3. `delete` leaves **`undefined`** in place of the removed value.
4. To **fully remove** and shift elements, use **`splice()`** instead.
5. Always check the array after modification to see the effect.

## Best Practices
1. Use `arrayName[index] = value;` for updating values.
2. Prefer **`splice()`** over `delete` when you want clean removal.
3. Avoid leaving "holes" in arrays — they cause bugs.
4. Use `console.log()` or `document.write()` to verify the result.
5. Remember that `delete` does **not** update `array.length`.

## Summary
- **Modify:** `arrayName[index] = newValue;`
- **Remove:** `delete arrayName[index];`
- `delete` leaves an **empty slot** (`undefined`), not a shift.
- Use **`splice()`** for a clean removal.
- Arrays are mutable — change them carefully.
