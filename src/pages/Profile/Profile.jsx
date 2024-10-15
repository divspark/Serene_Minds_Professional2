import React, { useState } from "react";
import { Tabs, rem } from "@mantine/core";
import { CiEdit, CiStar } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Shareable } from "./Shareable";
import { Professional } from "./Professional";

export const Profile = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
    <div className="w-3/4 flex justify-center items-center">
      <Tabs  defaultValue="shareable">
        <div className="flex justify-center">
        <Tabs.List>
          <Tabs.Tab value="shareable">
            <h2 className="text-lg text-gray-500 font-bold">Shareable</h2>
          </Tabs.Tab>
          <Tabs.Tab value="credentials">
            <h2 className="text-lg text-gray-500 font-bold">
              Your Credentials
            </h2>
          </Tabs.Tab>
          <Tabs.Tab value="professional">
            <h2 className="text-lg text-gray-500 font-bold">Professional</h2>
          </Tabs.Tab>
        </Tabs.List>
        </div>

        <Tabs.Panel value="shareable">
          <Shareable />
        </Tabs.Panel>

        <Tabs.Panel value="credentials">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="professional">
          <Professional />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
