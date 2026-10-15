# JavaScript If Else Statement

## Overview
The **`if else` statement** extends the basic `if` statement. It allows you to run **one block of code when the condition is `true`** and **another block when the condition is `false`**. This gives your program two clear paths.

## What is an If Else Statement?
It is a **two-way decision** structure:

- If the condition is **`true`** → run the first block.
- If the condition is **`false`** → run the second block (the `else` block).

### Flow

    If → Conditions → False → Statement
           ↓
          True
           ↓
        Statement

## If Else Statement in JavaScript

### Syntax

    if (condition) {
        // statement for TRUE
    } else {
        // statement for FALSE
    }

## Example

    var x = 15;

    if (x > 30) {
        document.write("x is Greater");
    } else {
        document.write("x is Smaller");
    }

### Step-by-Step
1. `x = 15`
2. Condition: `x > 30` → `15 > 30` → **`false`**
3. Since the condition is `false`, the **`else`** block runs.
4. Output: **"x is Smaller"**

## Another Example — True Case

    var y = 50;

    if (y > 30) {
        document.write("y is Greater");
    } else {
        document.write("y is Smaller");
    }

1. `y = 50`
2. Condition: `50 > 30` → **`true`**
3. The **`if`** block runs.
4. Output: **"y is Greater"**

## `if` vs `if else`

| Structure | When to use |
|-----------|-------------|
| `if` | Run code **only if** a condition is true; otherwise do nothing |
| `if else` | Choose between **two alternatives** |

## Best Practices
1. Always wrap the condition in parentheses `( )`.
2. Always use curly braces `{ }` — even for single statements.
3. Keep conditions simple and readable.
4. Use `else` only when there's a **true alternative** to the `if`.
5. Comment complex conditions for clarity.

## Summary
- `if else` gives **two possible paths**.
- `if` block runs when the condition is `true`.
- `else` block runs when the condition is `false`.
- Syntax: `if (condition) { ... } else { ... }`
- Use it whenever you need to handle **both outcomes** of a condition.
