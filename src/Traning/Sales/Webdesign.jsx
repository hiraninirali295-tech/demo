import React from "react";
import "./Webdesign.css";
import bannerImg from "../../img/Sales.png";

const WebDesignSection = () => {
  return (
    <section className="webdesign-section">

      {/* Hero Section */}
      <div className="webdesign-hero">
        <div className="hero-content">
          <h1>Sales Course</h1>

          <p>
            Learn how to design professional, user-friendly, and fully
            responsive websites from basic to advanced level with real-world
            projects.
          </p>
        </div>
      </div>

      {/* Skills Navigation */}
      <div className="webdesign-skills">
        <span>Sales Fundamentals</span>
        <span>Customer Relationship Management (CRM)</span>
        <span>Sales Funnel Management</span>
        <span>Customer Communication Skills</span>
        <span>Sales Analytics & Reporting</span>
      </div>

      {/* Image Section */}
      <div className="webdesign-image">
        <img src={bannerImg} alt="Web Design" />
      </div>

    </section>
  );
};

export default WebDesignSection;