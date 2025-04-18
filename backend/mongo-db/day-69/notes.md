### Explanation of MongoDB Delete Operations:

#### 1. **`deleteOne()`**
```javascript
db.collectionname.deleteOne({ filter });
```
- **Purpose**: Deletes a single document from the collection that matches the filter criteria.
- **Behavior**: 
  - If multiple documents match the filter, **only the first matching document** (based on the natural order) is deleted.
  - If no documents match the filter, no action is performed.

**Example**:
```javascript
db.students.deleteOne({ age: 21 });
```
- Deletes the first document in the `students` collection where the `age` field is `21`.

---

#### 2. **`deleteMany()`**
```javascript
db.sales.deleteMany({ price: 55 });
```
- **Purpose**: Deletes **all documents** from the collection that match the filter criteria.
- **Behavior**: 
  - Removes **all matching documents**.
  - If no documents match the filter, no action is performed.

**Example**:
```javascript
db.sales.deleteMany({ price: 55 });
```
- Deletes all documents in the `sales` collection where the `price` field is `55`.

---

### Notes:
- **Filter**: The filter is a query object that specifies which documents to delete. It can include conditions like equality, ranges, or logical operators.
- **Caution**: Be careful with delete operations, especially `deleteMany()`, as they can potentially remove a large number of documents.
- **No Filter**: If you provide an empty filter (`{}`), all documents in the collection will be deleted:
  ```javascript
  db.collectionname.deleteMany({});
  ```

---