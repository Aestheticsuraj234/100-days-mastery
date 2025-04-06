# **📅 Day 8: Performance Optimization (Memoization & Lazy Loading)**


## 🔹 1. **Preventing Unnecessary Re-renders with `React.memo`**

### 🔹 **Why Do We Need `React.memo`?**

In React, components re-render whenever their parent component re-renders, even if the props passed to them haven't changed. This can lead to unnecessary re-renders and performance bottlenecks, especially for large or complex applications.

For example:
- A deeply nested child component might re-render unnecessarily when its parent updates, even though the child's props haven't changed.
- A list of items where each item is a component could re-render all items whenever one item changes.

`React.memo` helps optimize performance by skipping re-renders for components whose props haven't changed.

---

### 🔹 **How Does `React.memo` Work?**

When you wrap a functional component with `React.memo`, React will compare the previous props with the new props using a **shallow comparison**. If the props are the same, the component skips re-rendering.

#### Default Behavior:
- Shallow comparison: Only checks if the reference of the props has changed (not deep equality).
- Works well for primitive types (e.g., strings, numbers, booleans) and shallow objects/arrays.

#### Custom Comparison:
You can provide a custom comparison function as the second argument to `React.memo` if you need more control over when the component should re-render.

---

### 🔹 **Examples of Using `React.memo`**

#### Example 1: Basic Usage
```jsx
import React from 'react';

const ChildComponent = React.memo(({ name }) => {
  console.log('ChildComponent rendered');
  return <div>Hello, {name}!</div>;
});

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <ChildComponent name="John" />
    </div>
  );
};

export default ParentComponent;
```

**Explanation:**
- The `ChildComponent` is wrapped with `React.memo`.
- Clicking the button updates the `count` state in the `ParentComponent`, causing it to re-render.
- However, since the `name` prop passed to `ChildComponent` hasn't changed, `ChildComponent` skips re-rendering.

**Output in Console:**
- "ChildComponent rendered" will only appear once when the app first loads. It won't log again on subsequent button clicks.

---

#### Example 2: Avoiding Unnecessary Re-renders in Lists
```jsx
import React from 'react';

const ListItem = React.memo(({ item }) => {
  console.log(`ListItem rendered for ${item.id}`);
  return <li>{item.name}</li>;
});

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const App = () => {
  const [items, setItems] = React.useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: 'New Fruit' }]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <List items={items} />
    </div>
  );
};

export default App;
```

**Explanation:**
- Each `ListItem` is wrapped with `React.memo`.
- When you click "Add Item," only the newly added `ListItem` re-renders. Existing items don't re-render because their props haven't changed.

**Output in Console:**
- Adding a new item logs only the render for the new item, not the existing ones.

---

#### Example 3: Custom Comparison Function
```jsx
import React from 'react';

const ChildComponent = React.memo(
  ({ user }) => {
    console.log('ChildComponent rendered');
    return <div>User: {user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Only re-render if the user's name changes
    return prevProps.user.name === nextProps.user.name;
  }
);

const ParentComponent = () => {
  const [user, setUser] = React.useState({ name: 'Alice', age: 25 });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <button onClick={updateAge}>Update Age: {user.age}</button>
      <ChildComponent user={user} />
    </div>
  );
};

export default ParentComponent;
```

**Explanation:**
- The custom comparison function ensures that `ChildComponent` only re-renders if the `user.name` changes.
- Updating the `age` property of the `user` object doesn't trigger a re-render because the `name` remains the same.

**Output in Console:**
- "ChildComponent rendered" appears only when the `name` changes, not when the `age` changes.

---

### 🔹 **How to Check if `React.memo` is Working**

1. **Console Logging:**
   - Add `console.log` statements inside your component to see when it renders.
   - If `React.memo` is working correctly, the log should only appear when the props change.

