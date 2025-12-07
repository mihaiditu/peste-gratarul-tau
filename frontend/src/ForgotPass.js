import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScreenCategory } from './ScreenCategory.js';

import mail from './assets/images/mail.svg';

function ForgotPass() {
  const navigate = useNavigate();
  const [screenCategory, setScreenCategory] = useState('desktop');
  
  const [formData, setFormData] = useState({
    email: ''
  });

  useEffect(() => {
    const updateCategory = () => setScreenCategory(getScreenCategory());
    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No functionality as requested
    console.log("Send password reset to:", formData.email);
  };

  const getBoxWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '380px';
      case 'medium': return '500px';
      default: return '703px';
    }
  };

  const getBoxPadding = () => {
    switch (screenCategory) {
      case 'mobile': return '30px';
      case 'medium': return '30px';
      default: return '40px';
    }
  };

  const getTitleSize = () => {
    switch (screenCategory) {
      case 'mobile': return '26px';
      case 'medium': return '28px';
      default: return '36px';
    }
  };

  const getFormWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '100%';
      case 'medium': return '400px';
      default: return '515px';
    }
  };

  const getInputFontSize = () => {
    switch (screenCategory) {
      case 'mobile': return '16px';
      case 'medium': return '16px';
      default: return '18px';
    }
  };

  const getInputMargin = () => {
    switch (screenCategory) {
      case 'mobile': return '20px';
      case 'medium': return '20px';
      default: return '30px';
    }
  };

  const getButtonWidth = () => {
    switch (screenCategory) {
      case 'mobile': return '260px';
      case 'medium': return '280px';
      default: return '344px';
    }
  };

  const getButtonHeight = () => {
    switch (screenCategory) {
      case 'mobile': return '60px';
      case 'medium': return '60px';
      default: return '74px';
    }
  };

  const getButtonFontSize = () => {
    switch (screenCategory) {
      case 'mobile': return '28px';
      case 'medium': return '28px';
      default: return '36px';
    }
  };

  const getButtonMarginTop = () => {
    switch (screenCategory) {
      case 'mobile': return '30px';
      case 'medium': return '35px';
      default: return '50px';
    }
  };

  const getTextFontSize = () => {
    switch (screenCategory) {
      case 'mobile': return '14px';
      case 'medium': return '15px';
      default: return '18px';
    }
  };

  const getTextMarginTop = () => {
    switch (screenCategory) {
      case 'mobile': return '15px';
      case 'medium': return '15px';
      default: return '20px';
    }
  };

  const getIconSize = () => {
    switch (screenCategory) {
      case 'mobile': return '32px';
      case 'medium': return '32px';
      default: return '40px';
    }
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ffffff',
    marginBottom: getInputMargin(),
    paddingBottom: '5px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: getInputFontSize(),
    fontFamily: 'Montserrat',
  };

  const iconStyle = {
    width: getIconSize(),
    height: getIconSize(),
    marginRight: '10px'
  };

  return (
    <div style={{ 
      width: getBoxWidth(),
      height: getBoxWidth(),
      backgroundColor: '#721D08',
      padding: getBoxPadding(),
      borderRadius: '25px',
      boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Centered vertically since content is less
      gap: '20px',
      zIndex: 10 
    }}>
      <h2 style={{ 
        fontFamily: 'Montserrat', 
        color: '#ffffff', 
        marginBottom: '20px',
        fontSize: getTitleSize(),
        textAlign: 'center'
      }}>
        Forgot password
      </h2>

      <form onSubmit={handleSubmit} style={{ width: getFormWidth(), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={inputContainerStyle}>
          <img src={mail} alt="email icon" style={iconStyle} />
          <input 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            style={inputStyle} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button 
          type="submit" 
          style={{
            width: getButtonWidth(),
            height: getButtonHeight(),
            padding: '15px',
            marginTop: getButtonMarginTop(),
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: getButtonFontSize(),
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#009C41'}
        >
          Send
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p 
          style={{ 
            marginTop: getTextMarginTop(), 
            fontFamily: 'Montserrat', 
            cursor: 'pointer',
            color: '#ccc',
            fontSize: getTextFontSize()
          }}
          onClick={() => navigate('/')} // Assuming '/' is login, change if needed
        >
        </p>
      </div>
    </div>
  );
}

export default ForgotPass;