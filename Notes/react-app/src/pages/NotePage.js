import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NotePage = () => {
  const { id: noteId } = useParams();
  const [note, setNotes] = useState();

  useEffect(() => {
    getNote();
    return () => {
      setNotes({});
    };
  }, [noteId]);

  let getNote = () => {
    if (noteId === "new") return;
    axios
      .get(`/notes/${noteId}/`)
      .then((data) => {
        setNotes(data.data);
      })
      .catch((err) => console.log(err));
  };

  let updateNote = () => {
    axios
      .put(`/notes/${noteId}/update/`, {
        body: note,
      })
      .then((res) => {
        setNotes(res.data);
        console.log(note);
      })
      .catch((err) => console.log(err));
  };

  let createNote = () => {
    axios
      .post(`/notes/create/`, {
        body: note,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  let deleteNote = () => {
    axios
      .delete(`/notes/${noteId}/delete`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    history("/");
  };

  const history = useNavigate();

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId == "new" && note != null) {
      createNote();
    }
    history("/");
  };

  let back = async () => {
    await updateNote();
    history("/");
  };

  let handleChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={back} />
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea defaultValue={note?.body} onChange={handleChange} />
    </div>
  );
};

export default NotePage;
