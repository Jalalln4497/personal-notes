import React from 'react';

function NoteActionButton({ id, archived, archivedNote, nameButton }) {
  return <button className="note-item__archive-button" onClick={() => archivedNote({ id, archived })} >{nameButton}</button>
}

export default NoteActionButton;
