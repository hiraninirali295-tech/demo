import React from "react";
import "./Ourworkprocess.css";
import { MdArrowOutward } from "react-icons/md";
const processData = [
  {
    title: "Planning & Analysis",
    items: [
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
    items: [
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
    items: [
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
    items: [
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
    items: [
      "Regular Updates",
      "Technical Support",
      "Security Monitoring",
      "Backup Management",
      "Performance Optimization",
      "Future Improvements",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="container">
        <p className="subtitle">Our Work Process <MdArrowOutward /></p>

        <h2>
          Our Step-by-Step Process <br />
          to Build Success
        </h2>

       <div className="process-wrapper">
  {processData.map((process, index) => (
    <div className="process-card" key={index}>

      {/* TITLE BACKGROUND STEP */}
      <div className={`top-line step-${index + 1}`}>
        <h6 className="titlework">{process.title}</h6>
      </div>

      <div className="line"></div>

      <ul>
        {process.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default ProcessSection;