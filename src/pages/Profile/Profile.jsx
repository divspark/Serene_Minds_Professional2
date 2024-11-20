import React, { useState } from "react";
import { Tabs, rem } from "@mantine/core";
import { CiEdit, CiStar } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { AboutMe } from "./AboutMe";
import DayAvailability from "./DayAvailability";
import { NewServices } from "./NewServices";
import { NewEducation } from "./NewEducation";
import { ProfileDetails } from "./ProfileDetail";
import ExpertiseSection from "./ExpertiseSection";

export const Profile = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));

  const [opened, { open, close }] = useDisclosure(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState("700"); // Initial price

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    // Save changes, close modal
    closeModal();
  };

  return (
    <>
      <div className="w-3/4 flex justify-center items-center">
        <Tabs defaultValue="shareable">
          <div className="flex justify-center">
            <Tabs.List>
              <Tabs.Tab value="shareable">
                <h2 className="text-lg text-[#9995AF] font-semibold">
                  Shareable
                </h2>
              </Tabs.Tab>
              <Tabs.Tab value="credentials">
                <h2 className="text-lg text-[#9995AF] font-semibold">
                  Your Credentials
                </h2>
              </Tabs.Tab>
              <Tabs.Tab value="professional">
                <h2 className="text-lg text-[#9995AF] font-semibold">
                  Professional
                </h2>
              </Tabs.Tab>
            </Tabs.List>
          </div>

          <Tabs.Panel value="shareable">
            <div className="container-5 flex  flex-col justify-center">
              <ProfileDetails />

              <AboutMe />

              <NewEducation />

              <NewServices />

              <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
                <div className="flex justify-between ml-4">
                  <h2 className="text-lg text-[#25324B] font-semibold mb-2">
                    Availability
                  </h2>
                </div>

                <DayAvailability day="Mon" />
                <DayAvailability day="Tue" />
                <DayAvailability day="Wed" />
                <DayAvailability day="Thu" />
                <DayAvailability day="Fri" />
              </div>

              <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative top-[-150px] rounded-lg">
                <div className="flex justify-between ml-4">
                  <h2 className="text-lg text-[#25324B] font-semibold mb-2s">
                    Payment
                  </h2>
                  <CiEdit
                    style={{
                      color: "blue",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    onClick={openModal} // Open modal on click
                  />
                </div>
                <h2 className="text-2xl text-[#2A2A2A] font-semibold mb-2 ml-4">
                  INR {price}/session
                </h2>
              </div>

              {/* Modal for editing the price */}
              {isModalOpen && (
                <Modal
                  size="sm"
                  opened={isModalOpen}
                  onClose={closeModal}
                  title="Edit Price"
                  centered
                  withCloseButton={false}
                  radius="lg"
                >
                  <div className="px-8 py-4">
                    <div className="flex flex-col mb-4">
                      <label className="mb-2">Price per session (INR)</label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border-2 border-gray-400 p-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 mb-2">
                    <button
                      className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </Modal>
              )}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="credentials">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="professional">
            <ExpertiseSection />
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};
