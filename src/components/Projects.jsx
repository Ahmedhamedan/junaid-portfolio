// src/components/Projects.jsx
import React, { useState } from "react";
import {
  FaTools,
  FaClipboardCheck,
  FaProjectDiagram,
  FaSearch,
  FaRecycle,
  FaCheckCircle,
  FaFolderOpen
} from "react-icons/fa";

const allProjects = [
  {
    title: "$1.6M MRB Project",
    description:
      "Led a $1.6M Material Review Board project at Rockwell Automation, executing audits and tool calibrations to ensure regulatory compliance.",
    icon: <FaClipboardCheck size={28} />,
    tags: ["Audit", "Calibration"]
  },
  {
    title: "Lean/Six Sigma Improvement",
    description:
      "Improved efficiency by 30% using Lean and Six Sigma methodologies to resolve quality bottlenecks.",
    icon: <FaProjectDiagram size={28} />,
    tags: ["Lean", "Six Sigma"]
  },
  {
    title: "ISO 9001 Internal Audits",
    description:
      "Executed internal and dock audits, reducing non-conformance by 30% and aligning with ISO 9001 standards.",
    icon: <FaClipboardCheck size={28} />,
    tags: ["ISO 9001", "Audit"]
  },
  {
    title: "CAPA & RCA Program",
    description:
      "Led cross-functional teams to implement CAPA and RCA processes with 90% effectiveness rate at AMOGH CPMC.",
    icon: <FaSearch size={28} />,
    tags: ["CAPA", "Root Cause"]
  },
  {
    title: "Scrap Reduction via Risk Assessment",
    description:
      "Saved $60K by conducting risk assessments to prevent part wastage through early detection and correction.",
    icon: <FaRecycle size={28} />,
    tags: ["Risk Control", "Cost Saving"]
  },
  {
    title: "PDCA & Lean Efficiency Program",
    description:
      "Reduced scrap by 75% and increased production efficiency by 50% using PDCA and Lean techniques at Mechtron.",
    icon: <FaTools size={28} />,
    tags: ["PDCA", "Lean"]
  },
  {
    title: "Startup Project Binder",
    description:
      "Created and organized a comprehensive startup documentation binder to support project rollouts at MD Engineering.",
    icon: <FaClipboardCheck size={28} />,
    tags: ["Startup", "Documentation"]
  },
  {
    title: "5S & TQM Efficiency Program",
    description:
      "Implemented 5S and Total Quality Management practices to enhance workflow and team discipline.",
    icon: <FaCheckCircle size={28} />,
    tags: ["5S", "TQM"]
  },
  {
    title: "Industrial Waste Reduction",
    description:
      "Utilized RCA and Process Flow Diagram analysis to eliminate sources of industrial waste across stages.",
    icon: <FaRecycle size={28} />,
    tags: ["RCA", "PFD"]
  }
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = allProjects.filter(
    (project) => filter === "All" || project.tags.includes(filter)
  );
  const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)));

  return (
    <section className="section-wrapper" id="projects">
      <h2 className="section-title">
        <FaFolderOpen style={{ marginRight: "10px", verticalAlign: "middle" }} />
        Projects
      </h2>

      <div className="filter-buttons">
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={filter === tag ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredProjects.map((p, i) => (
          <div className="card" data-aos="fade-up" key={i}>
            {p.icon}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
