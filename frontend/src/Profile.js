import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScreenCategory } from './ScreenCategory.js';
import Navbar from './Navbar';
import Background from './Background';
import { useAuth } from './AuthContext';

import ImageGratar from './assets/images/image 10.png';
import Like from './assets/images/like.svg';
import NoLike from './assets/images/nolike.svg';

function Profile() {
  const navigate = useNavigate();
  const [screenCategory, setScreenCategory] = useState('desktop');
  const [likedGrills, setLikedGrills] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const updateCategory = () => setScreenCategory(getScreenCategory());
    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const handleLike = (grillId) => {
    setLikedGrills(prev => ({
      ...prev,
      [grillId]: !prev[grillId]
    }));
  };

  const myGrills = useMemo(() => [
    { id: 1, username: user?.username ?? 'idk', name: 'My Custom Grill', likes: 55, description: 'A grill that is uniquely mine' },
    { id: 2, username: user?.username ?? 'idk', name: 'Backyard Burner', likes: 72, description: 'Perfect for weekend cookouts' },
    { id: 3, username: user?.username ?? 'idk', name: 'Camping Compact', likes: 34, description: 'Lightweight grill for travel' },
    { id: 4, username: user?.username ?? 'idk', name: 'Mega Smoker', likes: 90, description: 'Slow smoking taken to the next level' },
    { id: 5, username: user?.username ?? 'idk', name: 'Gas Jet 500', likes: 61, description: 'High-efficiency gas grill system' },
    { id: 6, username: user?.username ?? 'idk', name: 'Charcoal Classic', likes: 49, description: 'Traditional charcoal flavor' }
  ], [user]);

  const getPanelWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '90%';
      case 'medium': return '900px';
      default: return '1387px';
    }
  };

  const getContainerPadding = () => {
    switch (screenCategory) {
      case 'mobile': return '20px';
      case 'medium': return '30px';
      default: return '40px';
    }
  };

  const getPanelTitleSize = () => {
    switch (screenCategory) {
      case 'mobile': return '20px';
      case 'medium': return '26px';
      default: return '32px';
    }
  };

  const getGrillTitleSize = () => {
    switch (screenCategory) {
      case 'mobile': return '18px';
      case 'medium': return '22px';
      default: return '26px';
    }
  };

  const getDescriptionSize = () => {
    switch (screenCategory) {
      case 'mobile': return '14px';
      case 'medium': return '17px';
      default: return '20px';
    }
  };

  const getLikesSize = () => {
    switch (screenCategory) {
      case 'mobile': return '16px';
      case 'medium': return '20px';
      default: return '24px';
    }
  };

  const getGrillCardWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '100%';
      case 'medium': return '360px';
      default: return '360px';
    }
  };

  const getImageSize = () => {
    switch (screenCategory) {
      case 'mobile': return '100%';
      case 'medium': return '360px';
      default: return '360px';
    }
  };

  const getLikeIconSize = () => {
    switch (screenCategory) {
      case 'mobile': return '25px';
      case 'medium': return '50px';
      default: return '56px';
    }
  };

  const GrillCard = ({ grill }) => (
    <div style={{
      backgroundColor: '#D9D9D9',
      borderRadius: '15px',
      padding: '15px',
      marginBottom: '15px',
      color: '#000000',
      fontFamily: 'Montserrat',
      width: getGrillCardWidth(),
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
    }}>
      <p style={{ 
        fontSize: getGrillTitleSize(), 
        color: '#000000', 
        marginTop: '0', 
        marginBottom: '10px',
        fontWeight: 'bold'
      }}>
        Pimp: {grill.username}
      </p>

      <div style={{
        width: getImageSize(),
        height: getImageSize(),
        borderRadius: '10px',
        marginBottom: '10px',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)'
      }}>
        <img
          src={ImageGratar}
          alt={grill.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <h3 style={{
        fontSize: getGrillTitleSize(), 
        marginTop: '0', 
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#000000'
      }}>
        {grill.name}
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <img
          src={likedGrills[grill.id] ? Like : NoLike}
          alt="like"
          onClick={() => handleLike(grill.id)}
          style={{
            cursor: 'pointer',
            width: getLikeIconSize(),
            height: getLikeIconSize(),
            marginRight: '8px',
            userSelect: 'none'
          }}
        />
        <span style={{ fontSize: getLikesSize(), fontWeight: 'bold' }}>
          {grill.likes + (likedGrills[grill.id] ? 1 : 0)}
        </span>
      </div>

      <p style={{ 
        fontSize: getDescriptionSize(), 
        margin: '0',
        color: '#333333',
        lineHeight: '1.4'
      }}>
        {grill.description}
      </p>
    </div>
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Background showLogo={false} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: screenCategory === 'mobile' ? '20px 20px 40px' : '20px 40px 40px'
        }}>
          <div style={{
            width: getPanelWidth(),
            backgroundColor: '#903019',
            borderRadius: '25px',
            padding: getContainerPadding(),
            boxShadow: '0px 4px 20px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{
              fontFamily: 'Montserrat',
              color: '#ffffff',
              fontSize: getPanelTitleSize(),
              textAlign: 'center',
              marginTop: '0',
              marginBottom: '30px'
            }}>
              My Grills
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: screenCategory === 'desktop' ? '1fr 1fr 1fr' : '1fr',
              gap: '15px',
              justifyItems: 'center'
            }}>
              {myGrills.map(grill => (
                <GrillCard key={grill.id} grill={grill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
