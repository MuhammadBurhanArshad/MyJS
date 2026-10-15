# JavaScript If Else If Statement

## Overview
The **`if else if` statement** is used when you need to check **more than two conditions**. JavaScript checks each condition **from top to bottom** and runs the **first block whose condition is `true`**. If none match, the final `else` block runs.

## If Else If Statement in JavaScript

### Syntax

    if (condition1) {
        // ...
    } else if (condition2) {
        // ...
    } else {
        // ...
    }

- **condition1** is checked first.
- If `false`, **condition2** is checked.
- If all conditions are `false`, the **`else`** block runs.

## Example — Greeting by Time

    if (time < 10) {
        document.write("Good Morning");
    } else if (time < 20) {
        document.write("Good day");
    } else {
        document.write("Good evening");
    }

### Explanation
- `time < 10` → prints **"Good Morning"**
- Otherwise, if `time < 20` → prints **"Good day"**
- Otherwise → prints **"Good evening"**

## Example Topic — Grade by Percentage

| Percentage | Grade |
|------------|-------|
| 80 – 100% | Merit |
| 60 – 79% | 1st Division |
| 45 – 59% | 2nd Division |
| 33 – 44% | 3rd Division |
| Less than 33% | Fail |

### Implementation

    var percentage = 75;

    if (percentage >= 80 && percentage <= 100) {
        document.write("Merit");
    } else if (percentage >= 60 && percentage <= 79) {
        document.write("1st Division");
    } else if (percentage >= 45 && percentage <= 59) {
        document.write("2nd Division");
    } else if (percentage >= 33 && percentage <= 44) {
        document.write("3rd Division");
    } else {
        document.write("Fail");
    }

### Step-by-Step
1. `percentage = 75`
2. `75 >= 80`? → `false`
3. `75 >= 60 && 75 <= 79`? → `true` → prints **"1st Division"**

## How It Works
- Conditions are evaluated **from top to bottom**.
- The **first `true` condition** wins — the rest are skipped.
- The final `else` acts as a **fallback** when nothing matches.

## Best Practices
1. Order conditions **from most specific to most general**.
2. Use parentheses and braces for clarity.
3. Avoid overlapping ranges.
4. Use `&&` and `||` to combine bounds.
5. Keep the final `else` for a **catch-all** case.

## Summary
- `if else if` handles **multiple conditions**.
- The **first `true`** condition wins.
- The final `else` runs only if no condition matches.
- Ideal for **grade ranges, categories, and tiered decisions**.
