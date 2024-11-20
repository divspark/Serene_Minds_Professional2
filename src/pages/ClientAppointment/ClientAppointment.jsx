import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons
import ClientAppointmentCard from './ClientAppointmentCard';

const ClientAppointment = () => {
  return (
    <div className='mb-10'>
      <div className='flex justify-between p-4'>
        <p className='text-xl font-medium'>Onboard New Client</p>
        <div>
          <button className='px-4 py-2 bg-blue-400 mr-4 text-white'>Add New Client</button>
          <button className='px-4 py-2 bg-blue-400 text-white'>Onboard New Client</button>
        </div>
      </div>

      <ClientAppointmentCard 
        name="Asit Kumar" 
        date="12 Oct 2024" 
        time="9:10pm" 
        treatment="Anxiety and panic attacks" 
        image="man-potrait.jpeg"  // Dynamic image passed
      />
      <ClientAppointmentCard 
        name="John Doe" 
        date="15 Nov 2024" 
        time="10:00am" 
        treatment="Depression and mood disorders" 
        // No image prop passed, default image will be used
      />
      <ClientAppointmentCard 
        name="Jane Smith" 
        date="20 Oct 2024" 
        time="2:30pm" 
        treatment="Therapy session for depression" 
      />
      
      <ClientAppointmentCard 
        name="Michael Johnson" 
        date="25 Oct 2024" 
        time="1:00pm" 
        treatment="Counseling for anxiety"
      />

      <ClientAppointmentCard 
        name="Emily Davis" 
        date="30 Oct 2024" 
        time="11:15am" 
        treatment="Panic attack management"
      />
    </div>
  );
};

export default ClientAppointment;
