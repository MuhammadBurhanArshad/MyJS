# JavaScript Arrays II

## Overview
In the previous topic we learned the **literal** way to create arrays. In this topic we learn **another way** to create arrays using the `new Array()` constructor — useful when you don't yet have values to store.

## Another Way to Create Arrays

### 1. Old Way (Array Literal)

    var a = [10, 20, 30];      // → old way

### 2. Another Way (`new Array()` constructor)

    var a = new Array();       // → another way

We use this method for **making an array when we don't have values to store in it**.

## Specifying the Size

You can specify the **number of values** by giving it a number:

    var a = new Array(3);

This creates an array with **3 empty slots** (`undefined` values).

## Comparison of the Two Ways

| Feature | Literal `[ ]` | Constructor `new Array()` |
|---------|---------------|---------------------------|
| Syntax | `var a = [10, 20, 30];` | `var a = new Array();` |
| When to use | You have values ready | You don't have values yet |
| Can specify size | ❌ Not directly | ✅ Yes, with a number |
| Preferred in modern code | ✅ Yes | ⚠️ Less common |

## Examples

### Empty Array — Literal

    var a = [];
    a[0] = 10;
    a[1] = 20;
    a[2] = 30;

### Empty Array — Constructor

    var a = new Array();
    a[0] = 10;
    a[1] = 20;
    a[2] = 30;

Both produce the same array: `[10, 20, 30]`.

### Array with Predefined Size

    var a = new Array(3);
    // a.length → 3
    // a → [ <3 empty items> ]

Then fill values:

    a[0] = "HTML";
    a[1] = "CSS";
    a[2] = "JS";

## Important Note

If you pass a **single number** to `new Array()`, it is treated as the **length**:

    var a = new Array(3);        // length 3, empty array

But if you pass **multiple values**, they become **elements**:

    var a = new Array(10, 20, 30);   // [10, 20, 30]

## Which Way Should You Use?

> ✅ **Use the literal way `[ ]`** in modern JavaScript.  
> ⚠️ Only use `new Array()` when you specifically need to create an empty array with a fixed length.

## Summary
- **Array literal** `[ ]` → the modern, preferred way.
- **`new Array()` constructor** → another way, useful for creating empty arrays.
- **`new Array(3)`** → creates an array with **3 empty slots**.
- Both ways produce the same array in the end.
