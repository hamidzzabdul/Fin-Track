# Fintech App – Personal Finance Management System

## 📌 Overview

The **Fintech App** is a **full-stack financial management platform** that allows users to track their expenses, manage budgets, and gain insights into their financial habits. The application provides **secure authentication**, real-time dashboards, and interactive data visualization for better financial planning.

## 🚀 Features

### 🔑 User Authentication & Management

- User **Sign-up & Login** (JWT Authentication).
- Secure **Password Hashing** using Bcrypt.
- Role-based Access Control (**Admin & User**).

### 💰 Transactions & Budgeting

- Users can **add, update, delete** transactions.
- Categorization of transactions (**Food, Rent, Bills, etc.**).
- Monthly **budget setting** and tracking.

### 📊 Financial Dashboard

- **Dynamic charts & graphs** (Income vs Expenses).
- Transaction history with **filter & search options**.
- Monthly financial **summary & reports**.

### ⚡ Smart Insights & Notifications

- Real-time **budget alerts** when nearing spending limits.
- Smart **expense suggestions** based on spending trends.
- Daily/Weekly **email reports**.

### 🛠️ Admin Panel (Dashboard)

- Manage **users & permissions**.
- Monitor **app activity & reports**.

---

## 🛠️ Tech Stack

### Frontend (Next.js)

- **Next.js 14** (React-based SSR framework).
- **Tailwind CSS** (Modern UI design).
- **Recharts.js** (Data visualization).

### Backend (Node.js, Prisma, PostgreSQL)

- **Node.js + Express.js** (Backend framework).
- **Prisma ORM** (Database management).
- **PostgreSQL** (Relational database).
- **Docker** (Database containerization).

### Authentication & Security

- **JWT (JSON Web Tokens)** for authentication.
- **Bcrypt.js** for password hashing.
- **Helmet & CORS** for security.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/fintech-app.git
cd fintech-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file and add:

```plaintext
DATABASE_URL="postgresql://user:password@localhost:5432/fintechdb"
JWT_SECRET="your_secret_key"
```

### 4️⃣ Run Database Migrations

```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start the App

```bash
npm run dev
```

---

## 📌 API Endpoints

| Endpoint            | Method | Description           |
| ------------------- | ------ | --------------------- |
| `/api/auth/signup`  | POST   | Register a new user   |
| `/api/auth/login`   | POST   | User login            |
| `/api/transactions` | GET    | Get user transactions |
| `/api/transactions` | POST   | Add a new transaction |

---

## 📌 To-Do List

✅ Set up **Prisma schema**  
✅ Implement **user authentication**  
⬜ Build **transaction management**  
⬜ Develop **admin dashboard**  
⬜ Integrate **charts & analytics**

---

Type Description
feat: A new feature (adds functionality)
fix: A bug fix (patches an issue)
docs: Documentation changes (README, comments, etc.)
style: Code style/formatting (no functional changes)
refactor: Code restructuring (neither fixes nor adds features)
perf: Performance improvements
test: Adding or modifying tests
chore: Maintenance tasks (dependency updates, CI/CD, etc.)
revert: Reverts a previous commit
