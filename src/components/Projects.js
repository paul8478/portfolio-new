import React from "react";
import "../css/projectsx.css";
import avatar2 from "../images/avatar2.png";

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
      
<div className="containerx">
    <h2>CONTACT ME</h2>
    <h1>Ready to develop your next big thing?</h1>

    <div className="cards">
      <div className="card">
        <h3>Discord</h3>
        <p>enzostvs</p>
        <a href="#" className="btnx">Hit me up on Discord</a>
      </div>
      <div className="card">
        <h3>LinkedIn</h3>
        <p>in/enzostvs</p>
        <a href="#" className="btnx">Visit my LinkedIn</a>
      </div>
    </div>

    <div className="emoji">
      <img src={avatar2} alt="Rocket Emoji" className="emo" />
    </div>
  </div>

  
      
    </div>
  );
}

export default Projects;
