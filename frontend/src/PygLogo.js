import React from 'react';
import PYG from './assets/images/Pimp Your Grill.svg';

const PygLogo = ({ screenCategory }) => {
  const getPYGsize = () => {
    switch (screenCategory) {
      case 'mobile':
        return '60%';
      case 'medium':
        return '45%';
      case 'desktop':
      default:
        return '30%';
    }
  };

  const getPYGmargin = () => {
    switch (screenCategory) {
      case 'mobile':
        return '0%';
      case 'medium':
        return '0%';
      case 'desktop':
      default:
        return '-15%';
    }
  };

  return (
    <img
      src={PYG}
      style={{
        width: getPYGsize(),
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        gridArea: 'stack',
        placeSelf: 'center',
        marginTop: getPYGmargin(),
      }}
    />
  );
};

export default PygLogo;