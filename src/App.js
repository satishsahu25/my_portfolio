import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FullHome from "./pages/FullHome/FullHome";
import Moreprojects from "./pages/More Projects/Moreprojects";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FullHome/>}/>
      <Route path="/more" element={<Moreprojects/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
