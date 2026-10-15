# JavaScript While Loop

## Overview
A **loop** is used to **repeat a block of code** multiple times. Without a loop, you would have to write the same statement over and over. Loops make code shorter and more efficient.

## Without Loop vs With Loop

### ❌ Without Loop (Repetitive)

    document.write("Burhan");
    document.write("Burhan");
    document.write("Burhan");

### ✅ With Loop (Reusable)

    Loop (3 Times) {
        document.write("Burhan");
    }

> A **loop is repeating any function or task**.

## Loop is Divided in 3 Parts

    Initialization
         ↓
    ┌───────────────┐
    │  Condition    │  False → Out of Loop
    └───────────────┘
         ↓ True
      Statement
         ↓
    Increment / Decrement
         ↓ (back to Condition)

### The 3 Parts
1. **Initialization** — where the loop variable starts.
2. **Condition** — checked before each iteration. If `true`, run the statement; if `false`, exit the loop.
3. **Increment / Decrement** — updates the loop variable each time.

## Types of Loops in JavaScript
- **While Loop**
- **Do / While Loop**
- **For Loop**
- **For / In Loop** (for Objects)
- **For Each** (for Arrays)

## While Loop Syntax in JavaScript

    var a = 1;

    while (a <= 10) {
        document.write("Yahoo Baba");
        a = a + 1;
    }

### Step-by-Step
1. `a = 1` → initialization.
2. Check `a <= 10` → `1 <= 10` → **`true`**.
3. Run body: print "Yahoo Baba".
4. `a = a + 1` → `a = 2`.
5. Repeat until `a` becomes `11`.
6. When `a = 11`, condition `11 <= 10` is **`false`** → loop **ends**.

### Output
"Yahoo Baba" is printed **10 times**.

## Simple Example — Count from 1 to 5

    var i = 1;

    while (i <= 5) {
        document.write(i + "<br>");
        i++;
    }

### Output
    1
    2
    3
    4
    5

## Common Mistake — Infinite Loop

    var a = 1;

    while (a <= 10) {
        document.write("Yahoo Baba");
        // ❌ Forgot to increment a!
    }

> If you **forget to increment** the variable, the condition never becomes `false` — this creates an **infinite loop**.

## Best Practices
1. Always **initialize** the variable before the loop.
2. Always **update** the variable inside the loop.
3. Make sure the **condition will eventually be `false`**.
4. Keep the loop body **short and clear**.
5. Use `for` loops when you know the **exact number of iterations**.

## Summary
- A **loop** repeats a block of code.
- A loop has **3 parts**: initialization, condition, increment/decrement.
- **`while` loop** → checks the condition **before** each iteration.
- Syntax: `while (condition) { statement; update; }`
- Always ensure the condition will become `false` to avoid infinite loops.
