# **Fetch API & Async/Await: Notes and Comparison**

## **1. Fetch API**
The **Fetch API** is used to make HTTP requests in JavaScript. It is a modern alternative to `XMLHttpRequest` and returns a `Promise`.

### **Syntax of Fetch API**
```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```
- `fetch(url)`: Sends a GET request to the provided URL.
- `.then(response => response.json())`: Converts the response into JSON format.
- `.catch(error)`: Handles errors if the request fails.

### **Example: Fetching GitHub User Data**
```js
fetch("https://api.github.com/users/aestheticsuraj234")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
```
---

## **2. Async/Await**
`async/await` is a cleaner and more readable way to handle asynchronous operations.

### **Syntax of Async/Await**
```js
async function fetchData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```
- `async`: Marks a function as asynchronous.
- `await`: Waits for the `fetch` request to complete before proceeding.
- `try...catch`: Handles errors cleanly.

### **Example: Fetching GitHub User Data Using Async/Await**
```js
async function getGitHubUser() {
  try {
    let response = await fetch("https://api.github.com/users/aestheticsuraj234");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getGitHubUser();
```
---

## **3. Comparison: Fetch API with `.then()` vs `async/await`**
| Feature | Fetch API (`.then()`) | Async/Await |
|---------|----------------|-------------|
| Readability | More complex with nested `.then()` | More readable, like synchronous code |
| Error Handling | Uses `.catch()` for errors | Uses `try...catch` for cleaner error handling |
| Chaining Requests | Requires multiple `.then()` calls | Uses multiple `await` statements sequentially |
| Debugging | Harder to debug due to promise chaining | Easier debugging as it looks synchronous |

### **Comparison Using GitHub API**
#### **Using Fetch API with `.then()`**
```js
fetch("https://api.github.com/users/aestheticsuraj234")
  .then(response => response.json())
  .then(user => {
    return fetch(user.repos_url);
  })
  .then(response => response.json())
  .then(repos => console.log(repos))
  .catch(error => console.error("Error:", error));
```

#### **Using Async/Await**
```js
async function fetchGitHubRepos() {
  try {
    let userResponse = await fetch("https://api.github.com/users/aestheticsuraj234");
    let user = await userResponse.json();

    let reposResponse = await fetch(user.repos_url);
    let repos = await reposResponse.json();

    console.log(repos);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchGitHubRepos();
```

---

## **4. When to Use Fetch API vs Async/Await**
- Use **`.then()`** when handling multiple independent promises.
- Use **`async/await`** for better readability and sequential operations.

#### **Final Thoughts**
- **Async/Await** is recommended for modern JavaScript applications because it is easier to read and maintain.
- The **Fetch API** with `.then()` is still widely used but can lead to callback nesting in complex cases.
