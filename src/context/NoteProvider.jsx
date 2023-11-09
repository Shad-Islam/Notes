import React from "react";
import { createContext } from "react";

export const NoteContext = createContext();

function NoteProvider({ children }) {
  return (
    <div>
      <NoteContext.Provider>{children}</NoteContext.Provider>
    </div>
  );
}

export default NoteProvider;
