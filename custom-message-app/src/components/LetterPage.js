import React, { useState } from 'react';
import './LetterPage.css'; // Import CSS for animations

const LetterPage = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const decryptMessage = (text, shift) => {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      // Decrypt uppercase letters
      if (charCode >= 65 && charCode <= 90) {
        decryptedText += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
      }
      // Decrypt lowercase letters
      else if (charCode >= 97 && charCode <= 122) {
        decryptedText += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
      }
      // Keep non-alphabetic characters unchanged
      else {
        decryptedText += text[i];
      }
    }
    return decryptedText;
  };

  const handleClick = async () => {
    try {
      const response = await fetch('/message.txt');
      if (!response.ok) {
        throw new Error('Failed to fetch message');
      }
      const text = await response.text();
      const decryptedText = decryptMessage(text, 3); // You can change the shift value here
      setMessage(decryptedText);
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
