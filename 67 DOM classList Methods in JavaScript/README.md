# JavaScript DOM classList Methods

## Overview
The **`classList`** property returns a **DOMTokenList** (array-like) of an element's classes. It provides methods to **add, remove, toggle, check, and access** classes safely — without overwriting existing ones.

## JavaScript classList Methods

| Method | Purpose |
|--------|---------|
| `add(class1, class2, ...)` | Adds one or more classes |
| `remove(class1, class2, ...)` | Removes one or more classes |
| `toggle(class)` | Adds if missing, removes if present |
| `contains(class)` | Checks if class exists (true/false) |
| `item(index)` | Returns class at given index |
| `length` | Number of classes |

## 1. `addClass` — classList Method

> For **adding CSS new properties by event**.
> For **adding CSS new properties by event with a class list**.

### Example

    document.getElementById("header").addEventListener("click", abc);

    function abc() {
        document.getElementById("header").classList.add("xyz");
    }

### Multiple Classes

    el.classList.add("red", "bold", "large");

## 2. `removeClass` — classList Method

> For **removing CSS properties by event with class list**.

    var ele = document.getElementById("header").classList.remove("xyz");

### Multiple Classes

    el.classList.remove("red", "bold");

## 3. `toggleClass` — classList Method

> For **toggling (add / remove) classes with event listener**.

    document.getElementById("header").addEventListener("click", abc);

    function abc() {
        document.getElementById("header").classList.toggle("xyz");
    }

### How It Works
- If the class **exists** → removes it.
- If the class **does not exist** → adds it.

### Multiple Classes

    el.classList.toggle("active", true);   // force add
    el.classList.toggle("active", false);  // force remove

## 4. `toggleItem(index)` — classList Method

> For **editing class by index number**.

    var a = document.getElementById("header").classList.item(0);

### Notes
- `item(0)` returns the **first class**.
- `item(1)` returns the second, etc.
- Returns `null` if the index is out of range.

### Alternative — Bracket Notation

    var first = document.getElementById("header").classList[0];

## 5. `contains(class)` — classList Method

> For **checking if a class exists or not**.

    var a = document.getElementById("header").classList.contains("abc");

> **Returns true or false.**

### Example

    if (el.classList.contains("active")) {
        console.log("Element is active");
    }

## 6. `length` — classList Property

> **For taking the class count on target.**

    var a = document.getElementById("header").classList;

    console.log(a.length);

### Example

    var el = document.getElementById("header");
    console.log(el.classList.length);   // number of classes

## Complete Example

    <div id="header" class="box primary"></div>

    <script>
      var el = document.getElementById("header");

      // Add
      el.classList.add("active");             // box primary active

      // Remove
      el.classList.remove("primary");         // box active

      // Toggle
      el.classList.toggle("highlight");       // box active highlight

      // Contains
      console.log(el.classList.contains("active"));   // true

      // Item by index
      console.log(el.classList.item(0));      // "box"

      // Length
      console.log(el.classList.length);       // 3
    </script>

## Using with Event Listeners

    document.getElementById("header").addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.getElementById("header").classList.toggle("open");
    }

## Common Use Cases
- **Menus** — toggle `open` / `closed`.
- **Themes** — toggle `dark-mode`.
- **Form validation** — add `error`, `success`.
- **Animations** — add `fade-in`, `slide-up`.
- **Active states** — add `active` to current nav item.

## Best Practices
1. Use **`classList.add()` / `classList.remove()`** — safer than `className`.
2. Use **`classList.toggle()`** for interactive states (open/close, on/off).
3. Use **`classList.contains()`** for condition checks.
4. Use **`classList.item(i)`** or **bracket notation** to access by index.
5. **`length`** for counting — no need to split the string.

## Summary
- **`classList`** returns classes as an **array-like object**.
- **`add`** → add one or more classes.
- **`remove`** → remove one or more classes.
- **`toggle`** → add if missing, remove if present.
- **`contains`** → check if a class exists (true/false).
- **`item(index)`** → get class by index.
- **`length`** → number of classes.
- Essential for **modern, dynamic CSS control**.
