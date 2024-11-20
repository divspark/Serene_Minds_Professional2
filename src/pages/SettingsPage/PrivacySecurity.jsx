import React from 'react';
import { CiEdit, CiStar } from "react-icons/ci";
import EditableText from "../../components/EditableText";

export const PrivacySecurity = () => {
  return (
    <div>
        <div className="font-medium text-xl text-[#2A2A2A]">
              Profile Visibility
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Profile Visibility: " secondText="Public" />
              
            </div>
            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
              Data Sharing Preferences
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Data Sharing Preference: " secondText="Lorem Ipsum" />
            </div>

            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
              Session Recording Settings
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Session Recording: " secondText="On" />
            </div>

            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
              Client Communication Preferences
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Preffered Communication Method: " secondText="Whatsapp,Phone" />
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
