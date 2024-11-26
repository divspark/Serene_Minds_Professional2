import React from 'react';
import { Loader } from '@mantine/core'; // Import Loader from Mantine
import { CiEdit, CiStar } from "react-icons/ci";
import EditableText from "../../components/EditableText";

const PersonalInformation = ({ data }) => {
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="xl" /> {/* Mantine Loader */}
      </div>
    );
  }

  return (
    <div>
      <div className="font-medium text-xl text-[#2A2A2A]">
        Personal Information
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={data.photo_url || "man-potrait.jpeg"} // Use default if no photo_url
          alt="portrait-img"
          className="w-[90px] h-[90px] rounded-full mt-3"
        />
        <EditableText firstText="Full Name: " secondText={data.full_name} />
        <EditableText firstText="Email: " secondText={data.email} />
        <EditableText firstText="Date of Birth: " secondText={new Date(data.date_of_birth).toLocaleDateString()} />
        <EditableText firstText="Phone Number: " secondText={data.phone} />
      </div>

      <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
        Linked Accounts
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Dynamically display social profiles */}
        {data.social_profiles && Object.keys(data.social_profiles).length > 0 ? (
          Object.keys(data.social_profiles).map((socialProfile, index) => (
            <EditableText
              key={index}
              firstText={`${socialProfile}: `}
              secondText={data.social_profiles[socialProfile]}
            />
          ))
        ) : (
          <EditableText firstText="Linked Accounts: " secondText="No linked accounts available" />
        )}
      </div>

      {/* Subscription Billing Information can be included if needed */}
      {/* <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
        Subscription Billing Information
      </div>
      <div className="flex flex-col items-center justify-center">
        <EditableText firstText="View or Update Subscription Plan: " secondText="Lorem Ipsum" />
        <EditableText firstText="Payment Method Management: " secondText="Lorem Ipsum" />
        <EditableText firstText="Invoice History: " secondText="Lorem Ipsum" />
      </div> */}

      <div className="flex justify-center mb-4">
        <button
          className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
