import React from "react";
import "./ChatBox.css";

const ChatBox = () => {
  return (
    <div className="chat-container">
      <div className="chat-menu">
        {/* Menu icon and other items can go here */}
      </div>
      <div className="chat-content">
        <div className="search-bar">
          {/* Search input and icons */}
        </div>
        <div className="messages">
          {/* Map through messages here */}
          <div className="message received">
            <img src="/path-to-profile.jpg" alt="Profile" />
            <div className="message-info">
              <p>This AI chatbot has been developed to optimize communication and simplify work processes, ultimately leading to smoother operations.</p>
            </div>
          </div>
          <div className="message sent">
            <div className="message-info">
              <p>Thank You :)</p>
            </div>
            <img src="/path-to-profile.jpg" alt="Profile" />
          </div>
          {/* More messages */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a new message here" />
          {/* Send button and additional icons */}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
