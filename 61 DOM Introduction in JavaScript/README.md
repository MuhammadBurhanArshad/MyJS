# JavaScript DOM Introduction

## Overview
**DOM** stands for **Document Object Model**. It is a programming interface for HTML documents. It represents the page as a **tree of nodes**, allowing JavaScript to **read, change, add, or delete** HTML elements.

## What is DOM?
- **DOM → Document Object Model**
- It represents the HTML document as a **tree structure**.
- It is used by JavaScript to **access and manipulate** HTML elements.

## HTML DOM Tree

The DOM represents the HTML document as a tree. Every HTML element, attribute, and text is a **node** in the tree.

    Document
       ↓
    root (html)
       ├── element: <head>
       │       └── element: <title>
       │              └── text: "A New WebSide"
       └── element: <body>
               ├── element: <nav>
               │       └── text: "About Us"
               ├── element: <div>  (attribute: class)
               └── element: <div>  (attribute: id, class)

## Structure Explained

- **Document** → the whole web page.
- **root (html)** → the top-level element.
- **head / body** → the two main sections.
- **element** → any HTML tag (`<div>`, `<nav>`, `<title>`).
- **text** → the visible content inside an element.
- **attribute** → extra info on an element (`class`, `id`, `href`).

> **These are Nodes** — every part of the DOM is a node.

## Node Types

| Node Type | Example |
|-----------|---------|
| Document | `document` |
| Element | `<div>`, `<h1>` |
| Text | "A New WebSide" |
| Attribute | `class="box"`, `id="header"` |

## Why Use the DOM?
- **Read HTML** — get text, attributes, structure.
- **Change HTML** — update content, styles, classes.
- **Add HTML** — create new elements dynamically.
- **Delete HTML** — remove elements from the page.

## What Can We Do With the DOM?

> ⭐ **We can do two types of works with DOM tree in JavaScript:**
> - **"Get"**
> - **"Set"**

### Get
Read values from the DOM:
- Get an element by ID, class, or tag.
- Get its text, attributes, or styles.

### Set
Modify values in the DOM:
- Set new text, attributes, or styles.
- Create and append new elements.

## How to Access DOM Elements (Preview)

    document.getElementById("demo");
    document.getElementsByClassName("box");
    document.getElementsByTagName("p");
    document.querySelector("#demo");

These return **DOM objects** you can then modify.

## Common DOM Objects

| Object | Description |
|--------|-------------|
| `document` | The whole HTML document |
| `window` | The browser window |
| `document.body` | The `<body>` element |
| `document.head` | The `<head>` element |
| `document.documentElement` | The `<html>` element |

## Key Points
1. **DOM** = representation of HTML as a tree.
2. Every part of the page is a **node**.
3. JavaScript uses DOM to **read and modify** the page.
4. Two main operations: **Get** (read) and **Set** (write).
5. Access via methods like `getElementById`, `querySelector`.

## Best Practices
1. Always wait for the **DOM to load** before accessing (use `DOMContentLoaded`).
2. Use **`querySelector`** for modern, CSS-like selection.
3. Prefer **IDs** for unique elements.
4. Cache selected elements in **variables** for reuse.
5. Use **`console.log()`** to inspect DOM objects.

## Summary
- **DOM** = Document Object Model.
- Represents HTML as a **tree of nodes**.
- Nodes include **elements, text, and attributes**.
- JavaScript can perform **Get** and **Set** operations on the DOM.
- Access with methods like **`getElementById`**, **`querySelector`**.
- Foundation for **all interactivity** on web pages.
