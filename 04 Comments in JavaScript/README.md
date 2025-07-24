    # Comments in JavaScript

## Definition
Comments are non-executable annotations used to explain and document JavaScript code. They are ignored by the JavaScript engine and serve as notes for developers.

## Single-Line Comments

### Double Slash Syntax
```javascript
// This is a single-line comment
let price = 100; // Comment after code
```

## Multi-Line Comments

### Block Comment Syntax
```javascript
/*
 * This is a multi-line comment
 * It can span multiple lines
 * Useful for longer explanations
 */
function calculateTotal() {
    // Function implementation
}
```

## Documentation Comments (JSDoc)

### Function Documentation
```javascript
/**
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (e.g., 0.2 for 20%)
 * @returns {number} The total price with tax
 */
function calculateTotalWithTax(price, taxRate) {
    return price * (1 + taxRate);
}
```

### Class Documentation
```javascript
/**
 * Represents a shopping cart
 * @class
 */
class Cart {
    /**
     * @constructor
     * @param {number} userId - The user ID
     */
    constructor(userId) {
        this.userId = userId;
        this.items = [];
    }
}
```

## Comment Best Practices

### Good Commenting Examples
```javascript
// Calculate discount if quantity > 10 (business rule #123)
if (quantity > 10) {
    discount = 0.1; // 10% bulk discount
}

/**
 * Formats date to locale string
 * Note: Uses browser's default locale settings
 */
function formatDate(date) {
    return date.toLocaleDateString();
}
```

### Bad Commenting (to avoid)
```javascript
i++; // increment i (redundant comment)

// Sets x to 5
x = 5; (obvious comment)
```

## When to Use Comments

1. **Explain complex logic**
```javascript
// Using bitwise OR 0 to floor numbers faster than Math.floor()
const randomInt = Math.random() * 100 | 0;
```

2. **Document function parameters and return values**
```javascript
/**
 * Validates user credentials
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<boolean>} Resolves with validation result
 */
async function validateUser(username, password) { ... }
```

3. **Mark TODO items**
```javascript
// TODO: Implement input sanitization
// FIXME: Handle edge case when API returns null
```

4. **Temporarily disable code**
```javascript
/*
debugMode = true;
enableLogging();
*/
```

## Commenting Standards

1. **JSDoc Standards** (for documentation generation)
```javascript
/**
 * Current user session
 * @type {Object}
 * @property {string} id - User ID
 * @property {string} name - Full name
 */
const currentUser = { id: '123', name: 'John Doe' };
```

2. **Inline Comments**
```javascript
const result = a + b; // Sum values for final calculation
```

3. **Section Headers**
```javascript
// ====================================
// DATABASE CONNECTION CONFIGURATION
// ====================================
```

## Advanced Comment Techniques

### Conditional Compilation (some build tools)
```javascript
/* @if NODE_ENV='development' */
console.log('Debug info');
/* @endif */
```

### Metadata Comments
```javascript
// @author Jane Smith <jane@example.com>
// @version 1.0.0
// @license MIT
```

### Type Annotations (for TypeScript/Flow)
```javascript
/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 */

/** @type {Product} */
const featuredProduct = getFeaturedProduct();
```

## Special Comment Directives

### ESLint Directives
```javascript
// eslint-disable-next-line no-console
console.log('Temporary debug log');
```

### Debugger Statements
```javascript
// debugger; // Uncomment for debugging
```

Remember: Effective comments should explain why code exists, not what it does. Well-written code should be self-documenting where possible. Use comments to:
- Explain complex algorithms
- Document API contracts
- Note important decisions
- Mark temporary workarounds
- Provide context that isn't obvious from the code