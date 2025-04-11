# 📚 Node.js Events – Easy & Practical Notes

## 🧠 What Are Events in Node.js?
Node.js apps run on an **event-driven architecture**. Instead of waiting, it listens for **events** and **reacts** to them.

The core idea:  
> You **listen** for an event (`on`) and then **trigger** it (`emit`) when needed.

---

## 🔧 Step 1: Import the Events Module

```js
const EventEmitter = require('events');
const emitter = new EventEmitter(); // create an instance
```

---

## ✅ Basic Syntax

### 1. `emitter.on('eventName', callback)`
Listens for an event.

### 2. `emitter.emit('eventName', data)`
Fires the event and optionally sends data.

---

## 🚀 Super Simple Examples

### 🧊 Example 1: Basic Hello Event

```js
emitter.on('hello', () => {
  console.log('Hey there!');
});

emitter.emit('hello');
// Output: Hey there!
```

---

### 🔡 Example 2: Event with Data

```js
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice');
// Output: Hello, Alice!
```

---

### 🎉 Example 3: Welcome Multiple Users

```js
emitter.on('welcome', (user) => {
  console.log(`Welcome, ${user}!`);
});

const users = ['Bob', 'Sara', 'John'];
users.forEach(user => emitter.emit('welcome', user));
```

---

### ⏰ Example 4: Event after a Timeout

```js
emitter.on('reminder', () => {
  console.log('Time to take a break!');
});

setTimeout(() => {
  emitter.emit('reminder');
}, 2000);
```

---

### 📦 Example 5: Order Confirmation

```js
emitter.on('orderPlaced', (orderId, item) => {
  console.log(`Order ${orderId} for ${item} received.`);
});

emitter.emit('orderPlaced', 123, 'Coffee');
// Output: Order 123 for Coffee received.
```

---

## 🔁 Bonus: Triggering Event Multiple Times

```js
emitter.on('ping', () => {
  console.log('Ping received!');
});

emitter.emit('ping');
emitter.emit('ping');
// Output (twice): Ping received!
```

---

## ⚠️ Reminder
- If you `emit` an event without a listener, nothing happens.
- Make sure you always add `.on()` before `.emit()`.

---

Let me know if you’d like a PDF version or want to turn this into a mini infographic or IG carousel!