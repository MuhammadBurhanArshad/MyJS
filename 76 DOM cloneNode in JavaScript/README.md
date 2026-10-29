# JavaScript DOM cloneNode()

## Overview
The **`cloneNode()`** method is used to **copy a node** — either just the node itself or the node **with all its children**. It creates a **duplicate** of an element that you can then modify, append, or insert elsewhere.

## What is cloneNode?
> **clone node is used for copy node.**

- Creates an **exact copy** of the specified node.
- Accepts a **boolean** parameter — `true` or `false`.
- The original node is **not modified**.

## Syntax

    var copyElement = target.cloneNode(true);

- **`true`** → deep clone (copies the node **and all its children**).
- **`false`** (or omitted) → shallow clone (copies **only the node itself**, no children).

## Example from Notes

    var target = document.getElementById("list").children[0];
    var copyElement = target.cloneNode(true);

    console.log(copyElement);
    document.getElementById("list2").appendChild(copyElement);

### Step-by-Step
1. Get the first child of `#list` → `target`.
2. Clone it (deep copy) → `copyElement`.
3. Log the result to verify.
4. Append the copy to `#list2` → duplicates the element **in the second list**.

## Deep vs Shallow Clone

Given this HTML:

    <div id="original">
        <p>Hello</p>
        <p>World</p>
    </div>

### Shallow — `cloneNode(false)`

    var original = document.getElementById("original");
    var copy = original.cloneNode(false);

    console.log(copy.outerHTML);
    // <div id="original"></div>   ← no children!

### Deep — `cloneNode(true)`

    var original = document.getElementById("original");
    var copy = original.cloneNode(true);

    console.log(copy.outerHTML);
    // <div id="original">
    //     <p>Hello</p>
    //     <p>World</p>
    // </div>                       ← all children copied

## Complete Example

    <ul id="list">
        <li class="item">Apple</li>
        <li class="item">Banana</li>
        <li class="item">Cherry</li>
    </ul>

    <ul id="list2"></ul>

    <script>
      var target = document.getElementById("list").children[0];
      var copyElement = target.cloneNode(true);

      console.log(copyElement);

      document.getElementById("list2").appendChild(copyElement);
    </script>

### Result

    <ul id="list">
        <li class="item">Apple</li>
        <li class="item">Banana</li>
        <li class="item">Cherry</li>
    </ul>

    <ul id="list2">
        <li class="item">Apple</li>     ← cloned copy
    </ul>

## Important — Clone IDs

If the original element has an `id`, the clone will have the **same `id`** — which creates **duplicate IDs** in the DOM. This is invalid.

### Solution — Remove or Modify the ID

    var copy = target.cloneNode(true);
    copy.removeAttribute("id");
    // or
    copy.id = "unique-" + Date.now();

## What Gets Copied?

| Feature | `cloneNode(true)` |
|---------|-------------------|
| Element tag | ✅ Yes |
| Attributes (class, id, style) | ✅ Yes |
| Children (text, elements) | ✅ Yes |
| Event listeners added via JS | ❌ No |
| Event listeners in HTML (`onclick`) | ✅ Yes |
| `value` of form inputs (text, textarea) | ⚠️ Sometimes not copied |

> ⚠️ **Event listeners added via `addEventListener()` are NOT copied** — you must attach them to the clone manually.

## Common Use Cases
- **Templates** — clone a template element repeatedly.
- **Duplicating rows** — in a table or list.
- **Copy-on-click** — duplicate an item.
- **Master/detail views** — show a copy in another location.
- **Reverting changes** — keep a pristine copy.

## Best Practices
1. Use **`cloneNode(true)`** to copy the node **and all its children**.
2. **Modify cloned IDs** to avoid duplicates.
3. **Re-attach event listeners** after cloning — they are not copied.
4. Preserve **event handlers in HTML** if needed.
5. Cache the cloned node in a variable for further use.

## Summary
- **`cloneNode(true)`** → deep copy (node + children).
- **`cloneNode(false)`** → shallow copy (node only).
- Creates a **duplicate** without modifying the original.
- **Does not copy** JS-added event listeners.
- **Duplicate IDs** should be removed or changed.
- Ideal for **templates, duplication, and master/detail views**.
