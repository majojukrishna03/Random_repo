import React, { useState } from 'react';
import './LetterPage.css'; // Import CSS for animations

const LetterPage = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = async () => {
    try {
      const response = await fetch('/message.txt');
      if (!response.ok) {
        throw new Error('Failed to fetch message');
      }
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error('Error fetching message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="letter-container">
      <h1 className="display-4"></h1><br></br>
      <div className={isLoading ? "card" : "card with-background"} onClick={handleClick}>
        <div className="card-content">
          {isLoading ? (
            <p className="empty-message">Click to open the message</p>
          ) : (
            <pre className="message">{message}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
