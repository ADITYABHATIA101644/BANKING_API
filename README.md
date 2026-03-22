# 🏦 Secure Banking API with JWT Authentication
### Developed by: Aditya Bhatia
**Experiment 2.2.2 - Full Stack Development**

## 🚀 Live Demo
[Click here to view the API Status](https://banking-api-zj11.onrender.com/)

## ✨ Features
- **Security:** Password hashing using `bcryptjs`.
- **Authentication:** JWT (JSON Web Tokens) with Access & Refresh token logic.
- **Database:** MongoDB Atlas with Mongoose schemas.
- **Protection:** Custom middleware for route guarding.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Postman, VS Code, Render

## 📡 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Create a new account |
| POST | `/api/auth/login` | Receive JWT Access & Refresh tokens |
| GET | `/api/account/balance` | Check balance (Requires Auth) |
