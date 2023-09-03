import React, { useState } from "react";
import "./mobnav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcAbout, FcHome } from "react-icons/fc";
import { Link } from "react-scroll";
import Slide from "react-reveal/Slide";
import { AiOutlineMenuFold } from "react-icons/ai";

const Mobilenav = () => {
  const [open, setopen] = useState(false);

  const handleopen = () => {
    setopen(!open);
  };

  const handlemenuclick=()=>{
    setopen(false);
  }

  return (
    <>
      <div className="mobile-nav ">
        <div className="mobile mob-nav-header bg-black">
          {open ? (
            <AiOutlineMenuFold size={30} className="mob-nav-icon" onClick={handleopen}/>
          ) : (
            <GiHamburgerMenu size={30} className="mob-nav-icon" onClick={handleopen}/>
          )}

          <span className="mob-nav-title text-white ">Satish Sahu</span>
        </div>
        {/* icons */}
        <div className="mob-nav-menu">
         {open&& (<div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="homesection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handlemenuclick}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="aboutsection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handlemenuclick}
                >
                  <FcHome />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="edusection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={handlemenuclick}
                  duration={100}
                >
                  <FcHome />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="expsection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={handlemenuclick}
                  duration={100}
                >
                  <FcHome />
                  Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstacksection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={handlemenuclick}
                  duration={100}
                >
                  <FcHome />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projectsection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={handlemenuclick}
                  duration={100}
                >
                  <FcHome />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contactsection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handlemenuclick}
                >
                  <FcHome />
                  Contacts
                </Link>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
