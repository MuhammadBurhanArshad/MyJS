# JavaScript Functions with Return Value

## Overview
A **function with a return value** not only performs a task but also **sends a value back** to the place where it was called. The `return` keyword is used for returning a value.

## Function with Return Value
> `return` is used for **returning a value** from a function back to the caller.

When a function reaches a `return` statement:
1. It **stops** executing immediately.
2. It **sends the value** back to the caller.
3. The caller can **store** that value in a variable or use it directly.

## Function Syntax with `return` in JavaScript

### Defining a Function

    function functionName(parameter1, parameter2) {
        statements
        return value;
    }

### Calling a Function

    var a = functionName(argument1, argument2);

The **returned value** is stored in the variable `a`.

## How It Works
1. The function runs its statements.
2. When it hits `return`, it sends the value back.
3. Execution of the function **stops** at `return`.
4. The value is **assigned** to the variable on the left.

## Example — Sum with Return

    function sum(a, b) {
        return a + b;
    }

    var result = sum(10, 20);
    document.write(result);

### Step-by-Step
1. `sum(10, 20)` is called → inside, `a = 10`, `b = 20`.
2. `return a + b` → returns `30`.
3. `result = 30`.
4. `document.write(result)` prints **30**.

Output: `30`

## More Examples

### Multiply with Return

    function multiply(x, y) {
        return x * y;
    }

    var total = multiply(5, 4);   // 20
    document.write(total);

### Greet with Return

    function greet(name) {
        return "Hello, " + name + "!";
    }

    var msg = greet("Burhan");
    document.write(msg);           // Hello, Burhan!

### Maximum of Two Numbers

    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    document.write(max(15, 25));   // 25

## `return` vs `document.write`

| `document.write` | `return` |
|------------------|----------|
| Prints to the page | Sends value back to the caller |
| Value is not reusable | Value can be stored and reused |
| Used for output | Used for computation |

## Key Points About `return`
1. **Ends** the function immediately.
2. A function can return **only one value**.
3. If nothing is returned, the function returns **`undefined`**.
4. The returned value can be **stored**, **printed**, or **passed** to another function.
5. Code after `return` will **never run**.

## Summary
- **`return`** sends a value back from a function.
- Syntax: `return value;`
- The value is **received** by the caller.
- Use `return` when you need to **reuse** the result.
- Use `document.write` only for **direct output**.
