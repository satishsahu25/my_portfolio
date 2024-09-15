import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="aboutsection">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
           
            <img src="https://res.cloudinary.com/codercloud/image/upload/v1726392175/459107118_535136522233779_2433225103441361271_n_bs5uw1.jpg"
              /> 
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
             Myself Satish Sahu, I am a final year undergraduate student at IIT Kharagpur.
             My interest lies in developing complex websites and softwares. My principles of life are continuous learning, hardwork, patience, fail early and fail often. 
             My hobbies include teaching, gymming, reading and travelling...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
