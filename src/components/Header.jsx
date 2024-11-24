// src/components/Header.jsx
import { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";
import { NotificationBell } from "../assets/icons/icons";
import profilePicture from "../assets/8e2becda16e2f3abc85e162b63a8d214.jpeg";

export default function Header() {
  const [toggleStates, toggle] = useToggle(["open", "close"]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle for login/logout

  return (
    <header className="flex items-center justify-between px-6 py-4 ">
      {/* Left Section - Heading & Subheading */}
      <div className="flex flex-col">
        <h1 className="text-2xl text-black font-bold">Dr. Kim</h1>
        <span className="text-lg color-[#505050]">24th Sep. 2024</span>
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
                src={profilePicture}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-700">
                Dr. Kim
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
