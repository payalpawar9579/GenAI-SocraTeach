// ChatBot.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const API_KEY = 'AIzaSyCTd-KXFbzrhT26Kcycje7I_nuYqE6sM8Q'; // Your actual API key

  const sendMessage = async () => {
    if (!userInput) return;

    // Add user message to the chat
    const newMessage = { sender: 'user', text: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios.post(
        'https://your-api-endpoint.com/chat', // Replace with the actual endpoint
        {
          message: userInput,
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = {
        sender: 'bot',
        text: response.data.reply, // Adjust according to the response structure
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    } finally {
      setUserInput('');
    }
  };

  // Inline styles
  const chatbotContainerStyle = {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
  };

  const messagesStyle = {
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '16px',
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  const userMessageStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px',
    borderRadius: '5px',
    marginBottom: '8px',
    alignSelf: 'flex-end',
    maxWidth: '80%',
  };

  const botMessageStyle = {
    backgroundColor: '#e0e0e0',
    color: 'black',
    padding: '8px',
    borderRadius: '5px',
    marginBottom: '8px',
    alignSelf: 'flex-start',
    maxWidth: '80%',
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const inputStyle = {
    flex: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '8px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={chatbotContainerStyle}>
      <div style={messagesStyle}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.sender === 'user' ? userMessageStyle : botMessageStyle}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          style={inputStyle}
        />
        <button onClick={sendMessage} style={buttonStyle}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
