import React from "react";
import "./Tool.css";

import img1 from "../../../img/1.png";
import img2 from "../../../img/2.png";
import img3 from "../../../img/3.png";
import img4 from "../../../img/4.png";
import img5 from "../../../img/5.png";
import img6 from "../../../img/6.png";
import img7 from "../../../img/4.png";
import img8 from "../../../img/3.png";

export default function ToolsSoftware() {
  return (
    <>
      <section className="tools-section">
        <div className="tools-container">

          {/* Floating Images */}

          <div className="floating-img img1">
            <img src={img1} alt="tool-img" />
          </div>

          <div className="floating-img img2">
            <img src={img2} alt="tool-img" />
          </div>

          <div className="floating-img img3">
            <img src={img3} alt="tool-img" />
          </div>

          <div className="floating-img img4">
            <img src={img4} alt="tool-img" />
          </div>

          <div className="floating-img img5">
            <img src={img5} alt="tool-img" />
          </div>

          <div className="floating-img img6">
            <img src={img6} alt="tool-img" />
          </div>

          <div className="floating-img img7">
            <img src={img7} alt="tool-img" />
          </div>

          <div className="floating-img img8">
            <img src={img8} alt="tool-img" />
          </div>

          {/* Center Content */}

          <div className="tools-content">
            <h1>Tools & Software</h1>
            <p>Our toolkit for digital innovation</p>
          </div>

        </div>
      </section>
    </>
  );
}
