# JavaScript Conditional (Ternary) Operator

## What is the Ternary Operator?
The **ternary operator** is a shorthand for the `if else` statement. It evaluates a **condition** and returns **one of two values** — one for `true` and one for `false`.

It is also called the **Conditional Operator**.

## Flow

    Conditions → False → Statement2
        ↓
       True
        ↓
    Statement1

## Relationship with If Else
> The ternary operator is **like an `if else` statement**, but written in a single line.

## Syntax

    (condition) ? true_statement : false_statement;

- **condition** → the expression to evaluate
- **`?`** → "then"
- **true_statement** → executed if condition is `true`
- **`:`** → "otherwise"
- **false_statement** → executed if condition is `false`

## Important Rule
> The ternary operator **only supports two statements** — one for `true` and one for `false`.

If you need more branches, use `if else if` or `switch` instead.

## Example

    var x = 15;
    var z;

    (x > 10) ? z = "True" : z = "False";

    document.write(z);

### Step-by-Step
1. `x = 15`
2. Condition: `x > 10` → `15 > 10` → **`true`**
3. Since true, `z = "True"` is executed.
4. `document.write(z)` → prints **"True"**

## Another Example — Even or Odd

    var n = 7;
    var result = (n % 2 === 0) ? "Even" : "Odd";
    document.write(result);   // Odd

## Comparison with if else

### Using if else

    if (x > 10) {
        z = "True";
    } else {
        z = "False";
    }

### Using ternary

    (x > 10) ? z = "True" : z = "False";

Both produce the same result — the ternary version is just **shorter**.

## Best Practices
1. Use ternary for **simple, short decisions**.
2. Avoid nesting ternaries — it hurts readability.
3. Use parentheses around the condition for clarity.
4. If you need **more than two outcomes**, use `if else if`.

## Summary
- Ternary operator = shorthand for `if else`.
- Syntax: `(condition) ? trueStatement : falseStatement;`
- Only **two outcomes** supported — true and false.
- Great for **one-line decisions** like assigning a value conditionally.
