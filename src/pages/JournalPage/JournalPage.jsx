import React, { useState } from "react";

const Journals = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const thoughts = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Happiness is not by chance, but by choice.",
    "Every moment is a fresh beginning.",
    "Your big opportunity may be right where you are now.",
  ];

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="flex h-screen p-5 bg-gray-50">
      {/* Left Section */}
      <div className="w-3/5 p-5 bg-white shadow-md rounded-lg flex flex-col">
        <h2 className="text-xl font-bold mb-4">Note-Making & To-Do List</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 py-2 px-4 border rounded-full outline-none"
          />
          <button
            onClick={addTask}
            className="ml-2 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <ul className="grid grid-cols-1 gap-4">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-700 font-medium">{t}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 text-sm px-3 py-1 rounded-md bg-red-100 hover:bg-red-200 transition-colors duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-2/5 p-5 flex flex-col items-center">
        {/* Top: Vector Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/notes2.png" // Replace with your vector image URL
            alt="Vector Illustration"
            className="max-w-full"
          />
        </div>

        {/* Bottom: Thought of the Day */}
        <div className="mt-5 p-5 bg-blue-100 rounded-md text-center shadow-md">
          <h2 className="text-lg font-semibold">Thought of the Day</h2>
          <p className="mt-2 text-gray-700 italic">
            {thoughts[Math.floor(Math.random() * thoughts.length)]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journals;
