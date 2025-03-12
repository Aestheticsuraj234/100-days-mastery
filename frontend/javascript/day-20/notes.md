# JavaScript Events and Event Handling

## 1. What are Events?
Events in JavaScript are actions or occurrences that happen in the browser, such as user interactions (clicks, keypresses) or system-generated events (page load, errors).

## 2. Types of Events
JavaScript provides various types of events, which can be categorized as follows:

### 2.1 Mouse Events
- `click` – When the user clicks an element.
- `dblclick` – When the user double-clicks an element.
- `mousedown` – When a mouse button is pressed.
- `mouseup` – When a mouse button is released.
- `mousemove` – When the mouse moves over an element.
- `mouseover` – When the mouse enters an element.
- `mouseout` – When the mouse leaves an element.

### 2.2 Keyboard Events
- `keydown` – When a key is pressed down.
- `keyup` – When a key is released.
- `keypress` (Deprecated) – When a key is pressed (use `keydown` instead).

### 2.3 Form Events
- `submit` – When a form is submitted.
- `reset` – When a form is reset.
- `focus` – When an input field is focused.
- `blur` – When an input field loses focus.
- `change` – When the value of an input field changes.
- `input` – When the user types into an input field.

### 2.4 Window Events
- `load` – When the page fully loads.
- `resize` – When the window is resized.
- `scroll` – When the user scrolls the page.
- `unload` – When the user leaves the page.

### 2.5 Touch Events (For Mobile Devices)
- `touchstart` – When a touch starts.
- `touchmove` – When a touch moves.
- `touchend` – When a touch ends.

## 3. Event Handling Methods
There are multiple ways to handle events in JavaScript:

### 3.1 Inline Event Handlers (Not Recommended)
```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

### 3.2 JavaScript Event Properties
```js
const btn = document.getElementById("myButton");
btn.onclick = function () {
    alert("Button clicked!");
};
```

### 3.3 `addEventListener()` (Recommended)
```js
const btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
    alert("Button clicked!");
});
```

## 4. Event Propagation
Event propagation determines the order in which events fire when elements are nested.

### 4.1 Event Bubbling (Default)
- The event starts from the **target element** and **bubbles up** to the ancestors.
```js
document.getElementById("child").addEventListener("click", function () {
    alert("Child clicked");
}, false);

document.getElementById("parent").addEventListener("click", function () {
    alert("Parent clicked");
}, false);
```
> Clicking the child will first trigger `Child clicked`, then `Parent clicked`.

### 4.2 Event Capturing (Trickling)
- The event starts from the **topmost ancestor** and moves **down** to the target.
```js
document.getElementById("child").addEventListener("click", function () {
    alert("Child clicked");
}, true);

document.getElementById("parent").addEventListener("click", function () {
    alert("Parent clicked");
}, true);
```
> Now, `Parent clicked` will be shown first, then `Child clicked`.

### 4.3 `stopPropagation()`
- Stops further propagation (bubbling or capturing).
```js
document.getElementById("child").addEventListener("click", function (event) {
    event.stopPropagation();
    alert("Child clicked");
});
```

## 5. Event Delegation
- Instead of attaching event listeners to multiple child elements, you can attach a single listener to a parent element and use `event.target` to identify the clicked element.
```js
document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        alert("Clicked: " + event.target.textContent);
    }
});
```

## 6. Removing Event Listeners
You can remove an event listener using `removeEventListener()`.
```js
function handleClick() {
    alert("Clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

## Conclusion
- JavaScript provides various event types (mouse, keyboard, form, etc.).
- Use `addEventListener()` for better flexibility.
- Event propagation includes **bubbling** and **capturing**.
- `stopPropagation()` prevents further event propagation.
- Event delegation optimizes performance by using a single event listener on a parent element.
- Always clean up event listeners when no longer needed to avoid memory leaks.