# JavaScript For Loop

## Overview
The **`for` loop** is the most commonly used loop in JavaScript. It combines all **3 parts** of a loop — initialization, condition, and increment/decrement — into a **single line**, making it compact and easy to read.

## For Loop Syntax in JavaScript

    for (initialization; condition; increment/decrement) {
        statement
    }

### The 3 Parts Inside `for`

    for ( var a = 1 ;  a <= 10 ;  a++ )  {
         ↑               ↑          ↑
    Initialization   Condition   Increment/Decrement
    }

| Part | Purpose |
|------|---------|
| **Initialization** | Runs once, before the loop starts. Sets the starting value. |
| **Condition** | Checked before each iteration. If `true`, the loop runs; if `false`, it exits. |
| **Increment / Decrement** | Runs after each iteration to update the loop variable. |

## Example

    for (var a = 1; a <= 10; a++) {
        document.write("Burhan");
    }

### Step-by-Step
1. `a = 1` → initialization runs once.
2. Check `a <= 10` → `1 <= 10` → **`true`**.
3. Run body: print "Burhan".
4. `a++` → `a = 2`.
5. Repeat until `a` becomes `11`.
6. When `a = 11`, condition `11 <= 10` is **`false`** → loop **ends**.

### Output
"Burhan" is printed **10 times**.

## Simple Example — Count 1 to 5

    for (var i = 1; i <= 5; i++) {
        document.write(i + "<br>");
    }

### Output
    1
    2
    3
    4
    5

## Count Down Example

    for (var i = 10; i >= 1; i--) {
        document.write(i + " ");
    }

### Output
    10 9 8 7 6 5 4 3 2 1

## For Loop vs While Loop

| Feature | `for` | `while` |
|---------|-------|---------|
| Parts location | All in one line | Scattered |
| Readability | ✅ Compact, clear | ⚠️ Easier to forget update |
| Best for | Known iteration count | Unknown iteration count |

## Common Use Cases
- **Counting** from one number to another.
- **Iterating over arrays** (`for (var i = 0; i < arr.length; i++)`).
- **Repeating a fixed number of times**.
- **Counting down** or stepping by custom amounts.

## Best Practices
1. Use **descriptive variable names** (e.g., `index`, `i`).
2. Prefer `let` over `var` for the loop variable.
3. Keep the loop body **short and focused**.
4. Avoid changing the loop variable **inside the body**.
5. Use **`break`** and **`continue`** for fine control.

## Summary
- `for` loop packs all 3 loop parts into **one line**.
- Syntax: `for (init; condition; increment) { statement }`
- Runs the body **while the condition is `true`**.
- Increment/decrement runs **after each iteration**.
- Ideal when you know **how many times** to loop.
