# JavaScript DOM Traversal Methods II

## Overview
In Part I we covered **parents** and **siblings**. In Part II, we focus on **children** — specifically `children` and `childNodes`, and how they differ when navigating downward in the DOM tree.

## 1. `children` — DOM Traversal

> For **targeting children elements**.

    var a = document.getElementById("inner").children;

### Notes
- Returns an **HTMLCollection** of **only element** children.
- Text nodes, comments, and whitespace are **ignored**.
- **For specific children, we can use indexing**.

### Example — Access by Index

    var inner = document.getElementById("inner");

    inner.children[0];   // first child element
    inner.children[1];   // second child element
    inner.children[2];   // third child element

### Example — Loop

    var inner = document.getElementById("inner");

    for (var i = 0; i < inner.children.length; i++) {
        console.log(inner.children[i]);
    }

### Example — `.length`

    console.log(inner.children.length);   // number of element children

## 2. `childNodes` — DOM Traversal

> For **returning every node like text**.

    var a = document.getElementById("inner").childNodes;

### Notes
- Returns a **NodeList** including:
  - **Element nodes** (`<p>`, `<div>`)
  - **Text nodes** (whitespace, newlines)
  - **Comment nodes** (`<!-- -->`)
- **It returns every node — every single node.**
- **We can also use indexing.**

### Example — Access by Index

    var inner = document.getElementById("inner");

    inner.childNodes[0];   // could be a text node (whitespace!)
    inner.childNodes[1];   // element or text depending on HTML
    inner.childNodes[2];   // ...

### Example — Loop with Node Type Check

    var inner = document.getElementById("inner");

    for (var i = 0; i < inner.childNodes.length; i++) {
        if (inner.childNodes[i].nodeType === 1) {   // 1 = element
            console.log("Element:", inner.childNodes[i]);
        }
    }

### Node Types

| Value | Type |
|-------|------|
| 1 | Element |
| 2 | Attribute |
| 3 | Text |
| 8 | Comment |
| 9 | Document |

## `children` vs `childNodes`

| Feature | `children` | `childNodes` |
|---------|-----------|--------------|
| Returns | HTMLCollection | NodeList |
| Includes | **Only elements** | **All nodes** |
| Includes whitespace? | ❌ No | ✅ Yes |
| Includes comments? | ❌ No | ✅ Yes |
| Live collection? | ✅ Yes | ✅ Yes |
| Best for | Element iteration | Full node inspection |

## Visual Comparison

Suppose this HTML:

    <div id="inner">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
    </div>

### `children` sees:

    [<p>One</p>, <p>Two</p>, <p>Three</p>]         length = 3

### `childNodes` sees:

    [#text, <p>One</p>, #text, <p>Two</p>, #text, <p>Three</p>, #text]  length = 7

> The `#text` entries are whitespace — newlines and indentation between the tags.

## Common Use Cases

### `children`
- **Iterate over elements only** — lists, menus, cards.
- **Access specific children** by index.
- **Count elements** in a container.
- **Style or manipulate** child elements.

### `childNodes`
- **Full inspection** — including text and comments.
- **Find text nodes** for content manipulation.
- **Debug** whitespace issues.
- **Traverse when every node matters**.

## Best Practices
1. Use **`children`** when you only care about **element** children.
2. Use **`childNodes`** when you need **all nodes**.
3. Filter by `nodeType === 1` to skip text/comment nodes.
4. Use **indexing** (`children[0]`) to target specific children.
5. Cache the collection in a **variable** for efficiency.
6. Remember: both are **live** — they update when the DOM changes.

## Summary
- **`children`** → element children only.
- **`childNodes`** → all nodes (text, comments, elements).
- **Indexing** works on both collections.
- Use `nodeType === 1` to filter elements in `childNodes`.
- **Prefer `children`** for element-only iteration.
- Essential for **walking down** the DOM tree.
