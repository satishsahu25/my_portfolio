import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdSchool } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="education" id="edusection">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2025"
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">
              B.Tech & M.Tech in Biotechnology and Biochemical Engineering
            </h4>
            <h6>CGPA: 8.77</h6>
            <h5 className="vertical-timeline-element-subtitle">IIT Kharagpur, West Bengal, India</h5>
          
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            Central Board of Secondary Education || XII
            </h3>
            <h6>Percentage: 93%</h6>
            <h5 className="vertical-timeline-element-subtitle">KhelGaon Public School, Prayagraj , UP, India</h5>
        
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black",fontSize:"24px" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2017"
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Central Board of Secondary Education || X 
            </h3>
            <h6>CGPA: 10.00</h6>
            <h5 className="vertical-timeline-element-subtitle">KhelGaon Public School, Prayagraj , UP, India</h5>
          
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
