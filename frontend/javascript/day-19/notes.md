# DOM Manipulation in JavaScript (Basic)

## 1. What is the DOM?
The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing JavaScript to interact with and manipulate HTML elements.

## 2. The `window` Object
- The `window` object is the global object in a browser.
- It represents the browser window and provides access to the **document**, browser history, local storage, and more.
- Common properties and methods:
  - `window.alert("Hello!")` – Displays an alert box.
  - `window.location.href` – Gets or sets the current URL.
  - `window.setTimeout(function, delay)` – Executes a function after a delay.
  - `window.localStorage` – Accesses local storage.

## 3. The `document` Object
The `document` object represents the **DOM tree** and provides methods to access and manipulate HTML elements.

### DOM Tree Structure:
```
Document
 ├── html
 │    ├── head
 │    │    ├── meta, title, link, script, style
 │    ├── body
 │         ├── div, p, h1, span, a, ul, li, etc.
```
Each node in the DOM can be an **element node**, **text node**, or **attribute node**.

## 4. Selecting Elements in the DOM
JavaScript provides several methods to select elements in the DOM.

### 4.1 `getElementById()`
- Selects a single element by its `id`.
- Returns an `Element` object or `null` if not found.
```js
const title = document.getElementById("main-title");
title.style.color = "blue";
```

### 4.2 `getElementsByClassName()`
- Selects multiple elements by class name.
- Returns an **HTMLCollection** (live collection of elements).
```js
const items = document.getElementsByClassName("item");
items[0].style.color = "red";
```

### 4.3 `getElementsByTagName()`
- Selects multiple elements by tag name.
- Returns an **HTMLCollection**.
```js
const paragraphs = document.getElementsByTagName("p");
```

### 4.4 `querySelector()`
- Selects the **first** matching element using a CSS selector.
- Returns an `Element` object or `null` if not found.
```js
const firstItem = document.querySelector(".item");
```

### 4.5 `querySelectorAll()`
- Selects **all** matching elements using a CSS selector.
- Returns a **NodeList** (static collection of elements).
```js
const allItems = document.querySelectorAll(".item");
```

## 5. Difference between HTMLCollection and NodeList
| Feature              | HTMLCollection | NodeList |
|----------------------|---------------|----------|
| Can contain elements only | ✅ | ✅ |
| Live Collection (Updates if DOM changes) | ✅ | ❌ (except `childNodes`) |
| Can be accessed by index (`[0]`) | ✅ | ✅ |
| Can use `forEach()` | ❌ | ✅ |
| Returned by | `getElementsByClassName`, `getElementsByTagName` | `querySelectorAll`, `childNodes` |

### Example:
```js
const htmlCollection = document.getElementsByClassName("item");
const nodeList = document.querySelectorAll(".item");

console.log(htmlCollection instanceof HTMLCollection); // true
console.log(nodeList instanceof NodeList); // true
```

## 6. Manipulating DOM Elements
### 6.1 Changing Content
```js
document.getElementById("main-title").textContent = "New Title";
document.getElementById("main-title").innerHTML = "<b>Bold Title</b>";
```

### 6.2 Changing Styles
```js
document.getElementById("main-title").style.color = "red";
```

### 6.3 Adding and Removing Classes
```js
const element = document.querySelector(".box");
element.classList.add("highlight"); // Add class
element.classList.remove("highlight"); // Remove class
```

### 6.4 Adding and Removing Elements
```js
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement); // Append to body
```

### 6.5 Removing Elements
```js
const elementToRemove = document.getElementById("old-item");
elementToRemove.remove();
```

## Conclusion
- The **DOM** allows JavaScript to interact with web pages.
- The `window` object is the global object representing the browser.
- The `document` object represents the HTML structure.
- Elements can be selected using various methods (`getElementById`, `querySelector`, etc.).
- **HTMLCollection** is live, while **NodeList** is static (except `childNodes`).
- JavaScript allows modifying elements, changing styles, and manipulating the DOM dynamically.

