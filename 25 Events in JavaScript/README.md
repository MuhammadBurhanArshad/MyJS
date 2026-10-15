# JavaScript Events

## Overview
An **event** is an action that happens in the browser — like a user clicking a button, pressing a key, moving the mouse, or the page loading. JavaScript can **respond to these events** by running code.

## JavaScript Basic Events

### Mouse Events
- **Click**
- **Double click**
- **Right click**
- **Mouse Hover**
- **Mouse Out**
- **Mouse Down**
- **Mouse Up**

### Keyboard Events
- **Key Press**
- **Key Up**

### Window / Document Events
- **Load**
- **Unload**
- **Resize**
- **Scroll**

## JavaScript Basic Events (Attribute)

Each event has a corresponding **HTML attribute** that you can use to attach a handler.

| Event | Attribute |
|-------|-----------|
| Click | `onclick` |
| Double Click | `ondblclick` |
| Right Click | `oncontextmenu` |
| Mouse Hover | `onmouseenter` |
| Mouse Out | `onmouseout` |
| Mouse Down | `onmousedown` |
| Mouse Up | `onmouseup` |
| Key Press | `onkeypress` |
| Key Up | `onkeyup` |
| Load | `onload` |
| Unload | `onunload` |
| Resize | `onresize` |
| Scroll | `onscroll` |

## Example

    <script>
      function hello() {
        alert("Hello Everyone");
      }
    </script>

    <button onclick="hello()">Click me</button>

### Explanation
1. A function `hello()` is defined in a `<script>` tag.
2. A `<button>` element has an `onclick` attribute.
3. When the user **clicks** the button, the `hello()` function runs.
4. The `alert("Hello Everyone")` popup appears.

## How Event Attributes Work
- The attribute name (`onclick`, `onmouseover`, etc.) **tells the browser what event to listen for**.
- The attribute value is the **code to run** when the event fires.
- It can be a **function call** like `hello()` or a **direct statement** like `alert('Hi')`.

## More Examples

### Mouse Hover

    <p onmouseenter="this.style.color='red'">Hover over me</p>

### Key Press

    <input type="text" onkeypress="console.log('Key pressed')" />

### Load

    <body onload="alert('Page loaded')">

### Scroll

    <div onscroll="console.log('Scrolled')" style="overflow:auto; height:100px;">
      ...
    </div>

## Common Use Cases
- **Buttons** → `onclick`, `ondblclick`
- **Images / Text** → `onmouseenter`, `onmouseout`
- **Inputs** → `onkeypress`, `onkeyup`
- **Page behavior** → `onload`, `onunload`, `onresize`, `onscroll`

## Best Practices
1. Prefer **external JS** with `addEventListener()` over inline attributes for large projects.
2. Keep the event handler code **short and focused**.
3. Use **descriptive function names** (e.g., `handleClick`, `handleSubmit`).
4. Avoid attaching many inline events to the same element.
5. Test event behavior across **different browsers**.

## Summary
- **Events** are user or browser actions.
- **Event attributes** like `onclick` attach handlers to HTML elements.
- **Mouse events**: click, dblclick, mouseover, mouseout, mousedown, mouseup.
- **Keyboard events**: keypress, keyup.
- **Window events**: load, unload, resize, scroll.
- Use events to make pages **interactive and responsive**.
