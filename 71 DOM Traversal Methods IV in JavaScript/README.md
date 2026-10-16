# JavaScript DOM Traversal Methods IV

## Overview
In Parts I–III we covered parents, children, and first/last child. In Part IV, we focus on **siblings** — moving horizontally in the DOM tree using the four sibling traversal properties.

## Target Methods
- `nextElementSibling`
- `nextSibling`
- `previousSibling`
- `previousElementSibling`

## 1. `nextElementSibling` — DOM Traversal

> For **targeting next tag**.

    var a = document.getElementById("child-c").nextElementSibling;
    console.log(a);

### Notes
- Returns the **next element sibling** — ignores text/comments.
- Returns `null` if there is no next element sibling.

## 2. `previousElementSibling` — DOM Traversal

> For **targeting previous tag**.

    var a = document.getElementById("child-c").previousElementSibling;
    console.log(a);

### Notes
- Returns the **previous element sibling** — ignores text/comments.
- Returns `null` if there is no previous element sibling.

## 3. `nextSibling` — DOM Traversal

> For **targeting next node (text, enter, ...)**.

    var a = document.getElementById("child-c").nextSibling;
    console.log(a);

### Notes
- Returns the **next node** — can be a **text node** (whitespace).
- Use `nextElementSibling` to skip whitespace.

## 4. `previousSibling` — DOM Traversal

> For **targeting previous node (text, enter, ...)**.

    var a = document.getElementById("child-c").previousSibling;
    console.log(a);

### Notes
- Returns the **previous node** — can be a **text node**.
- Use `previousElementSibling` to skip whitespace.

## Comparison: Element vs Node Siblings

| Feature | `nextElementSibling` / `previousElementSibling` | `nextSibling` / `previousSibling` |
|---------|------------------------------------------------|-----------------------------------|
| Returns | **Element** sibling | Any **node** sibling |
| Includes text nodes? | ❌ No | ✅ Yes |
| Includes comments? | ❌ No | ✅ Yes |
| Common surprise | None | Whitespace |
| Best for | Element navigation | Full node inspection |

## Visual Example

Given this HTML:

    <div id="parent">
        <p id="child-a">A</p>
        <p id="child-b">B</p>
        <p id="child-c">C</p>
        <p id="child-d">D</p>
    </div>

### For `#child-c`:

| Property | Returns |
|----------|---------|
| `nextElementSibling` | `<p id="child-d">D</p>` |
| `previousElementSibling` | `<p id="child-b">B</p>` |
| `nextSibling` | `#text` (whitespace) |
| `previousSibling` | `#text` (whitespace) |

## Practical Example

    var c = document.getElementById("child-c");

    console.log(c.nextElementSibling);       // <p id="child-d">D</p>
    console.log(c.previousElementSibling);   // <p id="child-b">B</p>

    console.log(c.nextSibling);              // #text
    console.log(c.previousSibling);          // #text

## Moving Through Siblings

### Move Forward (Element-wise)

    let node = document.getElementById("child-a");

    while (node) {
        console.log(node.id);
        node = node.nextElementSibling;
    }
    // child-a, child-b, child-c, child-d

### Move Backward (Element-wise)

    let node = document.getElementById("child-d");

    while (node) {
        console.log(node.id);
        node = node.previousElementSibling;
    }
    // child-d, child-c, child-b, child-a

## Why Use Element Variants?

Because **HTML formatting** creates whitespace text nodes:

    <div>
        <p>A</p>    ← #text before this
        <p>B</p>    ← #text before this
        <p>C</p>
    </div>

`nextSibling` on `<p>A</p>` would return **#text** (whitespace), not `<p>B</p>`.

Using `nextElementSibling` returns the actual `<p>B</p>` — usually what you want.

## Common Use Cases

### `nextElementSibling`
- **Next item** in a list/table.
- **Skip forward** in a form.
- **Highlight adjacent element**.

### `previousElementSibling`
- **Previous item** in a list.
- **Skip backward** in a form.
- **Undo navigation**.

### `nextSibling` / `previousSibling`
- **Full node inspection** (text, comments).
- **Custom traversal algorithms**.
- **Whitespace-sensitive operations**.

## Best Practices
1. Prefer **`nextElementSibling`** / **`previousElementSibling`** to skip whitespace.
2. Use **`nextSibling`** / **`previousSibling`** when you need full node info.
3. Always **check for `null`** at the edges of the tree.
4. Use **`while` loops** to walk through siblings.
5. Cache the starting element in a **variable**.

## Summary
- **`nextElementSibling`** → next element sibling.
- **`previousElementSibling`** → previous element sibling.
- **`nextSibling`** → next node (may be text).
- **`previousSibling`** → previous node (may be text).
- Prefer **Element variants** to avoid whitespace surprises.
- Essential for **horizontal navigation** in the DOM.
