import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteProvider";

function NoteForm() {
  const NoteContextvalue = useContext(NoteContext);

  return (
    <>
      <form
        onSubmit={
          NoteContextvalue.edit
            ? NoteContextvalue.updateHandler
            : NoteContextvalue.createHandler
        }
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
