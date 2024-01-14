// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import NewConversationButton from './components/NewConversationButton';
import Modal from './components/Modal';
import Conversation from './components/Conversation';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is your profile page.</p>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conversations, setConversations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    // For simplicity, we'll use dummy data here
    const dummyConversations = [
      { id: 1, contactName: 'John Doe', lastMessage: 'Hello!' },
      { id: 2, contactName: 'Jane Smith', lastMessage: 'How are you?' },
    ];

    setConversations(dummyConversations);
  }, []);

  const handleNewConversation = (newConversation) => {
    setConversations([...conversations, newConversation]);
  };

  // Filter conversations based on the search term
  const filteredConversations = conversations.filter((conversation) =>
    conversation.contactName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <Router>
      <div className="app-container">
      <Sidebar conversations={filteredConversations} onSelectConversation={handleSelectConversation} />
        <div className="content">
          <SearchBar setSearchTerm={setSearchTerm} />
          <NewConversationButton
            existingConversations={conversations}
            onNewConversation={handleNewConversation}
          />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            {selectedConversation && (
              <Route
                path={`/conversation/${selectedConversation.id}`}
                element={<Conversation conversation={selectedConversation} />}
              />
            )}
          </Routes>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2>Select a contact</h2>
            <ul>
              {/* Dummy contacts */}
              <li onClick={() => handleNewConversation({ id: 3, contactName: 'Alice Johnson' })}>
                Alice Johnson
              </li>
              <li onClick={() => handleNewConversation({ id: 4, contactName: 'Bob Williams' })}>
                Bob Williams
              </li>
            </ul>
          </Modal>
        )}
      </div>
    </Router>
  );
};

export default App;
