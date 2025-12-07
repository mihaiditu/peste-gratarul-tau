import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Group89 from './assets/images/Group 89.svg';
import Group89b from './assets/images/Group 89b.svg';
import Group89c from './assets/images/Group 89c.svg';
import Group124 from './assets/images/Group 124.svg';
import { getScreenCategory } from './ScreenCategory.js';
import { useAuth } from './AuthContext.js';
import NavButton from './NavButton';

function Navbar() {
  const [screenCategory, setScreenCategory] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const updateCategory = () => {
      setScreenCategory(getScreenCategory());
    };

    updateCategory();
    window.addEventListener('resize', updateCategory);
    return () => window.removeEventListener('resize', updateCategory);
  }, []);

  const getLogo = () => {
    switch (screenCategory) {
      case 'mobile':
        return Group89c;
      case 'medium':
        return Group89b;
      case 'desktop':
      default:
        return Group89;
    }
  };

  const getNavGap = () => {
    return screenCategory === 'medium' ? '75px' : '85px';
  };

  const getNavbarHeight = () => {
    return screenCategory === 'mobile' ? '75px' : '97px';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div
      style={{
        width: '100%',
        height: getNavbarHeight(),
        backgroundColor: '#721D08',
        borderRadius: '0 0 25px 25px',
        boxShadow: '0px 1px 14px #021B2C',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <img
        src={getLogo()}
        onClick={() => handleNavigation('/')}
        style={{
          height: '56px',
          marginLeft: '38px',
          display: 'block',
          objectFit: 'contain',
          cursor: 'pointer',
        }}
      />

      {screenCategory === 'mobile' ? (
        <div style={{ marginLeft: 'auto', marginRight: '40px', position: 'relative' }}>
          <img
            src={Group124}
            onClick={toggleMenu}
            style={{
              cursor: 'pointer',
              display: 'block',
              height: 'auto',
            }}
          />
          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '50px',
                right: '0',
                width: '133px',
                height: '151px',
                backgroundColor: '#721D08',
                borderRadius: '0',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '5px',
                paddingLeft: '10px',
                zIndex: 101,
              }}
            >
              {isLoggedIn ? (
                <>
                  <NavButton
                    onClick={() => handleNavigation('/profile')}
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Profil
                  </NavButton>
                  <NavButton
                    onClick={() => handleNavigation('/bestgrills')}
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Best grills
                  </NavButton>
                  <NavButton
                    onClick={() => {
                      logout();
                      handleNavigation('/');
                    }}
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Logout
                  </NavButton>
                </>
              ) : (
                <>
                  <NavButton
                    onClick={() => handleNavigation('/bestgrills')}
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Best grills
                  </NavButton>
                  <NavButton
                    onClick={() => handleNavigation('/login')}
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Login
                  </NavButton>
                  <NavButton
                    onClick={() => handleNavigation('/register')} 
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '90%',
                    }}
                  >
                    Register
                  </NavButton>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: getNavGap(),
            alignItems: 'center',
            marginRight: '40px',
          }}
        >
          {isLoggedIn ? (
            <>
              <NavButton onClick={() => handleNavigation('/profile')} style={{ fontSize: '24px' }}>
                Profil
              </NavButton>
              <NavButton onClick={() => handleNavigation('/bestgrills')} style={{ fontSize: '24px' }}>
                Best grills
              </NavButton>
              <NavButton 
                onClick={() => {
                  logout();
                  handleNavigation('/');
                }} 
                style={{ fontSize: '24px' }}
              >
                Logout
              </NavButton>
            </>
          ) : (
            <>
              <NavButton onClick={() => handleNavigation('/bestgrills')} style={{ fontSize: '24px' }}>
                Best grills
              </NavButton>
              <NavButton onClick={() => handleNavigation('/login')} style={{ fontSize: '24px' }}>
                Login
              </NavButton>
              <NavButton onClick={() => handleNavigation('/register')} style={{ fontSize: '24px' }}>
                Register
              </NavButton>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;