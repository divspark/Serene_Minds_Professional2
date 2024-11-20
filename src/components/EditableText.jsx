import React, { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { CiEdit, CiStar } from "react-icons/ci";

const EditableText = ({ firstText, secondText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(secondText);

  const handleEditClick = () => {
    if (isEditing) {
      // Save the text when the "Check" button is clicked
      setIsEditing(false);
    } else {
      // Enable editing when the "Edit" button is clicked
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setEditableText(e.target.value);
  };

  return (
    

    <div className="flex justify-between items-center px-6 py-4 mt-4 rounded-lg border-l-4 border-[#1678F2] shadow-lg w-[700px] h-[69px]">
      <div>
        <span className="text-lg pr-2">{firstText}</span>
        {/* <span className="text-lg font-medium">{secondText}</span> */}
        {isEditing ? (
          <input
            type="text"
            value={editableText}
            onChange={handleChange}
            className="ml-4 px-4 py-1 border-none"
          />
        ) : (
            <span className="text-lg font-medium">{editableText}</span>
        )}
      </div>
      <button
        onClick={handleEditClick}
        style={{
          marginLeft: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {isEditing ? <FaCheck color="green"/> : <CiEdit color="blue" />}
      </button>
    </div>
  );
};

export default EditableText;
