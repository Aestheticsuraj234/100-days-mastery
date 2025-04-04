### **Core React Hooks: `useState` & `useEffect`**  

React hooks allow functional components to manage state and side effects, making them powerful and flexible. The two most commonly used hooks are `useState` and `useEffect`.

---

## **1. `useState` Hook**  

The `useState` hook lets functional components manage local state. It returns an array with two values:  

1. **Current state**  
2. **A function to update the state**  

### **Syntax**  
```jsx
const [state, setState] = useState(initialValue);
```

### **Example: Counter with `useState`**  
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### **Key Points:**  
- Updating state triggers re-rendering.  
- `useState` does **not merge objects** automatically (unlike `setState` in class components).  
- When updating based on the previous state, use a function:  

```jsx
setCount(prevCount => prevCount + 1);
```

---

## **2. `useEffect` Hook**  

The `useEffect` hook is used to handle side effects like:  
- Fetching data  
- Subscribing to events  
- Modifying the DOM  
- Setting timers  

### **Syntax**  
```jsx
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
```

### **Example: Logging to Console**  
```jsx
import { useState, useEffect } from "react";

function Logger() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text updated:", text);
  }, [text]); // Runs when `text` changes

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Logger;
```

### **Dependencies Array (`[]`)**  
- If **empty (`[]`)**, runs **only once** after the first render.  
- If **specific dependencies are provided**, runs when those values change.  
- If **no dependencies array**, runs after **every render**.  

---

## **3. API Call Using `useEffect` (GitHub API Example)**  

### **Fetching Data from GitHub API**  
```jsx
import { useState, useEffect } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]); // Runs when `username` changes

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <p>Followers: {user.followers}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}

export default GitHubUser;
```

### **Key Points:**  
- The API call is made **once** when the component mounts (because `useEffect` runs on `[username]` change).  
- State is updated with API response.  
- Proper error handling is implemented.  

---

## **4. Cleanup in `useEffect` (Event Listeners Example)**  

When using effects that subscribe to something (e.g., event listeners), you must **clean up** to prevent memory leaks.

### **Example: Cleanup for Window Resize Listener**  
```jsx
import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return <h2>Window width: {width}px</h2>;
}

export default WindowSize;
```

### **Why Cleanup?**  
- Prevents memory leaks.  
- Avoids setting state on an unmounted component.  

---

## **Conclusion**  
✅ `useState` helps manage component state.  
✅ `useEffect` manages side effects like API calls and event listeners.  
✅ Always clean up side effects like event listeners and timers.  
✅ Dependencies array controls when `useEffect` runs.  

