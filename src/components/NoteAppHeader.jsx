import React from 'react';
import NoteAppSearch from './NoteAppSearch';

function NoteAppHeader({ searchEventHandler }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      {/* <NoteAppSearch /> */}
      <NoteAppSearch searchEventHandler={searchEventHandler} />
    </header>
  );
}

export default NoteAppHeader;