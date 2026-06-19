import React from "react";
import "./Process.css";
import { MdArrowOutward } from "react-icons/md";

const processData = [
  {
    title: "Planning & Analysis",
    points: [
      "Requirement Gathering",
      "Goal Planning",
      "Project Discussion",
      "Workflow Strategy",
      "Technology Selection",
      "Solution Planning",
    ],
  },

  {
    title: "Research",
    points: [
      "Market Research",
      "Trend Analysis",
      "User Research",
      "Competitor Analysis",
      "Security Research",
      "Technology Exploration",
    ],
  },

  {
    title: "Design & Development",
    points: [
      "UI/UX Designing",
      "Frontend Development",
      "Backend Development",
      "Responsive Design",
      "Database Integration",
      "Clean Coding Structure",
    ],
  },

  {
    title: "Implementation",
    points: [
      "Project Deployment",
      "Feature Integration",
      "Performance Setup",
      "System Configuration",
      "Client Review",
      "Final Launch Process",
    ],
  },

  {
    title: "Maintenance",
    points: [
      "Regular Updates",
      "Technical Support",
      "Security Monitoring",
      "Backup Management",
      "Performance Optimization",
      "Future Improvements",
    ],
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* TOP */}

        <div className="process-top">
          <span className="process-subtitle">
            Our Work Process <MdArrowOutward />
          </span>

          <h1 className="process-title">
            Our Step-by-Step Process
            <br />
            to Build Success
          </h1>
        </div>

        {/* PROCESS CARDS */}

        <div className="process-wrapper">
          {processData.map((item, index) => (
            <div
              className={`process-card process-card-${index + 1}`}
              key={index}
            >
              <div className="process-line"></div>

              <div className="process-content">
                <h3>{item.title}</h3>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;