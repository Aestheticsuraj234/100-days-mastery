## **Conditional Rendering in React**  
Conditional rendering in React allows components to render different UI based on certain conditions. React provides multiple ways to implement conditional rendering:  

### **1. Using `if` statements (Inside Functions)**  
You can use a standard `if` statement inside a function to conditionally return JSX.

#### **Example: Using `if` statement**  
```jsx
function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back, User!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

function App() {
  return <UserGreeting isLoggedIn={true} />;
}
```
💡 **When to use?**  
Use `if` when the conditional logic is complex and cannot be written inline inside JSX.

---

### **2. Using Ternary Operator (`condition ? expr1 : expr2`)**  
Ternary operators allow conditional rendering within JSX without needing a full `if` statement.

#### **Example: Using ternary operator**
```jsx
function UserGreeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome back, User!" : "Please sign in."}</h1>
  );
}

function App() {
  return <UserGreeting isLoggedIn={false} />;
}
```
💡 **When to use?**  
Use the ternary operator when you need to return a small JSX block based on a condition.

---

### **3. Using Logical `&&` Operator (Short-circuiting)**
In JavaScript, `true && expression` evaluates to `expression`, while `false && expression` evaluates to `false`.

#### **Example: Using `&&` for conditional rendering**
```jsx
function Notification({ hasNotification }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasNotification && <p>You have new messages!</p>}
    </div>
  );
}

function App() {
  return <Notification hasNotification={true} />;
}
```
💡 **When to use?**  
Use the `&&` operator when rendering something only if a condition is `true` without needing an `else`.

---

### **4. Using `switch-case` for Multiple Conditions**
If there are multiple conditions to handle, a `switch` statement is useful.

#### **Example: Using `switch-case` for conditional rendering**
```jsx
function StatusMessage({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data loaded successfully!</p>;
    case "error":
      return <p>Error loading data.</p>;
    default:
      return <p>Unknown status.</p>;
  }
}

function App() {
  return <StatusMessage status="success" />;
}
```
💡 **When to use?**  
Use `switch-case` when there are multiple conditions to evaluate.

---

## **Rendering Lists in React**
Lists in React are commonly generated using the `.map()` function to transform an array into JSX elements.

### **Example: Rendering a List**
```jsx
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

function App() {
  return <NameList />;
}
```
🔹 **Explanation:**  
- `.map()` loops over the `names` array and creates an `<li>` element for each name.  
- The `key` prop is added to uniquely identify each list item.

---

## **Importance of `key` Prop**
In React, the `key` prop helps React identify which list items have changed, improving performance and preventing unnecessary re-renders.

### **Bad Example: Missing `key`**
```jsx
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li> // ❌ No key, React will warn about this
      ))}
    </ul>
  );
}
```
✅ **Good Example: Using `key`**
```jsx
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li> // ✅ Key added
      ))}
    </ul>
  );
}
```
🔹 **Best Practice for `key`:**  
- Use **unique IDs** if available (`user.id`, `product.id`).  
- If no unique IDs exist, use `index` (but it's not ideal for dynamic lists).  

---

## **Rendering Lists with Objects**
When dealing with objects, map the data to JSX elements.

#### **Example: Rendering List from an Object Array**
```jsx
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return <UserList />;
}
```
**Why use `user.id` as `key` instead of `index`?**  
- If the list changes (items are added/removed), React will efficiently update only the affected elements.  
- Using `index` as `key` can lead to incorrect re-rendering.

---

## **Combining Conditional Rendering with Lists**
You can combine conditional rendering and lists to display only specific elements.

#### **Example: Filtering and Mapping a List**
```jsx
function TaskList() {
  const tasks = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Build a Project", completed: false },
    { id: 3, title: "Review Code", completed: true },
  ];

  return (
    <ul>
      {tasks
        .filter((task) => task.completed) // Only show completed tasks
        .map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
    </ul>
  );
}

function App() {
  return <TaskList />;
}
```
🔹 **Explanation:**  
- `.filter(task => task.completed)` ensures only completed tasks are displayed.  
- `.map()` is then used to create the `<li>` elements.  

---

## **Summary**
| Feature                 | Method |
|-------------------------|--------|
| **Conditional Rendering** | `if`, ternary `? :`, `&&`, `switch-case` |
| **Rendering Lists** | `.map()` |
| **Keys for Performance** | Use `unique ID` (preferably) or `index` |
| **Combining Lists & Conditions** | `.filter().map()` |

---

## **Final Challenge: Create a Dynamic To-Do List**
Try building a **To-Do List** where users can **add, remove, and mark tasks as complete** using conditional rendering and lists.

