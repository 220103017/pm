import React, { useState } from 'react';
import '../style.css';

function Notes() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenNote = () => {
    setIsNoteOpen(true);
    setNoteTitle('');
    setNoteText('');
    setEditIndex(null);
  };

  const handleCloseNote = () => {
    setIsNoteOpen(false);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    let formattedTitle = '';
    for (let i = 0; i < value.length; i++) {
      formattedTitle += value[i];
      if ((i + 1) % 10 === 0 && i !== value.length - 1) {
        formattedTitle += '\n'; // Force wrapping after 10 characters
      }
    }
    setNoteTitle(formattedTitle);
  };

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveNote = () => {
    if (noteTitle.trim() && noteText.trim()) {
      const updatedNotes = [...notes];
      if (editIndex !== null) {
        updatedNotes[editIndex] = { title: noteTitle, text: noteText };
      } else {
        updatedNotes.push({ title: noteTitle, text: noteText });
      }
      setNotes(updatedNotes);
      setNoteTitle('');
      setNoteText('');
      setIsNoteOpen(false);
    }
  };

  const handleEditNote = (index) => {
    setNoteTitle(notes[index].title.replace(/\n/g, ''));
    setNoteText(notes[index].text);
    setEditIndex(index);
    setIsNoteOpen(true);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="notes-container">
      <button className="notes-button" onClick={handleOpenNote}>
        Take a note
      </button>

      {isNoteOpen && (
        <div className="note-editor-overlay">
          <div className="note-editor-window">
            <button className="close-button" onClick={handleCloseNote}>X</button>
            <h2>{editIndex !== null ? 'Edit Note' : 'New Note'}</h2>
            <input
              type="text"
              value={noteTitle.replace(/\n/g, '')}
              onChange={handleTitleChange}
              placeholder="Note title"
              className="note-title-input"
            />
            <textarea
              value={noteText}
              onChange={handleNoteChange}
              placeholder="Write your note here..."
              className="note-textarea"
            />
            <button className="save-button" onClick={handleSaveNote}>
              Save
            </button>
          </div>
        </div>
      )}

      <div className="notes-scroll">
        {notes.length > 0 && (
          <div className="notes-list">
            {notes.map((note, index) => (
              <div
                key={index}
                className="note-item"
                onClick={() => handleEditNote(index)}
              >
                <h3>{note.title}</h3>
                <button className="delete-icon material-symbols-outlined" onClick={(e) => { e.stopPropagation(); 
                  handleDeleteNote(index); }}>delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
