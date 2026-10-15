# JavaScript Confirm Box

## Overview
The **`confirm()` box** is a built-in JavaScript function that displays a popup dialog with a **message** and **two buttons**: **OK** and **Cancel**. It is used when you want the user to **confirm or cancel** an action.

## What is a Confirm Box?
A confirm box is **like an alert box**, but it gives the user **two options** instead of one:

- **OK** → the user agrees
- **Cancel** → the user disagrees

The user's choice is returned as a **boolean value** (`true` or `false`).

## Syntax

    confirm("Your message here");

### Return Value
| User Action | Returns |
|-------------|---------|
| Clicked **OK** | `true` |
| Clicked **Cancel** | `false` |

## Example

    <script>
      confirm("Burhan Arshad");
    </script>

When this runs, the browser shows a popup with the message **"Burhan Arshad"** and two buttons — **OK** and **Cancel**.

## Capturing the User's Response

    var result = confirm("Do you want to continue?");

    if (result) {
        document.write("User clicked OK");
    } else {
        document.write("User clicked Cancel");
    }

### Step-by-Step
1. Browser shows the confirm dialog with the message.
2. If the user clicks **OK**, `result = true`.
3. If the user clicks **Cancel**, `result = false`.
4. The `if else` statement handles both cases.

## Practical Example — Delete Confirmation

    var del = confirm("Are you sure you want to delete this item?");

    if (del) {
        alert("Item deleted.");
    } else {
        alert("Action cancelled.");
    }

## Comparison — alert vs confirm vs prompt

| Function | Buttons | Returns |
|----------|---------|---------|
| `alert()` | OK | `undefined` |
| `confirm()` | OK / Cancel | `true` / `false` |
| `prompt()` | OK / Cancel + input | string / `null` |

## Key Points About `confirm()`
1. It's a **built-in browser function** — no import needed.
2. It takes a **string** as a message.
3. It returns a **boolean** (`true` or `false`).
4. It **blocks** the page until the user responds.
5. It's **not customizable** (no styling, no extra buttons).

## Best Practices
1. Use `confirm()` only for **important decisions** (delete, logout, submit).
2. Keep messages **clear and specific**.
3. Always **store and handle** the return value.
4. Avoid using it for **non-critical** information — use `alert()` instead.
5. Avoid multiple confirms in a row — they disrupt user flow.

## Summary
- `confirm()` displays a popup with **OK** and **Cancel** buttons.
- Syntax: `confirm("message");`
- Returns `true` on OK and `false` on Cancel.
- Used to **confirm user decisions** before executing actions.
- Ideal for **delete, logout, and confirm-and-proceed** flows.
