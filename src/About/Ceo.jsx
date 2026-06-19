import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ceo.css";

import ceoImg from "../img/318add172bc5e159644a9e516e91950956ecf23a.png";

const CEOSection = () => {
  return (
    <section className="ceo-wrapper">

      <div className="container-fluid">

        <div className="row align-items-center gy-5">

          
          <div className="col-lg-5 col-md-12">

            <div className="ceo-card">

              <div className="ceo-image-box">
                <img src={ceoImg} alt="CEO" />
              </div>

              <div className="ceo-info-box">

                <div className="ceo-name-role">
                  <h4 className="ceo-name">Jaydip Italiya</h4>
                  <span className="ceo-role">Chief Executive Officer (CEO)</span>
                </div>

              </div>

            </div>

          </div>

         
          <div className="col-lg-7 col-md-12">

            <div className="ceo-content-box">

              <p className="ceo-subtitle">
                Chief Executive Officer (CEO) ↗
              </p>

              <h1 className="ceo-title-main">Jaydip Italiya</h1>

              <p className="ceo-description">
                As the CEO of our Grow Developer IT company, I am deeply
                committed to fostering a culture of inspiration and empowerment
                among our team members.
              </p>

              <div className="ceo-achievement">

                <h5>Key Achievements</h5>

                <ul>
                  <li>Web Developer</li>
                  <li>Cyber Security Analyst</li>
                  <li>Career Counsellor</li>
                </ul>

              </div>

              <div className="ceo-contact">

                <h5>Contact</h5>

                <p>jaydipitaliya7@gmail.com</p>
                <p>+91 96627 48007</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CEOSection;


