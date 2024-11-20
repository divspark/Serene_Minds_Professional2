import React, { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { CiEdit } from "react-icons/ci";

export const AboutMe = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi voluptates earum eos, delectus eum hic, ut quasi quam asperiores exercitationem eaque iste id sequi sint molestiae nemo maiores mollitia!"
  );

  const handleSave = () => {
    close();
  };

  return (
    <>
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        title="Edit Bio"
        centered
        withCloseButton={false}
        radius={"lg"}
        styles={{
          title: { fontWeight: "700" },
        }}
      >
        <div className="px-8 py-4">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)} // Update bio state on change
            placeholder="Enter your message here"
            className="w-[444px] h-[258px] p-5 border-2 border-gray-400"
          ></textarea>
        </div>
        <div className="flex justify-center mt-4 mb-2">
          <button
            className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            onClick={handleSave} // Save button to close modal
          >
            Save
          </button>
        </div>
      </Modal>

      <div className="about-us flex flex-col justify-center w-[728px] h-[140px]  border border-gray-300 p-4 relative top-[-150px] rounded-lg">
        <div className="flex justify-between ml-2">
          <h2 className="text-lg text-[#25324B] font-semibold mb-2">About Me</h2>
          <button onClick={open}>
            <CiEdit style={{ color: "blue", fontSize: "24px" }} />
          </button>
        </div>
        <p className='text-[#515B6F] font-normal'>{bio}</p> {/* Display the current bio */}
      </div>
    </>
  );
};
