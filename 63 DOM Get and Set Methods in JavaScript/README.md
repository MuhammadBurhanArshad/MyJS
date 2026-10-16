# JavaScript DOM Get & Set Methods

## Overview
The DOM allows JavaScript to **get** (read) and **set** (write) parts of an HTML page. There are **three things** we can get/set with the DOM: **HTML, Text, and Attributes**.

## What We Can Get with DOM?
- **HTML** — the HTML content inside an element
- **Text** — only the visible text (no tags)
- **Attribute** — extra properties like `class`, `id`, `href`

## DOM Get vs Set Methods

| DOM Get Methods | DOM Set Methods |
|-----------------|-----------------|
| `innerHTML` | `innerHTML` |
| `innerText` | `innerText` |
| `getAttribute()` | `setAttribute()` |
| `getAttributeNode()` | `attributes` |
| `attributes` | `removeAttribute()` |

## 1. `innerText()` — Get & Set Method

> **For getting & setting inner text of target.**

### Get — Read the Text

    var a = document.getElementById("header").innerText;
    console.log(a);

### Set — Write the Text

    var a = document.getElementById("header").innerText = "Burhan";
    console.log(a);

### Notes
- `innerText` returns/assigns only **visible text**.
- Does **not** include HTML tags.
- Respects styling (hidden elements are not included).

## 2. `innerHTML()` — Get & Set Method

> **For getting & setting inner HTML of target.**

### Get — Read the HTML

    var a = document.getElementById("header").innerHTML;
    console.log(a);

### Set — Write the HTML

    var a = document.getElementById("header").innerHTML = "<h1>Burhan</h1>";
    console.log(a);

### Notes
- `innerHTML` includes **HTML tags**.
- Can be used to insert elements dynamically.
- ⚠️ Be careful with user input — potential XSS risk.

## `innerText` vs `innerHTML`

| Feature | `innerText` | `innerHTML` |
|---------|-------------|-------------|
| Returns | Only text | Text + HTML tags |
| Can set HTML? | ❌ No | ✅ Yes |
| Speed | Slower | Faster |
| Use case | Reading content | Building HTML |

## 3. `getAttribute()` — Get Method

> **For getting attribute value.**

    var a = document.getElementById("header").getAttribute("id");
    console.log(a);

### Example

    var el = document.getElementById("header");
    el.getAttribute("class");     // returns class value
    el.getAttribute("href");      // returns href value

## 4. `getAttributeNode()` — Get Method

> **For getting attribute value with node name.**

    var a = document.getElementById("header").getAttributeNode("id");
    console.log(a);

### Return Value
Returns an **Attr node** — an object with `name` and `value`.

## 5. `attributes` — Get Method

> **For getting all attributes in array form.**

- We can also use **index, name, and value after id**.

    var a = document.getElementById("header").attributes;
    console.log(a);

### Example Accessing by Index

    var el = document.getElementById("header");
    console.log(el.attributes[0].name);   // "id"
    console.log(el.attributes[0].value);  // "header"

## 6. `setAttribute()` — Set Method

> **For setting attribute value.**

    var a = document.getElementById("header").setAttribute("class", "xyz");

### Notes
- If the attribute exists → updates it.
- If not → creates it.
- First argument → attribute name.
- Second argument → attribute value.

## 7. `attributes[].value` — Set Method

> **For setting attribute value** (using the array form).

    var a = document.getElementById("header").attributes[1].value = "xyz";

### Notes
- Access the attribute by its index.
- Assign the new value with `=`.

## 8. `removeAttribute()` — Set Method

> **For removing attribute.**

    var a = document.getElementById("header").removeAttribute("style");

### Notes
- Removes the specified attribute entirely.
- If the attribute doesn't exist, nothing happens.

## Summary of Get & Set Methods

| Method | Type | Purpose |
|--------|------|---------|
| `innerText` | Get/Set | Visible text content |
| `innerHTML` | Get/Set | HTML content (with tags) |
| `getAttribute(name)` | Get | Read attribute value |
| `getAttributeNode(name)` | Get | Get Attr node object |
| `attributes` | Get | All attributes (array-like) |
| `setAttribute(name, value)` | Set | Set/update attribute |
| `attributes[i].value` | Set | Set by index |
| `removeAttribute(name)` | Set | Remove attribute |

## Common Use Cases
- **`innerHTML`** → inject HTML from templates.
- **`innerText`** → update visible content.
- **`getAttribute`** → read `href`, `src`, `data-*`.
- **`setAttribute`** → change classes, IDs, `data-*`.
- **`removeAttribute`** → strip disabled, hidden, etc.

## Best Practices
1. Use **`innerText`** to safely update visible text.
2. Use **`innerHTML`** only with trusted content.
3. Prefer **`getAttribute()`** over direct property when reading arbitrary attributes.
4. Use **`setAttribute()`** for classes, data-*, aria-*.
5. Remove attributes you don't need — keeps DOM clean.

## Summary
- **DOM Get/Set** covers **HTML, Text, and Attributes**.
- `innerText` / `innerHTML` — read and write content.
- `getAttribute` / `getAttributeNode` / `attributes` — read attributes.
- `setAttribute` / `attributes[i].value` — write attributes.
- `removeAttribute` — delete attributes.
- Essential for **dynamic HTML updates** with JavaScript.
