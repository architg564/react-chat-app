// Chat.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';

const Chat = ({ messages }) => {
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Implement logic to send a new message
    // This is where you would typically make an API call or update state in a Redux store
    const newMessageObject = {
      id: messages.length + 1,
      text: newMessage,
      timestamp: new Date().toISOString(),
      sender: 'Dummy User', // Replace with actual user information
    };

    // Add the new message to the state
    // setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className="chat-wrapper">
      {messages.map((message) => (
        <div key={message.id} className="message-wrapper">
          <div>{message.sender}</div>
          <div>{message.text}</div>
        </div>
      ))}
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
