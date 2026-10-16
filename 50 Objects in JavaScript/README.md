# JavaScript Objects

## Overview
A JavaScript **object** is a collection of **key–value pairs**. It's the **advance version of an array** — instead of using numeric indexes, objects use **named properties**.

## What is an Object?
- **Object is like an array.**
- **It's advance version of an array.**
- **We use `{ }` instead of `[ ]`.**
- **We use `name` for value instead of index.**

> Instead of using **indexes** (0, 1, 2, ...), objects use **property names** (like `firstName`, `age`).

## Array vs Object

### Array (index-based)

    var a = ["Sanjay", "Aman", "Burhan"];
    //          0         1        2

### Object (property-based)

    var a = {
        firstName: "Sanjay",
        lastName: "Aman",
        age: 18,
        country: "Pakistan"
    };

> Array → uses **indexes**. Object → uses **properties**.

## Object Syntax

    var objectName = {
        property1: value1,
        property2: value2,
        property3: value3
    };

- Each property is a **key: value** pair.
- Properties are separated by **commas**.
- The whole object is wrapped in **curly braces `{ }`**.

## Example from Notes

    var a = {
        fname: "Muhammad Burhan",
        lname: "Arshad",
        age: 18,
        email: "burhantheschoolboy@gmail.com"
    };

### Accessing Object Properties

    document.write(a.fname);     // Muhammad Burhan
    document.write(a.lname);     // Arshad
    document.write(a.age);       // 18
    document.write(a.email);     // burhantheschoolboy@gmail.com

Use **dot notation** — `objectName.propertyName`.

## What Can We Store in an Object?

> We can store **array, string, number, and function** in it — also **object in object**.

### Example — Mixed Types

    var person = {
        name: "Burhan",                 // string
        age: 18,                        // number
        hobbies: ["Coding", "Reading"], // array
        greet: function () {            // function
            return "Hello!";
        },
        address: {                      // object in object
            city: "Lahore",
            country: "Pakistan"
        }
    };

### Accessing Nested Values

    person.name                // "Burhan"
    person.hobbies[0]          // "Coding"
    person.greet()             // "Hello!"
    person.address.city        // "Lahore"

## Two Ways to Access Properties

### Dot Notation (recommended)

    a.fname
    a.age

### Bracket Notation

    a["fname"]
    a["age"]

> Use **bracket notation** when the property name has spaces or is stored in a variable.

## Adding & Updating Properties

    var a = { fname: "Burhan" };

    a.age = 18;              // add new property
    a.fname = "Muhammad";    // update existing

## Deleting a Property

    delete a.age;

## Objects vs Arrays — Comparison

| Feature | Array | Object |
|---------|-------|--------|
| Syntax | `[ ]` | `{ }` |
| Key type | Numeric index | Named property |
| Order | Ordered | Unordered |
| Access | `a[0]` | `a.name` or `a["name"]` |
| Best for | Lists | Records / entities |

## Common Use Cases
- **Records** — user, product, employee data.
- **Configurations** — settings, options.
- **Nested data** — API responses (JSON).
- **Structured data** — anything with named fields.

## Best Practices
1. Use **descriptive property names**.
2. Prefer **dot notation** unless a variable key is needed.
3. Use **objects** when data has **named fields**.
4. Use **arrays** when data is a **list**.
5. Objects can store **any type** — including arrays, functions, and other objects.

## Summary
- An **object** stores data as **key: value** pairs.
- Uses `{ }` instead of `[ ]`.
- Uses **property names** instead of indexes.
- Access values with **dot notation** (`a.name`) or **bracket notation** (`a["name"]`).
- Can store **any type**, including **nested objects**.
- Ideal for **records, entities, and structured data**.
