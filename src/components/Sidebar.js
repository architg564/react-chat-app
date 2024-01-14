// src/components/Sidebar.js

import React from 'react';

const Sidebar = ({ conversations, onSelectConversation }) => {
  const handleSelectConversation = (conversation) => {
    onSelectConversation(conversation);
  };

  return (
    <div className="sidebar">
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id} onClick={() => handleSelectConversation(conversation)}>
            {conversation.contactName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
