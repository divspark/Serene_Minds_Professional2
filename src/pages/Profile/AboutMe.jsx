import { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Text, Group } from "@mantine/core";
import { EditProfileSection } from "../../assets/icons/icons";

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

      <div className="about-us flex flex-col justify-center w-[728px] h-[140px] shadow-md border border-gray-300 p-4 rounded-lg">
        <Group justify="space-between">
          <Text fw={600} fz={20}>
            About me
          </Text>
          <ActionIcon variant="transparent">
            <EditProfileSection />
          </ActionIcon>
        </Group>
        <p className="text-[#515B6F] font-normal mt-3">{bio}</p>{" "}
        {/* Display the current bio */}
      </div>
    </>
  );
};
