import React, { useState } from "react";
import { Tabs, rem } from "@mantine/core";
import { CiEdit } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { AboutMe } from "./AboutMe";
import DayAvailability from "./DayAvailability";
import { NewServices } from "./NewServices";
import { NewEducation } from "./NewEducation";
import { ProfileDetails } from "./ProfileDetail";
import ExpertiseSection from "./ExpertiseSection";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState("700"); // Initial price

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col justify-center items-center">
        <Tabs defaultValue="shareable" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center">
            <Tabs.Tab
              value="shareable"
              className="text-sm sm:text-lg font-semibold text-gray-600"
            >
              Shareable
            </Tabs.Tab>
            {/* <Tabs.Tab
              value="credentials"
              className="text-sm sm:text-lg font-semibold text-gray-600"
            >
              Your Credentials
            </Tabs.Tab> */}
            <Tabs.Tab
              value="professional"
              className="text-sm sm:text-lg font-semibold text-gray-600"
            >
              Professional
            </Tabs.Tab>
          </Tabs.List>

          {/* Shareable Tab Panel */}
          <Tabs.Panel value="shareable" className="w-full mt-6">
            <div className="flex flex-col items-center gap-6">
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
                  radius="lg"
                >
                  <div className="px-8 py-4">
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-medium">
                        Price per session (INR)
                      </label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </Tabs.Panel>

          {/* Credentials Tab Panel */}
          {/* <Tabs.Panel value="credentials" className="w-full mt-6">
            <p>Credentials content</p>
          </Tabs.Panel> */}

          {/* Professional Tab Panel */}
          <Tabs.Panel value="professional" className="w-full mt-6">
            <ExpertiseSection />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
