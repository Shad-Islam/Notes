import "./App.css";
import { useState } from "react";

function App() {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "My first note" },
    { id: 2, title: "My second note" },
  ]);

  const createHandler = (event) => {
    event.preventDefault();
    if (!noteTitle) {
      return alert("Please Enter Note Title");
    }
    const newNote = {
      id: Date.now + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNotetitle("");
  };

  const removeHandler = () => {};
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
        {/* {console.log({ noteTitle })}
        {console.log({ notes })} */}

        <button type="submit">Add Note</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button>Edit</button>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
