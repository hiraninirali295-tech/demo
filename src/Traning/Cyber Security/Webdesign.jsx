import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Cyber Security.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Cyber Course</h1>

          <p>
            Learn ethical hacking, vulnerability assessment, and cyber defense.
            Develop industry-ready skills through hands-on projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Network Security</span>
        <span>Ethical Hacking</span>
        <span>Operating Systems Security</span>
        <span>Web Application Security</span>
        <span>Cyber Security Tools</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;