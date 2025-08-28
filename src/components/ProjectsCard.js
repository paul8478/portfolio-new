import React from "react";
import ProjectsPage from "../pages/ProjectsPage";

function ProjectsCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectsCard;
