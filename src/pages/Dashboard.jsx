import { useEffect, useState } from "react";
import { Flex, Loader } from "@mantine/core"; // Import Loader from Mantine
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import axios from "axios";
import Chart from "../components/Chart";
import CalenderPicker from "../components/CalenderPicker";
import AdBanner from "../components/Ad/AdBanner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Local Component for Stats Cards
const StatsCard = ({ title, value, isUp, percentage }) => (
  <div
    className="flex-1 relative flex flex-col items-start justify-between p-5 bg-[#A9CCF9] shadow-md 
      rounded-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
  >
    <h2 className="text-md font-medium text-gray-800">{title}</h2>
    <span className="text-3xl font-semibold mt-2 text-black">{value}</span>

    {/* Up/Down Share Box (Visible on Hover of Parent Div) */}
    {percentage && (
      <div
        className={`absolute bottom-4 right-3 shadow-2xl flex items-center gap-1 px-2 py-1 text-base 
          rounded-xl transition-transform font-medium duration-300
          ${isUp ? "bg-green-200 text-[#008000]" : "bg-red-200 text-[#D30404]"}`}
      >
        <span>{percentage}%</span>
        {isUp ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
      </div>
    )}
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats data from the API
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/appointment/professional/stats/1`
        );
        setStats(response.data.stats);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Mantine Loader */}
        <Loader size="xl" variant="dots" />
      </div>
    );
  }

  return (
    <>
      {/* Main Content */}
      <section className="flex-1 p-4 pt-0 overflow-y-auto">
        <AdBanner />
        {/* Stats Cards Container - Single Row Layout */}
        <div className="flex bg-[#418FF1] gap-5 px-7 py-8 rounded-3xl">
          <StatsCard
            title="Upcoming Appointments This Week"
            value={stats.upcomingAppointmentsThisWeek || 'N/A'}
            isUp={true} // Customize if you want to show trends dynamically
            percentage={10} // Placeholder for dynamic trends
          />

          <StatsCard
            title="Distinct Clients This Month"
            value={stats.distinctClientsThisMonth || 'N/A'}
            isUp={false} // Customize if you want to show trends dynamically
            percentage={5} // Placeholder for dynamic trends
          />

          <StatsCard
            title="Number of Appointments"
            value={stats.totalAppointments || 'N/A'}
          />
          <StatsCard
            title="Earnings"
            value={`INR ${stats.totalFeesThisMonth || 'N/A'} `}
          />
        </div>

        <Flex gap={22}>
          <Chart />
          <CalenderPicker />
        </Flex>
      </section>
    </>
  );
};

export default Dashboard;
