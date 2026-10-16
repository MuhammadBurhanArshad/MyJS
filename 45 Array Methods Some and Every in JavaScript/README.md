# JavaScript Array Methods some() & every()

## Overview
The `some()` and `every()` methods are used to **test a condition** against array elements. Both use a **callback function** and return a **boolean** (`true` or `false`).

- **`some()`** → tests if **ANY** element passes the test.
- **`every()`** → tests if **ALL** elements pass the test.

## Target Methods
- **`some()`** — checks if any element matches
- **`every()`** — checks if all elements match

## 1. `some()` Function

The `some()` method **checks if any of the elements in an array match or pass a test**.

### Syntax

    arrayName.some(callbackFunction);

### Rule
- Returns `true` if **at least one** element passes the test.
- Returns `false` if **none** of the elements pass.

### Example from Notes

    var ages = [10, 13, 15, 20];
    var b = ages.some(checkAdult);

    document.write(b);

    function checkAdult(age) {
        return age >= 18;
    }

### Step-by-Step
1. `ages = [10, 13, 15, 20]`
2. `checkAdult(age)` returns `true` if `age >= 18`.
3. `some()` checks each element:
   - `10 >= 18` → false
   - `13 >= 18` → false
   - `15 >= 18` → false
   - `20 >= 18` → **true**
4. At least one passed → **`true`** is returned.

### Output

    true

## 2. `every()` Function

The `every()` method **checks all values of an array for a given condition**.

### Syntax

    arrayName.every(callbackFunction);

### Rule
- Returns `true` only if **every** element passes the test.
- Returns `false` if **any** element fails.

### Example from Notes

    var ages = [10, 13, 18, 20];
    var b = ages.every(checkAdult);

    document.write(b);

    function checkAdult(age) {
        return age >= 18;
    }

### Step-by-Step
1. `ages = [10, 13, 18, 20]`
2. `checkAdult(age)` returns `true` if `age >= 18`.
3. `every()` checks each element:
   - `10 >= 18` → **false** → stops here
4. Because one failed, returns **`false`**.

### Output

    false

## some() vs every()

| Method | Returns `true` when… | Returns `false` when… |
|--------|---------------------|------------------------|
| `some()` | At least one element passes | No element passes |
| `every()` | All elements pass | At least one fails |

## Key Rules
> ⭐ **This method needs a function.**
> ⭐ **Returns `true` or `false`.**

Both methods:
- Require a **callback function**.
- **Do not mutate** the original array.
- **Stop early** once the result is determined.

## More Examples

### some() — At Least One Even

    var nums = [1, 3, 5, 8];
    nums.some(function (n) { return n % 2 === 0; });
    // true  (8 is even)

### every() — All Even

    var nums = [2, 4, 6, 8];
    nums.every(function (n) { return n % 2 === 0; });
    // true  (all even)

### every() — Fails

    var nums = [2, 4, 5, 8];
    nums.every(function (n) { return n % 2 === 0; });
    // false  (5 is odd)

## Common Use Cases

### some()
- **Form validation** — at least one field is filled.
- **Access control** — user has any admin role.
- **Filtering** — list contains any matching item.

### every()
- **Strict validation** — all fields are filled.
- **Permission checks** — all conditions must be met.
- **Data consistency** — all records meet a rule.

## Best Practices
1. Use **`some()`** when **one** match is enough.
2. Use **`every()`** when **all** must match.
3. Keep the callback function **short and simple**.
4. Use arrow functions for compactness:

       ages.some(a => a >= 18);

5. Remember: **both stop early** once the result is known.

## Summary
- **`some()`** → `true` if **any** element passes.
- **`every()`** → `true` if **all** elements pass.
- Both need a **callback function**.
- Both return **`true` or `false`**.
- Both **do not mutate** the array.
