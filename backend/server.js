const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());                 // ✅ FIX
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'tasks.json');

// Read tasks
function readTasks() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch (e) {
    return [];
  }
}

// Write tasks
function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// GET ALL TASKS
app.get('/api/tasks', (req, res) => {
  res.json(readTasks());
});

// CREATE TASK
app.post('/api/tasks', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }

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

// UPDATE TASK
app.put('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[index] = { ...tasks[index], ...req.body };
  writeTasks(tasks);
  res.json(tasks[index]);
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
