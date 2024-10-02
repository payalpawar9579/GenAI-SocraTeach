import React from "react";
import { FaUser, FaChartLine, FaTasks } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LBoard = () => {
  // Bar chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Task Completion",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Bar chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Completion Over Time',
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#0f0b28] to-[#1b0a44]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0b28] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:bg-purple-700 p-2 rounded">
            <FaUser />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-purple-700 p-2 rounded">
            <FaChartLine />
            <span>Analytics</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-purple-700 p-2 rounded">
            <FaTasks />
            <span>Tasks</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <header className="bg-[#120c3b] text-white p-5 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-semibold">Welcome to the Leaderboard Dashboard</h1>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Total Users</h3>
            <p className="text-3xl mt-2">1,234</p>
          </div>
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tasks Completed</h3>
            <p className="text-3xl mt-2">567</p>
          </div>
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Analytics</h3>
            <p className="text-3xl mt-2">89%</p>
          </div>
        </section>

        {/* Chart Section */}
        <section className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Performance Overview</h2>
          <div className="h-64">
            <Bar data={data} options={options} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LBoard;
