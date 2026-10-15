# JavaScript Global and Local Variables

## Overview
In JavaScript, variables can be categorized based on **where they are declared** — either **outside** a function or **inside** a function. This determines their **scope**, i.e., where they can be accessed.

## Types of Variables by Scope
- **Global Variable** — declared outside any function.
- **Local Variable** — declared inside a function.

## Global and Local Variables in JavaScript

### Syntax / Structure

    var a = 10;                          // ← Global Variable

    function functionName() {
        var b = 25;                      // ← Local Variable
    }

### Explanation
- `a` is declared **outside** the function → **Global Variable**.
- `b` is declared **inside** the function → **Local Variable**.

## Key Rule

> **Global variables can work inside and outside of the function.**

| Variable Type | Where Declared | Where Accessible |
|---------------|----------------|------------------|
| Global | Outside a function | Inside **and** outside functions |
| Local | Inside a function | **Only** inside that function |

## Example — Global Variable

    var a = 10;

    function show() {
        document.write(a);   // ✅ Works — global can be used inside
    }

    show();                  // 10
    document.write(a);       // ✅ Works — global can be used outside

## Example — Local Variable

    function show() {
        var b = 25;
        document.write(b);   // ✅ Works — inside the function
    }

    show();                  // 25
    document.write(b);       // ❌ Error — b is not defined outside

### Why?
Because `b` only exists **inside the function's scope**. Once the function finishes, `b` is destroyed.

## Comparison Table

| Feature | Global Variable | Local Variable |
|---------|-----------------|----------------|
| Declared | Outside function | Inside function |
| Accessible inside function | ✅ Yes | ✅ Yes |
| Accessible outside function | ✅ Yes | ❌ No |
| Lifetime | Entire script | Only during function call |

## More Examples

### Global Used Inside Function

    var name = "Burhan";

    function greet() {
        document.write("Hello, " + name);
    }

    greet();   // Hello, Burhan

### Local Conflicts with Global

    var x = 10;

    function test() {
        var x = 20;      // local x shadows global x
        document.write(x);   // 20
    }

    test();              // 20
    document.write(x);   // 10 (global x unchanged)

## Best Practices
1. **Minimize global variables** — too many can cause naming conflicts.
2. Use **local variables** inside functions whenever possible.
3. Use `let` / `const` instead of `var` for better scoping.
4. Give variables **descriptive names** to avoid collisions.
5. Avoid relying on globals inside functions — **pass them as parameters** instead.

## Summary
- **Global** → declared outside functions → accessible everywhere.
- **Local** → declared inside functions → accessible only inside.
- **Global variables work inside and outside** the function.
- **Local variables are limited** to their function's scope.
- Prefer local variables for safer, more modular code.
