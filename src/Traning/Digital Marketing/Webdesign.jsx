import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Digital Marketing.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Digital Marketing</h1>

          <p>
            Build in-demand digital marketing skills from scratch.
            Gain hands-on experience through real-world campaigns.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Google Ads</span>
        <span>Pay-Per-Click (PPC)</span>
        <span>Social Media Marketing (SMM)</span>
        <span>Facebook Marketing</span>
        <span>Instagram Marketing</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;