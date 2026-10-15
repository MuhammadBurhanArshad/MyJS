# JavaScript Implementation

## Overview
To run JavaScript, you need only two things:
- **Web Browser** → e.g., Google Chrome
- **HTML Editor** → to write the code

JavaScript can be implemented in an HTML page in **2 ways**:

1. **Internal JavaScript**
2. **External JavaScript**

---

## 1. Internal JavaScript

The `<script>` tag is placed inside the `<head>` section, and JavaScript code is written **directly inside** it.

### Syntax

    <html>
      <head>
        <script>
          // JavaScript code here
        </script>
      </head>
      <body>
        ...
      </body>
    </html>

### Example

    <html>
      <head>
        <script>
          console.log("Hello from Internal JavaScript!");
        </script>
      </head>
      <body>
        <h1>Internal JS Demo</h1>
      </body>
    </html>

✅ Good for small scripts specific to a single page.

---

## 2. External JavaScript

JavaScript code is written in a **separate `.js` file** and linked to HTML using the `src` attribute of `<script>`.

### Syntax

    <html>
      <head>
        <script src="myScript.js"></script>
      </head>
      <body>
        ...
      </body>
    </html>

### Example

**index.html**

    <html>
      <head>
        <script src="myScript.js"></script>
      </head>
      <body>
        <h1>External JS Demo</h1>
      </body>
    </html>

**myScript.js**

    console.log("Hello from External JavaScript!");

✅ **Recommended** — keeps HTML and JS separate, reusable across pages.

---

## ⭐ Best Practice

> **Use `<script>` at the END of `<body>`.**

    <html>
      <head>
        <title>My Page</title>
      </head>
      <body>
        <h1>Hello</h1>

        <script src="myScript.js"></script>
      </body>
    </html>

### Why?
1. HTML content loads **first**, so users see the page faster.
2. Script can safely access all DOM elements (they already exist).
3. Avoids errors like `Cannot read property of null`.

> Most use `full type of implementation` — both internal and external can be combined, but the script must be placed at the **end of body**.

---

## Internal vs External — Comparison

| Feature | Internal | External |
|---------|----------|----------|
| Location | Inside `<script>` in `<head>` | Separate `.js` file linked via `src` |
| Reusability | ❌ Only one page | ✅ Multiple pages |
| Readability | ⚠️ Clutters HTML | ✅ Clean separation |
| Best for | Small snippets | Real projects |

---

## Summary

- **2 ways** to implement JS: **Internal** and **External**
- Use `<script>` tag in `<head>` for both
- **Best practice:** place `<script>` at the **end of `<body>`**
- **External is preferred** for maintainability and reuse
