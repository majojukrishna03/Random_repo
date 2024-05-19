import React, { useState, useEffect } from 'react';
import './LetterPage.css'; // Import CSS for animations

const LetterPage = () => {
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/message.txt');
        if (!response.ok) {
          throw new Error('Failed to fetch message');
        }
        const text = await response.text();
        const decryptedText = decryptMessage(text, 3); // Adjust the shift value as needed
        setMessage(decryptedText);
        // Simulate loading for 3 seconds before starting message display
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error('Error fetching message:', error);
        setIsLoading(false); // Stop loading animation in case of error
      }
    };

    fetchMessage();
  }, []);

  useEffect(() => {
    if (!isLoading && message) {
      // Start displaying the message after a delay
      setTimeout(() => {
        let currentIndex = 0;

        const typeCharacter = () => {
          // Check if the current character is '#' or if currentIndex exceeds message length
          if (currentIndex >= message.length || message[currentIndex] === '-') {
            setShowCloseButton(true); // Show the close button after the message is displayed
            return; // Stop typing if '-' is encountered or end of message is reached
          }

          setDisplayedMessage((prev) => {
            if (message[currentIndex] === '-') {
              return prev;
            } else {
              return prev + message[currentIndex];
            }
          });
          currentIndex++;

          setTimeout(typeCharacter, 50); // Adjust the typing speed here
        };

        typeCharacter();
      }, 1000); // Add a delay of 1 second before starting the message display animation
    }
  }, [isLoading, message]);

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

  const handleCloseMessage = () => {
    // Clear the message and show the welcome message after 2 seconds
    setMessage('');
    setTimeout(() => {
      setShowCloseButton(false)
      setShowWelcomeMessage(true);
      
    }, 2000);
  };

  return (
    <div className="letter-container">
      {showWelcomeMessage ? (
        <h1 className="welcome-message fade-in">Bye Dheeraj...</h1>
      ) : (
        <div className="card" onClick={() => {}}>
          <div className="card-content">
            {isLoading ? (
              <p className="empty-message blink">Loading message...</p>
            ) : (
              <pre className="message">{displayedMessage}</pre>
            )}
          </div>
        </div>
      )}
      {showCloseButton && (
        <button className="close-button" onClick={handleCloseMessage}>
          Close Message
        </button>
      )}
    </div>
  );
};

export default LetterPage;
