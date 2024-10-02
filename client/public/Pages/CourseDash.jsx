import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CourseDash = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  // Function to handle button click
  const handleStartCoding = () => {
    navigate('/CodingEnv'); // Redirect to CodingEnv component
  };

  // GIF link for Merge Sort animation
  const mergeSortGif = "/Images/mergesort.gif"; // Ensure this path is correct

  // Basic description of Merge Sort
  const description = `Merge Sort is a divide-and-conquer algorithm that splits an array into smaller sub-arrays, 
  sorts them individually, and then merges them back together. It is efficient for large datasets and 
  guarantees a stable sort.`;

  // Time Complexity
  const timeComplexity = `
  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n log n)`;

  // Space Complexity
  const spaceComplexity = `O(n) - Merge Sort requires additional space for the temporary arrays used during the merging process.`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center text-white p-6"
      style={{
        backgroundImage: `url(/Images/Coursebg.jpg)`, // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-[#545BFF]">Course Dashboard</h1>
      <h2 className="text-3xl font-bold mb-4">Merge Sort</h2>

      {/* Card for Merge Sort GIF with cover image */}
      <div className="mb-4 relative bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col items-center" style={{ padding: '2rem' }}>
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(/Images/your-cover-image.jpg)`, // Ensure this path is correct
            zIndex: 0,
            opacity: 0.5 // Adjust opacity to see content on top
          }}
        ></div>
        <h3 className="text-xl font-semibold mb-2 relative z-10">Merge Sort Animation</h3>
        <img
          src={mergeSortGif}
          alt="Merge Sort Animation"
          className="rounded-lg shadow-lg mb-2 relative z-10"
          style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
        />
      </div>

      {/* Combined Card for Description and Complexities */}
      <div className="mb-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl" style={{ padding: '2rem' }}>
        <h3 className="text-xl font-semibold mb-2">Description & Complexities</h3>
        <p>{description}</p>

        {/* Time Complexity */}
        <strong>Time Complexity:</strong>
        <pre className="text-gray-300">{timeComplexity}</pre>

        {/* Space Complexity */}
        <strong>Space Complexity:</strong>
        <p className="text-gray-300">{spaceComplexity}</p>
      </div>

      {/* Start Coding Button at the bottom of the second card */}
      <button
        onClick={handleStartCoding} // Add click handler
        className="mt-4 px-6 py-3 bg-[#545BFF] text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Start Coding
      </button>
    </div>
  );
};

export default CourseDash;
