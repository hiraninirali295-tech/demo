import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../img/test-4.png";
import img2 from "../img/test-4.png";
import img3 from "../img/test-4.png";
import img4 from "../img/test-4.png";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./Teamsection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const TeamSlider = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const nextSlide = () => {
    const cardWidth = sliderRef.current.offsetWidth / 4;
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const cardWidth = sliderRef.current.offsetWidth / 4;
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const team = [
    {
      img: img1,
      name: "CEO",
      role: "Chief Executive Officer",
      onClick: () => navigate("/ceopage"),
    },
    {
      img: img2,
      name: "COO",
      role: "Chief Operating Officer",
      onClick: () => navigate("/coopage"),
    },
    {
      img: img3,
      name: "Designer",
      role: "UI/UX Designer",
    },
    {
      img: img4,
      name: "React Dev",
      role: "React Developer",
    },
    {
      img: img4,
      name: "Web Dev",
      role: "Web Developer",
    },
    {
      img: img4,
      name: "Web Dev",
      role: "Web Developer",
    },
    {
      img: img4,
      name: "Web Dev",
      role: "Web Developer",
    },
    {
      img: img4,
      name: "Web Dev",
      role: "Web Developer",
    },
  ];

  return (
    <>
      <section className="visionaries-section">
        <div className="container-fluid">
          <div className="visionaries-wrapper">
            {/* LEFT */}
            <div className="visionaries-left">
              {/* <span className="team-label">
                Meet Our Team <MdArrowOutward/>
              </span> */}

              <span className="team-label" data-text="Meet Our Team">
                <span className="team-label-inner">Meet Our Team</span>
                <MdArrowOutward className="team-icon" />
              </span>

              <h2 className="teamsection">
                Behind the <br />
                Visionaries
              </h2>
            </div>

            {/* RIGHT */}
            <div className="visionaries-right">
              <p>
                Creative experts designing meaningful digital experiences that
                help ambitious brands grow faster and lead their markets.
              </p>

              <button className="join-btn">
                Join Our Team <GoArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container-fluid">
          <div className="row header-row align-items-center">
            <div className="col-lg-6"></div>

            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0"></div>
          </div>

          <div className="custom-slider" ref={sliderRef}>
            {team.concat(team).map((item, index) => (
              <div
                className={`team-card ${index % 2 === 0 ? "up" : "down"}`}
                key={index}
                onClick={item.onClick}
                style={{ cursor: item.onClick ? "pointer" : "default" }}
              >
                <div className="team-img">
                  <img src={item.img} alt="" />
                </div>

                <div className="overlay">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>

                {/* ARROW */}
                <div className="top-arrow"><MdArrowOutward /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSlider;

