import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = () => {
    axios
      .get("/notes/")
      .then((data) => {
        setNotes(data.data);
      })
      .catch((err) => console.log(err));
  };

  let getTitle = (note) => {
    let title = note.split("\n")[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }
    return title;
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <Link to={`/note/${note.id}`}>
              <div className="notes-list-item">
                <li key={note.id}>{getTitle(note.body)}</li>
              </div>
            </Link>
          );
        })}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPage;
