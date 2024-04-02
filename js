import React, { useState } from "react";
import "./ChatBox.css"; // Make sure the CSS file is named correctly and imported here

const ChatBox = () => {
  const [message, setMessage] = useState("");

  // Handle the change event for the input field
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle the sending of a message (for now, it will just clear the input)
  const handleSend = () => {
    console.log(message); // For now, we just log the message to the console
    setMessage(""); // Clear the message input
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
          {/* Example of a received message */}
          <div className="message received">
            <img src="/path-to-profile.jpg" alt="Profile" className="profile-picture" />
            <div className="message-bubble">
              <p>This AI chatbot has been developed to optimize communication and simplify work processes, ultimately leading to smoother operations.</p>
            </div>
          </div>
          {/* Example of a sent message */}
          <div className="message sent">
            <div className="message-bubble">
              <p>Thank You :)</p>
            </div>
            <img src="/path-to-profile.jpg" alt="Profile" className="profile-picture" />
          </div>
          {/* Add more messages here */}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            placeholder="Type a new message here" 
            value={message}
            onChange={handleChange}
          />
          <button onClick={handleSend}>Send</button>
          {/* Add icons if needed */}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
