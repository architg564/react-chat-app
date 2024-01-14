// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search conversations..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
