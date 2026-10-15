# JavaScript Arrays

## Overview
An **array** is a special variable that can hold **multiple values** in a single variable. Instead of creating many separate variables, you can store related values together in an array.

## Data Types in JavaScript
Before diving into arrays, here are the main data types in JavaScript:

- **String**
- **Number**
- **Boolean**
- **Array**
- **Object**
- **Null**
- **Undefined**

## What is an Array?

A normal variable holds **one value**:

    var a = 10;

But what if we want to store **multiple values**? We use an array.

### ❌ Wrong Ways

    var a = 10, 20, 30;          // ❌ Error
    var a = "10, 20, 30";        // ❌ This is a String, not an Array

### ✅ Correct Way — Array

    var a = [10, 20, 30];        // ✅ Array

Values are enclosed in **square brackets** `[ ]` and separated by **commas**.

## How an Array Stores Values

    var a = [10, 20, 30]
             0   1   2    ← index

Each value in an array is called an **element**, and each element has a numeric position called an **index**.

| Index | Value |
|-------|-------|
| 0 | 10 |
| 1 | 20 |
| 2 | 30 |

> ⚠️ **Indexing in JavaScript starts from 0**, not 1.

## Accessing Array Elements

    var a = [10, 20, 30];

    document.write(a[0]);   // 10
    document.write(a[1]);   // 20
    document.write(a[2]);   // 30

## Array with Strings

    var names = ["Burhan", "Ali", "Sara"];

    document.write(names[0]);   // Burhan
    document.write(names[1]);   // Ali
    document.write(names[2]);   // Sara

## Array with Mixed Types

    var mixed = [10, "Hello", true, null];

JavaScript arrays can hold values of **different data types**.

## Array Length

The `.length` property gives the **total number of elements** in an array.

    var a = [10, 20, 30];

    document.write(a.length);   // 3

## Values Stored in Indexing in Array
- Each value is stored at a specific **index** (starting from `0`).
- You can **access** any value using its index: `arrayName[index]`.
- You can **update** any value: `arrayName[index] = newValue;`

### Example — Update a Value

    var a = [10, 20, 30];
    a[1] = 99;

    document.write(a);   // 10,99,30

## Key Points
1. Arrays store **multiple values** in one variable.
2. Declared using **square brackets** `[ ]`.
3. Each element has an **index**, starting from `0`.
4. Access values with `arrayName[index]`.
5. `.length` gives the total number of elements.

## Summary
- **Array** = a variable that holds multiple values.
- **Syntax:** `var a = [value1, value2, value3];`
- Values are stored by **index** (0, 1, 2, ...).
- Use `.length` to get the total count.
- Arrays can hold **any type** of value.
