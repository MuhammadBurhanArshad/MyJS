# JavaScript Object Part II

## Overview
In Part I, we learned the **literal** way to create objects using `{ }`. In this part, we learn a **second way** to create objects using the `new Object()` constructor — similar to how we created arrays with `new Array()`.

## Target Method — `new Object()`
- **`new Object()`** → creates an empty object
- Then we **add properties** using dot notation or bracket notation.

## Creating an Object — Method II

### Step 1: Create an Empty Object

    var a = new Object();

### Step 2: Add Properties (Saving)

    a.firstName = "Tom";
    a.lastName = "Burhan";

> This is the **advance version** of creating objects — using the `Object` constructor.

## Full Example from Notes

    var a = new Object();
    a.firstName = "Tom";
    a.lastName = "Burhan";

    document.write(a.firstName);       // Tom
    document.write(a.lastName);        // Burhan

## Calling / Accessing the Object

There are **three ways** to access the object we created:

### 1. `console.log(a)` — Log the whole object

    console.log(a);
    // { firstName: "Tom", lastName: "Burhan" }

### 2. `document.write(a.firstName)` — Dot notation

    document.write(a.firstName);
    // Tom

### 3. `document.write(a["firstName"])` — Bracket notation

    document.write(a["firstName"]);
    // Tom

All three produce the same data — they just display it differently.

## Two Ways to Create an Object

| Method | Syntax | When to use |
|--------|--------|-------------|
| Method I (Literal) | `var a = { name: "Tom" };` | Preferred — modern, concise |
| Method II (Constructor) | `var a = new Object();` | When starting empty |

### Method I — Literal

    var a = {
        firstName: "Tom",
        lastName: "Burhan"
    };

### Method II — Constructor

    var a = new Object();
    a.firstName = "Tom";
    a.lastName = "Burhan";

Both produce the **same object**.

## Adding Properties Dynamically

The `new Object()` approach is useful when you don't know the properties in advance:

    var user = new Object();

    user.name = "Burhan";
    user.age = 18;
    user.email = "burhan@example.com";

    console.log(user);
    // { name: "Burhan", age: 18, email: "burhan@example.com" }

## Accessing Properties — All Three Ways

    var a = new Object();
    a.firstName = "Tom";
    a.lastName = "Burhan";

    // 1. Log the whole object
    console.log(a);

    // 2. Dot notation
    document.write(a.firstName);

    // 3. Bracket notation
    document.write(a["firstName"]);

## Comparison of the Two Methods

| Feature | Literal `{ }` | `new Object()` |
|---------|----------------|----------------|
| Syntax | Short | Longer |
| Readability | ✅ Clear | ⚠️ Verbose |
| Preferred in modern JS | ✅ Yes | ⚠️ Rarely |
| Add properties later | Possible | Common use |
| Creates empty first | ❌ No | ✅ Yes |

## Best Practices
1. Prefer the **literal method** `{ }` in modern JavaScript.
2. Use **`new Object()`** only when adding properties dynamically.
3. Use **dot notation** (`a.name`) for readability.
4. Use **bracket notation** (`a["name"]`) when the property name is stored in a variable.
5. Use **`console.log()`** for debugging — it prints the whole object.

## Summary
- **Method I**: `var a = { name: "Tom" };` (literal — preferred)
- **Method II**: `var a = new Object();` (constructor — empty first)
- Add properties with `a.firstName = "Tom";`
- Access with dot notation, bracket notation, or `console.log(a)`.
- Both methods produce the **same kind of object**.
