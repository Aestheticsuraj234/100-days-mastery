<!-- Comparison Operators
$eq , $ne , $gt , $gte , $it , $ite , $in , $nin
 -->
 
### 1. $eq (Equals)

The `$eq` operator selects documents where the value of a e

**Example:**
```javascript
db.products.find({ "price": { $eq: 100 } })
```
This query selects documents where the "price" field is equal to 100.

### 2. $ne (Not Equals)

The `$ne` operator selects documents where the value of a field is not equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $ne: 100 } })
```
This query selects documents where the "price" field is not equal to 100.

### 3. $gt (Greater Than)

The `$gt` operator selects documents where the value of a field is greater than the specified value.

**Example:**
```javascript
db.products.find({ price: { $gt: 100 } })
```
This query selects documents where the "price" field is greater than 100.

### 4. $gte (Greater Than or Equal To)

The `$gte` operator selects documents where the value of a field is greater than or equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $gte: 100 } })
```
This query selects documents where the "price" field is greater than or equal to 100.

### 5. $lt (Less Than)

The `$lt` operator selects documents where the value of a field is less than the specified value.

**Example:**
```javascript
db.products.find({ price: { $lt: 100 } })
```
This query selects documents where the "price" field is less than 100.

### 6. $lte (Less Than or Equal To)

The `$lte` operator selects documents where the value of a field is less than or equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $lte: 100 } })
```
This query selects documents where the "price" field is less than or equal to 100.

### 7. $in (In)

The `$in` operator selects documents where the value of a field matches any value in the specified array.

**Example:**
```javascript
db.products.find({ category: { $in: ["Electronics", "Clothing"] } })
```
This query selects documents where the "category" field matches either "Electronics" or "Clothing".

### 8. $nin (Not In)

The `$nin` operator selects documents where the value of a field does not match any value in the specified array.

**Example:**
```javascript
db.products.find({ category: { $nin: ["Electronics", "Clothing"] } })
```
This query selects documents where the "category" field does not match either "Electronics" or "Clothing".
 
 
  ### **Introduction to Cursors in MongoDB**

When you use the `find()` method in MongoDB, it returns a **cursor**, which is a pointer to the result set of a query. The cursor allows you to iterate through the documents in the collection efficiently. MongoDB provides several cursor methods to manipulate or process the data, including `count()`, `limit()`, `skip()`, and `sort()`.

---

### **Cursor Methods with Examples**

#### **1. `count()`**
The `count()` method returns the number of documents matching the query criteria.

```javascript
// Count the number of documents of type "fruit"
const count = db.collectionName.find({ type: "fruit" }).count();
console.log("Number of fruits:", count);
```

- **Explanation**: 
  - `find()` retrieves the cursor for documents where the `type` is "fruit".
  - `count()` returns the total number of documents matching the query.

---

#### **2. `limit()`**
The `limit()` method restricts the number of documents returned by a query.

```javascript
// Find the first 3 documents of type "dairy"
const result = db.collectionName.find({ type: "dairy" }).limit(3);
result.forEach(doc => console.log(doc));
```

- **Explanation**:
  - `find()` retrieves the cursor for documents where the `type` is "dairy".
  - `limit(3)` ensures that only the first 3 matching documents are returned.

---

#### **3. `skip()`**
The `skip()` method skips a specified number of documents before returning the result set.

```javascript
// Skip the first 2 documents and fetch the next 3
const result = db.collectionName.find({ type: "bakery" }).skip(2).limit(3);
result.forEach(doc => console.log(doc));
```

- **Explanation**:
  - `find()` retrieves all documents of `type: "bakery"`.
  - `skip(2)` skips the first two matching documents.
  - `limit(3)` ensures that only the next 3 documents are returned.

---

#### **4. `sort()`**
The `sort()` method sorts the documents in ascending (`1`) or descending (`-1`) order based on the specified field(s).

```javascript
// Sort documents of type "fruit" by price in ascending order
const result = db.collectionName.find({ type: "fruit" }).sort({ price: 1 });
result.forEach(doc => console.log(doc));
```

- **Explanation**:
  - `find()` retrieves documents of `type: "fruit"`.
  - `sort({ price: 1 })` sorts the documents in ascending order by the `price` field.

---

### **Combining Cursor Methods**

You can chain these methods to achieve more complex results.

```javascript
// Fetch 5 fruits sorted by rating in descending order, skipping the first 2
const result = db.collectionName
  .find({ type: "fruit" })
  .sort({ rating: -1 })
  .skip(2)
  .limit(5);

result.forEach(doc => console.log(doc));
```

- **Explanation**:
  - `find({ type: "fruit" })` filters only documents of `type: "fruit"`.
  - `sort({ rating: -1 })` sorts the documents by `rating` in descending order.
  - `skip(2)` skips the first two results.
  - `limit(5)` limits the result set to the next 5 documents.

---
### **Summary**
- **`count()`**: Returns the number of documents matching a query.
- **`limit(n)`**: Restricts the number of documents returned.
- **`skip(n)`**: Skips the first `n` documents.
- **`sort({ field: order })`**: Sorts documents by a field in ascending (`1`) or descending (`-1`) order.
