# JavaScript If Statement

## Overview
The **`if` statement** is used to execute a block of code **only when a condition is `true`**. If the condition is `false`, the block is skipped entirely.

## What is an `if` Statement?
An `if` statement checks a **condition**. Based on whether the condition is `true` or `false`, it either:
- **Runs** the statement (if `true`)
- **Skips** the statement (if `false`)

### Flow Diagram

    If
     ↓
    Condition
     ↓         ↘
    True       False
     ↓           ↓
    Statement    Out (skip)

## Example (Conceptual)

    If
     ↓
    Today is Monday  →  False  →  Out
     ↓
    True
     ↓
    Print "Mon"

Only if the condition is `true` does it print **"Mon"**.

## `if` Statement in JavaScript

### Syntax

    if (condition) {
        statement;
    }

### Example

    var x = 15;

    if (x > 10) {
        document.write("x is Greater");
    }

> Here we use a **comparison operator** (`>`) inside the condition.

### Step-by-Step
1. `x = 15`
2. Condition: `x > 10` → `15 > 10` → **`true`**
3. Since the condition is `true`, the block runs.
4. Output: **"x is Greater"**

## Another Example — False Condition

    var x = 5;

    if (x > 10) {
        document.write("x is Greater");
    }

1. `x = 5`
2. Condition: `5 > 10` → **`false`**
3. Block is **skipped**.
4. Nothing is printed.

## Common Comparison Operators Used in `if`

| Operator | Meaning |
|----------|---------|
| `>`  | greater than |
| `<`  | less than |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `==` | equal to |
| `===`| strictly equal |
| `!=` | not equal |

## Best Practices
1. Always wrap the condition in **parentheses** `( )`.
2. Always use **curly braces** `{ }` — even for a single statement.
3. Use meaningful variable names in the condition.
4. Prefer `===` over `==` for equality checks.

## Summary
- `if` runs a block only when the condition is **`true`**.
- If the condition is **`false`**, the block is skipped.
- Syntax: `if (condition) { statement; }`
- Conditions are built using **comparison operators**.
- `if` is the foundation of all decision-making in JavaScript.
