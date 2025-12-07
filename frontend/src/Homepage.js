import React, { useState, useEffect } from 'react';
import Petah from './assets/images/Group 111.svg';
import PetahMobile from './assets/images/Group 111b.svg';
import instagram from './assets/images/instagram.svg';
import facebook from './assets/images/facebook.svg';
import youtube from './assets/images/youtube.svg';
import twitch from './assets/images/twitch.svg';
import { getScreenCategory } from './ScreenCategory.js';

function Homepage() {
  const [screenCategory, setScreenCategory] = useState('desktop');

  useEffect(() => {
    const updateCategory = () => {
      setScreenCategory(getScreenCategory());
    };

    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const getHeaderHeight = () => {
    switch (screenCategory) {
      case 'mobile':
        return '115px';
      case 'medium':
        return '147px';
      case 'desktop':
      default:
        return '182px';
    }
  };

  const getHeaderFontSize = () => {
    switch (screenCategory) {
      case 'mobile':
        return '20px';
      case 'medium':
        return '36px';
      case 'desktop':
      default:
        return '48px';
    }
  };

  const getFooterHeight = () => {
    switch (screenCategory) {
      case 'mobile':
        return '85px';
      case 'medium':
        return '132px';
      case 'desktop':
      default:
        return '132px';
    }
  };

  const getFooterFontSize = () => {
    switch (screenCategory) {
      case 'mobile':
        return '20px';
      case 'medium':
        return '44px';
      case 'desktop':
      default:
        return '48px';
    }
  };

  const getFooterGap = () => {
    switch (screenCategory) {
      case 'mobile':
        return '30px';
      case 'medium':
        return '50px';
      case 'desktop':
      default:
        return '80px';
    }
  };

  const getIconSize = () => {
    switch (screenCategory) {
      case 'mobile':
        return '30px';
      case 'medium':
        return '54px';
      case 'desktop':
      default:
        return '57px';
    }
  };

  const getIconGap = () => {
    switch (screenCategory) {
      case 'mobile':
        return '36px';
      case 'medium':
        return '64px';
      case 'desktop':
      default:
        return '68px';
    }
  };

  const getMainImage = () => {
    switch (screenCategory) {
      case 'mobile':
        return PetahMobile;
      case 'medium':
      case 'desktop':
      default:
        return Petah;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`body { margin: 0; padding: 0; }`}</style>
      <div
        style={{
          backgroundColor: '#721D08',
          color: 'white',
          height: getHeaderHeight(),
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '0 20px',
        }}
      >
        <p style={{ margin: 0, fontSize: getHeaderFontSize() }}>
          Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!
        </p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <img
          src={getMainImage()}
          style={{
            width: '95%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            marginTop: '5vh',
            marginBottom: '5vh',
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: '#721D08',
          height: getFooterHeight(),
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: getFooterGap(),
        }}
      >
        <span style={{ fontSize: getFooterFontSize() }}>Contact</span>
        <div
          style={{
            display: 'flex',
            gap: getIconGap(),
          }}
        >
          <a href="">
            <img
              src={instagram}
              style={{ width: getIconSize(), height: getIconSize(), display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={facebook}
              style={{ width: getIconSize(), height: getIconSize(), display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={youtube}
              style={{ width: getIconSize(), height: getIconSize(), display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={twitch}
              style={{ width: getIconSize(), height: getIconSize(), display: 'block' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;