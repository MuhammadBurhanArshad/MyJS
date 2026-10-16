# JavaScript const variable with Array & Objects

## Overview
In this topic, we explore how the **`const`** keyword behaves when used with **arrays** and **objects**. The key idea is that `const` prevents **re-assignment of the variable**, but it does **NOT** prevent modification of the array or object's contents.

## Target
- Understand `const` with **Array** and **Object**
- Understand what is allowed and what is not

## Rule of `const`
> **We can't assign `const` variable multiple times.**

Once a `const` variable is declared, we **cannot reassign** it to a new value. However, we **CAN modify the contents** of arrays and objects declared with `const`.

## 1. `const` with Array

### Changing Values — ✅ Allowed

    const a = [10, 20, 30];
    a[1] = 25;

    console.log(a);      // [10, 25, 30]

**We can change individual elements** inside the array even though it's declared with `const`.

### Reassigning Whole Array — ❌ Not Allowed

    const a = [10, 20, 30];
    a = [1, 2, 3];       // ❌ TypeError: Assignment to constant variable

> **We cannot assign value as a whole variable.**

## 2. `const` with Object

### Changing Properties — ✅ Allowed

    const a = {
        name: "Burhan",
        age: 18
    };

    a.name = "Burhan Arshad";
    console.log(a);

**We can change individual properties** inside the object.

### Reassigning Whole Object — ❌ Not Allowed

    const a = { name: "Burhan" };
    a = { name: "Aman" };     // ❌ TypeError

> **We can't assign value as normal to a `const` variable.**

## Summary Table

| Action | Array (`const`) | Object (`const`) |
|--------|-----------------|------------------|
| Modify elements / properties | ✅ Allowed | ✅ Allowed |
| Add elements / properties | ✅ Allowed | ✅ Allowed |
| Delete elements / properties | ✅ Allowed | ✅ Allowed |
| Reassign the whole variable | ❌ Not allowed | ❌ Not allowed |

## Why Does This Work?

`const` in JavaScript **locks the binding**, not the value.

- **Binding** = the variable name pointing to a value in memory.
- **Value** = the actual array or object stored in memory.

`const` says: "The variable name must always point to **the same array or object**." But the array or object itself can still be modified.

## Side-by-Side Example

### `const` Array

    const fruits = ["Apple", "Banana"];
    fruits.push("Cherry");       // ✅ works
    fruits[0] = "Mango";         // ✅ works
    console.log(fruits);         // ["Mango", "Banana", "Cherry"]

    // fruits = [];              // ❌ Error

### `const` Object

    const person = { name: "Burhan", age: 18 };
    person.age = 19;             // ✅ works
    person.city = "Lahore";      // ✅ works
    console.log(person);         // { name: "Burhan", age: 19, city: "Lahore" }

    // person = {};              // ❌ Error

## Best Practices
1. Use **`const`** for arrays and objects by default.
2. Modify contents freely — `const` doesn't make them immutable.
3. If you truly need an **immutable** array/object, use `Object.freeze()`.
4. Don't reassign the whole variable — use `let` if you need to.
5. Remember: **`const` locks the binding, not the value.**

## Summary
- `const` prevents **re-assignment** of the whole variable.
- `const` **allows** modification of array elements and object properties.
- `a[1] = 25` ✅ works even if `a` is `const`.
- `a = [1, 2, 3]` ❌ throws an error.
- Same rules apply to **objects** — you can change properties but not reassign the object.
