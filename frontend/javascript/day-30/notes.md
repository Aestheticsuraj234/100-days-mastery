# **1. Classes in JavaScript**
JavaScript classes are templates for creating objects. They encapsulate data and behavior into reusable blueprints.

### **Example:**
```javascript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
```
Here, `User` is a class with properties (`username`, `email`, `password`) initialized inside a **constructor**.

---

# **2. Constructor Method**
The `constructor` is a special method in a class that initializes an object’s properties.

### **Example:**
```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar); // Car { brand: 'Toyota', model: 'Corolla' }
```

---

# **3. Instance Methods**
These are functions defined inside a class that operate on the object’s properties.

### **Example:**
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} is logged in`);
    }
}

const user1 = new User("Alice", "alice@example.com");
user1.login(); // Output: Alice is logged in
```

---

# **4. Inheritance (Extending a Class)**
A class can inherit from another class using the `extends` keyword.

### **Example:**
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound...");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Some generic sound...
myDog.bark();      // Output: Woof! Woof!
```
- `Dog` extends `Animal`, inheriting its properties (`name`) and methods (`makeSound()`).
- The `super(name)` calls the parent constructor.

---

# **5. Method Overriding**
A subclass can redefine a method from the parent class.

### **Example:**
```javascript
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow! Meow!");
    }
}

const kitty = new Cat();
kitty.speak(); // Output: Meow! Meow!
```
Here, the `speak()` method in `Cat` overrides the `speak()` method in `Animal`.

---

# **6. The `instanceof` Operator**
It checks if an object belongs to a class or its subclass.

### **Example:**
```javascript
console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true
```

---

# **7. Static Properties & Methods**
Static properties and methods belong to the class itself, not instances.

### **Example:**
```javascript
class MathUtils {
    static PI = 3.1416;

    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.PI);         // 3.1416
console.log(MathUtils.add(10, 20)); // 30
```
- `PI` and `add()` are **static**, meaning they can be accessed directly using the class name.

---

# **8. Encapsulation (Private Properties)**
Private properties can only be accessed within the class.

### **Example:**
```javascript
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
console.log(myAccount.#balance); // Error: Private field cannot be accessed
```
- `#balance` is a **private property**, preventing direct access from outside.

---

# **9. Polymorphism**
Polymorphism allows a method to be used in different ways.

### **Example:**
```javascript
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
```
Each class implements its version of `draw()`.

---

# **10. Getter and Setter Methods**
`get` and `set` allow controlled access to properties.

### **Example:**
```javascript
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person = new Person("John");
console.log(person.name); // John
person.name = "Doe";
console.log(person.name); // Doe
```

---

# **Final Thoughts**
Your provided code utilizes:
✅ **Classes**  
✅ **Inheritance**  
✅ **Instance Methods**  
✅ **Method Overriding**  
✅ **Instanceof Operator**  
✅ **Static Properties & Methods**  

