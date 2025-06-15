import React from 'react';
import ReactMarkdown from 'react-markdown'; // ✅ Add this import

const styles = {
  dialogOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogBoxLarge: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
    width: '600px',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
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
  markdownContent: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
};

const AssessmentDialog = ({ open, content, onClose }) => {
  if (!open) return null;

  return (
    <div style={styles.dialogOverlay}>
      <div style={styles.dialogBoxLarge}>
        <h2>Assessment Result</h2>
        {/* ✅ Use ReactMarkdown instead of <pre> */}
        <div style={styles.markdownContent}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <button style={styles.skillBtnCenter} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AssessmentDialog;
