import React, { useState } from 'react';

const accentGradient = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)';
const accentGradientAlt = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
const BORDER_RADIUS = '22px';

const scenarios = [
  {
    title: 'Chest Pain (Doctor-Patient Simulation)',
    description: "Doctor... I’ve been feeling this really sharp pain in my chest, and it shoots down my left arm. It started all of a sudden when I was just climbing the stairs at home. I had to stop and catch my breath — I was really short of breath and even felt a bit dizzy. I don’t know what triggered it, but it scared me. I’ve had mild high blood pressure in the past, but nothing like this has ever happened. And just so you know — I don’t have any allergies that I’m aware of. But this chest pain… it just doesn’t feel right."
  },
  {
    title: 'Diabetes Check (Doctor-Patient Simulation)',
    description: 'You are a doctor. A patient comes for a diabetes check. Ask about symptoms, lifestyle, and provide advice.'
  },
  {
    title: 'Pediatric Fever (Doctor-Parent Simulation)',
    description: 'You are a doctor. A parent brings a child with fever. Take a history, ask about symptoms, and provide guidance.'
  },
  {
    title: 'Mental Health Assessment',
    description: 'You are a doctor. A patient is concerned about their mental health. Ask about mood, sleep, and stress.'
  },
  {
    title: 'Sports Injury',
    description: 'You are a doctor. A patient presents with a sports injury. Take a history, ask about the injury, and provide advice.'
  },
];

const ChatbotWithMic = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [showScenario, setShowScenario] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'AI patient', text: 'Please suggest' },
  ]);
  const [showFollowUpOptions1, setShowFollowUpOptions1] = useState(false);
  const [dialogText1, setDialogText1] = useState('');
  const [showRecommendationOptions, setShowRecommendationOptions] = useState(false);
  const [recommendationText, setRecommendationText] = useState('');

  // API call to backend
  const askPatientAPI = async (questionText) => {
    try {
      const response = await fetch('http://localhost:5000/ask-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: questionText }),
      });
      console.log("request made")
      const data = await response.json();
      console.log(data)
      return data.reply || 'Sorry, I couldn’t understand that.';
    } catch (error) {
      console.error('API error:', error);
      return 'Something went wrong while talking to the patient.';
    }
  };

  const handleFollowUp1 = () => {
    setShowFollowUpOptions1(true);
    setDialogText1('');
  };

  const handleStopFollowUp = async () => {
    if (!dialogText1.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: dialogText1 }]);

    // Call Gemini backend
    const aiResponse = await askPatientAPI(dialogText1);

    // Add AI response
    setMessages((prev) => [...prev, { sender: 'AI', text: aiResponse }]);

    setDialogText1('');
  };

  const handleRecommendation = () => {
    setShowRecommendationOptions(true);
  };

  const handleAssessSkill = () => {
    alert('Skill Assessment: Based on your questions and responses, your clinical reasoning is strong!');
  };

  const styles = {
    section: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      padding: '40px 0',
    },
    column: {
      flex: '1',
      maxWidth: '700px',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: BORDER_RADIUS,
      boxShadow: '0 8px 48px 0 #bfc9d8cc, 0 2px 16px #fff8',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
    },
    explainBtn: {
      background: "#00809D",
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 14px',
      fontWeight: 600,
      fontSize: '0.9rem',
      cursor: 'pointer',
      marginBottom: '12px',
      boxShadow: '0 2px 12px #764ba255',
      width: 'fit-content',
    },
    chatBox: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: '300px',
      border: '1px solid #cfdef3',
      borderRadius: '12px',
      padding: '12px',
      background: '#f4f8fb',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '16px',
    },
    message: (sender) => ({
      alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
      background: sender === 'user' ? accentGradient : '#fff',
      color: sender === 'user' ? '#fff' : '#232946',
      padding: '10px 14px',
      borderRadius: sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      fontSize: '0.95rem',
    }),
    followActions: {
      display: 'flex',
      gap: '12px',
      marginBottom: '14px',
    },
    twoColRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '10%',
      marginTop: '24px',
      width: '100%',
    },
    col45: {
      width: '45%',
      minWidth: '220px',
      display: 'flex',
      flexDirection: 'column',
    },
    miniBtn: {
      background: "#00809D",
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      padding: '6px 14px',
      fontSize: '0.85rem',
      cursor: 'pointer',
      boxShadow: '0 2px 8px #43e97b55',
    },
    miniBtnAlt: {
      background: "#00809D",
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      padding: '6px 14px',
      fontSize: '0.85rem',
      cursor: 'pointer',
      boxShadow: '0 2px 8px #764ba255',
    },
    dialogBox: {
      width: '100%',
      height: '100px',
      marginTop: '12px',
      padding: '10px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      resize: 'vertical',
      fontSize: '1rem',
      fontFamily: 'inherit',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    skillBtnCenter: {
      background: "#00809D",
      color: '#fff',
      border: 'none',
      borderRadius: '22px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '0 2px 8px #43e97b55',
      padding: '10px 32px',
      margin: '18px auto 0 auto',
      display: 'block',
      minWidth: '140px',
      maxWidth: '200px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.column}>
        <button style={styles.explainBtn} onClick={() => setShowScenario(!showScenario)}>
          {showScenario ? 'Hide Scenario' : 'Explain Scenario'}
        </button>
        {showScenario && (
          <div style={{ marginBottom: '14px' }}>
            <strong>{scenarios[selectedScenario].title}</strong>
            <div>{scenarios[selectedScenario].description}</div>
          </div>
        )}

        <div style={styles.chatBox}>
          {messages.map((msg, idx) => (
            <div key={idx} style={styles.message(msg.sender)}>
              <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div style={styles.twoColRow}>
          <div style={styles.col45}>
            <div style={styles.followActions}>
              <button style={styles.miniBtnAlt} onClick={handleFollowUp1}>Ask Follow-Up Questions</button>
            </div>
            {showFollowUpOptions1 && (
              <>
                <div style={styles.followActions}>
                  <button style={styles.miniBtn}>Start</button>
                  <button style={styles.miniBtnAlt} onClick={handleStopFollowUp} >Stop</button>
                </div>
                <textarea
                  style={styles.dialogBox}
                  placeholder="Type the follow-up conversation here..."
                  value={dialogText1}
                  onChange={(e) => setDialogText1(e.target.value)}
                />
              </>
            )}
          </div>

          <div style={styles.col45}>
            <div style={styles.followActions}>
              <button style={styles.miniBtnAlt} onClick={handleRecommendation}>Show Recommendations</button>
            </div>
            {showRecommendationOptions && (
              <>
                <div style={styles.followActions}>
                  <button style={styles.miniBtn}>Start</button>
                  <button style={styles.miniBtnAlt}>Stop</button>
                </div>
                <textarea
                  style={styles.dialogBox}
                  placeholder="Type recommendations here..."
                  value={recommendationText}
                  onChange={(e) => setRecommendationText(e.target.value)}
                />
              </>
            )}
          </div>
        </div>

        <button
          style={styles.skillBtnCenter}
          onClick={handleAssessSkill}
        >
          Assess Skill
        </button>
      </div>
    </section>
  );
};

export default ChatbotWithMic;
