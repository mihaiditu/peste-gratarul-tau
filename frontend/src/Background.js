import { useState, useEffect } from 'react';
import Group110 from './assets/images/Group 110.svg';
import Group133 from './assets/images/Group 133.svg';
import Group142 from './assets/images/Group 142.svg';
import { getScreenCategory } from './ScreenCategory.js';
import PygLogo from './PygLogo';

function Background({ showLogo = true }) {
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

      {showLogo && <PygLogo screenCategory={screenCategory} />}
    </div>
  );
}

export default Background;