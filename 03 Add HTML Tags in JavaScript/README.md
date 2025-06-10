# Working with HTML Tags in JavaScript

## Accessing HTML Elements

### Common Methods to Select Elements

1. **getElementById()** - Selects single element by ID
   ```javascript
   const header = document.getElementById('main-header');
   ```

2. **querySelector()** - Selects first matching element
   ```javascript
   const button = document.querySelector('.btn-primary');
   ```

3. **querySelectorAll()** - Returns NodeList of all matches
   ```javascript
   const images = document.querySelectorAll('img.thumbnail');
   ```

4. **getElementsByClassName()** - Live HTMLCollection of elements
   ```javascript
   const cards = document.getElementsByClassName('card');
   ```

5. **getElementsByTagName()** - Live HTMLCollection by tag name
   ```javascript
   const paragraphs = document.getElementsByTagName('p');
   ```

## Creating HTML Elements

### Creating New Elements
```javascript
// Create a new div element
const newDiv = document.createElement('div');

// Create a paragraph with text
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
```

### Adding Elements to DOM
```javascript
// Append to existing element
document.body.appendChild(newDiv);

// Insert before another element
const container = document.getElementById('container');
container.insertBefore(newParagraph, container.firstChild);

// Using innerHTML (be cautious of XSS risks)
document.getElementById('content').innerHTML = '<span>New content</span>';
```

## Modifying Elements

### Changing Attributes
```javascript
// Set attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// Get attributes
const hrefValue = link.getAttribute('href');

// Toggle classes
const element = document.getElementById('myElement');
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
```

### Changing Content
```javascript
// Text content (safer, doesn't parse HTML)
element.textContent = 'New text content';

// Inner HTML (parses HTML tags)
element.innerHTML = '<strong>Bold text</strong>';

// Value for form elements
const input = document.querySelector('input');
input.value = 'Default text';
```

## Event Handling

### Adding Event Listeners
```javascript
// Basic click event
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Event delegation (for dynamic elements)
document.addEventListener('click', function(event) {
  if (event.target.matches('.delete-btn')) {
    event.target.parentElement.remove();
  }
});
```

### Common Events
```javascript
// Mouse events
element.addEventListener('mouseover', handleHover);
element.addEventListener('mouseout', handleHoverEnd);

// Keyboard events
document.addEventListener('keydown', handleKeyPress);

// Form events
form.addEventListener('submit', handleSubmit);

// Window events
window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);
```

## Working with Forms

### Accessing Form Elements
```javascript
const form = document.querySelector('form');
const emailInput = form.elements['email'];
const checkbox = form.elements['subscribe'];
```

### Form Submission
```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Process data
  console.log(data);
});
```

## Best Practices

1. **Cache DOM references** - Store frequently accessed elements
   ```javascript
   // Instead of this:
   document.querySelector('.btn').addEventListener(...);
   document.querySelector('.btn').classList.add(...);
   
   // Do this:
   const button = document.querySelector('.btn');
   button.addEventListener(...);
   button.classList.add(...);
   ```

2. **Use event delegation** for dynamic elements
   ```javascript
   // Better than adding listeners to each item
   document.querySelector('.list').addEventListener('click', function(e) {
     if (e.target.matches('.item')) {
       handleItemClick(e.target);
     }
   });
   ```

3. **Batch DOM changes** to minimize reflows
   ```javascript
   // Use DocumentFragment for multiple additions
   const fragment = document.createDocumentFragment();
   
   for (let i = 0; i < 100; i++) {
     const div = document.createElement('div');
     fragment.appendChild(div);
   }
   
   document.body.appendChild(fragment);
   ```

4. **Be careful with innerHTML** - Sanitize user input to prevent XSS
   ```javascript
   // Dangerous:
   element.innerHTML = userGeneratedContent;
   
   // Safer:
   element.textContent = userGeneratedContent;
   ```

## Modern JavaScript (ES6+) Features

### Template Literals for HTML
```javascript
const user = { name: 'Alice', age: 25 };
const html = `
  <div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
`;
document.getElementById('container').innerHTML = html;
```

### Arrow Functions for Event Handlers
```javascript
// Traditional
button.addEventListener('click', function() {
  console.log(this); // button element
});

// Arrow function (no 'this' binding)
button.addEventListener('click', () => {
  console.log(this); // window or undefined in strict mode
});
```

## Performance Considerations

1. **Minimize DOM access** - Store references to frequently used elements
2. **Debounce scroll/resize events** - Prevent excessive firing
   ```javascript
   function debounce(func, timeout = 300) {
     let timer;
     return (...args) => {
       clearTimeout(timer);
       timer = setTimeout(() => { func.apply(this, args); }, timeout);
     };
   }
   
   window.addEventListener('resize', debounce(handleResize));
   ```

3. **Use requestAnimationFrame** for animations
   ```javascript
   function animate() {
     // Animation code
     requestAnimationFrame(animate);
   }
   requestAnimationFrame(animate);
   ```

4. **Virtual DOM libraries** (React, Vue) for complex UIs

## Common Patterns

### Toggle Visibility
```javascript
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  element.classList.toggle('hidden');
}
```

### Dynamic List Rendering
```javascript
function renderList(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => `
    <li class="list-item">${item.name}</li>
  `).join('');
}
```

### Modal Dialog
```javascript
// Open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}
```

Remember: When working with HTML tags in JavaScript, always consider accessibility, performance, and security implications. Modern JavaScript provides powerful tools for DOM manipulation, but they should be used thoughtfully to create efficient, maintainable web applications.