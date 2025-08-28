import React, { useEffect, useState } from "react";
import { getSubjects } from "../api/subjectApi";
import "../css/Skills.css";

function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjects().then((data) => {
      console.log("API Response:", data);

      // Ensure we always store an array in `subjects`
      if (Array.isArray(data)) {
        setSubjects(data);
      } else if (data && Array.isArray(data.subjects)) {
        setSubjects(data.subjects);
      } else if (data) {
        setSubjects([data]); // if it’s a single object
      } else {
        setSubjects([]); // fallback
      }
    });
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
        <p className="skills-subtitle"><br /></p>

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
