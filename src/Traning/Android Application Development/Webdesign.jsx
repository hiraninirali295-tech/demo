import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Android Application  Development.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Android Application Development</h1>

          <p>
            Design, develop, and deploy Android applications with confidence.
            Work on live projects and industry-focused training.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Java</span>
        <span>Kotlin</span>
        <span>Android Studio</span>
        <span>XML Layouts</span>
        <span>SQLite</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;