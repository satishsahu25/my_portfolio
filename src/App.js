import React from "react";
import {Routes,Route} from 'react-router-dom'
import FullHome from "./pages/FullHome/FullHome";
import Moreprojects from "./pages/More Projects/Moreprojects";


function App() {
  return (
  
    <Routes>
      <Route path="/" element={<FullHome/>}/>
      <Route path="/more" element={<Moreprojects/>}/>
    </Routes>

     
  );
}

export default App;
