import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messages.length,
      text: userInput,
      sender: 'user'
    };
    setMessages([...messages, newMessage]);
    setUserInput('');
    // Here you would typically send the message to the backend server or chatbot API
    // and wait for a response to add to the messages array.
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="input-box"
          placeholder="Type your message here..."
          autoFocus
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default App;
