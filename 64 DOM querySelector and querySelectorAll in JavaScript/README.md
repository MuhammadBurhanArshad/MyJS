# JavaScript DOM querySelector() & querySelectorAll()

## Overview
The **`querySelector()`** and **`querySelectorAll()`** methods are the **new DOM targeting methods** in JavaScript. They use **CSS selectors** to find elements — making them more flexible than `getElementById` or `getElementsByClassName`.

## Target Methods
- **`querySelector()`** → returns the **first** matching element
- **`querySelectorAll()`** → returns **all** matching elements

> ⭐ **These are for direct selecting elements.**

## Syntax

    document.querySelector(css selector)
    document.querySelectorAll(css selector)

## 1. `querySelector()` — First Match

Returns the **first element** that matches the CSS selector.

### Syntax

    var a = document.querySelector("#header");

    console.log(a);

### Example

    document.querySelector("#header");         // first element with id="header"
    document.querySelector(".box");            // first element with class="box"
    document.querySelector("p");               // first <p>
    document.querySelector("div > p");         // first <p> inside any <div>

### Notes
- Returns **one element** (or `null` if none found).
- Uses **CSS selectors** — same syntax as in stylesheets.

## 2. `querySelectorAll()` — All Matches

Returns **all elements** matching the CSS selector as a **NodeList**.

### Syntax

    var a = document.querySelectorAll("#header");

    console.log(a);

### Example — Get Attribute

    var a = document.querySelector("#header").getAttribute("class");
    console.log(a);

### Example — Get innerHTML

    var a = document.querySelectorAll("#header").innerHTML;
    console.log(a);

### Notes
- Returns a **NodeList** (array-like, not exactly an array).
- Access by index: `a[0]`, `a[1]`, ...
- Use `.length` to count matches.
- Loop with `forEach()` or a `for` loop.

## Comparison of Both Methods

| Feature | `querySelector()` | `querySelectorAll()` |
|---------|-------------------|----------------------|
| Returns | First match | All matches |
| Type | Element / null | NodeList |
| CSS selectors | ✅ Yes | ✅ Yes |
| Loop needed | ❌ No | ✅ Yes |
| Count | Always 1 or null | `.length` |

## CSS Selector Examples

| Selector | Meaning |
|----------|---------|
| `#header` | id="header" |
| `.box` | class="box" |
| `p` | all `<p>` tags |
| `div p` | `<p>` inside `<div>` |
| `ul > li` | direct `<li>` children of `<ul>` |
| `[type="text"]` | all inputs with `type="text"` |
| `div.box` | `<div class="box">` |
| `#main .item` | `.item` inside `#main` |

## Working with `querySelectorAll()`

### Access by Index

    var items = document.querySelectorAll(".item");
    console.log(items[0]);   // first item
    console.log(items[1]);   // second item

### Loop with for

    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }

### Loop with forEach

    var items = document.querySelectorAll(".item");
    items.forEach(function (item) {
        console.log(item);
    });

## Common Use Cases
- **Modern element selection** — replaces older getters.
- **CSS-style targeting** — complex selections easily.
- **Iterating over multiple elements** — with `querySelectorAll()`.
- **Reading attributes** — `getAttribute()`, `innerHTML`, `innerText`.

## Best Practices
1. Use **`querySelector()`** when you only need one element.
2. Use **`querySelectorAll()`** when you need a list.
3. Prefer **CSS-style selectors** — clean and flexible.
4. Always **check for null** before using a `querySelector` result.
5. Use **`forEach`** to loop over a NodeList.
6. IDs (`#id`) are the **fastest** — prefer them for unique elements.

## Summary
- **`querySelector()`** → first matching element.
- **`querySelectorAll()`** → all matching elements (NodeList).
- Both use **CSS selectors**.
- More **flexible and modern** than `getElementById` / `getElementsByClassName`.
- Essential for **modern DOM manipulation**.
