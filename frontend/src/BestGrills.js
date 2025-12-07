import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScreenCategory } from './ScreenCategory.js';
import Navbar from './Navbar';
import Background from './Background';
import GrillPopup from './GrillPopup'; // Import the new component

import ImageGratar from './assets/images/image 10.png';
import Like from './assets/images/like.svg';
import NoLike from './assets/images/nolike.svg';
import Search from './assets/images/search.svg';

function BestGrills() {
  const navigate = useNavigate();
  const [screenCategory, setScreenCategory] = useState('desktop');
  const [likedGrills, setLikedGrills] = useState({});
  const [selectedGrill, setSelectedGrill] = useState(null); // State for popup

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

  const handleCardClick = (grill) => {
    setSelectedGrill(grill);
  };

  const grillsForPimps = [
    { id: 1, username: 'grillmaster99', name: 'The Beast 3000', likes: 245, description: 'Premium stainless steel, perfect for large gatherings' },
    { id: 2, username: 'smokeking', name: 'Smoke Pro Deluxe', likes: 189, description: 'Advanced temperature control with wood pellet system' },
    { id: 3, username: 'bbqchef', name: 'Charcoal Champion', likes: 312, description: 'Traditional charcoal with modern features' },
    { id: 4, username: 'grillguru', name: 'Gas Master Elite', likes: 167, description: 'Multi-burner gas grill with rotisserie' },
    { id: 5, username: 'pitboss2024', name: 'Portable Fire King', likes: 201, description: 'Compact but powerful, perfect for camping' },
    { id: 6, username: 'steakmaster', name: 'Infrared Beast', likes: 278, description: 'Infrared technology for perfect searing' },
  ];

  const bestGrills = [
    { id: 7, username: 'legendarygrills', name: 'Ultimate Grill Supreme', likes: 892, description: 'The pinnacle of grilling technology, hybrid fuel system' },
    { id: 8, username: 'topchef', name: 'Professional Series X', likes: 756, description: 'Restaurant-quality performance for your backyard' },
    { id: 9, username: 'grillkingdom', name: 'Imperial Smoker Pro', likes: 634, description: 'Precision smoking with digital controls' },
  ];

  const getLeftPanelWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '90%';
      case 'medium': return '511px';
      default: return '949px';
    }
  };

  const getRightPanelWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '90%';
      case 'medium': return '511px';
      default: return '511px';
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

  const getSearchBarWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '342px';
      case 'medium': return '534px';
      default: return '753px';
    }
  };

  const getSearchBarFontSize = () => {
    switch (screenCategory) {
      case 'mobile': return '14px';
      case 'medium': return '16px';
      default: return '18px';
    }
  };

  const GrillCard = ({ grill }) => (
    <div 
      onClick={() => handleCardClick(grill)}
      style={{
        backgroundColor: '#D9D9D9',
        borderRadius: '15px',
        padding: '15px',
        marginBottom: '15px',
        color: '#000000',
        fontFamily: 'Montserrat',
        width: getGrillCardWidth(),
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
        transition: 'transform 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
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
          onClick={(e) => { e.stopPropagation(); handleLike(grill.id); }}
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
        
        {/* Search Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: screenCategory === 'mobile' ? '20px' : '30px 40px',
        }}>
          <div style={{
            position: 'relative',
            width: getSearchBarWidth(),
            display: 'flex',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: '100%',
                padding: '15px 50px 15px 20px',
                fontSize: getSearchBarFontSize(),
                fontFamily: 'Montserrat',
                borderRadius: '25px',
                border: '2px solid #3F3F3F',
                outline: 'none',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#D9D9D9'
              }}
            />
            <img 
              src={Search}
              alt="search"
              style={{
                position: 'absolute',
                right: '20px',
                width: '24px',
                height: '24px',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: screenCategory === 'mobile' ? '20px 20px 40px' : '20px 40px 40px',
          gap: '30px',
          flexWrap: screenCategory === 'mobile' ? 'wrap' : 'nowrap'
        }}>
          {/* Left Panel - Grills for Pimps */}
          <div style={{
            width: getLeftPanelWidth(),
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
              Grills for Pimps
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: screenCategory === 'desktop' ? '1fr 1fr' : '1fr',
              gap: '15px',
              justifyItems: 'center'
            }}>
              {grillsForPimps.map(grill => (
                <GrillCard key={grill.id} grill={grill} />
              ))}
            </div>
          </div>

          {/* Right Panel - THE BEST GRILLS */}
          <div style={{
            width: getRightPanelWidth(),
            backgroundColor: '#3E0C00',
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
              THE BEST GRILLS
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px'
            }}>
              {bestGrills.map(grill => (
                <GrillCard key={grill.id} grill={grill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render Popup */}
      <GrillPopup 
        grill={selectedGrill} 
        onClose={() => setSelectedGrill(null)} 
        isOwner={false} // Disabled for BestGrills page
        isLiked={selectedGrill ? likedGrills[selectedGrill.id] : false}
        onLikeToggle={handleLike}
      />
    </div>
  );
}

export default BestGrills;