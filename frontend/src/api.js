const API_BASE = "https://taskmaster-p1.onrender.com/api";

export const getTasks = async () => {
  const res = await fetch(`${API_BASE}/tasks`);
  return res.json();
};

export const addTask = async (title) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  return res.json();
};

