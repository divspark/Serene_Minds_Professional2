// src/pages/MyClients.jsx

import TableHOC from '../components/TableHOC';
import ClientProfile from "../assets/client-user.png"

const MyClients = () => {
  // Define columns for the TableHOC component
  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
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
      header: 'Amount',
      accessorKey: 'amount',
    },
    {
      header: 'Date/Time',
      accessorKey: 'dateTime',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
  ];

  // Sample data for the table
  const data = Array(10).fill({
    name: 'A. Kumar',
    profileImage: ClientProfile, // Example image URL
    amount: 'INR 24,000',
    dateTime: '2 Oct 2024 at 23:56',
    status: 'Credited',
  });

  return (
    <main className="flex bg-white h-screen">

        {/* Table Section */}
        <div className="bg-gray-50 py-8 px-5">
          <h1 className='text-xl text-black px-5 font-medium'>
            Transaction
          </h1>
          <TableHOC columns={columns} data={data} />
        </div>
    </main>
  );
};

export default MyClients;
