import "./App.css";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";

function App() {
  return (
    <div className="container">
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
