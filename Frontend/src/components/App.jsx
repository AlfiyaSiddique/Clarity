import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";
import { useState } from "react";

function App(){
  const [array, setArray] = useState([]);

   function onClick(note){
      setArray((prev)=>{
         return [...prev, note]
      })
   }

   function onDelete(id){
    setArray(()=>{
        return array.filter((item, index)=>{
            return index !== id
        })
    })
   }


    return (
        <div>
            <Header />
            <AddNote add={onClick}/>
             {
                array.map( (note, index)=>
                <NoteCard  
                delete={onDelete} key={index} id={index} title={note.title} content={note.content} />
                )}
            <Footer />
        </div>
    )
}

export default App;