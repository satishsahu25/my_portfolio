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

        {/* <VerticalTimeline
        lineColor='#178871'
        > */}
          {/* <VerticalTimelineElement
    
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2023"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2023"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          
          </VerticalTimelineElement> <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2023"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          
          </VerticalTimelineElement> */}
        {/* </VerticalTimeline> */}
        </div>
    </div>

    </>
  )
}

export default WorkExp