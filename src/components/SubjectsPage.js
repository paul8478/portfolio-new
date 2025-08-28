import React, { useEffect, useState } from "react";
import { getSubjects } from "../api/subjectApi";
import "../css/Skills.css";

function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjects().then((data) => setSubjects(data));
  }, []);

  return (
    <div className="skills-section">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/skills-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="skills-content">
        <h1 className="skills-title">My Professional Skills</h1>
        <p className="skills-subtitle"><br/></p>

        <div className="skills-icons-wrapper">
          {subjects.length > 0 ? (
            subjects.map((subject, index) => (
              <div key={index} className="skill-icon">
                <img src={subject.link} alt={`Skill ${index}`} />
              </div>
            ))
          ) : (
            <p className="loading-text">Loading skills...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectsPage;
