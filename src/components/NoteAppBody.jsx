import React from 'react';
import NoteList from './NoteList';
import EmptyMessage from './EmptyMessage';
import NoteInput from './NoteInput';

function NoteAppBody({ notesActive, notesArchived, formatDate, deleteNote, archivedNote, addNote }) {
  return (
    <section className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>       
      {
        notesActive.length ? 
        <NoteList 
          notes={notesActive} 
          formatDate={formatDate} 
          deleteNote={deleteNote}  
          archivedNote={archivedNote}
        /> 
        : <EmptyMessage/>
      }

      <h2>Diarsipkan</h2>
      {
        notesArchived.length ? 
        <NoteList 
          notes={notesArchived} 
          formatDate={formatDate} 
          deleteNote={deleteNote}
          archivedNote={archivedNote}
        /> : <EmptyMessage/> 
      }
    </section>
  );
}

export default NoteAppBody;