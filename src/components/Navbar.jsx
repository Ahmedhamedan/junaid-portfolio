// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <nav className="navbar">
      {isMobile ? (
        <div className="mobile-nav">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          {menuOpen && (
            <ul>
              {["home", "education", "projects", "certifications", "testimonials"].map((item) => (
                <li key={item} onClick={() => handleScroll(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <ul>
          {["home", "education", "projects", "certifications", "testimonials"].map((item) => (
            <li key={item} onClick={() => handleScroll(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
