import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/UIUX Design.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Ui/Ux Design</h1>

          <p>
            Design intuitive digital experiences with a user-first approach.
            Gain real-world experience through industry-focused projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Figma</span>
        <span>Adobe XD</span>
        <span>Sketch</span>
        <span>Miro</span>
        <span>Accessibility Design</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;