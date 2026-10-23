import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/IOS Application Development.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Ios Application Development</h1>

          <p>
            Learn iOS app development with Swift and Xcode.
            Build powerful applications for Apple devices.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Swift</span>
        <span>Xcode</span>
        <span>SwiftUI</span>
        <span>UIKit</span>
        <span>VIPER</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;