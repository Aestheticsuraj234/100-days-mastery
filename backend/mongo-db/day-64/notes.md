 ### **Case Sensitivity**
MongoDB queries are case-sensitive by default. For example, "John" and "john" are considered different values.
```javascript
db.myCollection.find({ "name": "John" });
```

---

## **The `find` Keyword**
The `find` method is used to query MongoDB collections. It returns a cursor, which can be iterated over.

### **Basic Find**
```javascript
db.myCollection.find({ "name": "John" });
```

### **Find with Projection**
```javascript
db.myCollection.find({ "name": "John" }, { "age": 1 });
```

### **1. `find()` Examples**

- **Find all items of type "fruit":**
  ```javascript
  db.collectionName.find({ type: "fruit" });
  ```

- **Find all items with a price greater than 20:**
  ```javascript
  db.collectionName.find({ price: { $gt: 20 } });
  ```

- **Find all items with a rating of 4:**
  ```javascript
  db.collectionName.find({ rating: 4 });
  ```

- **Find all items where the title contains the word "Strawberry":**
  ```javascript
  db.collectionName.find({ title: /Strawberry/i });
  ```

- **Find all items of type "dairy" and price less than 25:**
  ```javascript
  db.collectionName.find({ type: "dairy", price: { $lt: 25 } });
  ```

### **2. `findOne()` Examples**

- **Find a single item of type "bakery":**
  ```javascript
  db.collectionName.findOne({ type: "bakery" });
  ```

- **Find a single item with a rating of 5:**
  ```javascript
  db.collectionName.findOne({ rating: 5 });
  ```

- **Find a single item where the title is "Green smoothie":**
  ```javascript
  db.collectionName.findOne({ title: "Green smoothie" });
  ```

- **Find a single item with a price exactly equal to 14.77:**
  ```javascript
  db.collectionName.findOne({ price: 14.77 });
  ```






 