import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/AI (Artificial Intelligence).png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Ai Course</h1>

          <p>
            Learn Artificial Intelligence and build smart systems that can analyze, learn, and make decisions.
            Gain hands-on experience with Machine Learning, Deep Learning, and real-world AI projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>Natural Language Processing</span>
        <span>Generative AI</span>
        <span>AI Project Development</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;