# JavaScript Switch Statement

## Overview
The **`switch` statement** is used to select one of many blocks of code to be executed. It is an alternative to long `if...else if...else` chains when comparing a single value against many possible matches.

## Switch Statement in JavaScript

### Syntax

    switch (expression) {
        case condition1:
            statement(s);
            break;

        case condition2:
            statement(s);
            break;

        case condition3:
            statement(s);
            break;

        default:
            statement(s);
    }

### Parts of a Switch Statement

| Part | Purpose |
|------|---------|
| `switch (expression)` | The value to be evaluated |
| `case value:` | A possible match |
| `break;` | Stops execution and exits the switch |
| `default:` | Runs if no case matches |

## How It Works
1. The **expression** is evaluated once.
2. Its value is compared with each **`case`** value.
3. If a match is found, the code after that case runs.
4. **`break`** stops the switch — without it, execution "falls through" to the next case.
5. If nothing matches, **`default`** runs.

## Example — Day of the Week

    var day = 3;

    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        case 4:
            document.write("Thursday");
            break;
        default:
            document.write("Unknown day");
    }

### Output
`Wednesday`

## Why Use `break`?
Without `break`, the code **falls through** — meaning all subsequent cases run too.

### Example without break

    var x = 2;

    switch (x) {
        case 1:
            document.write("One");
        case 2:
            document.write("Two");
        case 3:
            document.write("Three");
    }

Output: `TwoThree` (fall-through behavior)

> Always add `break;` unless you **intentionally** want fall-through.

## Switch vs If Else If

| Feature | `switch` | `if else if` |
|---------|----------|---------------|
| Compares | One value vs many cases | Any condition |
| Readability | ✅ Clean for many cases | ❌ Gets long |
| Uses `break` | Yes | No |
| Range checks | ❌ No | ✅ Yes |

## Best Practices
1. Always include a **`default`** case as a fallback.
2. Use **`break;`** after every case unless intentionally falling through.
3. Use `switch` for **fixed values** (days, statuses, menu options).
4. Use `if else if` for **range-based** or **complex** conditions.
5. Keep case values **unique**.

## Summary
- `switch` selects one block from many based on a value.
- Syntax: `switch (expression) { case x: ... break; default: ... }`
- **`break`** prevents fall-through.
- **`default`** handles unmatched values.
- Great for menus, statuses, and enumerated choices.
