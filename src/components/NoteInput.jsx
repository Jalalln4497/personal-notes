import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }
  
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      if (event.target.value.length <= 50) {
        return {
          title: event.target.value,
        }
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onAddNoteEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="note-input">
        <h2 className="note-input__title">Buat catatan</h2>
        <div className="note-input__body">
          <form onSubmit={this.onAddNoteEventHandler.bind(this)}>
            <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length} </p>
            <input 
              type="text" 
              value={this.state.title} 
              onChange={this.onTitleChangeEventHandler.bind(this)} 
              placeholder="Judul catatan..." 
            />
            <textarea cols="30" rows="10" value={this.state.body} onChange={this.onBodyChangeEventHandler.bind(this)} placeholder="Tuliskan catatanmu di sini..."></textarea>
            <button type="submit" onClick={this.onAddNoteEventHandler.bind(this)}>Buat</button>
          </form>
        </div>
      </section>
    );
  }
}

export default NoteInput;
