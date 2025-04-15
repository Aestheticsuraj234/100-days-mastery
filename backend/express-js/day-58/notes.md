
## 🍪 Cookies in Express.js

Cookies are small pieces of data stored in the user's browser, used to maintain state (e.g., sessions, user authentication, preferences) between HTTP requests.

---

## 1. 🔹 Setting & Reading Cookies using **inbuilt Express APIs**

Express has basic support for cookies via `res.cookie()` and `req.cookies` (after parsing).

### ✅ Setting a Cookie

```js
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'john_doe'); // sets a cookie
  res.send('Cookie has been set');
});
```

### ❌ Problem:
`req.cookies` will be `undefined` unless a cookie parser is used. Express does **not parse cookies** automatically from the incoming request headers.

---

## 2. 🔸 Using `cookie-parser` Middleware

To **read cookies from requests**, you need to use the [`cookie-parser`](https://www.npmjs.com/package/cookie-parser) middleware.

### 🧩 Install:
```bash
npm install cookie-parser
```

### 🔌 Setup:
```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());
```

### ✅ Set a Cookie:
```js
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'john_doe', {
    httpOnly: true, // cannot be accessed by client-side JS
    maxAge: 24 * 60 * 60 * 1000 // 1 day in ms
  });
  res.send('Cookie has been set!');
});
```

### ✅ Read a Cookie:
```js
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  res.send(`Cookie value: ${username}`);
});
```

### ✅ Delete a Cookie:
```js
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie has been cleared');
});
```

---

## 🔐 Cookie Options

| Option         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `maxAge`       | Expiry time in **milliseconds**                                             |
| `expires`      | A specific `Date` object                                                    |
| `httpOnly`     | Cookie can't be accessed from JavaScript (`document.cookie`)               |
| `secure`       | Sent only over HTTPS                                                        |
| `sameSite`     | Protects against CSRF (`Strict`, `Lax`, `None`)                             |
| `path`         | Specifies which path the cookie belongs to                                  |
| `domain`       | Specifies the domain for the cookie                                         |

---

## ✅ When to Use `cookie-parser`

| Feature                | Built-in Express | `cookie-parser` |
|------------------------|------------------|------------------|
| Set cookies            | ✅                | ✅                |
| Read cookies from req  | ❌                | ✅                |
| Signed cookies         | ❌                | ✅                |

---

## 🛡️ Signing Cookies with `cookie-parser`

To prevent tampering, you can sign cookies with a secret:

### Setup:
```js
app.use(cookieParser('mySecretKey'));
```

### Set Signed Cookie:
```js
res.cookie('token', 'abc123', { signed: true });
```

### Read Signed Cookie:
```js
const token = req.signedCookies.token;
```

---

## 🔚 Summary

| Action             | Without cookie-parser | With cookie-parser |
|--------------------|-----------------------|---------------------|
| Set cookie         | ✅                     | ✅                   |
| Read cookie        | ❌                     | ✅ (`req.cookies`)   |
| Signed cookie read | ❌                     | ✅ (`req.signedCookies`) |

