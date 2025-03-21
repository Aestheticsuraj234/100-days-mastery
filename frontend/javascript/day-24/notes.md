### 📌 **JavaScript Promises: A Complete Guide**  

### 🔹 **What is a Promise?**  
A **Promise** in JavaScript represents a value that might be available **now, later, or never**. It is an object that handles **asynchronous operations** and allows us to work with the result once the operation completes.  

### 🔹 **States of a Promise**  
A Promise has **three states**:  
1. **Pending** → Initial state (neither resolved nor rejected).  
2. **Fulfilled (Resolved)** → The operation was successful.  
3. **Rejected** → The operation failed.  

### 🔹 **Creating a Promise**  
A Promise is created using the `Promise` constructor:  
```js
let myPromise = new Promise((resolve, reject) => {
    // Asynchronous task
    let success = true; // Change to false to test rejection
    if (success) {
        resolve("Promise resolved ✅");
    } else {
        reject("Promise rejected ❌");
    }
});
```

### 🔹 **Handling Promises with `.then()`, `.catch()`, and `.finally()`**  
- `.then(callback)` → Executes when the Promise is resolved.  
- `.catch(callback)` → Executes when the Promise is rejected.  
- `.finally(callback)` → Executes **always**, whether the Promise resolves or rejects.  

```js
myPromise
    .then((result) => {
        console.log("Resolved:", result);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    })
    .finally(() => {
        console.log("This will always run.");
    });
```

### 🔹 **Example: Age Check using Promises**
```js
let age = 17;

let AgeCheckPromise = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Yes, You are Sigma Now! 💪");
    } else {
        reject("No, You are Nibba Now! 😆");
    }
});

AgeCheckPromise
    .then((value) => console.log("Resolved:", value))
    .catch((error) => console.error("Rejected:", error));
```

### 🔹 **Fetching API Data using Promises**
Fetching data using `fetch()` returns a **Promise**:  
```js
fetch("https://api.github.com/users/Aestheticsuraj234")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => console.log(data))  // Handle resolved data
    .catch((error) => console.error("Error:", error))  // Handle errors
    .finally(() => console.log("Always Run"));
```

### 🔹 **Using `async/await` for Cleaner Code**
Instead of `.then()` and `.catch()`, we can use `async/await`:  
```js
async function FetchGithubUserData() {
    try {
        let res = await fetch("https://api.github.com/users/Aestheticsuraj234");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Always Run");
    }
}

FetchGithubUserData();
```
✅ **Advantages of `async/await`**  
- Code looks **synchronous** and **cleaner**.  
- **Avoids callback hell**.  

---

### 🔹 **Additional Concepts**
1. **Callback Hell** → A nested structure of callbacks that becomes difficult to read.  
2. **Arrow Functions (`=>`)** → Shorter syntax for functions.  
3. **Closure** → A function that remembers the variables from its parent scope.  

---
### 🔥 **Key Takeaways**  
✔ Promises handle asynchronous operations.  
✔ Use `.then()`, `.catch()`, and `.finally()` to handle them.  
✔ `fetch()` returns a Promise when calling APIs.  
✔ `async/await` provides a cleaner way to work with Promises.  
