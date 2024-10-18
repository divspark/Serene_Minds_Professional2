// src/pages/MyClients.jsx

import { Slidercomp } from "../../components/Slidercomp";
import Header from "../../components/Header";
import { FiSearch } from "react-icons/fi";
import { RiFilter2Line } from "react-icons/ri";
import TableHOC from "../../components/TableHOC";
import ClientProfile from "../../assets/client-user.png";

const MyClients = () => {
  // Define columns for the TableHOC component
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <img
            src={row.original.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">{row.original.name}</span>
        </div>
      ),
    },
    {
      header: "Age/Sex",
      accessorKey: "ageSex",
    },
    {
      header: "Phone Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Diagnosis",
      accessorKey: "diagnosis",
    },
  ];

  // Sample data for the table
  const data = Array(10).fill({
    id: 1,
    name: "A. Kumar",
    profileImage: ClientProfile, // Example image URL
    ageSex: "23/Male",
    phoneNumber: "+91 345677723",
    email: "kumarrrasit@gmail.com",
    diagnosis: "Anxiety, Panic attack",
  });

  return (
    <section className="flex-1 p-4 pt-0 overflow-y-auto">
      <div className="flex mx-7 my-3 justify-between items-center">
        {/* Search Bar with Icon */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for clients"
            className="w-full py-3 pl-4 pr-10 text-sm bg-[#F4F4F4] border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-3 top-3.5 text-gray-500" />
        </div>

        {/* Filter Button with Dropdown */}
        <div className="relative flex">
          <button className="flex items-center gap-2 outline outline-1 py-2 px-4 text-base font-medium bg-white text-black rounded-xl">
            Filter
            <RiFilter2Line className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="bg-gray-50 py-8 px-5">
        <TableHOC origin="clients" columns={columns} data={data} />
      </div>
    </section>
  );
};

export default MyClients;
