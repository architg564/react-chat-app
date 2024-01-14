// src/components/NewConversationButton.js

import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const NewConversationButton = ({ existingConversations, onNewConversation }) => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // For simplicity, we'll use dummy data here
    const dummyContacts = [
      { id: 1, contactName: 'John Doe' },
      { id: 2, contactName: 'Jane Smith' },
      { id: 3, contactName: 'Alice Johnson' },
    ];

    setContacts(dummyContacts);
  }, []);

  const handleContactClick = (contact) => {
    const existingConversation = existingConversations.find(
      (conversation) => conversation.contactName === contact.contactName
    );

    if (existingConversation) {
      onNewConversation(existingConversation);
    } else {
      onNewConversation({
        id: Math.max(...existingConversations.map((conv) => conv.id), 0) + 1,
        contactName: contact.contactName,
        lastMessage: '',
      });
    }

    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Conversation</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Select a contact</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id} onClick={() => handleContactClick(contact)}>
                {contact.contactName}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default NewConversationButton;
