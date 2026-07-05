# Secure Profile API

A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** that demonstrates user authentication using JSON Web Token (JWT), password hashing with bcryptjs, input validation, and security best practices.

---

## 📚 Course Information

- **Course:** Pemrograman Web II
- **Class Code:** IF401
- **Lecturer:** Ratih Titi Komalasari, S.T., M.M., M.MSI

---

## 👨‍🎓 Student Information

- **Name:** Fatimah Isnaini Shabrina
- **Student ID (NIM):** 250401020073
- **Study Program:** Informatika PJJ S1
- **University:** Universitas Siber Asia (UNSIA)

---

## 📖 About the Project

Secure Profile API is a backend application developed as an assignment for the **Pemrograman Web II** course. The project provides a secure REST API for user management using JWT authentication and MongoDB as the data store while maintaining a consistent API response contract.

### Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcryptjs)
- Input Validation (express-validator)
- Protected Routes
- Role-based Authorization (Admin)
- Change Password
- User Count
- Delete User (Admin Only)
- Global Error Handling
- Rate Limiting
- Security Headers (Helmet)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- express-validator
- dotenv
- helmet
- express-rate-limit
- cors

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd secure-profile-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
MONGODB_URI=mongodb://127.0.0.1:27017/secure-profile-api
```

---

## 🌱 Seed Default Admin (Run Once)

Before running the application for the first time, create the default administrator account:

```bash
node src/scripts/seedAdmin.js
```

The script only creates the admin account if it does not already exist.

### Default Administrator Account

| Field | Value |
|-------|-------|
| Email | `admin@unsia.ac.id` |
| Password | `AdmPwd123` |
| Role | `admin` |

> **Note:** The password is **not stored as plain text** in the source code. The application stores only its bcrypt hash.

---

## ▶️ Run the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint | Description | Authentication |
|---------|----------|-------------|----------------|
| GET | `/api/health` | Check API health status | ❌ |
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login and receive JWT | ❌ |
| GET | `/api/users/me` | Get current user profile | ✅ |
| GET | `/api/users` | Get all users | ✅ |
| GET | `/api/users/count` | Get total registered users | ✅ |
| POST | `/api/users/change-password` | Change user password | ✅ |
| DELETE | `/api/users/:id` | Delete user (Admin only) | ✅ Admin |

---

## 🔐 Authentication

Protected endpoints require a valid JWT Bearer Token.

Example request header:

```http
Authorization: Bearer <your_jwt_token>
```

---

## 📄 License

This project was created for educational purposes as part of the **Pemrograman Web II** course at **Universitas Siber Asia (UNSIA)**.
