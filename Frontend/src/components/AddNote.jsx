import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import validate from "../common/validation";

function AddNote({
  error,
  setError,
  add,
  noteText,
  setNote,
  submitUpdate,
  edit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let message = validate[name](value);
    setNote((prev) => {
      return { ...prev, [name]: value };
    });

    setError((prev) => {
      return { ...prev, ...message };
    });
  };
  const [isClicked, setClick] = useState(false);

  function addItem(event) {
    add(noteText);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setClick(true);
  }

  return (
    <form className="create-note">
      <div>
        {isClicked && (
          <input
            onChange={handleChange}
            placeholder="title..."
            name="title"
            type="text"
            value={noteText.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          cols="30"
          rows={isClicked ? 5 : 1}
          name="content"
          placeholder="Take a note..."
          value={noteText.content}
        ></textarea>
        <Zoom in={isClicked}>
          <Fab onClick={() => (edit ? submitUpdate() : addItem())}>
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
      {error.title && <p className="error">{error.titleError}</p>}
      {error.content && <p className="error">{error.contentError}</p>}
    </form>
  );
}

export default AddNote;
