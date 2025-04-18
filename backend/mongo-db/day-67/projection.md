# 🧠 MongoDB Projection 
## ✨ What is Projection?
In MongoDB, **Projection** is used to **control which fields** are **returned** when you perform a `find` query.  
Instead of fetching the entire document, you can **include** or **exclude** specific fields to optimize performance and get exactly what you need.

---
## 🎯 How to Use Projection?

When you run:
```javascript
db.collection.find(query, projection)
```
- `query` — What you are searching for.
- `projection` — Which fields to show (`1` to **include**, `0` to **exclude**).

---

# 📚 5 Practical Examples

## 1. **Include Specific Fields**

✅ Example:  
Find all foods but **only show** their `name` and `type`.

```javascript
db.foods.find({}, { name: 1, type: 1 });
```

**Result:**
```json
{ "name": "Apple", "type": "fruit" }
{ "name": "Carrot", "type": "veggies" }
{ "name": "Burger", "type": "fast food" }
...
```

> By default, MongoDB always returns `_id` unless you explicitly exclude it.

---

## 2. **Exclude a Field**

✅ Example:  
Get all foods but **hide** the `calories` field.

```javascript
db.foods.find({}, { calories: 0 });
```

**Result:**
```json
{ "_id": "...", "name": "Apple", "type": "fruit", "color": "red" }
{ "_id": "...", "name": "Pizza", "type": "fast food", "color": "varied" }
...
```

---
## 3. **Exclude `_id` Field**

✅ Example:  
Get foods with only `name` and `color`, but **remove `_id`** field from output.

```javascript
db.foods.find({}, { _id: 0, name: 1, color: 1 });
```

**Result:**
```json
{ "name": "Broccoli", "color": "green" }
{ "name": "Strawberry", "color": "red" }
...
```

> 🔥 Excluding `_id` is very common when you only want clean outputs (e.g., for APIs).

---

## 4. **Project Fields Based on Condition**

✅ Example:  
Find only **fruits** and **show only** their `name` and `calories`.

```javascript
db.foods.find(
  { type: "fruit" },
  { name: 1, calories: 1, _id: 0 }
);
```

**Result:**
```json
{ "name": "Apple", "calories": 52 }
{ "name": "Banana", "calories": 89 }
{ "name": "Grapes", "calories": 69 }
...
```

---

## 5. **Use Embedded Documents with Projection**

✅ Example:  
Suppose you added a nested field like:
```javascript
nutrition: { fat: 0.2, protein: 0.3 }
```
in every document.

To only show the `nutrition.fat` field:
```javascript
db.foods.find({}, { "nutrition.fat": 1, _id: 0 });
```

**Result:**
```json
{ "nutrition": { "fat": 0.2 } }
{ "nutrition": { "fat": 1.5 } }
...
```

> 🛑 Note: When projecting embedded documents, always specify the full path.

---

# 🔥 Important Rules in Projection
- You **cannot mix** inclusion and exclusion fields (except `_id`).  
  (Either you **only include** fields, or you **only exclude** fields.)
- `_id` is **included** by default unless you explicitly set `{ _id: 0 }`.
- Using projections **improves performance** by **reducing the amount of data** transferred from the server to the client.

---

# 📌 Quick Summary

| Purpose | Syntax |
|:--------|:-------|
| Include fields | `{ fieldName: 1 }` |
| Exclude fields | `{ fieldName: 0 }` |
| Remove `_id` | `{ _id: 0 }` |
| Nested fields | `{ "parent.child": 1 }` |

