# 🧠 Logical Operators in MongoDB

MongoDB provides several **logical operators** to combine or group multiple conditions inside a query.  
They help us **filter documents** based on complex criteria — like combining multiple comparisons.

The main logical operators are:

| Operator | Description |
|:---------|:------------|
| `$and` | Joins query clauses with a logical **AND** (all conditions must be true) |
| `$or` | Joins query clauses with a logical **OR** (at least one condition must be true) |
| `$nor` | Joins query clauses with a logical **NOR** (none of the conditions must be true) |
| `$not` | Inverts the effect of a query expression |

---

# 📖 1. `$and`
- Matches documents **that satisfy all** the given conditions.

✅ **Example** (From your `foods` collection):  
Find foods that are **of type 'fruit'** **and** **have calories less than 70**.

```javascript
db.foods.find({
  $and: [
    { type: "fruit" },
    { calories: { $lt: 70 } }
  ]
});
```

You would get documents like:
- Strawberry (33 calories)
- Grapes (69 calories)

---

# 📖 2. `$or`
- Matches documents **if any one** of the given conditions is true.

✅ **Example**:  
Find foods that are either **fast food** **or** **have more than 250 calories**.

```javascript
db.foods.find({
  $or: [
    { type: "fast food" },
    { calories: { $gt: 250 } }
  ]
});
```

You would get documents like:
- Burger (295 calories)
- Pizza (266 calories)
- Fried Chicken (320 calories)

---

# 📖 3. `$nor`
- Matches documents **where none** of the given conditions are true.

✅ **Example**:  
Find foods that are **neither fruits** **nor** **fast food**.

```javascript
db.foods.find({
  $nor: [
    { type: "fruit" },
    { type: "fast food" }
  ]
});
```

You would only get:
- Carrot
- Broccoli
- Spinach  
(because they are veggies 🍀)

---

# 📖 4. `$not`
- Used to **invert** the result of a condition.
- It’s **applied inside** other operators like `$gt`, `$lt`, `$regex`, etc.

✅ **Example**:  
Find foods whose calories are **NOT less than 100**.

```javascript
db.foods.find({
  calories: { $not: { $lt: 100 } }
});
```

You would get only foods with calories **100 or more** — but in this dataset, since everything is < 320, you’d mainly get the higher-calorie fast foods like:
- Burger
- Pizza
- Fried Chicken

---

# 🎯 Real-Life Tip
- `$and` is optional if you just put multiple conditions directly.
- `$or` and `$nor` **must** be explicitly mentioned when you want alternative conditions.
- `$not` can sometimes make queries harder to optimize — avoid it unless really needed.

---

# 📌 Quick Summary Table

| Operator | Shortcut |
|:---------|:---------|
| `$and` | All conditions must be true |
| `$or` | At least one condition must be true |
| `$nor` | None of the conditions must be true |
| `$not` | Invert a specific condition |

