# JavaScript DOM Traversal Methods III

## Overview
In Parts I and II, we covered **parents, siblings, and children collections**. In Part III, we focus on the **first and last child** traversal methods — both node-level and element-level versions.

## Target Methods
- `firstChild`
- `firstElementChild`
- `lastChild`
- `lastElementChild`

## 1. `firstChild` — DOM Traversal

> For **targeting first node (text, enter, ...)**.

    var a = document.getElementById("inner").firstChild;
    console.log(a);

### Notes
- Returns the **first child node**.
- Can be a **text node** (whitespace, newline) — often between tags.
- Returns `null` if there are no children.

### Example

    <div id="inner">
        <p>One</p>
        <p>Two</p>
    </div>

    var inner = document.getElementById("inner");
    console.log(inner.firstChild);
    // #text (whitespace before <p>One</p>)

## 2. `firstElementChild` — DOM Traversal

> For **targeting first element tag**.

    var a = document.getElementById("outer").firstElementChild;
    console.log(a);

### Notes
- Returns the **first element child** — ignores text/comments.
- This is usually the **more useful** variant.

### Example

    var outer = document.getElementById("outer");
    console.log(outer.firstElementChild);
    // <p>One</p>

## `firstChild` vs `firstElementChild`

| Feature | `firstChild` | `firstElementChild` |
|---------|--------------|---------------------|
| Returns | First **node** | First **element** |
| Includes text? | ✅ Yes | ❌ No |
| Includes comments? | ✅ Yes | ❌ No |
| Common surprise | Text/whitespace | None |
| Best for | Full node inspection | Element iteration |

## 3. `lastChild` — DOM Traversal

> For **targeting last node (text, enter, ...)**.

    var a = document.getElementById("inner").lastChild;
    console.log(a);

### Notes
- Returns the **last child node**.
- Can also be a **text node** (whitespace before `</div>`).
- Returns `null` if there are no children.

## 4. `lastElementChild` — DOM Traversal

> For **targeting last element tag**.

    var a = document.getElementById("inner").lastElementChild;
    console.log(a);

### Notes
- Returns the **last element child** — ignores text/comments.
- Usually what you want.

## Full Example

    <div id="inner">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
    </div>

    <script>
      var inner = document.getElementById("inner");

      console.log(inner.firstChild);          // #text
      console.log(inner.firstElementChild);   // <p>One</p>

      console.log(inner.lastChild);           // #text
      console.log(inner.lastElementChild);    // <p>Three</p>
    </script>

## Handling Whitespace Surprises

Because HTML formatting (newlines, indentation) creates **text nodes**, `firstChild` and `lastChild` often return whitespace instead of elements.

### Solution 1: Use Element Variants

    inner.firstElementChild;   // ✅ always an element
    inner.lastElementChild;    // ✅ always an element

### Solution 2: Remove Whitespace from HTML

    <div id="inner"><p>One</p><p>Two</p><p>Three</p></div>

Now `firstChild` returns `<p>One</p>`.

### Solution 3: Filter by nodeType

    var first = inner.firstChild;
    while (first && first.nodeType !== 1) {
        first = first.nextSibling;
    }
    console.log(first);   // <p>One</p>

## Common Use Cases

### `firstElementChild` / `lastElementChild`
- **Highlight the first item** in a list.
- **Style the last row** of a table.
- **Animate the entry/exit** of edge items.
- **Get the boundary elements** of a container.

### `firstChild` / `lastChild`
- **Full node inspection** — includes text and comments.
- **Text extraction** — get the actual text node.
- **Custom traversal algorithms**.

## Best Practices
1. Prefer **`firstElementChild`** and **`lastElementChild`** to avoid whitespace surprises.
2. Use **`firstChild` / `lastChild`** when you specifically need node-level access.
3. Always **check for null** before using the result.
4. Cache the result in a **variable** if you use it multiple times.
5. Strip whitespace from HTML if you must use `firstChild`.

## Summary
- **`firstChild`** → first node (may be text).
- **`firstElementChild`** → first element child.
- **`lastChild`** → last node (may be text).
- **`lastElementChild`** → last element child.
- **`*Element*`** versions are almost always what you want.
- Essential for **precise child selection** in the DOM tree.
