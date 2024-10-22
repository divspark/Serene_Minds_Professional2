import { Button } from "@mantine/core";
import { FaCirclePlus } from "react-icons/fa6";
import Chart from "../components/Chart";

const Payment = () => {
  return (
    <section className="flex-1 p-4 pt-0 overflow-y-auto">
      {/* Header with Title and Add Payments Button */}
      <div className="flex justify-between items-center mx-7 mb-6">
        <h1 className="text-xl text-black font-medium">Payments</h1>
        <Button className="primary">
          Add Payments <FaCirclePlus className="ml-2" />
        </Button>
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
