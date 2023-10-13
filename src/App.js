import "./App.css";
import { useState } from "react";

function App() {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);

  // create handler
  const createHandler = (event) => {
    event.preventDefault();
    if (!noteTitle) {
      return alert("Please Enter Note Title");
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNotetitle("");
  };

  //remove button
  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  // edit button
  const editHandler = (note) => {
    setEdit(true);
    setNotetitle(note.title);
    setUpdate(note);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const updatedNoteArray = notes.map((note) => {
      if (note.id === update.id) {
        return { ...note, title: noteTitle };
      } else {
        return note;
      }
    });
    setNotes(updatedNoteArray);
    setNotetitle("");
  };

  return (
    <>
      <form onSubmit={edit ? updateHandler : createHandler}>
        <input
          type="text"
          value={noteTitle}
          onChange={(event) => {
            setNotetitle(event.target.value);
          }}
        />

        <button type="submit">{edit ? "Update Note" : "Add Note"}</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button
              onClick={() => {
                editHandler(note);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                removeHandler(note.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
