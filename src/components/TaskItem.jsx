import React, { useState } from "react";

const TaskItem = ({ task, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-start justify-between p-4 mb-4 rounded-lg shadow-md ${
        task.completed ? "bg-green-50 border-l-4 border-green-500" : "bg-gray-50 border-l-4 border-gray-300"
      } transition-all`}
    >
      {isEditing ? (
        <div className="flex-1">
          <input
            value={updatedTask.name}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, name: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="3"
          />
          <button
            className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex-1">
          <h3 className={`font-semibold text-lg mb-1 ${task.completed ? "text-gray-600 line-through" : "text-gray-800"}`}>
            {task.name}
          </h3>
          <p className={`text-sm ${task.completed ? "text-gray-500" : "text-gray-700"}`}>
            {task.description}
          </p>
        </div>
      )}
      <div className="flex items-center gap-3">
        <button
          className="text-blue-500 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
        <button
          className="text-red-500 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className={`font-medium ${
            task.completed ? "text-gray-500 hover:text-green-500" : "text-green-500"
          } hover:underline focus:outline-none focus:ring-2 focus:ring-green-400`}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
