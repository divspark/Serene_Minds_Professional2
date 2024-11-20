import React, { useState } from "react";
import {clientAppointments} from "../../config/data"; // Import data
import ClientAppointmentCard from "./ClientAppointmentCard";
import { AddClientModal } from "../../components/AddClientModal"; // Modal Component

const ClientAppointment = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleAddNewClient = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between p-4">
        <p className="text-xl font-medium">Onboard New Client</p>
        <div>
          <button
            className="px-4 py-2 bg-blue-400 mr-4 text-white"
            onClick={handleAddNewClient}
          >
            Add New Client
          </button>
          <button className="px-4 py-2 bg-blue-400 text-white">
            Onboard New Client
          </button>
        </div>
      </div>

      {/* Render modal with proper props */}
      <AddClientModal opened={isModalOpen} close={handleCloseModal} />

      {/* Map over client appointments */}
      {clientAppointments.map((client, index) => (
        <ClientAppointmentCard
          key={index} // Use index as key if no unique ID is provided
          name={client.name}
          date={client.date}
          time={client.time}
          treatment={client.treatment}
          image={client.image} // Pass image if available
        />
      ))}
    </div>
  );
};

export default ClientAppointment;
