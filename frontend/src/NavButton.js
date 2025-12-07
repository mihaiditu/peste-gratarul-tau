import React, { useState } from 'react';

const NavButton = ({ children, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        borderRadius: '8px',
        padding: '8px 12px',
        transition: 'background-color 0.2s ease',
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default NavButton;