import React from 'react';
import Navbar from './Navbar';
import Background from './Background';
import RegisterBox from './RegisterBox';

function RegisterPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ 
        display: 'grid', 
        gridTemplateAreas: '"stack"', 
        flex: 1, 
        alignItems: 'center', 
        justifyItems: 'center',
        position: 'relative'
      }}>
        <div style={{ gridArea: 'stack', width: '100%', zIndex: 1 }}>
          <Background showLogo={false} />
        </div>
        <div style={{ gridArea: 'stack', width: '100%', marginTop: '40px', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
           <RegisterBox />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;