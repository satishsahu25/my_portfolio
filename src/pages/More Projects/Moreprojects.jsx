import React from "react";
import "./moreprojects.css"
import { Link } from "react-router-dom";

const Moreprojects = () => {



  return (
    <>
       <div className="container projects">
       <div className="morebtn">
        <Link to="/" className="more-btn">
                  GO BACK
              </Link>
        </div>
        
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          LIST OF ALL PROJECTS
        </h2>
        <hr />
        {/* <p className="pb-3 text-center">➡️ languagesFDSFSDFDSFDS</p> */}
        {/* cards container */}
        <div className="row" id="ads">
        {/* cards */}
          {/* 1 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1660577408/github/Screenshot_294_ol3ej1.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Motion</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Responsive Fitness Website</div>
                </div>
               <div className="d-flex">
               <Link to="https://hbx.netlify.app/" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/Online-Fitness-Website-Frontend" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>     
          {/* 2 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1660579508/github/Screenshot_323_psm6h3.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">ChartJS</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Business Analysis Dashboard</div>
                </div>
               <div className="d-flex">
               <Link to="https://businessadmindashboard.netlify.app/" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/business_dashboard" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>    
          {/* 3 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1660578105/github/Screenshot_300_reze4s.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">ChartJS</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Trainer Goes Online</div>
                </div>
               <div className="d-flex">
               <Link to="https://trainergoesonline.netlify.app/" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/codesat/TrainerGoesOnline" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>     
          {/* 4 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Software</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1677411234/facial%20attendance/Screenshot_253_txtdqb.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Tkinter</span>
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Pycharm</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">OpenCV</span>
                <span className="card-detail-badge">Machine Learning</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Smart Eye | Facial Attendance SOftware</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/smart_eye" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/smart_eye" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div> 
          {/* 5     */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1662900559/Screenshot_2_ftsbaf.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Nodejs</span>
                <span className="card-detail-badge">RestAPI</span>
                <span className="card-detail-badge">Redux</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">MERN STACK CRUD OPERATION</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/fyzen" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/fyzen" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>  
          {/* 6 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Machine Learning</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1666274154/Screenshot_145_k0ukg0.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Flask</span>
                <span className="card-detail-badge">Machine Learning</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Book Recommender System</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/Book-Recommendation-System" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/Book-Recommendation-System" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>  
          {/* 7  */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1660580479/github/design1_bcp7ln.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Home Page Design</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/Responsive-Home-Page" className="ad-btn">
                  Live
                </Link><Link to="https://github.com/satishsahu25/Responsive-Home-Page" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>   
          {/* 8 */}
          <div className="col-md-4 eachcard">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1693721963/Screenshot_1304_htbnat.png"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">MMM Hall Website</div>
                </div>
               <div className="d-flex">
               <Link to="https://admiring-sinoussi-9c0272.netlify.app/" className="ad-btn">
                  Live
                </Link><Link to="https://admiring-sinoussi-9c0272.netlify.app/" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>    
          {/* 9 */}
          <div className="col-md-4 eachcard android">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Android</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1686564669/app/Screenshot_2023-06-12-15-28-27-94_2c294784efa6c6562caf83bdf7becb54_wrwixo.jpg"
                  alt="project1"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">XML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">Java</span>
                <span className="card-detail-badge">Android Studio</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">InIITKGP Android App</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/InIITKGP-Android-Application" className="ad-btn">
                  Live
                </Link>
                <Link to="https://github.com/satishsahu25/InIITKGP-Android-Application" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>    
          {/* 10 */}
          <div className="col-md-4 eachcard android">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Android & ios</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1686844099/q3_nyr5iy.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">XML</span>
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">RestAPI</span>
                <span className="card-detail-badge">ReactJS</span>
                <span className="card-detail-badge">Android Studio</span>
                <span className="card-detail-badge">React Native</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Quizzer Android App</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/Quizzer" className="ad-btn">
                  Live
                </Link>
                <Link to="https://github.com/satishsahu25/Quizzer" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>  
          {/* 11  */}
          <div className="col-md-4 eachcard android">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Django</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1693725028/1678174741265_o99rip.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">RestAPI</span>
                <span className="card-detail-badge">Django</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Wordpress</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Portfolio Showcase</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/djangodeploy" className="ad-btn">
                  Live
                </Link>
                <Link to="https://github.com/satishsahu25/djangodeploy" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>  
          {/* 12 */}
          <div className="col-md-4 eachcard android">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Android & ios</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1687251019/Screenshot_283_nwc0cj.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">Axios</span>
                <span className="card-detail-badge">RestAPI</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">React Native</span>
                <span className="card-detail-badge">Cloud API</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Ghoomo | React Native App</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/Ghoomo" className="ad-btn">
                  Live
                </Link>
                <Link to="https://github.com/satishsahu25/Ghoomo" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div> 
          {/* 13     */}
          <div className="col-md-4 eachcard android">
            <div className="card rounded">
              <div className="card-img">
                <span className="card-notify-badge">Android & ios</span>
                <img
                  src="https://res.cloudinary.com/codercloud/image/upload/v1687352545/Screenshot_2023-06-21-18-28-42-82_9bd2cedeec10e075714ef6b2ea203f59_jp5hem.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Css</span>
                <span className="card-detail-badge">Html</span>
                <span className="card-detail-badge">Axios</span>
                <span className="card-detail-badge">RestAPI</span>
                <span className="card-detail-badge">ReactJS</span>
                <span className="card-detail-badge">TypeScript</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">React Native</span>
                <span className="card-detail-badge">Cloud API</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <div className="text-uppercase">Techwonde Project | React Native App</div>
                </div>
               <div className="d-flex">
               <Link to="https://github.com/satishsahu25/Tech_wonde" className="ad-btn">
                  Live
                </Link>
                <Link to="https://github.com/satishsahu25/Tech_wonde" className="ad-btn">
                  Code
                </Link>
               </div>
              </div>
            </div>
          </div>

       

        </div>
        {/* view more btn */}
        <div className="morebtn">
        <Link to="/" className="more-btn">
                  GO BACK
              </Link>
        </div>
      </div>
    </>
  );
};

export default Moreprojects;
