### **1. Global Objects in Node.js** 

**Explanation:**
Global objects in Node.js are always available and do not need to be imported. They include objects like `global`, `console`, `setTimeout`, and `setInterval`.

**Code Example:**
```javascript
// Example 1: Using global
console.log(global); // Outputs the global object

// Example 2: Using setTimeout
console.log("Start");
setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);
console.log("End");

// Example 3: Using setInterval
let count = 0;
const interval = setInterval(() => {
  console.log(`Interval Count: ${++count}`);
  if (count === 3) {
    clearInterval(interval); // Stops the interval after 3 iterations
  }
}, 1000);
```

**Key Takeaway:**  
- `global` provides access to Node.js's global namespace.
- `setTimeout` schedules a task after a delay.
- `setInterval` repeats a task at regular intervals.

---

### **2. Module Wrapper Function (Introducing `__dirname` and `__filename`)** (15 minutes)

**Explanation:**  
In Node.js, every module is wrapped in a function called the **module wrapper function**, which provides scope-specific variables such as `__dirname` (directory path of the current file) and `__filename` (full path of the current file).

**Code Example:**
```javascript
// Demonstrating __dirname and __filename
console.log("Directory Name:", __dirname); // Prints the directory path
console.log("File Name:", __filename); // Prints the full file path

// Practical Use Case: Resolving file paths
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
console.log("Resolved File Path:", filePath);
```

**Key Takeaway:**  
- Use `__dirname` to handle directory paths.
- Use `__filename` to get the full path of the current file.
- These are useful for file handling and dynamic path resolutions.

---

### **3. Event Loop (Core Concept)** 

**Explanation:**  
The event loop allows Node.js to perform non-blocking operations by offloading tasks to the OS or a background thread and then picking up their results when they’re ready.

**Code Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");
```

**Execution Flow:**  
1. "Start" is logged to the console.
2. `setTimeout` schedules a callback to execute after 2 seconds.
3. "End" is logged immediately since `setTimeout` is asynchronous.
4. After 2 seconds, "Inside setTimeout" is logged.

**Visual Explanation:**
- `console.log` goes into the **Call Stack** and executes immediately.
- `setTimeout` is sent to the **Node APIs**, which handles the delay.
- Once the delay is complete, the callback is pushed to the **Task Queue** and waits for the **Call Stack** to be empty before execution.

---



1. **Recap Key Concepts:**
   - Global objects (`global`, `setTimeout`, `setInterval`).
   - Module wrapper function (`__dirname`, `__filename`).
   - Event loop's asynchronous behavior.
   - Building a simple HTTP server with the `http` module.

2. **Encourage Interaction:**  
   Ask participants:
   - To modify the HTTP server to respond differently based on the request URL.
   - To implement multiple `setTimeout` or `setInterval` examples to understand the event loop better.