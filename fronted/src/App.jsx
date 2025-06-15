import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routers/Home'; // Adjust the path as necessary
import ChatbotWithMic from './components/ChatbotWithMic';
import Cards from './components/Cards';

// import Chatbot from './components/Chatbot'; // Uncomment if you have this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={  <Cards />} />
        <Route path="/simulation/chat" element={  <ChatbotWithMic />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
      </Routes>
    </Router>
  );
}

export default App;