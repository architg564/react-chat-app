// src/components/Conversation.js

import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Conversation = ({ conversation }) => {
  const [messages, setMessages] = useState(conversation.messages || []);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'user', // You might want to identify the sender here
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className="conversation">
      <h2>{conversation.contactName}</h2>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Conversation;
