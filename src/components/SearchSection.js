import React, { useState } from 'react';

function SearchSection({ onSearch, aiResponse }) {
  const [query, setQuery] = useState('');

  const handleSearchClick = () => {
    if (query.trim() === '') return; // Prevent empty search
    onSearch(query);
    setQuery(''); // Clear the input after searching
  };

  return (
    <div className="search-section-container">
      <h2 className="search-title">You're not alone. Search for guidance, resources, and support!</h2>
      <div className="search-bar-container">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tell me about your problems..."
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {aiResponse && <p className="ai-response">{aiResponse}</p>}
    </div>
  );
}

export default SearchSection;
