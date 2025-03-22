### **LocalStorage and SessionStorage in JavaScript**

In JavaScript, `localStorage` and `sessionStorage` are part of the Web Storage API, used for storing data in the browser. They allow storing key-value pairs, but they have different lifespans and scopes.

---

## **1. localStorage**
### **Definition**
- `localStorage` allows storing data with no expiration time.
- The data persists even after the user closes and reopens the browser.
- Stored data is available across all tabs and windows for the same origin.

### **Methods**
| Method | Description |
|--------|-------------|
| `setItem(key, value)` | Stores a value with the given key |
| `getItem(key)` | Retrieves the value of a key |
| `removeItem(key)` | Removes the specified key-value pair |
| `clear()` | Removes all data from `localStorage` |
| `length` | Returns the number of stored items |
| `key(index)` | Returns the key name at a given index |

### **Example**
```javascript
// Store data
localStorage.setItem("username", "JohnDoe");

// Retrieve data
let user = localStorage.getItem("username");
console.log(user); // Output: JohnDoe

// Remove a specific item
localStorage.removeItem("username");

// Clear all stored data
localStorage.clear();
```

---

## **2. sessionStorage**
### **Definition**
- `sessionStorage` stores data for a single session.
- The data is lost when the browser tab is closed.
- Data is accessible only within the same tab.

### **Methods**
| Method | Description |
|--------|-------------|
| `setItem(key, value)` | Stores a value with the given key |
| `getItem(key)` | Retrieves the value of a key |
| `removeItem(key)` | Removes the specified key-value pair |
| `clear()` | Removes all data from `sessionStorage` |

### **Example**
```javascript
// Store data
sessionStorage.setItem("sessionUser", "Alice");

// Retrieve data
let sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser); // Output: Alice

// Remove a specific item
sessionStorage.removeItem("sessionUser");

// Clear all stored data
sessionStorage.clear();
```

---

## **3. Differences Between localStorage and sessionStorage**
| Feature | localStorage | sessionStorage |
|---------|-------------|---------------|
| Persistence | Data remains until manually deleted | Data is removed when the tab is closed |
| Scope | Accessible across all tabs and windows (same origin) | Accessible only within the same tab |
| Storage Limit | Approx. 5-10MB per origin | Approx. 5-10MB per origin |

---

## **4. Storing Objects in Web Storage**
Web Storage only supports string values. To store objects, use `JSON.stringify()` and `JSON.parse()`.

### **Example**
```javascript
// Object to store
const user = { name: "John", age: 30 };

// Store as string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse back to object
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: John
```

---

## **5. When to Use localStorage vs. sessionStorage**
- Use **localStorage** when data should persist (e.g., user preferences, theme settings).
- Use **sessionStorage** for temporary data (e.g., form inputs, authentication tokens during a session).

---
