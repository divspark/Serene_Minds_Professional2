import { useState, useEffect } from "react";
import { ActionIcon } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";
import { NotificationBell } from "../assets/icons/icons";
import profilePicture from "../assets/8e2becda16e2f3abc85e162b63a8d214.jpeg"; // Default profile image

export default function Header() {
  const [toggleStates, toggle] = useToggle(["open", "close"]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle for login/logout
  const [doctor, setDoctor] = useState(null); // To store doctor data
  const [currentDate, setCurrentDate] = useState(""); // To store today's date

  useEffect(() => {
    // Fetch doctor's data from API using VITE_API_BASE_URL
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/professionals/2`);
        const data = await response.json();
        setDoctor(data); // Set fetched doctor data

        // Set today's date in the format '24th Sep. 2024'
        const today = new Date();
        const options = { day: "numeric", month: "short", year: "numeric" };
        setCurrentDate(today.toLocaleDateString("en-GB", options)); // Format: 24th Sep. 2024
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, []); // Runs only once when component is mounted

  if (!doctor) {
    return <div>Loading...</div>; // Show loading if doctor data is not yet fetched
  }

  // Use the profile picture URL from the API if it exists, otherwise use the default image
  const profileImageUrl = doctor.photo_url || profilePicture;

  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Left Section - Heading & Subheading */}
      <div className="flex flex-col">
        <h1 className="text-2xl text-black font-bold">{doctor.full_name}</h1>
        <span className="text-lg text-[#505050]">{currentDate}</span>
      </div>

      {/* Middle Section - Search Box with Icon */}
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-4 pr-10 text-sm bg-[#F4F4F4] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex items-center gap-6">
        <ActionIcon variant="white" size="lg">
          <NotificationBell />
        </ActionIcon>

        {/* User Info or Logged Out State */}
        <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-200">
          {isLoggedIn ? (
            <>
              <img
                src={profileImageUrl}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-700">
                {doctor.full_name}
              </span>
            </>
          ) : (
            <FiLogOut className="text-xl text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}
