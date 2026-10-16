# JavaScript Array Methods toString(), valueOf() & fill()

## Overview
These three methods **convert** or **fill** an array:
- **`toString()`** → converts an array into a **string**.
- **`valueOf()`** → returns the **array itself**.
- **`fill()`** → fills all elements with a **static value**.

## Target Methods
- **`toString()`** → array to string
- **`valueOf()`** → returns the array
- **`fill()`** → fills with a value

## 1. `toString()` Function

The `toString()` method is used for **changing an array to a string**.

> The `toString()` method **converts an array into a string** and returns the result.

### Syntax

    arrayName.toString();

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    a.toString();
    document.write(a);

### Result

    Sanjay,Aman,Burhan

The elements are joined by **commas** by default.

### Step-by-Step
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. `a.toString()` → `"Sanjay,Aman,Burhan"`
3. `document.write(a)` prints the string.

> ⚠️ `toString()` does **not** change the original array — it returns a **new string**.

## 2. `valueOf()` Function

The `valueOf()` method **returns the array**.

> The `valueOf()` method **returns the array itself**.

### Syntax

    arrayName.valueOf();

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    document.write(a.valueOf());

### Result

    Sanjay,Aman,Burhan

It looks identical to `toString()` when printed, because both arrays and strings use the same default representation when passed to `document.write()`.

### Difference Between `toString()` and `valueOf()`

| Feature | `toString()` | `valueOf()` |
|---------|--------------|-------------|
| Returns | **String** | **Array** |
| Type of result | `"string"` | `"object"` |
| Original | Unchanged | Unchanged |

> For arrays, `valueOf()` returns the array itself — `toString()` returns a string version of it.

## 3. `fill()` Function

The `fill()` method **fills all the elements** in an array with a **static value**.

### Syntax

    arrayName.fill(value);

### Example from Notes

    var a = ["Sanjay", "Aman", "Burhan"];
    a.fill("Hello");
    document.write(a);

### Result

    Hello,Hello,Hello

### Step-by-Step
1. `a = ["Sanjay", "Aman", "Burhan"]`
2. `a.fill("Hello")` → replaces **all** elements with `"Hello"`.
3. `a` becomes `["Hello", "Hello", "Hello"]`.

> ⚠️ `fill()` **mutates** the original array.

### Advanced — Fill with Start and End

    var a = [1, 2, 3, 4, 5];

    a.fill(0, 2, 4);
    // a → [1, 2, 0, 0, 5]

- **start** = 2, **end** = 4 → fills positions 2 and 3 only.

## Complete Example

    var a = ["Sanjay", "Aman", "Burhan"];

    a.toString();        // "Sanjay,Aman,Burhan"  (string)
    a.valueOf();         // ["Sanjay", "Aman", "Burhan"]  (array)
    a.fill("Hello");     // ["Hello", "Hello", "Hello"]

## Comparison Table

| Method | Purpose | Mutates? | Returns |
|--------|---------|----------|---------|
| `toString()` | Convert to string | ❌ No | String |
| `valueOf()` | Return the array | ❌ No | Array |
| `fill()` | Fill with a value | ✅ Yes | Modified array |

## Common Use Cases

### toString()
- **Logging** array contents.
- **Displaying** data on the page.
- **Comparing** arrays via string equality.

### valueOf()
- **Getting the raw array** when needed.
- **Explicitly** returning the array reference.
- **Debugging** — see the array as-is.

### fill()
- **Initializing** an array with default values.
- **Resetting** an array.
- **Creating dummy data** for testing.

## Best Practices
1. Use **`toString()`** for string conversion.
2. Use **`valueOf()`** when you need the **array itself**.
3. Use **`fill()`** carefully — it **mutates** the array.
4. Remember: `toString()` joins with **commas** by default.
5. Use `join()` if you need a **custom separator** (see Topic 40).

## Summary
- **`toString()`** → converts array to string → returns string.
- **`valueOf()`** → returns the array itself.
- **`fill()`** → fills all elements with a static value (mutates).
- `fill()` supports **start** and **end** arguments.
- These are **target methods** for formatting and initialization.
