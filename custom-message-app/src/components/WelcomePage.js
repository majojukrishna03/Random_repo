// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Import CSS for animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1 className="fade-in display-4">Welcome Dheeraj</h1>
      <br></br>
      <Link to="/envelope" className="btn btn-primary mt-3">You have a message from Murali!</Link>
    </div>
  );
}

export default WelcomePage;
