import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Select } from "@mantine/core";

export const EditEducationModal = () => {
  const [openedEducation, { openEducation, closeEducation }] =
    useDisclosure(false);
  return (
    <Modal
      size="auto"
      opened={openedEducation}
      onClose={closeEducation}
      title="Edit Education"
      centered
      withCloseButton={false}
      radius={"lg"}
      styles={{
        title: {
          fontWeight: "700",
        },
      }}
    >
      <div className="flex flex-col mb-2 w-4/5">
        <Select
          label="Education"
          placeholder="Pick value"
          data={["Depression", "Anxiety", "Stress"]}
        />
      </div>
      <div className="flex flex-col mb-2 w-4/5">
        <Select
          label="Institution"
          placeholder="Pick value"
          data={["Depression", "Anxiety", "Stress"]}
        />
      </div>
      <div className="px-8 py-4">
        <textarea
          name="user-msg"
          id="user-msg"
          placeholder="Enter your message here"
          className="w-[444px] h-[40px] p-5 border-2 border-gray-400 "
        ></textarea>
      </div>
      <div className="flex justify-center mt-4 mb-2">
        <button className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]">
          {" "}
          Save
        </button>
      </div>
    </Modal>
  );
};
