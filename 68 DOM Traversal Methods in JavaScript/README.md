# JavaScript DOM Traversal Methods

## Overview
**DOM Traversal** means **moving around the DOM tree** — from a node to its parent, children, or siblings. JavaScript provides built-in properties to navigate the tree from any reference point.

## DOM Traversal Methods
- `parentNode`
- `parentElement`
- `children`
- `childNodes`
- `firstChild`
- `firstElementChild`
- `lastChild`
- `lastElementChild`
- `nextElementSibling`
- `nextSibling`
- `previousElementSibling`
- `previousSibling`

## DOM Traversal — Visual

    Parent Element →   [ A ]
                      /  |  |  \  \
                    [B] [C] [D] [E] [F]
                     ↑    ↑       ↑    ↑
                firstChild  prev  next  lastChild
                          sibling sibling

- **A** is the parent of B, C, D, E, F.
- **B** is the first child.
- **F** is the last child.
- **C** is the previous sibling of **D**.
- **E** is the next sibling of **D**.

## 1. `parentNode` — DOM Traversal

- For **targeting the parent tag**.
- It returns **something (not null)**.

    var a = document.getElementById("main").parentNode;
    console.log(a);

### Notes
- Returns the **parent node** (could be an element, document, etc.).
- Returns `null` if the node has no parent.

## 2. `parentElement` — DOM Traversal

- For **targeting parent tag**.
- It returns **null if not found something**.

    var a = document.getElementById("main").parentElement;
    console.log(a);

### `parentNode` vs `parentElement`

| Feature | `parentNode` | `parentElement` |
|---------|--------------|-----------------|
| Returns | Any node (incl. document) | Only element nodes |
| If parent is `<html>` | Returns `<html>` | Returns `<html>` |
| For `document` node | Returns `null` | Returns `null` |

## 3. Children vs Child Nodes

| Property | Returns |
|----------|---------|
| `children` | Only **element** children |
| `childNodes` | **All** nodes (text, comments, elements) |

### Example

    var parent = document.getElementById("container");

    console.log(parent.children);       // HTMLCollection of elements
    console.log(parent.childNodes);     // NodeList (includes text/whitespace)

## 4. First and Last Child

| Property | Returns |
|----------|---------|
| `firstChild` | First **node** (may be text) |
| `firstElementChild` | First **element** child |
| `lastChild` | Last **node** (may be text) |
| `lastElementChild` | Last **element** child |

### Example

    var el = document.getElementById("container");

    console.log(el.firstChild);          // first node
    console.log(el.firstElementChild);   // first element
    console.log(el.lastChild);           // last node
    console.log(el.lastElementChild);    // last element

## 5. Siblings

| Property | Returns |
|----------|---------|
| `nextSibling` | Next **node** (may be text) |
| `nextElementSibling` | Next **element** sibling |
| `previousSibling` | Previous **node** (may be text) |
| `previousElementSibling` | Previous **element** sibling |

### Example

    var c = document.getElementById("c");

    console.log(c.nextSibling);            // next node (maybe whitespace text)
    console.log(c.nextElementSibling);     // next element <D>
    console.log(c.previousSibling);        // previous node
    console.log(c.previousElementSibling); // previous element <B>

## Element vs Node — The Difference

**Nodes** include:
- Elements
- Text (including whitespace)
- Comments

**Elements** include:
- Only HTML tags

### Why `*Element*` versions are usually preferred
When you use `firstChild` or `nextSibling`, whitespace (newlines, spaces) inside your HTML often returns **text nodes** instead of the element you expect. That's why `firstElementChild` and `nextElementSibling` are usually safer.

## Full Example

    <div id="parent">
        <p id="first">First</p>
        <p id="second">Second</p>
        <p id="third">Third</p>
    </div>

    <script>
      var second = document.getElementById("second");

      console.log(second.parentNode);           // <div id="parent">
      console.log(second.parentElement);        // <div id="parent">
      console.log(second.previousElementSibling); // <p id="first">
      console.log(second.nextElementSibling);   // <p id="third">
    </script>

## Common Use Cases
- **Walk up the tree** — find a parent or ancestor.
- **Walk down the tree** — iterate children.
- **Navigate siblings** — next/prev items in a list.
- **Skip whitespace** — use `*Element*` variants.
- **Build dynamic UI** — insert/remove/modify relative to a node.

## Best Practices
1. Prefer **`*Element*`** variants (`firstElementChild`, `nextElementSibling`) to avoid text-node surprises.
2. Use **`children`** when you only want **element** children.
3. Use **`childNodes`** when you need **everything** including text.
4. Always **check for `null`** — traversal can return `null` at tree edges.
5. Cache `parentNode` / sibling lookups in **variables** for reuse.

## Summary
- **Traversal** = moving around the DOM tree.
- **Parent** → `parentNode`, `parentElement`.
- **Children** → `children`, `childNodes`, `firstChild`, `firstElementChild`, `lastChild`, `lastElementChild`.
- **Siblings** → `nextSibling`, `nextElementSibling`, `previousSibling`, `previousElementSibling`.
- **`*Element*`** versions skip text/whitespace nodes — safer for most cases.
- Essential for **dynamic DOM manipulation**.
