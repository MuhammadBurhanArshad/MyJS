# JavaScript Logical Operators

## Overview
**Logical operators** are used to **combine multiple conditions** in a single `if` statement. They let you check several conditions at once and decide whether the overall result is `true` or `false`.

## What Are Logical Operators?
They are used for **many conditions in one `if`**.

### Flow
    If →  Condition 1
          Condition 2 → False → Out
             ↓
            True
             ↓
          Statement

## Different Types of Logical Operators

| Operator | Name |
|----------|------|
| `&&` | Logical AND |
| `\|\|` | Logical OR |
| `!`  | Logical NOT |

## 1. If Statement with Logical AND (`&&`)

### Syntax

    if (condition1 && condition2) {
        ...
    }

### Rule
- Runs **only when BOTH conditions are TRUE**.
- If **either** condition is `false`, the whole expression is `false` and the block is skipped.

### Truth Table — AND

| Condition 1 | Condition 2 | Result |
|-------------|-------------|--------|
| true | true | ✅ true |
| true | false | ❌ false |
| false | true | ❌ false |
| false | false | ❌ false |

## 2. If Statement with Logical OR (`||`)

### Syntax

    if (condition1 || condition2) {
        ...
    }

### Rule
- Runs **when EITHER one condition is TRUE**.
- Only when **both** are `false` is the block skipped.

### Truth Table — OR

| Condition 1 | Condition 2 | Result |
|-------------|-------------|--------|
| true | true | ✅ true |
| true | false | ✅ true |
| false | true | ✅ true |
| false | false | ❌ false |

## 3. If Statement with Logical NOT (`!`)

### Syntax

    if (!(condition)) {
        ...
    }

### Rule
- **Reverses** the boolean value.
- If condition is `true`, `!condition` is `false`.
- If condition is `false`, `!condition` is `true`.

### Flow
    If !(Condition) {
        ↓
      True → Response False
      False → Response True
    }

### Truth Table — NOT

| Condition | `!Condition` |
|-----------|--------------|
| true  | false |
| false | true  |

## Examples

### AND Example

    var age = 25;
    var hasID = true;

    if (age >= 18 && hasID) {
        document.write("Allowed to enter");
    }

Both must be `true` → runs.

### OR Example

    var isAdmin = false;
    var isEditor = true;

    if (isAdmin || isEditor) {
        document.write("Can edit content");
    }

Either one being `true` → runs.

### NOT Example

    var isLoggedIn = false;

    if (!isLoggedIn) {
        document.write("Please log in first");
    }

Condition is `false`, so `!condition` is `true` → runs.

## Summary
- `&&` (AND) → **all** conditions must be `true`.
- `||` (OR)  → **at least one** condition must be `true`.
- `!`  (NOT) → **reverses** the boolean value.
- Logical operators **combine conditions** inside a single `if`.
- Use parentheses to make complex conditions readable.
