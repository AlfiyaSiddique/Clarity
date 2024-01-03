import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function AddNote(props){
    
    const [noteText, setNote] = useState({
        title: "",
        content: ""
    });
    const [isClicked, setClick] = useState(false);

    function handleChange(event){
       const {name, value} = event.target;
       setNote((prev)=>{
        return {
            ...prev,
            [name]: value
        }
       })
    }

    function addItem(event){
       props.add(noteText)
       setNote({
        title: "",
        content: ""
       })
       event.preventDefault();
    }

    function expand(){
      setClick(true)
    }
  
  return (
    <form className="create-note">
      <div >
      {
        isClicked && <input onChange = {handleChange} placeholder="title..." name="title"  type="text" value={noteText.title}/>
      }
      <textarea onClick={expand} onChange={handleChange} cols="30" rows={isClicked? 5 : 1} name="content" placeholder="Take a note..." value={noteText.content}></textarea>
      <Zoom in={isClicked}>
      <Fab onClick={addItem}><AddIcon /></Fab>
      </Zoom>
      </div>
    </form>
  )
}


export default AddNote;