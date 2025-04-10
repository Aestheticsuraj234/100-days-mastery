# 📘 Node.js `http` Module – Full Notes

## ✅ What is the `http` Module?

- The `http` module is a **built-in Node.js module**.
- It allows Node.js to **transfer data over the Hyper Text Transfer Protocol (HTTP)**.
- It is commonly used to **create web servers** and **handle HTTP requests/responses**.

You don’t need to install it via npm – it’s already available.

---

## 🔰 Importing the `http` Module

```js
const http = require('http');
```

---

## 🛠️ Creating a Basic Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end(); // Always end the response
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

- `req` – Incoming HTTP request object.
- `res` – HTTP response object.
- `server.listen(port, callback)` – Starts the server on the specified port.

---

## 🔍 Accessing Request Details

```js
const server = http.createServer((req, res) => {
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);

  res.end('Logged request details.');
});
```

---

## 📤 Sending JSON Response

```js
const server = http.createServer((req, res) => {
  const data = {
    message: 'Hello JSON!',
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});
```

- `res.writeHead(statusCode, headers)` sets the HTTP status code and headers.

---

## 🧠 Handling Routes

```js
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Home Page');
  } else if (req.url === '/about') {
    res.write('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
  }
  res.end();
});
```

---

## 📝 Handling POST Requests (with body parsing)

```js
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
      console.log('Received:', body);
      res.end('Data received');
    });
  } else {
    res.end('Send a POST request to /data');
  }
});
```

---

## 🔁 Redirects

```js
const server = http.createServer((req, res) => {
  if (req.url === '/old-page') {
    res.writeHead(301, { Location: '/new-page' });
    res.end();
  } else if (req.url === '/new-page') {
    res.end('Welcome to the new page!');
  }
});
```

---

## 🧪 HTTP Status Codes (Common Ones)

| Code | Meaning         |
|------|------------------|
| 200  | OK               |
| 201  | Created          |
| 301  | Moved Permanently (Redirect) |
| 400  | Bad Request      |
| 404  | Not Found        |
| 500  | Internal Server Error |

---

## 🧩 Advanced: Using `http.IncomingMessage` and `http.ServerResponse`

### `req` (http.IncomingMessage):

- `req.method` → HTTP method (GET, POST, etc.)
- `req.url` → Requested URL
- `req.headers` → Request headers
- `req.on('data')` → Receive incoming data chunks

### `res` (http.ServerResponse):

- `res.statusCode = 200` → Set status code
- `res.setHeader('Content-Type', 'text/html')`
- `res.write(data)`
- `res.end()` → End response

---

## 📚 Summary

| Concept         | Use                                  |
|----------------|---------------------------------------|
| `http.createServer()` | Create a basic server          |
| `req.method`, `req.url` | Read request info           |
| `res.write()`, `res.end()` | Send response            |
| `res.writeHead()` | Set status and headers             |
| `req.on('data')` | Handle POST body data               |

---

## 🧪 Bonus: Creating a Simple API Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/user' && req.method === 'GET') {
    const user = {
      id: 1,
      name: 'Alice',
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
```

