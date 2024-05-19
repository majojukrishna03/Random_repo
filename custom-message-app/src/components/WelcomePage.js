import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      alert("You received a message!");
    }, 4000); // Alert after 2 seconds (assuming the welcome text animation takes 2 seconds)

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // Show button after 5 seconds (2 seconds for the alert delay + 3 seconds delay for the button)

    return () => {
      clearTimeout(alertTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome Dheeraj</h1>
      {showButton && (
        <Link to="/envelope">
          <button className="welcome-button">Open Your Message</button>
        </Link>
      )}
    </div>
  );
}

export default WelcomePage;
