import React from 'react';
import Navbar from './Navbar';
import Background from './Background';
import RegisterBox from './RegisterBox';

function RegisterPage() {
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
          alignItems: 'center',
          minHeight: 'calc(100vh - 97px)',
          padding: '40px 20px'
        }}>
          <RegisterBox />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;