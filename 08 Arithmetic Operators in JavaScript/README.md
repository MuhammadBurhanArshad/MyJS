# JavaScript Arithmetic Operators

## Overview
Arithmetic operators are used to perform **mathematical calculations** on numbers. JavaScript supports all the standard arithmetic operations you would find in mathematics.

## Different Types of Arithmetic Operators

| Operator | Description |
|----------|-------------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `**` | Exponentiation (power) |
| `/` | Division |
| `%` | Modulus (Remainder) |
| `++` | Increment |
| `--` | Decrement |

## Basic Example

    var a = 20;
    var b = 10;
    var c = a + b;

    document.write(c);

Output: `30`

## Detailed Examples

### Addition (`+`)
    var a = 20;
    var b = 10;
    var c = a + b;   // 30

### Subtraction (`-`)
    var c = a - b;   // 10

### Multiplication (`*`)
    var c = a * b;   // 200

### Exponentiation (`**`)
    var c = 2 ** 3;  // 8  (2 to the power of 3)

### Division (`/`)
    var c = a / b;   // 2

### Modulus / Remainder (`%`)
    var c = a % b;   // 0  (remainder of 20 ÷ 10)

## Division vs Modulus — Visual Example

Consider `14 ÷ 2`:

          7      ← Division (/)
        ┌─────
      2 │ 14
        │ -14
        ──────
          0      ← Modulus (%)

- **Division (`/`)** → gives the **quotient** → `14 / 2 = 7`
- **Modulus (`%`)** → gives the **remainder** → `14 % 2 = 0`

## Increment and Decrement

### Increment (`++`) — increases value by 1
    var x = 5;
    x++;         // x becomes 6

### Decrement (`--`) — decreases value by 1
    var x = 5;
    x--;         // x becomes 4

## Summary
- JavaScript provides 8 arithmetic operators.
- `+  -  *  **  /  %  ++  --`
- `/` returns the quotient, `%` returns the remainder.
- `++` and `--` are shortcuts for `+1` and `-1`.
- These operators are the foundation of any numeric computation in JavaScript.
