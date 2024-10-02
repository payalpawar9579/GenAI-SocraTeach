import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CodingEnv = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');

  const problemStatements = [
    {
      id: 1,
      statement: (
        <div>
          <p>Write a function to calculate the factorial of a number.</p>
          <p>Test Case 1:</p>
          <p>Input: 0</p>
          <p>Expected Output: 1</p>
          <p>Reason: The factorial of 0 is defined as 1.</p>
          <p>Test Case 2:</p>
          <p>Input: 5</p>
          <p>Expected Output: 120</p>
          <p>Reason: The factorial of 5 (5!) is calculated as 5 × 4 × 3 × 2 × 1 = 120.</p>
        </div>
      )
    }
  ];

  const errors = [
    { line: 10, error: "Can you find the corresponding opening brace for this closing brace? '}'" },
    { line: 19, error: "How can you ensure that 'result' is defined before you use it?" },
  ];

  const handleCompile = () => {
    setOutput(`Compiled Output:\n${code} (Language: ${language.toUpperCase()})`);
  };

  const handleSubmit = () => {
    console.log("Submitted:", code);
  };

  const handleNext = () => {
    console.log("Navigating to the next problem...");
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  // Function to handle user input for the chatbot
  const handleChatSubmit = async () => {
    // Call your Gemini API here and set the response
    const response = await callGeminiAPI(userInput);
    setChatbotResponse(response);
    setUserInput(''); // Clear input field
  };

  // Mock function to simulate API call
  const callGeminiAPI = async (input) => {
    // Replace with actual API call logic
    return `Response from Gemini: ${input}`;
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(/Images/Coursebg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }}
    >
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 bg-[#545BFF] text-white py-2 px-4 rounded-lg"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold text-white mb-6">{topic} Coding Environment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl p-4 bg-transparent">

        <div className="bg-gray-800 rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h2 className="text-xl text-white mb-2">Problem Statement 1</h2>
          <div className="text-gray-300">
            {problemStatements.map((problem) => (
              <div key={problem.id} className="mb-2">
                {problem.statement}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h2 className="text-xl text-white mb-4">Online Compiler</h2>
          
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mb-4 w-full p-2 border rounded-lg bg-transparent text-white"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>

          <textarea
            className="w-full h-48 p-2 border rounded-lg bg-transparent text-white"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
          <button
            onClick={handleCompile}
            className="mt-4 w-full bg-[#545BFF] text-white p-2 rounded-full hover:bg-purple-700"
          >
            Run
          </button>

          {/* Chatbot Interface */}
          <div className="mt-6">
            <h2 className="text-xl text-white mb-2">Chat with Gemini Bot</h2>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="mb-2 w-full p-2 border rounded-lg bg-transparent text-white"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleChatSubmit}
              className="w-full bg-[#545BFF] text-white p-2 rounded-full hover:bg-purple-700"
            >
              Ask
            </button>
            {chatbotResponse && (
              <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-lg">
                <h3 className="text-white">Gemini Response:</h3>
                <p className="mt-2 text-white">{chatbotResponse}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 relative" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h2 className="text-xl text-white mb-4">Errors & Feedback</h2>

          <button
            onClick={handleNext}
            className="absolute top-4 right-4 bg-[#545BFF] text-white p-2 rounded-full hover:bg-purple-700"
          >
            Next
          </button>

          <p className="text-red-400 mb-2">Errors:</p>
          {errors.map((error, index) => (
            <p key={index} className="text-gray-300">
              Line {error.line}: {error.error}
            </p>
          ))}
        
          <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-lg">
            <h3 className="text-white">Output:</h3>
            <pre className="mt-2 text-white">{output}</pre>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-[#545BFF] text-white p-2 rounded-full hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingEnv;
