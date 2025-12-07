import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScreenCategory } from './ScreenCategory.js';
import Navbar from './Navbar';
import Background from './Background';
import { useAuth } from './AuthContext';
import GrillPopup from './GrillPopup'; // Import the new component

import ImageGratar from './assets/images/image 10.png';
import Like from './assets/images/like.svg';
import NoLike from './assets/images/nolike.svg';

function Profile() {
  const navigate = useNavigate();
  const [screenCategory, setScreenCategory] = useState('desktop');
  const [likedGrills, setLikedGrills] = useState({});
  const [selectedGrill, setSelectedGrill] = useState(null); // State for popup
  const { user } = useAuth();

  useEffect(() => {
    const updateCategory = () => setScreenCategory(getScreenCategory());
    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const handleLike = (grillId) => {
    setLikedGrills(prev => ({ ...prev, [grillId]: !prev[grillId] }));
  };

  const handleCardClick = (grill) => {
    setSelectedGrill(grill);
  };

  const myGrills = useMemo(() => [
    { id: 1, username: user?.username ?? 'anonymous', name: 'Grillul meu grilat', likes: 55, description: 'its grillin time' },
    { id: 2, username: user?.username ?? 'anonymous', name: 'Grillul meu grilat 2', likes: 72, description: 'oh im grillin it' },
    { id: 3, username: user?.username ?? 'anonymous', name: 'GREAL', likes: 34, description: 'fr fr' },
    { id: 4, username: user?.username ?? 'anonymous', name: 'Mega Knight Toaster', likes: 90, description: 'imi place sa joc mega knight' },
    { id: 5, username: user?.username ?? 'anonymous', name: 'Grillul meu grilat 3', likes: 61, description: '6 7' },
    { id: 6, username: user?.username ?? 'anonymous', name: 'cabum', likes: 49, description: 'cabum' }
  ], [user]);

  const getPanelWidth = () => screenCategory === 'mobile' ? '90%' : screenCategory === 'medium' ? '500px' : '751px';
  const getPanelHeight = () => screenCategory === 'mobile' ? '220px' : screenCategory === 'medium' ? '270px' : '320px';
  const getButtonWidth = () => screenCategory === 'mobile' ? '90%' : screenCategory === 'medium' ? '280px' : '370px';
  const getButtonHeight = () => screenCategory === 'mobile' ? '60px' : screenCategory === 'medium' ? '70px' : '77px';
  const getTextSize = () => screenCategory === 'mobile' ? '20px' : screenCategory === 'medium' ? '26px' : '32px';
  const getPanelPadding = () => '30px';

  // Helper to determine grid columns based on category
  const getGridColumns = () => {
    if (screenCategory === 'mobile') return '1fr';
    if (screenCategory === 'medium') return '1fr 1fr';
    return '1fr 1fr 1fr';
  };

  // Updated Helper for fixed widths
  const getContainerWidth = () => {
    if (screenCategory === 'mobile') return '423px';
    if (screenCategory === 'medium') return '953px';
    return '1387px';
  };

  const inputContainerStyle = {
    width: '100%',
    borderBottom: '1px solid #ffffff',
    paddingBottom: '5px',
    marginBottom: '25px',
    fontFamily: 'Montserrat',
    fontSize: getTextSize(),
    color: '#ffffff'
  };

  const GrillCard = ({ grill }) => (
    <div 
      onClick={() => handleCardClick(grill)} // Click handler for popup
      style={{
        backgroundColor: '#D9D9D9', borderRadius: '15px', padding: '15px', marginBottom: '15px', color: '#000', fontFamily: 'Montserrat', width: '360px', boxShadow: '0px 4px 10px rgba(0,0,0,0.5)',
        cursor: 'pointer', transition: 'transform 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <p style={{ fontSize: '26px', fontWeight: 'bold', margin: 0, marginBottom: '10px' }}>Pimp: {grill.username}</p>
      <div style={{ width: '100%', height: '360px', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px', boxShadow: '0px 2px 8px rgba(0,0,0,0.3)' }}>
        <img src={ImageGratar} alt={grill.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{grill.name}</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img 
          src={likedGrills[grill.id] ? Like : NoLike} 
          alt="like" 
          onClick={(e) => { e.stopPropagation(); handleLike(grill.id); }} // Stop propagation
          style={{ cursor: 'pointer', width: '56px', height: '56px', marginRight: '8px', userSelect: 'none' }} 
        />
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{grill.likes + (likedGrills[grill.id] ? 1 : 0)}</span>
      </div>
      <p style={{ fontSize: '20px', margin: 0, color: '#333', lineHeight: 1.4 }}>{grill.description}</p>
    </div>
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top:0,left:0,width:'100%',height:'100%',zIndex:0}}>
        <Background showLogo={false} />
      </div>
      <div style={{ position: 'relative', zIndex:10}}>
        <Navbar />

        {/* Top Info + Post Button Panel */}
        <div style={{
          display: 'flex',
          flexDirection: screenCategory === 'mobile' ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: screenCategory === 'mobile' ? '20px' : '40px',
          gap: '40px'
        }}>
          <div style={{
            width: getPanelWidth(),
            height: getPanelHeight(),
            backgroundColor: '#721D08',
            borderRadius: '25px',
            padding: getPanelPadding(),
            boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={inputContainerStyle}>Name: {user?.username ?? 'anonymous'}</div>
            <div style={inputContainerStyle}>E-mail: {user?.email ?? '-'}</div>
            <div style={inputContainerStyle}>Telephone: {user?.phone ?? '-'}</div>
          </div>

          <button style={{
            width: getButtonWidth(),
            height: getButtonHeight(),
            backgroundColor: '#28a745',
            color: '#fff',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '32px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
          onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >Post a grill</button>
        </div>

        {/* Grills Panel */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: screenCategory === 'mobile' ? '20px' : '20px 40px 40px' }}>
          <div style={{ 
            width: getContainerWidth(), 
            backgroundColor: '#903019', 
            borderRadius: '25px', 
            padding: '40px', 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.5)' 
          }}>
            <h2 style={{ fontFamily:'Montserrat', color:'#fff', fontSize: '32px', textAlign:'center', marginTop:0, marginBottom:'30px'}}>My Grills</h2>
            <div style={{ 
              display:'grid', 
              gridTemplateColumns: getGridColumns(), 
              gap:'15px', 
              justifyItems:'center' 
            }}>
              {myGrills.map(grill=><GrillCard key={grill.id} grill={grill} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Render Popup */}
      <GrillPopup 
        grill={selectedGrill} 
        onClose={() => setSelectedGrill(null)} 
        isOwner={true} // Enabled for Profile page
        isLiked={selectedGrill ? likedGrills[selectedGrill.id] : false}
        onLikeToggle={handleLike}
      />
    </div>
  );
}

export default Profile;