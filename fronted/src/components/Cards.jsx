import React from 'react';
import { useNavigate } from 'react-router-dom';

const accentGradients = [
  'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)',
  'linear-gradient(90deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
];

const BORDER_RADIUS = '22px';

const Cards = () => {
  const navigate = useNavigate();

  const styles = {
    section: {
      padding: '60px 20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.7rem',
      color: '#232946',
      fontWeight: 800,
      marginBottom: '48px',
      letterSpacing: '0.01em',
      textShadow: '0 4px 32px #fff8, 0 2px 8px #0002',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      justifyItems: 'center',
      marginBottom: '24px',
      overflow: 'visible',
    },
    gridSecond: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      justifyItems: 'center',
      overflow: 'visible',
    },
    wrapper: (hovered, idx) => ({
      position: 'relative',
      padding: '2.5px',
      borderRadius: BORDER_RADIUS,
      background: hovered ? accentGradients[idx % accentGradients.length] : 'transparent',
      transition: 'background 0.3s ease',
      zIndex: 0,
    }),
    card: {
      background: 'rgba(255,255,255,0.85)',
      borderRadius: BORDER_RADIUS,
      padding: '36px 24px',
      width: '290px',
      textAlign: 'center',
      boxShadow: '0 4px 24px 0 #bfc9d8cc',
      position: 'relative',
      cursor: 'pointer',
      color: '#232946',
      transition: 'transform 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.35s',
      overflow: 'hidden',
      zIndex: 1,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    },
    cardHover: {
      transform: 'translateY(-2px) scale(1.04)',
      boxShadow: '0 8px 32px 0 #43e97b55',
    },
    icon: idx => ({
      fontSize: '44px',
      marginBottom: '18px',
      background: accentGradients[idx % accentGradients.length],
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0 2px 12px #43e97b88)',
      zIndex: 1,
    }),
    title: {
      fontSize: '1.35rem',
      fontWeight: 700,
      marginBottom: '12px',
      color: '#232946',
      letterSpacing: '0.01em',
      textShadow: '0 2px 8px #fff2',
      zIndex: 1,
    },
    description: {
      fontSize: '1.05rem',
      color: '#4b5563',
      lineHeight: '1.7',
      textShadow: '0 1px 4px #fff2',
      zIndex: 1,
    },
  };

  const [hovered, setHovered] = React.useState(null);

  const features = [
    {
      icon: '❤️',
      title: 'Chest Pain',
      desc: 'Instantly assess chest pain symptoms and get AI-driven guidance for urgent care or peace of mind.',
    },
    {
      icon: '🩸',
      title: 'Diabetes Check',
      desc: 'Monitor blood sugar, get personalized diabetes tips, and understand your risk in seconds.',
    },
    {
      icon: '👶',
      title: 'Pediatric Fever',
      desc: "Worried about your child's fever? Get safe, evidence-based advice for pediatric care.",
    },
    {
      icon: '🧠',
      title: 'Mental Health Assessment',
      desc: 'Check your mood, stress, and mental well-being with a private, supportive AI conversation.',
    },
    {
      icon: '🤕',
      title: 'Sports Injury',
      desc: 'Quickly evaluate sports injuries and get recovery tips tailored to your activity and symptoms.',
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why Choose Dr.AI?</h2>

      <div style={styles.grid}>
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            style={styles.wrapper(hovered === index, index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate('/simulation/chat')}
          >
            <div style={{ ...styles.card, ...(hovered === index ? styles.cardHover : {}) }}>
              <span style={styles.icon(index)}>{feature.icon}</span>
              <div style={styles.title}>{feature.title}</div>
              <div style={styles.description}>{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.gridSecond}>
        {features.slice(3, 5).map((feature, index) => (
          <div
            key={index + 3}
            style={styles.wrapper(hovered === index + 3, index + 3)}
            onMouseEnter={() => setHovered(index + 3)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate('/simulation/chat')}
          >
            <div style={{ ...styles.card, ...(hovered === index + 3 ? styles.cardHover : {}) }}>
              <span style={styles.icon(index + 3)}>{feature.icon}</span>
              <div style={styles.title}>{feature.title}</div>
              <div style={styles.description}>{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
  