import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, formatDate, deleteNote, archivedNote }) {
  return (
    <article className="notes-list">
      {
        notes.map((note) => (
          <NoteItem 
            key={note.id} 
            {...note} 
            formatDate={formatDate} 
            deleteNote={deleteNote}
            archivedNote={archivedNote} 
          />
        ))
      }
    </article>
  );
}

export default NoteList;
