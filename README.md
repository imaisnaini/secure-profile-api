# Secure Profile API

A simple REST API built with **Node.js** and **Express.js** that demonstrates user authentication using JSON Web Token (JWT), password hashing with bcryptjs, input validation, and security best practices.

---

## 📚 Course Information

- **Course:** Pemrograman Web II
- **Class Code:** IF401
- **Lecturer:** Ratih Titi Komalasari, S.T., M.M., M.MSI

---

## 👨‍🎓 Student Information

- **Name:** Fatimah Isnaini Shabrina
- **Student ID (NIM):** *250401020073*
- **Program Studi:** Informatika PJJ S1
- **University:** Universitas Siber Asia (UNSIA)

---

## 📖 About the Project

Secure Profile API is a simple backend application developed as an assignment for the **Pemrograman Web 2** course. The project implements a secure REST API that allows users to register, log in, and access protected resources using JWT authentication.

### Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcryptjs)
- Input Validation (express-validator)
- Protected Routes
- Global Error Handling
- Rate Limiting
- Security Headers (Helmet)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
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
```

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
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login and receive JWT token | ❌ |
| GET | `/api/users/me` | Get current user profile | ✅ Bearer Token |

---

## 🔐 Authentication

Protected endpoints require a Bearer Token.

Example request header:

```http
Authorization: Bearer <your_jwt_token>
```

---

## 📄 License

This project is created for educational purposes as part of the **Pemrograman Web 2** course.
