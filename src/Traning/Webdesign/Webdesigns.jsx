import React from "react";
import "./Webdesigns.css";
import bannerImg from "../../img/webdesign.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

     
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Web Design Course</h1>

          <p>
            Learn how to design professional, user-friendly, and fully
            responsive websites from basic to advanced level with real-world
            projects.
          </p>
        </div>
      </div>

    
      <div className="webdesign-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
        <span>VS Code</span>
      </div>

     
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;