import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getScreenCategory } from './ScreenCategory.js';

import mail from './assets/images/mail.svg';
import password from './assets/images/password.svg';

function LoginBox() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [screenCategory, setScreenCategory] = useState('desktop');
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const updateCategory = () => setScreenCategory(getScreenCategory());
    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data);
        alert('Successfully Logged In!');
        navigate('/');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
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

  const getTextMarginBottom = () => {
    switch (screenCategory) {
      case 'mobile': return '20px';
      case 'medium': return '20px';
      default: return '30px';
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
      justifyContent: 'space-between',
      zIndex: 10 
    }}>
      <h2 style={{ 
        fontFamily: 'Montserrat', 
        color: '#ffffff', 
        marginBottom: '0',
        fontSize: getTitleSize(),
        textAlign: 'center'
      }}>
        <div>Bine ai revenit</div>
        <div>mare grătaragiu!</div>
      </h2>

      {error && <p style={{ color: '#ff0000', fontFamily: 'Montserrat', fontSize: getTextFontSize() }}>{error}</p>}

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
        
        <div style={inputContainerStyle}>
          <img src={password} alt="password icon" style={iconStyle} />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
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
          Log in
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p 
          style={{ 
            marginTop: '0', 
            marginBottom: getTextMarginBottom(),
            fontFamily: 'Montserrat', 
            cursor: 'pointer',
            fontSize: getTextFontSize(),
            color: '#e0e0e0',
            textDecoration: 'underline'
          }}
        >
          Forgot password
        </p>

        <p 
          style={{ 
            marginTop: getTextMarginTop(), 
            fontFamily: 'Montserrat', 
            cursor: 'pointer',
            color: '#ccc',
            fontSize: getTextFontSize()
          }}
          onClick={() => navigate('/register')}
        >
          No account? Press here to <span style={{ textDecoration: 'underline', color: '#4469FF' }}>sign up</span>.
        </p>
      </div>
    </div>
  );
}

export default LoginBox;