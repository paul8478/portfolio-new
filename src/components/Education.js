import React from "react";
import "../css/Education.css";

function Education() {
  return (
    <div className="education-section">
      {/* Education Card */}
      <div className="edu-card">
        <h2 className="edu-title">📘 Education</h2>
        <ul className="edu-timeline">
          <li>
            <span className="edu-date">2016-2020:</span>{" "}
            <span className="edu-highlight">PhD</span>
            <p>Bachelor’s Degree in Computer Science</p>
          </li>
          <li>
            <span className="edu-date">2018-2022:</span>{" "}
            <span className="edu-highlight">Harvard University</span>
            <p>Certificate in React and Redux, Node.Js Developer Course</p>
          </li>
          <li>
            <span className="edu-date">2010-2012:</span>{" "}
            <span className="edu-highlight">Oxford University</span>
            <p>Certification in Full Stack Web Development</p>
          </li>
          <li>
            <span className="edu-date">2016-2020:</span>{" "}
            <span className="edu-highlight">Oxford University</span>
            <p>Certificate in React and Redux, Node.Js Developer Course</p>
          </li>
        </ul>
      </div>

      {/* Research Card */}
      <div className="edu-card">
        <h2 className="edu-title">📗 Researched</h2>
        <ul className="edu-timeline">
          <li>
            <span className="edu-date">2016-2020:</span>{" "}
            <span className="edu-highlight">Advanced Data Analytics with Big Data Tools</span>
            <p>Utilized big data tools for advanced analytics and insights.</p>
          </li>
          <li>
            <span className="edu-date">2018-2022:</span>{" "}
            <span className="edu-highlight">Cloud-Native Application Architectures</span>
            <p>Studied best practices for designing cloud-native applications.</p>
          </li>
          <li>
            <span className="edu-date">2016-2020:</span>{" "}
            <span className="edu-highlight">AI-Driven User Experience Personalization</span>
            <p>Leveraged AI to personalize user experiences based on behavior.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
