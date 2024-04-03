// Contact.jsx
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(''); // Added email state

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`);
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h1>Contact </h1>
      <form onSubmit={handleSubmit}>
        
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Added email input */}
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <input type="submit" value="Submit" className="animated-button" />
      </form>
      <div className="live-chat">
        <img src="https://t4.ftcdn.net/jpg/04/14/83/07/360_F_414830738_8D0XSvkNnTyoQD1KqiboRwYMhzqAaxmY.jpg" alt="Assistant Icon" className="assistant-icon" />
        <p>Live Chat</p>
      </div>
    </div>
  );
}

export default Contact;
