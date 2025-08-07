# Simple Login System 🔐

This is a simple login system built using **HTML**, **CSS**, **tailwind** , and **JavaScript** without any backend.  
It uses the browser's **localStorage** to store and validate user credentials.


---

## 💡 Features

- Input fields for **email** and **password**
- User data stored in `localStorage`
- Credential validation on login
- Simple redirect to **profile page** on successful login
- Logout functionality that clears data and redirects

---

## 🚀 How It Works

1. User enters their email and password on the login page.
2. The system checks the credentials against what's stored in `localStorage`.
3. If credentials are valid, the user is redirected to a profile page with a welcome message.
4. A logout button clears the session and returns to the login page.

---

## 🧪 Example Data in localStorage

```js
[
  {
    "userName": "moatasem",
    "userEmail": "moatasem@gmail.com",
    "userPassword": "aS5$asomy"
  }
]
