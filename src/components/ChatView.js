import React from 'react';

function ChatView({ chat }) {
  return (
    <div className="chat-view-container">
      {chat.messages.length > 0 ? (
        chat.messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
}

export default ChatView;
