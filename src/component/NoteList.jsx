import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteProvider";

function NoteList() {
  const NoteContextvalue = useContext(NoteContext);
  //remove button
  const removeHandler = (noteId) => {
    const newNotes = NoteContextvalue.notes.filter(
      (note) => note.id !== noteId
    );
    NoteContextvalue.setNotes(newNotes);
  };

  // edit button
  const editHandler = (note) => {
    NoteContextvalue.setEdit(true);
    NoteContextvalue.setNotetitle(note.title);
    NoteContextvalue.setUpdate(note);
  };
  return (
    <>
      <ul className="note-list">
        {NoteContextvalue.notes.map((note) => (
          <li key={note.id} className="note-box">
            <span>{note.title}</span>
            <div className="note-btn">
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
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NoteList;
