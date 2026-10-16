# JavaScript String Methods

## Overview
JavaScript provides many **built-in methods** for working with strings. These methods let you **check length, change case, search, replace, extract, and transform** string values without writing complex logic.

## List of String Methods

| Method | Description |
|--------|-------------|
| `length` | Counts the characters in a string |
| `toLowerCase()` | Converts string to lowercase |
| `toUpperCase()` | Converts string to uppercase |
| `includes()` | Checks if a value exists in a string |
| `startsWith()` | Checks if a string starts with a value |
| `endsWith()` | Checks if a string ends with a value |
| `search()` | Returns the position of a match |
| `match()` | Returns matches in an array |
| `indexOf()` | Returns index of first occurrence |
| `lastIndexOf()` | Returns index of last occurrence |
| `replace()` | Replaces a word |
| `trim()` | Removes extra spaces from both ends |
| `split()` | Splits a string into an array |
| `concat()` | Joins two or more strings |
| `repeat()` | Repeats a string N times |
| `slice()` | Extracts a portion |
| `substr()` | Extracts characters by length |
| `substring()` | Extracts between two indexes |
| `charAt()` | Returns character at position |
| `charCodeAt()` | Returns Unicode of character |
| `fromCharCode()` | Converts Unicode to character |
| `toString()` | Converts value to string |
| `valueOf()` | Returns primitive value |

## 1. `length` — Character Counting

> Used for **string character counting**. Starts counting from **0**.

    var str = "JavaScript is a Great Language";
    var a = str.length;

    document.write(a);   // 30

## 2. `toLowerCase()` — String to Lowercase

    var str = "Burhan";
    var a = str.toLowerCase();

    document.write(a);   // burhan

## 3. `toUpperCase()` — String to Uppercase

    var str = "Burhan";
    var a = str.toUpperCase();

    document.write(a);   // BURHAN

## 4. `includes()` — Check Value

> For **checking a value in a string**. It is **case-sensitive**.

    var str = "Burhan";
    var a = str.includes("Burhan");

    document.write(a);   // true

## 5. `startsWith()` — Search from Start

> For **searching a value from the start**. It is **case-sensitive**.

    var str = "Burhan is a good boy";
    var a = str.startsWith("Burhan");

    document.write(a);   // true

## 6. `endsWith()` — Search from End

> For **searching a value from the end**. It is **case-sensitive**.

    var str = "Burhan is a good boy";
    var a = str.endsWith("boy");

    document.write(a);   // true

## 7. `search()` — Position of Searching Value

- For **searching in string**.
- Returns the **position** of the searching value.
- If **nothing found**, it returns **`-1`**.

    var str = "Burhan Arshad";
    var a = str.search("Arshad");

    document.write(a);   // 8

## 8. `match()` — Match Given Word

> **Finds the matches of a given word and makes them an array**.

Uses **regular expressions** (e.g., `/is/g`).

    var str = "Burhan is a good boy";
    var a = str.match(/is/g);

    document.write(a);   // is

## 9. `indexOf()` — Index of Searching Value

> Returns the **index** of the searching value.

    var str = "Burhan is a good boy";
    var a = str.indexOf("is");

    document.write(a);   // 7

## 10. `lastIndexOf()` — Index from Last

> Returns the **index of the searching value from last**.

    var str = "Burhan is a good boy";
    var a = str.lastIndexOf("is");

    document.write(a);   // 7

## 11. `replace()` — Replace a Word

> Used for **replacing a word**.

    var str = "JavaScript is a great language";
    var a = str.replace("JavaScript", "PHP");

    document.write(a);   // PHP is a great language

- **First argument** → old value
- **Second argument** → new value

## 12. `trim()` — Remove Extra Spaces

> For **removing extra spaces from left and right**.

    var str = "   Burhan   ";
    var a = str.trim();

    alert(a);   // Burhan

## Comparison of String Methods

| Method | Case-sensitive | Returns |
|--------|----------------|---------|
| `includes()` | ✅ Yes | `true` / `false` |
| `startsWith()` | ✅ Yes | `true` / `false` |
| `endsWith()` | ✅ Yes | `true` / `false` |
| `search()` | ✅ Yes | Index or `-1` |
| `match()` | ✅ Yes | Array or `null` |
| `indexOf()` | ✅ Yes | Index or `-1` |
| `lastIndexOf()` | ✅ Yes | Index or `-1` |

## Best Practices
1. Use **`.length`** (not a method call `length()`) — it's a property.
2. Remember string methods are **case-sensitive**.
3. Use **`includes()`** for simple existence checks.
4. Use **`indexOf()`** when you need the position.
5. Use **`trim()`** to clean user input.
6. Use **`replace()`** for simple substitutions.
7. Chain methods — `str.trim().toLowerCase().includes("burhan")`.

## Summary
- JavaScript has **20+ string methods**.
- Cover **length, case, search, replace, extract, split, concat**.
- All are **case-sensitive** by default.
- Most return **new strings** — originals are unchanged.
- Essential for **form validation, formatting, and text processing**.
