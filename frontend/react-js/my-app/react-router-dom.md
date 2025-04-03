## **1. Install React Router**
First, install `react-router-dom`:

```sh
npm install react-router-dom
```

---

## **2. `main.jsx` (Entry Point)**
Wrap the entire application inside `<BrowserRouter>`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## **3. `App.jsx` (Routing Setup)**
Define all routes inside `<Routes>`.

```jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
```

---

## **4. `components/Navbar.jsx` (Navigation)**
Use `<Link>` and `<NavLink>` for navigation.

```jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
```

---

## **5. `pages/Home.jsx`**
```jsx
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default Home;
```

---

## **6. `pages/About.jsx`**
```jsx
function About() {
  return <h1>About Us</h1>;
}

export default About;
```

---

## **7. `pages/UserProfile.jsx` (Dynamic Route)**
Use `useParams()` to extract route parameters.

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h1>User Profile for ID: {id}</h1>;
}

export default UserProfile;
```

---

## **8. `pages/Dashboard.jsx` (Protected Route)**
```jsx
function Dashboard() {
  return <h1>Welcome to the Dashboard</h1>;
}

export default Dashboard;
```

---

## **9. `pages/NotFound.jsx` (404 Page)**
```jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

---

## **10. `components/ProtectedRoute.jsx` (Auth-Based Navigation)**
Redirect users if they are not authenticated.

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change to true if logged in

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
```

---

### **Summary**
✅ BrowserRouter wraps `<App />` in `index.js`.  
✅ `<Routes>` and `<Route>` manage navigation in `App.js`.  
✅ `<NavLink>` highlights the active link.  
✅ `useParams()` handles dynamic routes.  
✅ `useNavigate()` is used for redirection inside `ProtectedRoute.js`.  
✅ `Navigate` redirects users when unauthenticated.  

