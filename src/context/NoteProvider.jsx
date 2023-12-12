import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const NoteContext = createContext();

function NoteProvider({ children }) {
  // states
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);
  const [noteTitle, setNotetitle] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/notes`)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  // handlers
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

  // update handler
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
    setEdit(false);
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

  const contextValue = {
    edit,
    notes,
    update,
    setEdit,
    setNotes,
    setUpdate,
    noteTitle,
    editHandler,
    setNotetitle,
    createHandler,
    updateHandler,
    removeHandler,
  };
  return (
    <div>
      <NoteContext.Provider value={contextValue}>
        {children}
      </NoteContext.Provider>
    </div>
  );
}

export default NoteProvider;
