import React from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import NoteCard from "./components/NoteCard.jsx";
import AddNote from "./components/AddNote.jsx";
import { useState } from "react";

const Dashboard = () => {
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

export default Dashboard
