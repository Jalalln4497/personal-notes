import React from 'react';

function NoteAppSearch({ searchEventHandler }) {
  return (
    <input 
      type="text" 
      className="input-search" 
      onChange={searchEventHandler}
      placeholder="Cari Catatan..." />
  );
}

export default NoteAppSearch;
