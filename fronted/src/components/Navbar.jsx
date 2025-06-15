import React from 'react';

const accentGradient = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)';

const Navbar = () => {
  const styles = {
    nav: {
      width: '100%',
      padding: '20px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)',
      boxShadow: '0 2px 24px #bfc9d8cc, 0 2px 8px #fff8',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '2px solid #cfdef3',
    },
    logo: {
      fontSize: '28px',
      fontWeight: 900,
      background: accentGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      letterSpacing: '0.04em',
      textShadow: '0 2px 16px #43e97b88',
    },
    navLinks: {
      display: 'flex',
      gap: '36px',
    },
    link: {
      color: '#232946',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 600,
      transition: 'color 0.3s',
      textShadow: '0 1px 4px #fff2',
      letterSpacing: '0.01em',
    },
    linkHover: {
      color: '#43e97b',
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const links = ['Home', 'Features', 'Chatbot', 'About', 'Contact'];

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Dr.AI</div>
    </nav>
  );
};

export default Navbar;
