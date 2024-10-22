import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Flex, Text } from "@mantine/core";
import { CiLocationOn } from "react-icons/ci";

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
        <Flex className="rounded-b-lg shadow-md">
          <img
            src={profilePhoto}
            alt="manager"
            className="bg-blue-500 rounded-full w-[120px] h-[120px] relative bottom-10 left-7 border-8 border-white"
          />
          <div className="flex flex-1 ml-10">
            <div className="flex-1 pshyc-details p-3">
              <Text c="#25324B" fw={700} fz={24}>
                {name}
              </Text>
              <Text fw={400} fz={18} c="#7C8493">
                Clinical Psychologist
              </Text>
              <Text
                className="flex items-center gap-1"
                fw={400}
                fz={18}
                c="#7C8493"
              >
                <CiLocationOn />
                {location}
              </Text>
            </div>
            <Flex mt={20} gap={10} className="px-3">
              <Button size="sm" variant="outline">
                <Text fw={600}>Edit Profile</Text>
              </Button>
              <Button size="sm" variant="outline">
                <Text fw={600}>Share Profile</Text>
              </Button>
            </Flex>
          </div>
        </Flex>
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
