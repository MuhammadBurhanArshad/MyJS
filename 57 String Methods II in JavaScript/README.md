# JavaScript String Methods II

## Overview
In Part I we covered length, case conversion, search, replace, and trim. In this part, we focus on **character**, **index**, **extraction**, **combination**, and **conversion** methods.

## Methods Covered in Part II
- `charAt()`
- `charCodeAt()`
- `fromCharCode()`
- `concat()`
- `split()`
- `repeat()`
- `slice()`
- `substr()`
- `substring()`
- `toString()`
- `valueOf()`

## 1. `charAt()` — Character at Given Index

> For finding the **value of a given index**.

    var str = "Burhan is a good boy";
    var a = str.charAt(3);

    document.write(a);   // h

### Index Map

| Index | 0 | 1 | 2 | 3 | 4 | 5 | ...
|-------|---|---|---|---|---|---|----
| Char  | B | u | r | h | a | n | ...

## 2. `charCodeAt()` — ASCII / Unicode of Character

> Returns the **character code (ASCII/Unicode)** from an index value.

    var str = "Burhan is a good boy";
    var a = str.charCodeAt(4);

    document.write(a);   // 97  (Unicode of 'a')

## 3. `fromCharCode()` — Unicode to Character

> Returns the **character from a Unicode/ASCII code** with the given value.

    var a = String.fromCharCode(65);

    document.write(a);   // A

### Common Codes

| Code | Char |
|------|------|
| 65 | A |
| 66 | B |
| 90 | Z |
| 97 | a |
| 122 | z |

## 4. `concat()` — Join Strings

> For **concatenating 2 or more strings**.

    var str = "Burhan ";
    var str2 = "Arshad";

    var a = str.concat(str2);

    document.write(a);   // Burhan Arshad

## 5. `split()` — Split String into Array

> For **splitting strings with the given character**.

    var str = "Burhan Arshad";
    var a = str.split(" ");

    document.write(a);   // Burhan,Arshad

### More Examples

    "a,b,c".split(",")          // ["a", "b", "c"]
    "hello".split("")           // ["h","e","l","l","o"]
    "one two three".split(" ")  // ["one","two","three"]

## 6. `repeat()` — Repeat String Value

> For **repeating a string value**.

    var str = "Burhan ";
    var a = str.repeat(2);

    document.write(a);   // Burhan Burhan

## 7. `slice()` — Extract a Slice

> For **taking a slice from a string** using **start** and **end** index.

    var str = "Burhan Arshad";
    var a = str.slice(1, 10);

    document.write(a);   // urhan Arsh

### Parameters
- **start** → index to begin (inclusive).
- **end** → index to stop (exclusive).

## 8. `substr()` — Slice by Start and Length

> For taking a slice from a string by **starting value** and **length**.

    var str = "Burhan Arshad";
    var a = str.substr(3, 5);

    document.write(a);   // han A

### Parameters
- **start** → index to begin.
- **length** → number of characters to extract.

> ⚠️ `substr()` is **deprecated** — prefer `slice()` or `substring()` in modern code.

## 9. `substring()` — Slice by Start and End Index

> For taking a slice from a string by **starting** and **ending index** (leaves the last index).

    var str = "Burhan Arshad";
    var a = str.substring(1, 5);

    document.write(a);   // urha

### Parameters
- **start** → begin index.
- **end** → stop index (**exclusive**).

## 10. `toString()` — Convert to String

> Converts **any data type** into **string**.

    var str = 50;
    var a = str.toString();

    document.write(a + 20);   // 5020

Note: Since `a` is now a string, `+` performs **concatenation**, not addition.

## 11. `valueOf()` — Print Value

> For **printing the value**.

    var str = "Burhan Arshad";
    var a = str.valueOf();

    document.write(a);   // Burhan Arshad

## slice() vs substr() vs substring()

| Method | Parameters | Example `str = "Burhan Arshad"` |
|--------|-----------|--------------------------------|
| `slice(1, 10)` | start, end (exclusive) | "urhan Arsh" |
| `substr(3, 5)` | start, length | "han A" |
| `substring(1, 5)` | start, end (exclusive) | "urha" |

## Common Use Cases
- **`charAt()`** → get a specific letter.
- **`charCodeAt()`** → get Unicode (e.g., for sorting/comparisons).
- **`fromCharCode()`** → generate letters programmatically (e.g., A–Z).
- **`concat()`** → build messages.
- **`split()`** → convert string to array.
- **`repeat()`** → generate patterns or padding.
- **`slice()` / `substring()`** → extract substrings.
- **`toString()`** → convert numbers to strings.
- **`valueOf()`** → retrieve the primitive value.

## Best Practices
1. Use **`charAt()`** for individual characters.
2. Prefer **`slice()`** over `substr()` (deprecated).
3. Use **`split("")`** to get an array of characters.
4. Use **`repeat()`** for patterns — cleaner than loops.
5. Chain methods: `"  Hello  ".trim().toUpperCase()`.
6. Remember: `substring()` **excludes** the end index.

## Summary
- **Character access**: `charAt()`, `charCodeAt()`, `fromCharCode()`.
- **Combine / split**: `concat()`, `split()`.
- **Extract**: `slice()`, `substr()`, `substring()`.
- **Repeat**: `repeat()`.
- **Convert**: `toString()`, `valueOf()`.
- These methods are **case-sensitive** and **do not mutate** the original string.
