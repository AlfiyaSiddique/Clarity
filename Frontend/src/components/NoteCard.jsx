import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import backendURL from "../common/backendUrl";
import { toast } from "react-toastify";

function NoteCard(props) {
  const triggerDelete = () => {
    axios
      .delete(`${backendURL}/api/notes/delete/${props.id}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div id="btns">
        <button onClick={triggerDelete}>
          <DeleteIcon />
        </button>
        <button
          onClick={() => props.update(props.title, props.content, props.id)}
        >
          <EditIcon />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
