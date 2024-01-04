import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NoteCard from "./components/NoteCard.jsx";
import AddNote from "./components/AddNote.jsx";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backendURL from "./common/backendUrl.js";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const user = useLocation().state.user;
  let token = localStorage.getItem("token");
  const navigator = useNavigate();
  if (token) {
    token = JSON.parse(token);
  } else {
    toast.info("Please login!");
    navigator("/");
  }

  const [notes, setNotes] = useState([]);
  const [noteText, setNote] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState({
    title: "",
    titleError: "",
    content: "",
    contentError: "",
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`${backendURL}/api/notes/get/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setNotes(res.data.notes);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onClick = () => {
    let submitable = true;

    Object.values(error).forEach((val) => {
      if (val) {
        submitable = false;
        return;
      }
    });

    if (submitable) {
      axios
        .post(
          `${backendURL}/api/notes/add`,
          { ...noteText, userid: user._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
    } else {
      toast.error("Please fill the fields with valid value");
    }
  };

  const onUpdate = (title, content, id) => {
    setEdit(true);
    setNote(() => {
      return { title, content, id };
    });
  };

  const submitUpdate = () => {
    let submitable = true;

    Object.values(error).forEach((val) => {
      if (val) {
        submitable = false;
        return;
      }
    });

    if (submitable) {
      axios
        .put(
          `${backendURL}/api/notes/update/${noteText.id}`,
          { ...noteText, userid: user._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
      setEdit(false);
      setNote({
        title: "",
        content: "",
      });
    } else {
      toast.error("Please fill the fields with valid value");
    }
  };

  return (
    <div>
      <Header user={user} />
      <AddNote
        add={onClick}
        error={error}
        setError={setError}
        noteText={noteText}
        setNote={setNote}
        edit={edit}
        submitUpdate={submitUpdate}
      />
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          token={token}
          id={note._id}
          title={note.title}
          content={note.content}
          update={onUpdate}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Dashboard;
