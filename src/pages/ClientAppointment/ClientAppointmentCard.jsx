import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ClientAppointmentCard = ({ name, date, time, treatment, image }) => {
  const defaultImage = '/man-potrait.jpeg'; // Default image path

  return (
    <div className="grid grid-cols-10 items-center gap-4 border border-gray-300 rounded-lg mx-28 mt-4 p-4"> 
      <img 
        src={image || defaultImage} // Use passed image or fallback to default
        alt={name} 
        className='w-[65px] h-[65px] rounded-full col-span-1' 
      />

      <div className="name col-span-2">
        <p className='font-normal text-lg'>Name</p>
        <p className='font-medium text-lg'>{name}</p>
      </div>

      <div className="date col-span-1">
        <p className='font-normal text-lg'>Date</p>
        <p className='font-medium text-lg'>{date}</p>
      </div>

      <div className="time col-span-1">
        <p className='font-normal text-lg'>Time</p>
        <p className='font-medium text-lg'>{time}</p>
      </div>

      <div className="treatment col-span-3"> {/* Increased column span for treatment */}
        <p className='font-normal text-lg'>Treatment</p>
        <p className='font-medium text-lg'>{treatment}</p>
      </div>

      <div className="actions col-span-1 flex space-x-2 ml-4"> {/* Buttons remain in the same row */}
        <button className='flex items-center text-green-500'>
          <FaCheck className='mr-2' /> Accept
        </button>
        <button className='flex items-center text-red-500'>
          <FaTimes className='mr-2' /> Reject
        </button>
      </div>
    </div>
  );
};

export default ClientAppointmentCard;
