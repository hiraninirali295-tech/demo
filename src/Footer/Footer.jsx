import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import helmet from "../img/Group 148.png";

const Footer = () => {
  return (
    <section className="growdeveloper-footer">
      <div className="growdeveloper-container">

        {/* Top Content */}
        <div className="growdeveloper-top">

          <div className="growdeveloper-contact">
            <p>+91 96627 48007</p>
            <p>+91 1570 60417</p>

            <a href="mailto:hr@growdeveloper.com">
              hr@growdeveloper.com
            </a>
          </div>

          <div className="growdeveloper-address">
            <p>
              248–249, KBC-(Kedar Business Center),<br />
              Dabholi Road, Katargam, Surat,
              Gujarat 395004.
            </p>
          </div>

          <div className="growdeveloper-service-box">
            <h5>Our Services</h5>

            <ul>
              <li>Web Design & Development</li>
              <li>Application Development</li>
              <li>Software Development</li>
              <li>Graphics Design</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          <div className="growdeveloper-service-box">
            <h5>Our Courses</h5>

            <ul>
              <li>Web Design & Development</li>
              <li>Application Development</li>
              <li>Graphics Design</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Cyber Security</li>
            </ul>
          </div>

        </div>

        {/* Brand Area */}
        <div className="growdeveloper-brand-section">

          {/* <h1 className="growdeveloper-brand-title">
            Grow
            <span>Developer</span>
          </h1> */}

          <div className="growdeveloper-footer-img">
            <img src={helmet} alt="Grow Developer" />
          </div>

        </div>

        {/* Social Links */}
        <div className="growdeveloper-social-bar">

          <div>[ Linkedin ]</div>

          <div>[ Facebook ]</div>

          <div>[ Instagram ]</div>

        </div>

      </div>
    </section>
  );
};

export default Footer;