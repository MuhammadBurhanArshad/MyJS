# JavaScript DOM Create Methods

## Overview
In the previous topics, we learned how to **find** existing DOM elements. Now, we learn how to **create new ones** from scratch using JavaScript.

## DOM Create Methods
- `createElement()`
- `createTextNode()`
- `createComment()`

## Use Cases

### Tag

    Tag
     ↓
    <p></p>
     ↓
    createElement()

### Text

    Text
     ↓
    This is just text
     ↓
    createTextNode()

### Comment

    Comment
     ↓
    <!-- just comment -->
     ↓
    createComment()

## 1. `createElement()` — DOM Create Method

> For **creating an element** with JavaScript.

### Syntax

    var newElement = document.createElement("p");

### Example

    var newElement = document.createElement("p");
    console.log(newElement);

### Output

    <p></p>   (an empty paragraph element, not yet in the page)

### Notes
- Creates a **new element** but does **NOT** add it to the page.
- You need to append it using `appendChild()`.

## 2. `createTextNode()` — DOM Create Method

> For **creating text** with JavaScript.

### Syntax

    var newText = document.createTextNode("This is just text");

### Example

    var newText = document.createTextNode("This is just text");
    console.log(newText);

### Output

    "This is just text"   (a text node)

### Notes
- Creates a **text node** — not an element.
- Attach it to an element with `appendChild()`.

## 3. `createComment()` — DOM Create Method

> For **creating a comment** with JavaScript.

### Syntax

    var newComment = document.createComment("This is Comment");

### Example

    var newComment = document.createComment("This is Comment");
    console.log(newComment);

### Output

    <!--This is Comment-->

### Notes
- Creates a **comment node**.
- Attach it to an element with `appendChild()`.

## How to Combine Them

    // Create element
    var newElement = document.createElement("p");

    // Create text
    var newText = document.createTextNode("This is just text");

    // Attach text to element
    newElement.appendChild(newText);

    // Attach element to body
    document.body.appendChild(newElement);

### Result
A `<p>This is just text</p>` is added to the page.

## Complete Example — Element + Text + Comment

    // Create a paragraph
    var p = document.createElement("p");

    // Create text for paragraph
    var text = document.createTextNode("Hello from JS!");

    // Create a comment
    var comment = document.createComment("This paragraph was created via JS");

    // Assemble
    p.appendChild(text);
    document.body.appendChild(comment);
    document.body.appendChild(p);

### Result HTML

    <!--This paragraph was created via JS-->
    <p>Hello from JS!</p>

## Common Use Cases
- **Dynamic content** — add elements after user actions.
- **Lists** — build `<li>` items from data.
- **Comments** — insert developer notes.
- **Templates** — generate HTML structure from JS.
- **UI animations** — create elements then animate them.

## Best Practices
1. Always **append** the created element with `appendChild()`.
2. Use **`createElement()`** for tags.
3. Use **`createTextNode()`** for safe text (no HTML injection).
4. Use **`createComment()`** for developer notes only.
5. Prefer **`textContent`** over `createTextNode` for simple text updates.

## Summary
- **`createElement()`** → creates an element.
- **`createTextNode()`** → creates a text node.
- **`createComment()`** → creates a comment node.
- None of them **add to the page** by themselves — use `appendChild()`.
- Foundation for **dynamic DOM generation**.
