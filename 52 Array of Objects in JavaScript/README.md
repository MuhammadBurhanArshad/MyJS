# JavaScript Array of Objects

## Overview
An **array of objects** is an array where each element is an **object**. This is one of the most common data structures in JavaScript — used everywhere from APIs to UI lists.

## Target
- **Array having objects** → array of objects
- **Array of objects** → a list where each item is an object

## Array of Objects — Syntax

    var student = [
        { Name: "Burhan", Age: 18 },
        { Name: "Aman",   Age: 19 },
        { Name: "Rehman", Age: 20 }
    ];

Each element is an **object with properties** (`Name`, `Age`).

## Visual Layout

    Index   Object
    ──────────────────────────────
      0     { Name: "Burhan", Age: 18 }
      1     { Name: "Aman",   Age: 19 }
      2     { Name: "Rehman", Age: 20 }

- **Index** → position in the array (0, 1, 2)
- **Property** → key inside each object (Name, Age)

## Accessing Values

### Access One Object

    student[0];
    // { Name: "Burhan", Age: 18 }

### Access a Property of an Object

    student[0].Name;      // "Burhan"
    student[1].Age;       // 19
    student[2].Name;      // "Rehman"

> Use **two steps**: `arrayName[index].propertyName`.

## Printing the Whole Array

    console.log(student);

Output (in the browser console):

    [
      { Name: "Burhan", Age: 18 },
      { Name: "Aman",   Age: 19 },
      { Name: "Rehman", Age: 20 }
    ]

## Looping Through an Array of Objects — `for` Loop

    for (var a = 0; a < student.length; a++) {
        document.write(student[a].Name + "<br>");
    }

### Step-by-Step
1. `a = 0` → `student[0].Name` → "Burhan"
2. `a = 1` → `student[1].Name` → "Aman"
3. `a = 2` → `student[2].Name` → "Rehman"
4. `a = 3` → `3 < 3` is false → loop ends.

### Output

    Burhan
    Aman
    Rehman

## Looping with `forEach()`

    student.forEach(function (s) {
        document.write(s.Name + " - " + s.Age + "<br>");
    });

### Output

    Burhan - 18
    Aman - 19
    Rehman - 20

## Looping with `for...of`

    for (var s of student) {
        document.write(s.Name + "<br>");
    }

## Common Use Cases
- **List of users** from an API.
- **Products** in a shopping cart.
- **Students / employees** in a database.
- **Records** with multiple fields.

## Best Practices
1. Keep **property names consistent** across objects.
2. Use **meaningful names** for the array (e.g., `students`, `users`).
3. Loop with **`for`, `forEach`, or `for...of`**.
4. Access properties with **dot notation** (`student[i].Name`).
5. Use **`console.log()`** to inspect the full array.

## Summary
- An **array of objects** = array where each element is an object.
- Access with **two indexes**: `arr[index].property`.
- Loop with **`for`, `forEach`, or `for...of`**.
- One of the **most common data structures** in JS.
- Essential for **real-world data** — APIs, databases, UI lists.
