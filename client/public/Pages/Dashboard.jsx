import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser } from 'react-icons/fa'; // Import the calendar and user icons

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [move, setMove] = useState(false); // State to track icon movement
  const [showCalendarTip, setShowCalendarTip] = useState(false); // State for calendar tooltip
  const [showProfileTip, setShowProfileTip] = useState(false); // State for profile tooltip

  const handleStartLearning = () => {
    navigate('/Courses'); // Navigate to the Courses page
  };

  const handleCalendarClick = () => {
    setMove(true); // Trigger movement
    setTimeout(() => {
      navigate('/Calendar'); // Navigate to the Calendar page after the animation
    }, 300); // Adjust timeout to match your animation duration
  };

  const handleProfileClick = () => {
    navigate('/MyProfile'); // Navigate to the MyProfile page
  };

  return (
    <div 
      className="min-h-screen flex relative"
      style={{
        backgroundImage: `url(/Images/Dashbg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
    >
      {/* Calendar Icon */}
      <div 
        className={`absolute top-4 left-6 text-white text-3xl cursor-pointer transition-transform duration-300 ${move ? 'transform translate-x-0.75' : ''}`} // Move 3 pixels (0.75rem is approximately 12px)
        onClick={handleCalendarClick}
        onMouseEnter={() => setShowCalendarTip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowCalendarTip(false)} // Hide tooltip on mouse leave
      >
        <FaCalendar />
        {showCalendarTip && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bg-gray-800 text-white text-xs p-1 rounded"> {/* Centered tooltip */}
            Calendar
          </div>
        )}
      </div>

      {/* Profile Icon with hover animation */}
      <div 
        className="absolute top-4 right-6 text-white text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-110"
        onClick={handleProfileClick}
        onMouseEnter={() => setShowProfileTip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowProfileTip(false)} // Hide tooltip on mouse leave
      >
        <FaUser />
        {showProfileTip && (
          <div className="absolute right-1/2 transform translate-x-1/2 top-10 bg-gray-800 text-white text-xs p-1 rounded"> {/* Centered tooltip */}
            Profile
          </div>
        )}
      </div>

      {/* Left Section: Message */}
      <div className="flex-1 flex flex-col items-start justify-center p-6" style={{ backgroundColor: 'transparent' }}>
        {/* Text Section */}
        <div className="flex flex-col">
          <h2 className="font-bold text-5xl text-white mb-2 uppercase">Timeouts Got You</h2>
          <h2 className="font-bold text-5xl text-[#545BFF] mb-2 uppercase">Ticked?</h2>
          <h2 className="font-bold text-5xl text-white uppercase">Lets Talk It</h2>
          <h2 className="font-bold text-5xl text-white uppercase">out for a Timely Fix!</h2>
        </div>

        {/* Additional Text with grayish-white color */}
        <div className="text-gray-300 mt-6">
          <p className="text-sm">Master the code – where bugs are lessons, not problems!</p>
          <p className="text-sm">From debug to deploy – elevate your coding skills with confidence!</p>
          <p className="text-sm">From loops to launch: learn to code without getting stuck in a stack!</p>
        </div>

        {/* Centered Start Learning Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={handleStartLearning}
            className="w-auto bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Start Learning
          </button>
        </div>
      </div>

      {/* Right Section: Code Text */}
      <div className="w-1/3 p-8">
        <div className="bg-black bg-opacity-20 rounded-lg shadow-lg p-8 text-white mt-10" style={{ paddingBottom: '10px' }}>
          <pre>
            {`# import random
from random import random

lst = []

for i in range(10):
    lst.append(random())

# Prints random items
print(lst)`}
          </pre>
        </div>
      </div>
    </div>
  );  
};

export default Dashboard;
