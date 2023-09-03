import React, { useState } from "react";
import "./contact.css";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link} from "react-router-dom";

const Contact = () => {


  const [name,setname]=useState("");
  const [body,setbody]=useState("");
  const [email,setemail]=useState("");



  return (
    <>
      <div className="contact" id="contactsection">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Contact ME
        </h2>
        <hr />
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line img">
                  <img src="https://img.freepik.com/premium-photo/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon_52701-38.jpg" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card2 d-flex card border-0 px-2 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Connect With me @
                      <Link to="https://www.linkedin.com/in/satish-sahu-46b7a7229/">
                  
                        <BsLinkedin color="blue" className="ms-2" size={30} />
                      </Link>
                      <Link to="https://github.com/satishsahu25">
                        <BsGithub color="black" className="ms-2" size={30} />
                      </Link>
                      <Link to="https://www.facebook.com/profile.php?id=100087199660369">
                     
                        <BsFacebook color="blue" className="ms-2" size={30} />
                      </Link>
                      <Link to="https://www.youtube.com/channel/UC3VcsRe3OZ3GvSjNvQR28LA">
                        <BsYoutube color="red" className="ms-2" size={30} />
                      </Link>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                      onChange={(name)=>{
                        setname(name.target.value);
                      }}
                      value={name}
                    />
                  </div>{" "}
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(email)=>{
                        setemail(email.target.value);
                      }}
                      placeholder="Enter your email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      body={body}
                      onChange={(body)=>{
                        setbody(body.target.value);
                      }}
                      placeholder="Write your message"
                    />
                  </div>
                  <div className="row px-3 mobilebtn">
                    <Link to={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=satishk7619@gmail.com&body=My name is ${name} . I want to contact you regarding ${body}. My email address is ${email}`}>
                    <button className="submit-btn" type="submit">
                      SEND MESSAGE
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
