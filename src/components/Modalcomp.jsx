import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export const Modalcomp = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        title="Send Message TO J. Gustavan"
        centered
        withCloseButton={false}
        radius={"lg"}
        styles={{
            title: {
              fontWeight:"700"
            },
            
          }}
      >
        <div className="px-8 py-4">
          <textarea
            name="user-msg"
            id="user-msg"
            placeholder="Enter your message here"
            className="w-[444px] h-[258px] p-5 border-2 border-gray-400 "
          ></textarea>
        </div>
        <div className="flex justify-center mt-4 mb-2">
        <button
          className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
        >
          {" "}
          Proceed
        </button>
        </div>
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
};