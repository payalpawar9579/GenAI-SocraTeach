import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../public/Pages/Login.jsx';
import Dashboard from '../public/Pages/Dashboard.jsx';
import DissForum from '../public/Pages/DissForum.jsx'; 
import CourseDash from '../public/Pages/CourseDash.jsx'; 
import LBoard from '../public/Pages/LBoard.jsx';
import Contact from '../public/Pages/Contact.jsx'; 
import About from '../public/Pages/About.jsx'; 
import CodingEnv from '../public/Pages/CodingEnv.jsx'; 
import TopBanner from '../public/Components/TopBanner.jsx';
import Courses from '../public/Pages/Courses.jsx'; 
import MyProfile from '../public/Pages/MyProfile.jsx';
import Calendar from "../public/Components/Calendar.jsx";
import '../src/App.css';
//integrate the gemini chatbot
const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopBanner />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/LBoard" element={<LBoard />} />

          <Route path="/DissForum" element={<DissForum />} />
          <Route path="/CourseDash" element={<CourseDash />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CodingEnv" element={<CodingEnv />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
