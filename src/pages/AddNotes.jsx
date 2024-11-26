import React, { useState, useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AddNote = ({ addNote }) => {
  const editorRef = useRef(null);
  const quillInstanceRef = useRef(null); // To store the Quill instance
  const [content, setContent] = useState("");

  useEffect(() => {
    // Initialize Quill only if it hasn't been initialized yet
    if (!quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write your note here...",
      });

      quillInstanceRef.current.on("text-change", () => {
        setContent(quillInstanceRef.current.root.innerHTML); // Capture the editor content
      });
    }
  }, []);

  const saveNote = () => {
    if (content.trim()) {
      addNote(content); // Add the new note
    }
  };

  return (
    <div className="flex flex-col items-center p-6 border-2 border-gray-200 h-full">
      <div ref={editorRef} style={{ minHeight: "300px", width: "100%" }}></div>
      <button
        onClick={saveNote}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Save Note
      </button>
    </div>
  );
};

export default AddNote;
