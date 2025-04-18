<!-- REad operation in mongodb -->

## **Managing Databases in MongoDB**

### **Creating and Deleting Databases**
```javascript
// Create or switch to a database
use myDatabase;

// Delete a database
db.dropDatabase();
```

### **Creating and Deleting Collections**
```javascript
// Create a collection
db.createCollection("myCollection");

// Drop a collection
db.myCollection.drop();
```

---

## **Inserting Documents in MongoDB**
To insert documents into a collection:

### **Single Document Insert**
```javascript
db.myCollection.insertOne({
   "name": "John",
   "age": 30
});
```

### **Multiple Document Insert**
```javascript
db.myCollection.insertMany([
   { "name": "Alice", "age": 25 },
   { "name": "Bob", "age": 35 }
]);
```

### **Ordered vs Unordered Inserts** assignemnt
- **Ordered Inserts**: MongoDB will stop inserting documents if one fails.
- **Unordered Inserts**: MongoDB will continue inserting even if one document fails.
```javascript
db.myCollection.insertMany([
   { "name": "Charlie", "age": 40 },
   { "name": "David", "age": "invalid_age" } // This will cause a failure in ordered insert
], { ordered: false });
```




 

