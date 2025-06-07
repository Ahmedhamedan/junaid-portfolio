import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Anil Kumar",
      role: "Production Manager, Mechtron Innovations",
      quote: "Junaid consistently delivered high-quality inspections and significantly reduced scrap rates. A true asset to any manufacturing team."
    },
    {
      name: "Sarah Williams",
      role: "QA Lead, Rockwell Automation",
      quote: "His understanding of ISO standards and lean methodology helped streamline our internal audit process and saved us thousands."
    },
    {
      name: "Karthik Reddy",
      role: "Project Lead, MD Engineering",
      quote: "Junaid's documentation and planning during our startup phase was absolutely instrumental to our smooth project rollout."
    }
  ];

  return (
    <section className="section-wrapper" id="testimonials">
      <h2 className="section-title">
        <FaQuoteRight style={{ marginRight: "10px", verticalAlign: "middle" }} />
        Testimonials
      </h2>
      <div className="card-grid">
        {testimonials.map((t, i) => (
          <div className="card" data-aos="fade-up" key={i}>
            <p>“{t.quote}”</p>
            <h4>{t.name}</h4>
            <small>{t.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
