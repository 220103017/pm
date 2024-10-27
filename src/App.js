import React, { useState, useEffect } from 'react';
import Header from './components/header';
import AuthPage from './components/AuthPage';
import SearchSection from './components/SearchSection';
import ChatView from './components/ChatView';
import SearchHistory from './components/SearchHistory';
import Recommendations from './components/Recommendations';
import Notes from './components/Notes';
import './style.css';

function App() {
  const [chats, setChats] = useState([]); // Store chat history
  const [selectedChat, setSelectedChat] = useState(null); // Track the currently selected chat
  const [authPageOpen, setAuthPageOpen] = useState(false); // Auth modal state
  const [authType, setAuthType] = useState(null); // Type of authentication (login/register)
  const [aiResponse, setAiResponse] = useState(''); // Store AI response

  // Load chats from localStorage on app load
  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats'));
    if (storedChats) {
      setChats(storedChats);
    }
  }, []);

  // Save chats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  // Handle search and AI response
  const handleSearch = (query) => {
    const userMessage = { text: query, sender: 'user' };
    const aiMessage = { text: `AI Response to: ${query}`, sender: 'ai' };

    setAiResponse(aiMessage.text);

    if (selectedChat !== null) {
      // Update the selected chat with new messages
      const updatedChats = chats.map((chat, index) => {
        if (index === selectedChat) {
          return { ...chat, messages: [...chat.messages, userMessage, aiMessage] };
        }
        return chat;
      });
      setChats(updatedChats);
    } else {
      // If no chat is selected, create a new chat
      const newChat = { title: query.substring(0, 15), messages: [userMessage, aiMessage] };
      setChats([newChat, ...chats]);
      setSelectedChat(0);
    }
  };

  // Open the authentication modal
  const handleAuthPageOpen = (type) => {
    setAuthType(type);
    setAuthPageOpen(true);
  };

  // Close the authentication modal
  const handleAuthPageClose = () => {
    setAuthPageOpen(false);
  };

  // Create a new chat
  const createNewChat = () => {
    const newChat = { title: '', messages: [] };
    setChats([newChat, ...chats]);
    setSelectedChat(0);
  };

  // Select a chat from the history
  const handleChatSelect = (index) => {
    setSelectedChat(index);
  };

  // Delete a chat from the history
  const handleDeleteChat = (index) => {
    const updatedChats = chats.filter((_, i) => i !== index);
    setChats(updatedChats);
    if (selectedChat === index) {
      setSelectedChat(null); // Deselect chat if it's the one being deleted
    }
  };

  // Automatically set the chat title after the first message
  useEffect(() => {
    if (selectedChat !== null && chats[selectedChat].messages.length > 0 && chats[selectedChat].title === '') {
      const firstMessage = chats[selectedChat].messages[0].text;
      const updatedChats = chats.map((chat, index) => {
        if (index === selectedChat) {
          return { ...chat, title: firstMessage.substring(0, 15) };
        }
        return chat;
      });
      setChats(updatedChats);
    }
  }, [selectedChat, chats]);

  return (
    <div className="app-container">
      <Header onAuthPageOpen={handleAuthPageOpen} />

      {/* Authentication Page */}
      {authPageOpen ? (
        <AuthPage authType={authType} onClose={handleAuthPageClose} />
      ) : (
        <div className="main-content-container">
          <div className="left-section">
            <SearchHistory
              history={chats}
              onNewChat={createNewChat}
              onChatSelect={handleChatSelect}
              onDeleteChat={handleDeleteChat} // Pass handleDeleteChat here
            />
            <Notes />
          </div>

          <div className="center-section">
            <SearchSection onSearch={handleSearch} aiResponse={aiResponse} />
            {selectedChat !== null ? (
              <ChatView chat={chats[selectedChat]} />
            ) : (
              <p className="no-chat-selected">Select or start a new chat to begin!</p>
            )}
          </div>

          <div className="right-section">
            <Recommendations />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
