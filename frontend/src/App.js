import React, { useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask } from './api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!title.trim()) return;

    const newTask = await addTask(title);
    setTasks([...tasks, newTask]); // ✅ THIS WAS MISSING
    setTitle('');
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>TaskMaster</h1>

      <div className="input-box">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
