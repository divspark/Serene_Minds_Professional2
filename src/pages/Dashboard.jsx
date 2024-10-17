/* eslint-disable react/prop-types */
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import Chart from "../components/Chart";
import Calender from "../components/Calender";

// Local Component for Stats Cards
const StatsCard = ({ title, value, isUp, percentage }) => (
  <div
    className="relative flex flex-col items-start justify-between p-5 bg-[#A9CCF9] shadow-md 
      rounded-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
  >
    <h2 className="text-lg font-medium text-gray-800">{title}</h2>
    <span className="text-3xl font-semibold mt-2 text-black">{value}</span>

    {/* Up/Down Share Box (Visible on Hover of Parent Div) */}
    {percentage && (
      <div
        className={`absolute bottom-4 right-3 shadow-2xl flex items-center gap-1 px-2 py-1 text-base 
          rounded-xl transition-transform font-medium duration-300
          ${isUp ? "bg-green-200 text-[#008000]" : "bg-red-200 text-[#D30404]"}
          group-hover:scale-125 group-hover:translate-x-4`}
      >
        <span>{percentage}%</span>
        {isUp ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
      </div>
    )}
  </div>
);

const Dashboard = () => {
  return (
    <>
      {/* Main Content */}
      <section className="flex-1 p-4 pt-0 overflow-y-auto">
        {/* Stats Cards Container - Single Row Layout */}
        <div className="flex bg-[#418FF1] justify-between gap-10 px-7 py-8 rounded-3xl m-5">
          <div className="group w-1/4">
            <StatsCard
              title="New Patients"
              value="40"
              isUp={true}
              percentage={51}
            />
          </div>
          <div className="group w-1/4">
            <StatsCard
              title="Old Patients"
              value="64"
              isUp={false}
              percentage={20}
            />
          </div>
          <div className="group w-1/4">
            <StatsCard title="Number of Appointments" value="130" />
          </div>
          <div className="group w-1/4">
            <StatsCard title="Earning" value="INR 2,48,908" />
          </div>
        </div>

        <aside className="flex flex-row ">
          <Chart />
          <Calender />
        </aside>
      </section>
    </>
  );
};

export default Dashboard;
