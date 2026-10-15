# JavaScript Variables

## Definition
A **variable** is a container used for **storing a value** and **using it multiple times** in a program. Instead of repeating the same value everywhere, we store it once in a variable and refer to it by name.

## Use of Variables
Instead of writing the value again and again, we assign it to a variable once:

    A = Burhan Arshad

Then we can use `A` anywhere:

    document.write(A);
    document.write(A);
    document.write(A);

### ⚠️ Important Rule — No Commas Around Variable Names
When writing a variable inside `document.write()`, **do NOT use commas** — that turns it into a string.

| Code | Result |
|------|--------|
| `document.write("Z");` | ❌ Prints the letter **Z** (as text) |
| `document.write(Z);` | ✅ Prints the **value stored in variable Z** |

## Three Types of Variables

| Keyword | Description |
|---------|-------------|
| `var` | Oldest way, function-scoped |
| `let` | Modern way, block-scoped, can be reassigned |
| `const` | Block-scoped, **cannot** be reassigned |

## How to Use Variables

    <script>
      var x = "Burhan Arshad";
    </script>

- **`var`** → keyword  
- **`x`** → variable name  
- **`"Burhan Arshad"`** → variable value  

### Structure

    variable-name  →  var x = "Burhan Arshad";
                              ↑
                       variable value

## How to Write a Variable Name

### ✅ Write Way (Valid Names)
- `firstname`
- `first_name`
- `first-name`
- `firstName`
- `firstname99`

### ❌ Wrong Way (Invalid Names)
- `first name` *(no spaces allowed)*
- `99firstname` *(cannot start with a number)*

## Naming Rules (Summary)
1. Must **start** with a letter, `_`, or `$`
2. **Cannot** start with a number
3. **No spaces** allowed
4. Can contain letters, digits, `_`, `$`
5. Case-sensitive (`Name` ≠ `name`)

## Summary
- A **variable** stores a value for reuse.
- Use `var`, `let`, or `const` to declare one.
- Syntax: `keyword name = value;`
- Follow correct **naming rules** to avoid errors.
- Never wrap variable names in **commas** inside `document.write()`.
