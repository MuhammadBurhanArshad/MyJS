# Add HTML Tags in JavaScript

## Overview
JavaScript can write HTML directly into a web page using the `<script>` tag along with the `document.write()` method. This is one of the simplest ways to output content dynamically from JavaScript into the browser.

## The `<script>` Tag
All JavaScript code in an HTML page must be wrapped inside the `<script>` tag.

### Syntax

    <script>
      // JavaScript code here
    </script>

## `document.write()` Method
The `document.write()` method writes text or HTML directly into the document at the position where the script is executed.

### Syntax

    document.write("Some text");

You can also embed **HTML tags** inside the string to format the output.

### Example

    <script>
      document.write("<h1>Muhammad Burhan</h1>");
      document.write("<b>Muhammad Burhan</b>");
    </script>

This will produce:
- A large heading: **Muhammad Burhan**
- A bold text: **Muhammad Burhan**

## How It Works
1. The browser reads the HTML file.
2. When it reaches the `<script>` tag, it executes the JavaScript code.
3. `document.write()` inserts the given HTML string into the page at that exact position.

## Common HTML Tags You Can Write

| HTML Tag | Purpose |
|----------|---------|
| `<h1>` – `<h6>` | Headings |
| `<b>` | Bold text |
| `<i>` | Italic text |
| `<u>` | Underline |
| `<p>` | Paragraph |
| `<br>` | Line break |
| `<a>` | Hyperlink |
| `<img>` | Image |

### Example with Multiple Tags

    <script>
      document.write("<h2>Welcome</h2>");
      document.write("<p>This is a paragraph.</p>");
      document.write("<b>Bold</b> and <i>Italic</i>");
    </script>

## ⚠️ Best Practices
1. **Avoid `document.write()` after page load** — it will overwrite the entire page.
2. Prefer modern DOM methods like `innerHTML`, `textContent`, or `createElement()` for dynamic content.
3. Use `document.write()` only for quick demos, tests, or learning purposes.

## Summary
- JavaScript code lives inside the `<script>` tag.
- `document.write()` writes text or HTML to the page.
- HTML tags can be embedded inside the string for formatting.
- Use modern DOM methods in real projects instead of `document.write()`.
