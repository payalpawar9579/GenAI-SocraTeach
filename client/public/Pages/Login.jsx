import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginBack from '../Images/LoginBack.png';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-end py-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginBack})`, opacity: 1 }}
      />
      <div className="w-full max-w-md mx-4">
        <div className="bg-black bg-opacity-20 rounded-lg shadow-lg p-8 relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#545BFF] mb-2">LOGIN</h1>
            <p className="text-gray-600">Ask, Code, Reflect</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 flex items-center border border-gray-300 rounded-[30px]">
              <FaUser className="ml-4 text-gray-500" />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border-0 rounded-[30px] bg-transparent text-white focus:outline-none focus:bg-transparent focus:ring-0"
                style={{ caretColor: 'white' }} // Changes the caret color to white
              />
            </div>
            <div className="mb-6 flex items-center border border-gray-300 rounded-[30px]">
              <FaLock className="ml-4 text-gray-500" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border-0 rounded-[30px] bg-transparent text-white focus:outline-none focus:bg-transparent focus:ring-0"
                style={{ caretColor: 'white' }} // Changes the caret color to white
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              By logging in, you agree to our{' '}
              <Link to="#" className="text-blue-600">Terms & Conditions</Link>
            </p>
            <button
              type="submit"
              className="w-full bg-[#545BFF] text-white p-2 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="#" className="text-sm text-blue-600">Forgot Password?</Link>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Dont have an account yet? <Link to="#" className="text-blue-600">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