2. **React DevTools Profiler:**
   - Use the React DevTools browser extension to profile your app.
   - The profiler shows which components re-render during interactions. You can verify that `React.memo`-wrapped components skip re-renders when their props don't change.

3. **Performance Testing:**
   - Use tools like Chrome DevTools to measure rendering performance.
   - Compare the performance before and after applying `React.memo` to identify improvements.

---

### 🔹 **When to Avoid `React.memo`**

While `React.memo` is useful, it’s not always necessary. Overusing it can lead to diminishing returns or even performance degradation due to the overhead of prop comparisons. Avoid using it in the following cases:
- The component re-renders infrequently.
- The props are frequently changing.
- The component is lightweight and cheap to re-render.

---

### 🔹 **Conclusion**

`React.memo` is a powerful tool for optimizing performance by preventing unnecessary re-renders. By understanding how and when to use it, you can build more efficient React applications. Always test and profile your app to ensure that `React.memo` is providing the desired benefits.

**Final Answer:**
```jsx
// Example of React.memo usage
const MemoizedComponent = React.memo(({ data }) => {
  console.log('Rendered MemoizedComponent');
  return <div>{data}</div>;
});
```

Certainly! Let’s expand on each of the concepts with detailed explanations, examples, and practical use cases.

---

## 🔹 **2. Optimizing Functions with `useCallback`**

### ✅ **What it does:**
`useCallback` **memoizes a function** so that it’s not re-created on every render **unless its dependencies change**. This ensures stable function references across renders, which is particularly useful when passing functions as props to child components or using them in dependency arrays for hooks like `useEffect`.

### 📌 **Syntax:**
```jsx
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);
```

### 🔍 **Use Case:**
- **Passing callbacks to child components:** When you pass a function as a prop to a child component (especially one wrapped in `React.memo`), `useCallback` ensures that the function reference remains stable unless its dependencies change.
- **Event handlers:** If your event handler depends on state or props, `useCallback` prevents unnecessary re-renders by ensuring the handler isn’t recreated on every render.
- **Heavy computations:** If the function involves expensive operations, memoizing it can improve performance.

### ⚠️ **Tip:**
Use `useCallback` only when necessary. Overusing it can lead to performance degradation due to the overhead of managing memoized functions.

---

### 🔹 **Example 1: Stable Function Reference for Child Components**

```jsx
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, label }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} label="Increment" />
    </div>
  );
};

export default ParentComponent;
```

**Explanation:**
- The `Button` component is wrapped with `React.memo`.
- Without `useCallback`, the `handleClick` function would be recreated on every render of `ParentComponent`, causing `Button` to re-render unnecessarily.
- Using `useCallback` ensures that `handleClick` has a stable reference unless `count` changes, preventing unnecessary re-renders of `Button`.

**Output in Console:**
- "Button rendered" appears only when `count` changes, not on every render of `ParentComponent`.

---

### 🔹 **Example 2: Avoiding Re-renders in Event Handlers**

```jsx
import React, { useState, useCallback } from 'react';

const ExpensiveComponent = ({ onButtonClick }) => {
  console.log('ExpensiveComponent rendered');
  return <button onClick={onButtonClick}>Click Me</button>;
};

const App = () => {
  const [value, setValue] = useState(0);

  // Memoized callback
  const handleButtonClick = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <ExpensiveComponent onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
```

**Explanation:**
- `ExpensiveComponent` re-renders only when `handleButtonClick` changes.
- Using `useCallback` ensures that `handleButtonClick` has a stable reference unless `value` changes.

---

## 🔹 **3. Optimizing Derived State with `useMemo`**

### ✅ **What it does:**
`useMemo` **memoizes the result of a computation** to avoid recalculating on every render. It caches the computed value and only recalculates it when its dependencies change.

### 📌 **Syntax:**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 🔍 **Use Case:**
- **Expensive calculations:** If a computation is resource-intensive (e.g., sorting, filtering, or transforming large datasets), `useMemo` prevents redundant recalculations.
- **Derived data:** When deriving data from props or state, `useMemo` ensures the derived data is recalculated only when necessary.

