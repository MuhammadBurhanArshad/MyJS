# JavaScript Date Methods

## Overview
JavaScript provides a built-in **`Date` object** to work with **dates and times**. It can get the current date, extract specific parts (day, month, year, hours, etc.), and set custom values.

## JavaScript Date Object

    var now = new Date();

This creates a `Date` object that contains the **current date and time**.

## How to Take Current Date

    var now = new Date();

    document.write(now);
    // It takes the current date

### Example Output

    Tue Dec 28 2022 18:58:49 GMT+0500

## JavaScript Date Methods

### Getter Methods

| Method | Description |
|--------|-------------|
| `toDateString()` | Returns the date as a readable string |
| `getDate()` | Gets the **day of month** (1–31) |
| `getFullYear()` | Gets the **year** (e.g., 2022) |
| `getMonth()` | Gets the **month** (0–11) |
| `getDay()` | Gets the **day of week** (0–6) |
| `getHours()` | Gets the **hours** (0–23) |
| `getMinutes()` | Gets the **minutes** (0–59) |
| `getSeconds()` | Gets the **seconds** (0–59) |
| `getMilliseconds()` | Gets the **milliseconds** (0–999) |

### Setter Methods

| Method | Description |
|--------|-------------|
| `setDate()` | Sets the **day of month** |
| `setFullYear()` | Sets the **year** |
| `setMonth()` | Sets the **month** (0–11) |
| `setHours()` | Sets the **hours** |
| `setMinutes()` | Sets the **minutes** |
| `setSeconds()` | Sets the **seconds** |
| `setMilliseconds()` | Sets the **milliseconds** |

## 1. `toDateString()` — Current Date in String

> Use for taking the **current date in string (day, month, date, year)**.

    var now = new Date();
    document.write(now.toDateString());

### Output

    Tue Dec 28 2022

## 2. `getDate()` — Just the Date

> Use for taking the **just date**.

    var now = new Date();
    document.write(now.getDate());

### Output

    28

## 3. `getFullYear()` — Just the Year

> Use for taking the **just year**.

    var now = new Date();
    document.write(now.getFullYear());

### Output

    2022

## 4. `getMonth()` — Month in Numbers

- Use for taking the **just month in numbers**.
- It counts the number of month from **0** (January = 0, December = 11).

    var now = new Date();
    document.write(now.getMonth());

### Output

    11   (December)

## 5. `getDay()` — Day in Numbers

- Use for taking the **just day in number**.
- It counts the number of day from **0**.
- **Starts from Sunday** (`Sunday = 0`).

    var now = new Date();
    document.write(now.getDay());

### Output

    2   (Tuesday)

| Day | Number |
|-----|--------|
| Sunday | 0 |
| Monday | 1 |
| Tuesday | 2 |
| Wednesday | 3 |
| Thursday | 4 |
| Friday | 5 |
| Saturday | 6 |

## 6. `getHours()` — Just the Hours

> For taking **just hours**.

    var now = new Date();
    document.write(now.getHours());

### Output

    18

## 7. `getMinutes()` — Just the Minutes

> For taking **just minutes**.

    var now = new Date();
    document.write(now.getMinutes());

### Output

    27

## 8. `getSeconds()` — Just the Seconds

> For taking **just seconds**.

    var now = new Date();
    document.write(now.getSeconds());

### Output

    41

## 9. `getMilliseconds()` — Just the Milliseconds

> For taking **just milliseconds**.

    var now = new Date();
    document.write(now.getMilliseconds());

### Output

    938

## Setter Methods

### 1. `setDate()` — Setting Date

> For **setting date**.

    var now = new Date();
    now.setDate(20);
    document.write(now);

### Output

    Tue Dec 20 2022 18:58:49 GMT+0500

### 2. `setFullYear()` — Setting Year

> For **setting year**.

    var now = new Date();
    now.setFullYear(2023);
    document.write(now);

### Output

    Wed Dec 20 2023 18:58:49 GMT+0500

### 3. `setMonth()` — Setting Month

> For **setting month**.

    var now = new Date();
    now.setMonth(4);
    document.write(now);

### Output

    Mon May 20 2022 18:58:49 GMT+0500

> `setMonth(4)` → **May** (0 = Jan, 4 = May)

### 4. `setHours()` — Setting Hours

> For **setting hours**.

    var now = new Date();
    now.setHours(14);
    document.write(now);

### Output

    ...14:58:49...

### 5. `setMinutes()`, `setSeconds()`, `setMilliseconds()`

> Are **same as `setHours()`** — used for setting the respective time component.

    var now = new Date();
    now.setMinutes(30);
    now.setSeconds(15);
    now.setMilliseconds(500);

## Important Facts
1. **Months** are **0-indexed** — January is `0`, December is `11`.
2. **Days** are **0-indexed** — Sunday is `0`, Saturday is `6`.
3. **`getDate()`** returns day of month (1–31), NOT day of week.
4. **`getDay()`** returns day of week (0–6), NOT day of month.
5. `toDateString()` returns a **readable string** — good for display.

## Common Use Cases
- **Display current date/time** — clocks, timestamps.
- **Date pickers** — extracting day/month/year.
- **Calendars** — computing day of week.
- **Countdowns / count-ups** — comparing dates.
- **Logging** — adding timestamps to events.

## Best Practices
1. Use **`toDateString()`** for readable display.
2. Remember `getMonth()` and `getDay()` are **0-indexed** — add 1 for display.
3. Use **`new Date()`** to get the current time.
4. Setter methods **mutate the same Date object** — they don't return a new one.
5. For date math, use **milliseconds** via `getTime()`.

## Summary
- **`new Date()`** → creates the current date object.
- **Getters**: `getDate`, `getFullYear`, `getMonth`, `getDay`, `getHours`, `getMinutes`, `getSeconds`, `getMilliseconds`.
- **Setters**: `setDate`, `setFullYear`, `setMonth`, `setHours`, `setMinutes`, `setSeconds`, `setMilliseconds`.
- `toDateString()` → human-readable date.
- Months (0–11) and days (0–6) are **0-indexed**.
- Essential for **any app involving time and date**.
