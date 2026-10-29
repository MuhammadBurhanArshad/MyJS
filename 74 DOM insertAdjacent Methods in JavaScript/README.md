# JavaScript DOM insertAdjacent Methods

## Overview
The **`insertAdjacent*`** methods let you insert content **at specific positions relative to an element** — without needing to manually create and append each node. They're a modern and flexible alternative to `appendChild()` and `insertBefore()`.

## DOM Append and Create Methods
These are the modern alternatives:
- **`insertAdjacentElement()`**
- **`insertAdjacentHTML()`**
- **`insertAdjacentText()`**

## Uses

### Tag — `insertAdjacentElement()`

    [ Tag ]        →  insertAdjacentElement()
       ↓
    <p></p>

Creates and inserts a **DOM element**.

### Tag with Text — `insertAdjacentHTML()`

    [ Tag with Text ]   →  insertAdjacentHTML()
       ↓
    <p>This is just text</p>

Inserts **HTML string** as element(s).

### Text — `insertAdjacentText()`

    [ Text ]       →  insertAdjacentText()
       ↓
    "This is just text"

Inserts **plain text** (not HTML).

## DOM insertAdjacent Positions

| Position | Where it inserts |
|----------|------------------|
| `"beforebegin"` | **Before** the element itself |
| `"afterbegin"` | **Inside** the element, before first child |
| `"beforeend"` | **Inside** the element, after last child |
| `"afterend"` | **After** the element itself |

## Visual Positions

    <!-- beforebegin -->
    <p id="target">
        <!-- afterbegin -->
        ...existing content...
        <!-- beforeend -->
    </p>
    <!-- afterend -->

## 1. `insertAdjacentElement()` — Insert Element

Inserts a **DOM element** at one of the 4 positions.

### Syntax

    element.insertAdjacentElement(position, newElement);

### Example

    var newElement = document.createElement("h2");
    var newText = document.createTextNode("This is just text");

    newElement.appendChild(newText);

    var target = document.getElementById("test");

    target.insertAdjacentElement("beforebegin", newElement);

### Result
`<h2>This is just text</h2>` is inserted **before** `#test`.

## 2. `insertAdjacentHTML()` — Insert HTML String

Parses the string as **HTML** and inserts it at the position.

### Syntax

    element.insertAdjacentHTML(position, htmlString);

### Example

    var target = document.getElementById("test");

    target.insertAdjacentHTML("beforeend", "<p>Appended via HTML</p>");

### Result
The `<p>Appended via HTML</p>` element is added **inside** `#test`, at the end.

> ⚠️ **Security note:** Never insert untrusted HTML with `insertAdjacentHTML()` — risk of XSS.

## 3. `insertAdjacentText()` — Insert Plain Text

Inserts **plain text** (no HTML parsing) at the position.

### Syntax

    element.insertAdjacentText(position, textString);

### Example

    var target = document.getElementById("test");

    target.insertAdjacentText("afterbegin", "Hello, world! ");

### Result
The literal text `"Hello, world! "` is inserted at the **beginning inside** `#test`.

## Comparison

| Method | Inserts | Parses HTML? |
|--------|---------|--------------|
| `insertAdjacentElement()` | DOM element | ❌ (already a node) |
| `insertAdjacentHTML()` | HTML string | ✅ Yes |
| `insertAdjacentText()` | Text string | ❌ No (literal text) |

## Position Comparison

| Position | Before/After? | Inside/Outside? |
|----------|---------------|-----------------|
| `"beforebegin"` | Before element | Outside |
| `"afterbegin"` | After element's open tag | Inside (first) |
| `"beforeend"` | Before element's close tag | Inside (last) |
| `"afterend"` | After element | Outside |

## Full Example

    <div id="test">Original Content</div>

    <script>
      var target = document.getElementById("test");

      // 1. Element before
      var h2 = document.createElement("h2");
      h2.textContent = "Before Begin";
      target.insertAdjacentElement("beforebegin", h2);

      // 2. HTML at start
      target.insertAdjacentHTML("afterbegin", "<b>Start</b> ");

      // 3. Text at end
      target.insertAdjacentText("beforeend", " End text");

      // 4. Element after
      var p = document.createElement("p");
      p.textContent = "After End";
      target.insertAdjacentElement("afterend", p);
    </script>

### Result HTML

    <h2>Before Begin</h2>
    <div id="test">
      <b>Start</b>
      Original Content
      End text
    </div>
    <p>After End</p>

## insertAdjacent vs appendChild / insertBefore

| Feature | `insertAdjacent*` | `appendChild` / `insertBefore` |
|---------|-------------------|--------------------------------|
| Positions | 4 positions | End / before ref |
| HTML string? | ✅ via `insertAdjacentHTML` | ❌ Requires `innerHTML` |
| Text insertion | ✅ via `insertAdjacentText` | Requires `createTextNode` |
| Flexibility | ✅ High | ⚠️ Limited |

## Common Use Cases
- **Insert at the very start or end** of an element — without creating separate nodes.
- **Add HTML strings** — quick templates.
- **Add plain text** — safe from HTML injection.
- **Insert around an element** — before/after rather than inside.

## Best Practices
1. Use **`insertAdjacentHTML()`** with trusted HTML only.
2. Use **`insertAdjacentText()`** for user-generated content — safe from XSS.
3. Use **`insertAdjacentElement()`** for pre-built DOM nodes.
4. Always **provide a valid position string** — wrong values throw errors.
5. Prefer these methods when you need **precise positioning**.
6. Combined with `createElement`, they form a **complete toolset**.

## Summary
- **`insertAdjacentElement()`** → insert DOM element.
- **`insertAdjacentHTML()`** → insert HTML string.
- **`insertAdjacentText()`** → insert plain text.
- **Positions:** `beforebegin`, `afterbegin`, `beforeend`, `afterend`.
- More **flexible** than `appendChild` / `insertBefore`.
- Essential for **modern dynamic DOM building**.
