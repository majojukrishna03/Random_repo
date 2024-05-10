// EnvelopePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EnvelopePage.css'; // Import CSS for animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EnvelopePage = () => {
  const [showBalloons, setShowBalloons] = useState(false);

  const handleEnvelopeClick = () => {
    setShowBalloons(true);
  };

  return (
    <div className="envelope-container">
      <h1 className="display-4"></h1>
      <br></br>
      <Link to="/letter" onClick={handleEnvelopeClick}>
        <img src="envelope.jpg" alt="Envelope" className="envelope img-fluid" />
      </Link>
    </div>
  );
}

export default EnvelopePage;
