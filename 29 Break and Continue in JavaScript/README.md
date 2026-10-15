# JavaScript Break and Continue Statement

## Overview
**`break`** and **`continue`** are used inside loops to control their flow. They give you fine-grained control over when to **stop** the loop or **skip** the current iteration.

## Break and Continue — Key Differences

| Keyword | Purpose |
|---------|---------|
| `break` | **Breaks / exits the loop** completely |
| `continue` | **Skips the current iteration** and continues with the next one |

### From the Notes
- ➡ **`continue`** is for **continue loop** (skip current iteration).
- ➡ **`break`** is for **breaking loop** (exit the loop entirely).

## 1. Break Statement

The `break` keyword **stops the loop immediately** and moves on to the code after the loop.

### Example

    for (var a = 1; a <= 10; a++) {
        if (a === 3) {
            break;
        }
        document.write("Hello " + a + "<br>");
    }

### Step-by-Step
1. `a = 1` → condition `1 <= 10` → true → print "Hello 1".
2. `a = 2` → condition true → print "Hello 2".
3. `a = 3` → `a === 3` is `true` → **`break`** → loop ends.

### Output
    Hello 1
    Hello 2

> Once `break` runs, the loop stops — even though `a <= 10` was still true.

## 2. Continue Statement

The `continue` keyword **skips the rest of the current iteration** and jumps to the next iteration of the loop.

### Example

    for (var a = 1; a <= 5; a++) {
        if (a === 3) {
            continue;
        }
        document.write("Hello " + a + "<br>");
    }

### Step-by-Step
1. `a = 1` → print "Hello 1".
2. `a = 2` → print "Hello 2".
3. `a = 3` → `a === 3` is `true` → **`continue`** → skip rest of the body.
4. `a = 4` → print "Hello 4".
5. `a = 5` → print "Hello 5".

### Output
    Hello 1
    Hello 2
    Hello 4
    Hello 5

> Note that **3 is missing** — the iteration was skipped, not the loop.

## Visual Comparison

### Break
    Iteration 1 → run
    Iteration 2 → run
    Iteration 3 → ❌ BREAK (loop stops)

### Continue
    Iteration 1 → run
    Iteration 2 → run
    Iteration 3 → ⏭️ SKIP
    Iteration 4 → run
    Iteration 5 → run

## Common Use Cases

### Break
- **Searching** for an item — stop when found.
- **Exiting a menu** when the user chooses "Quit".
- **Limiting iterations** for performance.

### Continue
- **Skipping invalid values** (e.g., skip empty strings).
- **Filtering results** in a loop.
- **Handling edge cases** without exiting the loop.

## Break in `while` Loop

    var a = 1;

    while (a <= 10) {
        if (a === 5) {
            break;
        }
        document.write(a + " ");
        a++;
    }

### Output
    1 2 3 4

## Continue in `while` Loop

    var a = 0;

    while (a < 5) {
        a++;
        if (a === 3) {
            continue;
        }
        document.write(a + " ");
    }

### Output
    1 2 4 5

> **Important:** In `while` loops, make sure to update the variable **before** the `continue` statement — otherwise you might get an **infinite loop**.

## Best Practices
1. Use `break` to **exit** a loop as soon as a goal is achieved.
2. Use `continue` to **skip** unwanted iterations.
3. Avoid **nested breaks** without labels — can be confusing.
4. Ensure the loop variable still updates on the `continue` path (especially in `while` loops).
5. Prefer clear conditions over `break` / `continue` when possible for readability.

## Summary
- **`break`** → exits the loop immediately.
- **`continue`** → skips the current iteration.
- Both work in `for`, `while`, and `do/while` loops.
- Use `break` for **early termination**.
- Use `continue` for **filtering / skipping**.
