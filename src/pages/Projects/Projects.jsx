import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="container projects" id="projectsection">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        {/* <p className="pb-3 text-center">➡️ languagesFDSFSDFDSFDS</p> */}
        {/* cards container */}
        <div className="row" id="ads">
        {/* cards */}
          
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1677996638/chatty/Screenshot_263_tbaqnd.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Jwt</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bcrypt</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Socket.io</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Realtime Chat Application</div>
                </div>
                <Link to="https://github.com/satishsahu25/chatty" className="ad-btn">
                  View
                </Link>
              </div>
            </div>
          </div>  
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1688400950/Exincome/Screenshot_410_qgfvfd.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Chartjs</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">Axios</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Exincome Tracker</div>
                </div>
                <Link to="https://github.com/satishsahu25/Exincome_frontend" className="ad-btn">
                  View
                </Link>
              </div>
            </div>
          </div>  
          
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1660578714/github/Screenshot_313_vgqt6d.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">MaterialUI</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Responsive Portfolio</div>
                </div>
                <Link to="https://github.com/satishsahu25/satishsahu_portfolio" className="ad-btn">

                 View
        
                </Link>
              </div>
            </div>
          </div>

        </div>
        {/* view more btn */}
        <div className="morebtn">
        <Link to="/more" className="more-btn">
                  👉 View more Projects
              </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
