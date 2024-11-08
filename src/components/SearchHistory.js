import React from 'react';

function SearchHistory({ history, onNewChat, onChatSelect, onDeleteChat }) {
  return (
    <div className="search-history-container">
      <h3 className="search-history-title">Search History</h3>
      <div className="chat-list">
        {history.length > 0 ? (
          history.map((chat, index) => (
            <div key={index} className="chat-item">
              <p onClick={() => onChatSelect(index)}>{chat.title || 'Untitled Chat'}</p>
              <button className="delete-icon material-symbols-outlined" onClick={(e) => { e.stopPropagation(); 
                  onDeleteChat(index); }}>delete
                </button>
            </div>
          ))
        ) : (
          <p>No chat history yet.</p>
        )}
      </div>
      <button className="new-chat-button" onClick={onNewChat}>
        + New Chat
      </button>
    </div>
  );
}

export default SearchHistory;
