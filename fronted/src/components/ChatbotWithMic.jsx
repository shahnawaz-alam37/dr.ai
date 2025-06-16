import React, { useState } from 'react';
import AssessmentDialog from './AssessmentDialog';

const scenarios = [
  {
    title: 'Chest Pain (Doctor-Patient Simulation)',
    description: `Doctor... I’ve been feeling this really sharp pain in my chest...`,
    case_context: "A 45-year-old male with chest pain radiating to the left arm and dizziness while climbing stairs.",
  },
  {
    title: 'Diabetes Check (Doctor-Patient Simulation)',
    description: `You are a doctor. A patient comes for a diabetes check...`,
    case_context: "A 50-year-old with history of high sugar, concerned about diabetes symptoms.",
  },
  {
    title: 'Pediatric Fever (Doctor-Parent Simulation)',
    description: `You are a doctor. A parent brings a child with fever...`,
    case_context: "A 5-year-old child with 3-day fever and reduced appetite, brought by parent.",
  },
];

const ChatbotWithMic = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [showScenario, setShowScenario] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'AI', text: 'Doctor, how can I help you today?' }]);
  const [dialogText, setDialogText] = useState('');
  const [recommendationText, setRecommendationText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [assessmentContent, setAssessmentContent] = useState('');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
  }

  const startListening = () => {
    if (!recognition) return alert("Your browser doesn't support Speech Recognition.");
    setIsListening(true);
    recognition.start();
    recognition.onresult = (e) => setDialogText(e.results[0][0].transcript);
    recognition.onerror = (e) => alert("Speech error: " + e.error);
    recognition.onend = () => setIsListening(false);
  };

  const stopListening = () => recognition?.stop();

  const askPatient = async () => {
  if (!dialogText.trim()) return;

  setMessages((prev) => [...prev, { sender: 'user', text: dialogText }]);

  const res = await fetch('http://localhost:5000/ask-patient', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: dialogText }),
  });

  const data = await res.json();

  setMessages((prev) => [...prev, { sender: 'AI', text: data.reply || "Couldn't understand." }]);

  // 🔊 Add this line to speak the AI reply
  speakWithElevenLabs(data.reply || "Couldn't understand.");

  setDialogText('');
};


  const handleAssessment = async () => {
    const payload = {
      chat_history: messages.map(m => ({ sender: m.sender === 'user' ? 'doctor' : 'patient', text: m.text })),
      case_context: scenarios[selectedScenario].case_context,
    };

    const res = await fetch('http://localhost:5000/assess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setAssessmentContent(data?.evaluation || 'No assessment available.');
    setAssessmentOpen(true);
  };

  const speakWithElevenLabs = async (text) => {
  const apiKey = process.env.ELEVENLABS_API; // <-- Replace with your ElevenLabs API Key
  const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel (default voice)

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.6,
        },
      }),
    });

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error("TTS Error:", error);
  }
};





  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    chatBox: {
      maxHeight: '300px',
      overflowY: 'auto',
      background: '#f9f9f9',
      padding: '12px',
      borderRadius: '10px',
      marginBottom: '12px',
    },
    message: (sender) => ({
      textAlign: sender === 'user' ? 'right' : 'left',
      padding: '8px',
      margin: '6px 0',
      background: sender === 'user' ? '#d0f0fd' : '#e0e0e0',
      borderRadius: '10px',
    }),
    button: {
      marginRight: '10px',
      padding: '10px 16px',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#00809D',
      color: 'white',
      cursor: 'pointer',
    },
    textArea: {
      width: '100%',
      height: '80px',
      marginTop: '10px',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      <h2>{scenarios[selectedScenario].title}</h2>

      <button
      style={styles.button}
      onClick={() => {
        const isNowShown = !showScenario;
        setShowScenario(isNowShown);

        if (isNowShown) {
      // Speak the scenario description when shown
        speakWithElevenLabs(scenarios[selectedScenario].description);
      }
    }}
    >
    {showScenario ? 'Hide' : 'Show'} Scenario
    </button>


      {showScenario && <p>{scenarios[selectedScenario].description}</p>}

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} style={styles.message(msg.sender)}>
            <strong>{msg.sender === 'user' ? 'Doctor' : 'Patient'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div>
        <button style={styles.button} onClick={startListening} disabled={isListening}>
          🎤 {isListening ? 'Listening...' : 'Speak'}
        </button>
        <button style={styles.button} onClick={stopListening}>Stop</button>
        <button style={styles.button} onClick={askPatient}>Send</button>
      </div>

      <textarea
        style={styles.textArea}
        placeholder="Type your follow-up question here..."
        value={dialogText}
        onChange={(e) => setDialogText(e.target.value)}
      />

      

      <button style={{ ...styles.button, marginTop: '20px' }} onClick={handleAssessment}>
        🧠 Assess Skill
      </button>

      <AssessmentDialog open={assessmentOpen} content={assessmentContent} onClose={() => setAssessmentOpen(false)} />
    </div>
  );
};

export default ChatbotWithMic;
