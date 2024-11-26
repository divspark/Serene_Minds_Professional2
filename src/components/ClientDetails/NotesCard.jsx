import React, { useState, useEffect, useRef } from "react";
import { Card } from "@mantine/core";
import Quill from "quill";
import "quill/dist/quill.bubble.css"; // Import bubble theme styles

export default function NotesCard({ professionalId, clientId }) {
  const editorRef = useRef(null);
  const [notes, setNotes] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL; // Access base URL from environment

  useEffect(() => {
    const quill = new Quill(editorRef.current, {
      theme: "bubble",
      placeholder: "Write notes here...",
      modules: {
        toolbar: [
          ["bold", "italic", "underline"], // Basic formatting
          [{ list: "ordered" }, { list: "bullet" }], // Lists
          ["link"], // Links
        ],
      },
    });

    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/notes/${professionalId}/${clientId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNotes(data[0]?.content || ""); // Load content into state
        quill.root.innerHTML = data[0]?.content || ""; // Load content into Quill
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();

    // Listen for editor changes
    quill.on("text-change", () => {
      const content = quill.root.innerHTML; // Capture HTML content
      setNotes(content); // Update notes state
    });
  }, [professionalId, clientId, baseUrl]);

  const saveNotes = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/notes/${professionalId}/${clientId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: notes }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Notes saved successfully!");
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  return (
    <Card h="100%" p="sm" shadow="xs" radius="lg" withBorder>
      <div ref={editorRef} style={{ minHeight: "200px" }}></div>
      <button onClick={saveNotes} style={{ marginTop: "10px" }}>
        Save Notes
      </button>
    </Card>
  );
}
