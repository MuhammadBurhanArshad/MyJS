# JavaScript Comments

## Overview
Comments are lines of text in your code that are **ignored by the JavaScript engine**. They are used to explain code, leave notes, or temporarily disable parts of code. JavaScript supports **two types** of comments.

## Two Types of Comments

### 1. Single Line Comment
Starts with `//`. Everything after `//` on that line is ignored.

**Syntax:**

    // This is a single line comment

**Example:**

    <script>
      document.write("Burhan"); // Comment
    </script>

✅ Best for short explanations on a single line.

---

### 2. Multiple Line Comment
Starts with `/*` and ends with `*/`. Everything between them is ignored, even across multiple lines.

**Syntax:**

    /*
      This is a
      multiple line comment
    */

**Example:**

    <script>
      document.write("Burhan"); /* This is
      Multiple line Comment */
    </script>

✅ Best for longer descriptions or temporarily disabling blocks of code.

---

## Comparison

| Feature | Single Line | Multiple Line |
|---------|-------------|---------------|
| Symbol | `//` | `/* ... */` |
| Lines covered | One line | One or many lines |
| Use case | Short notes | Long descriptions / block disable |

## Why Use Comments?
1. **Explain** complex logic to others (and future you).
2. **Document** what a function or block does.
3. **Debug** by disabling code temporarily.
4. **Organize** code into readable sections.

## Best Practices
1. Keep comments **short and meaningful**.
2. Do **not** state the obvious — explain *why*, not *what*.
3. Update comments when code changes.
4. Avoid commenting out large chunks of code in production.
5. Use multiple line comments for **headers/section dividers**.

## Summary
- JavaScript has **2 types** of comments: **single line (`//`)** and **multiple line (`/* ... */`)**.
- Comments are ignored by the JS engine.
- Use them to explain, document, debug, and organize your code.
