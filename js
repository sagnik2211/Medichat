import React, { useState } from "react";
import "./ChatBox.css"; // Ensure the CSS file is linked correctly

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "This AI chatbot has been developed to optimize communication and simplify work processes, ultimately leading to smoother operations.", sender: 'bot' },
    // ... any initial messages can be added here
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle the sending of a message
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const nextMessage = {
        id: messages.length + 1, // simplistic id generation for example purposes
        text: newMessage,
        sender: 'user'
      };
      setMessages([...messages, nextMessage]);
      setNewMessage("");
    }
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  // Function to render the messages
  const renderMessages = () => {
    return messages.map((message) => (
      <div className={`message ${message.sender}`} key={message.id}>
        <img src={message.sender === 'bot' ? "bot-placeholder-image.png" : "user-placeholder-image.png"} alt={message.sender} className="profile-picture" />
        <div className="message-bubble">
          <p>{message.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="chat-container">
      <div className="chat-menu">
        {/* Insert menu icons here */}
      </div>
      <div className="chat-content">
        <div className="search-bar">
          {/* Insert search input and icons here */}
        </div>
        <div className="messages">
          {renderMessages()}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            placeholder="Type a new message here" 
            value={newMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
