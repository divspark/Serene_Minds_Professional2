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

              <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
                <div className="flex justify-between ml-4">
                  <h2 className="text-lg text-[#25324B] font-semibold mb-2s">
                    Payment
                  </h2>
                  <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
                </div>
                <h2 className="text-2xl text-[#2A2A2A] font-semibold mb-2 ml-4">
                  INR 700/session
                </h2>
              </div>
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

export default Profile;
