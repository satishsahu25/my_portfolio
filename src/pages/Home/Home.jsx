import React from "react";
import "../Home/home.css"
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/Satish Sahu CV.pdf'
import { useTheme } from "../../context/ThemeContext";
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
import {BiSolidDownload} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Home = () => {

  const[theme,setheme]=useTheme();

  const handletheme=()=>{
    setheme((prevstate)=>(prevstate==='light'?'dark':'light'));
  }


  return (
    <>
      <div className="container-fluid home-container" id="homesection">
      <div className="theme-btn">
        {theme==='light'?(<BsFillMoonStarsFill size={30} onClick={handletheme}/>):(
          <BsFillSunFill size={30} onClick={handletheme}/>
        )}
      </div>
        <div className="container home-content">
         <Fade right>
         <h1 >Hi👋 I provide services </h1>
         <div className="typewriter">
         <h2>
            <Typewriter
              options={{
                strings: ["AI!","Full Stack!", "Backend!","Frontend!","Mobile App!","Softwares!","Clouds!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
         </div>
         </Fade>
{/*           <div className="home-buttons">
            <Link to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=stsahu.work@gmail.com"><button className="btn btn-hire">Hire Me</button></Link>
            <a className="btn btn-cv" href={Resume} download="Satish Sahu">My Resume <BiSolidDownload/></a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
