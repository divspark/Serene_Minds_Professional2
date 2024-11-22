import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ScrollArea } from "@mantine/core";
import TableHOC from "../../components/TableHOC";
import ClientProfile from "../../assets/client-user.png"; // Fallback image
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MyClients = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Fetch clients from API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/clients2/all`); // Adjust API endpoint if needed
        const data = await response.json();
        const transformedData = data.map((client) => ({
          id: client.id,
          name: client.name,
          profileImage: client.photo_url || ClientProfile, // Use fallback if photo_url is null
          ageSex: `${client.age || "N/A"}/${client.sex || "N/A"}`,
          phoneNumber: client.phone_no || "N/A",
          email: client.email || "N/A",
          diagnosis: client.diagnosis || "N/A",
        }));
        setClients(transformedData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  // Define columns for the TableHOC component, adding the ID column
  const columns = [
    {
      header: "ID",
      accessorKey: "id", // This will display the 'id' of each client
    },
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

  // Handle row click and pass client.id to navigate
  const handleRowClick = (client) => {
    console.log('Client ID:', client.id); // Check if client.id is valid
    if (client.id) {
      navigate(`/clients/${client.id+1}`);
    } else {
      console.error('Client ID is missing!');
    }
  };
  

  // Filter clients by search term
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex-1 p-4 pt-0 overflow-y-auto">
      <div className="flex mx-7 my-3 justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for clients"
            className="w-full py-3 pl-4 pr-10 text-sm bg-[#F4F4F4] border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Button Placeholder */}
        <div className="relative flex">
          <button className="flex items-center gap-2 outline outline-1 py-2 px-4 text-base font-medium bg-white text-black rounded-xl">
            Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-gray-50 py-8 px-5">
        <TableHOC
          origin="clients"
          columns={columns}
          data={filteredClients}
          onRowClick={(row) => handleRowClick(row.original)} // Pass the full client object
        />
      </div>
    </section>
  );
};

export default MyClients;
