import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteProvider";

function NoteForm() {
  const NoteContextvalue = useContext(NoteContext);

  // create handler
  const createHandler = (event) => {
    event.preventDefault();
    if (!NoteContextvalue.noteTitle) {
      return alert("Please Enter Note Title");
    }
    const newNote = {
      id: Date.now() + "",
      title: NoteContextvalue.noteTitle,
    };
    NoteContextvalue.setNotes([...NoteContextvalue.notes, newNote]);
    NoteContextvalue.setNotetitle("");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const updatedNoteArray = NoteContextvalue.notes.map((note) => {
      if (note.id === NoteContextvalue.update.id) {
        return { ...note, title: NoteContextvalue.noteTitle };
      } else {
        return note;
      }
    });
    NoteContextvalue.setNotes(updatedNoteArray);
    NoteContextvalue.setNotetitle("");
    NoteContextvalue.setEdit(false);
  };
  return (
    <>
      <form
        onSubmit={NoteContextvalue.edit ? updateHandler : createHandler}
        className="form"
      >
        <input
          type="text"
          className="input-field"
          value={NoteContextvalue.noteTitle}
          onChange={(event) => {
            NoteContextvalue.setNotetitle(event.target.value);
          }}
        />

        <button type="submit" className="submit-btn">
          {NoteContextvalue.edit ? "Update Note" : "Add Note"}
        </button>
      </form>
    </>
  );
}

export default NoteForm;
