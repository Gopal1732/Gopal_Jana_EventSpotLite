import React from 'react';

// Component
function SearchBar({ onSearch }) {
  return (
    <input
      type="text"  
      className="search-input"  
      placeholder="Search by event name or location" 
      onChange={(e) => onSearch(e.target.value)}  // Handler
    />
  );
}

export default SearchBar;
