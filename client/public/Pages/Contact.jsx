import React from 'react';

const Contact = () => {
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
      <h1 className="text-4xl font-bold mb-4 text-[#545BFF]">Contact Us</h1>

      {/* Contact Form with Black and Transparent Background */}
      <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#545BFF]"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#545BFF]"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Text Area */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#545BFF]"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="w-auto bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
