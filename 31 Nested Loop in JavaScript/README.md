# JavaScript Nested Loop

## Overview
A **nested loop** is a loop placed **inside another loop**. When we use a loop inside another loop, it is called a **nested loop** (or **multiloop**).

Nested loops are useful when working with **two-dimensional data**, like **tables, grids, matrices, and combinations**.

## What is a Nested Loop?
> When we use a **loop inside a loop**, it is called a **nested loop**.

## Nested Loop Syntax in JavaScript

    for (var a = 1; a <= 10; a++) {
        for (var b = 1; b <= 10; b++) {
            statement
        }
    }

### Explanation
- **Outer loop** (`a`) → runs **10 times**.
- **Inner loop** (`b`) → runs **10 times** for **each outer iteration**.
- Total iterations = `10 × 10` = **100**.

## How It Works

    Outer iteration 1:
        Inner runs 1, 2, 3, ... 10
    Outer iteration 2:
        Inner runs 1, 2, 3, ... 10
    ...
    Outer iteration 10:
        Inner runs 1, 2, 3, ... 10

> For **every single outer iteration**, the **inner loop runs to completion**.

## Simple Example — Multiplication Table

    for (var a = 1; a <= 5; a++) {
        for (var b = 1; b <= 5; b++) {
            document.write(a + " × " + b + " = " + (a * b) + "<br>");
        }
        document.write("<br>");   // blank line between rows
    }

### Output (partial)
    1 × 1 = 1
    1 × 2 = 2
    1 × 3 = 3
    1 × 4 = 4
    1 × 5 = 5

    2 × 1 = 2
    2 × 2 = 4
    ...
    5 × 5 = 25

## Example — Star Triangle

    for (var a = 1; a <= 5; a++) {
        for (var b = 1; b <= a; b++) {
            document.write("*");
        }
        document.write("<br>");
    }

### Output
    *
    **
    ***
    ****
    *****

## Example — Number Grid

    for (var a = 1; a <= 3; a++) {
        for (var b = 1; b <= 3; b++) {
            document.write(a + "" + b + " ");
        }
        document.write("<br>");
    }

### Output
    11 12 13
    21 22 23
    31 32 33

## Total Iterations Formula

    Total = outer_count × inner_count

| Outer | Inner | Total Iterations |
|-------|-------|------------------|
| 10 | 10 | 100 |
| 5 | 5 | 25 |
| 3 | 4 | 12 |
| 5 | 5 | 25 |

## Common Use Cases
- **Multiplication tables** — `a × b` for a range of numbers.
- **2D arrays / matrices** — iterating rows and columns.
- **Patterns** — stars, numbers, pyramids.
- **Grids / tables** — rendering HTML tables.
- **Combinations** — pairing each item with every other item.

## Watch Out For
⚠️ **Nested loops multiply the total iterations.**
- If outer = 100 and inner = 100 → **10,000 iterations**.
- If outer = 1000 and inner = 1000 → **1,000,000 iterations**!

This can slow down your program if the loops are too large.

## Best Practices
1. **Limit the size** of nested loops.
2. Use **meaningful variable names** (e.g., `row`, `col`).
3. Break inner loops early with `break` if needed.
4. Consider alternative algorithms for large data.
5. Indent code properly to show the nesting clearly.

## Summary
- **Nested loop** = loop inside a loop (**multiloop**).
- The **inner loop** runs completely for **each iteration** of the outer loop.
- Total iterations = **outer × inner**.
- Ideal for **grids, tables, patterns, and 2D data**.
- Be careful with large loops — they can slow things down.
