import React, { useState } from "react";

import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import './layout.css'
import Menu from "../menu/Menu";
import Home from "../../pages/Home/Home";


const Layout = () => {

  const [toggle,settoggle]=useState(false);

    const changtoggle=()=>{
      settoggle(!toggle);
    }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={changtoggle}>
            {toggle?(<AiOutlineDoubleLeft size={30} className="iconcolor" />):
           ( <AiOutlineDoubleRight size={30} className="iconcolor"/>)}

            </p>
          </div>
          <Menu toggle={toggle}/>
        </div>
        <div className="container">
          <Home/>
        </div>
      </div>
    </>
  );
};

export default Layout;
