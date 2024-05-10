// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'; // Check the correct path
import EnvelopePage from './components/EnvelopePage'; // Check the correct path
import LetterPage from './components/LetterPage'; // Check the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/envelope" element={<EnvelopePage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
