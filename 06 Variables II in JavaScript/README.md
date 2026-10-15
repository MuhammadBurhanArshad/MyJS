# JavaScript Variables (let & const)

## Overview
JavaScript provides three keywords to declare variables: `var`, `let`, and `const`. Each has different rules about **re-declaration** and **re-assignment**. Understanding these differences is crucial to writing bug-free modern JavaScript.

## Key Rules

| Keyword | Can Re-Declare? | Can Re-Assign? |
|---------|-----------------|----------------|
| `var` | ✅ Yes | ✅ Yes |
| `let` | ❌ No | ✅ Yes |
| `const` | ❌ No | ❌ No |

- **`let`** → cannot be **declared twice** in the same scope.
- **`var`** → can be **declared twice** (and reassigned).
- **`const`** → is **not editable** (cannot reassign) and **not re-declarable**.

## Declaration Examples

    var a = "Burhan";
    let a = "Burhan";
    const a = "Burhan";

## Behavior Comparison

### `var` (can redeclare + reassign)

    var x = "Hello";   ✅
    var x = "World";   ✅ (redeclared — allowed)
    x = "Wow";         ✅ (reassigned — allowed)

### `let` (cannot redeclare, can reassign)

    let x = "Hello";   ✅
    let x = "World";   ❌ (redeclaration — NOT allowed)
    x = "Wow";         ✅ (reassignment — allowed)

### `const` (cannot redeclare, cannot reassign)

    const x = "Hello"; ✅
    const x = "World"; ❌ (redeclaration — NOT allowed)
    x = "Wow";         ❌ (reassignment — NOT allowed)

## Why This Matters
1. **`let` prevents accidental redeclaration** — catches bugs early.
2. **`const` locks the value** — perfect for fixed values like `PI`, API URLs, config values.
3. **`var` is legacy** — still works but has confusing scoping rules.

## Best Practices
1. Use **`const` by default**.
2. Use **`let`** only when you know the value will change.
3. **Avoid `var`** in modern code.
4. Never reassign a `const` — it will throw a `TypeError`.

## Summary
- `var` → redeclare ✅, reassign ✅
- `let` → redeclare ❌, reassign ✅
- `const` → redeclare ❌, reassign ❌
- Prefer `const`, then `let`, and avoid `var`.
