import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Flutter Application Development.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Flutter Application Development</h1>

          <p>
            Master Flutter development from basic to advanced level.
            Build fast, responsive, and modern mobile applications.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Dart</span>
        <span>Flutter</span>
        <span>Flutter SDK</span>
        <span>Android Studio</span>
        <span>Firebase</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;