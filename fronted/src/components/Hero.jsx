import React from 'react';

const accentGradient = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)';
const accentGradientAlt = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';

// Use a simple, aesthetic doctor SVG illustration from a reliable CDN
const premiumDoctorSVG = 'https://www.svgrepo.com/show/331412/doctor.svg'; // fallback if not found: use https://www.svgrepo.com/show/331412/doctor.svg

const Hero = () => {
  const styles = {
    section: {
      width: '100%',
      minHeight: '90vh',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
    container: {
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '40px',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: '32px',
      boxShadow: '0 8px 48px 0 #bfc9d8cc, 0 2px 16px #fff8',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '48px',
    },
    left: {
      flex: 1,
      minWidth: '280px',
    },
    heading: {
      fontSize: '3.2rem',
      fontWeight: 900,
      color: '#232946',
      marginBottom: '24px',
      lineHeight: '1.2',
      textShadow: '0 4px 32px #fff8, 0 2px 8px #0002',
    },
    subheading: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '36px',
      maxWidth: '500px',
      textShadow: '0 1px 4px #fff2',
    },
    button: {
      background: accentGradient,
      color: '#fff',
      padding: '16px 36px',
      fontSize: '1.15rem',
      fontWeight: 700,
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      boxShadow: '0 2px 16px #43e97b55',
      letterSpacing: '0.02em',
    },
    buttonHover: {
      background: accentGradientAlt,
    },
    right: {
      flex: 1,
      minWidth: '280px',
      textAlign: 'center',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      filter: 'drop-shadow(0 4px 32px #43e97b44)',
      borderRadius: '24px',
      background: 'rgba(255,255,255,0.01)',
      boxShadow: '0 2px 24px #43e97b22',
    },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Meet <span style={{ background: accentGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dr.AI</span> —
            <br /> Your Confidence Builder
          </h1>
          <p style={styles.subheading}>
            Chat with your own voice-powered AI assistant that listens, understands,
            and responds to you like a real patient. Perfect for quick info, fun demos, or healthcare hacks.
          </p>
          <button
            style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            onClick={() => {
              const el = document.getElementById('features');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </button>
        </div>

        <div style={styles.right}>
          <img
            src={premiumDoctorSVG}
            alt="Premium Healthcare Illustration"
            style={styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
  