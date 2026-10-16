# JavaScript DOM Targeting Methods

## Overview
**DOM Targeting** means **selecting** specific HTML elements from the page so you can work with them (read, change, add, or delete). JavaScript provides several built-in methods for this — the three **most important** are `getElementById`, `getElementsByClassName`, and `getElementsByTagName`.

## Additional Operations
- We can also **"Add HTML Element"** and **"Delete HTML Element"**.

## How to Target a DOM Object

### The Three Basic Methods

| Target | Method |
|--------|--------|
| **Id** | `document.getElementById(id)` |
| **Class Name** | `document.getElementsByClassName(name)` |
| **Tag Name** | `document.getElementsByTagName(name)` |

> ⭐ **These three are the basic and most important methods of DOM targeting.**

## 1. `getElementById()` — Target by ID

> For returning a **tag or value by searching id**.

    var element;
    element = document.getElementById("Burhan");
    console.log(element);

### Notes
- Returns **one element** (the first with that ID).
- IDs should be **unique** on a page.

## 2. `getElementsByClassName()` — Target by Class

> For returning **tag or value by searching class**.

    var element;
    element = document.getElementsByClassName("Burhan");
    console.log(element);

### Notes
- Returns an **HTMLCollection** (array-like).
- Multiple elements can have the same class.

## 3. `getElementsByTagName()` — Target by Tag

> For returning **tag or value by searching name**.

    var element;
    element = document.getElementsByTagName("Burhan");
    console.log(element);

### Notes
- Returns an **HTMLCollection** of all matching tags.
- Use `"*"` to get **all elements** on the page.

## Other DOM Targeting Methods

### Document Properties

| Property | Description |
|----------|-------------|
| `document` | The whole document object |
| `document.all` | All elements as an array |
| `document.documentElement` | The `<html>` element |
| `document.head` | The `<head>` element |
| `document.title` | The `<title>` text |
| `document.body` | The `<body>` element |
| `document.images` | All `<img>` elements |
| `document.anchors` | All `<a>` elements with a name |
| `document.links` | All `<a>` links |
| `document.forms` | All `<form>` elements |
| `document.doctype` | The DOCTYPE declaration |
| `document.URL` | The full page URL |
| `document.baseURI` | The base URL of the page |
| `document.domain` | The domain of the page |

## Example — Printing DOM Tree of Any Web (Document)

    var element;
    element = document;
    console.log(element);

## Example — Printing DOM as an Array (`document.all`)

    var element;
    element = document.all;
    console.log(element);

## Example — `document.head`

> For printing the **head of any web**.

    var element;
    element = document.head;
    console.log(element);

## Example — `document.title`

> For printing **title tag of any web**.

    var element;
    element = document.title;
    console.log(element);

## Example — `document.body`

> For printing the **body tag**.

    var element;
    element = document.body;
    console.log(element);

## Example — `document.links`

> For targeting **all links of page**.

    var element;
    element = document.links;
    console.log(element);

## Example — `document.images`

> For returning **images of page (as an array)**.

    var element;
    element = document.images;
    console.log(element);

## Example — `document.forms`

> For returning **forms of page**.

    var element;
    element = document.forms;
    console.log(element);

## Example — `document.doctype`

> For returning the **document type**.

    var element;
    element = document.doctype;
    console.log(element);

## Example — `document.URL`

> For returning the **URL of the page**.

    var element;
    element = document.URL;
    console.log(element);

## Example — `document.domain`

> For **getting the domain**.

    var element;
    element = document.domain;
    console.log(element);

## Example — `document.baseURI`

> For **targeting and getting the URL**.

    var element;
    element = document.baseURI;
    console.log(element);

## Summary of Targeting Methods

| Method / Property | Returns | Use Case |
|-------------------|---------|----------|
| `getElementById(id)` | Element | Single unique element |
| `getElementsByClassName(name)` | HTMLCollection | Multiple by class |
| `getElementsByTagName(name)` | HTMLCollection | Multiple by tag |
| `document.all` | HTMLCollection | All elements |
| `document.head` | Element | `<head>` |
| `document.title` | String | Page title |
| `document.body` | Element | `<body>` |
| `document.links` | HTMLCollection | All `<a>` links |
| `document.images` | HTMLCollection | All `<img>` |
| `document.forms` | HTMLCollection | All `<form>` |
| `document.doctype` | DocumentType | DOCTYPE node |
| `document.URL` | String | Full URL |
| `document.baseURI` | String | Base URL |
| `document.domain` | String | Domain name |

## Best Practices
1. Use **`getElementById`** for unique, fast selection.
2. Use **`querySelector`** / **`querySelectorAll`** for CSS-style selection (modern).
3. Always **check for null** before using the result.
4. Use **`console.log(element)`** to inspect the returned object.
5. Remember `document.URL` returns a **string**, not an element.

## Summary
- **DOM targeting** = selecting elements to work with.
- **3 basic methods**: `getElementById`, `getElementsByClassName`, `getElementsByTagName`.
- **Other properties**: `document.head`, `title`, `body`, `links`, `images`, `forms`, `doctype`, `URL`, `baseURI`, `domain`.
- Use **`console.log()`** to print and inspect the results.
- Foundation for **all DOM manipulation**.
