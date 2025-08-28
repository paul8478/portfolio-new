import "../css/Home.css";
import Education from "../components/Education";
import Skill from "../components/SubjectsPage";
import Hero from "../components/hero";

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="content">
        <Hero />
        <Skill />
        <Education />
      </div>
    </div>
  );
}

export default HomePage;
