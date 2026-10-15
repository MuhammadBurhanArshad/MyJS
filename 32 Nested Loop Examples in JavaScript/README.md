# JavaScript Nested Loop Examples

## Overview
Nested loops are used to solve **pattern-printing** problems — like triangles, number pyramids, and matrices. Each example below produces a specific shape based on the **outer loop** and **inner loop** bounds.

## Example 1 — Number Triangle (1 to n)

### Pattern

    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

### Code

    for (var a = 1; a <= 5; a++) {
        for (var b = 1; b <= a; b++) {
            document.write(b);
        }
        document.write("<br>");
    }

### Explanation
- **Outer loop** → controls the **number of rows** (1 to 5).
- **Inner loop** → runs from `1` to `a` (current row number).
- Prints `b` (the current inner number).

---

## Example 2 — Repeated Number Triangle

### Pattern

    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5

### Code

    for (var a = 1; a <= 5; a++) {
        for (var b = 1; b <= a; b++) {
            document.write(a + " ");
        }
        document.write("<br>");
    }

### Explanation
- **Outer loop** → current row number `a`.
- **Inner loop** → runs `a` times.
- Prints `a` (the row number) repeatedly.

---

## Example 3 — Reverse Repeated Number Triangle

### Pattern

    5 5 5 5 5
    4 4 4 4
    3 3 3
    2 2
    1

### Code

    for (var a = 5; a >= 1; a--) {
        for (var b = 1; b <= a; b++) {
            document.write(a);
        }
        document.write("<br>");
    }

### Explanation
- **Outer loop** → counts **down** from 5 to 1.
- **Inner loop** → runs `a` times.
- Prints `a` repeatedly — first row has 5 fives, next has 4 fours, and so on.

---

## Example 4 — Reverse Number Pyramid

### Pattern

    5 4 3 2 1
    4 3 2 1
    3 2 1
    2 1
    1

### Code

    for (var a = 5; a >= 1; a--) {
        for (var b = a; b >= 1; b--) {
            document.write(b);
        }
        document.write("<br>");
    }

### Explanation
- **Outer loop** → counts down from 5 to 1.
- **Inner loop** → starts at `a` and counts **down to 1**.
- Prints each `b` in decreasing order.

---

## Summary of Patterns

| Example | Outer | Inner | Printed |
|---------|-------|-------|---------|
| 1 | 1 → 5 | 1 → a | `b` |
| 2 | 1 → 5 | 1 → a | `a` |
| 3 | 5 → 1 | 1 → a | `a` |
| 4 | 5 → 1 | a → 1 | `b` |

## Key Takeaways
1. **Outer loop** controls the **rows**.
2. **Inner loop** controls the **columns / items per row**.
3. Changing the **direction** of the outer loop (up vs down) flips the pattern.
4. Changing what you print (`a` vs `b`) changes the shape.
5. Nested loops are ideal for **grids, triangles, and matrices**.

## Best Practices
1. Keep loops **small** for readability and performance.
2. Use **descriptive variable names** (e.g., `row`, `col`).
3. Test with small limits (like 5) before scaling up.
4. Indent clearly so nesting is easy to see.
5. Comment patterns for clarity.

## Summary
- Nested loop examples build **triangles, pyramids, and number grids**.
- The outer loop defines **rows**, the inner loop defines **columns**.
- Changing loop bounds and print order produces different **patterns**.
- Essential skill for **interview prep, patterns, and grid logic**.