### ⚠️ **Tip:**
Only use `useMemo` for expensive operations. Overusing it can hurt performance due to the overhead of managing memoized values.

---

### 🔹 **Example 1: Filtering a Large List**

```jsx
import React, { useState, useMemo } from 'react';

const FilteredList = ({ items, filter }) => {
  // Memoized filtered list
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
      <FilteredList items={items} filter={filter} />
    </div>
  );
};

export default App;
```

**Explanation:**
- The `filteredItems` array is recalculated only when `items` or `filter` changes.
- Without `useMemo`, the filtering operation would run on every render, even if `filter` hasn’t changed.

**Output in Console:**
- "Filtering items..." logs only when `filter` or `items` changes.

---

### 🔹 **Example 2: Expensive Calculations**

```jsx
import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ number }) => {
  // Memoized calculation
  const result = useMemo(() => {
    console.log('Calculating factorial...');
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }, [number]);

  return <div>Factorial of {number}: {result}</div>;
};

const App = () => {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveCalculation number={number} />
    </div>
  );
};

export default App;
```

**Explanation:**
- The factorial calculation is expensive and runs only when `number` changes.
- Without `useMemo`, the calculation would run on every render, even if `number` hasn’t changed.

---

## 🔹 **4. Lazy Loading with `React.lazy` & `Suspense`**

### ✅ **What it does:**
`React.lazy` allows you to **dynamically import components**, enabling code-splitting and lazy loading. Combined with `Suspense`, it improves performance by splitting your app into smaller chunks that load on demand.

### 📌 **Syntax:**
```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 🔍 **Use Case:**
- **Route-based code splitting:** Load components only when navigating to specific routes.
- **Large components:** Delay loading heavy components until they are needed.

### ⚠️ **Requirements:**
- Only works with **default exports**.
- Wrap inside `<Suspense>` to handle the loading state.

---

### 🔹 **Example 1: Lazy Loading a Component**

```jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Lazy-loaded component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

**Explanation:**
- `LazyComponent` is loaded dynamically only when it’s needed.
- The `fallback` prop in `Suspense` displays a loading indicator while the component is being fetched.

---

### 🔹 **Example 2: Route-Based Code Splitting**

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
```

**Explanation:**
- Each route loads its component lazily, reducing the initial bundle size.
- The `fallback` prop ensures a smooth user experience while components are loading.

---

## ✅ **Summary Table:** 


| Tool           | Purpose                                 | Common Use Case                         |
|----------------|------------------------------------------|------------------------------------------|
| `React.memo`   | Avoid re-render if props don’t change    | Pure child components                   |
| `useCallback`  | Memoize functions                        | Stable functions for children or hooks   |
| `useMemo`      | Memoize computed values                  | Expensive calculations or derived data   |
| `React.lazy`   | Dynamically load components              | Code-splitting, lazy loading             |
| `Suspense`     | Show fallback while loading              | Wrapping lazy-loaded components          |

---

### 🔹 **Conclusion:**

By leveraging tools like `React.memo`, `useCallback`, `useMemo`, `React.lazy`, and `Suspense`, you can significantly optimize the performance of your React applications. These techniques help reduce unnecessary re-renders, minimize computational overhead, and improve load times through code-splitting. Always profile and test your app to ensure these optimizations provide measurable benefits without introducing complexity.

**Final Answer:**
```jsx
// Example combining React.memo, useCallback, and useMemo
const MemoizedComponent = React.memo(({ onClick, data }) => {
  console.log('Rendered MemoizedComponent');
  return <button onClick={onClick}>{data}</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoizedData = useMemo(() => `Count: ${count}`, [count]);

  return <MemoizedComponent onClick={handleClick} data={memoizedData} />;
};
```