import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) => ({
    margin: "0 15px",
    textDecoration: "none",
    color: location.pathname === path ? "#007bff" : "#fff",
    fontWeight: location.pathname === path ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
  backgroundColor: "rgba(160, 160, 160, 0.3)",  // semi-transparent red
  backdropFilter: "blur(10px)",               // glass blur effect
  WebkitBackdropFilter: "blur(10px)",         // for Safari support
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // subtle shadow
  border: "1px solid rgba(243, 237, 237, 0.2)", // subtle border matching bg
  display: "flex",
  alignItems: "center",
  height: "50px",
  width: "auto",
  borderRadius: "50px",
  padding: "0 30px",
}}

      >
        <Link to="/" style={linkStyle("/")}>
          About Me
        </Link>
        <Link to="/projects" style={linkStyle("/projects")}>
          Projects
        </Link>
        <Link to="/subjects" style={linkStyle("/subjects")}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
