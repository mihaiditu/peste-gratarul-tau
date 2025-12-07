import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getScreenCategory } from './ScreenCategory.js';

import mail from './assets/images/mail.svg';
import password from './assets/images/password.svg';
import person from './assets/images/person.svg';
import phone from './assets/images/phone.svg';

function RegisterBox() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [screenCategory, setScreenCategory] = useState('desktop');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.name, // <--- HERE IS THE FIX: We use the name as the username
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data);
        alert('Successfully Registered!');
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
      case 'mobile': return '22px';
      case 'medium': return '24px';
      default: return '32px';
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
      case 'mobile': return '15px';
      case 'medium': return '16px';
      default: return '20px';
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
      case 'mobile': return '18px';
      case 'medium': return '18px';
      default: return '20px';
    }
  };

  const getIconSize = () => {
    switch (screenCategory) {
      case 'mobile': return '24px';
      case 'medium': return '24px';
      default: return '28px';
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
      zIndex: 10 
    }}>
      <h2 style={{ 
        fontFamily: 'Montserrat', 
        color: '#ffffff', 
        marginBottom: '0',
        fontSize: getTitleSize(),
        textAlign: 'center'
      }}>
        Gata să devii șef pe grătare?
      </h2>

      {error && <p style={{ color: '#ff0000', fontFamily: 'Montserrat', fontSize: getInputFontSize() }}>{error}</p>}

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{ width: getFormWidth(), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={inputContainerStyle}>
            <img src={person} alt="name icon" style={iconStyle} />
            <input 
              type="text" 
              name="name" 
              placeholder="Full name" 
              style={inputStyle} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div style={inputContainerStyle}>
            <img src={phone} alt="phone icon" style={iconStyle} />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Telephone" 
              style={inputStyle} 
              onChange={handleChange} 
              required 
            />
          </div>
          
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

          <div style={inputContainerStyle}>
            <img src={password} alt="confirm password icon" style={iconStyle} />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterBox;