# JavaScript Prompt Box

## Overview
The **`prompt()` box** is a built-in JavaScript function that displays a popup dialog asking the user to **enter some input**. It is **like `alert()` and `confirm()`**, but it also **takes input** from the user.

## What is a Prompt Box?
A prompt box is a popup dialog that:
- Shows a **message** to the user.
- Provides a **text input field**.
- Has **OK** and **Cancel** buttons.
- Returns the entered value as a **string** (or `null` if cancelled).

## Syntax

    prompt("Your message here");

### Return Value
| User Action | Returns |
|-------------|---------|
| Entered text + clicked **OK** | The entered **string** |
| Clicked **Cancel** | `null` |

## Example

    <script>
      prompt("What is your name?");
    </script>

When this runs, the browser shows a popup asking **"What is your name?"** with a text box, an OK button, and a Cancel button.

## Capturing the User's Input

    var name = prompt("What is your name?");

    if (name !== null) {
        document.write("Hello, " + name + "!");
    } else {
        document.write("You cancelled the prompt.");
    }

### Step-by-Step
1. Browser shows the prompt dialog.
2. User types their name and clicks **OK** → `name` = the entered string.
3. User clicks **Cancel** → `name` = `null`.
4. The `if else` statement handles both cases.

## Practical Example — Greeting a User

    var name = prompt("Enter your name:");
    var city = prompt("Enter your city:");

    alert("Hello " + name + " from " + city + "!");

This shows two prompts and then greets the user with the entered values.

## Comparison — alert vs confirm vs prompt

| Function | Purpose | Returns |
|----------|---------|---------|
| `alert()` | Show a message | `undefined` |
| `confirm()` | Ask OK / Cancel | `true` / `false` |
| `prompt()` | Take text input | string / `null` |

## Key Points About `prompt()`
1. It's a **built-in browser function** — no import needed.
2. It takes a **string** as a message.
3. It returns a **string** (or `null` if cancelled).
4. It **blocks** the page until the user responds.
5. The value returned is **always a string**, even for numbers.

## Handling Numeric Input
Since `prompt()` always returns a string, convert it if needed:

    var age = prompt("Enter your age:");
    age = Number(age);

    if (age >= 18) {
        alert("You are an adult.");
    }

## Best Practices
1. Use `prompt()` only for **quick, simple input**.
2. Always **handle the `null`** case (user cancels).
3. Convert input to the correct **type** if needed (`Number`, etc.).
4. Don't rely on prompts for **critical forms** — use HTML forms.
5. Keep prompt messages **clear and short**.

## Summary
- `prompt()` displays a popup that **asks for input**.
- Syntax: `prompt("message");`
- Returns the entered text as a **string**, or `null` if cancelled.
- Like **`alert()` and `confirm()`**, but with an **input field**.
- Ideal for **quick tests, learning, and simple data collection**.
