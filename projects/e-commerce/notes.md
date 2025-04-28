# 🛡️ Access Tokens vs Refresh Tokens

## 1. What is an Access Token?
- **Definition:**  
  A short-lived token that the client (frontend app) uses to authenticate API requests.
  
- **Purpose:**  
  Proves that the user is authorized to access a resource.

- **Lifetime:**  
  Very **short** (e.g., 5 minutes, 15 minutes, 1 hour).

- **Format:**  
  Usually a **JWT (JSON Web Token)** or opaque string.

- **Where Stored:**  
  - In **memory** (safe)
  - Or in **secure HTTP-only cookies** (preferred over localStorage!)

---

## 2. What is a Refresh Token?
- **Definition:**  
  A long-lived token used to **get a new access token** without forcing the user to log in again.

- **Purpose:**  
  Allows the client to **stay logged in** even after the access token expires.

- **Lifetime:**  
  Much **longer** (e.g., days, weeks, months).

- **Format:**  
  Also often a JWT, or a random string mapped in a database.

- **Where Stored:**  
  - **Secure HTTP-only cookies** (best)
  - Or sometimes in server-side sessions.

---

# 🔄 How They Work Together (Typical Flow)

1. **Login:**  
   - User logs in with credentials.
   - Server issues **Access Token** + **Refresh Token**.

2. **Making Requests:**  
   - Client sends the **Access Token** with API requests (usually in Authorization header).

3. **Token Expiry:**  
   - Access Token expires after a short time.
   - Client notices 401 Unauthorized (or app checks expiry manually).

4. **Refresh Flow:**  
   - Client automatically sends the **Refresh Token** to the server (to a special `/refresh` endpoint).
   - Server verifies the refresh token and issues a **new Access Token** (and sometimes a new Refresh Token).

5. **Continue using app:**  
   - The new Access Token is used for further API calls.

6. **Logout:**  
   - On logout, **invalidate the Refresh Token** (either by deleting it from the database or making it unusable).

---

# ⚡ Best Practices
- **Never store tokens in localStorage** (vulnerable to XSS attacks).
- **Use HTTP-only cookies** to store refresh tokens (makes them invisible to JS).
- **Rotate refresh tokens** (issue a new refresh token each time it’s used).
- **Set expiration on refresh tokens** (don’t let them live forever).
- **Have a revoke mechanism** (e.g., if the user logs out or you detect token theft).
- **Use short-lived access tokens** (reduce impact of token theft).

---

# 🎯 Example Timeline

| Time | Action |
|:---|:---|
| 0 mins | User logs in, gets Access Token (15 min) + Refresh Token (30 days) |
| 10 mins | User makes API calls → Access Token still valid |
| 16 mins | Access Token expired → Client sends Refresh Token → Server issues new Access Token |
| 1 day later | Still logged in → Repeat refresh flow |
| 31 days later | Refresh Token expired → User must log in again |

