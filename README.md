# 📝 TaskMaster – Full Stack Task Management App

TaskMaster is a simple full-stack task management web application that allows users to **create, view, and delete tasks**.  
This project demonstrates **real-world frontend–backend integration**, REST APIs, and deployment using modern tools.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://task-master-p1-j2la.vercel.app  
- **Backend (Render):** Deployed separately and connected via REST APIs

---

## 📌 Features

- Add new tasks
- View all tasks
- Delete tasks
- Real-time UI updates
- Fully deployed frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- React
- HTML
- CSS
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- RESTful APIs

### Data Storage
- JSON file (`tasks.json`)

### Deployment
- **Frontend:** Vercel
- **Backend:** Render

### Version Control
- Git & GitHub

---

## 🏗️ Project Architecture
React Frontend (Vercel)
|
| HTTP Requests (GET, POST, DELETE)
|
Node.js + Express Backend (Render)
|
|
tasks.json


---

## 🔗 API Endpoints

| Method | Endpoint        | Description           |
|------|----------------|-----------------------|
| GET  | `/tasks`        | Fetch all tasks       |
| POST | `/tasks`        | Add a new task        |
| DELETE | `/tasks/:id`  | Delete a task by ID   |

---

## ⚙️ How It Works

1. The React frontend sends HTTP requests using `fetch`
2. Express backend processes requests
3. Tasks are stored and updated in a JSON file
4. Backend returns JSON responses
5. Frontend updates UI dynamically

---

## 📦 Installation & Setup (Local)

 1️⃣ Clone the repository
```bash
git clone https://github.com/bob2044/TaskMaster_P1.git
cd TaskMaster_P1

2️⃣ Backend Setup
cd backend
npm install
node server.js
Backend runs on:
http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start
Frontend runs on:
http://localhost:3000

🌐 Deployment
Frontend (Vercel)
Connected GitHub repository
Auto-deploys on every push
Uses npm run build
Backend (Render)
Configured root directory
Start command: node server.js
Enabled CORS for frontend access

🧠 Challenges Faced
Fixing frontend build errors on Vercel
Resolving nested Git repository issues
Managing missing dependencies (web-vitals)
Connecting frontend and backend across domains

📚 What I Learned
Frontend–backend communication
REST API design
React hooks and state management
Debugging deployment issues
Real-world Git workflows

🔮 Future Enhancements
User authentication
Database integration (MongoDB)
Task completion status
Better UI/UX design
Edit/update tasks feature

👤 Author
Sujit Goud
Aspiring Full Stack / Software Engineer
📌 GitHub: https://github.com/bob2044
