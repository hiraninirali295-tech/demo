import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/web development.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Web Development Course</h1>

          <p>
            Master web development from basic to advanced level 
            and create professional websites with hands-on experience
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>JavaScript</span>
        <span>React </span>
        <span>Bootstrap</span>
        <span>Node.js</span>
        <span>Express.js</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;