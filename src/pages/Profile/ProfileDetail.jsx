import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export const ProfileDetails = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState("Jake Gyll");
  const [location, setLocation] = useState("Manchester, UK");
  const [profilePhoto, setProfilePhoto] = useState("manager.png");
  const [bgImage, setBgImage] = useState("bg-image.jpeg");

  const handleProfilePhotoChange = (e) => {
    // Handle profile photo file upload
    const file = e.target.files[0];
    // Example: Upload file to server or process as needed
  };

  const handleBgImageChange = (e) => {
    // Handle background image file upload
    const file = e.target.files[0];
    // Example: Upload file to server or process as needed
  };

  const handleSave = () => {
    close();
  };

  return (
    <>
      <div className="main-section flex flex-col justify-center">
        <img
          src={bgImage}
          alt="bg-image"
          className="w-[728px] h-[140px] rounded-t-lg mt-3 border-none"
        />
        <img
          src={profilePhoto}
          alt="manager"
          className="bg-blue-500 rounded-full w-[150px] h-[150px] relative top-[-70px] left-7 border-8 border-white"
        />
        <div className="flex relative top-[-150px] mb-4 w-[728px] h-[140px] rounded-b-lg shadow-md">
          <div className="pshyc-details ml-56 p-3">
            <h2 className="text-xl font-semibold p-1">{name}</h2>
            <p className="p-1 text-gray-500">Clinical Psychologist</p>
            <p className="p-1 text-gray-500">{location}</p>
          </div>
          <div className="p-5 ml-10">
            <button
              onClick={open}
              className="border border-[#1678F2] text-[#1678F2] rounded-lg py-1 px-3 mr-3"
            >
              Edit Profile
            </button>
            <button
              className="border border-[#1678F2] text-[#1678F2] rounded-lg py-1 px-3"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Profile URL copied to clipboard!");
              }}
            >
              Share Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal for editing profile */}
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title="Edit Profile"
        centered
        withCloseButton={false}
        radius="lg"
        styles={{
          title: { fontWeight: "700" },
        }}
      >
        <div className="px-8 py-4">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-400 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 border-gray-400 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="border-2 border-gray-400 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Banner Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleBgImageChange}
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
    </>
  );
};
