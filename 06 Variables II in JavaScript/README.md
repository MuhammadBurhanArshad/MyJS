# JavaScript Variables: `var`, `let`, and `const` Explained

## Overview of Declaration Keywords

JavaScript provides three ways to declare variables, each with different behaviors:

1. **`var`** - The original variable declaration (since ES1)
2. **`let`** - Block-scoped variables (introduced in ES6/ES2015)
3. **`const`** - Block-scoped constants (introduced in ES6/ES2015)

## Detailed Comparison

### 1. Scope

| Keyword | Function Scope | Block Scope | Global Scope |
|---------|---------------|-------------|--------------|
| `var`   | ✅ Yes         | ❌ No        | ✅ Yes        |
| `let`   | ❌ No          | ✅ Yes       | ✅ Yes        |
| `const` | ❌ No          | ✅ Yes       | ✅ Yes        |

**Examples:**

```javascript
// Function scope (var)
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // Same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// Block scope (let/const)
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // Different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

### 2. Hoisting

| Keyword | Hoisted | Initial Value | Temporal Dead Zone |
|---------|---------|---------------|--------------------|
| `var`   | ✅ Yes  | `undefined`   | ❌ No              |
| `let`   | ✅ Yes* | Not set       | ✅ Yes             |
| `const` | ✅ Yes* | Not set       | ✅ Yes             |

*Technically hoisted but cannot be accessed before declaration

**Examples:**

```javascript
// var hoisting
console.log(a); // undefined (not an error)
var a = 10;

// let/const hoisting
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### 3. Re-declaration

| Keyword | Re-declaration in Same Scope | Re-assignment |
|---------|------------------------------|---------------|
| `var`   | ✅ Allowed                   | ✅ Allowed    |
| `let`   | ❌ Not allowed               | ✅ Allowed    |
| `const` | ❌ Not allowed               | ❌ Not allowed* |

*Cannot be re-assigned after declaration, except for object properties

**Examples:**

```javascript
// var allows re-declaration
var x = 1;
var x = 2; // No error

// let prevents re-declaration
let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared

// const prevents re-assignment
const z = 1;
z = 2; // TypeError: Assignment to constant variable

// But const object properties can change
const person = { name: "Alice" };
person.name = "Bob"; // Allowed
person = {}; // Error
```

### 4. Initialization

| Keyword | Requires Initial Value |
|---------|------------------------|
| `var`   | ❌ No                  |
| `let`   | ❌ No                  |
| `const` | ✅ Yes                 |

**Examples:**

```javascript
var a; // Valid, a = undefined
let b; // Valid, b = undefined
const c; // SyntaxError: Missing initializer in const declaration
```

## When to Use Each

### Use `const` by default
- For all variables that won't be reassigned
- More predictable code
- Shows intent that the value shouldn't change
- Example:
  ```javascript
  const PI = 3.14159;
  const API_URL = 'https://api.example.com';
  const user = { name: 'John' };
  ```

### Use `let` when you need to reassign
- For loop counters
- Variables that need to change value
- Example:
  ```javascript
  let count = 0;
  count = 1;
  
  for (let i = 0; i < 10; i++) {
    // i is block-scoped
  }
  ```

### Avoid `var` in modern code
- Still works but has problematic scoping
- Only needed for very specific cases or legacy code
- Example of problematic behavior:
  ```javascript
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100); // Logs 5 five times
  }
  
  // Fix with let:
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100); // Logs 0,1,2,3,4
  }
  ```

## Special Cases and Edge Cases

### Global Scope Behavior
```javascript
// In browsers:
var x = 1;            // Added to window object (window.x)
let y = 2;            // Not added to window
const z = 3;          // Not added to window

console.log(window.x); // 1
console.log(window.y); // undefined
console.log(window.z); // undefined
```

### `const` with Objects and Arrays
```javascript
const arr = [1, 2, 3];
arr.push(4); // Allowed
arr = [5, 6]; // Error

const obj = { a: 1 };
obj.b = 2; // Allowed
obj = { c: 3 }; // Error
```

### `typeof` Behavior
```javascript
console.log(typeof undeclaredVar); // "undefined" (no error)
console.log(typeof letVar); // ReferenceError if not declared
```

## Best Practices

1. **Always declare variables** - Avoid implicit globals
2. **Prefer `const` over `let`** - About 80% of variables can be `const`
3. **Use `let` only for variables that need to change**
4. **Avoid `var`** in new code
5. **Declare variables at the top of their scope**
6. **Use descriptive names** - Especially for `const` "constants"
7. **Group related constants**:
   ```javascript
   const Color = {
     RED: '#FF0000',
     GREEN: '#00FF00',
     BLUE: '#0000FF'
   };
   ```

## Common Mistakes

1. **Accidental global variables**
   ```javascript
   function foo() {
     bar = "I'm global!"; // Missing declaration keyword!
   }
   ```

2. **Re-declaring in switch blocks**
   ```javascript
   switch (value) {
     case 1:
       let result = "one";
       break;
     case 2:
       let result = "two"; // SyntaxError
       break;
   }
   ```

3. **Assuming `const` makes objects immutable**
   ```javascript
   const user = { name: "Alice" };
   user.name = "Bob"; // Allowed!
   ```

## Temporal Dead Zone (TDZ) Explained

The TDZ is the period between when a variable's scope begins and when it's declared.

```javascript
// TDZ starts at beginning of scope
console.log(myVar); // ReferenceError
console.log(myLet); // ReferenceError
console.log(myConst); // ReferenceError

var myVar = 'value';
let myLet = 'value';
const myConst = 'value';

// TDZ ends after declaration
```

## Summary Table

| Feature               | `var`            | `let`            | `const`          |
|-----------------------|------------------|------------------|------------------|
| Scope                 | Function         | Block            | Block            |
| Hoisting              | Yes (undefined)  | Yes (TDZ)        | Yes (TDZ)        |
| Re-declaration        | Allowed          | Not allowed      | Not allowed      |
| Re-assignment         | Allowed          | Allowed          | Not allowed      |
| Initialization        | Optional         | Optional         | Required         |
| Global object property| Yes              | No               | No               |
| Temporal Dead Zone    | No               | Yes              | Yes              |

## Modern JavaScript Recommendation

1. **Default to `const`**
2. **Use `let` when you need to reassign**
3. **Never use `var` in new code**
4. **Use `const` for all imports**
   ```javascript
   import { useState } from 'react'; // Good
   import { useState as myState } from 'react'; // If needed
   ```

By understanding these differences, you can write more predictable and maintainable JavaScript code. The block scoping of `let` and `const` helps avoid many common bugs that `var` introduced, making them superior choices in modern JavaScript development.