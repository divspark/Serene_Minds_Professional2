import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { Select } from "@mantine/core";

export function PersonalBooking() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const handleClick = () => {
    navigate("/thankYou"); // Navigates to the booking component
  };

  return (
    <div className="text-center mt-10">
      <h1 className="font-semibold text-3xl mb-4">Book Your Appointment</h1>
      <p className="text-lg mb-6">
        Select date and time that best works for you.
      </p>

      <div className="flex flex-row justify-center space-x-10">
        {/* Calendar Section */}
        <div className="w-full md:w-1/4">
          <DatePicker
            allowDeselect
            value={value}
            onChange={setValue}
            size="md"
            className="w-full text-lg" // Increased the size of the DatePicker
          />
        </div>

        {/* Time Slots Section */}
        <div className="w-2/6">
          <h3 className="text-xl text-center mb-4">Available Time Slots</h3>
          <div className="flex flex-wrap justify-evenly mb-6">
            {[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
            ].map((time) => (
              <div
                key={time}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-32 text-center"
              >
                {time}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-gray-500 text-left mb-2">
              Additional Message (Optional)
            </p>
            <textarea
              className="w-full border-2 border-gray-300 p-4 rounded-lg text-gray-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            onClick={handleClick}
            className="w-3/4 py-2  text-white bg-blue-600 rounded-lg mt-4 mb-6"
          >
            Book my appointment
          </button>
        </div>

        {/* Select Section */}
        <div className="w-1/4">
          <Select
            label="Available services"
            placeholder="Select Service"
            data={["Couple Therapy", "Consultation", "Stress Relief", "Meditation"]}
            searchable
            clearable
            className="w-full text-lg" // Increased the size of the Select component
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalBooking;
