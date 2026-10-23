import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Video Editing.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Video Editing Course</h1>

          <p>
            Transform raw footage into high-quality videos with industry-standard tools.
            Gain hands-on experience through real-world editing projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Adobe Premiere Pro</span>
        <span>Adobe After Effects</span>
        <span>Typography & Animated Text</span>
        <span>AI-Powered Video Editing Tools</span>
        <span>Transitions & Visual Effects</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;