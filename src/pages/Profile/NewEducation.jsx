import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Select } from "@mantine/core";
import { IoAddOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export const NewEducation = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [educations, setEducations] = useState([
    { degree: "Bachelors", institution: "AIIMS, New Delhi", description: "Lorem ipsum is a placeholder text commonly used in design, typography, and publishing." },
    { degree: "Masters", institution: "AIIMS, New Delhi", description: "Lorem ipsum is a placeholder text commonly used in design, typography, and publishing." },
  ]);

  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [currentEducation, setCurrentEducation] = useState({ degree: "", institution: "", description: "" });
  const [currentIndex, setCurrentIndex] = useState(null);

  const openAddModal = () => {
    setModalMode("add");
    setCurrentEducation({ degree: "", institution: "", description: "" });
    open();
  };

  const openEditModal = (index) => {
    setModalMode("edit");
    setCurrentEducation(educations[index]);
    setCurrentIndex(index);
    open();
  };

  const handleSave = () => {
    if (modalMode === "add") {
      setEducations([...educations, currentEducation]);
    } else if (modalMode === "edit") {
      const updatedEducations = [...educations];
      updatedEducations[currentIndex] = currentEducation;
      setEducations(updatedEducations);
    }
    close();
  };

  const handleInputChange = (field, value) => {
    setCurrentEducation({
      ...currentEducation,
      [field]: value,
    });
  };

  return (
    <>
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        title={modalMode === "add" ? "Add Education" : "Edit Education"}
        centered
        withCloseButton={false}
        radius={"lg"}
        styles={{
          title: {
            fontWeight: "700",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center w-[444px] mb-2 ">
            <Select
              label="Degree"
              placeholder="Pick a degree"
              value={currentEducation.degree}
              onChange={(value) => handleInputChange("degree", value)}
              data={["Bachelors", "Masters", "PhD"]}
            />
          </div>
          <div className="flex flex-col justify-center w-[444px] mb-2">
            <Select
              label="Institution"
              placeholder="Pick an institution"
              value={currentEducation.institution}
              onChange={(value) => handleInputChange("institution", value)}
              data={["AIIMS, New Delhi", "IIT Delhi", "Harvard University"]}
            />
          </div>

          <div className="px-8 py-4">
            <textarea
              name="description"
              id="description"
              placeholder="Enter description"
              value={currentEducation.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-[444px] h-[100px] p-5 border-2 border-gray-400 "
            ></textarea>
          </div>
          <div className="flex justify-center mt-4 mb-2">
            <button
              className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      <div className="education w-[728px] border border-gray-300 p-4 mt-5 relative top-[-150px] rounded-lg">
        <div className="flex justify-between ml-4">
          <h2 className="text-lg text-[#25324B] font-semibold mb-2">Education</h2>
          <button onClick={openAddModal}>
            <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
          </button>
        </div>

        {educations.map((education, index) => (
          <div key={index} className="flex p-3 mt-3 rounded-lg">
            <img
              src="Education.png"
              alt="education"
              className="w-[70px] h-[70px]"
            />
            <div className="college-name ml-4 p-2 w-full">
              <div className="flex justify-between">
                <h2 className="text-lg text-[#25324B] font-semibold mb-2">{education.degree}</h2>
                <CiEdit
                  style={{ color: "blue", fontSize: "24px", cursor: "pointer" }}
                  onClick={() => openEditModal(index)}
                />
              </div>
              <h3 className="text-md text-[#25324B] font-medium mb-2">{education.institution}</h3>
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
