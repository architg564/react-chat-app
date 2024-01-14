// src/components/MessageList.js

import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
