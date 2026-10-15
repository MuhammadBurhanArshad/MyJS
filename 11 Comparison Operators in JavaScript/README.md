# JavaScript Comparison Operators

## Overview
Comparison operators are used to **compare two values** and return a result of either **`true`** or **`false`**. They are the foundation of decision-making in JavaScript (used with `if`, loops, etc.).

## Basic Example

    var x = 15;
    var y = 25;

    x > y       // false

These operators always respond in **true or false**.

## Different Types of Comparison Operators

| Operator | Description |
|----------|-------------|
| `==`  | equal to |
| `===` | equal value **and** equal type |
| `!=`  | not equal |
| `!==` | not equal value **or** not equal type |
| `>`   | greater than |
| `<`   | less than |
| `>=`  | greater than or equal to |
| `<=`  | less than or equal to |

## Examples of Each Operator

    var x = 15;
    var y = 25;

### Equal to (`==`)
    x == 15       // true
    "15" == 15    // true  (value only, type is ignored)

### Strict Equal to (`===`)
    15 === 15     // true
    "15" === 15   // false (different types)

### Not Equal (`!=`)
    x != y        // true
    "15" != 15    // false

### Strict Not Equal (`!==`)
    "15" !== 15   // true  (different types)
    15 !== 15     // false

### Greater Than (`>`)
    y > x         // true
    x > y         // false

### Less Than (`<`)
    x < y         // true
    y < x         // false

### Greater Than or Equal To (`>=`)
    x >= 15       // true
    x >= 20       // false

### Less Than or Equal To (`<=`)
    x <= 15       // true
    x <= 10       // false

## `==` vs `===` — Important Difference

| Expression | Result | Reason |
|------------|--------|--------|
| `5 == "5"` | `true` | Only value is compared |
| `5 === "5"` | `false` | Value **and** type are compared |
| `5 != "5"` | `false` | Values are equal |
| `5 !== "5"` | `true` | Types are different |

**Best Practice:** Always prefer `===` and `!==` to avoid unexpected type coercion.

## Summary
- Comparison operators return **`true`** or **`false`**.
- `==` and `!=` compare **values only**.
- `===` and `!==` compare **value AND type**.
- `>`, `<`, `>=`, `<=` compare numeric/string order.
- **Always use `===` and `!==`** unless you specifically need loose comparison.
