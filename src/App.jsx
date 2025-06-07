import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";

import "./style/global.css";
import projectPDF from "./assets/project-showcase.pdf";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => setShowMessage(false), 10000);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Dark Mode Toggle */}
      <div className={`dark-toggle-wrapper ${isMobile ? "mobile" : "desktop"}`}>
        <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* PDF Download */}
      <a href={projectPDF} download className="download-btn center">
        📄 Download Project Showcase
      </a>

      {/* Sections */}
      <Home />
      <Education />
      <Projects />
      <Certifications />
      <Testimonials />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Smile message */}
      {showMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: isDarkMode ? "#333" : "#f0f0f0",
            color: isDarkMode ? "#eee" : "#333",
            padding: "12px 20px",
            borderRadius: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            fontSize: "15px",
            zIndex: 1000,
          }}
        >
          😊 Thanks for visiting! Hope this smile made your day.
        </div>
      )}
    </>
  );
}

export default App;
