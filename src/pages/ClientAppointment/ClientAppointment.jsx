//Code For Future Use -Divyansh Kesharwani

// import React, { useState } from "react";
// import {clientAppointments} from "../../config/data"; // Import data
// import ClientAppointmentCard from "./ClientAppointmentCard";
// import { AddClientModal } from "../../components/AddClientModal"; // Modal Component

// const ClientAppointment = () => {
//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to open the modal
//   const handleAddNewClient = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="mb-10">
//       <div className="flex justify-between p-4">
//         <p className="text-xl font-medium">Onboard New Client</p>
//         <div>
//           <button
//             className="px-4 py-2 bg-blue-400 mr-4 text-white"
//             onClick={handleAddNewClient}
//           >
//             Add New Client
//           </button>
//           <button className="px-4 py-2 bg-blue-400 text-white">
//             Onboard New Client
//           </button>
//         </div>
//       </div>

//       {/* Render modal with proper props */}
//       <AddClientModal opened={isModalOpen} close={handleCloseModal} />

//       {/* Map over client appointments */}
//       {clientAppointments.map((client, index) => (
//         <ClientAppointmentCard
//           key={index} // Use index as key if no unique ID is provided
//           name={client.name}
//           date={client.date}
//           time={client.time}
//           treatment={client.treatment}
//           image={client.image} // Pass image if available
//         />
//       ))}
//     </div>
//   );
// };

// export default ClientAppointment; For Using Now
import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const ClientAppointment = () => {
  const [link] = useState(
    "https://serene-minds-professional2.vercel.app/booking"
  );
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  // Handle copying the link to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  // Handle sending the email
  const handleEmailSubmit = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Invitation sent to: ${email}`);
    setEmail("");
    setShowEmailInput(false);
  };

  return (
    <div className="mt-20">
      <div className="space-y-6 text-center flex justify-center flex-col">
        <p className="text-gray-700 font-medium">
          Share the link or scan the QR code to onboard the client
        </p>

        {/* Input field with copy button */}
        <div className="flex items-center border mx-20 border-gray-300 rounded-md overflow-hidden justify-center">
          <input
            type="text"
            value={link}
            readOnly
            className="flex-grow px-3 py-2 text-gray-600 bg-gray-100 outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            <MdContentCopy className="text-lg" />
          </button>
        </div>

        {/* QR Code Display */}
        <div className="flex justify-center">
          <img
            src="/qr.png"
            alt="QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Prompt to invite via email */}
        <p className="text-sm text-gray-500 ">
          If unable to scan the QR code,{" "}
          <button
            onClick={() => setShowEmailInput(!showEmailInput)}
            className="text-blue-500 font-medium hover:underline"
          >
            enter email
          </button>{" "}
          of the client to invite.
        </p>

        {/* Email input form */}
        {showEmailInput && (
          <div className="flex justify-center space-y-4 mx-20 flex-col items-center">
            <input
              type="email"
              placeholder="Enter client's email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full max-w-xs bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white py-2 rounded-md hover:from-[#3477e4] hover:to-[#5633d9]"
            >
              Send Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientAppointment;


