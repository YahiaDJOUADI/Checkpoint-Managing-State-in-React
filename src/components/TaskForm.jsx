import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTask(task);
    setTask({ name: "", description: "" });
  };

  return (
    <form
      className="bg-white max-w-lg mx-auto p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Create a Task 🖊️
      </h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="w-full p-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
        />
        <textarea
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full p-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
          rows="5"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
