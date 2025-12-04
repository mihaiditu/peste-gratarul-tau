import Group89 from './images/Group 89.svg';

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
    </div>
  );
}

export default Navbar;