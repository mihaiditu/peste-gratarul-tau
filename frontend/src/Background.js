import { useState, useEffect, cacheSignal } from 'react';
import Group110 from './assets/images/Group 110.svg';
import Group133 from './assets/images/Group 133.svg';
import Group142 from './assets/images/Group 142.svg';
import PYG from './assets/images/Pimp Your Grill.svg';
import { getScreenCategory } from './ScreenCategory.js';

function Background() {
  const [screenCategory, setScreenCategory] = useState('desktop');

  useEffect(() => {
    const updateCategory = () => {
      setScreenCategory(getScreenCategory());
    };

    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const getBackgroundImage = () => {
    switch (screenCategory) {
      case 'mobile':
        return Group142;
      case 'medium':
        return Group133;
      case 'desktop':
      default:
        return Group110;
    }
  };

  const getPYGsize = () => {
    switch (screenCategory) {
      case 'mobile':
        return '50%';
      case 'medium':
        return '35%';
      case 'desktop':
      default:
        return '30%';
    }
  };

  const getPYGmargin = () => {
    switch (screenCategory) {
      case 'mobile':
        return '0vh';
      case 'medium':
        return '0vh';
      case 'desktop':
      default:
        return '-25vh';
    }
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'grid', 
        gridTemplateAreas: '"stack"',
        marginTop: '10vh',
      }}
    >
      <img
        src={backgroundImage}
        style={{
          width: '95%',
          objectFit: 'cover',
          display: 'block',
          gridArea: 'stack',
        }}
      />

      <img
        src={PYG}
        style={{
          width: getPYGsize(),
          objectFit: 'cover',
          display: 'block',
          gridArea: 'stack',
          placeSelf: 'center',
          marginTop: getPYGmargin(),
        }}
      />
    </div>
  );
}

export default Background;
