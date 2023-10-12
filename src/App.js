import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "My first note" },
    { id: 2, title: "My second note" },
  ]);
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Add Note</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li>
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
