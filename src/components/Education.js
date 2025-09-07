import React, { useEffect, useState } from "react";
import "../css/Education.css";
import { getEducation } from "../api/educationApi"; // adjust path if needed
// import { getSubjects } from "../api/subjectApi";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEducation();
        setEducation(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="education-section">
      {/* Education Card */}
      <div className="edu-card">
        <h2 className="edu-title">📘 Education</h2>
        <ul className="edu-timeline">
          {education.map((item, index) => (
            <li key={index}>
              <img src={item.imglink} className="edu-logo" />
              <div className="edu-content">
                <span className="edu-highlight">{item.institute}</span><br />
                <p>{item.degree}</p>
                <span className="edu-date">Year : {item.year}</span>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Research Card */}
       <div className="edu-card">
        <h2 className="edu-title">📘 Education</h2>
        <ul className="edu-timeline">
          {education.map((item, index) => (
            <li key={index}>
              <img src={item.imglink} className="edu-logo" />
              <div className="edu-content">
                <span className="edu-highlight">{item.institute}</span><br />
                <p>{item.degree}</p>
                <span className="edu-date">Year : {item.year}</span>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Education;
