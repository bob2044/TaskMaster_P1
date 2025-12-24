const API_URL = "https://taskmaster-p1.onrender.com";

export const getTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
};

export const addTask = async (task) => {
  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};
