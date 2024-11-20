import React from 'react';
import { CiEdit, CiStar } from "react-icons/ci";
import EditableText from "../../components/EditableText";

export const PersonalInformation = () => {
  return (
    <div>
        <div className="font-medium text-xl text-[#2A2A2A]">
              Personal Information
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="man-potrait.jpeg"
                alt="potrait-img"
                className="w-[90px] h-[90px] rounded-full mt-3"
              />
              <EditableText firstText="Full Name: " secondText="John Doe" />
              <EditableText firstText="Email: " secondText="kumarrrasit@gmail.com" />
              <EditableText firstText="Date of birth: " secondText="08/01/2001" />
              <EditableText firstText="Phone number: " secondText="7903728847" />
            </div>
            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
              Linked Accounts
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Linked Accounts: " secondText="Manage Integration with Google Notion" />
            </div>

            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
              Subscription Billing Information
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="View or Update Subscription Plan: " secondText="Lorem Ipsum" />
              <EditableText firstText="Payment Method Management: " secondText="Lorem Ipsum" />
              <EditableText firstText="Invoice History: " secondText="Lorem Ipsum" />
            </div>

            <div className="flex justify-center mb-4">
            <button
              className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            >
              {" "}
              Save Changes
            </button>
            </div>
    </div>
  )
}
