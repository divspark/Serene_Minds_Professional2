import { Slidercomp } from "../components/Slidercomp";
import Header from "../components/Header";
import { FaCirclePlus } from "react-icons/fa6";
import Chart from "../components/Chart";

const Payment = () => {
  return (
    <section className="flex-1 p-4 pt-0 overflow-y-auto">
      {/* Header with Title and Add Payments Button */}
      <div className="flex justify-between items-center mx-7 mb-6">
        <h1 className="text-xl text-black font-medium">Payments</h1>
        <button className="bg-[#3788E5] px-4 py-2 flex text-sm font-light text-white flex-row justify-center items-center">
          Add Payments <FaCirclePlus className="ml-2" />
        </button>
      </div>

      {/* Chart Section */}
      <div className="mx-10 mb-8">
        <Chart />
      </div>

      {/* Transaction Table Section */}
      <div className="mx-10">
        <div className="w-full overflow-x-auto"></div>
      </div>
    </section>
  );
};

export default Payment;
