# **Loops in JavaScript (for, while, do...while)**  

Loops help in executing a block of code repeatedly until a specified condition is met.  

---

## **1. for Loop**  
The `for` loop is used when the number of iterations is known in advance.  

### **Syntax:**  
```javascript
for (initialization; condition; update) {
    // Code to be executed
}
```
### **Example: Print numbers from 1 to 5**  
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
**Output:**  
```
1  
2  
3  
4  
5  
```

### **Example: Iterating Over an Array**
```javascript
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```
**Output:**
```
Apple  
Banana  
Mango  
```

---

## **2. while Loop**  
The `while` loop is used when the number of iterations is **unknown** and depends on a condition.

### **Syntax:**  
```javascript
while (condition) {
    // Code to be executed
}
```
### **Example: Print numbers from 1 to 5**  
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // Increment to avoid infinite loop
}
```
**Output:**  
```
1  
2  
3  
4  
5  
```

### **Example: User Input Validation**
```javascript
let password = "";
while (password !== "secret") {
    password = prompt("Enter the correct password:");
}
console.log("Access granted!");
```
(This will keep prompting the user until they enter `"secret"`.)

---

## **3. do...while Loop**  
The `do...while` loop is similar to the `while` loop, but it **executes at least once** before checking the condition.  

### **Syntax:**  
```javascript
do {
    // Code to be executed
} while (condition);
```

### **Example: Print numbers from 1 to 5**  
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```
**Output:**  
```
1  
2  
3  
4  
5  
```

### **Example: Ensuring User Input at Least Once**
```javascript
let number;
do {
    number = parseInt(prompt("Enter a number greater than 10:"));
} while (number <= 10);
console.log("Thank you!");
```
(Even if the user enters a number ≤ 10, the prompt will show at least once.)

---

## **Comparison of Loops**

| Feature         | for Loop | while Loop | do...while Loop |
|---------------|---------|-----------|----------------|
| **Use case** | When iterations are known | When iterations are unknown | When the code must run at least once |
| **Condition Check** | Before execution | Before execution | After execution |
| **Guaranteed Execution** | No | No | Yes (at least once) |
| **Common Example** | Iterating over an array | Waiting for user input | Asking for user input at least once |

---

## **Best Practices**
✅ **Use `for`** when you know how many times the loop should run.  
✅ **Use `while`** when looping depends on an external condition.  
✅ **Use `do...while`** when the loop must execute at least once.  
⚠️ **Avoid infinite loops** by ensuring the loop condition eventually becomes 