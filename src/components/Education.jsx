import React from "react";

function Education() {
  return (
    <section className="section-wrapper" id="education">
      <h2 className="section-title">🎓 Education</h2>

      <div className="card-grid">
        <div className="card" data-aos="fade-up">
          <h3>Post-Graduate Certificate – Project Management</h3>
          <p><strong>Institution:</strong> Conestoga College, Canada</p>
          <p><strong>Year:</strong> 2022</p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h3>Bachelor of Engineering – Mechanical</h3>
          <p><strong>Institution:</strong> HKBK College of Engineering, India</p>
          <p><strong>Year:</strong> 2019</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
