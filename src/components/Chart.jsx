/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeButton, setActiveButton] = useState('Monthly'); // Default active button

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance to avoid canvas reuse issues
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const randomData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000));

    // Create a new chart instance
    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            label: 'Sales',
            data: randomData,
            backgroundColor: '#3788E5',
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
            position: 'bottom',
            grid: { display: false },
          },
          y: {
            position: 'right',
            ticks: {
              callback: (value) => `${value / 1000}k`,
              stepSize: 1000, // Ensures the tick interval is 1k
            },
            beginAtZero: true,
            max: 5000, // Limit the max value on the y-axis
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
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-row justify-center items-center">
          <div>
            <p className="text-base text-gray-500">Earnings 2024</p>
            <h2 className="text-3xl text-black font-bold">INR 97,388</h2>
          </div>
          <div>
            <span className="text-sm text-green-500 mt-5 ml-2 flex flex-row justify-center items-center font-bold">
            ⬤ 1.3%{' '}
              <span className="text-[#9291A5] font-semibold ml-1">VS LAST YEAR</span>
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {['Weekly', 'Monthly', 'Annually'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`px-4 py-2 outline-none border-none text-sm rounded-xl ${
                activeButton === button
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-blue-500 border '
              } hover:bg-blue-600 hover:text-white`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-96">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default BarChart;
