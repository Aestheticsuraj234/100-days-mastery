## 🚀 **Day 7: Advanced State Management with useContext**

### ✅ **Why Context API is Useful**

In React, **props drilling** is when you pass data from a parent component down through multiple levels of child components — even when only one deeply nested component needs it. This becomes hard to manage in large applications.

**React Context API** solves this by allowing you to create **global state** that can be accessed from any component without passing props manually at every level.

---

### 🧠 **Key Concepts**

- `React.createContext()`: Creates a context object.
- `<Context.Provider>`: Provides the state to all child components.
- `useContext(Context)`: Allows consuming the context inside any component.

---

### 🛠️ **Step-by-Step: Creating a Global State**

#### 1. **Create Context**
```js
// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

#### 2. **Wrap Your App with the Provider**

```js
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Home from './Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
```

---

#### 3. **Consume the Context in Child Components**

```js
// Home.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Home;
```

---

### ⚙️ **When to Use Context**

- ✅ You need to share data (theme, user info, language) across many components.
- ❌ Don’t use it for every state; it’s not a replacement for local state or Redux.

---

### 💡 **Pro Tips**

- Use **multiple contexts** for better separation (e.g., ThemeContext, AuthContext).
- If state updates frequently or is complex, consider tools like **Zustand**, **Redux**, or **Jotai**.

---

### 📌 Summary

| Concept           | Purpose                             |
|------------------|-------------------------------------|
| `createContext`   | Create a context object              |
| `Provider`        | Wrap components to give them access |
| `useContext`      | Read context values in components   |

