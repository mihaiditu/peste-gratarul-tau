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

  const backgroundImage = getBackgroundImage();

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        display: 'grid',
        gridTemplateAreas: '"stack"',
        placeItems: 'center',
        marginTop: '10vh',
        marginBottom: '10vh',
      }}
    >
      <img
        src={backgroundImage}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          gridArea: 'stack',
        }}
      />

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
    </div>
  );
}

export default Background;