# JavaScript Data Types

## Overview
A **data type** describes the kind of value a variable holds. In JavaScript, a variable's data type is determined by the **value** assigned to it — not by the variable itself.

    var x = "Hello World";   →  String

## Types of Values = Data Types
The type of the value stored in a variable determines its **data type**.

## Different Types of Data

| Value Assigned | Data Type |
|----------------|-----------|
| `"Hello World"` | String |
| `25` | Number |
| `true` | Boolean |
| `["HTML", "CSS", "JS"]` | Array → Object |
| `{first: "Burhan", last: "Arshad"}` | Object |
| `null` | Null |
| `var x;` (no value) | Undefined |

## Examples

### String

    var x = "Hello World";

### Number

    var x = 25;

### Boolean

    var x = true;

### Array

    var x = ["HTML", "CSS", "JS"];

### Object

    var x = { first: "Burhan", last: "Arshad" };

### Null

    var x = null;

### Undefined

    var x;

## `typeof` Operator
The `typeof` operator is used to find out the **type of a variable's value**.

### Syntax

    document.write(typeof x);

### Examples

    var x = "Hello";        typeof x  → "string"
    var x = 25;             typeof x  → "number"
    var x = true;           typeof x  → "boolean"
    var x = ["HTML"];       typeof x  → "object"  (arrays are objects)
    var x = {a: 1};         typeof x  → "object"
    var x = null;           typeof x  → "object"  (known JS quirk)
    var x;                  typeof x  → "undefined"

## Summary
- JavaScript data types include: **String, Number, Boolean, Array, Object, Null, Undefined**.
- **Arrays** are a special type of **Object**.
- `typeof` returns the type of a value as a string.
- `null` returns `"object"` from `typeof` — a long-standing JavaScript quirk.
- An **undeclared/unassigned variable** returns `"undefined"`.
