### **JavaScript Objects - Simple Notes**  

#### **What is an Object?**  
An **object** in JavaScript is a collection of **key-value pairs**.  
- **Keys** are called **properties**.  
- **Values** can be **data or functions (methods)**.  

#### **Example of an Object**  
```javascript
const person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello, " + this.name;
  }
};

console.log(person.name);   // Output: John
console.log(person.greet()); // Output: Hello, John
```

---

### **Features of an Object**
1. **Stores multiple values together** (like a real-world entity).  
2. **Can have functions (methods) inside it**.  
3. **Properties can be added or removed anytime**.  
4. **Objects can inherit from other objects**.  

---

### **Ways to Create an Object**  

#### **1. Object Literal**  
```javascript
const car = { brand: "Toyota", model: "Corolla", year: 2022 };
```

#### **2. Using a Function**  
```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car("Honda", "Civic");
console.log(myCar.brand); // Output: Honda
```

---

### **Common Object Methods**  

#### **1. `Object.keys(obj)` → Get Property Names**  
```javascript
console.log(Object.keys(person)); // Output: ["name", "age", "greet"]
```

#### **2. `Object.values(obj)` → Get Property Values**  
```javascript
console.log(Object.values(person)); // Output: ["John", 30, function]
```

#### **3. `Object.entries(obj)` → Get Key-Value Pairs**  
```javascript
console.log(Object.entries(person)); 
// Output: [["name", "John"], ["age", 30], ["greet", function]]
```

#### **4. `hasOwnProperty(prop)` → Check if a Property Exists**  
```javascript
console.log(person.hasOwnProperty("age")); // Output: true
console.log(person.hasOwnProperty("gender")); // Output: false
```

#### **5. `delete obj.property` → Remove a Property**  
```javascript
delete person.age;
console.log(person); // Output: { name: "John", greet: function }
```

#### **6. `Object.assign(target, source)` → Copy Properties**  
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 2 }
```

---

### **Summary**
- **Objects** store data as key-value pairs.  
- They can have **functions (methods)** inside them.  
- You can create objects **using `{}` or functions**.  
- JavaScript provides **built-in methods** to work with objects.  
