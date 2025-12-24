const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: "https://task-master-p1-j2la.vercel.app"
}));
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'tasks.json');

function readTasks() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE));
  } catch {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// GET ALL TASKS
app.get('/api/tasks', (req, res) => {
  res.json(readTasks());
});

// CREATE TASK
app.post('/api/tasks', (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: Date.now().toString(),
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// DELETE TASK
app.delete('/api/tasks/:id', (req, res) => {
  const tasks = readTasks().filter(t => t.id !== req.params.id);
  writeTasks(tasks);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

