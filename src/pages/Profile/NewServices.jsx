import React, { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Select } from "@mantine/core";
import { IoAddOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export const NewServices = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [services, setServices] = useState([
    { title: "Psychologist", description: "Lorem ipsum is a placeholder text commonly used in design, typography, and publishing." },
    { title: "Psychiatrist", description: "Lorem ipsum is a placeholder text commonly used in design, typography, and publishing." },
  ]);
  
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentService, setCurrentService] = useState({ title: '', description: '' });
  const [currentIndex, setCurrentIndex] = useState(null);

  const openAddModal = () => {
    setModalMode('add');
    setCurrentService({ title: '', description: '' });
    open();
  };

  const openEditModal = (index) => {
    setModalMode('edit');
    setCurrentService(services[index]);
    setCurrentIndex(index);
    open();
  };

  const handleSave = () => {
    if (modalMode === 'add') {
      setServices([...services, currentService]);
    } else if (modalMode === 'edit') {
      const updatedServices = [...services];
      updatedServices[currentIndex] = currentService;
      setServices(updatedServices);
    }
    close();
  };

  const handleInputChange = (field, value) => {
    setCurrentService({
      ...currentService,
      [field]: value,
    });
  };

  return (
    <>
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        title={modalMode === 'add' ? 'Add Service' : 'Edit Service'}
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
          <div className="flex flex-col justify-center w-[444px] mb-2">
            <Select
              label="Service Title"
              placeholder="Pick a service"
              value={currentService.title}
              onChange={(value) => handleInputChange('title', value)}
              data={["Psychologist", "Psychiatrist", "Counselor", "Therapist"]}
            />
          </div>

          <div className="px-8 py-4">
            <textarea
              name="description"
              id="description"
              placeholder="Enter service description"
              value={currentService.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-[444px] h-[100px] p-5 border-2 border-gray-400"
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

      <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative top-[-150px] rounded-lg">
        <div className="flex justify-between ml-4">
          <h2 className="text-lg text-[#25324B] font-semibold mb-2">Services</h2>
          <IoAddOutline
            style={{ color: "blue", fontSize: "24px", cursor: "pointer" }}
            onClick={openAddModal}
          />
        </div>

        {services.map((service, index) => (
          <div key={index} className="flex p-3 mt-3">
            <img
              src="Education.png"
              alt="education"
              className="w-[70px] h-[70px]"
            />
            <div className="college-name ml-4 p-2 w-full">
              <div className="flex justify-between">
                <h2 className="text-lg text-[#25324B] font-semibold mb-2">{service.title}</h2>
                <CiEdit
                  style={{ color: "blue", fontSize: "24px", cursor: "pointer" }}
                  onClick={() => openEditModal(index)}
                />
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
