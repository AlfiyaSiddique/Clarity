import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./Dashboard";
import Entry from "./Entry/Entry";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Entry login={true}/>}/>
                <Route path="/signup" element={<Entry login={false}/>}/>
                <Route path="/notes" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
