import React from 'react';
import DeleteButton from './DeleteButton';
import NoteActionButton from './NoteActionButton';

function NoteItemAction({ id, archived, deleteNote, archivedNote }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} deleteNote={deleteNote} />
      {
        archived ? 
        <NoteActionButton id={id} archived={archived} archivedNote={archivedNote} nameButton="Pindahkan" />
        : <NoteActionButton id={id} archived={archived} archivedNote={archivedNote} nameButton="Arsipkan" />
      }
    </div>
  );
}

export default NoteItemAction;
