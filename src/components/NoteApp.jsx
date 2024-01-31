import React from 'react';
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notesActive: this.noteActiveList(),
      notesArchived: this.noteArchivedList(),
      latestNotesActive: [],
      latestNotesArchived: [],
    };

    this.state.latestNotesActive = [...this.state.notesActive];
    this.state.latestNotesArchived = [...this.state.notesArchived];
    // console.log('======= search =======');
    // console.log(this.state.latestNotesActive);
    // console.log(this.state.latestNotesArchived);
    // console.log('==============');
  }

  noteActiveList() {
      return getInitialData().filter((note) => note.archived === false);    
  }
  
  noteArchivedList() {
      return getInitialData().filter((note) => note.archived === true);    
  }

  onDeleteButton(id) {
    const notesActive = this.state.notesActive.filter((note) => note.id !== id);
    const notesArchived = this.state.notesArchived.filter((note) => note.id !== id);

    this.setState({ notesActive, notesArchived });
  }
  
  onMoveNoteButton({ id, archived }) {
    if (archived) {
      const notesArchived = this.state.notesArchived.find((note) => note.id === id);
      notesArchived.archived = false;
      
      // console.log('======= archieved =======');
      // console.log(this.state.latestNotesActive);
      // console.log(this.state.latestNotesArchived);
      // console.log('==============');
      this.setState((lastState) => {
        const lastStateNotesArchied = lastState.notesArchived.filter((note) => note.id !== id);
        return {
          notesActive: [
            ...lastState.notesActive,
            notesArchived,
          ],
          notesArchived: [
            ...lastStateNotesArchied,
          ],
          latestNotesArchived: [
            ...lastStateNotesArchied,
          ],
          latestNotesActive: [
            ...lastState.notesActive,
            notesArchived,
          ],
        }
      });

    } else {
      const notesActive = this.state.notesActive.find((note) => note.id === id);
      notesActive.archived = true;
      // console.log('======= active =======');
      // console.log(this.state.latestNotesActive);
      // console.log(this.state.latestNotesArchived);
      // console.log('==============');
      this.setState((lastState) => {
        const lastStateNotesActive = lastState.notesActive.filter((note) => note.id !== id);
        return {
          notesArchived: [
            ...lastState.notesArchived,
            notesActive,
          ],
          notesActive: [
            ...lastStateNotesActive,
          ],
          latestNotesArchived: [
            ...lastState.notesArchived,
            notesActive,
          ],
          latestNotesActive: [
            ...lastStateNotesActive,
          ],
        };
      });
    }
  }
  
  onSearchChangeEvent(event) {
    const searching = event.target.value;
    // console.log('======= search =======');
    // console.log(this.state.latestNotesActive);
    // console.log(this.state.latestNotesArchived);
    // console.log('==============');
    if (searching) {
      const notesActive = this.state.notesActive.filter((note) => note.title.toLowerCase().trim().includes(searching.toLowerCase().trim()));
      const notesArchived = this.state.notesArchived.filter((note) => note.title.toLowerCase().trim().includes(searching.toLowerCase().trim()));
      
      
      this.setState(() => {
        return {
          notesActive: [
            ...notesActive,
          ],
          notesArchived: [
            ...notesArchived,
          ],
        }
      });
    } else {
      // console.log('======= kosong =========');
      // console.log(this);
      // console.log('================');
      this.setState(() => {
        return {
          notesActive: [
            ...this.state.latestNotesActive,
          ],
          notesArchived: [
            ...this.state.latestNotesArchived,
          ],
        }
      });
    }
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((lastState) => {
      return {
        notesActive: [
          ...lastState.notesActive,
          {
            id: +new Date(),
            title,
            body,
            archived: false, 
            createdAt: new Date(),
          }
        ],
        latestNotesActive: [
          ...lastState.notesActive,
          {
            id: +new Date(),
            title,
            body,
            archived: false, 
            createdAt: new Date(),
          }

        ],
      }
    });
  }

  render() {
    return (
      <div className="note-app__content">
        {/* <NoteAppHeader /> */}
        <NoteAppHeader searchEventHandler={this.onSearchChangeEvent.bind(this)} />
        <NoteAppBody 
          notesActive={this.state.notesActive} 
          notesArchived={this.state.notesArchived} 
          formatDate={showFormattedDate}
          deleteNote={this.onDeleteButton.bind(this)}
          archivedNote={this.onMoveNoteButton.bind(this)}
          addNote={this.onAddNoteEventHandler.bind(this)}
        />
      </div>
    );
  }
}

export default NoteApp;
