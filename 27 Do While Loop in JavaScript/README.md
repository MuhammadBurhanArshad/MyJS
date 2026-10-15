# JavaScript Do/While Loop

## Overview
The **`do/while` loop** is a variant of the `while` loop. The key difference is that the **condition is checked AFTER the loop body runs**, meaning the loop body is **guaranteed to run at least once**.

## Key Point
> In a **do while** loop, the **first time the condition is NOT checked**. It checks the condition **from the 2nd time onwards**.

This is why the loop body always executes **at least once**, even if the condition is initially `false`.

## Do/While Loop Syntax in JavaScript

    var a = 1;

    do {
        document.write("Burhan");
        a = a + 1;      // (a++) increment
    } while (a <= 10);

### Explanation
1. `a = 1` → initialization.
2. **Run the body FIRST** (no condition check).
3. Print "Burhan".
4. `a = a + 1` → `a = 2`.
5. **Then check** `a <= 10` → if `true`, loop again.
6. When `a = 11`, the condition `11 <= 10` is `false` → loop ends.

## Difference Between `while` and `do/while`

| Feature | `while` | `do/while` |
|---------|---------|------------|
| Condition checked | Before body | After body |
| Body runs | 0 or more times | **At least once** |
| When to use | When condition may be false initially | When body must run at least once |

## Example — Runs At Least Once

    var a = 100;

    do {
        document.write("This runs once");
        a++;
    } while (a <= 10);

Even though the condition `a <= 10` is `false` from the start, the body runs **once** because the check happens **after** the body.

### Output
`This runs once`

## Comparison Example

### Using `while`

    var a = 100;

    while (a <= 10) {
        document.write("Body");
        a++;
    }

Output: **Nothing** — condition is `false` before the body runs.

### Using `do/while`

    var a = 100;

    do {
        document.write("Body");
        a++;
    } while (a <= 10);

Output: **Body** — the body runs once before checking.

## Best Practices
1. Always **update the variable** inside the loop to avoid an infinite loop.
2. Use **`do/while`** when the body **must execute at least once**.
3. Use **`while`** when the body might not need to run at all.
4. Keep the loop body **short and clear**.
5. Place the `while(condition);` on the same line as the closing brace.

## Summary
- **`do/while`** runs the body **at least once**, then checks the condition.
- Syntax: `do { statement; update; } while (condition);`
- **Difference from `while`**: condition is checked **after** the body.
- Perfect for scenarios like **input prompts, menu loops, and retry logic**.
