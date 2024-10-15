import React, { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { CiEdit } from "react-icons/ci";

const ExpertiseSection = () => {
  // State for managing modal
  const [opened, { open, close }] = useDisclosure(false);
  const [expertise, setExpertise] = useState([
    "Psychologist",
    "Psychologist",
    "Psychologist",
    "Psychologist",
    "Psychologist",
    "Psychologist",
    "Psychologist",
    "Psychologist",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [newExpertise, setNewExpertise] = useState("");

  const handleEditClick = (index) => {
    setSelectedIndex(index);
    setNewExpertise(expertise[index]); // Set the current expertise in the input
    open();
  };

  const handleSave = () => {
    const updatedExpertise = [...expertise];
    if (selectedIndex !== null) {
      updatedExpertise[selectedIndex] = newExpertise;
      setExpertise(updatedExpertise);
    }
    close();
  };

  return (
    <>
      {expertise.map((exp, index) => (
        <div key={index} className="pro-details w-[728px] p-4 mt-5 relative rounded-lg border-l-4 border-[#1678F2] shadow-lg">
          <div className="flex justify-between ml-4">
            <h2 className="text-md font-normal mb-2">What is your area of expertise?</h2>
            <CiEdit
              onClick={() => handleEditClick(index)}
              style={{ color: "blue", fontSize: "24px", cursor: 'pointer' }}
            />
          </div>
          <h2 className="text-lg font-medium mb-2 pl-4">{exp}</h2>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          onClick={() => alert('Save Changes functionality can be implemented here.')}
          className="px-7 py-2 mt-8 mb-2 flex justify-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
        >
          Save Changes
        </button>
      </div>

      {/* Modal for editing expertise */}
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        title="Edit Area of Expertise"
        centered
        withCloseButton={false}
        radius={"lg"}
      >
        <div className="px-8 py-4">
          <div className="flex flex-col mb-4">
            <label className="mb-2">Expertise</label>
            <input
              type="text"
              value={newExpertise}
              onChange={(e) => setNewExpertise(e.target.value)}
              className="border-2 border-gray-400 p-2"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-2">
          <button
            onClick={handleSave}
            className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ExpertiseSection;
