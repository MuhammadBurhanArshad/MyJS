# JavaScript DOM addEventListener()

## Overview
The **`addEventListener()`** method attaches an **event handler** to an HTML element without using HTML attributes like `onclick`. It's the **modern, cleaner way** to handle events in JavaScript.

## Target
- **Event Listeners in JavaScript**
- **Event in JavaScript**

## HTML Event Attributes

Traditional way — events written directly in HTML:

    <button onclick="abc()">Click me</button>

    <img src="..." onmouseover="xyz()">

> ⚠️ But **we want to add JavaScript in JavaScript file**.

### So we have two ways:
1. **Assign Events using the HTML DOM**
2. **DOM `addEventListener`**

## 1. Assign Events Using the HTML DOM

Attach an event by assigning a function to an element's event property:

### Syntax

    document.getElementById(id).onclick = functionName;

### Example

    document.getElementById("header").onclick = abc;

    function abc() {
        document.getElementById("header").style.background = "green";
    }

### Notes
- Only **one handler** per event per element (later assignments overwrite earlier ones).
- Uses **`on` prefix** — `onclick`, `onmouseover`, `ondblclick`, etc.

## 2. DOM `addEventListener()` Method

The modern, recommended way — allows **multiple listeners** on the same element.

### Syntax

    document.getElementById(id).addEventListener("click", functionName);

### Example

    document.getElementById("header").addEventListener("click", abc);

    function abc() {
        document.getElementById("header").style.background = "green";
    }

### Advantages
- **Multiple listeners** allowed on the same event.
- No `on` prefix — use `"click"`, `"mouseover"`, `"dblclick"`.
- Cleaner separation of HTML and JavaScript.

## 3 Parameters of `addEventListener()`

    addEventListener(event, function, useCapture);

| Parameter | Purpose |
|-----------|---------|
| **event** | The event name (string), e.g., `"click"` |
| **function** | The function to run when the event fires |
| **useCapture** | `true` or `false` (optional, default `false`) |

### `useCapture`
- **`true`** → **Capture phase** (event travels down from root to target)
- **`false`** → **Bubble phase** (default — event travels up from target to root)

> ⭐ **Use Capture** determines whether the handler runs during capturing or bubbling.

## Full Example

    document.getElementById("header").addEventListener("click", function () {
        document.getElementById("header").style.background = "green";
    });

### With Named Function

    document.getElementById("header").addEventListener("click", changeColor);

    function changeColor() {
        document.getElementById("header").style.background = "green";
    }

## Removing an Event Listener

Use `removeEventListener()` to detach a previously attached handler.

### Syntax

    element.removeEventListener("click", functionName);

### Example

    document.getElementById("header").removeEventListener("click", changeColor);

### Important
- You must pass the **exact same function reference** that was used in `addEventListener()`.
- Anonymous functions **cannot be removed**.

## addEventListener vs HTML Attribute

| Feature | HTML Attribute | addEventListener |
|---------|----------------|------------------|
| Location | In HTML | In JavaScript |
| Multiple handlers | ❌ No | ✅ Yes |
| Prefix | `on` needed | No `on` |
| Removal | Hard | `removeEventListener()` |
| Best practice | ❌ Old | ✅ Modern |

## Common Events

| Event | Fires When |
|-------|-----------|
| `"click"` | Element is clicked |
| `"dblclick"` | Element is double-clicked |
| `"mouseover"` | Mouse enters element |
| `"mouseout"` | Mouse leaves element |
| `"keydown"` | Key is pressed |
| `"keyup"` | Key is released |
| `"submit"` | Form is submitted |
| `"change"` | Input value changes |

## Multiple Listeners on Same Event

    var el = document.getElementById("header");

    el.addEventListener("click", function () {
        console.log("First handler");
    });

    el.addEventListener("click", function () {
        console.log("Second handler");
    });

Both handlers run when the element is clicked.

## Common Use Cases
- **Buttons** — respond to clicks.
- **Forms** — validate on submit.
- **Hover effects** — change styles on `mouseover` / `mouseout`.
- **Keyboard shortcuts** — respond to `keydown` / `keyup`.
- **Dynamic UI** — modals, dropdowns, tabs.

## Best Practices
1. Use **`addEventListener()`** instead of HTML attributes.
2. Give handlers **descriptive names**.
3. Store function references if you plan to **remove** them later.
4. Prefer **`false`** (bubbling) unless you know you need capturing.
5. Use **`once: true`** option to auto-remove after firing:

       el.addEventListener("click", handler, { once: true });

6. Attach listeners **after the DOM is loaded** (`DOMContentLoaded`).

## Summary
- **`addEventListener(event, function, useCapture)`** — modern way to attach events.
- Accepts **3 parameters** — event, function, useCapture.
- Supports **multiple listeners** per event.
- Use **`removeEventListener()`** to detach.
- **`useCapture`** = `true` (capture) or `false` (bubble, default).
- Essential for **interactive, dynamic web pages**.
