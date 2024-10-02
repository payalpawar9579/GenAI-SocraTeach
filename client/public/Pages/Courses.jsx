import React, { useState } from 'react'; // Import useState
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const topics = [
    { title: "Bubble Sort", subtopics: ["Algorithm Steps", "Time Complexity", "Use Cases"], progress: 70 },
    { title: "Selection Sort", subtopics: ["Algorithm Steps", "Time Complexity", "Use Cases"], progress: 50 },
    { title: "Merge Sort", subtopics: ["Divide and Conquer", "Merging Process", "Time Complexity"], progress: 80 },
    { title: "Quick Sort", subtopics: ["Pivot Selection", "Partitioning", "Time Complexity"], progress: 60 },
    { title: "Insertion Sort", subtopics: ["Algorithm Steps", "Time Complexity", "Best Use Cases"], progress: 40 },
    { title: "Heap Sort", subtopics: ["Heap Structure", "Building a Heap", "Time Complexity"], progress: 90 },
    { title: "Radix Sort", subtopics: ["Digit Processing", "Stable Sorting", "Use Cases"], progress: 20 },
    { title: "Counting Sort", subtopics: ["Counting Elements", "Space Complexity", "Use Cases"], progress: 30 },
    { title: "Bucket Sort", subtopics: ["Dividing into Buckets", "Sorting Buckets", "Time Complexity"], progress: 50 },
    { title: "Shell Sort", subtopics: ["Gap Sequence", "Algorithm Steps", "Time Complexity"], progress: 80 },
  ];

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle navigation to Coding Env
  const handleStartClick = () => {
    navigate('/CourseDash'); // Navigate to Coding Env
  };

  // Function to handle navigation back to Dashboard
  const handleBackClick = () => {
    navigate('/Dashboard'); // Navigate back to Dashboard
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(/Images/Dashbg.jpg)`, // Updated background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }}
    >
      {/* Back Button */}
      <button 
        onClick={handleBackClick} // Navigate back to Dashboard
        className="absolute top-4 right-4 bg-bg-[#545BFF] text-white py-2 px-4 rounded-lg"
      >
        Back
      </button>

      <h1 className="text-4xl font-bold mb-2" style={{ color: 'white' }}>
        Data Structures
      </h1>
      <h1 className="text-3xl font-bold mb-6" style={{ color: '#545BFF' }}>
        and Algorithms
      </h1>
      
      {/* Search Bar */}
      <div className="relative mb-4 w-full max-w-md">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search topics..."
          className="pl-10 w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 transition-all duration-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Remaining topics display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl p-4 bg-transparent">
        {filteredTopics.map((topic, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg p-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          >
            <h2 className="text-xl text-white mb-2">{topic.title}</h2>
            <ul className="text-gray-300">
              {topic.subtopics.map((subtopic, subIndex) => (
                <li key={subIndex}>• {subtopic}</li>
              ))}
            </ul>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-gray-300">
                <span>Progress: {topic.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded">
                <div
                  className="h-full bg-[#545BFF] rounded"
                  style={{ width: `${topic.progress}%` }}
                />
              </div>
            </div>

            {/* Separate div for the Start button */}
            <div className="flex justify-center">
              <button 
                className="mt-4 bg-[#545BFF] text-white py-2 px-4 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={handleStartClick} // Navigate to Coding Env on button click
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//cover

export default Courses;
