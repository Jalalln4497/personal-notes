import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ id, title, body, archived, createdAt, formatDate, deleteNote, archivedNote }) {
  return (
    <section className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} formatDate={formatDate} />
      <NoteItemAction id={id} archived={archived} deleteNote={deleteNote} archivedNote={archivedNote} />
    </section>
  );
}

export default NoteItem;
