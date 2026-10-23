import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Game Development.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Game Development Course</h1>

          <p>
            Master game development using modern tools and technologies.
            Create immersive gaming experiences from concept to deployment.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Game Development Fundamentals</span>
        <span>Unity Game Engine</span>
        <span>2D & 3D Game Development</span>
        <span>Game Physics & Animation</span>
        <span>Game UI/UX Design</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;