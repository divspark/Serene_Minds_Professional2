import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Snow theme for Quill

const Journals = () => {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [task, setTask] = useState("");
  const navigate = useNavigate();

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

  const addNote = () => {
    navigate("/add-note"); // Navigate to a new page for adding a note
  };

  return (
    <div className="flex h-screen p-5 bg-gray-50">
      {/* Left Section */}
      <div className="w-3/5 p-5 bg-white shadow-md rounded-lg flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notes & To-Do</h2>
          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Note
          </button>
        </div>

        {/* Notes Container */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Notes</h3>
          <div className="grid grid-cols-1 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 shadow rounded-lg hover:shadow-md transition duration-200"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: note }}
                  className="text-gray-700"
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* To-Do Section */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">To-Do</h3>
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
        </div> */}
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
