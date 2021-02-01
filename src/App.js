import React, { useState } from "react";
import "./styles.css";

import Note from "./Components/Note";

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleCreateNote(event) {
    event.preventDefault();

    let title = event.target.title.value;
    let content = event.target.content.value;
    
    event.target.title.value = "";
    event.target.content.value = "";

    if (!title && !content) {
      return alert("Por favor, complete as informações.");
    }

    setNotes([
      {
        title: title || null,
        content: content
      },
      ...notes
    ]);
  }

  function handleDeleteNote(i) {
    if (confirm("Tem certeza que deseja deletar esta nota?")) {
      let newNotes = [...notes];
      newNotes.splice(i, 1);
      setNotes(newNotes);
    }
  }

  return (
    <div className="App">
      <h1>Google Keep</h1>

      <form onSubmit={handleCreateNote}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
        <button type="submit">Criar nota</button>
      </form>

      {notes.map((item, i) => {
        return (
          <Note key={i} onClick={() => handleDeleteNote(i)} content={item} />
        );
      })}
    </div>
  );
}
