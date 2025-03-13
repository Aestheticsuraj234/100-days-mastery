### 🔢 **Numbers in JavaScript**
- JavaScript has only one type for numbers: **`Number`** (floating-point).  
- Example:
  ```javascript
  let num1 = 10;  // Integer
  let num2 = 10.5;  // Decimal
  ```
- Special values:
  ```javascript
  console.log(5 / 0);  // Infinity
  console.log(-5 / 0); // -Infinity
  console.log("abc" * 2); // NaN (Not a Number)
  ```

### 🧮 **Math Object**
The `Math` object provides built-in mathematical functions.

- **Common Methods:**
  ```javascript
  console.log(Math.PI); // 3.141592653589793
  console.log(Math.round(4.7)); // 5
  console.log(Math.floor(4.7)); // 4 (Rounds Down)
  console.log(Math.ceil(4.2)); // 5 (Rounds Up)
  console.log(Math.abs(-10)); // 10
  console.log(Math.sqrt(25)); // 5
  console.log(Math.pow(2, 3)); // 8 (2^3)
  console.log(Math.random()); // Random number between 0 and 1
  ```
- **Generate a random number between a range:**
  ```javascript
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  console.log(randomNum); // Random number between 1 and 10
  ```

---

### 📆 **Date Object in JavaScript**
- The `Date` object is used to work with dates and times.

#### **Creating a Date Object**
```javascript
let currentDate = new Date(); // Current date and time
console.log(currentDate);
```
#### **Common Methods:**
```javascript
let date = new Date();

console.log(date.getFullYear()); // Get year
console.log(date.getMonth()); // Get month (0 = January)
console.log(date.getDate()); // Get day of the month
console.log(date.getDay()); // Get day of the week (0 = Sunday)
console.log(date.getHours()); // Get hours
console.log(date.getMinutes()); // Get minutes
console.log(date.getSeconds()); // Get seconds
```

#### **Setting a Date**
```javascript
let newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(5);  // June (0-based)
newDate.setDate(15);
console.log(newDate);
```
