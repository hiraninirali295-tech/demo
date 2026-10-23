import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import "./Customapp.css";
import img1 from "../../../img/productconsulting.jpg"

import mobileImg from "../../../img/productconsulting.jpg";

const CustomApp = () => {
  return (
    <section className="appdev-section">
      <div className="container">

        <div className="appdev-wrapper mt-5">

          <div className="appdev-left">

            <h1 className="appdev-title">
              Product 
              <br />

              <span className="appdev-hover-wrapper">

                {/* <span className="appdev-text-left">
                  App
                </span> */}

                <img
                  src={img1}
                  alt="user"
                  className="appdev-user-img"
                />

                <span className="appdev-text-right">
                  Consulting
                </span>

              </span>

            </h1>

            <p className="appdev-desc">
             Our product consulting services help define the right strategy, features
             and roadmap to build innovative, scalable, and user-focused solutions.
            </p>

          </div>

          <div className="appdev-right">

            <div className="appdev-image-wrapper">

              <img
                src={mobileImg}
                alt="custom app"
                className="appdev-main-img"
              />

              <div className="appdev-circle-btn">

                <svg
                  className="appdev-circle-svg"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="appdevCirclePath"
                      d="
                      M 50,50
                      m -38,0
                      a 38,38 0 1,1 76,0
                      a 38,38 0 1,1 -76,0
                    "
                    />
                  </defs>

                  <text className="appdev-circle-text">
                    <textPath href="#appdevCirclePath" startOffset="0%">
                     • GROW DEVELOPER • GROW DEVELOPER •
                    </textPath>
                  </text>

                </svg>

                <div className="appdev-arrow">
                  <RiArrowRightUpLine />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomApp;