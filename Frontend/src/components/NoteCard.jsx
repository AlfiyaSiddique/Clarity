import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function NoteCard(props){

  function triggerDelete(){
    props.delete(props.id);
  }

  return (
     <div className="note">
     <h1>{props.title}</h1>
     <p>{props.content}</p>
     <button onClick={triggerDelete}><DeleteIcon /></button>
     </div>
  )
}

export default NoteCard;