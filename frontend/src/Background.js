import { useState, useEffect } from 'react';
import Group110 from './assets/images/Group 110.svg';
import Group133 from './assets/images/Group 133.svg';
import Group142 from './assets/images/Group 142.svg';
import { getScreenCategory } from './utils/screenUtils';

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

  const backgroundImage = getBackgroundImage();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: '95%',
          objectFit: 'cover',
          display: 'block',
          marginTop: '10vh',
        }}
      />
    </div>
  );
}

export default Background;
