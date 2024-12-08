import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);

  const updateTask = (id, updatedTask) =>
    setTasks(tasks.map((task) => (task.id == id ? updatedTask : task)));

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white p-16 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">To-Do List 📃 </h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
