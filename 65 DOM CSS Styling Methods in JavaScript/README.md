# JavaScript DOM CSS Styling Methods

## Overview
JavaScript can **read and change CSS styles** on HTML elements through the DOM. The three main CSS styling methods are **`style`**, **`className`**, and **`classList`**.

## DOM CSS Styling Methods
- **`style`** → inline CSS properties
- **`className`** → the entire class attribute (string)
- **`classList`** → the class list as an array

## 1. `style` — DOM Targeting (Inline Styles)

Use `.style` to read or set **inline CSS properties** on an element.

### Get — Read a Style Value

    var a = document.querySelector("#header").style.color;
    console.log(a);

### Set — Change a Style Value

    document.querySelector("#header").style.color = "red";
    document.querySelector("#header").style.backgroundColor = "yellow";

### Notes
- Uses **camelCase** for CSS properties (e.g., `backgroundColor`, not `background-color`).
- Only affects **inline styles** — does not read styles applied via CSS classes.
- Returns an **empty string** if the style is not set inline.

## 2. `className` — DOM Targeting (Full Class String)

Use `.className` to read or set the **entire class attribute** as a **string**.

    var a = document.querySelector("#header").className;

### Notes
- Returns a **string** — e.g., `"box red large"`.
- Setting it **replaces all classes** at once.

### Set — Replace All Classes

    document.querySelector("#header").className = "new-class";
    // replaces ALL existing classes with "new-class"

> ⚠️ Using `className` **overwrites** existing classes. Use `classList` for safer operations.

## 3. `classList` — DOM Targeting (Array of Classes)

Use `.classList` to work with an element's classes as an **array-like object**.

    var a = document.querySelector("#header").classList;

> **Return value in array** — a live `DOMTokenList` of class names.

### `classList` Methods

| Method | Purpose |
|--------|---------|
| `classList.add("x")` | Adds a class |
| `classList.remove("x")` | Removes a class |
| `classList.toggle("x")` | Adds if missing, removes if present |
| `classList.contains("x")` | Returns `true` / `false` |
| `classList.replace("a", "b")` | Replaces one class with another |
| `classList.length` | Number of classes |
| `classList.item(i)` | Class at index `i` |

### Examples

    var el = document.querySelector("#header");

    el.classList.add("active");           // add
    el.classList.remove("active");        // remove
    el.classList.toggle("highlight");     // toggle
    el.classList.contains("active");      // true / false
    el.classList.replace("old", "new");   // replace

### Loop Through Classes

    var el = document.querySelector("#header");
    el.classList.forEach(function (c) {
        console.log(c);
    });

## `style` vs `className` vs `classList`

| Feature | `style` | `className` | `classList` |
|---------|---------|-------------|-------------|
| Operates on | Inline CSS | Full class string | Individual classes |
| Type | Object | String | DOMTokenList |
| Setting | Property by property | Replaces all | add/remove/toggle |
| Best for | Dynamic inline styles | Replacing everything | Safe class changes |

## Common Use Cases

### `style` — Dynamic Inline Styles

    el.style.color = "red";
    el.style.fontSize = "20px";
    el.style.display = "none";

### `className` — Replace Everything

    el.className = "new-theme";

### `classList` — Toggle / Add / Remove

    el.classList.toggle("dark-mode");
    el.classList.add("active");
    el.classList.remove("hidden");

## Best Practices
1. Use **`classList`** for adding/removing classes — safer than `className`.
2. Use **`style`** for one-off inline styles (rare in production).
3. Prefer **CSS classes** with `classList` over inline styles.
4. Remember: `style` uses **camelCase** (`fontSize`, `backgroundColor`).
5. Use **`classList.toggle()`** for interactive UI (menus, modals).
6. `className` **overwrites** all classes — handle with care.

## Summary
- **`style`** → get/set **inline CSS** properties.
- **`className`** → get/set the **full class string**.
- **`classList`** → safe **add / remove / toggle** individual classes.
- `classList` returns values **as an array**.
- Prefer **`classList`** for class operations and **`style`** for dynamic inline changes.
- Essential for **interactive UI** and **dynamic theming**.
