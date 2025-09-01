import React from "react";
import "../css/projectsx.css";

function Projects() {
  const dummyProjects = [
    {
      title: "Web & App Development",
      description: "Crafting stunning, user-friendly websites and apps using HTML, CSS, JS, React, and more.",
      type: "Development",
      image: "https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6437.jpg"
    },
    {
      title: "Database Management",
      description: "Manage and optimize databases for maximum speed and reliability.",
      type: "Database",
      image: "https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6437.jpg"
    },
    {
      title: "API Development",
      description: "Build robust and secure APIs for your applications.",
      type: "API",
      image: "https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6437.jpg"
    },
    {
      title: "Integrating AI",
      description: "Bring AI capabilities into your projects for smarter solutions.",
      type: "AI",
      image: "https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6437.jpg"
    },
  ];

  return (
    <div className="uni-pj-project">
      <video autoPlay loop muted playsInline className="uni-pj-background-video">
        <source src="/videos/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="uni-pj-head">🚀 My Projects</h1>

      <div className="uni-pj-grid">
        {dummyProjects.map((project, index) => (
          <div className="uni-pj-card" key={index}>
            <div className="uni-pj-image">
              <img src={project.image} alt={project.title} />
              <span className="uni-pj-type">{project.type}</span>
            </div>
            <div className="uni-pj-content">
              <h3 className="uni-pj-title">{project.title}</h3>
              <p className="uni-pj-description">{project.description}</p>
              <button className="uni-pj-btn">⬇ Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
