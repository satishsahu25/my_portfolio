import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="aboutsection">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
{/*             <img src=" */}
{/*             https://res.cloudinary.com/codercloud/image/upload/v1693340468/satish_profimage_vrsdds.jpg" /> */}
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
             Myself Satish Sahu, I am a 4th year undergraduate student at IIT Kharagpur.
             My interest lies in developing complex websites and softwares. My principles of life are hardwork, patience and knowledge. 
             My hobbies include teaching, gymming and travelling...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
