# JavaScript Google Chrome Console

## Overview
The **Chrome Console** is a built-in developer tool that lets you run JavaScript code directly in the browser and view output, warnings, and errors. It's one of the most useful tools for learning and debugging JavaScript.

## How to Open the Console

1. **Right-click** on any browser page.
2. Click **Inspect** (or press `F12` / `Ctrl+Shift+I`).
3. Select the **2nd tab** — **Console**.

## Purpose of the Console
The console is used for:
- **Development purposes** — testing code quickly.
- **Showing JavaScript errors** — so you can fix them.
- It can run **all JavaScript commands**.

## Console Methods

### 1. `console.log()`
Used for **printing something** in the console.

    var x = 50;
    console.log(x);

### 2. `console.table()`
Used for **showing data in table format** in the console.

    console.table([1, 2, 3]);

### 3. `console.error()`
Used for **showing errors** in the console.

    console.error("Something Wrong");

### 4. `console.warn()`
Used for **showing warnings** in the console.

    console.warn("Warning");

### 5. `console.clear()`
Used for **clearing the console**.

    console.clear();

### 6. `console.time()` / `console.timeEnd()`
Used for **measuring the time taken by code** (time of querying).

    console.time("Test");
    console.warn("Warning");
    console.warn("Warning");
    console.timeEnd("Test");

## Summary of Methods

| Method | Purpose |
|--------|---------|
| `console.log()` | Print a value or message |
| `console.table()` | Display data as a table |
| `console.error()` | Display an error message |
| `console.warn()` | Display a warning message |
| `console.clear()` | Clear the console |
| `console.time()` | Start a timer |
| `console.timeEnd()` | Stop the timer and print elapsed time |

## Key Point
> **The Console can run all JavaScript commands.**

You can type any valid JavaScript directly into the console and press Enter to see the result instantly — making it a perfect playground for learning.

## Summary
- Open the console via **Right-click → Inspect → Console tab**.
- Use it for **testing, debugging, and viewing errors**.
- Common methods: `log`, `table`, `error`, `warn`, `clear`, `time`, `timeEnd`.
- The console runs any JavaScript command you type.
