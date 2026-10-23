import React from "react";
import "./Teamsection.css";
import { GoArrowUpRight } from "react-icons/go";

import img1 from "../img/test-1.png";
import img2 from "../img/test-1.png";
import img3 from "../img/test-1.png";
import img4 from "../img/test-1.png";
import img5 from "../img/test-1.png";
import img6 from "../img/test-1.png";

const teamMembers = [
  {
    image: img1,
    name: "Jaydip Italiya",
    role: "Chief Executive Officer (CEO)",
  },
  {
    image: img2,
    name: "Utsav Italiya",
    role: "Chief Operating Officer (COO)",
  },
  {
    image: img3,
    name: "Jodhani Kaksha",
    role: "UI UX & Graphic Designer",
  },
  {
    image: img4,
    name: "Amit Agravat",
    role: "React JS Developer",
  },
  {
    image: img5,
    name: "Nirali Hirali",
    role: "Web Developer",
  },
  {
    image: img6,
    name: "Jay Patel",
    role: "Flutter Developer",
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="container-fluid">

        <div className="team-top">

          <div className="team-left">
            {/* <span className="team-tag">
              Meet Our Team <GoArrowUpRight />
            </span> */}
            <span className="team-tag">

              <span className="team-tag-wrap">
                <span className="team-tag-text">Meet Our Team</span>
                <span className="team-tag-text-hover">Meet Our Team</span>
              </span>

              <span className="team-tag-icon-wrap">
                <span className="team-tag-icon">
                  <GoArrowUpRight />
                </span>

                <span className="team-tag-icon-hover">
                  <GoArrowUpRight />
                </span>
              </span>

            </span>

            <h1 className="team-title">
              The Minds Behind
              <br />
              Every Digital Success
            </h1>
          </div>

          <div className="team-right">
            <p className="team-description">
              Our talented team combines creativity,<br />
              technology, and innovation to transform <br />
              ideas into powerful digital solutions.
            </p>

            {/* <button className="join-btn">
              Join Our Team <GoArrowUpRight />
            </button> */}

            <button className="join-btn">

              <span className="join-text-wrap">
                <span className="join-text">Join Our Team</span>
                <span className="join-text-hover">Join Our Team</span>
              </span>

              <span className="join-icon-wrap">
                <span className="join-icon">
                  <GoArrowUpRight />
                </span>

                <span className="join-icon-hover">
                  <GoArrowUpRight />
                </span>
              </span>

            </button>
          </div>

        </div>

        <div className="team-grid">
          {teamMembers.map((item, index) => (
            <div
              key={index}
              className={`team-card ${index % 2 === 0 ? "bottom-card" : "top-card"
                }`}
            >
              <img src={item.image} alt={item.name} />

              <div className="card-overlay">
                <div className="card-arrow">
                  <GoArrowUpRight />
                </div>

                <div className="member-info">
                  <h5>{item.name}</h5>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;