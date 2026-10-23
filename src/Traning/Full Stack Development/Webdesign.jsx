import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Full stack.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Full Stack Development</h1>

          <p>
            Learn Full Stack Development from basic to advanced level.
            Build dynamic and responsive web applications.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
        <span>Git & GitHub</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;