import React, { useState, useEffect } from 'react';
import { getScreenCategory } from './ScreenCategory.js'; // Assumed existing helper

import ImageGratar from './assets/images/image 10.png';
import Like from './assets/images/like.svg';
import NoLike from './assets/images/nolike.svg';
import Xclose from './assets/images/x.svg';

const GrillPopup = ({ grill, onClose, isOwner, isLiked, onLikeToggle }) => {
  const [screenCategory, setScreenCategory] = useState('desktop');

  // Handle Resize for Responsiveness
  useEffect(() => {
    const updateCategory = () => setScreenCategory(getScreenCategory());
    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  if (!grill) return null;

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLikeToggle(grill.id);
  };

  // --- Dynamic Styles Helpers ---

  const isMobile = screenCategory === 'mobile';
  const isMedium = screenCategory === 'medium';

  // 1. Container Dimensions
  const getPopupStyles = () => ({
    width: isMobile ? '95%' : isMedium ? '750px' : '1100px',
    height: isMobile ? '85vh' : '600px',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '20px' : '30px',
  });

  // 2. Font Sizes
  const getFontStyles = () => ({
    nameUser: isMobile ? '24px' : isMedium ? '30px' : '40px',
    likes: isMobile ? '24px' : isMedium ? '28px' : '36px',
    desc: isMobile ? '16px' : '20px',
  });

  // 3. Button Dimensions
  const getButtonDims = () => ({
    width: isMobile ? '100%' : isMedium ? '180px' : '255px',
    height: isMobile ? '45px' : isMedium ? '45px' : '53px',
    fontSize: isMobile ? '16px' : isMedium ? '16px' : '20px',
  });

  const fonts = getFontStyles();
  const popupDims = getPopupStyles();
  const btnDims = getButtonDims();

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
      }}
    >
      <div 
        onClick={handleContainerClick}
        style={{
          backgroundColor: '#D9D9D9',
          borderRadius: '25px',
          boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.75)', // Blur 50, Opacity 75%
          display: 'flex',
          gap: isMobile ? '20px' : '30px',
          overflow: isMobile ? 'auto' : 'hidden', // Allow scroll on mobile parent if needed
          position: 'relative',
          fontFamily: 'Montserrat',
          boxSizing: 'border-box',
          ...popupDims
        }}
      >
        {/* Close Button (X) */}
        <img 
          src={Xclose}
          onClick={onClose}
          alt="Close"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            zIndex: 20
          }}
        />

        {/* --- Left Side: Image --- */}
        <div style={{ 
          flex: isMobile ? '0 0 auto' : '0 0 40%', 
          height: isMobile ? '250px' : '100%', 
          borderRadius: '15px', 
          overflow: 'hidden', 
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' 
        }}>
          <img 
            src={ImageGratar} 
            alt={grill.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* --- Right Side: Content --- */}
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          flexDirection: 'column', 
          height: isMobile ? 'auto' : '100%' 
        }}>
          
          {/* Header Section: Split into Info (Left) and Buttons (Right) */}
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'flex-start' : 'flex-start',
            marginBottom: '20px',
            paddingRight: isMobile ? '0' : '40px' // Space for X button on desktop
          }}>
            
            {/* Info Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h2 style={{ fontSize: fonts.nameUser, fontWeight: 'bold', margin: 0, color: '#000', lineHeight: 1.1 }}>
                {grill.name}
              </h2>
              <p style={{ fontSize: fonts.nameUser, fontWeight: 'bold', margin: 0, color: '#333' }}>
                Pimp: {grill.username}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                <img 
                  src={isLiked ? Like : NoLike} 
                  alt="like" 
                  onClick={handleLikeClick} 
                  style={{ width: isMobile ? '30px' : '40px', height: isMobile ? '30px' : '40px', marginRight: '15px', cursor: 'pointer' }} 
                />
                <span style={{ fontSize: fonts.likes, fontWeight: 'bold' }}>
                  {grill.likes + (isLiked ? 1 : 0)}
                </span>
              </div>
            </div>

            {/* Buttons Block - Pushed lower via marginTop */}
            {isOwner && (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px', 
                marginTop: isMobile ? '20px' : '40px', // "Just lower"
                width: isMobile ? '100%' : 'auto'
              }}>
                <button style={{
                  backgroundColor: '#AB8826',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                  cursor: 'pointer',
                  boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                  ...btnDims
                }}>
                  Edit Post
                </button>
                <button style={{
                  backgroundColor: '#AB2626',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                  cursor: 'pointer',
                  boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                  ...btnDims
                }}>
                  Delete Post
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            fontSize: fonts.desc, 
            lineHeight: '1.5', 
            color: '#333',
            paddingRight: '10px',
            borderTop: '1px solid rgba(0,0,0,0.1)', 
            paddingTop: '15px'
          }}>
            {grill.description}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GrillPopup;