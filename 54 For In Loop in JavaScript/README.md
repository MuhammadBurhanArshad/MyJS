# JavaScript For/In Loop

## Overview
The **`for...in` loop** is used to **iterate over the properties of an object**. It's the most common way to loop through an object and access each of its **keys** (property names).

## Target
- **`for/in` loop** — loop through object properties

## How to Print Objects

In previous topics, we accessed object properties one by one:

    var a = {
        fname: "Burhan",
        lname: "Arshad",
        age: 18
    };

    console.log(a.fname);
    console.log(a.lname);
    console.log(a.age);

But what if the object has **many properties**? That's where **`for...in`** comes in.

## How to Print Objects with an Array (or Loop)

### Basic Syntax

    for (var key in obj) {
        statement
    }

- **`key`** → the property name at each iteration.
- **`obj`** → the object being looped through.

### Example from Notes

    var obj = {
        fname: "Burhan",
        lname: "Arshad",
        age: 18
    };

    for (var key in obj) {
        document.write(obj[key]);
    }

### Step-by-Step
1. **Iteration 1:** `key = "fname"` → `obj["fname"]` = "Burhan"
2. **Iteration 2:** `key = "lname"` → `obj["lname"]` = "Arshad"
3. **Iteration 3:** `key = "age"` → `obj["age"]` = 18

### Output

    BurhanArshad18

## Key Point

> ⭐ **For loop is for printing object.**
> ⭐ **For printing the key of an object, we use `key +` before the object variable.**

To print the **key names** themselves:

    for (var key in obj) {
        document.write(key + ": " + obj[key] + "<br>");
    }

### Output

    fname: Burhan
    lname: Arshad
    age: 18

## Complete Example

    var obj = {
        fname: "Burhan",
        lname: "Arshad",
        age: 18
    };

    for (var key in obj) {
        document.write(key + " = " + obj[key] + "<br>");
    }

### Output

    fname = Burhan
    lname = Arshad
    age = 18

## Using `for...in` with Arrays

`for...in` also works on arrays, but it returns the **indexes** (not values):

    var arr = ["Sanjay", "Aman", "Burhan"];

    for (var i in arr) {
        document.write(i + ": " + arr[i] + "<br>");
    }

### Output

    0: Sanjay
    1: Aman
    2: Burhan

> ⚠️ For arrays, prefer `for...of` or `forEach()` — `for...in` is intended for **objects**.

## for...in vs for...of

| Feature | `for...in` | `for...of` |
|---------|-------------|------------|
| Iterates over | **Keys / indexes** | **Values** |
| Best for | **Objects** | **Arrays, strings** |
| Order | Not guaranteed | Guaranteed |
| Example | `for (k in obj)` | `for (v of arr)` |

## Common Use Cases
- **Iterating over object properties** — printing, validating, transforming.
- **Counting properties** — how many keys an object has.
- **Copying objects** — building a new object from key-value pairs.
- **Debugging** — inspecting object structure.

## Best Practices
1. Use **`for...in`** for **objects**.
2. Use **`for...of`** for **arrays** (cleaner).
3. Use `obj[key]` (bracket notation) to access values — `obj.key` won't work since `key` is a variable.
4. Guard against inherited properties with `hasOwnProperty()`:

       for (var k in obj) {
           if (obj.hasOwnProperty(k)) { ... }
       }

5. Prefer `Object.keys()` when you only need the keys:

       Object.keys(obj).forEach(k => console.log(k));

## Summary
- **`for...in`** → loops through the **keys** of an object.
- Syntax: `for (var key in obj) { ... }`
- Access values with **`obj[key]`** (bracket notation).
- Also works on arrays (returns indexes), but prefer `for...of` for arrays.
- Essential for **iterating over object properties**.
