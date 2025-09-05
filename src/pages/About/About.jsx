import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="aboutsection">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
           
            <img src="https://res.cloudinary.com/codercloud/image/upload/v1757101764/IMG-20250419-WA0121_bclcws.jpg"
              /> 
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
             Hey, I’m Satish Sahu — AI Engineer at ITSO Inc. Japan and IIT Kharagpur (2025) graduate. On a mission to redefine how the world connects by building the next-gen of social media.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
