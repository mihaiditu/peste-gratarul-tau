import React from 'react';
import Petah from './assets/images/Group 111.svg';
import instagram from './assets/images/instagram.svg';
import facebook from './assets/images/facebook.svg';
import youtube from './assets/images/youtube.svg';
import twitch from './assets/images/twitch.svg';

function Homepage() {
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
          height: '182px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <p style={{ margin: 20, fontSize: '48px' }}>
          Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!
        </p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={Petah}
          style={{
            width: '95%',
            objectFit: 'cover',
            display: 'block',
            marginTop: '5vh',
            marginBottom: '5vh',
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: '#721D08',
          height: '132px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '80px',
        }}
      >
        <span style={{ fontSize: '48px' }}>Contact</span>
        <div
          style={{
            display: 'flex',
            gap: '80px',
          }}
        >
          <a href="">
            <img
              src={instagram}
              style={{width: '64px', height: '64px', display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={facebook}
              style={{width: '64px', height: '64px', display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={youtube}
              style={{width: '64px', height: '64px', display: 'block' }}
            />
          </a>
          <a href="">
            <img
              src={twitch}
              style={{width: '64px', height: '64px', display: 'block' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;