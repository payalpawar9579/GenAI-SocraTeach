import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartLearning = () => {
    navigate('/ChatBot'); // Redirect to Courses component
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-6"
      style={{
        backgroundImage: `url(/Images/Dashbg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main heading */}
      <h1 className="text-4xl font-bold mb-4 text-[#545BFF]">About Our AI Teaching Assistant</h1>

      {/* Information about the Socratic AI with black and transparent background */}
      <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <p className="mb-4">
          Welcome to our AI-powered teaching assistant, built to enhance your learning experience through the Socratic method. Instead of directly providing answers, our assistant asks guiding questions that lead you to discover the solution on your own.
        </p>
        <p className="mb-4">
          This assistant is specialized in teaching <span className="font-semibold">Data Structures and Algorithms</span>, with a focus on <span className="font-semibold">Sorting Algorithms</span>. By engaging with students interactively, it helps them think critically and improve problem-solving skills.
        </p>
        <p className="mb-4">
          If you're working on a sorting algorithm and facing issues such as performance bottlenecks, the assistant will ask questions like, <em>"What do you observe about the input size for this test case compared to others?"</em> leading you to understand the underlying problem.
        </p>
        <p className="mb-4">
          Our AI assistant emulates the personalized, 1-on-1 experience that is characteristic of the Socratic method, making it scalable and effective in helping students learn algorithmic concepts deeply and intuitively.
        </p>
      </div>

      {/* Button to learn more */}
      <div className="mt-8">
        <button 
          onClick={handleStartLearning} // Add onClick handler
          className="w-auto bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default About;
