import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const NoteContext = createContext();

function NoteProvider({ children }) {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);

  const contextValue = {
    edit,
    notes,
    update,
    setEdit,
    setNotes,
    setUpdate,
    noteTitle,
    setNotetitle,
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
