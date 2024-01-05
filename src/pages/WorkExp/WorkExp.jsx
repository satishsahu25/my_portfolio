import React from 'react'
import './workexp.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { MdSchool } from "react-icons/md";
  import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <>
    <div className="work" id="expsection">
        <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />

        <VerticalTimeline
        lineColor='#178871'
        >
           <VerticalTimelineElement
    
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - Present"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              System Engineer (Backend Developer)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Cessini Private Limited, Kolkata</h4>
          
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Dec'2023 - Jan'2024"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              JavaScript Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Codespeedy Private Limited, Kolkata</h4>
          
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Dec'2023 - Jan'2024"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Scientist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Psyliq, Bengaluru Karnataka</h4>
          
          </VerticalTimelineElement> 
        </VerticalTimeline>
        </div>
    </div>

    </>
  )
}

export default WorkExp
