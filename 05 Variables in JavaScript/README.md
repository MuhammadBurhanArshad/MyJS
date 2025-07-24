# Working with Variables in JavaScript

## Variable Declaration

### Declaration Keywords

1. **`var`** - Function-scoped variable (older approach)
   ```javascript
   var name = "John";
   ```

2. **`let`** - Block-scoped variable (ES6+)
   ```javascript
   let age = 30;
   ```

3. **`const`** - Block-scoped constant (ES6+)
   ```javascript
   const PI = 3.14159;
   ```

### Declaration Patterns
```javascript
// Single declaration
let count = 0;

// Multiple declarations
let x = 1, y = 2, z = 3;

// Declare first, assign later
let username;
username = "js_developer";
```

## Variable Types

### Primitive Types
```javascript
// String
let greeting = "Hello World";

// Number
let integer = 42;
let float = 3.14;

// Boolean
let isActive = true;

// Null
let emptyValue = null;

// Undefined
let notAssigned; // undefined

// Symbol (ES6+)
let uniqueId = Symbol('id');

// BigInt (ES2020+)
let bigNumber = 9007199254740991n;
```

### Reference Types
```javascript
// Object
let person = { 
  name: "Alice", 
  age: 25 
};

// Array
let colors = ["red", "green", "blue"];

// Function
let greet = function() {
  console.log("Hello!");
};

// Date
let today = new Date();
```

## Variable Scope

### Global Scope
```javascript
let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible
}
```

### Function Scope
```javascript
function testScope() {
  var functionScoped = "I'm function scoped";
  console.log(functionScoped); // Works
}
// console.log(functionScoped); // Error - not accessible
```

### Block Scope (ES6+)
```javascript
if (true) {
  let blockScoped = "I'm block scoped";
  const alsoBlockScoped = "Me too";
  console.log(blockScoped); // Works
}
// console.log(blockScoped); // Error - not accessible
```

## Variable Naming

### Rules
1. Can contain letters, digits, `_`, and `$`
2. Cannot start with a digit
3. Case sensitive (`myVar` ≠ `myvar`)
4. Cannot use reserved keywords (`let`, `class`, `return`, etc.)

### Conventions
```javascript
// camelCase (most common)
let firstName = "John";

// PascalCase (for constructors)
class UserProfile {}

// UPPER_CASE (for constants)
const MAX_USERS = 100;

// _prefix (sometimes for private)
let _internalCount = 0;
```

## Variable Assignment

### Basic Assignment
```javascript
let a = 10;
let b = a; // b = 10
```

### Destructuring (ES6+)
```javascript
// Array destructuring
let [first, second] = ["red", "green", "blue"];

// Object destructuring
let {name, age} = {name: "Alice", age: 25, email: "alice@example.com"};
```

### Assignment Operators
```javascript
let x = 5;

x += 3;   // x = x + 3 → 8
x -= 2;   // x = x - 2 → 6
x *= 4;   // x = x * 4 → 24
x /= 3;   // x = x / 3 → 8
x %= 5;   // x = x % 5 → 3
x **= 2;  // x = x ** 2 → 9
```

## Variable Hoisting

### `var` Hoisting
```javascript
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = "value";
```

### `let` and `const` Hoisting (Temporal Dead Zone)
```javascript
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "value";
```

## Type Conversion

### Explicit Conversion
```javascript
// To String
let numStr = String(123); // "123"

// To Number
let strNum = Number("3.14"); // 3.14
let intNum = parseInt("10px"); // 10
let floatNum = parseFloat("12.5em"); // 12.5

// To Boolean
let truthy = Boolean(1); // true
let falsy = Boolean(0); // false
```

### Implicit Conversion (Type Coercion)
```javascript
let result;

result = "5" + 1; // "51" (string concatenation)
result = "5" - 1; // 4 (numeric operation)
result = "5" * "2"; // 10
result = "10" / "2"; // 5
result = +"123"; // 123 (unary plus converts to number)
```

## Variable Best Practices

1. **Prefer `const` by default**, use `let` when rebinding is needed
   ```javascript
   const MAX_SIZE = 100; // Good
   let counter = 0;      // Good when value changes
   var oldStyle = "avoid"; // Avoid in modern code
   ```

2. **Use meaningful names**
   ```javascript
   // Bad
   let d = new Date();
   let x1 = 42;
   
   // Good
   let currentDate = new Date();
   const ANSWER_TO_LIFE = 42;
   ```

3. **Initialize variables when declaring them**
   ```javascript
   // Bad
   let value;
   // ... many lines later
   value = someCalculation();
   
   // Good
   let value = someCalculation();
   ```

4. **Avoid global variables**
   ```javascript
   // Bad
   globalVar = "I'm polluting global scope";
   
   // Good
   (function() {
     let localVar = "Properly scoped";
   })();
   ```

5. **Group related variables**
   ```javascript
   // Instead of
   let carMake = "Toyota";
   let carModel = "Camry";
   let carYear = 2020;
   
   // Use
   let car = {
     make: "Toyota",
     model: "Camry",
     year: 2020
   };
   ```

## Advanced Variable Techniques

### Freezing Objects
```javascript
const user = Object.freeze({
  name: "John",
  age: 30
});

// user.age = 31; // Error in strict mode
```

### Template Literals (ES6+)
```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`; // "Hello, Alice!"
```

### Nullish Coalescing (ES2020+)
```javascript
let value = null;
let defaultValue = value ?? "default"; // "default"
```

### Optional Chaining (ES2020+)
```javascript
const user = { profile: { name: "John" } };
const userName = user?.profile?.name; // "John"
const missingName = user?.profile?.age?.value; // undefined (no error)
```

## Common Patterns

### Swapping Variables
```javascript
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

### Default Values
```javascript
// Old way
function greet(name) {
  name = name || 'Guest';
}

// ES6+ way
function greet(name = 'Guest') {
  // ...
}
```

### Short-circuit Evaluation
```javascript
const config = userConfig || defaultConfig;
const isAdmin = user && user.role === 'admin';
```

## Performance Considerations

1. **Primitives vs Objects**
   - Primitives are faster to access and compare
   - Objects have overhead but provide more functionality

2. **Scope chain lookup**
   - Local variables are fastest
   - Global variables are slowest due to scope chain traversal

3. **Memory management**
   - Unused variables should be dereferenced for garbage collection
   ```javascript
   let largeData = getHugeData();
   // After use:
   largeData = null; // Free memory
   ```

## Modern JavaScript Features

### Block-scoped Declarations (ES6)
```javascript
for (let i = 0; i < 10; i++) {
  // i is block-scoped here
}
```

### Object Property Shorthand
```javascript
const name = "Alice";
const age = 25;
const user = { name, age }; // { name: "Alice", age: 25 }
```

### Computed Property Names
```javascript
const prop = "name";
const obj = {
  [prop]: "John" // { name: "John" }
};
```

Remember: Proper variable usage is fundamental to writing clean, maintainable JavaScript code. Always choose the appropriate declaration keyword (`const`, `let`, or rarely `var`), use meaningful names, and consider scope and mutability when designing your variables.