// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={handleScrollUp}>
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTop;
