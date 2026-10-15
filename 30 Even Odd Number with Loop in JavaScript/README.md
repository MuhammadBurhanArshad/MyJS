# Even/Odd Number with Loop in JavaScript

## Overview
A **loop** can be combined with a **condition** to check each number in a range and determine whether it is **even** or **odd**. This is a classic JavaScript exercise that demonstrates how loops and the **modulus operator (`%`)** work together.

## What is Even / Odd?
- **Even number** → divisible by `2` with **no remainder** → `a % 2 === 0`
- **Odd number** → NOT divisible by `2` → `a % 2 !== 0`

| Number | a % 2 | Type |
|--------|-------|------|
| 2 | 0 | Even |
| 3 | 1 | Odd |
| 10 | 0 | Even |
| 15 | 1 | Odd |

## Finding Even Numbers

    for (var a = 1; a <= 100; a++) {
        if (a % 2 == 0) {
            document.write(a + " is Even <br>");
        }
    }

### Step-by-Step
1. Loop runs from `a = 1` to `a = 100`.
2. For each `a`, check `a % 2 == 0`.
3. If `true`, the number is **even** → print it.
4. If `false`, skip.

### Output (even numbers only)
    2 is Even
    4 is Even
    6 is Even
    ...
    100 is Even

## Finding Odd Numbers

    for (var a = 1; a <= 100; a++) {
        if (a % 2 != 0) {
            document.write(a + " is Odd <br>");
        }
    }

### Step-by-Step
1. Loop runs from `a = 1` to `a = 100`.
2. For each `a`, check `a % 2 != 0`.
3. If `true`, the number is **odd** → print it.

### Output (odd numbers only)
    1 is Odd
    3 is Odd
    5 is Odd
    ...
    99 is Odd

## Both Even and Odd in One Loop

    for (var a = 1; a <= 10; a++) {
        if (a % 2 == 0) {
            document.write(a + " → Even <br>");
        } else {
            document.write(a + " → Odd <br>");
        }
    }

### Output
    1 → Odd
    2 → Even
    3 → Odd
    4 → Even
    5 → Odd
    6 → Even
    7 → Odd
    8 → Even
    9 → Odd
    10 → Even

## The Modulus Operator `%`
The modulus operator returns the **remainder** of a division.

| Expression | Result |
|------------|--------|
| `4 % 2` | `0` (even) |
| `5 % 2` | `1` (odd) |
| `10 % 2` | `0` (even) |
| `11 % 2` | `1` (odd) |

> **Rule:** If `a % 2 === 0`, then `a` is **even**. Otherwise, it is **odd**.

## Common Use Cases
- **Loop through ranges** to filter numbers by type.
- **Dashboard / statistics** (e.g., alternate row coloring: `i % 2`).
- **Game logic** (turns, alternating players).
- **Educational exercises** for learning loops and conditions.

## Best Practices
1. Use `===` and `!==` instead of `==` and `!=`.
2. Use `let` instead of `var` in modern code.
3. Prefer starting loops at the correct number (e.g., `a = 2` for even numbers).
4. Keep the condition **simple and readable**.
5. Combine even and odd detection in a single `if else` when both are needed.

## Summary
- Use `a % 2 === 0` to check for **even** numbers.
- Use `a % 2 !== 0` to check for **odd** numbers.
- Loop through numbers and use `if` to filter by type.
- Works with `for`, `while`, and `do/while` loops.
- Classic example of **loops + conditions + modulus** together.
