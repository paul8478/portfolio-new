import React from "react";
import "../css/Project.css";

function ProjectsPage() {
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
    <div className="project">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="my-project-head">🚀 My Projects</h1>

      <div className="pj-services-grid">
        {dummyProjects.map((project, index) => (
          <div className="pj-service-card" key={index}>
            <div className="pj-card-image">
              <img src={project.image} alt={project.title} />
              <span className="pj-service-type">{project.type}</span>
            </div>
            <div className="pj-card-content">
              <h3 className="pj-service-title">{project.title}</h3>
              <p className="pj-service-description">{project.description}</p>
              <button className="pj-download-btn">⬇ Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
