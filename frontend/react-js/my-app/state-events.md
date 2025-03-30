# State & Event Handling in React.js

## 1. State in React
### What is State?
- State is a built-in object in React that stores component-specific data.
- When state changes, React re-renders the component.
- It is used to create dynamic and interactive UI.

### Using `useState` Hook
- `useState` is a React Hook that allows you to add state to function components.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### Updating State
- State updates are **asynchronous** in React.
- Always use the setter function (`setState` or `setCount`) to modify state.
- Use functional updates if the new state depends on the previous state:

```jsx
setCount(prevCount => prevCount + 1);
```

- **State does not merge automatically** in functional components (unlike class components).
- When managing object state, spread operator (`...`) should be used to retain existing values:

```jsx
const [user, setUser] = useState({ name: 'John', age: 25 });

setUser(prevUser => ({ ...prevUser, age: 26 }));
```

---

## 2. Event Handling in React
### Handling Events
- React events are similar to DOM events but are named using camelCase (e.g., `onClick` instead of `onclick`).
- You pass a function reference, not a function call, to event handlers.

```jsx
function Button() {
  function handleClick() {
    alert('Button Clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Event Object
- React event handlers receive a **SyntheticEvent**, which is a wrapper around the native event.
- You can access event properties like `event.target.value` in input fields:

```jsx
function InputField() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}
```

### Passing Arguments in Event Handlers
- Use an arrow function to pass arguments to event handlers:

```jsx
function DeleteButton({ id }) {
  function handleDelete(itemId) {
    console.log(`Deleting item with id: ${itemId}`);
  }

  return <button onClick={() => handleDelete(id)}>Delete</button>;
}
```

### Preventing Default Behavior
- Use `event.preventDefault()` to stop default browser behavior:

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents page reload
    console.log('Form Submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 3. Handling State with Forms
### Controlled Components
- In controlled components, form elements derive their value from state.

```jsx
function ControlledInput() {
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  return <input type="text" value={input} onChange={handleChange} />;
}
```

### Multiple Input Fields
- Manage multiple fields using object state:

```jsx
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```


## 4. Best Practices
- Use functional updates when updating state based on previous values.
- Use controlled components for better form management.
- Prefer state-lifting when child components need access to state.
- Keep event handlers inside the component to maintain scope.


---

## 5. Summary
- **State** makes React components dynamic and interactive.
- **Event Handling** follows JavaScript event principles but uses JSX syntax.
- **Forms** can be controlled or uncontrolled based on state management needs.
- **Best Practices** help maintain cleaner, more efficient code.


