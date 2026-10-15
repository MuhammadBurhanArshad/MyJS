# JavaScript Function with Parameters

## Overview
A **function with parameters** allows you to pass **values** into the function. These values are used inside the function to perform operations, making the function flexible and reusable for different inputs.

## Functions with Parameters
- **Parameter** → a variable listed in the function definition.
- **Passing value** → the actual data sent to the function when it is called.

> Parameters are used for **passing values inside the function**.

## Function Syntax in JavaScript

### Defining a Function with Parameters

    function functionName(parameter1, parameter2) {
        statement
    }

### Calling a Function with Arguments

    functionName(argument1, argument2);

## Example

    function sum(a, b) {
        document.write(a + b);
    }

    sum(10, 20);
    sum(20, 30);

### Explanation
- `a` and `b` are **parameters**.
- `10, 20` and `20, 30` are **arguments** passed to the function.
- The function adds `a + b` each time it is called.

### Output
    30
    50

## How It Works
1. The function is **defined** once with parameters `a` and `b`.
2. When called with `sum(10, 20)`, `a = 10` and `b = 20`.
3. `a + b` → `10 + 20` → `30` is printed.
4. When called with `sum(20, 30)`, `a = 20` and `b = 30`.
5. `a + b` → `20 + 30` → `50` is printed.

## More Examples

### Greet a User

    function greet(name) {
        document.write("Hello, " + name + "!");
    }

    greet("Burhan");    // Hello, Burhan!
    greet("Ali");       // Hello, Ali!

### Multiply Two Numbers

    function multiply(x, y) {
        document.write(x * y);
    }

    multiply(5, 4);     // 20
    multiply(10, 3);    // 30

## Parameter vs Argument

| Term | Meaning | Example |
|------|---------|---------|
| Parameter | Variable in function definition | `a`, `b` |
| Argument | Actual value passed at call time | `10`, `20` |

## Best Practices
1. Give parameters **meaningful names**.
2. Keep the number of parameters **reasonable**.
3. Match the **order** of arguments with parameters.
4. Use parameters to **avoid writing the same code multiple times**.

## Summary
- **Parameters** let functions accept **input values**.
- **Arguments** are the actual values passed in.
- Syntax: `function name(param1, param2) { ... }`
- Call with: `name(arg1, arg2);`
- Parameters make functions **flexible and reusable**.
