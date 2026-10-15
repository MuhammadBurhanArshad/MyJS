# JavaScript Assignment Operators

## Overview
Assignment operators are used to **assign values to variables**. In addition to the basic `=` operator, JavaScript provides **compound assignment operators** that combine an arithmetic operation with assignment — making code shorter and cleaner.

## Different Types of Assignment Operators

| Operator | Example | Same As |
|----------|---------|---------|
| `=`  | `x = y`   | `x = y` |
| `+=` | `x += y`  | `x = x + y` |
| `-=` | `x -= y`  | `x = x - y` |
| `*=` | `x *= y`  | `x = x * y` |
| `/=` | `x /= y`  | `x = x / y` |
| `%=` | `x %= y`  | `x = x % y` |
| `**=`| `x **= y` | `x = x ** y` |

## How Compound Assignment Works
The compound assignment `x += y` is a **shortcut** for `x = x + y`. It takes the current value of `x`, performs the operation with `y`, and stores the result back into `x`.

## Basic Example

    var a = 10;
    var b = 20;

    a += b;

    document.write(a);   // 30

### Step-by-step:
1. `a = 10` and `b = 20`
2. `a += b` → `a = a + b` → `a = 10 + 20` → `a = 30`
3. `document.write(a)` prints **30**

## Examples of Each Operator

### `=` (Assign)
    var x = 5;         // x = 5

### `+=` (Add and assign)
    var x = 5;
    x += 3;            // x = x + 3 → 8

### `-=` (Subtract and assign)
    var x = 5;
    x -= 3;            // x = x - 3 → 2

### `*=` (Multiply and assign)
    var x = 5;
    x *= 3;            // x = x * 3 → 15

### `/=` (Divide and assign)
    var x = 15;
    x /= 3;            // x = x / 3 → 5

### `%=` (Modulus and assign)
    var x = 10;
    x %= 3;            // x = x % 3 → 1

### `**=` (Exponent and assign)
    var x = 2;
    x **= 3;           // x = x ** 3 → 8

## Why Use Assignment Operators?
1. **Shorter code** — less typing, cleaner look.
2. **Readable** — intent is clear (`x += y` means "add y to x").
3. **Standard practice** — widely used in loops and counters.

## Summary
- `=` assigns a value.
- `+=  -=  *=  /=  %=  **=` combine arithmetic with assignment.
- `x += y` is the same as `x = x + y`.
- Use them to keep your code concise and readable.
