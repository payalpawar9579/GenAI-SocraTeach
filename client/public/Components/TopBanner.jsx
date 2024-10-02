import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBanner = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="top-banner" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#141414', 
        height: 'auto',
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={() => navigate('/Dashboard')} style={{ margin: '0 15px', color: 'white', backgroundColor: 'transparent', border: 'none' }}>HOME</button>
        <button onClick={() => navigate('/LBoard')} style={{ margin: '0 15px', color: 'white', backgroundColor: 'transparent', border: 'none' }}>LEADERBOARD</button>
        <button onClick={() => navigate('/About')} style={{ margin: '0 15px', color: 'white', backgroundColor: 'transparent', border: 'none' }}>ABOUT</button>
        <button onClick={() => navigate('/Contact')} style={{ margin: '0 15px', color: 'white', backgroundColor: 'transparent', border: 'none' }}>CONTACT</button>
        <button onClick={() => navigate('/DissForum')} style={{ margin: '0 15px', color: 'white', backgroundColor: 'transparent', border: 'none' }}>DISCUSSION FORUM</button>
      </nav>
    </div>
  );
};

export default TopBanner;
