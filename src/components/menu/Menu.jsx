import React from "react";
import "./meun.css";
import { FcAbout, FcHome, } from "react-icons/fc";
import { Link } from "react-scroll";
import Slide from 'react-reveal/Slide';
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoIosSchool} from 'react-icons/io'
import {FiCodepen,FiMail} from 'react-icons/fi'
import {GiNetworkBars} from 'react-icons/gi'
import {PiProjectorScreenChartFill} from 'react-icons/pi'

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profilepic">
            <img src="https://res.cloudinary.com/codercloud/image/upload/v1693340468/satish_profimage_vrsdds.jpg" />
            <h2 className="text-center text-white">Satish Sahu</h2>
          </div>

          <Slide left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="homesection" spy={true} smooth={true} offset={-100} duration={100}>
                  <AiFillHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="aboutsection" spy={true} smooth={true} offset={-100} duration={100}>
                <BsFillPersonFill />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="edusection" spy={true} smooth={true} offset={-100} duration={100}>
                  <IoIosSchool />
                  Education
                </Link>
              </div>    
              

              <div className="nav-link">
                <Link to="expsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <GiNetworkBars />
                  Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstacksection" spy={true} smooth={true} offset={-100} duration={100}>
                  <FiCodepen />
                  Tech Stack
                </Link>
              </div>
             
              <div className="nav-link">
                <Link to="projectsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <PiProjectorScreenChartFill />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contactsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <FiMail />
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          </Slide>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="homesection" spy={true} smooth={true} offset={-100} duration={100}>
                  <AiFillHome title={"Home"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="aboutsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <BsFillPersonFill title={"About"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="edusection" spy={true} smooth={true} offset={-100} duration={100}>
                  <IoIosSchool title="Education Details" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="expsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <GiNetworkBars title="Experience" />
                 </Link>
              </div>
              <div className="nav-link">
                <Link to="techstacksection" spy={true} smooth={true} offset={-100} duration={100}>
                  <FiCodepen title="Tech Stack" />
                </Link>
              </div>
            
              <div className="nav-link">
                <Link to="projectsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <PiProjectorScreenChartFill title="Projects" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contactsection" spy={true} smooth={true} offset={-100} duration={100}>
                  <FiMail title="Contacts" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
