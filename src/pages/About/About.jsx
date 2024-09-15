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
             Myself Satish Sahu, I am a final year undergraduate student at IIT Kharagpur. A dedicated software engineer with a passion for crafting innovative solutions. Driven by a competitive spirit, I've honed my skills through rigorous competitive programming(currently working on too).  I'm particularly interested in exploring the intersection of software engineering and artificial intelligence, with a focus on full stack development, mobile app development, computer vision, OpenAI and specific AI areas, e.g., machine learning, deep learning, natural language processing. Beyond coding, I'm committed to maintaining a balanced lifestyle through fitness and exploring entrepreneurial ventures. Seeking opportunities to collaborate with talented individuals and contribute to groundbreaking projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
