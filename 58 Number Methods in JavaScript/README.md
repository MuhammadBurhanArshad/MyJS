# JavaScript Number Methods

## Overview
JavaScript provides many **built-in methods** for working with numbers. These methods let you **convert, validate, format, and extract** parts of numeric values.

## List of Number Methods
- `Number()`
- `parseInt()`
- `parseFloat()`
- `isFinite()`
- `isInteger()`
- `toFixed()`
- `toPrecision()`

## 1. `Number()` — Convert Value to Number

- It **converts a value into a number**.
- **N of number should be Capital** (`Number`, not `number`).

    var a = "99";
    var num = Number(a);

    document.write(num + 10);   // 109

### Explanation
- `"99"` is a **string**.
- `Number("99")` converts it to the number **99**.
- `99 + 10` = **109** (numeric addition).

Without conversion, `"99" + 10` would be `"9910"` (string concatenation).

## 2. `parseInt()` — Convert to Integer

- It **converts a string number into an integer** (without decimal).
- It **converts decimal into integers**.
- It **deletes/removes the decimal part**.

    var a = "99.99";
    var num = parseInt(a);

    document.write(num);   // 99

### Explanation
- `parseInt("99.99")` → `99` (decimal part removed).

## 3. `parseFloat()` — Extract First Numeric Value

- It **returns the decimal value**.
- It **takes the first numeric value**.

    var a = "10.3";
    var num = parseFloat(a);

    document.write(num);   // 10.3

## 4. `isFinite()` — Check Finite Number

- **Returns `true` or `false`**.
- **Checks if a given value is finite or not.**

    var a = 100;
    var num = isFinite(a);

    document.write(num);   // true

### Examples

    isFinite(100);         // true
    isFinite(Infinity);    // false
    isFinite(NaN);         // false
    isFinite("abc");       // false

## 5. `isInteger()` — Check Integer

- **Returns `true` or `false`**.
- **Checks if a given value is an integer or not.**

    var a = 10.50;
    var num = Number.isInteger(a);

    document.write(num);   // false

### Examples

    Number.isInteger(10);      // true
    Number.isInteger(10.50);   // false
    Number.isInteger("10");    // false
    Number.isInteger(0);       // true

## 6. `toFixed()` — Round to Decimal Places

- **Returns rounded value** of a number to a specified number of decimal places.

    var a = 5.56789;
    var num = a.toFixed(3);

    document.write(num);   // 5.568

### Explanation
- `5.56789` rounded to **3 decimal places** → **5.568**.

### More Examples

    (5.56789).toFixed(0);   // "6"
    (5.56789).toFixed(1);   // "5.6"
    (5.56789).toFixed(2);   // "5.57"
    (5.56789).toFixed(3);   // "5.568"

## 7. `toPrecision()` — Round to Given Significant Digits

- **Returns the rounded value of a given digits.**
- Rounds to a specified **total number of significant digits**.

    var a = 5.36789;
    var num = a.toPrecision(2);

    document.write(num);   // 5.4

### Explanation
- `5.36789` rounded to **2 significant digits** → **5.4**.

### More Examples

    (5.36789).toPrecision(1);   // "5"
    (5.36789).toPrecision(2);   // "5.4"
    (5.36789).toPrecision(3);   // "5.37"
    (5.36789).toPrecision(4);   // "5.368"

## Comparison Table

| Method | Purpose | Returns |
|--------|---------|---------|
| `Number()` | Convert to number | Number |
| `parseInt()` | Convert to integer | Integer |
| `parseFloat()` | Extract decimal number | Decimal |
| `isFinite()` | Check if finite | `true` / `false` |
| `isInteger()` | Check if integer | `true` / `false` |
| `toFixed(n)` | Round to n decimals | String |
| `toPrecision(n)` | Round to n significant digits | String |

## toFixed vs toPrecision

| Feature | `toFixed(n)` | `toPrecision(n)` |
|---------|--------------|------------------|
| Counts | **Decimal places** | **Significant digits** |
| Example `5.56789` | `.toFixed(3)` → `"5.568"` | `.toPrecision(3)` → `"5.57"` |
| Returns | String | String |

## Common Use Cases
- **Number()** → convert user input from form fields.
- **parseInt() / parseFloat()** → extract numbers from strings.
- **isFinite()** → reject `Infinity` / `NaN` values.
- **isInteger()** → validate whole numbers.
- **toFixed()** → format currency (2 decimals).
- **toPrecision()** → scientific / significant-digit reporting.

## Best Practices
1. Use **`Number()`** for general conversions.
2. Use **`parseInt()`** with a **radix** when parsing strings in other bases:

       parseInt("FF", 16);   // 255

3. Remember `Number.isInteger()` (capital N) — the older `isInteger()` is not global.
4. `toFixed()` and `toPrecision()` **return strings**, not numbers.
5. Always validate **before** performing math operations on user input.

## Summary
- **Convert**: `Number()`, `parseInt()`, `parseFloat()`.
- **Validate**: `isFinite()`, `isInteger()`.
- **Format**: `toFixed()`, `toPrecision()`.
- All are **built-in**, no imports needed.
- Use them for **type safety, validation, and formatting**.
