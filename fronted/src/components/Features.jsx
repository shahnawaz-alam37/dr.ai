// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const accentGradients = [
//   'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
//   'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
//   'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)',
//   'linear-gradient(90deg, #30cfd0 0%, #330867 100%)',
//   'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
// ];

// const BORDER_RADIUS = '22px';

// const Features = () => {
//   const navigate = useNavigate();
//   const [hovered, setHovered] = React.useState(null);

//   const styles = {
//     section: {
//       width: '100%',
//       padding: '60px 20px',
//       background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
//       fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     heading: {
//       textAlign: 'center',
//       fontSize: '2.7rem',
//       fontWeight: 800,
//       color: '#232946',
//       marginBottom: '48px',
//       letterSpacing: '0.01em',
//       textShadow: '0 4px 32px #fff8, 0 2px 8px #0002',
//     },
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       gap: '40px',
//     },
//     wrapper: (hovered, idx) => ({
//       position: 'relative',
//       padding: '2.5px',
//       borderRadius: BORDER_RADIUS,
//       background: hovered ? accentGradients[idx % accentGradients.length] : 'transparent',
//       transition: 'background 0.3s ease',
//       zIndex: 0,
//     }),
//     card: (hovered, idx) => ({
//       background: 'rgba(255,255,255,0.85)',
//       borderRadius: '22px',
//       padding: '36px 24px',
//       width: '320px',
//       textAlign: 'center',
//       boxShadow: hovered
//         ? '0 8px 32px 0 #43e97b55, 0 2px 16px #bfc9d8cc'
//         : '0 4px 24px 0 #bfc9d8cc',
//       border: `2.5px solid transparent`,
//       backgroundClip: 'padding-box',
//       position: 'relative',
//       cursor: 'pointer',
//       color: '#232946',
//       transition: 'transform 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.35s, border 0.35s',
//       transform: hovered ? 'translateY(-2px) scale(1.04)' : 'none',
//       zIndex: hovered ? 2 : 1,
//       overflow: 'hidden',
//       borderImage: hovered ? accentGradients[idx % accentGradients.length] + ' 1' : 'none',
//       outline: hovered ? '2.5px solid #fff2' : 'none',
//       backdropFilter: 'blur(8px)',
//       WebkitBackdropFilter: 'blur(8px)',
//     }),
//     icon: idx => ({
//       fontSize: '44px',
//       marginBottom: '18px',
//       background: accentGradients[idx % accentGradients.length],
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       filter: 'drop-shadow(0 2px 12px #43e97b88)',
//       zIndex: 1,
//     }),
//     title: {
//       fontSize: '1.35rem',
//       fontWeight: 700,
//       marginBottom: '12px',
//       color: '#232946',
//       letterSpacing: '0.01em',
//       textShadow: '0 2px 8px #fff2',
//       zIndex: 1,
//     },
//     description: {
//       fontSize: '1.05rem',
//       color: '#4b5563',
//       lineHeight: '1.7',
//       textShadow: '0 1px 4px #fff2',
//       zIndex: 1,
//     },
//   };

//   const features = [
//     {
//       icon: '🎙️',
//       title: 'Voice-Based Chat',
//       description:
//         'Speak naturally to Dr.AI using your mic. Powered by Web Speech API and speech-to-text AI.',
//     },
//     {
//       icon: '🧠',
//       title: 'AI Study Sprint',
//       description:
//         'Command your study time . AI delivers instant , tailored medical insights for ultimate efficiency.',
//     },
//   ];

//   return (
//     <section id="features" style={styles.section}>
//       <h2 style={styles.heading}>Features</h2>
//       <div style={styles.container}>
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             style={styles.wrapper(hovered === index, index)}
//             onMouseEnter={() => setHovered(index)}
//             onMouseLeave={() => setHovered(null)}
//             onClick={feature.title === 'Voice-Based Chat' ? () => navigate('/simulation') : undefined}
//             role="button"
//             tabIndex={0}
//           >
//             <div style={styles.card(hovered === index, index)}>
//               <span style={styles.icon(index)}>{feature.icon}</span>
//               <h3 style={styles.title}>{feature.title}</h3>
//               <p style={styles.description}>{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;

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

const Features = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState(null);

  const styles = {
    section: {
      width: '100%',
      padding: '60px 20px',
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
      fontWeight: 800,
      color: '#232946',
      marginBottom: '48px',
      letterSpacing: '0.01em',
      textShadow: '0 4px 32px #fff8, 0 2px 8px #0002',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
    },
    wrapper: (hovered, idx) => ({
      position: 'relative',
      padding: '2.5px',
      borderRadius: BORDER_RADIUS,
      background: hovered ? accentGradients[idx % accentGradients.length] : 'transparent',
      transition: 'background 0.3s ease',
      zIndex: 0,
      overflow: 'hidden', // Important for preserving borderRadius
    }),
    card: (hovered, idx) => ({
      background: 'rgba(255,255,255,0.85)',
      borderRadius: BORDER_RADIUS,
      padding: '36px 24px',
      width: '320px',
      textAlign: 'center',
      boxShadow: hovered
        ? `0 8px 32px 0 #43e97b55, 0 2px 16px #bfc9d8cc, inset 0 0 0 2px #fff4`
        : '0 4px 24px 0 #bfc9d8cc',
      position: 'relative',
      cursor: 'pointer',
      color: '#232946',
      transition:
        'transform 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.35s, border 0.35s',
      transform: hovered ? 'translateY(-2px) scale(1.04)' : 'none',
      zIndex: hovered ? 2 : 1,
      overflow: 'hidden',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }),
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

  const features = [
    {
      icon: '🎙️',
      title: 'Voice-Based Chat',
      description:
        'Speak naturally to Dr.AI using your mic. Powered by Web Speech API and speech-to-text AI.',
    },
    {
      icon: '🧠',
      title: 'AI Study Sprint',
      description:
        'Command your study time. AI delivers instant, tailored medical insights for ultimate efficiency.',
    },
  ];

  return (
    <section id="features" style={styles.section}>
      <h2 style={styles.heading}>Features</h2>
      <div style={styles.container}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={styles.wrapper(hovered === index, index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={
              feature.title === 'Voice-Based Chat'
                ? () => navigate('/simulation')
                : undefined
            }
            role="button"
            tabIndex={0}
          >
            <div style={styles.card(hovered === index, index)}>
              <span style={styles.icon(index)}>{feature.icon}</span>
              <h3 style={styles.title}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
