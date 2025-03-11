# **JavaScript Strings: Properties & Methods**

## **What is a String?**
A **string** in JavaScript is a sequence of characters enclosed in single (`' '`), double (`" "`), or backticks (`` ` ` ``). Strings are **immutable**, meaning they cannot be changed once created.

```js
let str1 = "Hello, World!";
let str2 = 'JavaScript';
let str3 = `Template Literal`;
```

---

## **String Properties**
### **1. `length`**  
Returns the number of characters in the string.  
```js
let text = "JavaScript";
console.log(text.length); // 10
```

---

## **String Methods**

### **1. `charAt(index)`**
Returns the character at a specific index in the string.  
```js
let word = "Hello";
console.log(word.charAt(1)); // "e"
```

---

### **2. `slice(start, end)`**
Extracts a portion of a string from `start` to `end` (not including `end`).  
```js
let sentence = "JavaScript is awesome";
console.log(sentence.slice(0, 10)); // "JavaScript"
console.log(sentence.slice(-7));   // "awesome" (negative index counts from the end)
```

---

### **3. `substring(start, end)`**
Similar to `slice`, but does not accept negative indices.  
```js
let text = "Hello, World!";
console.log(text.substring(0, 5)); // "Hello"
```

---

### **4. `concat(str1, str2, ...)`**
Joins multiple strings together.  
```js
let first = "Hello";
let second = "World";
console.log(first.concat(", ", second, "!")); // "Hello, World!"
```

---

### **5. `split(separator)`**
Splits a string into an array based on a separator.  
```js
let names = "Alice,Bob,Charlie";
console.log(names.split(",")); // ["Alice", "Bob", "Charlie"]
```

---

### **6. `trim()`**
Removes whitespace from both ends of a string.  
```js
let input = "   Hello World!   ";
console.log(input.trim()); // "Hello World!"
```

---

### **7. `toUpperCase()`**
Converts the string to uppercase.  
```js
let message = "hello";
console.log(message.toUpperCase()); // "HELLO"
```

---

### **8. `toLowerCase()`**
Converts the string to lowercase.  
```js
let message = "HELLO";
console.log(message.toLowerCase()); // "hello"
```

---

### **9. `replace(search, replaceWith)`**
Replaces the first occurrence of `search` with `replaceWith`.  
```js
let text = "I love JavaScript";
console.log(text.replace("JavaScript", "Python")); // "I love Python"
```

---

## **Template Literals & String Interpolation**
Template literals allow multi-line strings and variable interpolation using backticks (`` ` ` ``).

```js
let name = "Alice";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
// "My name is Alice and I am 25 years old."
```

---

## **Exercise: Reverse a String Without `.reverse()`**
### **Problem:**  
Write a function to reverse a string manually.

### **Solution:**
```js
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

