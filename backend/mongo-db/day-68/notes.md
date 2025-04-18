# 🍕 MongoDB Update 

MongoDB provides powerful ways to **modify** your documents — you can update specific fields, replace documents, or update many documents at once.

---

## ✨ 1. Methods for Updating Documents

| Method           | Purpose                                 |
|------------------|-----------------------------------------|
| `updateOne()`     | Updates the **first** matching document |
| `updateMany()`    | Updates **all** matching documents      |
| `replaceOne()`    | **Replaces** the entire document        |

---

## 🛠️ 2. Basic Syntax and Examples

---

### **`updateOne()`**

✅ Example:  
Update the `color` of the first food item where `name` is `"Apple"`.

```javascript
db.foods.updateOne(
  { name: "Apple" }, // Filter
  { $set: { color: "Green" } } // Update
);
```
- **Explanation**: Finds the first `"Apple"` and changes its `color` to `"Green"`.

---

### **`updateMany()`**

✅ Example:  
Change the `type` of all foods whose `type` is `"fast food"` to `"junk food"`.

```javascript
db.foods.updateMany(
  { type: "fast food" },
  { $set: { type: "junk food" } }
);
```
- **Explanation**: Updates **all** documents of type `"fast food"` to `"junk food"`.

---

### **`replaceOne()`**

✅ Example:  
Replace the entire document for `"Banana"`.

```javascript
db.foods.replaceOne(
  { name: "Banana" },
  {
    name: "Banana",
    type: "fruit",
    color: "Yellow",
    calories: 105,
    taste: "Sweet"
  }
);
```
- **Explanation**: Replaces `"Banana"`'s document with the **new fields** provided. Any old fields not mentioned are removed.

---

## 🚀 3. Update Operators

| Operator  | Description                         | Example                           |
|-----------|-------------------------------------|-----------------------------------|
| `$set`    | Set or update a field                | `{ $set: { color: "Red" } }`      |
| `$inc`    | Increment a numeric field            | `{ $inc: { calories: 10 } }`      |
| `$push`   | Add a value into an array             | `{ $push: { vitamins: "C" } }`    |
| `$pull`   | Remove a value from an array          | `{ $pull: { vitamins: "B12" } }`  |
| `$unset`  | Remove a field completely             | `{ $unset: { color: "" } }`       |

---

## 🍴 4. Examples Using Update Operators

---

### ✅ **Updating a Specific Field**

Change `"Carrot"` color to `"Orange-Red"` and add a field `fresh: true`.

```javascript
db.foods.updateOne(
  { name: "Carrot" },
  { $set: { color: "Orange-Red", fresh: true } }
);
```
- **Explanation**: Updates multiple fields inside one document.

---

### ✅ **Incrementing a Value**

Increase the `calories` of `"Burger"` by 200.

```javascript
db.foods.updateOne(
  { name: "Burger" },
  { $inc: { calories: 200 } }
);
```
- **Explanation**: Adds `200` calories to the existing value.

---

### ✅ **Adding a Value to an Array**

Suppose we have a `vitamins` array field in fruits. Add `"A"` to `"Apple"`.

```javascript
db.foods.updateOne(
  { name: "Apple" },
  { $push: { vitamins: "A" } }
);
```
- **Explanation**: Adds `"A"` vitamin to the list of vitamins.

---

### ✅ **Removing a Value from an Array**

Remove `"C"` from `"Strawberry"`'s `vitamins` array.

```javascript
db.foods.updateOne(
  { name: "Strawberry" },
  { $pull: { vitamins: "C" } }
);
```
- **Explanation**: Deletes `"C"` vitamin if it exists in array.

---

### ✅ **Removing a Field**

Remove `taste` field from `"Pizza"` document.

```javascript
db.foods.updateOne(
  { name: "Pizza" },
  { $unset: { taste: "" } }
);
```
- **Explanation**: Completely deletes the `taste` field.

---

## 🛡️ 5. Upsert Option

Sometimes, if no document matches the filter, you want to **create a new document automatically**.

✅ Example:  
If `"Dragonfruit"` doesn't exist, create it.

```javascript
db.foods.updateOne(
  { name: "Dragonfruit" },
  { $set: { type: "fruit", color: "Pink", calories: 60 } },
  { upsert: true }
);
```
- **Explanation**: Inserts a new `"Dragonfruit"` if it isn't found already.

---

## 📈 6. Updating Multiple Documents

✅ Example:  
All foods with `calories > 500` should have `highCalorie: true`.

```javascript
db.foods.updateMany(
  { calories: { $gt: 500 } },
  { $set: { highCalorie: true } }
);
```
- **Explanation**: All high-calorie foods are now marked specially.

---

# 🧠 Summary Cheat Sheet

| Method          | Updates | Creates New Document (`upsert`) | Notes                        |
|-----------------|---------|------------------------------|-----------------------------|
| `updateOne()`    | First matching document | Optional           | Updates just **one** |
| `updateMany()`   | All matching documents | Optional           | Updates **all** |
| `replaceOne()`   | Replace entire document | Optional           | Old document fields are **gone** |

