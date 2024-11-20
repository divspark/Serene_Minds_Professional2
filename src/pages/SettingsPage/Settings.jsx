import React, { useRef, useState } from "react";
import { Tabs, ScrollArea, Radio, Modal, Group, Button } from "@mantine/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PersonalInformation } from "./PersonalInformation";
import { PrivacySecurity } from "./PrivacySecurity";
import { Notification } from "./Notification";
import EditableText from "../../components/EditableText";
import { useDisclosure } from "@mantine/hooks";

const Settings = () => {
    const [opened, { open, close }] = useDisclosure(false);
  const scrollAreaRef = useRef(null);

  // Open modal when radio button is clicked
  const handleDeleteClick = () => {
    setOpened(true);
  };

  const handleSave = () => {
    close();
  };

  const scrollLeft = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center p-2 ">
      
          <ScrollArea viewportRef={scrollAreaRef} style={{ flexGrow: 1 }}>
            <Tabs defaultValue="account">
              <Tabs.List grow justify="center">
                <Tabs.Tab value="account">Account</Tabs.Tab>
                <Tabs.Tab value="profile">Professional Profile</Tabs.Tab>
                <Tabs.Tab value="privacy">Privacy & Security</Tabs.Tab>
                <Tabs.Tab value="notification">Notification</Tabs.Tab>
                <Tabs.Tab value="dashboard">Dashboard</Tabs.Tab>
                <Tabs.Tab value="dataexport">Data Export/Import</Tabs.Tab>
                <Tabs.Tab value="deleteaccount">
                  Deactivate/Delete Account
                </Tabs.Tab>
              </Tabs.List>

              {/* Content for each Tab Panel */}
              <div className="p-4">
                <Tabs.Panel value="account">
                  <PersonalInformation />
                </Tabs.Panel>
                <Tabs.Panel value="profile">
                  <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
                    Service Types
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <EditableText
                      firstText="Types Of Services Offered: "
                      secondText="Therapy,Counseling"
                    />
                    <EditableText
                      firstText="Fee Structure: "
                      secondText="Sliding Scale"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    <button className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]">
                      {" "}
                      Save Changes
                    </button>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="privacy">
                  <PrivacySecurity />
                </Tabs.Panel>
                <Tabs.Panel value="notification">
                  <Notification />
                </Tabs.Panel>
                <Tabs.Panel value="dashboard">
                  <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
                    Service Types
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <EditableText
                      firstText="Customize client data views: "
                      secondText="Light Mode"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    <button className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]">
                      {" "}
                      Save Changes
                    </button>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="dataexport">
                  <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
                    Export professional data
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <EditableText
                      firstText="Download appointment history, earnings, client logs:"
                      secondText="Yes"
                    />
                  </div>

                  <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
                    Client data export
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <EditableText
                      firstText="Export anonymized data for client insights: "
                      secondText="Yes"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    <button className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]">
                      {" "}
                      Save Changes
                    </button>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="deleteaccount">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center px-6 py-4 mt-4 rounded-lg border-l-4 border-[#1678F2] shadow-lg w-[700px] h-[69px]">
                      <Radio label="Deactivate Account" size="md" onClick={open}/>
                    </div>
                    <div className="flex items-center px-6 py-4 mt-4 rounded-lg border-l-4 border-[#1678F2] shadow-lg w-[700px] h-[69px]">
                      <Radio
                        label="Delete account"
                        onClick={open}
                        color="red"
                        size="md"
                        styles={{
                          label: {
                            color: "red",
                          },
                        }}
                      />
                    </div>
                  </div>
                </Tabs.Panel>
              </div>
            </Tabs>
          </ScrollArea>
        </div>
      </div>

      <Modal
        centered
        withCloseButton={false}
        radius="lg"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Deactivate Account"
      >
        <p>
          Are you sure you want to deactivate the account? If yes, kindly enter
          the characters in the input field below.
        </p>

        {/* Modal Buttons */}
        <Group position="right" mt="md">
          <Button onClick={() => setOpened(false)} variant="outline">
            Close
          </Button>
          <Button color="red" onClick={() => console.log("Account deleted")}>
            Delete
          </Button>
        </Group>
      </Modal>


      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title="Deactivate Account"
        centered
        withCloseButton={false}
        radius={"lg"}
        styles={{
          title: { fontWeight: "700" },
        }}
      >
        <div className="px-8 py-4 flex flex-col items-center justify-center">
            <img src="person_alert.png" alt="person-alert" className="mb-3"/>
        <p className="text-center">
          Are you sure you want to deactivate the account? If yes, kindly enter
          the characters in the input field below.
        </p>
        <img src="image14.png" alt="image14" className="my-2 w-[242px] h-[83px]"/>
        <input type="text" placeholder="Enter The Text" className="mt-3 px-9 py-2"/>
        </div>
        <div className="flex justify-evenly mt-4 mb-2">
          <button
            className="px-10 py-2 flex justify-center items-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            onClick={handleSave} // Save button to close modal
          >
            Close
          </button>
          <button
            className="px-10 py-2 flex justify-center items-center text-[#1678F2] rounded-full border-2 border-[#1678F2]"
          >
            Deactivate Account
          </button>
        </div>
      </Modal>
    </>
  );
};


export default Settings;