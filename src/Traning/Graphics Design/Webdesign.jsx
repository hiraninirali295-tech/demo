import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Graphics Design.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Graphics Design</h1>

          <p>
            Bring your ideas to life with creative graphic design.
            Gain practical experience with industry-focused projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Adobe Photoshop</span>
        <span>Adobe Illustrator</span>
        <span>CorelDRAW</span>
        <span>Canva</span>
        <span>Logo Design</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;