import React from 'react';
import { CiEdit, CiStar } from "react-icons/ci";
import EditableText from "../../components/EditableText";

export const Notification = () => {
  return (
    <div>
        <div className="font-medium text-xl text-[#2A2A2A]">
              Appointment Reminders
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Notification for upcoming appointments: " secondText="On" />
              
            </div>
            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
            Messages/Client requests
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Notification preferences for new messages, client requests: " secondText="Yes" />
            </div>

            <div className="font-medium mt-2 mb-2 text-xl text-[#2A2A2A]">
            Platform updates
            </div>
            <div className="flex flex-col items-center justify-center">
              <EditableText firstText="Updates for new platform features: " secondText="On" />
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
