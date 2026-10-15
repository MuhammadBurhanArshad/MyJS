# JavaScript Functions

## Overview
A **function** is a reusable block of code designed to perform a specific task. It allows you to **write code once** and **use it multiple times** wherever needed.

## Without Functions vs With Functions

### ❌ Without Functions (Repetitive)

    document.write("Burhan");
    - - -
    document.write("Burhan");
    - - -
    document.write("Burhan");

The same code is written **again and again**.

### ✅ With Functions (Reusable)

    My name() {
        document.write("Burhan");
    }

    ABC();
    - - -
    ABC();
    - - -
    ABC();

The code is written **once** inside a function, then **called** many times.

## Why Use Functions?

> A function is used for **removing unnecessary code** and **reducing code/file size**.

### Benefits
1. **Reusability** — write once, use many times.
2. **Reduces code size** — no repetition.
3. **Easier maintenance** — change once, updates everywhere.
4. **Better readability** — code is organized into clear blocks.
5. **Modularity** — break big tasks into small pieces.

## Function Syntax in JavaScript

### Defining a Function

    function functionName() {
        statement
    }

- `function` → keyword
- `functionName` → the name of the function
- `{ }` → the block of code that runs when called

### Calling a Function

    functionName();

- Adding `( )` **executes** the function.
- You can call it **as many times** as you want.

## Example

    function greet() {
        document.write("Burhan");
    }

    greet();   // Burhan
    greet();   // Burhan
    greet();   // Burhan

## Key Points
1. Define the function **once** with `function`.
2. Call it **many times** using its name + `()`.
3. Function names follow the same rules as variable names.
4. A function **does not run** until it is **called**.
5. Functions can be called **before** or **after** their definition (due to hoisting).

## Summary
- A **function** = reusable block of code.
- **Define**: `function name() { ... }`
- **Call**: `name();`
- Saves time, reduces code size, and improves readability.
- Foundation for more advanced concepts like **parameters** and **return values**.
