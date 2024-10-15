import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "@mantine/core";
import { CiStar } from "react-icons/ci";

const DayAvailability = ({ day }) => {
  const [opened, setOpened] = useState(false);
  const [timeSlots, setTimeSlots] = useState([
    { start: "08:00", end: "10:00" },
  ]);

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  const addTimeSlot = (start, end) => {
    setTimeSlots([...timeSlots, { start, end }]);
    closeModal();
  };

  const deleteTimeSlot = (index) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== index));
  };

  return (
    <div className="day-availability-container">
      <div className="appoint-days ml-5 flex justify-between">
        <label className="mr-36 flex items-center">
          <input type="checkbox" className="mr-1" />
          {day}
        </label>

        {/* First slot with Add button */}
        <div className="day-btn flex ml-2 mr-48 items-center">
          <CiStar style={{ color: "blue", fontSize: "24px", marginRight: "20px" }} />
          <button className="px-3 border border-gray-400 rounded-xl">
            {timeSlots[0].start}
          </button>
          <p className="p-2">-</p>
          <button className="px-3 border border-gray-400 rounded-xl">
            {timeSlots[0].end}
          </button>
        </div>
        <div className="flex p-2 justify-between">
          <IoAddOutline
            onClick={openModal}
            style={{ color: "blue", fontSize: "24px", cursor: "pointer" }}
          />
          <RiDeleteBin6Line
            onClick={() => deleteTimeSlot(0)}
            style={{ color: "red", fontSize: "24px", marginLeft: "20px", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Additional slots with only delete button */}
      {timeSlots.slice(1).map((slot, index) => (
        <div className="day-btn flex ml-[16.7rem] items-center" key={index + 1}>
          <button className="px-3 border border-gray-400 rounded-xl">
            {slot.start}
          </button>
          <p className="p-2">-</p>
          <button className="px-3 border border-gray-400 rounded-xl">
            {slot.end}
          </button>

          <div className="flex p-2 justify-between ml-[13.65rem]">
            <RiDeleteBin6Line
              onClick={() => deleteTimeSlot(index + 1)}
              style={{ color: "red", fontSize: "24px", marginLeft: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
      ))}

      {/* Modal for adding time slot */}
      <Modal
        opened={opened}
        onClose={closeModal}
        title="Add Time Slot"
        centered
        radius="lg"
      >
        <div className="p-5">
          <label className="block mb-2">Start Time</label>
          <input
            type="time"
            id="start-time"
            className="block w-full mb-4 border p-2 rounded-lg"
          />
          <label className="block mb-2">End Time</label>
          <input
            type="time"
            id="end-time"
            className="block w-full mb-4 border p-2 rounded-lg"
          />
          <button
            className="px-10 py-2 text-white bg-blue-600 rounded-full"
            onClick={() => {
              const start = document.getElementById("start-time").value;
              const end = document.getElementById("end-time").value;
              addTimeSlot(start, end);
            }}
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DayAvailability;
