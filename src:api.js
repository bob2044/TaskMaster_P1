import React, { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleTask = async (task) => {
    const updated = await updateTask(task.id, {
      completed: !task.completed,
    });
    setTasks(tasks.map((t) => (t.id === task.id ? updated : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "50px" }}>
      <h2>TaskMaster</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task name"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.title}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

