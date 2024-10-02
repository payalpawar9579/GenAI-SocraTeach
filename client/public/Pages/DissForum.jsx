import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const DissForum = () => {
  const [questions, setQuestions] = useState([
    { question: 'What is a data structure?', answers: [] },
    { question: 'Can you explain the difference between stack and queue?', answers: [] },
    { question: 'How does a binary search algorithm work?', answers: [] },
    { question: 'What is Bubble Sort and how does it work?', answers: [] },
    { question: 'Can you describe the Merge Sort algorithm?', answers: [] },
    { question: 'What is Quick Sort, and when should it be used?', answers: [] },
    { question: 'Explain Insertion Sort with an example.', answers: [] },
    { question: 'What are the time complexities of different sorting algorithms?', answers: [] },
    { question: 'How does the Selection Sort algorithm work?', answers: [] },
    { question: 'Can you discuss the advantages of using Heap Sort?', answers: [] },
    { question: 'What is Radix Sort, and how does it differ from other sorts?', answers: [] },
    { question: 'How would you optimize a sorting algorithm?', answers: [] },
    { question: 'What is the difference between stable and unstable sorting algorithms?', answers: [] },
    { question: 'Can you implement Bubble Sort in code?', answers: [] },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [username, setUsername] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [filter, setFilter] = useState('');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answers: [] }]);
      setNewQuestion('');
      setShowQuestionForm(false);
    }
  };

  const handleAnswerSubmit = (e, index) => {
    e.preventDefault();
    if (newAnswer.trim()) {
      const answerUser = isAnonymous ? 'Anonymous' : username;
      const updatedQuestions = [...questions];
      updatedQuestions[index].answers.push({ text: newAnswer, user: answerUser });
      setQuestions(updatedQuestions);
      setNewAnswer('');
      setUsername('');
      setActiveQuestionIndex(null);
      setIsAnonymous(false);
    }
  };

  const handleDeleteAnswer = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(updatedQuestions);
  };

  const filteredQuestions = questions.filter((item) =>
    item.question.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center text-white p-6"
      style={{
        backgroundImage: `url(/Images/Coursebg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-[#545BFF]">Discussion Forum</h1>
      <div className="relative mb-4 w-full max-w-md">
        <FaSearch className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="pl-7 w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
          placeholder="Search for questions..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <button
        onClick={() => setShowQuestionForm(!showQuestionForm)}
        className="mb-4 bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
      >
        {showQuestionForm ? 'Cancel' : 'Add a Question'}
      </button>

      {showQuestionForm && (
        <form onSubmit={handleQuestionSubmit} className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg w-full max-w-md mb-6">
          <textarea
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
            rows="2"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask a question..."
          />
          <button
            type="submit"
            className="w-full mt-2 bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Ask
          </button>
        </form>
      )}

      <div className="bg-black bg-opacity-50 p-1 rounded-lg shadow-lg w-full max-w-1.xl overflow-y-auto">
        {filteredQuestions.length === 0 ? (
          <p className="text-gray-300">No questions match your filter.</p>
        ) : (
          filteredQuestions.map((item, questionIndex) => (
            <div key={questionIndex} className="bg-gray-800 p-4 rounded-lg mb-4">
              <h2 className="font-bold text-lg">{item.question}</h2>
              
              {item.answers.length > 0 && (
                <div className="mt-2">
                  {item.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className="flex justify-between items-center">
                      <p className="text-gray-300 mb-1">
                        <strong>{answer.user}:</strong> {answer.text}
                      </p>
                      <button
                        onClick={() => handleDeleteAnswer(questionIndex, answerIndex)}
                        className="text-red-500 hover:underline ml-2"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {activeQuestionIndex === questionIndex ? (
                <form onSubmit={(e) => handleAnswerSubmit(e, questionIndex)} className="mt-2">
                  <textarea
                    className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
                    rows="2"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Provide your answer..."
                  />
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={() => setIsAnonymous(!isAnonymous)}
                      className="mr-2"
                    />
                    <label className="text-white">Submit as Anonymous</label>
                  </div>
                  {!isAnonymous && (
                    <input
                      type="text"
                      className="mt-2 w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
                      placeholder="Your name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  )}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    Submit Answer
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setActiveQuestionIndex(questionIndex)}
                  className="mt-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
                >
                  Answer this question
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DissForum;
