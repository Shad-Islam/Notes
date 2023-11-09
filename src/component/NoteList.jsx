import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteProvider";

function NoteList() {
  const NoteContextvalue = useContext(NoteContext);

  return (
    <>
      <ul className="note-list">
        {NoteContextvalue.notes.map((note) => (
          <li key={note.id} className="note-box">
            <span>{note.title}</span>
            <div className="note-btn">
              <button
                onClick={() => {
                  NoteContextvalue.editHandler(note);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  NoteContextvalue.removeHandler(note.id);
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
