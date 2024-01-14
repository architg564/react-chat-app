// src/components/MessageInput.js

import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSendMessage = () => {
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="message-input">
      <textarea
        rows="3"
        placeholder="Type your message..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
