import React from 'react'

import Layout from "../../components/Layout/Layout";
import About from "../About/About";
import Techstack from "../Techstack/Techstack";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import WorkExp from "../WorkExp/WorkExp";
import Contact from "../Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Mobilenav from "../../components/Mobilenav/Mobilenav";
import { useTheme } from "../../context/ThemeContext.js";

const FullHome = () => {
    const [theme, settheme] = useTheme();
  return (
   <>
     <div id={theme}>
        <Mobilenav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <WorkExp />
          <Techstack />
          <Projects />
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Thanks for visiting </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="black"
        style={{ borderWidth: "2px", borderRadius: "80px" }}
      />
   </>
  )
}

export default FullHome