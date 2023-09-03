import React from "react";
import "./textstack.css";
import { Techstacklist } from "../../utils/Techlstacklist";
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';


const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstacksection">
       <RubberBand>
       <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
        <hr />
        <p className="pb-3 text-center">
          🧑‍💻 include programming languages, frameworks, databases and libraries
        </p>
       </RubberBand>

      <div className="row">
        {Techstacklist.map((tech) => (
         <Fade left>
         <div key={tech.id} className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="alig-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </Fade>
        ))}
      </div>
      </div>
    </>
  );
};

export default Techstack;
