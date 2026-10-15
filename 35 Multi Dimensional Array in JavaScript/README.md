# JavaScript Multi Dimensional Array

## Overview
A **multi dimensional array** is an **array inside an array**. It is used to store data in a **table-like structure** with rows and columns — similar to a matrix or a spreadsheet.

## What is a Multi Dimensional Array?
> A multi dimensional array is used for **making an array in array**.

Instead of a single list of values, each element of the outer array is itself an array containing multiple values.

## Syntax of Multi Dimensional Array

    var a = [
        ["Harray", 18, "Male", "B.Com"],
        ["Sunny",  19, "Male", "BCA"],
        ["Burhan", 18, "Male", "CS"]
    ];

Each row represents a **record**, and each column represents a **field**.

## Visual Layout

             0         1        2        3
         ┌─────────┬──────┬────────┬──────────┐
    0    │ Harray  │ 18   │ Male   │ B.Com    │
    1    │ Sunny   │ 19   │ Male   │ BCA      │
    2    │ Burhan  │ 18   │ Male   │ CS       │
         └─────────┴──────┴────────┴──────────┘

- **Outer index** → row (0, 1, 2)
- **Inner index** → column (0, 1, 2, 3)

## Accessing Values
Use **two indexes** — `array[row][column]`:

    a[0][0]   // "Harray"
    a[0][1]   // 18
    a[1][0]   // "Sunny"
    a[2][3]   // "CS"

## Getting the Length

- `a.length` → length of the **outer array** (number of rows)
- `a[0].length` → length of a **specific inner array** (number of columns)

    a.length       // 3
    a[0].length    // 4

> `a.length` is for taking the **length of an array**.

## Looping Through a Multi Dimensional Array

    for (var row = 0; row < a.length; row++) {
        for (var col = 0; col < a[row].length; col++) {
            document.write(a[row][col] + " ");
        }
        document.write("<br>");
    }

This visits every element using **two nested loops**.

## Example — Students Table

    var students = [
        ["Harray", 18, "Male", "B.Com"],
        ["Sunny",  19, "Male", "BCA"],
        ["Burhan", 18, "Male", "CS"]
    ];

    for (var i = 0; i < students.length; i++) {
        document.write(
            students[i][0] + " | " +
            students[i][1] + " | " +
            students[i][2] + " | " +
            students[i][3] + "<br>"
        );
    }

### Output

    Harray | 18 | Male | B.Com
    Sunny  | 19 | Male | BCA
    Burhan | 18 | Male | CS

## Common Use Cases
- **Table / grid data** (rows × columns).
- **Matrices** in math.
- **Game boards** (chess, tic-tac-toe).
- **Records with multiple fields** (students, employees).

## Best Practices
1. Keep all inner arrays the **same length** if possible.
2. Use **meaningful variable names** (`row`, `col`, `students`).
3. Use **nested loops** to traverse.
4. Watch the **index bounds** — `a[3]` doesn't exist if there are only 3 rows.
5. Prefer **literal syntax** `[ [ ], [ ] ]` over `new Array()`.

## Summary
- A **multi dimensional array** = **array inside an array**.
- Access values with **two indexes**: `a[row][col]`.
- `a.length` → outer length; `a[0].length` → inner length.
- Use **nested loops** to iterate.
- Great for **tables, matrices, and records**.
