import "./App.css";
import { useState } from "react";

function App() {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([]);

  // create button
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
  return (
    <>
      <form onSubmit={createHandler}>
        <input
          type="text"
          value={noteTitle}
          onChange={(event) => {
            setNotetitle(event.target.value);
          }}
        />

        <button type="submit">Add Note</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button>Edit</button>
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
