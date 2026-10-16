# JavaScript Math Methods

## Overview
JavaScript provides a **`Math` object** with many built-in methods for performing mathematical operations — rounding, finding min/max, square roots, powers, random numbers, and more.

## List of Math Methods

| Method | Description |
|--------|-------------|
| `Math.ceil(x)` | Rounds **up** to the nearest integer |
| `Math.floor(x)` | Rounds **down** to the nearest integer |
| `Math.round(x)` | Rounds to the **nearest** integer |
| `Math.trunc(x)` | Removes decimal part (no rounding) |
| `Math.max(x, y, ...)` | Returns the **maximum** value |
| `Math.min(x, y, ...)` | Returns the **minimum** value |
| `Math.sqrt(x)` | Square root |
| `Math.cbrt(x)` | Cube root |
| `Math.pow(x, y)` | x raised to power y |
| `Math.random()` | Random decimal between 0 and 1 |
| `Math.abs(x)` | Absolute value |
| `Math.PI` | Constant π (3.1415...) |

## 1. `Math.ceil(x)` — Round UP

> It **eliminates the decimal** and **changes the number with increment**.
> **Works inversely with - values.**

    var a = Math.ceil(2.25);
    document.write(a);   // 3

### Examples

    Math.ceil(2.01);    // 3
    Math.ceil(2.99);    // 3
    Math.ceil(-2.25);   // -2
    Math.ceil(-2.99);   // -2

## 2. `Math.floor(x)` — Round DOWN

> It **eliminates the decimal value** and **changes the number with decrement**.
> **Works inversely with - values.**

    var a = Math.floor(2.35);
    document.write(a);   // 2

### Examples

    Math.floor(2.99);    // 2
    Math.floor(2.01);    // 2
    Math.floor(-2.25);   // -3
    Math.floor(-2.99);   // -3

## 3. `Math.round(x)` — Round to Nearest

> It **rounds off value**.

    var a = Math.round(2.4);
    document.write(a);   // 2

### Examples

    Math.round(2.4);    // 2
    Math.round(2.5);    // 3
    Math.round(2.6);    // 3
    Math.round(-2.5);   // -2

## 4. `Math.trunc(x)` — Remove Decimals

> **Removes the decimal value** (no rounding).

    var a = Math.trunc(2.4);
    document.write(a);   // 2

### Examples

    Math.trunc(2.9);    // 2
    Math.trunc(-2.9);   // -2

## 5. `Math.max()` — Maximum Value

> It takes the **maximum value from many values**.

    var a = Math.max(8, 10, 2, 50, 25);
    document.write(a);   // 50

## 6. `Math.min()` — Minimum Value

> It takes the **minimum value from many values**.

    var a = Math.min(20, 10, 8, 50, 25);
    document.write(a);   // 8

## 7. `Math.sqrt(x)` — Square Root

> It gives the **square root of a value**.

    var a = Math.sqrt(64);
    document.write(a);   // 8

## 8. `Math.cbrt(x)` — Cube Root

> It gives the **cube root of a value**.

    var a = Math.cbrt(125);
    document.write(a);   // 5

## 9. `Math.pow(x, y)` — Power Function

> It's for **power functionality**.

    Math.pow(base, exponent);

    var a = Math.pow(4, 3);
    document.write(a);   // 64

### Explanation
- **base** = 4
- **exponent** = 3
- `4³ = 64`

## 10. `Math.random()` — Random Number

- **For taking a random number.**
- Random value will be **decimal** (0.xxxx).
- Takes values **between 0 and 1** (exclusive).

    var a = Math.floor(Math.random() * 100);
    document.write(a);
    // A random integer between 0 and 99

### Examples

    Math.random();                     // 0.19028215187891275
    Math.floor(Math.random() * 10);    // 0 to 9
    Math.floor(Math.random() * 100);   // 0 to 99
    Math.floor(Math.random() * 6) + 1; // 1 to 6 (dice roll)

## 11. `Math.abs(x)` — Absolute Value

> It returns the **absolute value** of a number.

    var a = Math.abs(-5.25);
    document.write(a);   // 5.25

### Examples

    Math.abs(5.25);     // 5.25
    Math.abs(-5.25);    // 5.25
    Math.abs(-100);     // 100

## 12. `Math.PI` — Constant π

> `Math.PI` is the **PI function of math**.

    var a = Math.PI;
    document.write(a);   // 3.141592653589793

### Uses

    var radius = 5;
    var area = Math.PI * radius * radius;
    // ≈ 78.54

## Comparison of Rounding Methods

| Input | `ceil()` | `floor()` | `round()` | `trunc()` |
|-------|----------|-----------|-----------|-----------|
| 2.1 | 3 | 2 | 2 | 2 |
| 2.5 | 3 | 2 | 3 | 2 |
| 2.9 | 3 | 2 | 3 | 2 |
| -2.1 | -2 | -3 | -2 | -2 |
| -2.5 | -2 | -3 | -2 | -2 |
| -2.9 | -2 | -3 | -3 | -2 |

## Common Use Cases
- **`ceil()` / `floor()`** → pagination, counters.
- **`round()`** → general rounding.
- **`trunc()`** → dropping decimals safely.
- **`max()` / `min()`** → finding extremes.
- **`sqrt()` / `cbrt()` / `pow()`** → mathematical computations.
- **`random()`** → games, dice, pickers, unique IDs.
- **`abs()`** → distance, difference, magnitude.
- **`Math.PI`** → geometry (circle area, circumference).

## Best Practices
1. Remember all methods are called as **`Math.method()`** — not on the number.
2. Use **`Math.floor(Math.random() * n)`** for integers **0 to n-1**.
3. Add `+ 1` for ranges **1 to n**.
4. Use **`Math.round()`** for general rounding — not for currency.
5. `Math.PI` is a **constant**, not a method (no parentheses).
6. Rounding negative numbers works "inversely" for `ceil()` and `floor()`.

## Summary
- `Math` provides **rounding, min/max, roots, powers, random, abs**.
- `Math.ceil()` → round up; `Math.floor()` → round down.
- `Math.round()` → nearest; `Math.trunc()` → chop decimals.
- `Math.max()` / `Math.min()` → extremes of many values.
- `Math.random()` → decimal between 0 and 1.
- `Math.PI` → 3.14159...
- Perfect for **games, geometry, statistics, and utilities**.
