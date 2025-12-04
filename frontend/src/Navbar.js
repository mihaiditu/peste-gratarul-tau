import Group89 from './assets/images/Group 89.svg';

function Navbar() {
  return (
    <div
      style={{
        width: '100%',
        height: '97px',
        backgroundColor: '#721D08',
        borderRadius: '0 0 25px 25px',
        boxShadow: '0px 1px 14px #021B2C',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={Group89}
        style={{ height: '56px', marginLeft: '38px', display: 'block' }}
      />
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '100px', alignItems: 'center', marginRight: '40px' }}>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', fontFamily: 'Montserrat', fontWeight: 'normal' }}>
          Best grills
        </button>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', fontFamily: 'Montserrat', fontWeight: 'normal' }}>
          Login
        </button>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', fontFamily: 'Montserrat', fontWeight: 'normal' }}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;