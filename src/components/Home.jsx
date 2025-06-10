import React from "react";
import { FaUser } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";
import resumeFile from "../assets/project-showcase.pdf";

function Home() {
  return (
    <section className="home-section" id="home">
      <h2 className="section-title">
        <FaUser style={{ marginRight: "10px", verticalAlign: "middle" }} />
        Home
      </h2>
      <img src={profileImage} alt="Profile" className="profile-img" />
      <h2>Mohammed Junaid</h2>
      <h3>Quality Assurance | Process Improvement Specialist</h3>
      <p className="summary">
        Detail-oriented Quality Assurance Specialist with 3+ years of experience supporting project lifecycles, managing cross-functional teams, and coordinating documentation, procurement, and vendor communications in engineering and manufacturing environments. Skilled in organizing schedules, tracking project deliverables, and maintaining compliance with ISO 9001 and safety regulations.
      </p>
      <a href={resumeFile} className="download-btn" download>
        ⬇️ Download Resume
      </a>
    </section>
  );
}

export default Home;
