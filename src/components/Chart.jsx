import { SegmentedControl, Stack, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register the required components
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [earningsData, setEarningsData] = useState([]);
  const [yearlyEarnings, setYearlyEarnings] = useState(0); // State for yearly earnings
  const [activeButton, setActiveButton] = useState("Monthly"); // Default active button

  useEffect(() => {
    // Fetch earnings data from the API
    const fetchEarnings = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/appointment/professional/monthly/1`
        );
        const { earnings, yearlyEarnings } = response.data;

        // Map earnings object to an array of values in the correct month order
        const earningsArray = [
          earnings.JAN,
          earnings.FEB,
          earnings.MAR,
          earnings.APR,
          earnings.MAY,
          earnings.JUN,
          earnings.JUL,
          earnings.AUG,
          earnings.SEP,
          earnings.OCT,
          earnings.NOV,
          earnings.DEC,
        ].map((value) => parseFloat(value) || 0); // Convert to numbers and handle empty strings

        setEarningsData(earningsArray);
        setYearlyEarnings(parseFloat(yearlyEarnings) || 0); // Set the yearly earnings
      } catch (error) {
        console.error("Error fetching earnings data:", error);
        setEarningsData(new Array(12).fill(0)); // Default to zero for all months if error occurs
        setYearlyEarnings(0); // Set yearly earnings to 0 in case of error
      }
    };

    fetchEarnings();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance to avoid canvas reuse issues
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Earnings (INR)",
            data: earningsData, // Use fetched earnings data
            backgroundColor: "#3788E5",
            barThickness: 15,
            borderRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            position: "bottom",
            grid: { display: false },
          },
          y: {
            position: "right",
            ticks: {
              callback: (value) => `₹${value.toFixed(2)}`,
              stepSize: 50, // Adjust tick interval as needed
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, [earningsData]); // Re-render chart when earningsData changes

  return (
    <div className="p-4 flex-1 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 justify-center items-end">
          <Stack gap={1}>
            <p className="text-sm text-[#9291A5]">Earnings 2024</p>
            <h2 className="text-3xl text-black font-bold">
              INR {yearlyEarnings.toFixed(2)} {/* Display yearly earnings */}
            </h2>
          </Stack>
        </div>
        {/* Filter Buttons */}
        <SegmentedControl
          size="sm"
          color="blue"
          data={["Weekly", "Monthly", "Daily"]}
        />
      </div>

      {/* Chart Section */}
      <div className="h-96">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default BarChart;
